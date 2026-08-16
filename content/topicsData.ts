import { Topic } from '@/types';
import { additionalTopicsData } from './additionalTopicsData';

export const baseTopicsData: Topic[] = [
  // 1. Fundamentals
  {
    id: 'performance-vs-scalability',
    slug: 'performance-vs-scalability',
    title: 'Performance vs Scalability',
    category: 'fundamentals',
    categoryName: 'Fundamentals & Trade-offs',
    difficulty: 'Beginner',
    estimatedMinutes: 8,
    prerequisites: [],
    summary: 'Understand the fundamental difference: A service is fast if performance is high; a service is scalable if performance stays constant as load increases.',
    definition: 'Performance measures how fast a system performs a single unit of work for an individual user (low latency, fast response time). Scalability measures a system’s ability to handle increased workload gracefully by adding hardware resources without degrading individual performance.',
    intuition: 'Think of a sports car vs a commuter train. A Ferrari has extreme performance (0 to 60 in 2.5 seconds, carrying 2 passengers). A train might be slower (takes 30 minutes to travel 20 miles), but it is vastly more scalable (can carry 2,000 passengers at the same speed).',
    deepDive: `If you have a performance problem, your system is slow for even a single user. If you have a scalability problem, your system is fast for a single user but grinds to a halt under high concurrent traffic.

### Key Laws of Scalability:
- **Amdahl's Law**: The theoretical speedup of a program is limited by its sequential (non-parallelizable) portion. If 20% of your code is strictly serialized (e.g., waiting on a global database lock), maximum theoretical speedup is capped at 5x, no matter how many cores you add.
- **Universal Scalability Law (USL)**: Takes into account both serialization and crosstalk/coherency delays (communication overhead between worker nodes). Adding more nodes eventually hurts throughput if coherency overhead exceeds processing gains.

### Scaling Dimensions:
1. **Vertical Scaling (Scale Up)**: Upgrading CPU, RAM, or NVMe SSDs on a single machine.
2. **Horizontal Scaling (Scale Out)**: Adding more commodity nodes behind a load balancer.`,
    diagramData: {
      title: 'Performance vs Scalability Architectural Flow',
      description: 'Handling single-request latency optimization vs multi-node horizontal scale.',
      nodes: [
        { id: 'client', label: '10,000 Clients', sublabel: 'Concurrent Traffic', type: 'client', x: 50, y: 150, latency: '< 50ms', throughput: '10K QPS', role: 'Generates user requests' },
        { id: 'lb', label: 'Load Balancer', sublabel: 'NGINX / ALB', type: 'lb', x: 280, y: 150, latency: '1-2ms', throughput: '100K QPS', role: 'Distributes traffic evenly to avoid node saturation' },
        { id: 'app1', label: 'App Worker 1', sublabel: 'Stateless Node', type: 'server', x: 520, y: 80, latency: '15ms', throughput: '2.5K QPS', role: 'Processes business logic in parallel' },
        { id: 'app2', label: 'App Worker 2', sublabel: 'Stateless Node', type: 'server', x: 520, y: 220, latency: '15ms', throughput: '2.5K QPS', role: 'Auto-scaled instance' },
        { id: 'db', label: 'Distributed DB', sublabel: 'Sharded Cluster', type: 'db', x: 760, y: 150, latency: '4ms', throughput: '50K QPS', role: 'Stores persistent data with read replicas' },
      ],
      edges: [
        { from: 'client', to: 'lb', label: 'HTTP/2', protocol: 'TLS' },
        { from: 'lb', to: 'app1', label: 'Round Robin', protocol: 'HTTP' },
        { from: 'lb', to: 'app2', label: 'Round Robin', protocol: 'HTTP' },
        { from: 'app1', to: 'db', label: 'Read/Write', protocol: 'TCP' },
        { from: 'app2', to: 'db', label: 'Read/Write', protocol: 'TCP' },
      ],
    },
    tradeOffs: {
      title: 'Vertical Scaling vs Horizontal Scaling',
      optionAName: 'Vertical Scaling (Scale Up)',
      optionBName: 'Horizontal Scaling (Scale Out)',
      description: 'Choosing whether to buy bigger servers or distribute across multiple nodes.',
      comparisons: [
        { feature: 'Implementation Complexity', optionA: 'Zero code changes (just upgrade instance type)', optionB: 'Requires stateless architecture, load balancers, distributed state', winner: 'A' },
        { feature: 'Upper Capacity Limit', optionA: 'Hard hardware ceiling (e.g. 128 cores, 4TB RAM)', optionB: 'Virtually unlimited (thousands of instances)', winner: 'B' },
        { feature: 'High Availability & Fault Tolerance', optionA: 'Single point of failure (server crash = total downtime)', optionB: 'High redundancy (failed node is replaced automatically)', winner: 'B' },
        { feature: 'Cost Efficiency at Extreme Scale', optionA: 'Exponentially expensive for ultra-high-spec hardware', optionB: 'Linear cost with commodity hardware', winner: 'B' },
        { feature: 'Network Latency', optionA: 'Zero inter-node network latency (IPC / shared memory)', optionB: 'Requires inter-node RPC / serialization overhead', winner: 'A' },
      ],
    },
    decisionTree: {
      question: 'How should you scale your application architecture?',
      options: [
        { condition: 'Early-stage startup / < 500 QPS with tight deadline', recommendation: 'Scale Vertically First', explanation: 'Upgrade instance size (e.g. c6i.4xlarge). Avoid premature distributed system complexity until single-node limits are reached.', badge: 'Simplicity' },
        { condition: 'High availability requirement (99.99%) or > 5,000 QPS', recommendation: 'Scale Horizontally with Stateless Servers', explanation: 'Decouple session state into Redis, put application servers behind an ALB, and enable Auto Scaling Groups.', badge: 'Production Standard' },
        { condition: 'Database write bottleneck on a single primary node', recommendation: 'Implement Read Replicas, Caching, and then Sharding', explanation: 'Offload reads to Redis/Memcached and read replicas before undertaking database sharding.', badge: 'Data Tier' },
      ],
    },
    pros: [
      'Allows decoupling single-user response time from overall system capacity.',
      'Enables horizontal elasticity to scale down during low-traffic periods, saving infrastructure costs.',
      'Reduces blast radius: one worker crash does not bring down the entire fleet.',
    ],
    cons: [
      'Horizontal scale requires managing distributed state, consensus, and network partitions.',
      'Troubleshooting latency spikes across microservices requires distributed tracing (e.g. OpenTelemetry, Jaeger).',
    ],
    whenToUse: [
      'When user traffic fluctuates significantly (e.g., e-commerce flash sales, morning news spikes).',
      'When your single-server CPU/RAM utilization regularly exceeds 70%.',
    ],
    whenNotToUse: [
      'When single-threaded algorithm performance is fundamentally flawed (e.g., O(N^2) database queries). Fix the algorithmic performance first!',
    ],
    pitfalls: [
      'Throwing more hardware at an un-indexed SQL query that performs a full table scan.',
      'Storing session state in local server memory instead of a shared store like Redis, preventing stateless horizontal auto-scaling.',
    ],
    realWorldExamples: [
      { company: 'Shopify', useCase: 'Black Friday Flash Sales', architectureDetail: 'Auto-scales thousands of stateless Rails workers behind load balancers with edge caching on Cloudflare.' },
      { company: 'Stack Overflow', useCase: 'High Performance Single-Box Approach', architectureDetail: 'Ran on a handful of massive multi-socket bare metal SQL servers for years by optimizing C# code and SQL queries relentlessly.' },
    ],
    interviewQuestions: [
      {
        question: 'If an API endpoint response time increases from 50ms to 2,000ms when traffic increases 10x, is it a performance or scalability issue?',
        answerHint: 'It is a scalability issue. The baseline performance is good (50ms), but the system fails to maintain that performance under increased load due to a resource bottleneck (e.g., connection pool exhaustion or lock contention).',
        keyPoints: ['Baseline is fast (50ms) -> not a code performance bug', 'Degradation under load -> resource saturation or lock contention', 'Solution: Connection pooling, caching, or horizontal read replicas'],
      },
    ],
    relatedTopicSlugs: ['latency-vs-throughput', 'load-balancing', 'caching-levels', 'database-sharding'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (Performance vs Scalability)',
  },

  // 2. Latency vs Throughput
  {
    id: 'latency-vs-throughput',
    slug: 'latency-vs-throughput',
    title: 'Latency vs Throughput',
    category: 'fundamentals',
    categoryName: 'Fundamentals & Trade-offs',
    difficulty: 'Beginner',
    estimatedMinutes: 10,
    prerequisites: ['performance-vs-scalability'],
    summary: 'Latency is the time to deliver a single message; throughput is the amount of data or requests processed per unit of time.',
    definition: 'Latency is the time elapsed between initiating a request and receiving the response (measured in milliseconds or microseconds). Throughput is the number of operations or quantity of data a system can process in a given time window (measured in requests per second, QPS, or MB/s).',
    intuition: 'Imagine a water pipeline. Latency is how long it takes for a single droplet of water to travel from the reservoir to your kitchen tap (e.g. 5 seconds). Throughput is the width of the pipe—how many gallons of water flow out per minute.',
    deepDive: `Generally, you should aim for **maximal throughput with acceptable latency**.

### Little's Law:
$$L = \\lambda \\times W$$
- $L$ = Average number of active concurrent requests in the system.
- $\\lambda$ = System throughput (Arrival rate in requests/sec).
- $W$ = Average latency (Wait time per request in seconds).

**Example**: If your server handles 1,000 requests/sec ($\\lambda = 1,000$) and each request takes 100ms ($W = 0.1s$), you must have $L = 100$ concurrent active threads/connections at any instant.

### Tail Latency (p99 and p99.9):
In distributed systems with dozens of microservices, average latency (p50) is misleading. If a single user page request fans out to 100 backends, the overall user latency is dictated by the **slowest backend (p99 tail latency)**!`,
    diagramData: {
      title: 'Latency vs Throughput Optimization Flow',
      description: 'How batching increases throughput at the expense of slight single-item latency.',
      nodes: [
        { id: 'ingest', label: 'Message Ingest', sublabel: '100K events/s', type: 'client', x: 50, y: 150, latency: '0.1ms', throughput: '100K evt/s', role: 'Accepts high-volume stream' },
        { id: 'buffer', label: 'Micro-Batch Buffer', sublabel: '10ms / 500 items', type: 'queue', x: 280, y: 150, latency: '10ms', throughput: '100K evt/s', role: 'Trades 10ms latency for 50x throughput gain' },
        { id: 'processor', label: 'Bulk Stream Engine', sublabel: 'Apache Flink / Spark', type: 'worker', x: 520, y: 150, latency: '20ms', throughput: '150K evt/s', role: 'Processes batched records in vectorized operations' },
        { id: 'sink', label: 'Columnar Store', sublabel: 'ClickHouse / S3', type: 'db', x: 760, y: 150, latency: '5ms', throughput: '500MB/s', role: 'High-throughput block writes' },
      ],
      edges: [
        { from: 'ingest', to: 'buffer', label: 'Stream push', protocol: 'gRPC' },
        { from: 'buffer', to: 'processor', label: 'Batch pull (500 items)', protocol: 'TCP' },
        { from: 'processor', to: 'sink', label: 'Vector write', protocol: 'Disk' },
      ],
    },
    tradeOffs: {
      title: 'Individual Immediate Processing vs Batch Processing',
      optionAName: 'Immediate Processing (Low Latency)',
      optionBName: 'Batch Processing (High Throughput)',
      description: 'Balancing real-time reactivity with maximum system efficiency.',
      comparisons: [
        { feature: 'Individual Request Latency', optionA: 'Ultra-low (sub-millisecond)', optionB: 'Delayed by batch window (10ms - 500ms)', winner: 'A' },
        { feature: 'System-wide Peak Throughput', optionA: 'Lower (high context-switch & network overhead per item)', optionB: 'Massive (amortized I/O and vectorized instructions)', winner: 'B' },
        { feature: 'Database & Disk I/O Load', optionA: 'Thousands of random I/O operations/sec', optionB: 'Compact sequential block writes', winner: 'B' },
        { feature: 'Use Case Fit', optionA: 'Real-time UI requests, gaming, algorithmic trading', optionB: 'Log indexing, analytics, event streaming, data pipelines', winner: 'Tie' },
      ],
    },
    decisionTree: {
      question: 'Should you optimize for lower latency or higher throughput?',
      options: [
        { condition: 'Interactive user-facing endpoints (e.g. search autocomplete, checkout)', recommendation: 'Optimize Latency (p99)', explanation: 'Keep latency below 100ms. Avoid batching on the synchronous request path.', badge: 'User UX' },
        { condition: 'Data ingestion, analytics pipelines, or log processing', recommendation: 'Optimize Throughput via Micro-batching', explanation: 'Batch items into 50ms / 500-item chunks to drastically reduce network trips and disk write amplification.', badge: 'Data Ingestion' },
      ],
    },
    pros: [
      'Understanding Little’s Law enables accurate concurrency and thread pool sizing.',
      'Batching unlocks 10x-100x higher throughput for write-heavy systems.',
    ],
    cons: [
      'Batching introduces buffering latency and memory pressure if workers lag.',
    ],
    whenToUse: [
      'When designing high-volume data ingest (Kafka, ClickHouse, ElasticSearch).',
      'When sizing connection pools and load balancer worker limits.',
    ],
    whenNotToUse: [
      'Never batch synchronous financial authorization requests where instant confirmation is required.',
    ],
    pitfalls: [
      'Monitoring only average latency (p50) instead of tail latency (p95, p99, p99.9).',
      'Failing to set socket and connection timeouts, allowing slow requests to tie up thread pools indefinitely.',
    ],
    realWorldExamples: [
      { company: 'Kafka', useCase: 'Log Append Optimization', architectureDetail: 'Combines multiple write requests into batches on the producer side, achieving millions of events/sec over standard network cards.' },
      { company: 'Google Search', useCase: 'Tail Latency Taming', architectureDetail: 'Issues hedged duplicate requests to a second replica if the primary replica takes longer than p95 to answer.' },
    ],
    interviewQuestions: [
      {
        question: 'Why does Google issue "hedged requests" (sending the same query to multiple replicas) to optimize tail latency?',
        answerHint: 'In a large cluster, random background events (garbage collection pauses, disk jitter, network retransmits) cause 1% of nodes to be slow. By sending a backup request after a short timeout to another replica, tail latency is reduced to the minimum of both requests without doubling average cluster load.',
        keyPoints: ['Tail latency is driven by random outliers (GC pauses, disk queueing)', 'Hedged request fires after p90/p95 threshold', 'First replica to respond wins, canceling the other'],
      },
    ],
    relatedTopicSlugs: ['performance-vs-scalability', 'message-queues-vs-task-queues', 'caching-levels'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (Latency vs Throughput)',
  },

  // 3. CAP Theorem
  {
    id: 'cap-theorem',
    slug: 'cap-theorem',
    title: 'CAP Theorem & PACELC',
    category: 'fundamentals',
    categoryName: 'Fundamentals & Trade-offs',
    difficulty: 'Intermediate',
    estimatedMinutes: 12,
    prerequisites: ['performance-vs-scalability'],
    summary: 'In a distributed computer system, you can only support two of the following guarantees: Consistency, Availability, and Partition Tolerance.',
    definition: 'The CAP Theorem (Brewer’s Theorem) states that in the presence of a Network Partition (P), a distributed system MUST choose between Consistency (C) and Availability (A). You cannot choose "CA" because network partitions are a physical reality of distributed networks.',
    intuition: 'Imagine two bank branches in New York and London connected by an undersea cable. If a shark bites the undersea cable (Network Partition), and a customer deposits $1,000 in NY while someone tries to withdraw in London: You either block the London withdrawal until the link recovers (Consistency over Availability), or you allow the withdrawal risking an overdraft (Availability over Consistency).',
    deepDive: `### The 3 Guarantees:
1. **Consistency (C)**: Every read receives the most recent write or an error. (Linearizability).
2. **Availability (A)**: Every non-failing node returns a non-error response for every request, without guarantee that it contains the most recent write.
3. **Partition Tolerance (P)**: The system continues to operate despite an arbitrary number of messages being dropped or delayed by the network between nodes.

### Why "CA" Systems Do Not Exist in Distributed Computing:
Network hardware, switches, and internet routes WILL experience packet loss, fiber cuts, or high latency. Therefore, **Partition Tolerance (P) is mandatory**. You can only choose:
- **CP (Consistency + Partition Tolerance)**: If nodes cannot communicate, refuse writes or return errors to prevent stale/divergent data (e.g. ZooKeeper, etcd, Google Spanner, HBase).
- **AP (Availability + Partition Tolerance)**: If nodes cannot communicate, accept writes and reads on all partitions, resolving conflicts later (e.g. Cassandra, DynamoDB, Couchbase).

### PACELC Theorem Extension:
CAP only talks about behavior *during a network partition*. PACELC explains behavior *under normal conditions*:
- If there is a **P**artition: trade off **A**vailability vs **C**onsistency.
- **E**lse (normal operation): trade off **L**atency vs **C**onsistency.
  - Examples: **PC/EC** (ZooKeeper, Spanner), **PA/EL** (DynamoDB, Cassandra with weak quorum).`,
    diagramData: {
      title: 'CAP Partition Scenario: Node Isolation',
      description: 'When the inter-datacenter link fails, node replicas must decide between rejecting requests or serving stale data.',
      nodes: [
        { id: 'clientA', label: 'Client US (Write $100)', type: 'client', x: 60, y: 80, role: 'Writes updated balance to Primary' },
        { id: 'clientB', label: 'Client EU (Read)', type: 'client', x: 60, y: 220, role: 'Reads balance from Replica' },
        { id: 'nodeA', label: 'Node A (US Datacenter)', sublabel: 'Balance: $100', type: 'db', x: 380, y: 80, latency: '2ms', throughput: '10K QPS', role: 'CP: Accepts write. AP: Accepts write.' },
        { id: 'nodeB', label: 'Node B (EU Datacenter)', sublabel: 'Balance: $0 (Stale)', type: 'db', x: 380, y: 220, latency: '2ms', throughput: '10K QPS', role: 'CP: Returns Error (Unavailable). AP: Returns $0 (Stale).' },
      ],
      edges: [
        { from: 'clientA', to: 'nodeA', label: 'Write $100', protocol: 'HTTPS' },
        { from: 'clientB', to: 'nodeB', label: 'Read Request', protocol: 'HTTPS' },
        { from: 'nodeA', to: 'nodeB', label: '❌ Partition Cut (Undersea Cable Down)', protocol: 'DISCONNECTED' },
      ],
    },
    tradeOffs: {
      title: 'CP System vs AP System',
      optionAName: 'CP (Consistency Priority)',
      optionBName: 'AP (Availability Priority)',
      description: 'Handling network isolation in distributed datastores.',
      comparisons: [
        { feature: 'Data Correctness Under Split', optionA: 'Guaranteed 100% accurate (no stale reads or dirty writes)', optionB: 'Eventual consistency; reads may return stale data', winner: 'A' },
        { feature: 'System Uptime / Error Rate Under Split', optionA: 'Returns 500 errors or blocks until quorum recovered', optionB: '100% uptime: always accepts reads and writes', winner: 'B' },
        { feature: 'Write Latency (PACELC normal mode)', optionA: 'Higher (requires synchronous consensus / Paxos / Raft)', optionB: 'Lower (local write + async gossip replication)', winner: 'B' },
        { feature: 'Conflict Resolution', optionA: 'Not required (linear serialized log)', optionB: 'Requires Vector Clocks, Last-Write-Wins (LWW), or CRDTs', winner: 'A' },
      ],
    },
    decisionTree: {
      question: 'Which CAP trade-off fits your domain?',
      options: [
        { condition: 'Financial transactions, inventory reservations, leader election, configuration management', recommendation: 'Choose CP (e.g., PostgreSQL primary, Spanner, etcd, ZooKeeper)', explanation: 'Double spending or conflicting leader state causes catastrophic business errors. Better to fail a request than corrupt balance.', badge: 'CP Guarantee' },
        { condition: 'Social media feeds, messaging status, shopping cart browse, analytics, IoT sensor telemetry', recommendation: 'Choose AP (e.g., Cassandra, DynamoDB, ScyllaDB)', explanation: 'A user seeing a tweet 2 seconds late is completely acceptable, but a downtime outage will cost revenue and trust.', badge: 'AP Guarantee' },
      ],
    },
    pros: [
      'Clarifies non-negotiable physical laws of distributed networks.',
      'Forces explicit design decisions between data safety vs service availability.',
    ],
    cons: [
      'Often misunderstood as an all-or-nothing choice (many modern databases allow per-query tunable consistency, e.g. Cassandra Quorum reads).',
    ],
    whenToUse: [
      'Every time you evaluate distributed databases, multi-region replication, and microservice state sync.',
    ],
    whenNotToUse: [
      'Do not apply CAP to single-node relational databases with no network replication.',
    ],
    pitfalls: [
      'Claiming your system is "CA" across a multi-region distributed network. Network partitions are inevitable.',
      'Using Last-Write-Wins (LWW) in AP systems with un-synchronized server clocks (NTP drift can silently overwrite newer writes).',
    ],
    realWorldExamples: [
      { company: 'Google Spanner', useCase: 'Global Synchronous Consistency', architectureDetail: 'Uses atomic TrueTime GPS and atomic clocks in datacenters to provide external consistency (CP) with high availability.' },
      { company: 'Amazon DynamoDB', useCase: 'Shopping Cart Availability', architectureDetail: 'Original Dynamo paper was designed as AP so customers could always add items to cart even if a datacenter was disconnected.' },
    ],
    interviewQuestions: [
      {
        question: 'Can you configure Cassandra to behave as a CP database?',
        answerHint: 'Yes, by configuring Strong Quorum: Write at QUORUM and Read at QUORUM ($R + W > N$). If a network partition prevents reaching quorum, writes and reads fail, guaranteeing Consistency at the expense of Availability.',
        keyPoints: ['Quorum formula: R + W > N', 'If majority of replicas are unreachable, request fails', 'Transforms default AP behavior into CP behavior'],
      },
    ],
    relatedTopicSlugs: ['consistency-patterns', 'database-replication', 'database-sharding'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (CAP Theorem)',
  },

  // 4. Load Balancing
  {
    id: 'load-balancing',
    slug: 'load-balancing',
    title: 'Load Balancers (L4 vs L7 & Algorithms)',
    category: 'networking',
    categoryName: 'Networking & Infrastructure',
    difficulty: 'Intermediate',
    estimatedMinutes: 14,
    prerequisites: ['performance-vs-scalability'],
    summary: 'Load balancers distribute incoming network traffic across multiple backend servers to ensure high availability, scalability, and responsiveness.',
    definition: 'A Load Balancer is a hardware or software device that sits between clients and a backend server pool, distributing incoming requests based on algorithms and health checks to prevent any single server from becoming a bottleneck.',
    intuition: 'Think of an airport security checkpoint supervisor. Rather than letting 500 passengers crowd into one security line, the supervisor directs passengers to open metal detectors based on who has the shortest line.',
    deepDive: `### Layer 4 vs Layer 7 Load Balancing:
- **Layer 4 (Transport Layer - TCP/UDP)**:
  - Operates purely at the transport layer (IP address and TCP/UDP port).
  - Does NOT inspect application packet contents (HTTP headers, cookies, URLs).
  - Extremely fast, high throughput, low CPU overhead (acts like stateful NAT / packet router).
  - Examples: AWS NLB (Network Load Balancer), HAProxy in TCP mode, IPVS.
- **Layer 7 (Application Layer - HTTP/HTTPS/gRPC)**:
  - Terminates TLS/SSL, parses HTTP headers, cookies, URL paths, and query params.
  - Can perform intelligent routing (e.g. \`/api/video/*\` to Video cluster, \`/api/billing/*\` to Billing cluster).
  - Can modify headers, inject authentication tokens, perform rate limiting, and compress responses.
  - Examples: AWS ALB (Application Load Balancer), NGINX, Envoy, Traefik.

### Load Balancing Algorithms:
1. **Round Robin**: Distributes requests sequentially across the list of healthy servers.
2. **Weighted Round Robin**: Assigns higher weight to servers with more CPU/RAM.
3. **Least Connections**: Sends requests to the server with the fewest active open connections.
4. **Least Response Time**: Combines active connections with server response latency.
5. **IP Hash / Consistent Hashing**: Hashes client IP to route repeat requests to the same backend (useful for local caching / sticky sessions).`,
    diagramData: {
      title: 'Layer 7 Path-Based Load Balancing Architecture',
      description: 'L7 Load Balancer inspecting HTTP URI paths to route requests to specialized microservice fleets.',
      nodes: [
        { id: 'clients', label: 'Public Internet Traffic', sublabel: 'HTTPS Requests', type: 'client', x: 50, y: 150, role: 'Sends API & Static requests' },
        { id: 'alb', label: 'Layer 7 ALB / Envoy', sublabel: 'SSL Termination & Routing', type: 'lb', x: 280, y: 150, latency: '1.5ms', throughput: '250K QPS', role: 'Inspects HTTP path & headers' },
        { id: 'usersSvc', label: 'Auth & User Service', sublabel: '/api/v1/users/*', type: 'server', x: 550, y: 70, latency: '8ms', throughput: '30K QPS', role: 'Handles user authentication' },
        { id: 'ordersSvc', label: 'Orders & Payments', sublabel: '/api/v1/orders/*', type: 'server', x: 550, y: 150, latency: '22ms', throughput: '15K QPS', role: 'Processes transactions' },
        { id: 'mediaSvc', label: 'Media Transcoding', sublabel: '/api/v1/media/*', type: 'server', x: 550, y: 230, latency: '85ms', throughput: '5K QPS', role: 'Heavy CPU video rendering' },
      ],
      edges: [
        { from: 'clients', to: 'alb', label: 'HTTPS / TLS 1.3', protocol: 'TCP:443' },
        { from: 'alb', to: 'usersSvc', label: 'Path: /users', protocol: 'HTTP/2' },
        { from: 'alb', to: 'ordersSvc', label: 'Path: /orders', protocol: 'HTTP/2' },
        { from: 'alb', to: 'mediaSvc', label: 'Path: /media', protocol: 'gRPC' },
      ],
    },
    tradeOffs: {
      title: 'Layer 4 Load Balancer vs Layer 7 Load Balancer',
      optionAName: 'Layer 4 (Transport / NLB)',
      optionBName: 'Layer 7 (Application / ALB / Envoy)',
      description: 'Balancing raw packet routing speed against application-aware intelligence.',
      comparisons: [
        { feature: 'Raw Packet Throughput & Latency', optionA: 'Sub-millisecond, millions of packets/sec', optionB: 'Slightly higher latency (must buffer and parse HTTP payload)', winner: 'A' },
        { feature: 'Intelligent Path & Header Routing', optionA: 'No (cannot see HTTP URLs, paths, or cookies)', optionB: 'Yes (route by path, subdomain, header, JWT claims)', winner: 'B' },
        { feature: 'TLS / SSL Termination', optionA: 'Pass-through TCP only (unless specific TLS wrapper)', optionB: 'Native offloading of heavy crypto SSL handshakes', winner: 'B' },
        { feature: 'Sticky Sessions / Cookie Affinity', optionA: 'IP-based hashing only (fails behind NAT/proxy)', optionB: 'Cookie-based session stickiness', winner: 'B' },
      ],
    },
    decisionTree: {
      question: 'Which Load Balancer type should you deploy?',
      options: [
        { condition: 'Microservices routing, HTTP REST/GraphQL APIs, WebSocket handling, Path-based routing', recommendation: 'Use Layer 7 (e.g. AWS ALB, NGINX, Envoy)', explanation: 'Provides rich routing rules, SSL termination, and rate limiting out of the box.', badge: 'Microservices' },
        { condition: 'Ultra-high throughput gaming servers, VoIP/SIP, Raw TCP/UDP database proxying, millions of PPS', recommendation: 'Use Layer 4 (e.g. AWS NLB, HAProxy TCP mode)', explanation: 'Avoids HTTP parsing overhead and handles sudden millions of spikes directly at transport layer.', badge: 'High Throughput' },
      ],
    },
    pros: [
      'Eliminates single points of failure via automated health checks.',
      'Enables zero-downtime rolling deployments (blue/green, canary).',
      'Provides SSL/TLS termination offloading cryptographic CPU burden from application servers.',
    ],
    cons: [
      'The load balancer itself can become a bottleneck or SPOF if not deployed in an active-passive or active-active pair with floating IP (BGP / Anycast).',
    ],
    whenToUse: [
      'Any time you have more than 1 server instance.',
      'To distribute traffic across multiple availability zones.',
    ],
    whenNotToUse: [
      'Do not place an L7 load balancer between tightly coupled, internal low-latency microservices where direct gRPC with client-side load balancing is superior.',
    ],
    pitfalls: [
      'Using Simple Round Robin when request processing times vary by orders of magnitude (e.g. 5ms vs 5,000ms), causing one server to queue up while others are idle. Use Least Connections instead!',
      'Misconfiguring health check endpoints to query heavy database joins, causing health check storms that take down the entire cluster.',
    ],
    realWorldExamples: [
      { company: 'GitHub', useCase: 'GLB (GitHub Load Balancer)', architectureDetail: 'Built an open-source bare-metal Layer 4 load balancer using DPDK and consistent hashing with zero connection drops during server draining.' },
      { company: 'Netflix', useCase: 'Zuul / Envoy Edge Gateway', architectureDetail: 'Uses L7 routing at the front door to handle canary testing, routing 1% of live traffic to experimental microservice builds.' },
    ],
    interviewQuestions: [
      {
        question: 'How do you prevent the Load Balancer itself from being a Single Point of Failure (SPOF)?',
        answerHint: 'Deploy an Active-Passive pair with VRRP / Keepalived (shared floating Virtual IP), or an Active-Active pair using DNS Round Robin and ECMP (Equal-Cost Multi-Path) Anycast routing at the BGP network layer.',
        keyPoints: ['Active-Passive with Keepalived / VRRP heartbeat', 'DNS Anycast BGP routing across multiple datacenters', 'Cloud providers (AWS ALB) manage multi-AZ active-active instances automatically'],
      },
    ],
    relatedTopicSlugs: ['performance-vs-scalability', 'reverse-proxy', 'dns', 'cdn'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (Load Balancer)',
  },

  // 5. Caching Strategies
  {
    id: 'cache-invalidation-patterns',
    slug: 'cache-invalidation-patterns',
    title: 'Caching Strategies & Invalidation Patterns',
    category: 'caching',
    categoryName: 'Caching Strategies',
    difficulty: 'Intermediate',
    estimatedMinutes: 15,
    prerequisites: ['performance-vs-scalability', 'latency-vs-throughput'],
    summary: 'Master the core caching architectures: Cache Aside, Write-Through, Write-Back (Write-Behind), and Refresh-Ahead.',
    definition: 'Caching is the technique of storing copies of frequently accessed data in high-speed volatile memory (RAM like Redis/Memcached) to serve read requests with sub-millisecond latency and reduce load on primary databases.',
    intuition: 'Think of a chef cooking in a kitchen. The primary database is the deep storage pantry downstairs. The cache is the countertop cutting board right in front of the chef. Keeping salt and pepper on the countertop saves trips to the basement.',
    deepDive: `### The 4 Major Caching Patterns:

1. **Cache-Aside (Lazy Loading)**:
   - Application first queries the cache.
   - If **Cache Hit**: return data immediately.
   - If **Cache Miss**: query database, write retrieved data to cache with TTL, and return.
   - **Pros**: Only requested data is cached (memory efficient); resilient to cache node failures.
   - **Cons**: Cache miss penalty (3 round trips); stale data if DB is updated directly.

2. **Write-Through**:
   - Application writes to the cache, and the cache synchronously writes to the database.
   - **Pros**: High data consistency between cache and DB; subsequent reads are always hits.
   - **Cons**: High write latency (waits for 2 writes); caches data that may never be read again (pollutes memory).

3. **Write-Back (Write-Behind)**:
   - Application writes only to the cache and receives an immediate success response.
   - The cache asynchronously flushes queued writes to the database in batches.
   - **Pros**: Ultra-fast write performance and high write throughput (reduces DB write IOPS via batching).
   - **Cons**: **Risk of data loss** if the cache crashes before dirty writes are flushed to persistent disk!

4. **Refresh-Ahead**:
   - Cache automatically reloads data from the database before its TTL expires based on access patterns.
   - **Pros**: Near-zero cache miss latency for hot keys.
   - **Cons**: Requires accurate predictive access modeling to avoid redundant DB queries.`,
    diagramData: {
      title: 'Cache Aside vs Write-Back Flow',
      description: 'Synchronous lazy read-through flow vs asynchronous queued write-back persistence.',
      nodes: [
        { id: 'app', label: 'Application Worker', sublabel: 'Node / Go Backend', type: 'server', x: 80, y: 150, latency: '0.5ms', throughput: '20K QPS', role: 'Coordinates reads and writes' },
        { id: 'cache', label: 'Redis Cluster', sublabel: 'In-Memory RAM Store', type: 'cache', x: 380, y: 80, latency: '0.4ms', throughput: '100K QPS', role: 'Serves hot keys in RAM' },
        { id: 'db', label: 'PostgreSQL Primary', sublabel: 'Persistent Disk Store', type: 'db', x: 680, y: 220, latency: '5ms', throughput: '4K QPS', role: 'Source of truth database' },
      ],
      edges: [
        { from: 'app', to: 'cache', label: '1. Check Cache (Hit/Miss)', protocol: 'RESP' },
        { from: 'app', to: 'db', label: '2. Fallback on Miss / Write', protocol: 'SQL' },
        { from: 'cache', to: 'db', label: 'Write-Back (Async batch flush)', protocol: 'TCP' },
      ],
    },
    tradeOffs: {
      title: 'Cache-Aside vs Write-Through vs Write-Back',
      optionAName: 'Cache-Aside (Lazy Loading)',
      optionBName: 'Write-Through / Write-Back',
      description: 'Evaluating memory efficiency, write latency, and data consistency.',
      comparisons: [
        { feature: 'Read Latency on Cache Hit', optionA: '< 1ms', optionB: '< 1ms', winner: 'Tie' },
        { feature: 'Write Latency', optionA: 'Standard DB write speed', optionB: 'Write-Back: < 1ms (super fast); Write-Through: Slower (2 writes)', winner: 'B' },
        { feature: 'Memory Utilization', optionA: 'Optimal (only actually queried items are cached)', optionB: 'Can cache cold writes that are never read', winner: 'A' },
        { feature: 'Data Loss Risk on Crash', optionA: 'Zero (DB is always updated first)', optionB: 'Write-Back has data loss risk if Redis dies before flush', winner: 'A' },
      ],
    },
    decisionTree: {
      question: 'Which caching pattern should you implement?',
      options: [
        { condition: 'General web application, read-heavy workloads (e.g. user profiles, product catalogs)', recommendation: 'Implement Cache-Aside with explicit TTL', explanation: 'Most common and resilient pattern. Combine with DB update invalidation to prevent stale reads.', badge: 'Standard Pattern' },
        { condition: 'Write-heavy streaming telemetry, real-time vote counters, gaming leaderboards', recommendation: 'Implement Write-Back with Write-Ahead Logging (WAL)', explanation: 'Absorbs huge write spikes in memory, flushing to disk asynchronously in 100ms batches.', badge: 'High Write Throughput' },
      ],
    },
    pros: [
      'Reduces database read load by 80-95% (Pareto 80/20 principle).',
      'Cuts API response times from 50ms to 2ms.',
    ],
    cons: [
      'Cache invalidation is notoriously tricky ("There are only two hard things in Computer Science: cache invalidation and naming things").',
      'Requires handling Cache Stampede (Thundering Herd) and Cache Penetration.',
    ],
    whenToUse: [
      'When reads outnumber writes by at least 5:1.',
      'When database CPU utilization is high due to repeated read queries.',
    ],
    whenNotToUse: [
      'Do not cache rapidly mutating, unique single-use data where cache hit rate is below 10%.',
    ],
    pitfalls: [
      '**Thundering Herd / Cache Stampede**: When a popular cached key expires, thousands of concurrent requests all miss simultaneously and hammer the database. (Mitigate with mutex locking or probabilistic early expiration).',
      '**Cache Penetration**: Malicious queries for non-existent IDs bypass cache and hit DB directly. (Mitigate with Bloom Filters or caching null values).',
    ],
    realWorldExamples: [
      { company: 'Twitter / X', useCase: 'Home Timeline Caching', architectureDetail: 'Maintains timeline caches in Redis for active users so fetching the home feed requires zero SQL queries.' },
      { company: 'Reddit', useCase: 'Vote Count Aggregation', architectureDetail: 'Uses Write-Behind caching to buffer thousands of upvotes in memory before updating relational comment scores in batches.' },
    ],
    interviewQuestions: [
      {
        question: 'How do you calculate how much RAM you need for your Redis cache tier?',
        answerHint: 'Apply the 80/20 rule: 20% of your daily data generates 80% of read traffic. Multiply (Daily Read Requests * 20% * Average Object Size in bytes) and add 25-30% memory buffer for Redis overhead and eviction data structures.',
        keyPoints: ['Pareto principle: Cache the active 20%', 'Formula: Daily Reads * 0.20 * Object Size + 30% overhead', 'Include memory for keys, indexes, and connection buffers'],
      },
    ],
    relatedTopicSlugs: ['database-sharding', 'rdbms-vs-nosql', 'latency-vs-throughput'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (Cache)',
  },

  // 6. Database Sharding & Partitioning
  {
    id: 'database-sharding',
    slug: 'database-sharding',
    title: 'Database Sharding & Horizontal Partitioning',
    category: 'databases',
    categoryName: 'Databases & Storage',
    difficulty: 'Advanced',
    estimatedMinutes: 16,
    prerequisites: ['rdbms-vs-nosql'],
    summary: 'Break massive monolithic databases into independent horizontal partitions (shards) across multiple database servers to scale writes and storage.',
    definition: 'Database Sharding is the architectural pattern of splitting a single logical dataset horizontally into multiple smaller physical database instances (shards), where each shard holds a unique subset of rows based on a Shard Key.',
    intuition: 'Think of an enormous library with 10 million books. Instead of keeping all books in one gigantic room with one librarian (bottleneck), you build 26 separate wings, where Wing A holds all authors starting with A, Wing B holds B, and each wing has its own dedicated librarian.',
    deepDive: `When data volume and write throughput exceed the hardware limits of a single primary database (even with read replicas), you must shard.

### Sharding Strategies:
1. **Hash-Based Sharding (Algorithmic / Modulo)**:
   - Shard ID = $\\text{Hash}(\\text{ShardKey}) \\pmod N$
   - **Pros**: Uniform distribution of data across all shards; prevents hotspots.
   - **Cons**: Adding a new shard changes $N$, requiring expensive **Re-sharding** of all data! (Mitigated by Consistent Hashing with virtual vnodes).
2. **Range-Based Sharding**:
   - Data is partitioned by key ranges (e.g. Users A-D on Shard 1, E-H on Shard 2, or by Date range).
   - **Pros**: Range queries within a shard are trivial (\`BETWEEN 2024-01-01 AND 2024-01-31\`).
   - **Cons**: Severe risk of **Hotspots** (e.g. today's date shard receives 99% of write traffic).
3. **Directory / Lookup-Based Sharding**:
   - A centralized lookup service maps entity IDs to specific physical shards.
   - **Pros**: Highly flexible; easy to migrate individual large tenants to dedicated shards.
   - **Cons**: Lookup service is an extra network hop and a potential SPOF.`,
    diagramData: {
      title: 'Hash-Based Database Sharding Architecture',
      description: 'Router hashing user_id to route queries to Shard 1, 2, or 3.',
      nodes: [
        { id: 'app', label: 'App Servers', sublabel: 'Query Layer', type: 'server', x: 50, y: 150, role: 'Executes CRUD queries' },
        { id: 'router', label: 'Shard Proxy / Router', sublabel: 'e.g. Vitess / Citus', type: 'gateway', x: 280, y: 150, latency: '0.8ms', throughput: '80K QPS', role: 'Hashes user_id % 3' },
        { id: 'shard1', label: 'Shard 1 (Users 0-33%)', sublabel: 'PostgreSQL Primary + Replica', type: 'db', x: 550, y: 60, latency: '3ms', throughput: '25K QPS', role: 'Stores users 0 - 33M' },
        { id: 'shard2', label: 'Shard 2 (Users 34-66%)', sublabel: 'PostgreSQL Primary + Replica', type: 'db', x: 550, y: 150, latency: '3ms', throughput: '25K QPS', role: 'Stores users 34 - 66M' },
        { id: 'shard3', label: 'Shard 3 (Users 67-100%)', sublabel: 'PostgreSQL Primary + Replica', type: 'db', x: 550, y: 240, latency: '3ms', throughput: '25K QPS', role: 'Stores users 67 - 100M' },
      ],
      edges: [
        { from: 'app', to: 'router', label: 'SELECT * WHERE user_id = 42', protocol: 'Postgres wire' },
        { from: 'router', to: 'shard1', label: 'hash(42) % 3 = 0', protocol: 'SQL' },
        { from: 'router', to: 'shard2', label: 'hash(99) % 3 = 1', protocol: 'SQL' },
        { from: 'router', to: 'shard3', label: 'hash(157) % 3 = 2', protocol: 'SQL' },
      ],
    },
    pros: [
      'Enables infinite write scalability and petabyte-scale storage.',
      'Limits failure blast radius: if Shard 1 fails, only 33% of users are impacted while 66% continue working normally.',
    ],
    cons: [
      'Huge engineering complexity: joins, foreign keys, and distributed transactions break.',
      'Uneven data distribution can cause Hot Shards.',
    ],
    whenToUse: [
      'When write throughput exceeds 10,000 writes/sec on the primary database.',
      'When total storage volume exceeds multi-terabyte thresholds.',
    ],
    whenNotToUse: [
      'Do not shard before exhausting caching, read replicas, SQL index tuning, and table partitioning.',
    ],
    pitfalls: [
      'Choosing a poor Shard Key (e.g. sharding by Country or Creation Date, creating massive hot shards on USA or recent dates).',
      'Failing to plan for re-sharding from day one (use Consistent Hashing with virtual buckets).',
    ],
    realWorldExamples: [
      { company: 'Instagram', useCase: 'Post & User Sharding', architectureDetail: 'Shards PostgreSQL across thousands of logical databases, using a custom 64-bit ID generation scheme that encodes the shard ID in the first 13 bits of every primary key.' },
    ],
    interviewQuestions: [
      {
        question: 'How do you generate globally unique, incrementing 64-bit IDs across a distributed sharded database without a central bottleneck?',
        answerHint: 'Use the Twitter Snowflake approach: 64-bit ID made of 41 bits timestamp (epoch ms) + 10 bits machine/shard ID + 12 bits local sequence number + 1 unused sign bit.',
        keyPoints: ['Structure: Timestamp (41b) + Shard ID (10b) + Sequence (12b)', 'Sortable by time naturally in B-Tree indexes', 'Zero network round-trip overhead'],
      },
    ],
    relatedTopicSlugs: ['rdbms-vs-nosql', 'cap-theorem'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (Sharding)',
  },

  // 7. Message Queues & Asynchronous Processing
  {
    id: 'message-queues-vs-task-queues',
    slug: 'message-queues-vs-task-queues',
    title: 'Message Queues vs Task Queues & Back Pressure',
    category: 'distributed-systems',
    categoryName: 'Distributed Systems & Async',
    difficulty: 'Intermediate',
    estimatedMinutes: 14,
    prerequisites: ['performance-vs-scalability', 'latency-vs-throughput'],
    summary: 'Decouple services, absorb traffic spikes, and process heavy background workloads reliably with message brokers and backpressure mechanisms.',
    definition: 'Message Queues and Task Queues are asynchronous communication channels that decouple producers of work from consumers, buffering requests in memory/disk to enable independent scaling and fault tolerance.',
    intuition: 'Think of an order ticket spindle in a busy restaurant kitchen. The waitstaff places orders on the spindle without waiting for the chef to cook them. The chefs pull tickets from the spindle at their own pace.',
    deepDive: `### Message Queues vs Task Queues:
- **Message Queue (Pub/Sub & Streaming - Kafka, RabbitMQ, AWS SQS)**:
  - Focuses on raw message transport and fan-out distribution.
  - Producers emit events (e.g. \`OrderPlacedEvent\`); multiple independent consumer groups process the event.
  - High throughput, streaming, event-sourcing.
- **Task Queue (Job Scheduling & Retries - Celery, BullMQ, Sidekiq)**:
  - Focuses on executing units of discrete computational work (e.g. \`GenerateInvoicePDF(orderId)\`).
  - Provides built-in job retries, exponential backoff, rate limits, progress tracking, and scheduling (cron).`,
    pros: [
      'Traffic Spike Smoothing: Prevents database crashes by converting sudden spikes into steady processing queues.',
      'Fault Isolation: If a downstream service crashes, messages wait safely in queue instead of failing user requests.',
    ],
    cons: [
      'Eventual Consistency: State is not updated immediately upon API response.',
      'Message deduplication and idempotent consumer logic are mandatory.',
    ],
    whenToUse: [
      'Long-running computational tasks, video transcoding, email/SMS sending.',
      'High-throughput event ingestion (clicks, metrics, IoT telemetry).',
    ],
    whenNotToUse: [
      'Low-latency synchronous read queries where the user is actively waiting for data to render a web page.',
    ],
    pitfalls: [
      'Not designing consumers to be **Idempotent** (handling duplicate message delivery safely using unique idempotency tokens).',
    ],
    realWorldExamples: [
      { company: 'Uber', useCase: 'Trip Receipt & Analytics Ingestion', architectureDetail: 'Streams all ride GPS points and fare completions through Apache Kafka clusters processing trillions of events daily.' },
    ],
    interviewQuestions: [
      {
        question: 'What is the difference between "At-Least-Once", "At-Most-Once", and "Exactly-Once" message delivery?',
        answerHint: 'At-Most-Once sends messages without retry (may lose data). At-Least-Once retries until acknowledged (guarantees no lost data, but may produce duplicates). Exactly-Once requires At-Least-Once delivery combined with Idempotent consumers.',
        keyPoints: ['At-Least-Once is industry standard', 'Consumers must be idempotent', 'Avoids distributed 2PC locking overhead'],
      },
    ],
    relatedTopicSlugs: ['performance-vs-scalability', 'latency-vs-throughput', 'microservices-vs-monolith'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (Asynchronous / Message Queues)',
  },

  // 8. DNS
  {
    id: 'dns',
    slug: 'dns',
    title: 'Domain Name System (DNS) & Anycast Routing',
    category: 'networking',
    categoryName: 'Networking & Infrastructure',
    difficulty: 'Beginner',
    estimatedMinutes: 10,
    prerequisites: [],
    summary: 'DNS translates human-readable domain names into IP addresses and serves as the global entry point for geo-routing and failover.',
    definition: 'The Domain Name System (DNS) is a hierarchical, distributed naming system that maps human-friendly hostnames to machine-routable IP addresses.',
    intuition: 'DNS is the phonebook of the Internet. Instead of memorizing 10-digit phone numbers for everyone you know, you look up their name in your contacts list.',
    deepDive: `### DNS Resolution Hierarchy:
1. **Browser & OS Cache**: Checks local in-memory cache and \`/etc/hosts\`.
2. **Resolving Name Server (Recursive Resolver)**: ISP or public DNS (8.8.8.8, 1.1.1.1).
3. **Root Name Server (.)**: Directs resolver to Top-Level Domain (TLD) server.
4. **TLD Name Server (.com, .io)**: Directs resolver to the Authoritative Name Server.
5. **Authoritative Name Server**: Returns the final DNS record (A, AAAA, CNAME, ALIAS).`,
    pros: ['Enables global multi-region traffic steering and disaster recovery failover.'],
    cons: ['DNS caching by ISPs can delay failovers if TTL is configured too high.'],
    whenToUse: ['Global multi-region traffic distribution and domain resolution.'],
    whenNotToUse: ['Do not rely solely on DNS for sub-second failover.'],
    pitfalls: ['Setting DNS TTL to days during a migration, preventing fast rollback.'],
    realWorldExamples: [
      { company: 'Cloudflare', useCase: '1.1.1.1 DNS', architectureDetail: 'Uses BGP Anycast across 300+ cities worldwide to resolve DNS queries in under 15ms globally.' }
    ],
    interviewQuestions: [
      {
        question: 'What happens when a user types a URL into their browser until the page loads?',
        answerHint: '1. DNS lookup. 2. TCP handshake. 3. TLS handshake. 4. HTTP request. 5. Server reverse proxy / App processing. 6. HTTP response. 7. Browser DOM parsing.',
        keyPoints: ['DNS hierarchy', 'TCP 3-way handshake', 'TLS 1.3 negotiation', 'HTTP request/response']
      }
    ],
    relatedTopicSlugs: ['cdn', 'load-balancing', 'reverse-proxy'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (DNS)',
  },

  // 9. Scaling AWS 10M Users
  {
    id: 'scaling-aws-10m-users',
    slug: 'scaling-aws-10m-users',
    title: 'Scaling AWS Architecture from 1 to 10M Users',
    category: 'real-world-architectures',
    categoryName: 'Real-World Case Studies',
    difficulty: 'Advanced',
    estimatedMinutes: 20,
    prerequisites: ['performance-vs-scalability', 'load-balancing', 'cache-invalidation-patterns', 'database-sharding'],
    summary: 'The iconic step-by-step evolution of a web application on AWS as traffic grows from 1 user to 10 million concurrent users.',
    definition: 'A benchmark architectural walkthrough showcasing the transition from a single monolithic EC2 box to a distributed, multi-AZ, auto-scaled, cached, and sharded microservices architecture.',
    intuition: 'Building a system is like city planning: start with a single cabin, expand to two lanes, build a highway, add a subway, and eventually regional bullet trains.',
    deepDive: `### The 7 Stages of Scale:
1. **User 1 (Day 1 - Single Box)**: EC2 with web app + database.
2. **Users > 1,000 (Decouple Database)**: Amazon RDS on separate instance with backups.
3. **Users > 10,000 (Horizontal Web Tier + ALB)**: Stateless web fleet behind ALB across 2 AZs.
4. **Users > 100,000 (Caching & CDN)**: CloudFront CDN + ElastiCache (Redis) + RDS Read Replicas.
5. **Users > 500,000 (Auto Scaling & S3)**: Auto Scaling Groups + S3 media storage.
6. **Users > 1,000,000 (Decouple with SQS/Kafka)**: Background worker fleets.
7. **Users > 10,000,000 (Sharding & Microservices)**: Sharded Aurora clusters / DynamoDB + Microservices.`,
    pros: ['Clear milestone-based progression showing when to introduce each system component.'],
    cons: ['Requires sophisticated observability at scale (OpenTelemetry/Datadog).'],
    whenToUse: ['As a master framework for answering end-to-end system design interview questions.'],
    whenNotToUse: ['Do not build Stage 7 architecture on Day 1!'],
    pitfalls: ['Over-engineering microservices before having users.'],
    realWorldExamples: [
      { company: 'Pinterest', useCase: 'Scaling on AWS', architectureDetail: 'Evolved from a single MySQL box on AWS to thousands of EC2 nodes and sharded MySQL clusters.' }
    ],
    interviewQuestions: [
      {
        question: 'What is the exact order of steps you take when a database becomes the bottleneck as users scale?',
        answerHint: '1. Add query indexes & EXPLAIN tuning. 2. Redis cache-aside for hot queries. 3. Read Replicas. 4. Scale up instance RAM/IOPS. 5. Denormalize schemas. 6. Horizontal Sharding.',
        keyPoints: ['Step 1: Indexing & query tuning', 'Step 2: In-memory Caching', 'Step 3: Read Replicas', 'Step 4: Sharding']
      }
    ],
    relatedTopicSlugs: ['load-balancing', 'cache-invalidation-patterns', 'database-sharding'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (Scaling AWS)',
  },

  // 10. RDBMS vs NoSQL
  {
    id: 'rdbms-vs-nosql',
    slug: 'rdbms-vs-nosql',
    title: 'SQL (RDBMS) vs NoSQL: The Complete Guide',
    category: 'databases',
    categoryName: 'Databases & Storage',
    difficulty: 'Beginner',
    estimatedMinutes: 14,
    prerequisites: ['performance-vs-scalability'],
    summary: 'Compare Relational Databases (ACID, structured schemas, SQL joins) with NoSQL databases (Key-Value, Document, Wide-Column, Graph) to choose the right storage engine.',
    definition: 'RDBMS store structured data with strict schemas and enforce ACID guarantees. NoSQL databases use non-relational data models optimized for horizontal scalability and high throughput.',
    intuition: 'RDBMS is like a structured spreadsheet with formulas and relations. NoSQL is like a folder of flexible JSON documents or a fast key-value dictionary.',
    deepDive: `### The 4 Types of NoSQL Databases:
1. **Key-Value Stores (Redis, AWS DynamoDB)**: O(1) lookups by primary key.
2. **Document Stores (MongoDB, Couchbase)**: Nested JSON/BSON documents with flexible schemas.
3. **Wide-Column Stores (Cassandra, ScyllaDB)**: High write throughput, time-series data.
4. **Graph Databases (Neo4j, AWS Neptune)**: Nodes and edges for social graphs and recommendation trees.`,
    pros: ['Polyglot Persistence allows combining SQL for transactional data with NoSQL for search and time-series.'],
    cons: ['Polyglot setups increase operational complexity.'],
    whenToUse: ['SQL for transactional integrity; NoSQL for massive write scale and key-value lookups.'],
    whenNotToUse: ['Do not choose NoSQL just to avoid schema migrations for relational data.'],
    pitfalls: ['Running deep multi-table joins in application code over denormalized NoSQL tables.'],
    realWorldExamples: [
      { company: 'Amazon', useCase: 'DynamoDB for Orders', architectureDetail: 'Processes tens of millions of requests per second with single-digit millisecond latency at scale.' }
    ],
    interviewQuestions: [
      {
        question: 'Under what circumstances would you migrate from MySQL to Cassandra?',
        answerHint: 'When write throughput exceeds the single primary instance capacity, query patterns are strictly key-based, and eventual consistency is acceptable.',
        keyPoints: ['Write IOPS bottleneck', 'Key-based query patterns', 'Eventual consistency tolerated']
      }
    ],
    relatedTopicSlugs: ['database-sharding', 'cap-theorem', 'caching-levels'],
    sourceAttribution: 'Adapted from donnemartin/system-design-primer (SQL vs NoSQL)',
  },
];

export const allTopicsData: Topic[] = [...baseTopicsData, ...additionalTopicsData];

export function getAllTopics(): Topic[] {
  return allTopicsData;
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return allTopicsData.find((t) => t.slug === slug);
}

export function getTopicsByCategory(categoryId: string): Topic[] {
  return allTopicsData.filter((t) => t.category === categoryId);
}

