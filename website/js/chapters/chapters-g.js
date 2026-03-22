/**
 * Part G: Object-Oriented Design Problems — Chapters 28–33
 * Design Hash Map, Design LRU Cache, Design Call Center,
 * Design Deck of Cards, Design Parking Lot, Design Online Chat
 *
 * Registered into global CHAPTERS_G object.
 */

const CHAPTERS_G = {

    // ================================================================
    // Chapter 28 — Design Hash Map
    // ================================================================
    'oo-hash-map': {
        part: 'Part G',
        title: 'Design Hash Map',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 28 — OO Design</div>
                <h1>Design Hash Map</h1>
                <p class="chapter-subtitle">Design a hash table that maps keys to values with O(1) average-case lookup, insert, and delete — handling collisions and dynamic resizing gracefully.</p>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Problem Statement
                    </div>
                    <div class="shadcn-alert-description">Design a <strong>HashTable</strong> class that supports <code>get</code>, <code>set</code>, and <code>remove</code> operations. Handle hash collisions, support dynamic resizing when the load factor exceeds a threshold, and ensure O(1) average time complexity for all operations.</div>
                </div>

                <h2>Key Design Concepts</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Hash Function</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Maps keys to array indices. A good hash function distributes keys uniformly to minimize collisions.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Collision Handling</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p><strong>Chaining</strong>: each bucket stores a linked list of entries. <strong>Open addressing</strong>: probes for the next available slot.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Load Factor</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Ratio of stored items to table size. When it exceeds a threshold (e.g. 0.75), the table resizes to maintain performance.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">Dynamic Resizing</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>When the load factor is exceeded, allocate a larger array and rehash all existing entries into the new table.</p>
                        </div>
                    </div>
                </div>

                <h2>Class Hierarchy</h2>

                <div class="table-wrapper" style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;">
                        <thead>
                            <tr>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Class</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Responsibility</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Key Methods / Fields</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-blue">HashTable</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Core data structure managing the array of buckets</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><code>get(key)</code>, <code>set(key, val)</code>, <code>remove(key)</code>, <code>_hash(key)</code>, <code>_resize()</code></td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;"><span class="shadcn-badge shadcn-badge-outline">Item</span></td>
                                <td style="padding:0.75rem;">Represents a key-value pair stored in the table</td>
                                <td style="padding:0.75rem;"><code>key</code>, <code>value</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📐</span> Hash Map Class Structure
                        <span class="diagram-type-badge">Class Diagram</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
classDiagram
    class HashTable {
        +size : int
        +table : list
        +get(key) value
        +set(key, value)
        +remove(key)
        -_hash_function(key) int
    }
    class Item {
        +key
        +value
    }
    HashTable "1" --> "*" Item : contains
                    </div>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> set() Operation Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["set(key, value)"] --> B["Hash the key"]
    B --> C["Get bucket index"]
    C --> D{"Key exists in bucket?"}
    D -->|Yes| E["Update existing Item value"]
    D -->|No| F["Append new Item to bucket"]
    E --> G["Done"]
    F --> G
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Design Considerations</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Key Decisions</div>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px">
                            <li><strong>Chaining vs Open Addressing</strong> — Chaining is simpler to implement and handles high load factors well; open addressing has better cache performance but degrades as load increases.</li>
                            <li><strong>Resize threshold</strong> — A load factor of 0.75 balances memory usage and collision frequency. Resizing typically doubles the table capacity.</li>
                            <li><strong>Hash function quality</strong> — A poor hash leads to clustering. Use prime-number modular arithmetic or well-known hash algorithms.</li>
                            <li><strong>Thread safety</strong> — Consider concurrent access: fine-grained locking per bucket vs a global lock vs lock-free designs.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        Jupyter Notebook Solution
                    </div>
                    <div class="shadcn-alert-description">Work through the full implementation with test cases in the interactive notebook: <a href="../solutions/viewer.html?notebook=object_oriented_design/hash_table/hash_map.ipynb" target="_blank" rel="noopener"><strong>hash_map.ipynb</strong></a></div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📓</span> <a href="../solutions/viewer.html?notebook=object_oriented_design/hash_table/hash_map.ipynb" target="_blank" rel="noopener">Hash Map — Jupyter Notebook Solution</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://en.wikipedia.org/wiki/Hash_table" target="_blank" rel="noopener">Hash table — Wikipedia</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 29 — Design LRU Cache
    // ================================================================
    'oo-lru-cache': {
        part: 'Part G',
        title: 'Design LRU Cache',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 29 — OO Design</div>
                <h1>Design LRU Cache</h1>
                <p class="chapter-subtitle">Design a cache with a fixed capacity that evicts the least recently used item when full — achieving O(1) time for both reads and writes.</p>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Problem Statement
                    </div>
                    <div class="shadcn-alert-description">Design a <strong>Least Recently Used (LRU) Cache</strong> with a fixed capacity. Support <code>get(key)</code> and <code>set(key, value)</code> in O(1) time. When the cache is full, evict the least recently used entry before inserting a new one.</div>
                </div>

                <h2>Key Design Concepts</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Doubly Linked List</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Maintains access order. The most recently used item is at the head; the least recently used is at the tail for O(1) eviction.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Hash Map</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Maps keys directly to linked list nodes, enabling O(1) lookup without traversing the list.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Eviction Policy</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>When the cache reaches capacity, remove the node at the tail (least recently used) before inserting the new entry.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">Move to Head</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>On every <code>get</code> or <code>set</code>, move the accessed node to the head of the list to mark it as most recently used.</p>
                        </div>
                    </div>
                </div>

                <h2>Class Hierarchy</h2>

                <div class="table-wrapper" style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;">
                        <thead>
                            <tr>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Class</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Responsibility</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Key Methods / Fields</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-blue">LRUCache</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Manages the cache with hash map + linked list</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><code>get(key)</code>, <code>set(key, val)</code>, <code>_move_to_head(node)</code>, <code>_evict()</code></td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;"><span class="shadcn-badge shadcn-badge-outline">Node</span></td>
                                <td style="padding:0.75rem;">Doubly-linked list node holding key, value, prev, next</td>
                                <td style="padding:0.75rem;"><code>key</code>, <code>value</code>, <code>prev</code>, <code>next</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📐</span> LRU Cache Class Structure
                        <span class="diagram-type-badge">Class Diagram</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
classDiagram
    class LRUCache {
        +size : int
        +capacity : int
        +lookup_map : map
        +linked_list : LinkedList
        +get(key) value
        +set(key, value)
        -_move_to_front(node)
        -_remove_oldest()
    }
    class Node {
        +key
        +value
        +prev : Node
        +next : Node
    }
    LRUCache "1" --> "*" Node : manages
                    </div>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">🔄</span> get() and set() Operations
                        <span class="diagram-type-badge">Sequence</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
sequenceDiagram
    participant Client
    participant Cache as LRUCache
    participant Map as lookup_map
    participant List as linked_list
    Note over Client,List: get(key) Operation
    Client->>Cache: get(key)
    Cache->>Map: lookup key
    alt Cache Hit
        Map-->>Cache: node found
        Cache->>List: move node to front
        Cache-->>Client: return value
    else Cache Miss
        Map-->>Cache: not found
        Cache-->>Client: return None
    end
    Note over Client,List: set(key, value) Operation
    Client->>Cache: set(key, value)
    Cache->>Map: lookup key
    alt Key Exists
        Map-->>Cache: node found
        Cache->>List: update and move to front
    else New Key
        alt Cache Full
            Cache->>List: remove oldest node
            Cache->>Map: delete oldest key
        end
        Cache->>List: add new node to front
        Cache->>Map: store new key
    end
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Design Considerations</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Key Decisions</div>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px">
                            <li><strong>Why doubly linked list?</strong> — Singly linked lists require O(n) to remove a node because you need the previous pointer. A doubly linked list enables O(1) removal.</li>
                            <li><strong>Sentinel nodes</strong> — Use dummy head and tail nodes to avoid null-check edge cases when adding/removing from the list.</li>
                            <li><strong>Thread safety</strong> — For concurrent access, consider read-write locks or a concurrent hash map with per-segment locking.</li>
                            <li><strong>TTL support</strong> — Extend the design with a time-to-live field per entry and a background thread or lazy eviction.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        Jupyter Notebook Solution
                    </div>
                    <div class="shadcn-alert-description">Work through the full implementation with test cases in the interactive notebook: <a href="../solutions/viewer.html?notebook=object_oriented_design/lru_cache/lru_cache.ipynb" target="_blank" rel="noopener"><strong>lru_cache.ipynb</strong></a></div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📓</span> <a href="../solutions/viewer.html?notebook=object_oriented_design/lru_cache/lru_cache.ipynb" target="_blank" rel="noopener">LRU Cache — Jupyter Notebook Solution</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU" target="_blank" rel="noopener">LRU Cache replacement policy — Wikipedia</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 30 — Design Call Center
    // ================================================================
    'oo-call-center': {
        part: 'Part G',
        title: 'Design Call Center',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 30 — OO Design</div>
                <h1>Design Call Center</h1>
                <p class="chapter-subtitle">Model a call center with a hierarchy of employees — routing incoming calls to available staff and escalating when necessary.</p>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Problem Statement
                    </div>
                    <div class="shadcn-alert-description">Design a <strong>Call Center</strong> with three levels of employees: <strong>respondent</strong>, <strong>manager</strong>, and <strong>director</strong>. An incoming call is first assigned to an available respondent. If the respondent can't handle the call, it escalates to a manager, then to a director.</div>
                </div>

                <h2>Key Design Concepts</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Employee Hierarchy</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Three tiers: <strong>Respondent → Manager → Director</strong>. Each level has different capabilities and authority to resolve calls.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Call Routing</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Incoming calls are dispatched to the first available employee at the lowest level. Use queues per level to track who is free.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Escalation</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>When an employee cannot handle a call, it escalates to the next tier. If no one at any level is available, the call is queued.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">Inheritance</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>A base <code>Employee</code> class with shared logic; subclasses <code>Respondent</code>, <code>Manager</code>, <code>Director</code> override escalation behavior.</p>
                        </div>
                    </div>
                </div>

                <h2>Class Hierarchy</h2>

                <div class="table-wrapper" style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;">
                        <thead>
                            <tr>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Class</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Responsibility</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Key Methods / Fields</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-blue">CallCenter</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Manages employee queues and dispatches calls</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><code>dispatch_call(call)</code>, <code>notify_call_completed(call)</code></td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-green">Employee</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Base class — tracks availability and current call</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><code>take_call(call)</code>, <code>complete_call()</code>, <code>escalate()</code></td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-outline">Respondent / Manager / Director</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Subclasses defining rank-specific behavior</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Inherits from <code>Employee</code>, sets rank level</td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;"><span class="shadcn-badge shadcn-badge-amber">Call</span></td>
                                <td style="padding:0.75rem;">Represents an incoming call with a minimum required rank</td>
                                <td style="padding:0.75rem;"><code>rank</code>, <code>state</code>, <code>handler</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📐</span> Call Center Class Structure
                        <span class="diagram-type-badge">Class Diagram</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
classDiagram
    class CallCenter {
        +respondents : list
        +managers : list
        +directors : list
        +dispatch_call(call)
    }
    class Employee {
        &lt;&lt;abstract&gt;&gt;
        +call : Call
        +can_handle(call) bool
        +take_call(call)
        +complete_call()
    }
    class Respondent
    class Manager
    class Director
    class Call {
        +rank : int
        +caller : str
    }
    Employee <|-- Respondent
    Employee <|-- Manager
    Employee <|-- Director
    CallCenter --> Employee : manages
    Employee --> Call : handles
                    </div>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Call Dispatch Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["Incoming Call"] --> B{"Respondent available?"}
    B -->|Yes| C["Assign to Respondent"]
    B -->|No| D{"Manager available?"}
    D -->|Yes| E["Escalate to Manager"]
    D -->|No| F{"Director available?"}
    F -->|Yes| G["Escalate to Director"]
    F -->|No| H["Queue the Call"]
    C --> I["Call Handled"]
    E --> I
    G --> I
    H --> J["Retry when available"]
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Design Considerations</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Key Decisions</div>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px">
                            <li><strong>Queue per rank</strong> — Maintain separate queues of available employees for each tier to enable fast lookup of the first free employee.</li>
                            <li><strong>Call queuing</strong> — If all employees at every level are busy, hold the call in a waiting queue and assign it when someone frees up.</li>
                            <li><strong>Escalation path</strong> — A call's <code>rank</code> field defines the minimum tier that can handle it. Escalation simply increments this rank.</li>
                            <li><strong>Notification pattern</strong> — When a call completes, the employee notifies the call center so it can dispatch queued calls.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        Jupyter Notebook Solution
                    </div>
                    <div class="shadcn-alert-description">Work through the full implementation with test cases in the interactive notebook: <a href="../solutions/viewer.html?notebook=object_oriented_design/call_center/call_center.ipynb" target="_blank" rel="noopener"><strong>call_center.ipynb</strong></a></div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📓</span> <a href="../solutions/viewer.html?notebook=object_oriented_design/call_center/call_center.ipynb" target="_blank" rel="noopener">Call Center — Jupyter Notebook Solution</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://en.wikipedia.org/wiki/Call_centre" target="_blank" rel="noopener">Call centre — Wikipedia</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 31 — Design Deck of Cards
    // ================================================================
    'oo-deck-of-cards': {
        part: 'Part G',
        title: 'Design Deck of Cards',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 31 — OO Design</div>
                <h1>Design Deck of Cards</h1>
                <p class="chapter-subtitle">Model a generic deck of cards using OOP — with support for shuffling, dealing, and extending to specific card games like Blackjack.</p>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Problem Statement
                    </div>
                    <div class="shadcn-alert-description">Design a <strong>Deck of Cards</strong> using object-oriented principles. The deck should support shuffling and dealing cards. Demonstrate how to extend the design to support a specific game such as <strong>Blackjack</strong>, including hand scoring.</div>
                </div>

                <h2>Key Design Concepts</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Enums for Suits &amp; Values</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Use enumerations for <strong>Suit</strong> (Hearts, Diamonds, Clubs, Spades) and <strong>Face</strong> values to enforce type safety.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Inheritance &amp; Polymorphism</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>A base <code>Hand</code> class with game-specific subclasses like <code>BlackjackHand</code> that override scoring logic.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Shuffle &amp; Deal</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>The <code>Deck</code> encapsulates the collection of cards and provides <code>shuffle()</code> and <code>deal_card()</code> operations.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">Extensibility</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Design for extension: new card games only need to subclass <code>Hand</code> and implement their own scoring — no changes to <code>Deck</code> or <code>Card</code>.</p>
                        </div>
                    </div>
                </div>

                <h2>Class Hierarchy</h2>

                <div class="table-wrapper" style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;">
                        <thead>
                            <tr>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Class</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Responsibility</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Key Methods / Fields</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-outline">Suit (Enum)</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Enumerates the four suits</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">HEARTS, DIAMONDS, CLUBS, SPADES</td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-amber">Card</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">A single card with suit and face value</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><code>suit</code>, <code>value</code></td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-blue">Deck</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Holds 52 cards, provides shuffle and deal</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><code>shuffle()</code>, <code>deal_card()</code>, <code>remaining_cards()</code></td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-green">Hand</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Base class for a player's hand of cards</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><code>add_card(card)</code>, <code>score()</code></td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;"><span class="shadcn-badge shadcn-badge-green">BlackjackHand</span></td>
                                <td style="padding:0.75rem;">Extends Hand with Blackjack-specific scoring (Ace = 1 or 11)</td>
                                <td style="padding:0.75rem;"><code>score()</code>, <code>is_bust()</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📐</span> Deck of Cards Class Structure
                        <span class="diagram-type-badge">Class Diagram</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
classDiagram
    class Suit {
        &lt;&lt;enumeration&gt;&gt;
        HEART
        DIAMOND
        CLUB
        SPADE
    }
    class Card {
        +suit : Suit
        +value : int
    }
    class Deck {
        +cards : list
        +shuffle()
        +deal_card() Card
        +remaining() int
    }
    class Hand {
        +cards : list
        +add_card(card)
        +score() int
    }
    class BlackjackHand {
        +score() int
        +is_bust() bool
    }
    Card --> Suit : has
    Deck "1" --> "*" Card : contains
    Hand "1" --> "*" Card : holds
    Hand <|-- BlackjackHand
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Design Considerations</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Key Decisions</div>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px">
                            <li><strong>Generic vs game-specific</strong> — Keep <code>Deck</code> and <code>Card</code> game-agnostic. Game rules live in <code>Hand</code> subclasses.</li>
                            <li><strong>Ace handling in Blackjack</strong> — An Ace counts as 11 unless it causes a bust, in which case it becomes 1. The <code>score()</code> method must handle this dynamically.</li>
                            <li><strong>Enum vs constants</strong> — Enums for suits and face values prevent invalid card creation and improve readability.</li>
                            <li><strong>Multiple decks</strong> — For casino games, extend to support a "shoe" of multiple shuffled decks.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        Jupyter Notebook Solution
                    </div>
                    <div class="shadcn-alert-description">Work through the full implementation with test cases in the interactive notebook: <a href="../solutions/viewer.html?notebook=object_oriented_design/deck_of_cards/deck_of_cards.ipynb" target="_blank" rel="noopener"><strong>deck_of_cards.ipynb</strong></a></div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📓</span> <a href="../solutions/viewer.html?notebook=object_oriented_design/deck_of_cards/deck_of_cards.ipynb" target="_blank" rel="noopener">Deck of Cards — Jupyter Notebook Solution</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://en.wikipedia.org/wiki/Standard_52-card_deck" target="_blank" rel="noopener">Standard 52-card deck — Wikipedia</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 32 — Design Parking Lot
    // ================================================================
    'oo-parking-lot': {
        part: 'Part G',
        title: 'Design Parking Lot',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 32 — OO Design</div>
                <h1>Design Parking Lot</h1>
                <p class="chapter-subtitle">Model a multi-level parking lot that handles different vehicle sizes, assigns spots intelligently, and tracks availability in real time.</p>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Problem Statement
                    </div>
                    <div class="shadcn-alert-description">Design a <strong>Parking Lot</strong> with multiple levels. Each level has rows of spots in three sizes: <strong>small</strong> (motorcycle), <strong>compact</strong> (car), and <strong>large</strong> (bus). A vehicle is assigned to an appropriate spot based on its size. Track available spots per level.</div>
                </div>

                <h2>Key Design Concepts</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Vehicle Sizing</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Vehicles have different sizes: <strong>Motorcycle</strong> fits in any spot, <strong>Car</strong> fits in compact or large, <strong>Bus</strong> requires multiple large spots.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Spot Assignment</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Each level tries to park the vehicle in the smallest suitable spot, scanning rows to find availability.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Multi-Level Structure</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>The <code>ParkingLot</code> contains multiple <code>Level</code> objects. When one level is full, try the next level.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">Availability Tracking</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Each level tracks its available spot count. The lot reports total availability across all levels.</p>
                        </div>
                    </div>
                </div>

                <h2>Class Hierarchy</h2>

                <div class="table-wrapper" style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;">
                        <thead>
                            <tr>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Class</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Responsibility</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Key Methods / Fields</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-blue">ParkingLot</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Top-level container managing multiple levels</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><code>park_vehicle(vehicle)</code>, <code>available_spots()</code></td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-green">Level</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">A single floor with rows of parking spots</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><code>park_vehicle(vehicle)</code>, <code>available_spots()</code>, <code>unpark(spot)</code></td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-amber">ParkingSpot</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">A single spot with a size (small, compact, large)</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><code>can_fit(vehicle)</code>, <code>park(vehicle)</code>, <code>unpark()</code>, <code>is_available</code></td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-outline">Vehicle (Base)</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Abstract base class defining vehicle size</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><code>size</code>, <code>spots_needed</code></td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;"><span class="shadcn-badge shadcn-badge-outline">Motorcycle / Car / Bus</span></td>
                                <td style="padding:0.75rem;">Concrete vehicle types with specific size constraints</td>
                                <td style="padding:0.75rem;">Inherits from <code>Vehicle</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📐</span> Parking Lot Class Structure
                        <span class="diagram-type-badge">Class Diagram</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
classDiagram
    class ParkingLot {
        +levels : list
        +park_vehicle(vehicle) bool
    }
    class Level {
        +floor : int
        +spots : list
        +park_vehicle(vehicle) bool
        +available_spots() int
    }
    class ParkingSpot {
        +size : str
        +vehicle : Vehicle
        +is_available() bool
        +park(vehicle)
        +remove_vehicle()
    }
    class Vehicle {
        &lt;&lt;abstract&gt;&gt;
        +spots_needed : int
        +size : str
        +license_plate : str
    }
    class Motorcycle
    class Car
    class Bus
    ParkingLot "1" --> "*" Level : has
    Level "1" --> "*" ParkingSpot : contains
    ParkingSpot --> Vehicle : holds
    Vehicle <|-- Motorcycle
    Vehicle <|-- Car
    Vehicle <|-- Bus
                    </div>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Vehicle Parking Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["Vehicle Arrives"] --> B["Find Level with Space"]
    B --> C{"Level found?"}
    C -->|No| D["Parking Full"]
    C -->|Yes| E["Find Spot matching size"]
    E --> F{"Spot available?"}
    F -->|No| G["Try next Level"]
    G --> C
    F -->|Yes| H["Park Vehicle in Spot"]
    H --> I["spot.is_available = false"]
    I --> J["Return Success"]
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Design Considerations</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Key Decisions</div>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px">
                            <li><strong>Bus spanning multiple spots</strong> — A bus requires several contiguous large spots. The level must find a row with enough consecutive available large spots.</li>
                            <li><strong>Spot selection strategy</strong> — Use the smallest spot that fits the vehicle to maximize capacity. A motorcycle can park in any spot, but prefers a small one.</li>
                            <li><strong>Concurrency</strong> — In a real parking system, spot assignment must be atomic to prevent two vehicles from being assigned the same spot.</li>
                            <li><strong>Extensibility</strong> — Adding new vehicle types (e.g. handicapped, electric with charging) should require minimal code changes.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        Jupyter Notebook Solution
                    </div>
                    <div class="shadcn-alert-description">Work through the full implementation with test cases in the interactive notebook: <a href="../solutions/viewer.html?notebook=object_oriented_design/parking_lot/parking_lot.ipynb" target="_blank" rel="noopener"><strong>parking_lot.ipynb</strong></a></div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📓</span> <a href="../solutions/viewer.html?notebook=object_oriented_design/parking_lot/parking_lot.ipynb" target="_blank" rel="noopener">Parking Lot — Jupyter Notebook Solution</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://en.wikipedia.org/wiki/Parking_lot" target="_blank" rel="noopener">Parking lot — Wikipedia</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 33 — Design Online Chat
    // ================================================================
    'oo-online-chat': {
        part: 'Part G',
        title: 'Design Online Chat',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 33 — OO Design</div>
                <h1>Design Online Chat</h1>
                <p class="chapter-subtitle">Model an online chat system supporting one-on-one and group conversations, user presence, and message history.</p>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Problem Statement
                    </div>
                    <div class="shadcn-alert-description">Design an <strong>Online Chat</strong> system (similar to Facebook Messenger). Support <strong>1:1 private chats</strong> and <strong>group chats</strong>. Track user status (online, offline, away). Store message history and allow users to add/remove participants from group conversations.</div>
                </div>

                <h2>Key Design Concepts</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">User Management</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Each user has a unique ID, profile, buddy list, and a <strong>status</strong> (online, offline, away). The server tracks all connected users.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Conversation Model</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>A base <code>Conversation</code> class with <code>PrivateChat</code> (two users) and <code>GroupChat</code> (multiple users with admin controls) subclasses.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Message History</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Each conversation stores an ordered list of <code>Message</code> objects with timestamps, sender info, and content.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">User Status</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>An enum representing <strong>Online</strong>, <strong>Offline</strong>, and <strong>Away</strong>. Status changes are broadcast to the user's contacts.</p>
                        </div>
                    </div>
                </div>

                <h2>Class Hierarchy</h2>

                <div class="table-wrapper" style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;">
                        <thead>
                            <tr>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Class</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Responsibility</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Key Methods / Fields</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-blue">ChatServer</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Central server managing users and conversations</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><code>sign_in(user)</code>, <code>sign_out(user)</code>, <code>send_message(msg)</code></td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-green">User</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Represents a user with profile, status, and buddy list</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><code>id</code>, <code>name</code>, <code>status</code>, <code>contacts</code>, <code>conversations</code></td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-outline">UserStatus (Enum)</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Enumerates possible user states</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">ONLINE, OFFLINE, AWAY</td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-amber">Conversation</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Base class for private and group chats</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><code>participants</code>, <code>messages</code>, <code>add_message(msg)</code></td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-amber">GroupChat</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Extends Conversation with admin controls</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><code>add_user(user)</code>, <code>remove_user(user)</code>, <code>admins</code></td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;"><span class="shadcn-badge shadcn-badge-outline">Message</span></td>
                                <td style="padding:0.75rem;">A single message with content, sender, and timestamp</td>
                                <td style="padding:0.75rem;"><code>content</code>, <code>sender</code>, <code>timestamp</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📐</span> Online Chat Class Structure
                        <span class="diagram-type-badge">Class Diagram</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
classDiagram
    class ChatServer {
        +users : list
        +conversations : list
        +add_user(user)
        +remove_user(user)
        +create_conversation(users) Conversation
        +send_message(user, conversation, content)
    }
    class User {
        +id : int
        +name : str
        +status : UserStatus
    }
    class UserStatus {
        &lt;&lt;enumeration&gt;&gt;
        ONLINE
        OFFLINE
        AWAY
    }
    class Conversation {
        +users : list
        +messages : list
        +add_message(message)
    }
    class GroupChat {
        +add_user(user)
        +remove_user(user)
    }
    class Message {
        +content : str
        +timestamp : datetime
        +sender : User
    }
    ChatServer "1" --> "*" User : manages
    ChatServer "1" --> "*" Conversation : hosts
    User --> UserStatus : has
    Conversation <|-- GroupChat
    Conversation "1" --> "*" Message : contains
    Message --> User : sent by
                    </div>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">🔄</span> Send Message Flow
                        <span class="diagram-type-badge">Sequence</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
sequenceDiagram
    participant A as User A
    participant Server as ChatServer
    participant Conv as Conversation
    participant B as User B
    A->>Server: send_message(conversation, content)
    Server->>Server: validate user and conversation
    Server->>Conv: add_message(message)
    Conv->>Conv: store in messages list
    Server->>B: notify new message
    B-->>Server: acknowledge
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Design Considerations</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Key Decisions</div>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px">
                            <li><strong>Private vs Group chat</strong> — A <code>PrivateChat</code> always has exactly two participants. A <code>GroupChat</code> can have many, with add/remove semantics and admin roles.</li>
                            <li><strong>Status notifications</strong> — When a user's status changes, notify all contacts using an observer pattern rather than polling.</li>
                            <li><strong>Message delivery</strong> — For offline users, queue messages and deliver them upon sign-in. For online users, push messages in real time.</li>
                            <li><strong>Scalability hooks</strong> — The OO model maps to a distributed system: the <code>ChatServer</code> becomes a cluster, conversations shard by ID, and message queues handle delivery.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        Jupyter Notebook Solution
                    </div>
                    <div class="shadcn-alert-description">Work through the full implementation with test cases in the interactive notebook: <a href="../solutions/viewer.html?notebook=object_oriented_design/online_chat/online_chat.ipynb" target="_blank" rel="noopener"><strong>online_chat.ipynb</strong></a></div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📓</span> <a href="../solutions/viewer.html?notebook=object_oriented_design/online_chat/online_chat.ipynb" target="_blank" rel="noopener">Online Chat — Jupyter Notebook Solution</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://en.wikipedia.org/wiki/Online_chat" target="_blank" rel="noopener">Online chat — Wikipedia</a></li>
                </ul>
            </div>
        `
    },

};
