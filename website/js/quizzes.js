/**
 * Quiz data for System Design Primer chapters.
 * Each key matches a chapter key from CHAPTERS.
 * Questions: { q: question, options: [A,B,C,D], answer: 0-based index, explanation: string }
 */
var QUIZZES = {
    'performance-scalability': [
        {
            q: 'What is the key difference between performance and scalability?',
            options: [
                'Performance measures speed, scalability measures cost',
                'A service has a performance problem if it is slow for a single user; a scalability problem if it is fast for one but slow under load',
                'Performance and scalability are the same concept',
                'Scalability only applies to databases'
            ],
            answer: 1,
            explanation: 'A performance problem means the system is slow even for one user. A scalability problem means it works for one user but degrades under load.'
        },
        {
            q: 'Which scaling approach adds more machines to a pool of resources?',
            options: [
                'Vertical scaling',
                'Diagonal scaling',
                'Horizontal scaling',
                'Functional scaling'
            ],
            answer: 2,
            explanation: 'Horizontal scaling (scaling out) adds more machines, while vertical scaling (scaling up) adds more resources (CPU, RAM) to a single machine.'
        }
    ],

    'latency-throughput': [
        {
            q: 'What is latency?',
            options: [
                'The number of requests processed per second',
                'The time to perform some action or to produce some result',
                'The total bandwidth of a network',
                'The amount of data stored in memory'
            ],
            answer: 1,
            explanation: 'Latency is the time to perform some action or produce some result, typically measured in milliseconds.'
        },
        {
            q: 'What should you generally aim for to optimize system performance?',
            options: [
                'Maximum throughput with zero latency',
                'Minimum latency at the cost of throughput',
                'Maximum throughput with acceptable latency',
                'Equal latency and throughput values'
            ],
            answer: 2,
            explanation: 'Generally, you should aim for maximal throughput with acceptable latency.'
        }
    ],

    'availability-consistency': [
        {
            q: 'According to the CAP theorem, which three properties cannot all be guaranteed simultaneously in a distributed system?',
            options: [
                'Cost, Availability, Performance',
                'Consistency, Availability, Partition Tolerance',
                'Concurrency, Atomicity, Persistence',
                'Caching, Authorization, Privacy'
            ],
            answer: 1,
            explanation: 'The CAP theorem states that a distributed system cannot simultaneously guarantee Consistency, Availability, and Partition Tolerance. You must choose two.'
        },
        {
            q: 'In a CP system, what happens during a network partition?',
            options: [
                'The system continues serving potentially stale data',
                'The system shuts down entirely',
                'The system may return errors or timeouts waiting for consistency',
                'All data is deleted'
            ],
            answer: 2,
            explanation: 'CP systems prioritize consistency, so during a partition they may return errors or time out rather than serve potentially inconsistent data.'
        }
    ],

    'consistency-patterns': [
        {
            q: 'In weak consistency, what happens after a write?',
            options: [
                'All subsequent reads immediately see the write',
                'Reads may or may not see the write; a best-effort approach is taken',
                'The write is rejected if any node is unavailable',
                'The write is stored but never readable'
            ],
            answer: 1,
            explanation: 'Weak consistency means after a write, reads may or may not see it. This is a best-effort approach seen in systems like memcached and VoIP.'
        },
        {
            q: 'Which consistency pattern guarantees that a read will eventually see the last write?',
            options: [
                'Strong consistency',
                'Weak consistency',
                'Eventual consistency',
                'Immediate consistency'
            ],
            answer: 2,
            explanation: 'Eventual consistency guarantees that given enough time without new writes, all reads will return the last written value. Used in systems like DNS and email.'
        }
    ],

    'dns': [
        {
            q: 'What does DNS translate?',
            options: [
                'IP addresses to MAC addresses',
                'Domain names to IP addresses',
                'URLs to HTML pages',
                'Port numbers to service names'
            ],
            answer: 1,
            explanation: 'DNS (Domain Name System) translates domain names like www.example.com to IP addresses like 93.184.216.34.'
        },
        {
            q: 'Which DNS record type maps a name to another name?',
            options: [
                'A record',
                'AAAA record',
                'CNAME record',
                'MX record'
            ],
            answer: 2,
            explanation: 'A CNAME (Canonical Name) record maps a name to another name, acting as an alias. A records map to IPv4 addresses.'
        }
    ],

    'cdn': [
        {
            q: 'What is the primary purpose of a CDN?',
            options: [
                'To replace the origin server completely',
                'To serve content from locations closer to the user, reducing latency',
                'To compress all files on the server',
                'To encrypt all traffic'
            ],
            answer: 1,
            explanation: 'CDNs serve content from edge locations geographically closer to users, significantly reducing latency.'
        },
        {
            q: 'In a pull CDN, when is content fetched from the origin?',
            options: [
                'As soon as it is created on the origin',
                'When the first user requests that content',
                'Every hour on a schedule',
                'Only when manually triggered'
            ],
            answer: 1,
            explanation: 'Pull CDNs lazily fetch content from the origin server upon the first request, then cache it for subsequent requests based on TTL.'
        }
    ],

    'load-balancer': [
        {
            q: 'Which load balancing approach operates at the transport layer?',
            options: [
                'Layer 7 load balancing',
                'Layer 4 load balancing',
                'Layer 3 load balancing',
                'Application-level proxy'
            ],
            answer: 1,
            explanation: 'Layer 4 load balancing operates at the transport layer and makes routing decisions based on IP addresses and TCP/UDP ports without inspecting packet contents.'
        },
        {
            q: 'What is a major disadvantage of load balancers?',
            options: [
                'They make systems slower in all cases',
                'They can become a bottleneck or single point of failure if not redundant',
                'They cannot work with HTTPS traffic',
                'They increase latency by 10x'
            ],
            answer: 1,
            explanation: 'A load balancer can become a bottleneck if under-provisioned or a single point of failure if there is no redundancy. Multiple load balancers in active-passive or active-active configuration mitigate this.'
        }
    ],

    'reverse-proxy': [
        {
            q: 'What is a reverse proxy?',
            options: [
                'A proxy configured by the client to access blocked sites',
                'A web server that centralizes internal services and provides a unified interface to the public',
                'A backup server that activates when the primary fails',
                'A DNS server that reverses IP lookups'
            ],
            answer: 1,
            explanation: 'A reverse proxy is a web server that centralizes internal services and provides unified interfaces to the public, handling tasks like SSL termination, compression, and caching.'
        }
    ],

    'application-layer': [
        {
            q: 'What is the key benefit of separating the web/application layer from the platform layer?',
            options: [
                'It reduces the total number of servers needed',
                'It allows scaling and configuring each layer independently',
                'It eliminates the need for load balancers',
                'It makes the code run faster'
            ],
            answer: 1,
            explanation: 'Separating layers allows you to scale web servers and platform/API servers independently based on their specific load patterns.'
        }
    ],

    'database': [
        {
            q: 'What is the primary trade-off between SQL and NoSQL databases?',
            options: [
                'SQL is always faster than NoSQL',
                'NoSQL cannot store structured data',
                'SQL provides ACID guarantees while NoSQL often trades consistency for availability and performance',
                'NoSQL is always more expensive'
            ],
            answer: 2,
            explanation: 'SQL databases provide strong ACID guarantees (Atomicity, Consistency, Isolation, Durability). NoSQL databases typically sacrifice some consistency (BASE model) in exchange for availability, partition tolerance, and horizontal scalability.'
        },
        {
            q: 'What does master-slave replication provide?',
            options: [
                'Two-way writes to both databases',
                'Read scalability by distributing reads across replicas, with writes going to the master',
                'Automatic sharding of data',
                'Zero-downtime migrations'
            ],
            answer: 1,
            explanation: 'In master-slave replication, the master serves reads and writes, and replicates writes to slaves which serve read-only traffic. This scales read throughput.'
        },
        {
            q: 'What is federation (functional partitioning) in databases?',
            options: [
                'Splitting one database into many identical copies',
                'Splitting databases by function (e.g., users, products, forums each in separate DBs)',
                'Encrypting all database traffic',
                'Running the database in multiple data centers simultaneously'
            ],
            answer: 1,
            explanation: 'Federation splits up databases by function, so instead of a single monolithic database, you have separate databases for users, products, etc., reducing read and write traffic to each.'
        }
    ],

    'cache': [
        {
            q: 'What is the "cache-aside" (lazy-loading) pattern?',
            options: [
                'The application writes to cache and database simultaneously',
                'The application reads from cache; on miss, reads from DB and populates cache',
                'The cache automatically pulls from the database on a timer',
                'Data is never stored in the database, only in cache'
            ],
            answer: 1,
            explanation: 'In cache-aside, the application first checks the cache. On a miss, it reads from the database, stores the result in the cache, and returns. This lazy loads only requested data.'
        },
        {
            q: 'What is a disadvantage of write-through caching?',
            options: [
                'Data in cache can become stale',
                'Most data written to the cache might never be read, wasting resources',
                'It cannot work with relational databases',
                'It requires manual cache invalidation'
            ],
            answer: 1,
            explanation: 'Write-through writes to both cache and DB on every write. The downside is that most data written might never be read before it expires, wasting cache space.'
        }
    ],

    'asynchronism': [
        {
            q: 'What is the main benefit of message queues in asynchronous workflows?',
            options: [
                'They make all operations faster',
                'They decouple producers from consumers, allowing independent scaling and failure isolation',
                'They eliminate the need for databases',
                'They provide real-time responses to users'
            ],
            answer: 1,
            explanation: 'Message queues decouple the producer from the consumer. The producer can publish even if the consumer is down, and each can scale independently.'
        }
    ],

    'communication': [
        {
            q: 'What is a key difference between TCP and UDP?',
            options: [
                'TCP is faster than UDP',
                'TCP ensures reliable, ordered delivery; UDP is connectionless with no delivery guarantees',
                'UDP supports encryption but TCP does not',
                'TCP is for web traffic only, UDP is for email only'
            ],
            answer: 1,
            explanation: 'TCP provides reliable, ordered data delivery with connection establishment. UDP is connectionless and provides no guarantees, making it faster for use cases like video streaming and gaming.'
        },
        {
            q: 'In REST, what does it mean that the API is stateless?',
            options: [
                'The server stores no client data at all',
                'Each request contains all information needed; the server does not store session state between requests',
                'REST cannot use cookies',
                'The database has no state'
            ],
            answer: 1,
            explanation: 'REST is stateless - each request from the client must contain all necessary information. The server does not store client context between requests.'
        }
    ],

    'security': [
        {
            q: 'What is the principle of least privilege?',
            options: [
                'Give users the minimum number of passwords',
                'Grant each user/process only the minimum access required to perform their function',
                'Use the cheapest security solution available',
                'Limit the number of security administrators'
            ],
            answer: 1,
            explanation: 'The principle of least privilege means giving each user, process, or system only the minimum access level required to perform their function, reducing the attack surface.'
        }
    ]
};
