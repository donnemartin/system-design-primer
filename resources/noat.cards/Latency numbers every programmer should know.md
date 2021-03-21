## Latency numbers every programmer should know
---
    Latency Comparison Numbers
    --------------------------
    L1 cache reference                           0.5 ns
    Branch mispredict                            5   ns
    L2 cache reference                           7   ns                      14x L1 cache
    Mutex lock/unlock                          100   ns
    Main memory reference                      100   ns                      20x L2 cache, 200x L1 cache
    Compress 1K bytes with Zippy            10,000   ns       10 us
    Send 1 KB bytes over 1 Gbps network     10,000   ns       10 us
    Read 4 KB randomly from SSD-         150,000   ns      150 us          ~1GB/sec SSD
    Read 1 MB sequentially from memory     250,000   ns      250 us
    Round trip within same datacenter      500,000   ns      500 us
    Read 1 MB sequentially from SSD-   1,000,000   ns    1,000 us    1 ms  ~1GB/sec SSD, 4X memory
    Disk seek                           10,000,000   ns   10,000 us   10 ms  20x datacenter roundtrip
    Read 1 MB sequentially from 1 Gbps  10,000,000   ns   10,000 us   10 ms  40x memory, 10X SSD
    Read 1 MB sequentially from disk    30,000,000   ns   30,000 us   30 ms 120x memory, 30X SSD
    Send packet CA->Netherlands->CA    150,000,000   ns  150,000 us  150 ms
    
    Notes
    -----
    1 ns = 10^-9 seconds
    1 us = 10^-6 seconds = 1,000 ns
    1 ms = 10^-3 seconds = 1,000 us = 1,000,000 ns
    

Handy metrics based on numbers above:

- Read sequentially from disk at 30 MB/s
- Read sequentially from 1 Gbps Ethernet at 100 MB/s
- Read sequentially from SSD at 1 GB/s
- Read sequentially from main memory at 4 GB/s
- 6-7 world-wide round trips per second
- 2,000 round trips per second within a data center

#### [](https://github.com/donnemartin/system-design-primer#latency-numbers-visualized) Latency numbers visualized

[![](https://camo.githubusercontent.com/77f72259e1eb58596b564d1ad823af1853bc60a3/687474703a2f2f692e696d6775722e636f6d2f6b307431652e706e67) ](https://camo.githubusercontent.com/77f72259e1eb58596b564d1ad823af1853bc60a3/687474703a2f2f692e696d6775722e636f6d2f6b307431652e706e67) 

#### [](https://github.com/donnemartin/system-design-primer#sources-and-further-reading-14) Source(s) and further reading

- [Latency numbers every programmer should know - 1](https://gist.github.com/jboner/2841832) 
- [Latency numbers every programmer should know - 2](https://gist.github.com/hellerbarde/2843375) 
- [Designs, lessons, and advice from building large distributed systems](http://www.cs.cornell.edu/projects/ladis2009/talks/dean-keynote-ladis2009.pdf) 
- [Software Engineering Advice from Building Large-Scale Distributed Systems](https://static.googleusercontent.com/media/research.google.com/en//people/jeff/stanford-295-talk.pdf) 