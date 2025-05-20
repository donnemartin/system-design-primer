## System design topics: start here

New to system design?

First, you'll need a basic understanding of common principles, learning about what they are, how they are used, and their pros and cons.

###  Concise Introduction to Web Application Deployment & Scaling Basics

Below is a concise introduction that covers the essentials of hosting, scaling, and securing a web application.

---

## 🌐 1. From Local Development to Production Hosting

Your app works on **localhost**, but to serve real users you need

* A **web server**—an always-on computer listening for HTTP(S) requests—and
* A **network endpoint** (domain, IP) reachable over the Internet.


* **Local**: Build & test on your own machine (“localhost”).
* **Production**: To open your app to the world, you “deploy” it on a server—an Internet-connected computer (on‑premise or cloud) that handle HTTP(S) requests.

### On‑Premise vs. Cloud

* **On-Premise**
    – Servers live in your own data center or office.
    – You manage hardware, networking, power, physical security.
    – Full control—but large up-front cost, maintenance burden, and limited elasticity.

* **Cloud**
    – Servers are virtual machines (or containers) provided by AWS, Azure, GCP, etc.
    – You “rent” capacity on demand, with minimal hardware upkeep.
    – Extremely flexible: spin up/down servers as traffic fluctuates.

### Hosting Options

| Option          | Pros                                        | Cons                                |
| --------------- | ------------------------------------------- | ----------------------------------- |
| Shared Hosting  | Low cost, easy setup                        | Limited resources, poor isolation   |
| VPS             | Dedicated slice, more control               | Moderate cost, manual scaling       |
| Dedicated/Cloud | Full control, high performance, autoscaling | Higher cost, operational complexity |


---

## 📈 2. Why Scale? Understanding Traffic Limits

Every server has finite CPU, memory, and network bandwidth. If too many users connect simultaneously, response times slow or the server crashes. To serve growing traffic without downtime, we must **scale**.


### Vertical Scaling (Scale Up)

* Replace your server with a beefier instance: more CPU cores, RAM, disk I/O.

* **Pros**: simple (“just upgrade”).

* **Cons**: physical limits exist, costs rise steeply for top-end hardware, single point of failure.

### Horizontal Scaling (Scale Out)

* Run multiple identical servers (instances) in parallel.

* Each handles a share of traffic; adding servers increases overall capacity.

* **Pros**: virtually unlimited growth, better fault tolerance.

* **Cons**: Traffic distribution, state sharing, consistent deployments..


---

## 🔄 3. Traffic Distribution: Load Balancers

A **load balancer** sits in front of multiple app servers and routes each incoming request.

### Algorithms

* **Round‑Robin**: Simple, equitable distribution.
* **Random**: Quick but uneven risk.
* **Least Connections**: Routes to the least busy node.

### Session Consistency

* **Sticky Sessions**: Keep user on one server—easy but may overload a node.
* **Central Store**: Redis or shared database holds session data—any server can authenticate users.
* **Token‑Based**: JWT or signed cookies store session in client.

## 4. Autoscaling for Elastic Capacity

**Autoscaler** dynamically changes server count based on metrics (CPU%, RPS).

* **Min/Max** instance limits
* **Scaling Policies**: e.g., +1 VM per 70% CPU, remove VM if CPU < 30% for 5 minutes

**Pros**: Cost‑efficient, handles spikes automatically
**Cons**: Cold‑start delays, orchestration overhead

---

## 5. Scaling the Data Layer

### Partitioning (Sharding)

* **Vertical**: Normalize tables into smaller related tables
* **Horizontal**: Distribute rows across shards by key range, geography, user group

### Replication

* **Single‑Primary**: Master handles writes; replicas handle reads
* **Multi‑Primary**: All nodes write; complex conflict resolution

### Caching

* **Client**: Browser caches static assets with max-age & ETag headers
* **Server**: In‑memory (Redis/Memcached) for query results, page fragments, full pages, framework caches (Django view/fragment)

Caching reduces database load and accelerates response times.

---

## 6. Asynchronous Tasks

Long tasks (email, file processing, payments) should not block HTTP requests.

* Use task queues (e.g., Celery, RQ, AWS SQS + Lambda).
* Offload long-running jobs (email, processing) to background workers (Celery, Lambdas).
* Keeps web requests fast and responsive.
* Workers process tasks in background, notify users on completion.

---

## 7. Security Best Practices

1. **Network**: Close unused ports, Firewalls, enforce least privilege.
2. **Encryption**: HTTPS/TLS to encrypt traffic end‑to‑end.
3. **Secrets**: Store API keys & passwords in env vars or secrets manager.
4. **Input Validation**: Use ORM/param queries to prevent SQL injection.
5. **XSS Protection**: Escape or sanitize HTML output.
6. **CSRF Tokens**: Verify state‑changing POSTs against a session token.
7. **Password Hashing**: Store only salted hashes (bcrypt, Argon2).


---

## 8. Bringing It All Together

1. **Select** hosting (shared, VPS, cloud) based on scale & budget.
2. **Design** for both vertical & horizontal scaling from the start.
3. **Implement** load balancing + session strategy.
4. **Configure** autoscaling rules and health checks.
5. **Architect** your database: partition, replicate, and cache wisely.
6. **Offload** heavy tasks asynchronously.
7. **Harden** each layer: network, transport, app, data, and code.

With these principles, you can confidently take a local prototype and evolve it into a robust, high‑performance, and secure production service.


Sources:
If you are new to system design maybe you should review the resources below 

* [Scalability Lecture at Harvard](https://www.youtube.com/watch?v=6PWTxRGh_dk)
* [Scalability](https://lecloud.tumblr.com/tagged/scalability)
    * [Clones](https://lecloud.tumblr.com/post/7295452622/scalability-for-dummies-part-1-clones)
    * [Databases](https://lecloud.tumblr.com/post/7994751381/scalability-for-dummies-part-2-database)
    * [Caches](https://lecloud.tumblr.com/post/9246290032/scalability-for-dummies-part-3-cache)
    * [Asynchronism](https://lecloud.tumblr.com/post/9699762917/scalability-for-dummies-part-4-asynchronism)


### Next steps

Next, we'll look at high-level trade-offs:

* **Performance** vs **scalability**
* **Latency** vs **throughput**
* **Availability** vs **consistency**

Keep in mind that **everything is a trade-off**.

Then we'll dive into more specific topics such as DNS, CDNs, and load balancers.

