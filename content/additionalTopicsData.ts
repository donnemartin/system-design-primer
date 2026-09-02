import { Topic } from '@/types';

export const additionalTopicsData: Topic[] = [
  // Consistency Patterns
  {
    id: 'consistency-patterns',
    slug: 'consistency-patterns',
    title: 'Consistency Patterns (Weak, Eventual, Strong)',
    category: 'fundamentals',
    categoryName: 'Fundamentals & Trade-offs',
    difficulty: 'Intermediate',
    estimatedMinutes: 12,
    prerequisites: ['cap-theorem'],
    summary: 'Explore the consistency spectrum from Strong Linearizability to Eventual Consistency, Read-Your-Writes, and Monotonic Reads.',
    definition: 'Consistency patterns define the contract between a distributed storage system and its clients regarding when updates to data become visible across all replica nodes.',
    intuition: 'Imagine posting an update on your social media status. Strong consistency means the exact instant you click submit, your friend in Tokyo sees the update on their refresh. Eventual consistency means your friend might see it 2 seconds later, but everyone will eventually converge to the same status.',
    deepDive: `### The Consistency Models:

1. **Strong Consistency (Linearizability)**:
   - After a write completes, all subsequent reads across any replica will immediately return the new value.
   - Requires synchronous replication and consensus (2-Phase Commit, Raft, Paxos).
   - **Trade-off**: Higher write latency and lower availability during network partitions.

2. **Eventual Consistency**:
   - If no new updates are made, all replicas will eventually converge to the same value.
   - Employs asynchronous gossip protocols and background anti-entropy (Read Repair, Merkle Trees).
   - Highly available and ultra-fast writes (DynamoDB, Cassandra).

3. **Client-Centric Consistency Guarantees**:
   - **Read-Your-Writes**: A user will always see updates submitted by themselves, even if other users see stale data for a few seconds. (Implemented by routing user reads to the primary or caching writes locally in client state).
   - **Monotonic Reads**: If a user reads version $V_2$, they will never subsequently read an older version $V_1$ on subsequent refreshes.
   - **Monotonic Writes**: Writes by the same client are serialized and processed in the exact order they were issued.`,
    pros: ['Enables fine-grained tuning between latency and correctness.'],
    cons: ['Eventual consistency requires conflict resolution (Last-Write-Wins, CRDTs).'],
    whenToUse: ['Use Strong for financial ledger transactions; use Eventual for social feeds and telemetry.'],
    whenNotToUse: ['Never use weak consistency for balance withdrawals or unique username reservations.'],
    pitfalls: ['Relying on system clocks for Last-Write-Wins (LWW) without NTP drift correction.'],
    realWorldExamples: [
      { company: 'Amazon DynamoDB', useCase: 'Tunable Consistency', architectureDetail: 'Allows per-request configuration: ConsistentRead=true uses 2x read capacity units for strong consistency, while default eventual reads cost half.' }
    ],
    interviewQuestions: [
      {
        question: 'How would you implement "Read-Your-Own-Writes" in an eventually consistent master-slave database?',
        answerHint: 'Track the user’s last write timestamp in a session cookie or JWT. If (currentTime - lastWriteTime) < replicationLagThreshold (e.g. 5 seconds), route the user’s read query directly to the Primary Master database instead of a read replica.',
        keyPoints: ['Route recent writers to Master for 5 seconds', 'Route other read-only users to replicas', 'Preserves user satisfaction with low master load']
      }
    ],
    relatedTopicSlugs: ['cap-theorem', 'database-replication', 'distributed-consensus'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (Consistency Patterns)',
  },

  // CDN
  {
    id: 'cdn',
    slug: 'cdn',
    title: 'Content Delivery Networks (CDN) & Edge Caching',
    category: 'networking',
    categoryName: 'Networking & Infrastructure',
    difficulty: 'Beginner',
    estimatedMinutes: 10,
    prerequisites: ['dns'],
    summary: 'CDNs cache static and dynamic assets at Points of Presence (PoPs) worldwide, bringing content closer to users to reduce latency and origin server load.',
    definition: 'A Content Delivery Network (CDN) is a globally distributed network of proxy servers and data centers that cache content (images, videos, HTML, JS, CSS, and API responses) close to end-users.',
    intuition: 'Instead of shipping every package from a single warehouse in Seattle, an e-commerce company keeps popular items stocked in 200 local delivery hubs in every city.',
    deepDive: `### Push CDNs vs Pull CDNs:
- **Push CDN**:
  - Your application server proactively uploads new or modified content directly to the CDN storage.
  - Content is pushed when it changes or on a schedule.
  - **Best for**: Sites with low update frequency, large static files (software releases, video files).
- **Pull CDN (Origin Pull)**:
  - CDN caches content on-demand when the first user in a geographic region requests it.
  - On a cache miss, the CDN edge server pulls the file from your origin server and caches it for future users based on TTL.
  - **Best for**: Heavy traffic websites with frequent updates and dynamic assets.

### Modern Edge Compute:
Modern CDNs (Cloudflare Workers, Fastly Compute@Edge, AWS CloudFront Functions) execute lightweight V8 JavaScript or WebAssembly directly at the edge, allowing header rewrites, JWT authentication, A/B testing, and geolocation rendering before requests ever touch the origin server.`,
    pros: ['Decreases origin server bandwidth and CPU load by 70-90%.', 'Drastically improves global page load times (reduces RTT from 200ms to 15ms).'],
    cons: ['Invalidating cached assets globally can take seconds to minutes without versioned URLs.'],
    whenToUse: ['Any web application with static assets or global user base.'],
    whenNotToUse: ['Purely internal private intranet tools with no internet exposure.'],
    pitfalls: ['Not using content hash filenames (e.g. \`main.a89f7b.js\`), causing users to load stale JavaScript bundles after deployments.'],
    realWorldExamples: [
      { company: 'Netflix', useCase: 'Open Connect CDN', architectureDetail: 'Deploys custom Open Connect hardware appliances directly inside ISP networks worldwide, serving 100% of video streaming traffic locally.' }
    ],
    interviewQuestions: [
      {
        question: 'How do you handle immediate cache invalidation across a global CDN when deploying a new frontend release?',
        answerHint: 'Use Cache-Busting with unique content-hashed filenames (e.g. bundle.9f8a2c.js) configured with infinite Cache-Control: max-age=31536000, immutable. The HTML entrypoint index.html is served with Cache-Control: no-cache, so users always fetch the newest index.html pointing to new hashed asset URLs.',
        keyPoints: ['Content-hashed asset filenames', 'Immutable cache headers for assets', 'No-cache header for index.html']
      }
    ],
    relatedTopicSlugs: ['dns', 'load-balancing', 'cache-invalidation-patterns'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (CDN)',
  },

  // Reverse Proxy
  {
    id: 'reverse-proxy',
    slug: 'reverse-proxy',
    title: 'Reverse Proxy (Web Server) vs Load Balancer',
    category: 'networking',
    categoryName: 'Networking & Infrastructure',
    difficulty: 'Beginner',
    estimatedMinutes: 10,
    prerequisites: ['load-balancing'],
    summary: 'A reverse proxy accepts client requests and forwards them to backend servers, handling SSL termination, compression, caching, and security filtering.',
    definition: 'A reverse proxy is a server that sits in front of one or more web applications, intercepting requests from clients and routing them to the appropriate backend server.',
    intuition: 'A forward proxy represents the client (e.g. corporate VPN hiding employee IPs). A reverse proxy represents the server (hiding backend infrastructure from the public internet).',
    deepDive: `### Key Roles of a Reverse Proxy:
1. **Security & Anonymity**: Masks backend server IP addresses and protects against direct port scanning and attacks.
2. **SSL / TLS Termination**: Handles expensive cryptographic handshakes at the edge, communicating with backend microservices over unencrypted private VPC networks.
3. **Compression**: Automatically gzips or brotli-compresses HTTP responses to save bandwidth.
4. **Static Content Serving**: Directly serves static HTML, CSS, JS, and images without waking up heavy backend application workers (Node.js/Python).
5. **Rate Limiting & IP Blocking**: Drops abusive scraping traffic before it consumes application database connections.`,
    pros: ['Centralized place for SSL certificates, security headers, and access logging.'],
    cons: ['Adds an extra network hop if not co-located.'],
    whenToUse: ['In front of every production application server fleet.'],
    whenNotToUse: ['Direct peer-to-peer WebRTC connections.'],
    pitfalls: ['Failing to forward \`X-Forwarded-For\` and \`X-Forwarded-Proto\` headers, making backend servers think all requests originate from localhost.'],
    realWorldExamples: [
      { company: 'Cloudflare', useCase: 'Global Reverse Proxy', architectureDetail: 'Acts as a giant reverse proxy for ~20% of the public web, terminating TLS and filtering DDoS attacks before traffic reaches origin servers.' }
    ],
    interviewQuestions: [
      {
        question: 'What is the key difference between a Load Balancer and a Reverse Proxy?',
        answerHint: 'A Load Balancer is primarily used when you have multiple servers doing the same job and need to distribute traffic evenly. A Reverse Proxy is useful even with a single backend server to provide SSL termination, caching, compression, and security shielding.',
        keyPoints: ['Load Balancer: 1-to-many traffic distribution', 'Reverse Proxy: Server-side proxy for security, TLS, compression', 'Modern tools (NGINX, Envoy, HAProxy) perform both roles']
      }
    ],
    relatedTopicSlugs: ['load-balancing', 'dns', 'api-gateway-rate-limiting'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (Reverse Proxy)',
  },

  // Microservices vs Monolith
  {
    id: 'microservices-vs-monolith',
    slug: 'microservices-vs-monolith',
    title: 'Monolith vs Microservices vs Modular Architecture',
    category: 'app-architecture',
    categoryName: 'Application Architecture',
    difficulty: 'Intermediate',
    estimatedMinutes: 15,
    prerequisites: ['performance-vs-scalability'],
    summary: 'Evaluate the architectural trade-offs between Monolithic architectures, Microservices, and Modular Monoliths across organizational and scaling dimensions.',
    definition: 'A Monolith is a single unified software application where all business modules share a single codebase and database. Microservices decompose an application into autonomous, independently deployable services that communicate over network protocols (HTTP/gRPC/Kafka).',
    intuition: 'A Monolith is a Swiss Army Knife: everything is integrated and convenient in one tool. Microservices are a professional mechanic’s toolbox: specialized tools that can each be upgraded or replaced independently, but require coordination to carry.',
    deepDive: `### Comparison:
- **Monolith Advantages**: Simple local debugging, single transaction boundary (ACID), zero network serialization overhead, easy initial deployment.
- **Monolith Bottlenecks**: Large teams stepping on each other's code, slow CI/CD test pipelines, scaling the whole app for one CPU-heavy endpoint.
- **Microservices Advantages**: Independent scaling, polyglot tech stacks, autonomous domain teams (Conway's Law), smaller blast radius for deployments.
- **Microservices Tax**: Distributed tracing, network latency, eventual consistency, distributed transactions (Saga pattern), complex Kubernetes operations.

### The Modular Monolith Alternative:
A single deployable unit with strictly enforced in-code module boundaries (e.g. Domain-Driven Design bounded contexts). Gives the developer velocity of a monolith with the clean boundaries of microservices without distributed network tax.`,
    pros: ['Aligns software architecture with large engineering organizational structures.'],
    cons: ['Introducing microservices too early before domain boundaries stabilize leads to distributed monolith disaster.'],
    whenToUse: ['Microservices: When engineering organization exceeds 50+ engineers with distinct domain boundaries.'],
    whenNotToUse: ['Never build microservices for an early-stage startup trying to find product-market fit.'],
    pitfalls: ['Building a "Distributed Monolith": services that cannot be deployed independently because they share a single database or have tight synchronous RPC coupling.'],
    realWorldExamples: [
      { company: 'Uber', useCase: 'Domain-Oriented Microservice Architecture (DOMA)', architectureDetail: 'Consolidated thousands of microservices into logical "Domains" with clear gateway interfaces to manage architectural complexity.' }
    ],
    interviewQuestions: [
      {
        question: 'How do you handle a distributed transaction across three independent microservices (e.g. Order, Payment, Inventory)?',
        answerHint: 'Use the **Saga Pattern** (Choreography or Orchestration) with Compensating Transactions. If the Payment service fails after Order is created, compensating events are published to roll back the Order state asynchronously.',
        keyPoints: ['Avoid 2-Phase Commit (2PC) at scale', 'Saga pattern: series of local transactions', 'Compensating transactions for rollback on failure']
      }
    ],
    relatedTopicSlugs: ['message-queues-vs-task-queues', 'api-gateway-rate-limiting', 'service-discovery'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (Application Layer)',
  },

  // API Gateway & Rate Limiting
  {
    id: 'api-gateway-rate-limiting',
    slug: 'api-gateway-rate-limiting',
    title: 'API Gateway & Rate Limiting Algorithms',
    category: 'app-architecture',
    categoryName: 'Application Architecture',
    difficulty: 'Intermediate',
    estimatedMinutes: 14,
    prerequisites: ['load-balancing', 'reverse-proxy'],
    summary: 'API Gateways act as the single entry point for client requests, orchestrating routing, authentication, and rate limiting using Token Bucket and Sliding Window algorithms.',
    definition: 'An API Gateway is an architectural pattern where a unified front-door server routes client requests, aggregates responses from multiple internal microservices, and enforces cross-cutting concerns like authentication, SSL termination, and rate limiting.',
    intuition: 'Think of a hotel concierge. Rather than guests having to find and speak directly with the kitchen chef, housekeeper, and maintenance worker, the concierge handles all requests at the front desk.',
    deepDive: `### The 4 Major Rate Limiting Algorithms:

1. **Token Bucket (Standard - AWS, Stripe)**:
   - A bucket holds a maximum of $B$ tokens. Tokens are refilled at a constant rate $r$ tokens/sec.
   - Each incoming request consumes 1 token. If the bucket is empty, the request is rejected with **HTTP 429 Too Many Requests**.
   - **Pros**: Allows bursts of traffic up to bucket capacity while enforcing average rate.

2. **Leaky Bucket**:
   - Requests enter a queue (bucket) of fixed capacity and are processed at a steady constant rate.
   - **Pros**: Perfectly smooths out traffic bursts for downstream services.

3. **Fixed Window Counter**:
   - Counts requests within fixed time windows (e.g. 100 reqs from 12:00 to 12:01).
   - **Flaw**: Can allow **2x burst traffic** at the boundary of two windows (e.g. 100 reqs at 12:00:59 and 100 reqs at 12:01:01).

4. **Sliding Window Log / Counter**:
   - Calculates request rate by weighting the previous window and current window elapsed time.
   - **Pros**: Prevents boundary burst anomalies with minimal memory footprint.`,
    pros: ['Protects downstream backends from cascading failures and DDoS attacks.'],
    cons: ['Centralized rate limiting requires shared memory (Redis) with atomic Lua scripts.'],
    whenToUse: ['Public API endpoints, authentication routes (prevent brute-force login), webhooks.'],
    whenNotToUse: ['Internal high-frequency in-process function calls.'],
    pitfalls: ['Implementing naive non-atomic Redis \`GET\` and \`SET\` operations, causing race conditions under high concurrency. Use Redis Lua scripts or atomic \`INCR\` with \`EXPIRE\`.'],
    realWorldExamples: [
      { company: 'Stripe', useCase: 'Tiered Rate Limiting', architectureDetail: 'Uses Token Bucket with Redis to enforce different rate limit tiers for read APIs, write APIs, and critical checkout endpoints.' }
    ],
    interviewQuestions: [
      {
        question: 'How do you design a distributed rate limiter that handles 100,000 requests/sec across 50 API servers?',
        answerHint: 'Use Redis as a centralized atomic counter using a Sliding Window Counter algorithm with Redis Hashes and Lua scripts. To prevent Redis from becoming a bottleneck, implement local in-memory token buffering on each API server, batching token syncs every 100ms.',
        keyPoints: ['Redis with atomic Lua script', 'Sliding Window Counter algorithm', 'Local batching to reduce Redis round trips']
      }
    ],
    relatedTopicSlugs: ['load-balancing', 'microservices-vs-monolith', 'reverse-proxy'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (API Gateway)',
  },

  // Distributed Consensus & Raft
  {
    id: 'distributed-consensus',
    slug: 'distributed-consensus',
    title: 'Distributed Consensus (Raft & Paxos)',
    category: 'distributed-systems',
    categoryName: 'Distributed Systems & Async',
    difficulty: 'Advanced',
    estimatedMinutes: 18,
    prerequisites: ['cap-theorem', 'consistency-patterns'],
    summary: 'How distributed nodes agree on a single source of truth, elect leaders, and replicate state machine logs reliably despite node failures.',
    definition: 'Distributed Consensus is the process of getting a group of independent machines to agree on a specific state, decision, or sequence of actions, even when some nodes fail or network messages are delayed.',
    intuition: 'Imagine a committee of 5 judges making a ruling. Even if 2 judges lose phone connection, as long as a majority (3 out of 5) agree on the decision, the verdict is legally binding.',
    deepDive: `### The Consensus Problem:
In a cluster of $N$ machines, how do we guarantee that all non-failing machines execute the exact same commands in the exact same order (Replicated State Machine)?

### Quorum Math:
To tolerate $F$ node failures, a cluster must have at least $2F + 1$ total nodes:
- 3 nodes tolerate 1 failure ($3 = 2(1) + 1$, Quorum = 2)
- 5 nodes tolerate 2 failures ($5 = 2(2) + 1$, Quorum = 3)
- 7 nodes tolerate 3 failures ($7 = 2(3) + 1$, Quorum = 4)

### Raft Protocol Overview:
Raft decomposes consensus into 3 sub-problems:
1. **Leader Election**: When the current leader fails, candidate nodes start an election with randomized timeouts. The candidate receiving votes from a majority of nodes becomes the new Leader.
2. **Log Replication**: The Leader accepts client writes, appends them to its log, and sends \`AppendEntries\` RPCs to followers. Once a majority acknowledges the entry, the leader commits it and applies it to the state machine.
3. **Safety**: Only a node with an up-to-date log containing all committed entries can be elected Leader.`,
    pros: ['Guarantees strong consistency and zero split-brain in production clusters.'],
    cons: ['Requires an odd number of nodes and synchronous network round trips.'],
    whenToUse: ['Distributed lock managers (etcd, ZooKeeper, Consul), database metadata storage, leader election.'],
    whenNotToUse: ['Do not use consensus on the high-throughput write path for millions of raw user events.'],
    pitfalls: ['Deploying an even number of nodes (e.g. 4 nodes still only tolerate 1 failure, but need 3 votes for quorum, making it less reliable than 3 nodes!).'],
    realWorldExamples: [
      { company: 'Kubernetes', useCase: 'etcd Cluster State', architectureDetail: 'Uses an etcd cluster (Raft consensus) to store the canonical desired state of all pods, services, and secrets in the cluster.' }
    ],
    interviewQuestions: [
      {
        question: 'Why do etcd and ZooKeeper clusters almost always contain an odd number of nodes (3, 5, or 7)?',
        answerHint: 'Because an odd number gives the highest fault tolerance for the lowest hardware cost. 4 nodes require 3 votes for a quorum (tolerates 1 failure), which is the exact same fault tolerance as 3 nodes (requires 2 votes, tolerates 1 failure), but with higher network overhead and split risk.',
        keyPoints: ['Formula: 2F + 1 nodes tolerate F failures', '4 nodes still only tolerate 1 failure', 'Odd node count avoids tie-breaker split brain']
      }
    ],
    relatedTopicSlugs: ['cap-theorem', 'consistency-patterns', 'database-replication'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (Distributed Systems)',
  },

  // Security & Authentication
  {
    id: 'authentication-authorization',
    slug: 'authentication-authorization',
    title: 'Authentication & Authorization (JWT vs Session & OAuth2)',
    category: 'security',
    categoryName: 'Security & Reliability',
    difficulty: 'Intermediate',
    estimatedMinutes: 14,
    prerequisites: ['app-architecture'],
    summary: 'Design secure, scalable authentication and authorization systems using JWTs, stateful sessions, OAuth2 flows, and Role-Based Access Control (RBAC).',
    definition: 'Authentication (AuthN) verifies WHO a user is. Authorization (AuthZ) verifies WHAT permissions that user has to access specific resources.',
    intuition: 'Authentication is showing your passport at border control to prove your identity. Authorization is the boarding pass that determines whether you can sit in First Class or Economy.',
    deepDive: `### Stateful Sessions vs Stateless JWTs:
- **Server-Side Stateful Sessions**:
  - Server generates a random session ID, stores session data in Redis, and sends an \`HttpOnly\`, \`Secure\` cookie to the browser.
  - **Pros**: Instant revocation (deleting the key in Redis immediately logs out the user).
  - **Cons**: Requires a centralized Redis cluster lookup on every single API request.
- **Stateless JSON Web Tokens (JWT)**:
  - Cryptographically signed payload (HMAC-SHA256 or RSA-256) containing user ID, roles, and expiration (\`exp\`).
  - **Pros**: Any microservice can verify the signature locally with the public key without querying a database.
  - **Cons**: Cannot be revoked before expiration unless an active token blacklist is maintained.

### Production Best Practice: Hybrid Pattern:
- **Short-Lived Access Token (JWT)**: 15-minute expiration, used for fast local verification by microservices.
- **Long-Lived Refresh Token**: 30-day expiration, stored securely in database/Redis with rotation on every refresh, used to issue new access tokens and check revocation status.`,
    pros: ['Enables seamless single-sign-on (SSO) and federated logins with Google/GitHub via OAuth2 / OIDC.'],
    cons: ['Misconfigured JWT verification (e.g. accepting "none" algorithm) creates severe security holes.'],
    whenToUse: ['All web applications, public APIs, and mobile apps.'],
    whenNotToUse: ['Do not store sensitive secret keys or passwords in JWT payloads (JWT payloads are only encoded base64, not encrypted!).'],
    pitfalls: ['Storing authentication tokens in browser \`localStorage\`, making them vulnerable to Cross-Site Scripting (XSS) theft. Always use \`HttpOnly\`, \`SameSite=Lax\`, \`Secure\` cookies.'],
    realWorldExamples: [
      { company: 'Auth0 / Okta', useCase: 'Identity Platform', architectureDetail: 'Implements OAuth2 and OpenID Connect (OIDC) with JWKS (JSON Web Key Set) rotation for zero-downtime cryptographic key updates.' }
    ],
    interviewQuestions: [
      {
        question: 'How do you immediately revoke a compromised user JWT before its expiration date?',
        answerHint: 'Store a "revocation timestamp" or "token version" in Redis or the user database. When verifying the JWT, if (jwt.iat < user.tokens_revoked_before), reject the token. Alternatively, keep short 5-minute access token lifespans so exposure is naturally minimal.',
        keyPoints: ['Token versioning / revocation timestamp in Redis', 'Short token lifetime (5-15 min) + Refresh token check', 'Immediate ban via Redis blacklist lookup']
      }
    ],
    relatedTopicSlugs: ['api-gateway-rate-limiting', 'reverse-proxy'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (Security)',
  },
];
