+++
noatcards = True
isdraft = False
weight = 141
+++


# Cache locations

## Client caching

Caches can be located on the client side (OS or browser) , [server side](https://github.com/donnemartin/system-design-primer#reverse-proxy) , or in a distinct cache layer.

## CDN caching

[CDNs](https://github.com/donnemartin/system-design-primer#content-delivery-network) are considered a type of cache.

## Web server caching

[Reverse proxies](https://github.com/donnemartin/system-design-primer#reverse-proxy-web-server)  and caches such as [Varnish](https://www.varnish-cache.org/)  can serve static and dynamic content directly. Web servers can also cache requests, returning responses without having to contact application servers.

## Database caching

Your database usually includes some level of caching in a default configuration, optimized for a generic use case. Tweaking these settings for specific usage patterns can further boost performance.

## Application caching

In-memory caches such as Memcached and Redis are key-value stores between your application and your data storage. Since the data is held in RAM, it is much faster than typical databases where data is stored on disk. RAM is more limited than disk, so [cache invalidation](https://en.wikipedia.org/wiki/Cache_algorithms)  algorithms such as [least recently used (LRU) ](https://en.wikipedia.org/wiki/Cache_algorithms#Least_Recently_Used)  can help invalidate 'cold' entries and keep 'hot' data in RAM.

Redis has the following additional features:

- Persistence option
- Built-in data structures such as sorted sets and lists

There are multiple levels you can cache that fall into two general categories: database queries and objects:

- Row level
- Query-level
- Fully-formed serializable objects
- Fully-rendered HTML

Generaly, you should try to avoid file-based caching, as it makes cloning and auto-scaling more difficult.