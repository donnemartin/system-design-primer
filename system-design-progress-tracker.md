# 🗺️ System Design Learning Tracker & Roadmap

Welcome to your structured progress tracker for the **System Design Primer**! This interactive markdown index is designed to help you methodically learn and track your progress across system design theory, Anki flashcards, object-oriented design, and high-scale architecture practice questions.

---

## 🎯 How to Use This Tracker
1. **Fork** the original `system-design-primer` repository.
2. **Add** this file as `LEARNING_INDEX.md` to the root of your forked repository.
3. Use a Markdown viewer or editor (like VS Code, Obsidian, Notion, or GitHub's direct markdown file viewer) to check off (`[x]`) completed topics as you progress!

---

## 📅 Timeline Path Selector
Depending on your preparation timeline, choose your pathway:

- [ ] **Short Timeline (Breadth Focus)**: Focus on *Fundamentals, Core Infrastructure*, and solve *Some* interview questions.
- [ ] **Medium Timeline (Breadth + Some Depth)**: Cover *Fundamentals, Infrastructure, Data Layers, Caching*, and solve *Many* interview questions.
- [ ] **Long Timeline (Deep Mastery)**: Complete all 6 Phases, review *most* engineering blogs, and solve *Most* interview questions.

---

## 📈 Overall Progress Dashboard
- [ ] **Phase 1: Fundamentals** (0/5 Completed)
- [ ] **Phase 2: Core Infrastructure & Web Tier** (0/6 Completed)
- [ ] **Phase 3: Database Layer & Data Scaling** (0/11 Completed)
- [ ] **Phase 4: Caching, Asynchronism & Communication** (0/10 Completed)
- [ ] **Phase 5: Object-Oriented Design (OOD) Exercises** (0/6 Completed)
- [ ] **Phase 6: High-Scale Architectures & Interview Prep** (0/8 Completed)

---

## 🛠️ Phase-by-Phase Learning Plan

### 📍 Phase 1: System Design Fundamentals
*Learn the core architectural principles that govern modern distributed systems.*

#### 1. Scalability Video & Article
- [ ] Review the **Scalability Lecture at Harvard** (topics: horizontal/vertical scaling, caching, load balancing, DB partitioning) ([Start Here](README.md#step-1-review-the-scalability-video-lecture))
- [ ] Review the **Scalability Article** (topics: clones, databases, caches, asynchronism) ([Article link](README.md#step-2-review-the-scalability-article))

#### 2. Key Trade-offs & CAP Theorem
- [ ] **Performance vs. Scalability**: Understand why a performance problem makes it slow for a single user, while a scalability problem makes it slow under heavy load ([Theory](README.md#performance-vs-scalability))
- [ ] **Latency vs. Throughput**: Strive for maximal throughput with acceptable latency ([Theory](README.md#latency-vs-throughput))
- [ ] **CAP Theorem**: Understand CP vs. AP and why Partition Tolerance (P) is non-negotiable ([Theory](README.md#availability-vs-consistency))
  - [ ] **CP (Consistency + Partition Tolerance)**: Nuclear/finance logic [Atomic operations]
  - [ ] **AP (Availability + Partition Tolerance)**: Weak/Eventual consistency [High Availability]

#### 3. Consistency Patterns
- [ ] **Weak Consistency**: Reads might not see the latest write (e.g., Memcached, VoIP, live games) ([Theory](README.md#weak-consistency))
- [ ] **Eventual Consistency**: Reads will eventually see the latest write (e.g., DNS, Email) ([Theory](README.md#eventual-consistency))
- [ ] **Strong Consistency**: Reads always see the latest write; synchronous replication (e.g., RDBMS, Filesystems) ([Theory](README.md#strong-consistency))

#### 4. Active Practice
- [ ] Download and review **Anki Flashcards: System Design Deck** (Fundamentals portion) ([Anki Decks](README.md#anki-flashcards))

---

### 📍 Phase 2: Core Infrastructure & Web Tier
*Master the intermediate layer that routes traffic and delivers content at scale.*

- [ ] **Domain Name System (DNS)**: Learn how domain names map to IPs, record types (NS, MX, A, CNAME), routing patterns (latency, geo, weighted round-robin), and DNS vulnerabilities ([Theory](README.md#domain-name-system))
- [ ] **Content Delivery Network (CDN)**: Compare performance advantages, and evaluate Push vs. Pull models ([Theory](README.md#content-delivery-network))
  - [ ] Push CDNs (good for low-traffic/rarely updated sites; upload directly)
  - [ ] Pull CDNs (good for heavy traffic, content-on-demand; TTL-driven)
- [ ] **Load Balancers**: Learn how requests are distributed, SSL termination, session persistence, and setup modes ([Theory](README.md#load-balancer))
  - [ ] Active-Passive (failover heartbeats) vs. Active-Active setups
  - [ ] Layer 4 (Transport layer NAT-based) vs. Layer 7 (Application layer content-aware) load balancing
- [ ] **Horizontal Scaling**: Transitioning from vertical scaling (scale up) to horizontal scaling (scale out) using commodity machines ([Theory](README.md#horizontal-scaling))
- [ ] **Reverse Proxy (Web Server)**: Understand why reverse proxies are useful even for a single server (security, caching, SSL termination), and compare Load Balancer vs. Reverse Proxy ([Theory](README.md#reverse-proxy-web-server))
- [ ] **Application Layer**: Learn why separating the web layer from the application (platform) layer is crucial, microservices architectures, and Service Discovery (Consul, Etcd, Zookeeper) ([Theory](README.md#application-layer))

#### 🚀 Practice Break: OOD Warm-up
- [ ] Design a **Hash Map** ([OOD Solution](solutions/object_oriented_design/hash_table/hash_map.ipynb))

---

### 📍 Phase 3: Database Layer & Data Scaling
*Learn the storage systems, data models, and complex scaling techniques.*

#### 1. Relational Databases (RDBMS)
- [ ] **ACID Properties**: Master Atomicity, Consistency, Isolation, and Durability ([Theory](README.md#relational-database-management-system-rdbms))
- [ ] **Scaling Relational Databases**: Learn the trade-offs of:
  - [ ] **Master-Slave Replication**: Master handles writes, slaves serve reads. Lag and failover promotion logic ([Theory](README.md#master-slave-replication))
  - [ ] **Master-Master Replication**: Both handle reads & writes, coordinates on writes. Loose consistency or synchronization latency ([Theory](README.md#master-master-replication))
  - [ ] **Federation (Functional Partitioning)**: Splitting up database schemas by domain function (e.g., users, forums, products) ([Theory](README.md#federation))
  - [ ] **Sharding (Database Partitioning)**: Distributing data horizontally across multiple instances (user initialization initial, consistent hashing) ([Theory](README.md#sharding))
  - [ ] **Denormalization**: Trading write performance for fast reads by avoiding complex joins ([Theory](README.md#denormalization))
  - [ ] **SQL Tuning**: Learn how to benchmark (`ab`), profile (`slow query log`), tighten schemas (CHAR vs VARCHAR, INT, DECIMAL), use indices (B-trees), and partition tables ([Theory](README.md#sql-tuning))

#### 2. NoSQL Architectures & BASE
- [ ] **BASE Properties**: Basically Available, Soft State, Eventual Consistency ([Theory](README.md#nosql))
- [ ] Evaluate NoSQL storage types and use cases:
  - [ ] **Key-Value Store**: O(1) reads/writes, often in-memory (e.g., Redis, Memcached) ([Theory](README.md#key-value-store))
  - [ ] **Document Store**: Schema flexibility, document-based APIs (e.g., MongoDB, CouchDB, DynamoDB) ([Theory](README.md#document-store))
  - [ ] **Wide Column Store**: High scalability nested maps, column families (e.g., Bigtable, HBase, Cassandra) ([Theory](README.md#wide-column-store))
  - [ ] **Graph Database**: Optimized for highly connected data / complex social relationships (e.g., Neo4j, FlockDB) ([Theory](README.md#graph-database))
- [ ] **SQL vs. NoSQL decision framework**: Learn when to choose a structured RDBMS over dynamic/semi-structured NoSQL schemas ([Theory](README.md#sql-or-nosql))

---

### 📍 Phase 4: Caching, Asynchronism & Communication
*Ensure high performance and decouple your system layers.*

#### 1. Caching Strategies & Update Patterns
- [ ] Understand cache levels: Client, CDN, Web Server, Database, and Application Caching ([Theory](README.md#client-caching))
- [ ] Compare Database Query-Level caching with Object-Level caching ([Theory](README.md#caching-at-the-database-query-level))
- [ ] Master Cache Update Policies:
  - [ ] **Cache-Aside (Lazy Loading)**: Application loads only requested data, handles misses, and sets cache ([Theory](README.md#cache-aside))
  - [ ] **Write-Through**: Synchronous cache and database writes to ensure consistency ([Theory](README.md#write-through))
  - [ ] **Write-Behind (Write-Back)**: High-performance asynchronous DB writes with data loss risks ([Theory](README.md#write-behind-write-back))
  - [ ] **Refresh-Ahead**: Automatically refresh hot keys prior to expiration ([Theory](README.md#refresh-ahead))

#### 2. Asynchronism & Event-Driven Flows
- [ ] **Message Queues**: Offloading expensive, slow processes (e.g., RabbitMQ, Amazon SQS, Redis as simple broker) ([Theory](README.md#message-queues))
- [ ] **Task Queues**: Supporting scheduled background task workers (e.g., Celery) ([Theory](README.md#task-queues))
- [ ] **Back Pressure**: Managing queue limits and overloading with rate-limiting, HTTP 503, and exponential backoff ([Theory](README.md#back-pressure))

#### 3. Communication Protocols & APIs
- [ ] **HTTP**: Verbs (GET, POST, PUT, PATCH, DELETE) and safe/idempotent properties ([Theory](README.md#hypertext-transfer-protocol-http))
- [ ] **TCP vs. UDP**: Compare connection-oriented reliability (TCP) with connectionless low-latency datagrams (UDP) ([Theory](README.md#transmission-control-protocol-tcp))
- [ ] **RPC vs. REST**: Exposing behaviors vs. exposing resources, tight vs. loose coupling, and payload sizes ([Theory](README.md#remote-procedure-call-rpc))
- [ ] Review the **RPC and REST Calls Comparison Table** ([Comparison Table](README.md#rpc-and-rest-calls-comparison))

#### 4. System Security Basics
- [ ] Learn security best practices: encryption in transit/rest, input sanitization to prevent XSS/SQL injections, parameterized queries, and the principle of least privilege ([Theory](README.md#security))

---

### 📍 Phase 5: Object-Oriented Design (OOD) Exercises
*Translate high-level concepts into clean, object-oriented code.*

Work through these classic OOD interview challenges. Open the Jupyter Notebooks in the `solutions/` directory and implement them yourself:

- [ ] **Design a Least Recently Used (LRU) Cache** ([OOD Solution](solutions/object_oriented_design/lru_cache/lru_cache.ipynb))
- [ ] **Design a Call Center** ([OOD Solution](solutions/object_oriented_design/call_center/call_center.ipynb))
- [ ] **Design a Deck of Cards** ([OOD Solution](solutions/object_oriented_design/deck_of_cards/deck_of_cards.ipynb))
- [ ] **Design a Parking Lot** ([OOD Solution](solutions/object_oriented_design/parking_lot/parking_lot.ipynb))
- [ ] **Design a Chat Server** ([OOD Solution](solutions/object_oriented_design/online_chat/online_chat.ipynb))

---

### 📍 Phase 6: High-Scale Architectures & Interview Prep
*Tie everything together by designing major systems and studying real-world solutions.*

#### 1. System Design Interview Framework
Master the 4-Step System Design Interview framework:
*   **Step 1**: Outline use cases, constraints, and assumptions ([How-to Guide](README.md#step-1-outline-use-cases-constraints-and-assumptions))
*   **Step 2**: Create a high-level design (sketch components and connections) ([How-to Guide](README.md#step-2-create-a-high-level-design))
*   **Step 3**: Design core components (e.g., SQL/NoSQL choice, API signatures, schema design) ([How-to Guide](README.md#step-3-design-core-components))
*   **Step 4**: Scale the design (address bottlenecks via load balancers, caching, sharding) ([How-to Guide](README.md#step-4-scale-the-design))

#### 2. Classic System Design Questions
Solve these exercises and compare your designs with the detailed repo solutions:
- [ ] **Design Pastebin.com (or Bit.ly)** ([System Design Solution](solutions/system_design/pastebin/README.md))
- [ ] **Design the Twitter Timeline & Search** ([System Design Solution](solutions/system_design/twitter/README.md))
- [ ] **Design a Web Crawler** ([System Design Solution](solutions/system_design/web_crawler/README.md))
- [ ] **Design Mint.com** ([System Design Solution](solutions/system_design/mint/README.md))
- [ ] **Design Data Structures for a Social Network** ([System Design Solution](solutions/system_design/social_graph/README.md))
- [ ] **Design a Key-Value Store for a Search Engine** ([System Design Solution](solutions/system_design/query_cache/README.md))
- [ ] **Design Amazon's Sales Ranking by Category** ([System Design Solution](solutions/system_design/sales_rank/README.md))
- [ ] **Design a System Scaling to Millions of Users on AWS** ([System Design Solution](solutions/system_design/scaling_aws/README.md))

#### 3. Real-World Architecture Deep Dives
Read these foundational real-world architectures to understand shared principles and patterns:
- [ ] **MapReduce**: Distributed data processing from Google ([Research Paper Link](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/mapreduce-osdi04.pdf))
- [ ] **Google File System (GFS)**: Google's massive distributed file store ([Research Paper Link](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/gfs-sosp2003.pdf))
- [ ] **Kafka**: Pub/sub message queue architecture from LinkedIn ([Architecture overview](http://www.slideshare.net/mumrah/kafka-talk-tri-hug))
- [ ] Review engineering blogs of companies you're interested in (e.g., Netflix, Pinterest, Uber, Stack Overflow) ([Resources Index](README.md#company-architectures))

---

## 📐 Appendix: Quick Interview References

### ⚡ Latency Numbers Every Programmer Should Know
Keep these numbers in mind for your **back-of-the-envelope calculations**:

| Operation | Latency | Visualized/Compared |
| :--- | :--- | :--- |
| **L1 Cache Reference** | 0.5 ns | Baseline speed |
| **Branch Mispredict** | 5 ns | 10x slower than L1 |
| **L2 Cache Reference** | 7 ns | 14x L1 cache |
| **Mutex Lock/Unlock** | 25 ns | Thread sync cost |
| **Main Memory Reference** | 100 ns | 20x L2 cache, 200x L1 cache |
| **Compress 1KB with Zippy** | 10,000 ns (10 us) | Local computational latency |
| **Send 1KB over 1Gbps Network** | 10,000 ns (10 us) | Networking baseline speed |
| **Read 4KB Randomly from SSD** | 150,000 ns (150 us) | SSD random read performance |
| **Read 1MB Sequentially from Memory** | 250,000 ns (250 us) | Sequential DRAM speed |
| **Round Trip in Same Datacenter** | 500,000 ns (500 us) | High speed remote networking |
| **Read 1MB Sequentially from SSD** | 1,000,000 ns (1 ms) | ~4x slower than RAM sequential read |
| **HDD Seek** | 10,000,000 ns (10 ms) | 20x datacenter roundtrip (Slow!) |
| **Read 1MB Sequentially from 1Gbps** | 10,000,000 ns (10 ms) | Bandwidth limit latency |
| **Read 1MB Sequentially from HDD** | 30,000,000 ns (30 ms) | 120x memory, 30X SSD |
| **Send Packet CA -> Netherlands -> CA** | 150,000,000 ns (150 ms)| Speed of light fiber propagation delay |

### 🔢 Powers of Two
Useful for data storage estimation (users, traffic, log size):

*   **2^10**: 1,024 ≈ **1 Thousand** (1 KB)
*   **2^20**: 1,048,576 ≈ **1 Million** (1 MB)
*   **2^30**: 1,073,741,824 ≈ **1 Billion** (1 GB)
*   **2^40**: 1,099,511,627,776 ≈ **1 Trillion** (1 TB)

---

Keep coding, keep scaling, and good luck with your system design learning! 🚀
