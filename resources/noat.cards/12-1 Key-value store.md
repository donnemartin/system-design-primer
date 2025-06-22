+++ 
noatcards = True 
isdraft = False 
weight = 121
+++

# Key-value store

## Abstraction: hash table

A key-value store generally allows for O(1) reads and writes and is often backed by memory or SSD. Data stores can
maintain keys in [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) , allowing efficient
retrieval of key ranges. Key-value stores can allow for storing of metadata with a value.

Key-value stores provide high performance and are often used for simple data models or for rapidly-changing data, such
as an in-memory cache layer. Since they offer only a limited set of operations, complexity is shifted to the application
layer if additional operations are needed.

A key-value store is the basis for more complex system systems such as a document store, and in some cases, a graph
database.

## Source(s) and further reading: key-value store

- [Key-value database](https://en.wikipedia.org/wiki/Key-value_database)
- [Disadvantages of key-value stores](http://stackoverflow.com/questions/4056093/what-are-the-disadvantages-of-using-a-key-value-table-over-nullable-columns-or)
- [Redis architecture](http://qnimate.com/overview-of-redis-architecture/)
- [Memcached architecture](https://www.adayinthelifeof.nl/2011/02/06/memcache-internals/) 