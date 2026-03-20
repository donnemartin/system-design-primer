+++
noatcards = True
isdraft = False
weight = 111
+++

# Federation

## Introduction about Federation

![](https://camo.githubusercontent.com/6eb6570a8b6b4e1d52e3d7cc07e7959ea5dac75f/687474703a2f2f692e696d6775722e636f6d2f553371563333652e706e67) 

[Source: Scaling up to your first 10 million users](https://www.youtube.com/watch?v=vg5onp8TU6Q)

Federation (or functional partitioning) splits up databases by function. For example, instead of a single, monolithic database, you could have three databases: forums,users, and products, resulting in less read and write traffic to each database and therefore less replication lag. Smaller databases result in more data that can fit in memory, which in turn results in more cache hits due to improved cache locality. With no single central master serializing writes you can write in parallel, increasing throughput.

## Disadvantage(s) : federation

- Federation is not effective if your schema requires huge functions or tables.
- You'll need to update your application logic to determine which database to read and write.
- Joining data from two databases is more complex with a [server link](http://stackoverflow.com/questions/5145637/querying-data-by-joining-two-tables-in-two-database-on-different-servers) .
- Federation adds more hardware and additional complexity.

## Source(s) and further reading: federation

- [Scaling up to your first 10 million users](https://www.youtube.com/watch?v=vg5onp8TU6Q) 