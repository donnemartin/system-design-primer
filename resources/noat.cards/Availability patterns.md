+++
noatcards = True
isdraft = False
weight = 120
+++

# Availability patterns

There are two main patterns to support high availability:fail-over and replication.

## Active-passive (Fail-Over)

With active-passive fail-over, heartbeats are sent between the active and the passive server on standby. If the heartbeat is interrupted, the passive server takes over the active's IP address and resumes service.

The length of downtime is determined by whether the passive server is already running in 'hot' standy or whether it needs to start up from 'cold' standby. Only the active server handles traffic.

Active-passive failover can also be referred to as master-slave failover.

## Active-active (Fail-Over)

In active-active, both servers are managing traffic, spreading the load between them.

If the servers are public-facing, the DNS would need to know about the public IPs of both servers. If the servers are internal-facing, application logic would need to know about both servers.

Active-active failover can also be referred to as master-master failover.

## Disadvantage(s) : failover

- Fail-over adds more hardware and additional complexity.
- There is a potential for loss of data if the active system fails before any newly written data can be replicated to the passive.


## Master-slave replication

The master serves reads and writes, replicating writes to one or more slaves, which serve only reads. Slaves can also replicate to additional slaves in a tree-like fashion. If the master goes offline, the system can continue to operate in read-only mode until a slave is promoted to a master or a new master is provisioned.

![](https://camo.githubusercontent.com/6a097809b9690236258747d969b1d3e0d93bb8ca/687474703a2f2f692e696d6775722e636f6d2f4339696f47746e2e706e67) 

[Source: Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)

## Disadvantage(s) : master-slave replication

- Additional logic is needed to promote a slave to a master.
- See [Disadvantage(s) : replication](https://github.com/donnemartin/system-design-primer#disadvantages-replication)  for points related to both master-slave and master-master.

## Master-master replication

Both masters serve reads and writes and coordinate with each other on writes. If either master goes down, the system can continue to operate with both reads and writes.

![](https://camo.githubusercontent.com/5862604b102ee97d85f86f89edda44bde85a5b7f/687474703a2f2f692e696d6775722e636f6d2f6b7241484c47672e706e67) 
[Source: Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)

## Disadvantage(s) : master-master replication

- You'll need a load balancer or you'll need to make changes to your application logic to determine where to write.
- Most master-master systems are either loosely consistent (violating ACID) or have increased write latency due to synchronization.
- Conflict resolution comes more into play as more write nodes are added and as latency increases.
- See [Disadvantage(s) : replication](https://github.com/donnemartin/system-design-primer#disadvantages-replication)  for points related to both master-slave and master-master.

## Disadvantage(s) : replication

- There is a potential for loss of data if the master fails before any newly written data can be replicated to other nodes.
- Writes are replayed to the read replicas. If there are a lot of writes, the read replicas can get bogged down with replaying writes and can't do as many reads.
- The more read slaves, the more you have to replicate, which leads to greater replication lag.
- On some systems, writing to the master can spawn multiple threads to write in parallel, whereas read replicas only support writing sequentially with a single thread.
- Replication adds more hardware and additional complexity.

## Source(s) and further reading: replication

- [Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/) 
- [Multi-master replication](https://en.wikipedia.org/wiki/Multi-master_replication) 