---
name: Interview Solution Navigator
description: Use curated object-oriented and system design notes to craft thorough interview answers.
---

## Overview
Use this Skill when responding to object-oriented design or system design interview prompts. It condenses the repository’s study materials into actionable guidance so Claude can reason directly from the summaries below without reaching for other files.

## How to Use
1. Restate the prompt and capture must-have capabilities, scale expectations, and constraints.
2. Choose the matching scenario in the Object-Oriented or System Design playbook.
3. Gather the listed insights: entities, relationships, algorithms, data shapes, scaling moves, and trade-offs.
4. Structure the answer with a short summary, followed by detailed sections for requirements, design, data flow, and improvements.
5. Close with follow-up considerations or related practice topics drawn from the same playbook.

## Object-Oriented Design Playbook
### Call Center Escalation
- Employee hierarchy: Operator → Supervisor → Director. Each rank can escalate unresolved calls upward.
- `CallCenter` dispatches calls, tracks idle staff, and manages a queue for overflow. Calls track state (`READY`, `IN_PROGRESS`, `COMPLETE`) and assigned employee.
- Escalation sequence: employee marks call as ready, raises target rank, and re-dispatches through the center.
- Extend by implementing notification hooks for completed/escalated calls and logic to route queued calls to newly available employees.

### Deck of Cards & Blackjack
- Core abstractions: `Card` (immutable suit, rank, value), `Deck` (creates standard 52-card set, supports shuffle and draw), `Hand` (cards with scoring rules), and `Game` coordinator.
- Blackjack specifics: Ace counts as 1 or 11; bust detection; dealer behavior (hit until 17); betting and payout tracking.
- Emphasize shuffle randomness guarantees and methods to reset the deck between rounds.

### Hash Map Implementation
- Bucket array sized to a power of two; hash function distributes keys; collisions handled with chaining via linked lists or dynamic arrays.
- Operations: `put` updates or appends entries; `get` scans bucket for key; `delete` removes and compacts list.
- Resize strategy doubles capacity when load factor threshold (e.g., 0.75) is exceeded to retain near O(1) expected access time.
- Extensions: custom hashers, thread-safe wrappers, ordered iteration.

### LRU Cache
- Combines a hash map (key → node) with a doubly linked list ordered by recency.
- `get` returns value and moves node to front; `put` inserts or updates, evicting from tail when capacity reached.
- Constant-time node updates rely on stored `prev` and `next` references; sentinel head/tail nodes simplify edge cases.
- Discuss optional TTL support, write-through persistence, or segmented eviction policies.

### Online Chat Service
- Entities: `User`, `Conversation` (one-to-one or group), `Message`, `PresenceService`, and `NotificationService`.
- Real-time channel handles message fan-out, presence updates, typing indicators, and delivery receipts.
- Persistence layer stores conversations, unread counts, and attachments; background jobs reconcile offline delivery and message retention.
- Scaling guidance: shard conversations by ID, isolate presence tracking in memory stores, and queue heavy operations (e.g., media processing).

### Parking Lot Management
- Model `ParkingLot` containing `Floor`s with typed `ParkingSpot`s (motorcycle, compact, large). Vehicles declare footprint (motorcycle, car, bus).
- Allocation rules: motorcycles fit anywhere; compact cars fit compact or large; buses require consecutive large spots on a single floor.
- Ticketing workflow includes entry gate issuance, time stamping, payment calculation, and exit validation.
- Edge cases: full lot handling, reservations, dynamic pricing, accessible parking prioritization.

## System Design Playbook
### Paste Sharing Platform
- Features: anonymous text pastes, optional expiration, fast retrieval, basic analytics, high availability.
- Workflow: client hits load-balanced web tier; write API generates unique 7-character key (hash + Base62) ensuring uniqueness before persisting metadata; paste body stored in object storage; read API serves content, caching hot pastes.
- Expiration handled via scheduled sweeps marking and deleting expired records; analytics batch jobs aggregate log data into monthly stats.
- Scalability levers: CDN/cache for read-heavy traffic, master–replica databases with read replicas, sharding or NoSQL once writes surge, background queues for analytics and cleanup.

### Personal Finance Aggregator
- Steps: securely collect account credentials, schedule aggregation jobs, normalize transactions, categorize spending, compute budgets, and surface alerts.
- Services: ingestion gateway, account sync workers, transaction classification engine, analytics datastore, reporting API, notification pipeline.
- Security posture: encrypt credentials, use token exchange, enforce least privilege access, audit access logs, and isolate sensitive services.
- Scaling: partition jobs by institution, retry with exponential backoff, leverage message queues for long-running sync tasks, precompute dashboards for quick load times.

### Query Result Cache Layer
- Intercepts expensive read queries and serves them from an in-memory or distributed cache.
- Loading pattern: cache-aside for reads (populate on miss), write-through or write-behind for mutations depending on consistency requirements.
- Eviction mixes LRU with TTL to prevent stale data; incorporate cache warming for known hotspots and metrics for hit/miss, latency, and eviction churn.
- Address failure by designing graceful degradation (fallback to primary store) and replicating cache nodes.

### Sales Ranking with MapReduce
- Input: large purchase or clickstream logs. Output: ranked product lists per time window.
- Map phase emits `(period, product_id)` pairs; Reduce phase sums counts to produce rankings; final job writes aggregated tables for downstream recommendation or merchandising services.
- Optimizations: combiners to reduce shuffle volume, partitioners keyed by period, incremental recomputation for fresh data.
- Considerations: manage storage for intermediate results, schedule jobs during off-peak hours, validate data integrity before publishing rankings.

### Large-Scale Web Crawler
- Components: URL frontier (priority queue with politeness constraints), fetchers honoring robots directives, content parser, duplicate detector, storage/indexer.
- Techniques: Bloom filters to avoid revisits, adaptive politeness delays per host, distributed coordination for frontier partitions, checkpointing to resume after failures.
- Scaling: horizontal fetcher pools, content hashing for deduplication, pipeline staging for parsing, indexing, and link extraction.
- Address legal/ethical requirements: respect robots.txt, identify user agent, throttle requests.

### Social Graph Insights
- Maintain user nodes with friendship edges; compute friend suggestions via mutual connections, shared groups, or behavioral signals.
- Services: graph datastore, recommendation engine, feed personalization service, notification dispatcher.
- Precompute heavy analytics offline (e.g., PageRank-style scores) and serve incremental updates via streaming jobs.
- Scaling tactics: cache adjacency lists, partition graph by user ID, apply rate limits to expensive queries, and expose APIs with pagination.

## Response Template
- **Summary:** 2–3 sentences naming the solution and headline benefits.
- **Requirements & Assumptions:** Capture explicit and inferred expectations.
- **Design Detail:** Explain core classes or system components, interactions, and data structures.
- **Trade-offs & Extensions:** Discuss alternative approaches, scaling paths, and future enhancements.
- **Next Steps:** Offer related practice prompts or deeper dives to continue the session.

## Example Prompts
- “Design an object-oriented parking lot system.” → Lean on the parking lot playbook to describe spot types, allocation logic, ticketing flow, and edge cases such as oversized vehicles or full capacity.
- “Architect a paste sharing service that scales globally.” → Apply the paste platform playbook to cover key generation, storage design, caching, expiration handling, analytics, and scaling strategies.

## Limitations
- The summaries focus on the scenarios listed above; redirect unrelated algorithmic or domain-specific topics to general reasoning.
- Detailed compliance, cost modeling, or third-party integration specifics fall outside this Skill’s scope and should be flagged as follow-up work.
