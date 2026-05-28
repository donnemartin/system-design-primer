## Cost-aware system design

*[Discuss](#cost-aware-system-design)*

Designing for correctness and scale is necessary but not sufficient.  Real
systems must also be **economically viable** at every traffic level.  Cost
optimisation is a first-class design concern because:

* Cloud and SaaS vendors charge in fundamentally different ways (per-seat,
  per-call, tiered, committed-use); picking the wrong model turns a profitable
  product into a money-losing one at scale.
* Many architectural patterns (fan-out, caching, async queues) exist
  *precisely* because they reduce cost, not only latency.
* Engineers who can reason about cost trade-offs are significantly more
  effective in cross-functional product discussions.

---

### Pricing model taxonomy

| Model | Also called | Typical vendor examples | Cost driver |
|---|---|---|---|
| **Per-seat / flat-rate** | Subscription, per-user | Salesforce, GitHub Teams, most SaaS | Number of licensed users; cost is fixed per period |
| **Per-call / pay-per-use** | Consumption, metered | Stripe, Twilio, AWS Lambda, most REST APIs | Each invocation or unit of data |
| **Tiered / volume** | Bundled | SendGrid, Datadog | Discounted rate after threshold |
| **Committed-use / reserved** | Enterprise contract | AWS Savings Plans, GCP CUDs | Upfront commitment traded for lower unit price |
| **Freemium** | — | PagerDuty, Slack legacy | Free tier up to a limit; hard cost cliff |

Choosing the wrong model for your usage pattern is one of the most common and
expensive architecture mistakes.

---

### Per-seat vs per-call: break-even analysis

**Per-seat** is cheaper when a *small number of users* make *many calls*:

```
break_even_users = per_call_cost_per_action * avg_actions_per_user_per_period
                   ─────────────────────────────────────────────────────────
                              per_seat_price_per_period
```

**Example:** A search API costs $0.002/call.  A per-seat licence is $20/month.
If average users make 15,000 searches/month the per-call cost is $30 — the
per-seat model saves 33%.  If users average only 500 searches/month the
per-call cost is $1 — per-seat is 20× more expensive.

```
At 500 searches/user/month:
  Per-call:  500 × $0.002 = $1.00  ← winner
  Per-seat:              = $20.00

At 15,000 searches/user/month:
  Per-call:  15,000 × $0.002 = $30.00
  Per-seat:                  = $20.00  ← winner
```

**Rule of thumb:** model your *distribution* of usage, not the average.  A
heavy-tail distribution (a few power users) can swing the decision
significantly compared to a uniform distribution.

---

### Fan-out and per-call cost

Fan-out (one inbound event triggers many outbound calls — e.g. a social-media
post delivered to N followers) **multiplies per-call costs** directly.

```
total_cost = inbound_events × fan_out_factor × cost_per_downstream_call
```

**Strategies to control fan-out costs:**

1. **Push-on-write only for active users** — Twitter's hybrid fan-out model
   avoids writing to the cache of users who have not logged in recently.
   Inactive users get their feed assembled on read, eliminating wasted writes.

2. **Batch downstream calls** — instead of N individual API calls, accumulate
   events for 50–500 ms and issue a single batch request where the downstream
   API supports it (e.g. SQS `SendMessageBatch`, Segment Batch API).

3. **Coalesce duplicate work** — if 1,000 users all request the same resource
   within a short window, serve them from a single upstream fetch
   (request coalescing / thundering-herd prevention).

4. **Dead-letter fan-out** — route fan-out for low-priority or inactive
   recipients to a cheaper tier (e.g. cold-storage queue vs hot notification
   pipeline).

---

### Cap-and-shed patterns for metered APIs

When a third-party API charges per call, unbounded usage becomes a financial
risk as well as an operational one.  **Cap-and-shed** is the family of
patterns that limits spend while gracefully degrading service.

#### Token-bucket rate limiter (client-side)

Apply a [token bucket](https://en.wikipedia.org/wiki/Token_bucket) on the
*calling* side to ensure you never exceed your budget regardless of inbound
traffic:

```python
import time
import threading

class BudgetRateLimiter:
    """Limits calls to an external metered API to stay within a cost budget."""

    def __init__(self, calls_per_second: float, max_burst: int = 10):
        self.rate = calls_per_second
        self.tokens = max_burst
        self.max_tokens = max_burst
        self.last_refill = time.monotonic()
        self._lock = threading.Lock()

    def _refill(self):
        now = time.monotonic()
        elapsed = now - self.last_refill
        self.tokens = min(
            self.max_tokens,
            self.tokens + elapsed * self.rate
        )
        self.last_refill = now

    def acquire(self, tokens: int = 1) -> bool:
        """
        Returns True if the call is allowed; False if it should be shed.
        Callers should degrade gracefully on False (return cached result,
        queue for later, or return a 429 to their own client).
        """
        with self._lock:
            self._refill()
            if self.tokens >= tokens:
                self.tokens -= tokens
                return True
            return False


# Usage example
limiter = BudgetRateLimiter(calls_per_second=10, max_burst=50)

def enrich_address(address: str) -> dict:
    if not limiter.acquire():
        # Shed: return cached/stale data or a degraded response
        return get_cached_or_default(address)
    return geocoding_api.lookup(address)  # metered call
```

#### Spend circuit-breaker

Track *cumulative cost* in a rolling window and open a circuit when you
approach a budget threshold:

```python
from dataclasses import dataclass, field
from collections import deque

@dataclass
class SpendCircuitBreaker:
    budget_per_hour_usd: float
    cost_per_call_usd: float
    _window: deque = field(default_factory=deque)  # timestamps of calls

    def _prune(self):
        cutoff = time.monotonic() - 3600  # 1-hour rolling window
        while self._window and self._window[0] < cutoff:
            self._window.popleft()

    @property
    def current_spend_usd(self) -> float:
        self._prune()
        return len(self._window) * self.cost_per_call_usd

    def allow(self) -> bool:
        self._prune()
        if self.current_spend_usd >= self.budget_per_hour_usd:
            return False          # circuit open
        self._window.append(time.monotonic())
        return True               # circuit closed — call allowed
```

#### Shedding strategies (ordered by user impact, least to most)

| Strategy | Description | User impact |
|---|---|---|
| **Serve stale cache** | Return the most recent cached result without a fresh API call | Invisible if TTL is reasonable |
| **Probabilistic sampling** | Enrich only *p%* of requests; use heuristics for the rest | Slight quality degradation |
| **Priority queuing** | Shed low-priority traffic; guarantee quota for high-priority paths | Low-priority users see degraded service |
| **Graceful 429** | Return a retryable error with `Retry-After` header | Client must handle the error |
| **Feature flag disable** | Turn off the enrichment feature entirely until the budget resets | Feature unavailable |

---

### Flat-rate contracts vs pay-per-call: decision framework

Negotiating a flat-rate (committed-use) contract makes sense when:

1. **Usage is predictable** — variance is low enough that you won't massively
   over-pay during slow periods.
2. **Volume is high** — the per-call effective rate in a flat contract is
   meaningfully below list pay-per-call pricing (typically requires ≥ 50%
   utilisation of the committed volume to break even).
3. **Negotiating leverage exists** — multi-year, large-dollar contracts unlock
   better rates and SLAs.
4. **Vendor lock-in risk is acceptable** — committed contracts make migration
   more expensive; pair with an abstraction layer.

Pay-per-call is preferable when:

* Traffic is bursty, seasonal, or early-stage (hard to forecast).
* You want to move fast without contractual overhead.
* Vendor-switching is likely (greenfield, competitive market).

**Decision matrix:**

```
                        │  Predictable usage  │  Unpredictable usage
────────────────────────┼─────────────────────┼──────────────────────
High volume             │  Flat-rate contract  │  Pay-per-call + cap
Low/medium volume       │  Pay-per-call        │  Pay-per-call
Prototype / pre-product │  Pay-per-call        │  Pay-per-call
```

---

### Cost-allocation tagging as an architectural practice

At scale, knowing *which* service or customer drives cost is as important as
controlling total cost.  Architect cost-allocation from day one:

* **Tag all external API calls** with the internal service, feature, and
  (where privacy permits) tenant that triggered them.
* **Expose per-tenant cost** in your billing model — if a customer's usage
  costs you $50/month but they pay $10/month, the unit economics are broken.
* **Build cost dashboards** alongside latency and error-rate dashboards.
  Cost spikes are often the first signal of a runaway bug (e.g. a retry loop
  making unbounded API calls).

---

### Source(s)

* [AWS Cost Optimization Pillar — Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html)
* [Stripe Engineering — Idempotency and cost control](https://stripe.com/blog/idempotency)
* [Twitter Engineering — Timelines at Scale](https://www.infoq.com/presentations/Twitter-Timeline-Scalability/)
* [Google SRE Book — Chapter 26: Data Integrity](https://sre.google/sre-book/data-integrity/)
