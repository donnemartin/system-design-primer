+++
noatcards = True
isdraft = False
weight = 122
+++

# Document store

## Document Store Abstraction: key-value store with documents stored as values

A document store is centered around documents (XML, JSON, binary, etc) , where a document stores all information for a given object. Document stores provide APIs or a query language to query based on the internal structure of the document itself. _Note, many key-value stores include features for working with a value's metadata, blurring the lines between these two storage types._

Based on the underlying implementation, documents are organized in either collections, tags, metadata, or directories. Although documents can be organized or grouped together, documents may have fields that are completely different from each other.

Some document stores like [MongoDB](https://www.mongodb.com/mongodb-architecture)  and [CouchDB](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/)  also provide a SQL-like language to perform complex queries.[DynamoDB](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf)  supports both key-values and documents.

Document stores provide high flexibility and are often used for working with occasionally changing data.

## Source(s) and further reading: document store

- [Document-oriented database](https://en.wikipedia.org/wiki/Document-oriented_database) 
- [MongoDB architecture](https://www.mongodb.com/mongodb-architecture) 
- [CouchDB architecture](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/) 
- [Elasticsearch architecture](https://www.elastic.co/blog/found-elasticsearch-from-the-bottom-up) 