+++
noatcards = True
isdraft = False
weight = 143
+++

# Cache-aside

## Introduction

![](https://camo.githubusercontent.com/7f5934e49a678b67f65e5ed53134bc258b007ebb/687474703a2f2f692e696d6775722e636f6d2f4f4e6a4f52716b2e706e67) 

[Source: From cache to in-memory data grid](http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast)

The application is responsible for reading and writing from storage. The cache does not interact with storage directly. The application does the following:

- Look for entry in cache, resulting in a cache miss
- Load entry from the database
- Add entry to cache
- Return entry
```python
def get_user(self, user_id) :
    user = cache.get("user.{0}", user_id) 
    if user is None:
        user = db.query("SELECT * FROM users WHERE user_id = {0}", user_id) 
        if user is not None:
            cache.set(key, json.dumps(user))
    return user
```

[Memcached](https://memcached.org/) is generally used in this manner.

Subsequent reads of data added to cache are fast. Cache-aside is also referred to as lazy loading. Only requested data is cached, which avoids filling up the cache with data that isn't requested.

## Disadvantage(s) : cache-aside

- Each cache miss results in three trips, which can cause a noticeable delay.
- Data can become stale if it is updated in the database. This issue is mitigated by setting a time-to-live (TTL) which forces an update of the cache entry, or by using write-through.
- When a node fails, it is replaced by a new, empty node, increasing latency.