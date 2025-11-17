+++
noatcards = True
isdraft = False
weight = 30
+++

# Availability vs consistency

## CAP theorem

![](https://camo.githubusercontent.com/13719354da7dcd34cd79ff5f8b6306a67bc18261/687474703a2f2f692e696d6775722e636f6d2f62674c4d4932752e706e67) 

[Source: CAP theorem revisited](http://robertgreiner.com/2014/08/cap-theorem-revisited)

In a distributed computer system, you can only support two of the following guarantees:

- Consistency - Every read receives the most recent write or an error
- Availability - Every request receives a response, without guarantee that it contains the most recent version of the information
- Partition Tolerance - The system continues to operate despite arbitrary partitioning due to network failures

_Networks aren't reliable, so you'll need to support partition tolerance. You'll need to make a software tradeoff between consistency and availability._

#### CP - consistency and partition tolerance

Waiting for a response from the partitioned node might result in a timeout error. CP is a good choice if your business needs require atomic reads and writes.

#### AP - availability and partition tolerance

Responses return the most recent version of the data, which might not be the latest. Writes might take some time to propagate when the partition is resolved.

AP is a good choice if the business needs allow for [eventual consistency](https://github.com/donnemartin/system-design-primer#eventual-consistency)  or when the system needs to continue working despite external errors.

## Source(s) and further reading

- [CAP theorem revisited](http://robertgreiner.com/2014/08/cap-theorem-revisited/) 
- [A plain english introduction to CAP theorem](http://ksat.me/a-plain-english-introduction-to-cap-theorem/) 
- [CAP FAQ](https://github.com/henryr/cap-faq) 