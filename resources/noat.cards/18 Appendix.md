+++
noatcards = True
isdraft = False
weight = 180
+++

# Appendix

## Powers of two table

```
Power           Exact Value         Approx Value        Bytes
---------------------------------------------------------------
7                             128
8                             256
10                           1024   1 thousand           1 KB
16                         65,536                       64 KB
20                      1,048,576   1 million            1 MB
30                  1,073,741,824   1 billion            1 GB
32                  4,294,967,296                        4 GB
40              1,099,511,627,776   1 trillion           1 TB
```

## Source(s) and further reading

- [Powers of two](https://en.wikipedia.org/wiki/Power_of_two) 


## Latency numbers every programmer should know

```    
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
```

Handy metrics based on numbers above:

- Read sequentially from disk at 30 MB/s
- Read sequentially from 1 Gbps Ethernet at 100 MB/s
- Read sequentially from SSD at 1 GB/s
- Read sequentially from main memory at 4 GB/s
- 6-7 world-wide round trips per second
- 2,000 round trips per second within a data center

### Latency numbers visualized

![](https://camo.githubusercontent.com/77f72259e1eb58596b564d1ad823af1853bc60a3/687474703a2f2f692e696d6775722e636f6d2f6b307431652e706e67) 

## Latency numbers: Source(s) and further reading for 

- [Latency numbers every programmer should know - 1](https://gist.github.com/jboner/2841832) 
- [Latency numbers every programmer should know - 2](https://gist.github.com/hellerbarde/2843375) 
- [Designs, lessons, and advice from building large distributed systems](http://www.cs.cornell.edu/projects/ladis2009/talks/dean-keynote-ladis2009.pdf) 
- [Software Engineering Advice from Building Large-Scale Distributed Systems](https://static.googleusercontent.com/media/research.google.com/en//people/jeff/stanford-295-talk.pdf) 

## Introduction of base 62
- Encodes to `[a-zA-Z0-9]` which works well for urls, eliminating the need for escaping special characters
- Only one hash result for the original input and and the operation is deterministic (no randomness involved) 
- Base 64 is another popular encoding but provides issues for urls because of the additional `+` and `/` characters

## MD5

- Widely used hashing function that produces a 128-bit hash value
- Uniformly distributed