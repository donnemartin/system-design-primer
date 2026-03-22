/**
 * Part D: Data Layer — Chapters 14–17
 * Application Layer, Database, Cache, Asynchronism
 *
 * Registered into global CHAPTERS_D object.
 */

const CHAPTERS_D = {

    // ================================================================
    // Chapter 14 — Application Layer
    // ================================================================
    'application-layer': {
        part: 'Part D',
        title: 'Application Layer',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 14 — Data Layer</div>
                <h1>Application Layer</h1>
                <p class="chapter-subtitle">Separating the web layer from the application (platform) layer allows you to scale and configure both independently — a cornerstone of resilient system design.</p>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Application Layer Request Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["Client"] --> B["Web Layer"]
    B --> C["Application Layer"]
    C --> D{"Request type"}
    D -->|Read| E["Cache Layer"]
    D -->|Write| F["Message Queue"]
    E -->|Miss| G["Database"]
    F --> H["Worker Service"]
    H --> G
    E -->|Hit| I["Return Response"]
    G --> I
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/yB5SYwm.png" class="zoomable" alt="Intro to architecting systems for scale" style="max-width:620px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="http://lethain.com/introduction-to-architecting-systems-for-scale" target="_blank" rel="noopener">Source: Intro to architecting systems for scale</a></em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Core Concept
                    </div>
                    <div class="shadcn-alert-description">Separating out the <strong>web layer</strong> from the <strong>application layer</strong> (also known as the <strong>platform layer</strong>) allows you to scale and configure both layers independently. Adding a new API results in adding application servers without necessarily adding additional web servers. The <strong>single responsibility principle</strong> advocates for small and autonomous services that work together.</div>
                </div>

                <h2>Why Separate the Layers?</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Independent Scaling</div>
                        <p class="shadcn-card-description">Scale each layer according to its own demand profile.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px">
                            <li>Adding a new API results in adding <strong>application servers</strong> without necessarily adding additional web servers.</li>
                            <li>The <strong>single responsibility principle</strong> advocates for small and autonomous services that work together.</li>
                            <li><strong>Workers</strong> in the application layer also enable asynchronism — processing tasks from message queues independently.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Key Concepts</h2>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="app-micro-tab" data-tabgroup="app-concepts">Microservices</button>
                        <button class="shadcn-tab-trigger" data-tab="app-discovery-tab" data-tabgroup="app-concepts">Service Discovery</button>
                    </div>

                    <div class="shadcn-tab-content active" id="app-micro-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Microservices <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Architecture</span></div>
                                <p class="shadcn-card-description">A suite of independently deployable, small, modular services.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>Each service runs a unique process and communicates through a well-defined, lightweight mechanism to serve a business goal.</p>
                                <div class="callout callout-tip">
                                    <div class="callout-title">💡 Example — Pinterest</div>
                                    <p>Pinterest could have the following microservices: user profile, follower, feed, search, photo upload, etc. Each can be developed, deployed, and scaled independently.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="shadcn-tab-content" id="app-discovery-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Service Discovery <span class="shadcn-badge shadcn-badge-green" style="margin-left:8px">Operations</span></div>
                                <p class="shadcn-card-description">Finding and connecting to services based on registered names, addresses, and ports.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>Systems such as <strong>Consul</strong>, <strong>Etcd</strong>, and <strong>Zookeeper</strong> can help services find each other by tracking registered names, addresses, and ports. <strong>Health checks</strong> help verify service integrity and are often done using an HTTP endpoint.</p>
                                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;margin-top:1rem;">
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-header">
                                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Consul</span></div>
                                        </div>
                                        <div class="shadcn-card-content">
                                            <p>Service mesh, health checking, key/value store by HashiCorp.</p>
                                        </div>
                                    </div>
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-header">
                                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Etcd</span></div>
                                        </div>
                                        <div class="shadcn-card-content">
                                            <p>Distributed key-value store for shared configuration and service discovery.</p>
                                        </div>
                                    </div>
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-header">
                                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Zookeeper</span></div>
                                        </div>
                                        <div class="shadcn-card-content">
                                            <p>Centralized service for maintaining configuration, naming, synchronization, and group services.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Disadvantages</h2>

                <div class="shadcn-alert shadcn-alert-destructive">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                        Disadvantages of the Application Layer
                    </div>
                    <div class="shadcn-alert-description">
                        <ul style="padding-left:18px;margin:0;">
                            <li>Adding an application layer with loosely coupled services requires a different approach from an <strong>architectural, operations, and process</strong> viewpoint (vs a monolithic system).</li>
                            <li>Microservices can add complexity in terms of <strong>deployments</strong> and <strong>operations</strong>.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📎</span> <a href="http://lethain.com/introduction-to-architecting-systems-for-scale" target="_blank" rel="noopener">Intro to architecting systems for scale</a></li>
                    <li><span class="resource-icon">📎</span> <a href="http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview" target="_blank" rel="noopener">Crack the system design interview</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/Service-oriented_architecture" target="_blank" rel="noopener">Service-oriented architecture</a></li>
                    <li><span class="resource-icon">📎</span> <a href="http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper" target="_blank" rel="noopener">Introduction to Zookeeper</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://cloudncode.wordpress.com/2016/07/22/msa-getting-started/" target="_blank" rel="noopener">Here's what you need to know about building microservices</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 15 — Database
    // ================================================================
    'database': {
        part: 'Part D',
        title: 'Database',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 15 — Data Layer</div>
                <h1>Database</h1>
                <p class="chapter-subtitle">A comprehensive guide to relational and non-relational databases, replication strategies, sharding, denormalization, SQL tuning, and choosing between SQL and NoSQL.</p>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> SQL vs NoSQL Decision Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["Choose Database"] --> B{"Structured with relationships?"}
    B -->|Yes| C{"Need ACID transactions?"}
    C -->|Yes| D["Relational DB / SQL"]
    C -->|No| E["Consider NoSQL"]
    B -->|No| F{"Data pattern?"}
    F -->|Key-Value| G["Redis / DynamoDB"]
    F -->|Document| H["MongoDB / CouchDB"]
    F -->|Wide Column| I["Cassandra / HBase"]
    F -->|Graph| J["Neo4j"]
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/Xkm5CXz.png" class="zoomable" alt="Scaling up to your first 10 million users" style="max-width:620px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="http://www.slideshare.net/AmazonWebServices/from-0-to-10s-of-millions-of-users-startup-lessons-on-aws" target="_blank" rel="noopener">Source: Scaling up to your first 10 million users</a></em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Overview
                    </div>
                    <div class="shadcn-alert-description">Databases are at the heart of most systems. Choosing the right database technology, replication strategy, and scaling mechanism is critical for building reliable, performant applications.</div>
                </div>

                <!-- =========================== -->
                <!-- RDBMS vs NoSQL Tabs          -->
                <!-- =========================== -->
                <h2>Database Types</h2>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="db-rdbms-tab" data-tabgroup="db-types">Relational (RDBMS)</button>
                        <button class="shadcn-tab-trigger" data-tab="db-nosql-tab" data-tabgroup="db-types">NoSQL</button>
                    </div>

                    <!-- RDBMS Tab -->
                    <div class="shadcn-tab-content active" id="db-rdbms-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Relational Database Management System (RDBMS) <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">SQL</span></div>
                                <p class="shadcn-card-description">A collection of data items organized in tables with ACID guarantees.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <h4>ACID Properties</h4>
                                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1rem 0;">
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-header">
                                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">A</span> Atomicity</div>
                                        </div>
                                        <div class="shadcn-card-content"><p>Each transaction is all or nothing.</p></div>
                                    </div>
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-header">
                                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">C</span> Consistency</div>
                                        </div>
                                        <div class="shadcn-card-content"><p>Any transaction will bring the database from one valid state to another.</p></div>
                                    </div>
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-header">
                                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">I</span> Isolation</div>
                                        </div>
                                        <div class="shadcn-card-content"><p>Executing transactions concurrently has the same results as if they were executed serially.</p></div>
                                    </div>
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-header">
                                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">D</span> Durability</div>
                                        </div>
                                        <div class="shadcn-card-content"><p>Once a transaction has been committed, it will remain so.</p></div>
                                    </div>
                                </div>

                                <p>There are many techniques to scale a relational database: <strong>master-slave replication</strong>, <strong>master-master replication</strong>, <strong>federation</strong>, <strong>sharding</strong>, <strong>denormalization</strong>, and <strong>SQL tuning</strong>.</p>
                            </div>
                        </div>
                    </div>

                    <!-- NoSQL Tab -->
                    <div class="shadcn-tab-content" id="db-nosql-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">NoSQL <span class="shadcn-badge shadcn-badge-green" style="margin-left:8px">Non-Relational</span></div>
                                <p class="shadcn-card-description">A collection of data items represented in a key-value store, document store, wide column store, or graph database. Data is denormalized and joins are generally done in application code.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <h4>BASE Properties</h4>
                                <div class="callout callout-info">
                                    <div class="callout-title">💡 BASE vs ACID</div>
                                    <p>Most NoSQL stores lack true ACID transactions and favor <strong>eventual consistency</strong>.</p>
                                </div>
                                <ul style="padding-left:18px">
                                    <li><strong>Basically available</strong> — the system guarantees availability.</li>
                                    <li><strong>Soft state</strong> — the state of the system may change over time, even without input.</li>
                                    <li><strong>Eventual consistency</strong> — the system will become consistent over a period of time, given no new input.</li>
                                </ul>

                                <hr style="margin:1.5rem 0;border-color:var(--border);">

                                <h4>NoSQL Store Types</h4>

                                <div class="shadcn-tabs">
                                    <div class="shadcn-tabs-list">
                                        <button class="shadcn-tab-trigger active" data-tab="nosql-kv-tab" data-tabgroup="nosql-types">Key-Value</button>
                                        <button class="shadcn-tab-trigger" data-tab="nosql-doc-tab" data-tabgroup="nosql-types">Document</button>
                                        <button class="shadcn-tab-trigger" data-tab="nosql-wide-tab" data-tabgroup="nosql-types">Wide Column</button>
                                        <button class="shadcn-tab-trigger" data-tab="nosql-graph-tab" data-tabgroup="nosql-types">Graph</button>
                                    </div>

                                    <div class="shadcn-tab-content active" id="nosql-kv-tab">
                                        <div class="shadcn-card" style="border:1px solid var(--border);">
                                            <div class="shadcn-card-header">
                                                <div class="shadcn-card-title">Key-Value Store <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">O(1)</span></div>
                                            </div>
                                            <div class="shadcn-card-content">
                                                <p>Abstraction: hash table. Allows for <strong>O(1) reads and writes</strong> and is often backed by memory or SSD. Data stores can maintain keys in lexicographic order, allowing efficient retrieval of key ranges. Key-value stores provide high performance and are often used for simple data models or rapidly-changing data, such as an in-memory cache layer.</p>
                                                <p><strong>Examples:</strong> Redis, Memcached.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="shadcn-tab-content" id="nosql-doc-tab">
                                        <div class="shadcn-card" style="border:1px solid var(--border);">
                                            <div class="shadcn-card-header">
                                                <div class="shadcn-card-title">Document Store <span class="shadcn-badge shadcn-badge-green" style="margin-left:8px">Flexible</span></div>
                                            </div>
                                            <div class="shadcn-card-content">
                                                <p>Abstraction: key-value store with documents stored as values. Documents are organized by collections, tags, metadata, or directories. Although documents can be organized or grouped together, documents may have fields that are completely different from each other.</p>
                                                <p>Some document stores like <strong>MongoDB</strong> and <strong>CouchDB</strong> also provide a SQL-like language to perform complex queries. <strong>DynamoDB</strong> supports both key-values and documents.</p>
                                                <p>Documents can be stored in XML, JSON, binary, etc.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="shadcn-tab-content" id="nosql-wide-tab">
                                        <div class="shadcn-card" style="border:1px solid var(--border);">
                                            <div class="shadcn-card-header">
                                                <div class="shadcn-card-title">Wide Column Store <span class="shadcn-badge shadcn-badge-amber" style="margin-left:8px">Columnar</span></div>
                                            </div>
                                            <div class="shadcn-card-content">
                                                <div class="img-container" style="text-align:center;margin:1rem 0;">
                                                    <img src="../images/n16iOGk.png" class="zoomable" alt="Wide column store" style="max-width:520px;width:100%;border-radius:8px;">
                                                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em>Source: SQL &amp; NoSQL, a brief history</em></p>
                                                </div>
                                                <p>Abstraction: nested map <code>ColumnFamily&lt;RowKey, Columns&lt;ColKey, Value, Timestamp&gt;&gt;</code>. Each column family can be thought of as a set of rows that share the same set of columns. A basic unit of data is a column (name/value pair). Columns can be grouped in column families. Super column families further group column families.</p>
                                                <p>Wide column stores offer high availability and high scalability, often used for very large data sets.</p>
                                                <p><strong>Examples:</strong> Bigtable, HBase, Cassandra.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="shadcn-tab-content" id="nosql-graph-tab">
                                        <div class="shadcn-card" style="border:1px solid var(--border);">
                                            <div class="shadcn-card-header">
                                                <div class="shadcn-card-title">Graph Database <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Relationships</span></div>
                                            </div>
                                            <div class="shadcn-card-content">
                                                <div class="img-container" style="text-align:center;margin:1rem 0;">
                                                    <img src="../images/fNcl65g.png" class="zoomable" alt="Graph database" style="max-width:520px;width:100%;border-radius:8px;">
                                                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em>Source: Graph database</em></p>
                                                </div>
                                                <p>Abstraction: graph. In a graph database, each node is a record and each arc is a relationship between two nodes. Graph databases are optimized to represent complex relationships with many foreign keys or many-to-many relationships.</p>
                                                <p>Graphs databases offer high performance for data models with complex relationships, such as social networks.</p>
                                                <p><strong>Examples:</strong> Neo4j, FlockDB.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <!-- =========================== -->
                <!-- Replication Strategies       -->
                <!-- =========================== -->
                <h2>Replication</h2>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="db-masterslave-tab" data-tabgroup="db-replication">Master-Slave</button>
                        <button class="shadcn-tab-trigger" data-tab="db-mastermaster-tab" data-tabgroup="db-replication">Master-Master</button>
                    </div>

                    <div class="shadcn-tab-content active" id="db-masterslave-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Master-Slave Replication <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Read Scaling</span></div>
                            </div>
                            <div class="shadcn-card-content">
                                <div class="img-container" style="text-align:center;margin:1rem 0;">
                                    <img src="../images/C9ioGtn.png" class="zoomable" alt="Master-slave replication" style="max-width:520px;width:100%;border-radius:8px;">
                                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="https://github.com/donnemartin/system-design-primer" target="_blank" rel="noopener">Source: Scalability, availability, stability, patterns</a></em></p>
                                </div>
                                <p>The master serves reads and writes, replicating writes to one or more slaves, which serve only reads. Slaves can also replicate to additional slaves in a tree-like fashion. If the master goes offline, the system can continue to operate in <strong>read-only mode</strong> until a slave is promoted to a master or a new master is provisioned.</p>
                                <div class="callout callout-warning">
                                    <div class="callout-title">⚠️ Disadvantage</div>
                                    <p>Additional logic is needed to promote a slave to a master.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="shadcn-tab-content" id="db-mastermaster-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Master-Master Replication <span class="shadcn-badge shadcn-badge-green" style="margin-left:8px">Write Scaling</span></div>
                            </div>
                            <div class="shadcn-card-content">
                                <div class="img-container" style="text-align:center;margin:1rem 0;">
                                    <img src="../images/krAHLGg.png" class="zoomable" alt="Master-master replication" style="max-width:520px;width:100%;border-radius:8px;">
                                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="https://github.com/donnemartin/system-design-primer" target="_blank" rel="noopener">Source: Scalability, availability, stability, patterns</a></em></p>
                                </div>
                                <p>Both masters serve reads and writes and coordinate with each other on writes. If either master goes down, the other master can continue to operate with both reads and writes.</p>
                                <div class="callout callout-warning">
                                    <div class="callout-title">⚠️ Disadvantages</div>
                                    <ul style="padding-left:18px">
                                        <li>You'll need a <strong>load balancer</strong> or you'll need to make changes to your application logic to determine where to write.</li>
                                        <li>Most master-master systems are either <strong>loosely consistent</strong> (violating ACID) or have increased <strong>write latency</strong> due to synchronization.</li>
                                        <li><strong>Conflict resolution</strong> comes more into play as more write nodes are added and as latency increases.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="callout callout-info" style="margin-top:1rem;">
                    <div class="callout-title">💡 Replication Disadvantages (General)</div>
                    <ul style="padding-left:18px">
                        <li>There is potential for <strong>loss of data</strong> if the master fails before newly written data can be replicated.</li>
                        <li>Writes are <strong>replayed</strong> to the read replicas — if there are a lot of writes, the read replicas can get bogged down and can't do as many reads.</li>
                        <li>The more read slaves, the more you have to replicate, which leads to greater <strong>replication lag</strong>.</li>
                        <li>Replication adds more <strong>hardware</strong> and additional <strong>complexity</strong>.</li>
                    </ul>
                </div>

                <hr class="shadcn-separator">

                <!-- =========================== -->
                <!-- Scaling Techniques           -->
                <!-- =========================== -->
                <h2>Scaling Techniques</h2>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="db-federation-tab" data-tabgroup="db-scaling">Federation</button>
                        <button class="shadcn-tab-trigger" data-tab="db-sharding-tab" data-tabgroup="db-scaling">Sharding</button>
                        <button class="shadcn-tab-trigger" data-tab="db-denorm-tab" data-tabgroup="db-scaling">Denormalization</button>
                        <button class="shadcn-tab-trigger" data-tab="db-tuning-tab" data-tabgroup="db-scaling">SQL Tuning</button>
                    </div>

                    <!-- Federation -->
                    <div class="shadcn-tab-content active" id="db-federation-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Federation (Functional Partitioning) <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Split by Function</span></div>
                            </div>
                            <div class="shadcn-card-content">
                                <div class="img-container" style="text-align:center;margin:1rem 0;">
                                    <img src="../images/U3qV33e.png" class="zoomable" alt="Federation" style="max-width:520px;width:100%;border-radius:8px;">
                                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="https://github.com/donnemartin/system-design-primer" target="_blank" rel="noopener">Source: Scaling up to your first 10 million users</a></em></p>
                                </div>
                                <p>Federation (or functional partitioning) splits up databases <strong>by function</strong>. For example, instead of a single, monolithic database, you could have three databases: <strong>forums</strong>, <strong>users</strong>, and <strong>products</strong>, resulting in less read and write traffic to each database and therefore less replication lag.</p>
                                <p>Smaller databases result in more data that can fit in memory, which in turn results in more <strong>cache hits</strong> due to the improved cache locality. With no single central master serializing writes, you can <strong>write in parallel</strong>, increasing throughput.</p>

                                <div class="callout callout-warning">
                                    <div class="callout-title">⚠️ Disadvantages</div>
                                    <ul style="padding-left:18px">
                                        <li>Federation is not effective if your schema requires huge functions or tables.</li>
                                        <li>You'll need to update your application logic to determine which database to read and write.</li>
                                        <li>Joining data from two databases is more <strong>complex</strong> with a server link.</li>
                                        <li>Federation adds more <strong>hardware</strong> and additional complexity.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sharding -->
                    <div class="shadcn-tab-content" id="db-sharding-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Sharding <span class="shadcn-badge shadcn-badge-green" style="margin-left:8px">Horizontal Partition</span></div>
                            </div>
                            <div class="shadcn-card-content">
                                <div class="img-container" style="text-align:center;margin:1rem 0;">
                                    <img src="../images/wU8x5Id.png" class="zoomable" alt="Sharding" style="max-width:520px;width:100%;border-radius:8px;">
                                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="http://www.slideshare.net/jboner/scalability-availability-stability-patterns/" target="_blank" rel="noopener">Source: Scalability, availability, stability, patterns</a></em></p>
                                </div>
                                <p>Sharding distributes data across different databases such that each database can only manage a subset of the data. Taking a users database as an example, as the number of users increases, more shards are added to the cluster.</p>
                                <p>Similar to the advantages of federation, sharding results in less read and write traffic, less replication, and more cache hits. Index size also goes down, which generally improves performance with faster queries. If one shard goes down, the other shards are still operational. There is no single central master serializing writes, allowing you to write in parallel with increased throughput.</p>

                                <div class="callout callout-warning">
                                    <div class="callout-title">⚠️ Disadvantages</div>
                                    <ul style="padding-left:18px">
                                        <li>You'll need to update your application logic to work with shards, which could result in <strong>complex SQL queries</strong>.</li>
                                        <li>Data distribution can become <strong>lopsided</strong> in a shard. For example, a set of power users on a shard could result in increased load to that shard compared to others.</li>
                                        <li>Joining data from multiple shards is more <strong>complex</strong>.</li>
                                        <li>Sharding adds more <strong>hardware</strong> and additional complexity.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Denormalization -->
                    <div class="shadcn-tab-content" id="db-denorm-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Denormalization <span class="shadcn-badge shadcn-badge-amber" style="margin-left:8px">Read Optimized</span></div>
                            </div>
                            <div class="shadcn-card-content">
                                <p>Denormalization attempts to improve read performance at the expense of some write performance. Redundant copies of the data are written in multiple tables to avoid expensive joins. Some RDBMS such as PostgreSQL and Oracle support <strong>materialized views</strong> which handle the work of storing redundant information and keeping redundant copies consistent.</p>
                                <p>Once data becomes distributed with techniques such as federation and sharding, managing joins across data centers further increases complexity. Denormalization might circumvent the need for such complex joins.</p>

                                <div class="callout callout-info">
                                    <div class="callout-title">💡 When to Denormalize</div>
                                    <p>In most systems, reads can heavily outnumber writes <strong>100:1</strong> or even <strong>1000:1</strong>. A read resulting in a complex database join can be very expensive, spending a significant amount of time on disk operations.</p>
                                </div>

                                <div class="callout callout-warning" style="margin-top:1rem;">
                                    <div class="callout-title">⚠️ Disadvantages</div>
                                    <ul style="padding-left:18px">
                                        <li>Data is <strong>duplicated</strong>.</li>
                                        <li>Constraints can help redundant copies of information stay in sync, which increases <strong>complexity</strong> of the database design.</li>
                                        <li>A denormalized database under heavy write load might perform <strong>worse</strong> than its normalized counterpart.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- SQL Tuning -->
                    <div class="shadcn-tab-content" id="db-tuning-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">SQL Tuning <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Optimization</span></div>
                            </div>
                            <div class="shadcn-card-content">
                                <p>SQL tuning is a broad topic and many books have been written as reference. It's important to <strong>benchmark</strong> and <strong>profile</strong> to simulate and uncover bottlenecks.</p>

                                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1rem 0;">
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-header">
                                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Benchmark</span></div>
                                        </div>
                                        <div class="shadcn-card-content">
                                            <p>Simulate high-load situations with tools such as <strong>ab</strong> (ApacheBench).</p>
                                        </div>
                                    </div>
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-header">
                                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Profile</span></div>
                                        </div>
                                        <div class="shadcn-card-content">
                                            <p>Enable tools such as the <strong>slow query log</strong> to help track performance issues.</p>
                                        </div>
                                    </div>
                                </div>

                                <h4>Optimization Tips</h4>
                                <div class="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Technique</th>
                                                <th>Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Tighten up the schema</strong></td>
                                                <td>Use <code>CHAR</code> instead of <code>VARCHAR</code> for fixed-length fields. <code>TEXT</code> for large blocks of text. <code>INT</code> for numbers up to 2^32. <code>DECIMAL</code> for currency to avoid floating point errors. Avoid storing large <code>BLOBS</code> — store the location instead. <code>VARCHAR(255)</code> is the max number of chars that can be counted in an 8-bit number. Set the <code>NOT NULL</code> constraint where applicable.</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Use good indices</strong></td>
                                                <td>Columns that you are querying (<code>SELECT</code>, <code>GROUP BY</code>, <code>ORDER BY</code>, <code>JOIN</code>) could be faster with indices. Indices are usually represented as self-balancing <strong>B-tree</strong> that keeps data sorted and allows searches, sequential access, insertions, and deletions in <strong>logarithmic time</strong>.</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Avoid expensive joins</strong></td>
                                                <td>Denormalize where performance demands it.</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Partition tables</strong></td>
                                                <td>Break up a table by putting hot spots in a separate table to help keep it in memory.</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Tune the query cache</strong></td>
                                                <td>In some cases, the query cache could lead to performance issues.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <!-- =========================== -->
                <!-- SQL or NoSQL                 -->
                <!-- =========================== -->
                <h2>SQL or NoSQL</h2>

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/wXGqG5f.png" class="zoomable" alt="SQL or NoSQL" style="max-width:620px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="https://github.com/donnemartin/system-design-primer" target="_blank" rel="noopener">Source: Transitioning from RDBMS to NoSQL</a></em></p>
                </div>

                <div class="shadcn-comparison-grid">
                    <div class="shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue" style="margin-right:8px">SQL</span> Reasons to Use</div>
                        </div>
                        <div class="shadcn-card-content">
                            <ul style="padding-left:18px">
                                <li>Structured data</li>
                                <li>Strict schema</li>
                                <li>Relational data</li>
                                <li>Need for complex joins</li>
                                <li>Transactions</li>
                                <li>Clear patterns for scaling</li>
                                <li>More established: developers, community, code, tools, etc.</li>
                                <li>Lookups by index are very fast</li>
                            </ul>
                        </div>
                    </div>
                    <div class="shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green" style="margin-right:8px">NoSQL</span> Reasons to Use</div>
                        </div>
                        <div class="shadcn-card-content">
                            <ul style="padding-left:18px">
                                <li>Semi-structured data</li>
                                <li>Dynamic or flexible schema</li>
                                <li>Non-relational data</li>
                                <li>No need for complex joins</li>
                                <li>Store many TB (or PB) of data</li>
                                <li>Very data intensive workload</li>
                                <li>Very high throughput for IOPS</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="callout callout-tip" style="margin-top:1rem;">
                    <div class="callout-title">💡 Sample NoSQL Data Well-Suited for NoSQL</div>
                    <ul style="padding-left:18px">
                        <li>Rapid ingest of clickstream and log data</li>
                        <li>Leaderboard or scoring data</li>
                        <li>Temporary data, such as a shopping cart</li>
                        <li>Frequently accessed ("hot") tables</li>
                        <li>Metadata/lookup tables</li>
                    </ul>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📎</span> <a href="http://www.slideshare.net/AmazonWebServices/from-0-to-10s-of-millions-of-users-startup-lessons-on-aws" target="_blank" rel="noopener">Scaling up to your first 10 million users</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/Master%E2%80%93slave_(technology)" target="_blank" rel="noopener">Master-slave replication</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/Multi-master_replication" target="_blank" rel="noopener">Multi-master replication</a></li>
                    <li><span class="resource-icon">📎</span> <a href="http://www.slideshare.net/jboner/scalability-availability-stability-patterns/" target="_blank" rel="noopener">Scalability, availability, stability, patterns</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/Federation_(information_technology)" target="_blank" rel="noopener">Federation</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/Shard_(database_architecture)" target="_blank" rel="noopener">Sharding</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/Denormalization" target="_blank" rel="noopener">Denormalization</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://www.percona.com/blog/2009/02/26/sql-vs-nosql/" target="_blank" rel="noopener">SQL vs NoSQL</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/NoSQL" target="_blank" rel="noopener">NoSQL</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/NoSQL#Types_and_examples_of_NoSQL_databases" target="_blank" rel="noopener">NoSQL patterns</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 16 — Cache
    // ================================================================
    'cache': {
        part: 'Part D',
        title: 'Cache',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 16 — Data Layer</div>
                <h1>Cache</h1>
                <p class="chapter-subtitle">Caching improves page load times and reduces the load on your servers and databases — but cache invalidation is one of the hardest problems in computer science.</p>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">🔄</span> Caching Strategy Flow
                        <span class="diagram-type-badge">Sequence</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
sequenceDiagram
    participant App
    participant Cache
    participant DB
    Note over App,DB: Cache-Aside Pattern
    App->>Cache: Read key
    alt Cache Hit
        Cache-->>App: Return value
    else Cache Miss
        App->>DB: Query database
        DB-->>App: Return value
        App->>Cache: Store in cache
    end
    Note over App,DB: Write-Through Pattern
    App->>Cache: Write key
    Cache->>DB: Write to database
    DB-->>Cache: Confirm
    Cache-->>App: Confirm
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/Q6z24La.png" class="zoomable" alt="Scalable system design patterns" style="max-width:620px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html" target="_blank" rel="noopener">Source: Scalable system design patterns</a></em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Core Concept
                    </div>
                    <div class="shadcn-alert-description">Caching improves page load times and can reduce the load on your servers and databases. In this model, the dispatcher will first look up if the request has been made before and try to find the previous result to return, in order to save the actual execution.</div>
                </div>

                <h2>Where to Cache</h2>

                <p>Caches can be located at multiple levels in your architecture in order to serve previously computed results.</p>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Client</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Caching can be located on the client side (OS or browser), server side, or in a distinct cache layer.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">CDN</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>CDNs are considered a type of cache.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Web Server</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Reverse proxies and caches such as <strong>Varnish</strong> can serve static and dynamic content directly. Web servers can also cache requests, returning responses without having to contact application servers.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Database</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Your database usually includes some level of caching in a default configuration, optimized for a generic use case.</p>
                        </div>
                    </div>
                </div>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Application Caching <span class="shadcn-badge shadcn-badge-green" style="margin-left:8px">In-Memory</span></div>
                        <p class="shadcn-card-description">In-memory caches such as Memcached and Redis are key-value stores between your application and your data storage.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <p>Since the data is held in RAM, it is much faster than typical databases where data is stored on disk. RAM is more limited than disk, so <strong>cache invalidation</strong> algorithms such as <strong>least recently used (LRU)</strong> can help invalidate "cold" entries and keep "hot" data in memory.</p>
                        <div class="callout callout-tip">
                            <div class="callout-title">💡 Redis Features</div>
                            <p>Redis has the following additional features: <strong>persistence</strong> option, built-in data structures such as <strong>sorted sets</strong> and <strong>lists</strong>.</p>
                        </div>
                        <h4>What to Cache</h4>
                        <p>There are multiple levels of caching available depending on granularity:</p>
                        <ul style="padding-left:18px">
                            <li><strong>Row level</strong></li>
                            <li><strong>Query-level caching</strong></li>
                            <li><strong>Fully-formed serializable objects</strong></li>
                            <li><strong>Fully-rendered HTML</strong></li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Caching Strategies</h2>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="cache-query-tab" data-tabgroup="cache-level">DB Query Level</button>
                        <button class="shadcn-tab-trigger" data-tab="cache-object-tab" data-tabgroup="cache-level">Object Level</button>
                    </div>

                    <div class="shadcn-tab-content active" id="cache-query-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Caching at the Database Query Level</div>
                            </div>
                            <div class="shadcn-card-content">
                                <p>Whenever you query the database, hash the query as a key and store the result to the cache. This approach suffers from expiration issues:</p>
                                <ul style="padding-left:18px">
                                    <li>Hard to delete a cached result with <strong>complex queries</strong>.</li>
                                    <li>If one piece of data changes (e.g. a table cell), you need to delete all cached queries that might include the changed cell — <strong>cascading invalidation</strong>.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="shadcn-tab-content" id="cache-object-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Caching at the Object Level <span class="shadcn-badge shadcn-badge-green" style="margin-left:8px">Recommended</span></div>
                            </div>
                            <div class="shadcn-card-content">
                                <p>See your data as an object, similar to what you do with your application code. Have your application assemble the dataset from the database into a class instance or a data structure. Remove the object from cache if its underlying data has changed. Allows for asynchronous processing: workers assemble objects by consuming the latest cached object.</p>
                                <h4>Suggestions of what to cache:</h4>
                                <ul style="padding-left:18px">
                                    <li>User sessions</li>
                                    <li>Fully rendered web pages</li>
                                    <li>Activity streams</li>
                                    <li>User graph data</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Cache Update Strategies</h2>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="cache-aside-tab" data-tabgroup="cache-update">Cache-Aside</button>
                        <button class="shadcn-tab-trigger" data-tab="cache-wt-tab" data-tabgroup="cache-update">Write-Through</button>
                        <button class="shadcn-tab-trigger" data-tab="cache-wb-tab" data-tabgroup="cache-update">Write-Behind</button>
                        <button class="shadcn-tab-trigger" data-tab="cache-ra-tab" data-tabgroup="cache-update">Refresh-Ahead</button>
                    </div>

                    <!-- Cache-Aside -->
                    <div class="shadcn-tab-content active" id="cache-aside-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Cache-Aside (Lazy Loading) <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">On-Demand</span></div>
                            </div>
                            <div class="shadcn-card-content">
                                <div class="img-container" style="text-align:center;margin:1rem 0;">
                                    <img src="../images/ONjORqk.png" class="zoomable" alt="Cache-aside" style="max-width:520px;width:100%;border-radius:8px;">
                                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="http://www.slideshare.net/taborlin/from-cache-to-in-memory-data-grid-introduction-to-hazelcast" target="_blank" rel="noopener">Source: From cache to in-memory data grid</a></em></p>
                                </div>
                                <p>The application is responsible for reading and writing from storage. The cache does not interact with storage directly. The application does the following:</p>
                                <ol style="padding-left:18px">
                                    <li>Look for entry in cache, resulting in a cache miss</li>
                                    <li>Load entry from the database</li>
                                    <li>Add entry to cache</li>
                                    <li>Return entry</li>
                                </ol>
                                <div class="callout callout-warning">
                                    <div class="callout-title">⚠️ Disadvantages</div>
                                    <ul style="padding-left:18px">
                                        <li>Each cache miss results in <strong>three trips</strong> — which can cause a noticeable delay.</li>
                                        <li>Data can become <strong>stale</strong> if it is updated in the database. This issue is mitigated by setting a time-to-live (TTL) which forces an update of the cache entry, or by using write-through.</li>
                                        <li>When a node fails, it is replaced by a new, empty node, increasing latency.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Write-Through -->
                    <div class="shadcn-tab-content" id="cache-wt-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Write-Through <span class="shadcn-badge shadcn-badge-green" style="margin-left:8px">Consistent</span></div>
                            </div>
                            <div class="shadcn-card-content">
                                <div class="img-container" style="text-align:center;margin:1rem 0;">
                                    <img src="../images/0vBc0hN.png" class="zoomable" alt="Write-through cache" style="max-width:520px;width:100%;border-radius:8px;">
                                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="http://www.slideshare.net/jaborlin/scalable-cache-design" target="_blank" rel="noopener">Source: Scalability, availability, stability, patterns</a></em></p>
                                </div>
                                <p>The application uses the cache as the main data store, reading and writing data to it, while the cache is responsible for reading and writing to the database.</p>
                                <ul style="padding-left:18px">
                                    <li>Application adds/updates entry in cache</li>
                                    <li>Cache synchronously writes entry to data store</li>
                                    <li>Return</li>
                                </ul>
                                <p>Write-through is a slow overall operation due to the write operation, but subsequent reads of just written data are fast. Users are generally more tolerant of latency when updating data than reading data. Data in the cache is <strong>not stale</strong>.</p>
                                <div class="callout callout-warning">
                                    <div class="callout-title">⚠️ Disadvantages</div>
                                    <ul style="padding-left:18px">
                                        <li>When a new node is created due to failure or scaling, the new node will not cache entries until the entry is updated in the database. Cache-aside in conjunction with write through can mitigate this issue.</li>
                                        <li>Most data written might <strong>never be read</strong>, which can be minimized with a TTL.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Write-Behind -->
                    <div class="shadcn-tab-content" id="cache-wb-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Write-Behind (Write-Back) <span class="shadcn-badge shadcn-badge-amber" style="margin-left:8px">Async</span></div>
                            </div>
                            <div class="shadcn-card-content">
                                <div class="img-container" style="text-align:center;margin:1rem 0;">
                                    <img src="../images/rgSrvjG.png" class="zoomable" alt="Write-behind cache" style="max-width:520px;width:100%;border-radius:8px;">
                                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="http://www.slideshare.net/jaborlin/scalable-cache-design" target="_blank" rel="noopener">Source: Scalability, availability, stability, patterns</a></em></p>
                                </div>
                                <p>In write-behind, the application does the following:</p>
                                <ol style="padding-left:18px">
                                    <li>Add/update entry in cache</li>
                                    <li>Asynchronously write entry to the data store, improving write performance</li>
                                </ol>
                                <div class="callout callout-warning">
                                    <div class="callout-title">⚠️ Disadvantages</div>
                                    <ul style="padding-left:18px">
                                        <li>There could be <strong>data loss</strong> if the cache goes down prior to its contents hitting the data store.</li>
                                        <li>It is more complex to implement write-behind than it is to implement cache-aside or write-through.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Refresh-Ahead -->
                    <div class="shadcn-tab-content" id="cache-ra-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Refresh-Ahead <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Predictive</span></div>
                            </div>
                            <div class="shadcn-card-content">
                                <div class="img-container" style="text-align:center;margin:1rem 0;">
                                    <img src="../images/kxtjqgE.png" class="zoomable" alt="Refresh-ahead cache" style="max-width:520px;width:100%;border-radius:8px;">
                                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="http://www.slideshare.net/taborlin/from-cache-to-in-memory-data-grid-introduction-to-hazelcast" target="_blank" rel="noopener">Source: From cache to in-memory data grid</a></em></p>
                                </div>
                                <p>You can configure the cache to automatically refresh any recently accessed cache entry prior to its expiration. Refresh-ahead can result in reduced latency vs read-through if the cache can accurately predict which items are likely to be needed in the future.</p>
                                <div class="callout callout-warning">
                                    <div class="callout-title">⚠️ Disadvantages</div>
                                    <p>Not accurately predicting which items are likely to be needed in the future can result in <strong>reduced performance</strong> than without refresh-ahead.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Disadvantages</h2>

                <div class="shadcn-alert shadcn-alert-destructive">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                        General Cache Disadvantages
                    </div>
                    <div class="shadcn-alert-description">
                        <ul style="padding-left:18px;margin:0;">
                            <li>Need to maintain consistency between caches and the source of truth such as the database through <strong>cache invalidation</strong>.</li>
                            <li>Cache invalidation is a difficult problem — there is additional complexity associated with when to update the cache.</li>
                            <li>Need to make application changes such as adding <strong>Redis</strong> or <strong>memcached</strong>.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📎</span> <a href="http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html" target="_blank" rel="noopener">Scalable system design patterns</a></li>
                    <li><span class="resource-icon">📎</span> <a href="http://lethain.com/introduction-to-architecting-systems-for-scale" target="_blank" rel="noopener">Introduction to architecting systems for scale</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/Cache_(computing)" target="_blank" rel="noopener">Wikipedia — Cache</a></li>
                    <li><span class="resource-icon">📎</span> <a href="http://www.slideshare.net/taborlin/from-cache-to-in-memory-data-grid-introduction-to-hazelcast" target="_blank" rel="noopener">From cache to in-memory data grid</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 17 — Asynchronism
    // ================================================================
    'asynchronism': {
        part: 'Part D',
        title: 'Asynchronism',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 17 — Data Layer</div>
                <h1>Asynchronism</h1>
                <p class="chapter-subtitle">Asynchronous workflows help reduce request times for expensive operations that would otherwise be performed in-line — improving responsiveness and enabling scale.</p>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">🔄</span> Async Message Queue Flow
                        <span class="diagram-type-badge">Sequence</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
sequenceDiagram
    participant Client
    participant App
    participant Queue as Message Queue
    participant Worker
    Client->>App: Submit request
    App->>Queue: Enqueue task
    App-->>Client: Accepted (202)
    Queue->>Worker: Dequeue task
    Worker->>Worker: Process task
    Worker-->>Queue: Acknowledge
    Note over Client,Worker: Client polls or receives callback
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/54GYsSx.png" class="zoomable" alt="Intro to architecting systems for scale" style="max-width:620px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="http://lethain.com/introduction-to-architecting-systems-for-scale" target="_blank" rel="noopener">Source: Intro to architecting systems for scale</a></em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Core Concept
                    </div>
                    <div class="shadcn-alert-description">Asynchronous workflows help reduce request times for expensive operations that would otherwise be performed in-line. They can also help by doing time-consuming work in advance, such as periodic aggregation of data.</div>
                </div>

                <h2>Async Patterns</h2>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="async-mq-tab" data-tabgroup="async-patterns">Message Queues</button>
                        <button class="shadcn-tab-trigger" data-tab="async-tq-tab" data-tabgroup="async-patterns">Task Queues</button>
                        <button class="shadcn-tab-trigger" data-tab="async-bp-tab" data-tabgroup="async-patterns">Back Pressure</button>
                    </div>

                    <!-- Message Queues -->
                    <div class="shadcn-tab-content active" id="async-mq-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Message Queues <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Decoupling</span></div>
                                <p class="shadcn-card-description">Receive, hold, and deliver messages. The user is not blocked and the job is processed in the background.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>Message queues receive, hold, and deliver messages. If an operation is too slow to perform inline, you can use a message queue with the following workflow:</p>
                                <ol style="padding-left:18px">
                                    <li>An application publishes a job to the queue, then notifies the user of job status</li>
                                    <li>A worker picks up the job from the queue, processes it, then signals the job is complete</li>
                                </ol>
                                <p>The user is <strong>not blocked</strong> and the job is processed in the background. During this time, the client might optionally do a small amount of processing to make it seem like the task has completed.</p>

                                <h4>Popular Implementations</h4>
                                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;margin-top:1rem;">
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-header">
                                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Redis</span></div>
                                        </div>
                                        <div class="shadcn-card-content">
                                            <p>Useful as a simple message broker but messages can be lost.</p>
                                        </div>
                                    </div>
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-header">
                                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">RabbitMQ</span></div>
                                        </div>
                                        <div class="shadcn-card-content">
                                            <p>Popular, mature, supports AMQP protocol. Requires you to adapt to the "AMQP" protocol and manage your own nodes.</p>
                                        </div>
                                    </div>
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-header">
                                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Amazon SQS</span></div>
                                        </div>
                                        <div class="shadcn-card-content">
                                            <p>Hosted — but can have high latency and has the possibility of messages being delivered twice.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Task Queues -->
                    <div class="shadcn-tab-content" id="async-tq-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Task Queues <span class="shadcn-badge shadcn-badge-green" style="margin-left:8px">Compute</span></div>
                                <p class="shadcn-card-description">Receive tasks and related data, run them, then deliver their results.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>Tasks queues receive tasks and their related data, runs them, then delivers their results. They can support scheduling and can be used to run computationally-intensive jobs in the background.</p>
                                <div class="callout callout-tip">
                                    <div class="callout-title">💡 Python — Celery</div>
                                    <p><strong>Celery</strong> has support for scheduling and primarily has python support.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Back Pressure -->
                    <div class="shadcn-tab-content" id="async-bp-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Back Pressure <span class="shadcn-badge shadcn-badge-amber" style="margin-left:8px">Flow Control</span></div>
                                <p class="shadcn-card-description">Limit queue sizes to maintain high throughput rates and good response times for jobs already in the queue.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>If queues start to grow significantly, the queue size can become larger than memory, resulting in <strong>cache misses</strong>, <strong>disk reads</strong>, and even <strong>slower performance</strong>. Back pressure can help by limiting the queue size, thereby maintaining a high throughput rate and good response times for jobs already in the queue.</p>
                                <p>Once the queue fills up, clients get a server busy or <strong>HTTP 503</strong> status code to try again later. Clients can retry the request at a later time, perhaps with <strong>exponential backoff</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Disadvantages</h2>

                <div class="shadcn-alert shadcn-alert-destructive">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                        Disadvantages of Asynchronism
                    </div>
                    <div class="shadcn-alert-description">
                        <ul style="padding-left:18px;margin:0;">
                            <li>Use cases such as <strong>inexpensive calculations</strong> and <strong>real-time workflows</strong> might be better suited for synchronous operations, as introducing queues can add delays and complexity.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📎</span> <a href="http://lethain.com/introduction-to-architecting-systems-for-scale" target="_blank" rel="noopener">Introduction to architecting systems for scale</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://www.quora.com/What-is-the-difference-between-a-message-queue-and-a-task-queue-Why-would-a-task-queue-require-a-message-broker-like-RabbitMQ-Redis-Celery-or-IronMQ-to-function" target="_blank" rel="noopener">What is the difference between a message queue and a task queue?</a></li>
                    <li><span class="resource-icon">📎</span> <a href="http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html" target="_blank" rel="noopener">Apply back pressure when overloaded</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/Little%27s_law" target="_blank" rel="noopener">Little's law</a></li>
                </ul>
            </div>
        `
    }

};
