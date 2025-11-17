+++
noatcards = True
isdraft = False
weight = 120
+++

# NoSQL

## NoSQL introduction

NoSQL is a collection of data items represented in a key-value store, document-store, wide column store, or a graph database. Data is denormalized, and joins are generally done in the application code. Most NoSQL stores lack true ACID transactions and favor [eventual consistency](https://github.com/donnemartin/system-design-primer#eventual-consistency) .

## NoSQL under BASE principle

BASE is often used to describe the properties of NoSQL databases. In comparison with the [CAP Theorem](https://github.com/donnemartin/system-design-primer#cap-theorem) , BASE chooses availability over consistency.

- Basically available - the system guarantees availability.
- Soft state - the state of the system may change over time, even without input.
- Eventual consistency - the system will become consistent over a period of time, given that the system doesn't receive input during that period.

In addition to choosing between [SQL or NoSQL](https://github.com/donnemartin/system-design-primer#sql-or-nosql) , it is helpful to understand which type of NoSQL database best fits your use case(s) . We'll review key-value stores, document-stores, wide column stores, and graph databases in the next section.

## Source(s) and further reading: NoSQL

- [Explanation of base terminology](http://stackoverflow.com/questions/3342497/explanation-of-base-terminology) 
- [NoSQL databases a survey and decision guidance](https://medium.com/baqend-blog/nosql-databases-a-survey-and-decision-guidance-ea7823a822d#.wskogqenq) 
- [Scalability](http://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database) 
- [Introduction to NoSQL](https://www.youtube.com/watch?v=qI_g07C_Q5I) 
- [NoSQL patterns](http://horicky.blogspot.com/2009/11/nosql-patterns.html) 