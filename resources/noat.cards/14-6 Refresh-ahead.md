+++
noatcards = True
isdraft = False
weight = 146
+++

# Refresh-ahead

## Introduction

![](https://camo.githubusercontent.com/49dcb54307763b4f56d61a4a1369826e2e7d52e4/687474703a2f2f692e696d6775722e636f6d2f6b78746a7167452e706e67) 

[Source: From cache to in-memory data grid](http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast)

You can configure the cache to automatically refresh any recently accessed cache entry prior to its expiration.

Refresh-ahead can result in reduced latency vs read-through if the cache can accurately predict which items are likely to be needed in the future.

##  Disadvantage(s) : refresh-ahead

- Not accurately predicting which items are likely to be needed in the future can result in reduced performance than without refresh-ahead.
