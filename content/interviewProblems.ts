import { InterviewProblem } from '@/types';

export const interviewProblemsData: InterviewProblem[] = [
  {
    id: 'pastebin',
    slug: 'pastebin',
    title: 'Design Pastebin.com (or Bit.ly URL Shortener)',
    subtitle: 'High-throughput URL shortening service and text paste storage with 10:1 read/write ratio.',
    companyTags: ['Google', 'Meta', 'Amazon', 'Microsoft'],
    difficulty: 'Medium',
    estimatedTime: '45 mins',
    overview: 'Design a scalable service where users can enter a block of text or long URL and receive a unique short link. Visiting the short link redirects the user or renders the text paste.',
    useCases: {
      inScope: [
        'User enters text/URL and receives a randomly generated 7-character short link.',
        'User visits short link and is redirected to the original URL or views the text contents.',
        'Links can optionally have an expiration date (default: never expire).',
        'Service records basic analytics (total visit count per link).',
        'System has high availability (99.99%) and low read redirect latency (< 20ms).',
      ],
      outOfScope: [
        'User account registration and authentication (anonymous by default).',
        'Custom short link vanity URLs.',
        'Editing or deleting pastes after creation.',
      ],
    },
    constraintsAndAssumptions: [
      'Traffic is read-heavy: 100M reads/month, 10M writes/month (10:1 read/write ratio).',
      'Average paste text size: 1 KB. Short link metadata: ~270 bytes.',
      'Writes per second: ~4 writes/sec average, ~40 writes/sec peak.',
      'Reads per second: ~40 reads/sec average, ~400 reads/sec peak.',
      'Storage growth: 12.7 GB/month -> ~450 GB in 3 years for 360M short links.',
      'Base62 encoding (a-z, A-Z, 0-9) with 7 characters yields 62^7 ≈ 3.5 trillion unique URLs.',
    ],
    clarifyingQuestions: [
      {
        question: 'Should the short links expire automatically?',
        answer: 'Yes, users can specify an expiration time (1 hour, 1 day, 1 week), or leave it permanent. A background cleanup job removes expired pastes.',
      },
      {
        question: 'Do analytics need to be calculated in real-time?',
        answer: 'No, visit count analytics can be processed asynchronously with an event queue and aggregated in batches.',
      },
    ],
    capacityEstimations: {
      assumptions: [
        '10M write pastes / month',
        '100M read redirects / month',
        'Average paste text: 1 KB',
        'Shortlink ID: 7 chars (Base62)',
      ],
      calculations: [
        { metric: 'Write QPS', formula: '10,000,000 / (30 days * 86,400s)', result: '~4 writes/sec (Peak: ~40/s)' },
        { metric: 'Read QPS', formula: '100,000,000 / (30 days * 86,400s)', result: '~40 reads/sec (Peak: ~400/s)' },
        { metric: 'Monthly Storage', formula: '10M pastes * 1.27 KB', result: '~12.7 GB / month' },
        { metric: '3-Year Storage', formula: '12.7 GB * 36 months', result: '~457 GB total' },
        { metric: 'Read Bandwidth', formula: '40 reads/s * 1.27 KB', result: '~50.8 KB/s egress' },
        { metric: 'Cache Sizing (20%)', formula: '100M reads/mo * 20% * 1.27 KB', result: '~25.4 GB RAM for Redis' },
      ],
    },
    highLevelDesign: {
      description: 'A Layer 7 Load Balancer routes traffic to stateless API servers. Read queries are served directly from Redis Cache (90%+ hit rate) or fallback to PostgreSQL / Amazon S3. Writes generate a unique 7-char hash, persist metadata to SQL and paste body to Object Storage, and populate Redis.',
      components: [
        'Cloudflare CDN / Edge DNS: Anycast routing and static caching',
        'Application Load Balancer: SSL termination and round-robin routing',
        'Stateless Web/API Servers (Node.js/Go): Handles URL encoding and validation',
        'Key Generation Service (KGS) or Counter Service: Pre-generates unique 7-char Base62 keys to prevent race condition collisions',
        'Redis Cache Cluster: Stores hot shortlink -> target URL mappings',
        'Relational Database (PostgreSQL): Stores paste metadata (shortlink_id, created_at, expires_at, s3_path)',
        'Object Storage (AWS S3): Stores raw paste text bodies',
      ],
    },
    apiDesign: [
      {
        method: 'POST',
        path: '/api/v1/pastes',
        desc: 'Create a new paste or shortlink',
        requestBody: '{\n  "content": "raw text paste content...",\n  "expiration_minutes": 1440\n}',
        response: '{\n  "shortlink": "https://paste.bin/7aX9bK2",\n  "expires_at": "2026-08-17T12:00:00Z"\n}',
      },
      {
        method: 'GET',
        path: '/:shortlink',
        desc: 'Retrieve paste text or redirect',
        response: '{\n  "content": "raw text paste content...",\n  "created_at": "2026-08-16T12:00:00Z"\n}',
      },
    ],
    dataModel: {
      schemaType: 'Relational (PostgreSQL) + Object Store (S3)',
      rationale: 'Relational database provides index lookups on shortlink PK with ACID uniqueness. Large paste blobs are offloaded to S3 to keep database memory and table footprints minimal.',
      tables: [
        {
          name: 'pastes',
          description: 'Metadata records for shortlinks',
          columns: [
            { name: 'shortlink', type: 'VARCHAR(7)', key: 'PK', note: 'Indexed unique Base62 hash' },
            { name: 'expiration_at', type: 'TIMESTAMP', key: 'INDEX', note: 'Null if never expires' },
            { name: 'created_at', type: 'TIMESTAMP', note: 'Creation timestamp' },
            { name: 'paste_path', type: 'VARCHAR(255)', note: 'S3 object key for text body' },
            { name: 'user_ip', type: 'VARCHAR(45)', note: 'For abuse rate limiting' },
          ],
        },
      ],
    },
    deepDives: [
      {
        title: 'Generating Unique Shortlinks (MD5 Hash vs Key Generation Service)',
        challenge: 'Hashing URL with MD5/SHA256 and taking the first 7 characters causes hash collisions when multiple users paste similar content. Retrying on duplicate key errors adds write latency.',
        solutionStrategy: 'Use a dedicated **Key Generation Service (KGS)** with a range-partitioned database sequence or pre-generated Base62 keys. KGS generates unique 7-character strings in advance and keeps two tables: \`used_keys\` and \`unused_keys\`. When an API server needs a key, it fetches a pre-allocated batch of 1,000 keys into local RAM, reducing database contention to zero.',
        tradeOffsExplored: ['MD5 Truncation: Simple but has collisions', 'KGS Pre-allocation: Zero collisions and fast writes, but unused keys are lost if server crashes'],
      },
      {
        title: 'Database Deletion of Expired Pastes',
        challenge: 'Continuously scanning millions of rows in PostgreSQL with \`DELETE WHERE expiration_at < NOW()\` creates heavy disk I/O locks and table fragmentation (MVCC bloat).',
        solutionStrategy: 'Combine **Lazy Deletion** on read access (if expired on GET, delete and return 404) with an asynchronous background cron job that deletes expired records during off-peak hours using indexed range chunks (\`DELETE WHERE id IN (SELECT id FROM pastes WHERE expiration_at < NOW() LIMIT 5000)\`).',
        tradeOffsExplored: ['Eager synchronous delete: High write overhead', 'Lazy + Batched background delete: Zero user impact'],
      },
    ],
    scalingAndBottlenecks: [
      {
        bottleneck: 'Read Traffic Spikes (Celebrity paste goes viral)',
        mitigation: 'Deploy Cloudflare CDN edge caching and Redis Master-Replica cluster with LRU eviction. 99% of viral reads are served directly from RAM or Edge.',
        severity: 'High',
      },
      {
        bottleneck: 'Primary Database Storage Limit',
        mitigation: 'Store actual text blobs in AWS S3 (virtually unlimited capacity). Metadata database can easily fit 360M records in ~45GB on a single PostgreSQL RDS instance with Read Replicas.',
        severity: 'Medium',
      },
    ],
    tradeOffs: [
      'SQL vs NoSQL: SQL with Read Replicas is chosen because 3-year metadata (45GB) fits comfortably in memory on a single instance without sharding complexity.',
      'S3 vs Database Blob: S3 is 10x cheaper per GB and decouples file payload storage from index memory.',
    ],
    scorecardChecklist: [
      'Clarified scope, 10:1 read/write ratio, and 1KB average paste size',
      'Calculated write QPS (~4/s), read QPS (~40/s), and 3-year storage (~457GB)',
      'Designed clean Base62 encoding math (62^7 = 3.5T combinations)',
      'Proposed Key Generation Service (KGS) to eliminate hash collisions',
      'Designed SQL metadata schema and S3 payload storage split',
      'Added Redis caching layer for top 20% hot links (80/20 rule)',
      'Addressed expired paste cleanup without database table lock storms',
      'Discussed CDN edge caching and security rate limiting on write endpoints',
    ],
  },

  {
    id: 'twitter',
    slug: 'twitter',
    title: 'Design Twitter (Timeline & Feed Generation)',
    subtitle: 'Massive read-heavy social feed architecture handling 500M tweets/day and celebrity fan-out.',
    companyTags: ['Twitter / X', 'Meta', 'TikTok', 'ByteDance'],
    difficulty: 'Hard',
    estimatedTime: '60 mins',
    overview: 'Design Twitter’s core feed system: posting tweets, following users, and rendering the personalized Home Timeline for hundreds of millions of daily active users.',
    useCases: {
      inScope: [
        'User posts a tweet (text, media, link).',
        'User follows / unfollows other users.',
        'User views their Home Timeline (reverse-chronological feed of tweets from accounts they follow).',
        'User views a User Profile Timeline (all tweets by that specific user).',
        'High availability and low timeline read latency (< 100ms).',
      ],
      outOfScope: [
        'Direct messaging (DMs).',
        'Search & Trends analytics pipeline.',
        'Retweets, likes, and reply threading.',
      ],
    },
    constraintsAndAssumptions: [
      '300 Million Daily Active Users (DAU).',
      '500 Million tweets posted per day -> ~6,000 tweets/sec average, ~18,000 tweets/sec peak.',
      'Timeline reads: 300M users * 5 timeline views/day = 1.5 Billion timeline views/day -> ~17,500 reads/sec average, ~50,000 reads/sec peak.',
      'Extreme celebrity skew: Typical user has 200 followers, but celebrities (e.g. @elonmusk) have 100M+ followers!',
    ],
    clarifyingQuestions: [
      {
        question: 'Should timeline feeds be strictly reverse-chronological or algorithmic (ranking model)?',
        answer: 'Focus first on the core reverse-chronological timeline architecture, then discuss where machine learning scoring models plug in.',
      },
    ],
    capacityEstimations: {
      assumptions: [
        '300M DAU',
        '500M tweets / day (~6K tweets/sec)',
        '1.5B timeline reads / day (~17.5K reads/sec)',
        'Average tweet payload: 300 bytes text + metadata',
      ],
      calculations: [
        { metric: 'Tweet Write QPS', formula: '500,000,000 / 86,400s', result: '~6,000 writes/sec (Peak: 18,000/s)' },
        { metric: 'Timeline Read QPS', formula: '1,500,000,000 / 86,400s', result: '~17,500 reads/sec (Peak: 50,000/s)' },
        { metric: 'Daily Tweet Storage', formula: '500M tweets * 300 bytes', result: '~150 GB / day (Text only)' },
        { metric: 'Annual Storage', formula: '150 GB * 365 days', result: '~55 TB / year' },
      ],
    },
    highLevelDesign: {
      description: 'Twitter uses a **Hybrid Fan-Out Architecture**. For normal users (< 20,000 followers), it uses **Fan-Out on Write (Push)**: when a tweet is posted, background workers insert the tweet ID into the Redis timeline cache of all followers. For high-follower celebrity accounts, it uses **Fan-Out on Read (Pull)**: celebrity tweets are merged into the user feed at read time to prevent fan-out write storms.',
      components: [
        'API Gateway & Auth: Rate limiting and token validation',
        'Tweet Service: Writes tweets to Tweet DB (sharded MySQL/Cassandra)',
        'Fan-Out Workers: Consumes new tweet events from Kafka and injects tweet ID into Redis timeline lists',
        'Timeline Service: Fetches user home timeline from Redis in O(1) time',
        'Social Graph Service: Stores follow relationships (Graph DB / Redis Set)',
        'Media Storage: AWS S3 + CloudFront CDN for photos and videos',
      ],
    },
    apiDesign: [
      {
        method: 'POST',
        path: '/api/v1/tweets',
        desc: 'Post a new tweet',
        requestBody: '{\n  "text": "Hello world from System Design Primer!",\n  "media_ids": ["img_987"]\n}',
        response: '{\n  "tweet_id": "182938472910",\n  "created_at": "2026-08-16T12:00:00Z"\n}',
      },
      {
        method: 'GET',
        path: '/api/v1/timeline/home',
        desc: 'Fetch current user home timeline',
        response: '{\n  "tweets": [\n    { "tweet_id": "182938472910", "author_id": "u123", "text": "..." }\n  ],\n  "cursor": "next_token_482"\n}',
      },
    ],
    dataModel: {
      schemaType: 'Sharded PostgreSQL / DynamoDB + Redis In-Memory Timeline Lists',
      rationale: 'Redis stores the active home timeline for each active user as a sorted set (\`ZSET\`) of up to 800 tweet IDs. Tweet bodies are hydrated from sharded Tweet storage.',
      tables: [
        {
          name: 'tweets',
          description: 'Core tweet storage',
          columns: [
            { name: 'tweet_id', type: 'BIGINT (Snowflake 64b)', key: 'PK' },
            { name: 'user_id', type: 'BIGINT', key: 'INDEX' },
            { name: 'content', type: 'VARCHAR(280)', note: 'Tweet text' },
            { name: 'created_at', type: 'TIMESTAMP', key: 'INDEX' },
          ],
        },
        {
          name: 'followers',
          description: 'Social graph follow edges',
          columns: [
            { name: 'user_id', type: 'BIGINT', key: 'PK' },
            { name: 'follower_id', type: 'BIGINT', key: 'PK' },
            { name: 'created_at', type: 'TIMESTAMP' },
          ],
        },
      ],
    },
    deepDives: [
      {
        title: 'The Fan-Out on Write (Push) vs Fan-Out on Read (Pull) Trade-off',
        challenge: 'If a celebrity with 100M followers tweets, a pure Push architecture requires writing to 100M Redis timeline queues, taking minutes and overwhelming Redis memory. A pure Pull architecture requires querying 200 followees on every page refresh, hammering database indexes.',
        solutionStrategy: 'Implement **Hybrid Fan-Out**: Regular users use Fan-Out on Write (push to followers). Celebrities (> 20,000 followers) do NOT push. When a user requests their home timeline, the Timeline Service pulls their pre-computed Redis timeline (Push) and queries the latest tweets from any celebrities they follow (Pull), dynamically merging the two sorted lists in memory in < 5ms.',
        tradeOffsExplored: ['Pure Push: Fast reads O(1), but celebrity write storms', 'Pure Pull: Fast writes, but expensive O(N) multi-table joins on every read', 'Hybrid: Best of both worlds'],
      },
    ],
    scalingAndBottlenecks: [
      {
        bottleneck: 'Inactive User Memory Waste in Redis',
        mitigation: 'Only maintain timeline caches in Redis for active users who logged in within the last 14 days. Inactive users have their timelines generated on-demand when they next open the app.',
        severity: 'Medium',
      },
    ],
    tradeOffs: [
      'Fan-Out on Write vs Fan-Out on Read: Solved with Hybrid Architecture.',
      'Snowflake 64-bit ID generation: Encodes timestamp in top 41 bits to keep tweets naturally sortable by creation time.',
    ],
    scorecardChecklist: [
      'Clarified 300M DAU, 500M tweets/day, and celebrity problem',
      'Calculated 6K writes/s vs 17.5K reads/s throughput',
      'Explained Fan-out on Write vs Fan-out on Read in depth',
      'Designed the Hybrid Fan-Out solution for high-follower accounts',
      'Described Redis timeline data structure (ZSET of Tweet IDs)',
      'Designed 64-bit Snowflake ID scheme for time-ordered sorting',
      'Addressed inactive user cache eviction policy (14-day cutoff)',
    ],
  },

  {
    id: 'web-crawler',
    slug: 'web-crawler',
    title: 'Design a Distributed Web Crawler',
    subtitle: 'Scalable multi-node web crawler indexing 1 billion pages per month with politeness & deduplication.',
    companyTags: ['Google', 'Microsoft', 'Amazon', 'Yahoo'],
    difficulty: 'Hard',
    estimatedTime: '60 mins',
    overview: 'Design a distributed web crawler that discovers, downloads, extracts links from, and indexes billions of web pages across the public internet efficiently while respecting robots.txt.',
    useCases: {
      inScope: [
        'Download and index 1 billion web pages per month.',
        'Extract links from downloaded HTML and recursively add new URLs to the crawl queue.',
        'Detect and prevent infinite crawl loops and duplicate page downloads.',
        'Enforce **Politeness Rules** (do not overload target web servers with concurrent requests).',
        'Respect \`robots.txt\` permissions and disallow paths.',
      ],
      outOfScope: [
        'Building the search ranking inverted index.',
        'JavaScript execution / heavy headless browser rendering (focus on raw HTML).',
      ],
    },
    constraintsAndAssumptions: [
      '1 Billion web pages / month -> ~400 pages downloaded per second average, ~1,200 pages/sec peak.',
      'Average web page size: 100 KB HTML. Total data downloaded: ~100 TB / month.',
      'Storage for 5 years: ~6 PB of crawled web page data.',
      'Network bandwidth: 400 pages/s * 100 KB = 40 MB/s (320 Mbps) ingress.',
    ],
    clarifyingQuestions: [
      {
        question: 'How do we handle duplicate pages with different URLs (e.g. tracking query params)?',
        answer: 'Use **URL Normalization** (strip query params, lowercase, canonical tags) and **Content Fingerprinting** (SimHash / MurmurHash) to detect duplicate content.',
      },
    ],
    capacityEstimations: {
      assumptions: ['1B pages / month', '100 KB avg HTML size', '5-year retention'],
      calculations: [
        { metric: 'Download QPS', formula: '1,000,000,000 / (30 days * 86,400s)', result: '~400 pages/sec (Peak: 1,200/s)' },
        { metric: 'Ingress Bandwidth', formula: '400 pages/s * 100 KB', result: '~40 MB/s (320 Mbps)' },
        { metric: 'Monthly Storage', formula: '1B pages * 100 KB', result: '~100 TB / month' },
        { metric: '5-Year Storage', formula: '100 TB * 60 months', result: '~6 Petabytes' },
      ],
    },
    highLevelDesign: {
      description: 'The crawler architecture consists of a **URL Frontier** (manages prioritized, polite crawl queues), **DNS Resolver Cache**, **Fetcher Workers** (asynchronous HTML downloaders), **Content Parser & Extractor**, **Duplicate Detector** (Bloom Filter + SimHash), and **Distributed Storage** (HDFS / Bigtable / S3).',
      components: [
        'URL Frontier: Manages Priority Queues (importance) and Politeness Queues (one queue per host)',
        'Robots.txt Cache: In-memory store of parsed robots.txt rules per domain',
        'DNS Resolver Pool: Dedicated local DNS caching to prevent DNS lookup bottlenecks',
        'Fetcher Workers: Asynchronous HTTP clients downloading HTML bodies',
        'Duplicate URL Filter: Bloom Filter checking if URL was already seen',
        'Content Deduplicator: SimHash checking if downloaded content matches an existing page',
        'Document Store: Distributed object store (S3/HDFS) storing raw HTML pages',
      ],
    },
    apiDesign: [
      {
        method: 'POST',
        path: '/api/v1/crawler/seed',
        desc: 'Inject seed URLs into crawler frontier',
        requestBody: '{\n  "seed_urls": ["https://en.wikipedia.org", "https://news.ycombinator.com"]\n}',
        response: '{\n  "status": "queued",\n  "count": 2\n}',
      },
    ],
    dataModel: {
      schemaType: 'NoSQL Wide-Column (HBase / Cassandra) + Bloom Filters',
      rationale: 'Petabyte-scale storage required. Row key is reversed hostname (e.g. \`com.example.www/page\`) for efficient prefix range scans.',
      tables: [
        {
          name: 'crawled_pages',
          description: 'Parsed document archive',
          columns: [
            { name: 'url_hash', type: 'VARBINARY(16)', key: 'PK' },
            { name: 'url', type: 'VARCHAR(2048)' },
            { name: 'content_hash', type: 'BIGINT', note: '64-bit SimHash' },
            { name: 'http_status', type: 'INT' },
            { name: 'last_crawled_at', type: 'TIMESTAMP' },
            { name: 's3_path', type: 'VARCHAR(255)' },
          ],
        },
      ],
    },
    deepDives: [
      {
        title: 'URL Frontier: Politeness & Priority Architecture',
        challenge: 'Downloading 400 pages/sec must NOT hammer a single small website with 100 simultaneous requests (politeness), while prioritizing authoritative domains like Wikipedia over spam blogs (priority).',
        solutionStrategy: 'Use the **Mercator Two-Tier Queue System**: 1. **Prioritizer (Front Queues)**: URLs are routed to Priority Queues (P0-P9) based on PageRank/domain quality. 2. **Politeness Manager (Back Queues)**: URLs are grouped into FIFO queues by hostname (\`example.com\`). A worker thread fetches from a host queue, then enforces a minimum delay (e.g. 500ms) before the same host queue can be queried again.',
        tradeOffsExplored: ['Random Crawl: Unpolite, gets IP banned', 'Mercator Frontier: Strict politeness and priority-driven crawl'],
      },
      {
        title: 'Detecting 1 Billion Duplicate URLs with Minimal RAM (Bloom Filter)',
        challenge: 'Storing 1 billion URLs (average 100 bytes each) in a hash set requires ~100 GB of RAM. Checking disk for every URL link would slow the crawler to a crawl.',
        solutionStrategy: 'Deploy a **Bloom Filter** in memory. A Bloom filter with 1 billion items and 1% false positive probability requires only ~1.2 GB of RAM! If the Bloom filter says "Not in set", the URL is 100% new and queued immediately without touching disk.',
        tradeOffsExplored: ['In-Memory HashSet: 100 GB RAM', 'Bloom Filter: 1.2 GB RAM (trades 1% false positive rate for 98% memory savings)'],
      },
    ],
    scalingAndBottlenecks: [
      {
        bottleneck: 'DNS Resolution Latency',
        mitigation: 'DNS queries take 20-200ms. Maintain an in-memory asynchronous DNS cache with pre-fetching so workers never block on DNS resolution.',
        severity: 'High',
      },
    ],
    tradeOffs: [
      'Bloom Filter vs Hash Table: Bloom Filter saves 98% memory with acceptable 1% dropped false positive duplicate rate.',
      'SimHash for Near-Duplicate Detection: Allows detecting pages that are identical except for copyright date or ad banners.',
    ],
    scorecardChecklist: [
      'Estimated 1B pages/mo, 400 QPS, 40 MB/s bandwidth, and 6 PB 5-year storage',
      'Designed the 2-tier URL Frontier (Priority Queues + Politeness Queues)',
      'Implemented Bloom Filter for memory-efficient URL deduplication (1.2GB vs 100GB)',
      'Integrated SimHash / MurmurHash for content fingerprinting',
      'Addressed robots.txt caching and politeness delays',
      'Included DNS resolution caching to prevent network worker blocking',
    ],
  },

  {
    id: 'key-value-store',
    slug: 'key-value-store',
    title: 'Design a Distributed Key-Value Store (DynamoDB / Cassandra style)',
    subtitle: 'High-availability, partition-tolerant distributed KV store with consistent hashing, tunable quorum, and vector clocks.',
    companyTags: ['Amazon', 'Meta', 'Netflix', 'Apple'],
    difficulty: 'Hard',
    estimatedTime: '60 mins',
    overview: 'Design a distributed, highly available, low-latency Key-Value store supporting millions of reads and writes per second with automated partition rebalancing and tunable consistency.',
    useCases: {
      inScope: [
        '\`put(key, value)\`: Store a value associated with a key.',
        '\`get(key)\`: Retrieve value associated with a key.',
        'High availability: writes and reads always succeed even during network partitions (AP with tunable Quorum).',
        'Automatic horizontal partition scaling without downtime.',
        'Sub-10ms read and write latency at p99.',
      ],
      outOfScope: [
        'Complex multi-table SQL joins and secondary index queries.',
        'ACID transactions across multiple keys.',
      ],
    },
    constraintsAndAssumptions: [
      'Key size: up to 256 bytes. Value size: up to 1 MB (average 10 KB).',
      'Throughput: 10 Million QPS total (5M reads/sec, 5M writes/sec).',
      'Replication factor: $N = 3$ across distinct availability zones.',
      'System must handle sudden node failures, disk crashes, and network partitions gracefully.',
    ],
    clarifyingQuestions: [
      {
        question: 'Should the system prioritize Strong Consistency or High Availability during network partitions?',
        answer: 'Prioritize High Availability (AP system inspired by Amazon Dynamo), but provide **Tunable Quorum Consistency** per request ($R + W > N$).',
      },
    ],
    capacityEstimations: {
      assumptions: ['10M QPS (5M get, 5M put)', '10 KB avg payload', 'N = 3 replicas'],
      calculations: [
        { metric: 'Write Bandwidth', formula: '5M puts/s * 10 KB * 3 replicas', result: '~150 GB/s internal network replication' },
        { metric: 'Daily Data Storage', formula: '5M puts/s * 86,400s * 10 KB * 3', result: '~12.9 TB / day' },
        { metric: 'Cluster Size', formula: '10M QPS / 50K QPS per node', result: '~200 storage nodes' },
      ],
    },
    highLevelDesign: {
      description: 'The cluster uses **Consistent Hashing with Virtual Nodes (vnodes)** on a hash ring $[0, 2^{32}-1]$ to distribute keys across nodes. Any node acts as a **Coordinator** for a request. Writes are written to an in-memory **MemTable** and appended to a **Write-Ahead Log (WAL)** for durability, then flushed to disk as immutable **SSTables (LSM-Tree)**.',
      components: [
        'Consistent Hash Ring: Maps keys to top $N$ consecutive physical storage nodes',
        'Coordinator Node: Routes read/write requests to responsible replicas',
        'Storage Engine (LSM-Tree): MemTable (RAM) + WAL (Disk) + SSTables (Disk) + Bloom Filter',
        'Gossip Protocol: Decentralized node failure detection and ring topology sync',
        'Quorum Consensus ($R + W > N$): Configurable read and write consistency',
        'Anti-Entropy (Merkle Trees): Background replica synchronization',
      ],
    },
    apiDesign: [
      {
        method: 'POST',
        path: '/api/v1/kv',
        desc: 'Put key-value pair',
        requestBody: '{\n  "key": "user_session:9842",\n  "value": "eyJhbGciOi...",\n  "consistency": "QUORUM"\n}',
        response: '{\n  "status": "OK",\n  "version": "v1_clock"\n}',
      },
      {
        method: 'GET',
        path: '/api/v1/kv/:key?consistency=QUORUM',
        desc: 'Get value by key',
        response: '{\n  "key": "user_session:9842",\n  "value": "eyJhbGciOi...",\n  "version": "v1_clock"\n}',
      },
    ],
    dataModel: {
      schemaType: 'LSM-Tree (Log-Structured Merge-tree) Key-Value',
      rationale: 'LSM-Trees turn random writes into fast sequential disk appends, achieving 10x higher write throughput than B-Trees.',
      tables: [],
    },
    deepDives: [
      {
        title: 'Consistent Hashing with Virtual Nodes (Vnodes)',
        challenge: 'Simple modulo hashing ($\text{hash} \pmod N$) invalidates 99% of keys when a server joins or leaves. Furthermore, physical servers can have uneven key distributions (hotspots).',
        solutionStrategy: 'Map each physical server to **100-250 Virtual Nodes (vnodes)** placed randomly around a $2^{32}-1$ integer ring. A key is assigned to the first $N$ unique physical nodes clockwise from $\text{hash}(key)$. When a node fails, its vnodes are absorbed evenly by all remaining nodes rather than overloading a single neighbor.',
        tradeOffsExplored: ['Modulo Hashing: Total resharding on node change', 'Consistent Hashing with vnodes: Minimal key migration ($K/N$ keys) and uniform load'],
      },
      {
        title: 'Tunable Quorum Consistency ($R + W > N$)',
        challenge: 'How to balance ultra-fast latency against strong consistency guarantees in the same database engine.',
        solutionStrategy: 'With replication factor $N = 3$: 1. **Strong Consistency**: Write at $W = 2$ and Read at $R = 2$ ($2 + 2 = 4 > 3$). Guarantees the read set overlaps with the write set. 2. **Fast Writes**: $W = 1$, $R = 3$. 3. **Fast Reads**: $R = 1$, $W = 3$.',
        tradeOffsExplored: ['W=1, R=1: Fastest, but risk of stale reads', 'W=QUORUM, R=QUORUM: Strong consistency with tolerance for 1 dead node'],
      },
    ],
    scalingAndBottlenecks: [
      {
        bottleneck: 'SSTable Read Amplification',
        mitigation: 'Use **Bloom Filters** on each SSTable file to immediately skip files that do not contain the requested key, reducing disk reads from 10 to 1.',
        severity: 'High',
      },
    ],
    tradeOffs: [
      'LSM-Tree vs B-Tree: LSM-Tree provides massive write throughput via sequential appends at the cost of compaction overhead and read amplification.',
      'Gossip Protocol vs Central Master: Gossip eliminates master SPOF and scales to thousands of nodes.',
    ],
    scorecardChecklist: [
      'Explained Consistent Hashing and Virtual Nodes (vnodes)',
      'Detailed LSM-Tree storage engine (MemTable, WAL, SSTables, Compaction)',
      'Calculated Tunable Quorum ($R + W > N$) trade-offs',
      'Described Gossip Protocol for decentralized failure detection',
      'Integrated Bloom Filters to prevent read amplification on SSTables',
      'Explained Vector Clocks and Merkle Tree anti-entropy repair',
    ],
  },

  {
    id: 'amazon-sales-rank',
    slug: 'amazon-sales-rank',
    title: 'Design Amazon Sales Rank (Real-Time Leaderboard)',
    subtitle: 'High-throughput real-time ranking and sales leaderboard across millions of products and categories.',
    companyTags: ['Amazon', 'Apple', 'Steam', 'Epic Games'],
    difficulty: 'Medium',
    estimatedTime: '45 mins',
    overview: 'Design a system that tracks product purchases in real-time and computes top-selling product rankings globally and by category (e.g. "Top 100 in Electronics") with low query latency.',
    useCases: {
      inScope: [
        'Track every purchase event across 100M+ products in real-time.',
        'Calculate sales rank overall and within hierarchical categories (e.g. Books -> Tech -> System Design).',
        'Display Top 100 leaderboards with < 50ms latency.',
        'Display the exact rank of any individual product (e.g. #42 in Electronics).',
      ],
      outOfScope: [
        'Payment checkout and order fulfillment processing.',
        'Product recommendation engine.',
      ],
    },
    constraintsAndAssumptions: [
      '100 Million total products listed. 50,000 distinct categories.',
      '100 Million purchases per day -> ~1,200 purchases/sec average, ~10,000 purchases/sec peak during Black Friday.',
      'Leaderboard views: 500 Million page views/day (~6,000 reads/sec).',
      'Rank calculations use time-decay weighting (recent purchases weigh more than purchases from 7 days ago).',
    ],
    clarifyingQuestions: [
      {
        question: 'Does the ranking update instantly on every purchase or in periodic intervals?',
        answer: 'Rankings can be updated near real-time (every 1 to 5 minutes) to avoid thrashing leaderboards on every single click.',
      },
    ],
    capacityEstimations: {
      assumptions: ['100M purchases/day', '500M reads/day', '100M products', '50K categories'],
      calculations: [
        { metric: 'Purchase Event QPS', formula: '100,000,000 / 86,400s', result: '~1,200 events/sec (Peak: 10,000/s)' },
        { metric: 'Leaderboard Read QPS', formula: '500,000,000 / 86,400s', result: '~6,000 reads/sec (Peak: 25,000/s)' },
        { metric: 'Category Redis Storage', formula: '50K categories * Top 100 * 32 bytes', result: '~160 MB RAM (Extremely lightweight)' },
      ],
    },
    highLevelDesign: {
      description: 'Purchases emit events to an Apache Kafka topic. An Apache Flink stream processing pipeline computes sliding window exponential decay sales scores. Aggregated scores are published to **Redis Sorted Sets (\`ZSET\`)** per category. Top 100 reads are answered directly from Redis \`ZREVRANGE\` in < 1ms.',
      components: [
        'Order Purchase Event Stream: Kafka topic \`order-completed\`',
        'Stream Analytics Engine (Flink / Spark Streaming): Aggregates sales velocity with time-decay formula',
        'Redis Leaderboard Cluster: Stores \`ZSET\` for each category (\`category:electronics:rank\`)',
        'PostgreSQL / DynamoDB: Persistent store of hourly historical ranking snapshots',
        'API Gateway: Serves cached leaderboard responses via Cloudflare CDN',
      ],
    },
    apiDesign: [
      {
        method: 'GET',
        path: '/api/v1/categories/:category_id/top?limit=100',
        desc: 'Get Top 100 products in category',
        response: '{\n  "category_id": "electronics",\n  "products": [\n    { "rank": 1, "product_id": "p_9842", "score": 9482.5 }\n  ]\n}',
      },
      {
        method: 'GET',
        path: '/api/v1/products/:product_id/rank',
        desc: 'Get rank of a specific product',
        response: '{\n  "product_id": "p_9842",\n  "category_rank": 4,\n  "global_rank": 42\n}',
      },
    ],
    dataModel: {
      schemaType: 'Redis Sorted Sets (ZSET) + Relational History',
      rationale: 'Redis ZSET is implemented as a SkipList + Hash Table, providing O(log N) score updates and O(log N + M) range queries.',
      tables: [],
    },
    deepDives: [
      {
        title: 'Redis Sorted Sets (SkipList) for O(log N) Leaderboard Retrieval',
        challenge: 'Sorting 100M products in a relational SQL database using \`ORDER BY sales_count DESC LIMIT 100\` causes full table scans and lock contention.',
        solutionStrategy: 'Use **Redis Sorted Sets (ZSET)**. \`ZADD category:101 <score> <product_id>\` updates a product score in $O(\log N)$. Fetching Top 100 is executed in $O(\log N + 100) \approx 0.2\text{ms}$ with \`ZREVRANGE category:101 0 99 WITHSCORES\`.',
        tradeOffsExplored: ['SQL ORDER BY: Unusable at scale (seconds)', 'Redis ZSET: Sub-millisecond SkipList lookups'],
      },
    ],
    scalingAndBottlenecks: [
      {
        bottleneck: 'Massive Global Leaderboard Memory (100M items in 1 ZSET)',
        mitigation: 'Do not store all 100M products in the global ZSET. Only store the Top 10,000 products in Redis. Products below the Top 10,000 have approximate percentile ranks computed from batch hourly MapReduce jobs.',
        severity: 'Medium',
      },
    ],
    tradeOffs: [
      'Exact Real-Time Ranking vs Near-Real-Time Sliding Windows: Sliding window aggregation in Flink smooths out spikes and prevents recalculating full rankings on every transaction.',
    ],
    scorecardChecklist: [
      'Calculated 1,200 write QPS vs 6,000 read QPS',
      'Designed event-driven stream processing pipeline (Kafka + Flink)',
      'Utilized Redis Sorted Sets (SkipList) for O(log N) top ranking retrieval',
      'Addressed time-decay scoring formula',
      'Capped in-memory ZSET size to Top 10K to conserve RAM',
    ],
  },
];

export function getAllInterviewProblems(): InterviewProblem[] {
  return interviewProblemsData;
}

export function getInterviewProblemBySlug(slug: string): InterviewProblem | undefined {
  return interviewProblemsData.find((p) => p.slug === slug);
}
