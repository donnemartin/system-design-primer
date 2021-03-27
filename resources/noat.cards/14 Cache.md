+++
noatcards = True
isdraft = False
weight = 140
+++


# Cache

## Cache - Introduction
![](https://camo.githubusercontent.com/7acedde6aa7853baf2eb4a53f88e2595ebe43756/687474703a2f2f692e696d6775722e636f6d2f51367a32344c612e706e67) 

[Source: Scalable system design patterns](http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html)

Caching improves page load times and can reduce the load on your servers and databases. In this model, the dispatcher will first lookup if the request has been made before and try to find the previous result to return, in order to save the actual execution.

Databases often benefit from a uniform distribution of reads and writes across its partitions. Popular items can skew the distribution, causing bottlenecks. Putting a cache in front of a database can help absorb uneven loads and spikes in traffic.

## Disadvantage(s) : cache

- Need to maintain consistency between caches and the source of truth such as the database through [cache invalidation](https://en.wikipedia.org/wiki/Cache_algorithms) .
- Need to make application changes such as adding Redis or memcached.
- Cache invalidation is a difficult problem, there is additional complexity associated with when to update the cache.

## Source(s) and further reading

- [From cache to in-memory data grid](http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast) 
- [Scalable system design patterns](http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html) 
- [Introduction to architecting systems for scale](http://lethain.com/introduction-to-architecting-systems-for-scale/) 
- [Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/) 
- [Scalability](http://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache) 
- [AWS ElastiCache strategies](http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/Strategies.html) 
- [Wikipedia](https://en.wikipedia.org/wiki/Cache_(computing))