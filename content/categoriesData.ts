import { TopicCategory } from '@/types';

export const categoriesData: TopicCategory[] = [
  {
    id: 'fundamentals',
    title: 'Fundamentals & Trade-offs',
    description: 'Core concepts of distributed architecture: Scalability, Latency vs Throughput, and CAP Theorem.',
    icon: 'Layers',
    order: 1,
  },
  {
    id: 'networking',
    title: 'Networking & Infrastructure',
    description: 'DNS, CDNs, Layer 4/7 Load Balancers, Reverse Proxies, TCP/UDP, and RPC protocols.',
    icon: 'Network',
    order: 2,
  },
  {
    id: 'app-architecture',
    title: 'Application Architecture',
    description: 'Microservices, Monoliths, Service Discovery, API Gateways, and Rate Limiting.',
    icon: 'Cpu',
    order: 3,
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    description: 'RDBMS vs NoSQL, Master-Slave & Multi-Master Replication, Sharding, Federation, and SQL Tuning.',
    icon: 'Database',
    order: 4,
  },
  {
    id: 'caching',
    title: 'Caching Strategies',
    description: 'Client, CDN, Web, App, and DB Caching. Cache Aside, Write-Through, Write-Back, and Eviction.',
    icon: 'Zap',
    order: 5,
  },
  {
    id: 'distributed-systems',
    title: 'Distributed Systems & Async',
    description: 'Message Queues, Task Queues, Back Pressure, Distributed Consensus (Raft/Paxos), and Pub/Sub.',
    icon: 'GitPullRequest',
    order: 6,
  },
  {
    id: 'security',
    title: 'Security & Reliability',
    description: 'Authentication (JWT/OAuth2), RBAC, Encryption in-flight/at-rest, Threat Modeling, and Failover.',
    icon: 'ShieldCheck',
    order: 7,
  },
  {
    id: 'real-world-architectures',
    title: 'Real-World Case Studies',
    description: 'Architectures of high-scale systems: Scaling AWS from 1 to 10M users, Netflix, Twitter, and Uber.',
    icon: 'Globe',
    order: 8,
  },
];
