+++
noatcards = True
isdraft = False
weight = 145
+++

# Write-behind (write-back) 

## Introduction

![](https://camo.githubusercontent.com/8aa9f1a2f050c1422898bb5e82f1f01773334e22/687474703a2f2f692e696d6775722e636f6d2f72675372766a472e706e67) 

[Source: Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)

In write-behind, tha application does the following:

- Add/update entry in cache
- Asynchronously write entry to the data store, improving write performance

## Disadvantage(s) : write-behind

- There could be data loss if the cache goes down prior to its contents hitting the data store.
- It is more complex to implement write-behind than it is to implement cache-aside or write-through.