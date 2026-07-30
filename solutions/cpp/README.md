# C++ System Design Solutions

This directory contains C++ implementations of the system design and object-oriented design problems from the System Design Primer.

## Building

```bash
mkdir build && cd build
cmake ..
make
```

## Running Individual Solutions

After building, run any solution:

```bash
./hash_table
./lru_cache
./parking_lot
./deck_of_cards
./call_center
./online_chat
./query_cache
./social_graph
./mint
./web_crawler
./web_crawler_mapreduce
./pastebin
./mint_mapreduce
./sales_rank
```

## Solutions Overview

### Object-Oriented Design

| Solution | Description | Key Concepts |
|----------|-------------|--------------|
| `hash_table` | Hash table with separate chaining | Hash functions, collision resolution, chaining |
| `lru_cache` | LRU Cache implementation | Doubly-linked list, hash map, O(1) operations |
| `parking_lot` | Parking lot simulation | Polymorphism, abstract classes, vehicle hierarchy |
| `deck_of_cards` | Blackjack card game | Card game logic, hand scoring, deck management |
| `call_center` | Call dispatch system | Employee hierarchy, call escalation, queue management |
| `online_chat` | Chat system design | User management, messaging, friend requests |

### System Design

| Solution | Description | Key Concepts |
|----------|-------------|--------------|
| `query_cache` | Query result caching | LRU eviction, cache-aside pattern |
| `social_graph` | Social network BFS | Graph traversal, sharded servers, lookup service |
| `mint` | Financial transaction categorization | Category mapping, budget management |
| `web_crawler` | Web crawler with priority queue | Priority crawling, duplicate detection |
| `web_crawler_mapreduce` | URL deduplication via MapReduce | Frequency counting, unique filtering |
| `pastebin` | Hit count analytics | Log processing, aggregation by period |
| `mint_mapreduce` | Spending aggregation | Budget notifications, category aggregation |
| `sales_rank` | Sales ranking by category | Multi-stage aggregation, distributed sort |

## C++ Features Used

- `enum class` for type-safe enumerations
- `std::unordered_map` for hash-based lookups
- `std::vector` for dynamic arrays
- `std::list` for doubly-linked lists
- `std::queue` for BFS traversal
- Pure virtual functions for abstract classes
- Smart pointer patterns (manual memory management in examples)

## Comparison with Python

Each C++ solution mirrors the corresponding Python implementation while leveraging C++ features:

- **Performance**: C++ provides faster execution for data structure operations
- **Type Safety**: `enum class` and strong typing prevent runtime errors
- **Memory Management**: Manual memory management demonstrates ownership patterns
- **STL Containers**: Standard Template Library provides efficient data structures

## Requirements

- C++17 or later
- CMake 3.14 or later
- GCC 7+ or Clang 5+ (or equivalent)
