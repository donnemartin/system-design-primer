+++
noatcards = True
isdraft = False
weight = 110:weight
+++


# Database


## Relational database management system (RDBMS) 

![](https://camo.githubusercontent.com/15a7553727e6da98d0de5e9ca3792f6d2b5e92d4/687474703a2f2f692e696d6775722e636f6d2f586b6d3543587a2e706e67) 

[Source: Scaling up to your first 10 million users](https://www.youtube.com/watch?v=vg5onp8TU6Q)


A relational database like SQL is a collection of data items organized in tables.

ACID is a set of properties of relational database [transactions](https://en.wikipedia.org/wiki/Database_transaction) .

- Atomicity -  Each transaction is all or nothing
- Consistency - Any tranaction will bring the database from one valid state to another
- Isolation - Excuting transactions concurrently has the same results as if the transactions were executed serially
- Durability - Once a transaction has been committed, it will remain so

There are many techniques to scale a relational database: master-slave replication, master-master replication, federation, sharding, denormalization, and SQL tuning.