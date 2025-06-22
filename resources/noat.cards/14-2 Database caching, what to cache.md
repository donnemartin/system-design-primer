+++
noatcards = True
isdraft = False
weight = 142
+++

# Database caching, what to cache

## Introduction

There are multiple levels you can cache that fall into two general categories: database queries and objects:

- Row level
- Query-level
- Fully-formed serializable objects
- Fully-rendered HTML

Generaly, you should try to avoid file-based caching, as it makes cloning and auto-scaling more difficult.

## Caching at the database query level

Whenever you query the database, hash the query as a key and store the result to the cache. This approach suffers from expiration issues:

- Hard to delete a cached result with complex queries
- If one piece of data changes such as a table cell, you need to delete all cached queries that might include the changed cell

## Caching at the object level

See your data as an object, similar to what you do with your application code. Have your application assemble the dataset from the database into a class instance or a data structure(s) :

- Remove the object from cache if its underlying data has changed
- Allows for asynchronous processing: workers assemble objects by consuming the latest cached object

Suggestions of what to cache:

- User sessions
- Fully rendered web pages
- Activity streams
- User graph data