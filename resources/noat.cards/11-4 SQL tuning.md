+++
noatcards = True
isdraft = False
weight = 114
+++

# SQL tuning

## Introduction

SQL tuning is a broad topic and many [books](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=sql+tuning)  have been written as reference.

It's important to benchmark and profile to simulate and uncover bottlenecks.

- Benchmark - Simulate high-load situations with tools such as [ab](http://httpd.apache.org/docs/2.2/programs/ab.html) .
- Profile - Enable tools such as the [slow query log](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html)  to help track performance issues.

Benchmarking and profiling might point you to the following optimizations.

## Tighten up the schema

- MySQL dumps to disk in contiguous blocks for fast access.
- Use `CHAR` instead of `VARCHAR` for fixed-length fields.
    - `CHAR` effectively allows for fast, random access, whereas with `VARCHAR`, you must find the end of a string before moving onto the next one.
- Use `TEXT` for large blocks of text such as blog posts. `TEXT` also allows for boolean searches. Using a `TEXT` field results in storing a pointer on disk that is used to locate the text block.
- Use `INT` for larger numbers up to 2^32 or 4 billion.
- Use `DECIMAL` for currency to avoid floating point representation errors.
- Avoid storing large `BLOBS`, store the location of where to get the object instead.
- `VARCHAR(255) ` is the largest number of characters that can be counted in an 8 bit number, often maximizing the use of a byte in some RDBMS.
- Set the `NOT NULL` constraint where applicable to [improve search performance](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search) .

## Use good indices

- Columns that you are querying (`SELECT`, `GROUP BY`, `ORDER BY`, `JOIN`) could be faster with indices.
- Indices are usually represented as self-balancing [B-tree](https://en.wikipedia.org/wiki/B-tree)  that keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time.
- Placing an index can keep the data in memory, requiring more space.
- Writes could also be slower since the index also needs to be updated.
- When loading large amounts of data, it might be faster to disable indices, load the data, then rebuild the indices.

## Avoid expensive joins

- [Denormalize](https://github.com/donnemartin/system-design-primer#denormalization)  where performance demands it.

## Partition tables

- Break up a table by putting hot spots in a separate table to help keep it in memory.

## Tune the query cache

- In some cases, the [query cache](http://dev.mysql.com/doc/refman/5.7/en/query-cache)  could lead to [performance issues](https://www.percona.com/blog/2014/01/28/10-mysql-performance-tuning-settings-after-installation/) .

## Source(s) and further reading: SQL tuning

- [Tips for optimizing MySQL queries](http://20bits.com/article/10-tips-for-optimizing-mysql-queries-that-dont-suck) 
- [Is there a good reason i see VARCHAR(255) used so often?](http://stackoverflow.com/questions/1217466/is-there-a-good-reason-i-see-varchar255-used-so-often-as-opposed-to-another-l) 
- [How do null values affect performance?](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search) 
- [Slow query log](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html) 