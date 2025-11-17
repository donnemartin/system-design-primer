+++
noatcards = True
isdraft = False
weight = 144
+++

# Write-through

## Write-through introduction

![](https://camo.githubusercontent.com/56b870f4d199335ccdbc98b989ef6511ed14f0e2/687474703a2f2f692e696d6775722e636f6d2f3076426330684e2e706e67) 

[Source: Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)

The application uses the cache as the main data store, reading and writing data to it, while the cache is responsible for reading and writing to the database:

- Application adds/updates entry in cache
- Cache synchronously writes entry to data store
- Return

Application code:

```
    set_user(12345, {"foo":"bar"}) 
```

Cache code:

```
def set_user(user_id, values) :
    user = db.query("UPDATE Users WHERE id = {0}", user_id, values) 
    cache.set(user_id, user) 
```

Write-through is a slow overall operation due to the write operation, but subsequent reads of just written data are fast. Users are generally more tolerant of latency when updating data than reading data. Data in the cache is not stale.

## Disadvantage(s) : write through

- When a new node is created due to failure or scaling, the new node will not cache entries until the entry is updated in the database. Cache-aside in conjunction with write through can mitigate this issue.
- Most data written might never read, which can be minimized with a TTL.