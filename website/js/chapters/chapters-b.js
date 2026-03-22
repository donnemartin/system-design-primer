/**
 * Part B: Core Concepts — Chapters 05–09
 * Performance vs Scalability, Latency vs Throughput,
 * Availability vs Consistency, Consistency Patterns, Availability Patterns
 *
 * Registered into global CHAPTERS_B object.
 */

const CHAPTERS_B = {

    // ================================================================
    // Chapter 05 — Performance vs Scalability
    // ================================================================
    'performance-scalability': {
        part: 'Part B',
        title: 'Performance vs Scalability',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 05 — Core Concepts</div>
                <h1>Performance vs Scalability</h1>
                <p class="chapter-subtitle">Understanding the fundamental difference between performance and scalability — and why conflating them leads to flawed system designs.</p>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Scalability Decision Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["System is slow"] --> B{"Slow for single user?"}
    B -->|Yes| C["Performance Problem"]
    C --> D["Optimize code / algorithms"]
    B -->|No| E{"Slow under load?"}
    E -->|Yes| F["Scalability Problem"]
    F --> G{"Stateless service?"}
    G -->|Yes| H["Scale Horizontally"]
    G -->|No| I["Scale Vertically"]
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Core Principle
                    </div>
                    <div class="shadcn-alert-description">Everything is a trade-off. A service is <strong>scalable</strong> if it results in increased <strong>performance</strong> proportional to resources added.</div>
                </div>

                <h2>What is Scalability?</h2>
                <p>A service is <strong>scalable</strong> if it results in increased <strong>performance</strong> in a manner proportional to resources added. Generally, increasing performance means serving more units of work, but it can also mean handling larger units of work, such as when datasets grow.</p>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="perf-tab" data-tabgroup="perf">Performance Problem</button>
                        <button class="shadcn-tab-trigger" data-tab="scale-tab" data-tabgroup="perf">Scalability Problem</button>
                    </div>
                    <div class="shadcn-tab-content active" id="perf-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Performance Problem <span class="shadcn-badge shadcn-badge-amber" style="margin-left:8px">Slow</span></div>
                                <p class="shadcn-card-description">Your system is slow for a single user.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>If you have a <strong>performance</strong> problem, your system is slow even for a single user. This might be caused by inefficient algorithms, unoptimized database queries, or poor resource utilization.</p>
                                <p>Fixing a performance problem means making the system faster for <em>everyone</em>, even without adding more hardware.</p>
                            </div>
                        </div>
                    </div>
                    <div class="shadcn-tab-content" id="scale-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Scalability Problem <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Load</span></div>
                                <p class="shadcn-card-description">Your system is fast for one user but slow under heavy load.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>If you have a <strong>scalability</strong> problem, your system performs well for a single user but degrades under heavy load. The system cannot handle growth in users, data, or traffic.</p>
                                <p>Fixing a scalability problem means the system can grow by adding resources (scaling up or out) proportionally.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Side-by-Side Comparison</h2>

                <div class="shadcn-comparison-grid">
                    <div class="shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title">Performance</div>
                        </div>
                        <div class="shadcn-card-content">
                            <ul style="padding-left:18px">
                                <li>How fast is each individual request?</li>
                                <li>Measured in latency (ms)</li>
                                <li>Improved by optimization</li>
                                <li>Better algorithms, caching, indexing</li>
                            </ul>
                        </div>
                    </div>
                    <div class="shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title">Scalability</div>
                        </div>
                        <div class="shadcn-card-content">
                            <ul style="padding-left:18px">
                                <li>How does the system handle growth?</li>
                                <li>Measured in throughput (req/s)</li>
                                <li>Improved by architecture</li>
                                <li>Horizontal scaling, sharding, replication</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Key Takeaway</h2>
                <div class="shadcn-card">
                    <div class="shadcn-card-content">
                        <p style="margin:0">You can have a system with great <span class="shadcn-badge shadcn-badge-green">performance</span> that doesn't scale, and a system that <span class="shadcn-badge shadcn-badge-blue">scales</span> well but has mediocre per-request performance. The best systems optimize both — but start by understanding which problem you're actually solving.</p>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📎</span> <a href="http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html" target="_blank" rel="noopener">A word on scalability</a></li>
                    <li><span class="resource-icon">📎</span> <a href="http://www.slideshare.net/jboner/scalability-availability-stability-patterns/" target="_blank" rel="noopener">Scalability, availability, stability, patterns</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 06 — Latency vs Throughput
    // ================================================================
    'latency-throughput': {
        part: 'Part B',
        title: 'Latency vs Throughput',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 06 — Core Concepts</div>
                <h1>Latency vs Throughput</h1>
                <p class="chapter-subtitle">Two fundamental measures of system performance — learn when to optimize for each, and how they interact.</p>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Latency vs Throughput
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart LR
    A["Request"] --> B["Queue Wait"]
    B --> C["Processing"]
    C --> D["Response"]
    A -.->|"Latency = total time"| D
    E["Throughput"] -.->|"Requests / second"| C
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Core Principle
                    </div>
                    <div class="shadcn-alert-description">Generally, you should aim for <strong>maximal throughput</strong> with <strong>acceptable latency</strong>.</div>
                </div>

                <h2>Definitions</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber" style="margin-right:8px">Latency</span> Time per Action</div>
                        </div>
                        <div class="shadcn-card-content">
                            <p><strong>Latency</strong> is the time to perform some action or to produce some result. It is typically measured in milliseconds (ms) or microseconds (µs).</p>
                            <p>Examples: time for a database query to return, time for an API response, round-trip time of a network packet.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue" style="margin-right:8px">Throughput</span> Actions per Time</div>
                        </div>
                        <div class="shadcn-card-content">
                            <p><strong>Throughput</strong> is the number of such actions or results per unit of time. It is typically measured in requests per second (req/s), queries per second (QPS), or bits per second (bps).</p>
                            <p>Examples: web server handling 10,000 req/s, disk reading 500 MB/s, network transmitting 1 Gbps.</p>
                        </div>
                    </div>
                </div>

                <h2>Side-by-Side Comparison</h2>

                <div class="shadcn-comparison-grid">
                    <div class="shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title">Latency</div>
                            <p class="shadcn-card-description">How long does one operation take?</p>
                        </div>
                        <div class="shadcn-card-content">
                            <ul style="padding-left:18px">
                                <li>Measured in <strong>ms</strong> or <strong>µs</strong></li>
                                <li>Lower is better</li>
                                <li>Affected by network hops, disk I/O, processing time</li>
                                <li>Critical for real-time systems (gaming, trading)</li>
                                <li>Analogy: <em>how fast a single car travels on a highway</em></li>
                            </ul>
                        </div>
                    </div>
                    <div class="shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title">Throughput</div>
                            <p class="shadcn-card-description">How many operations per second?</p>
                        </div>
                        <div class="shadcn-card-content">
                            <ul style="padding-left:18px">
                                <li>Measured in <strong>req/s</strong>, <strong>QPS</strong>, or <strong>bps</strong></li>
                                <li>Higher is better</li>
                                <li>Affected by concurrency, bandwidth, parallelism</li>
                                <li>Critical for batch processing, data pipelines</li>
                                <li>Analogy: <em>how many cars pass a point per hour</em></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>The Relationship</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-content">
                        <p>Latency and throughput are related but <strong>not inversely proportional</strong> in all cases. You can improve throughput (by adding parallelism) without reducing latency of individual requests. Conversely, reducing latency doesn't always increase throughput.</p>
                        <div class="callout callout-info">
                            <div class="callout-title">💡 Design Guideline</div>
                            <p>Aim for <strong>maximal throughput</strong> with <strong>acceptable latency</strong>. Don't sacrifice latency beyond what your users or SLAs can tolerate, but within that envelope, push throughput as high as possible.</p>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📎</span> <a href="https://community.cadence.com/cadence_blogs_8/b/fv/posts/understanding-latency-vs-throughput" target="_blank" rel="noopener">Understanding latency vs throughput</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 07 — Availability vs Consistency
    // ================================================================
    'availability-consistency': {
        part: 'Part B',
        title: 'Availability vs Consistency',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 07 — Core Concepts</div>
                <h1>Availability vs Consistency</h1>
                <p class="chapter-subtitle">The CAP theorem and the fundamental trade-off every distributed system must make.</p>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> CAP Theorem Decision Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["Distributed System"] --> B{"Network Partition?"}
    B -->|No partition| C["Can have C + A"]
    B -->|Partition occurs| D{"Choose one:"}
    D -->|Consistency| E["CP System"]
    E --> F["Reject requests until partition heals"]
    D -->|Availability| G["AP System"]
    G --> H["Serve possibly stale data"]
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>CAP Theorem</h2>

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/bgLMI2u.png" class="zoomable" alt="CAP theorem Venn diagram" style="max-width:480px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="https://robertgreiner.com/cap-theorem-revisited" target="_blank" rel="noopener">Source: CAP theorem revisited</a></em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-warning">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                        CAP Trade-Off
                    </div>
                    <div class="shadcn-alert-description">In a distributed computer system, you can only support <strong>two</strong> of the following three guarantees simultaneously.</div>
                </div>

                <div class="concept-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">C</span> Consistency</div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Every read receives the <strong>most recent write</strong> or an error.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">A</span> Availability</div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Every request receives a <strong>response</strong>, without guarantee it contains the most recent version.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">P</span> Partition Tolerance</div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>The system continues to operate despite arbitrary <strong>network partitioning</strong> due to failures.</p>
                        </div>
                    </div>
                </div>

                <div class="callout callout-warning">
                    <div class="callout-title">⚠️ Networks Aren't Reliable</div>
                    <p>Networks aren't reliable, so you'll <strong>always</strong> need to support partition tolerance. This means you must make a software trade-off between <strong>consistency</strong> and <strong>availability</strong>.</p>
                </div>

                <hr class="shadcn-separator">

                <h2>CP vs AP</h2>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="cp-tab" data-tabgroup="cap">CP — Consistency + Partition Tolerance</button>
                        <button class="shadcn-tab-trigger" data-tab="ap-tab" data-tabgroup="cap">AP — Availability + Partition Tolerance</button>
                    </div>
                    <div class="shadcn-tab-content active" id="cp-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">CP — Consistency &amp; Partition Tolerance <span class="shadcn-badge shadcn-badge-green" style="margin-left:8px">Strong Reads</span></div>
                                <p class="shadcn-card-description">Sacrifice availability for correctness during partitions.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>Waiting for a response from the partitioned node might result in a <strong>timeout error</strong>. CP is a good choice if your business needs require <strong>atomic reads and writes</strong>.</p>
                                <ul style="padding-left:18px">
                                    <li>Guarantees every read returns the latest write</li>
                                    <li>May return errors or timeouts during network partitions</li>
                                    <li>Use cases: financial transactions, inventory management, distributed locks</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="shadcn-tab-content" id="ap-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">AP — Availability &amp; Partition Tolerance <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Always On</span></div>
                                <p class="shadcn-card-description">Sacrifice consistency for uptime during partitions.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>Responses return the most readily available version of the data on any node, which <strong>might not be the latest</strong>. Writes might take some time to propagate when the partition is resolved.</p>
                                <p>AP is a good choice if the business needs to allow for <strong>eventual consistency</strong> or when the system needs to continue working despite external errors.</p>
                                <ul style="padding-left:18px">
                                    <li>Always returns a response — even if stale</li>
                                    <li>Data eventually converges across nodes</li>
                                    <li>Use cases: social media feeds, shopping carts, DNS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📄</span> <a href="https://robertgreiner.com/cap-theorem-revisited/" target="_blank" rel="noopener">CAP theorem revisited</a></li>
                    <li><span class="resource-icon">📄</span> <a href="http://ksat.me/a-plain-english-introduction-to-cap-theorem" target="_blank" rel="noopener">A plain english introduction to CAP theorem</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://github.com/henryr/cap-faq" target="_blank" rel="noopener">CAP FAQ</a></li>
                    <li><span class="resource-icon">🎥</span> <a href="https://www.youtube.com/watch?v=k-Yaq8AHlFA" target="_blank" rel="noopener">The CAP theorem (video)</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 08 — Consistency Patterns
    // ================================================================
    'consistency-patterns': {
        part: 'Part B',
        title: 'Consistency Patterns',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 08 — Core Concepts</div>
                <h1>Consistency Patterns</h1>
                <p class="chapter-subtitle">With multiple copies of the same data, how do you synchronize them so clients have a consistent view?</p>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Consistency Pattern Selection
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["Choose Consistency"] --> B{"Need real-time accuracy?"}
    B -->|Yes| C["Strong Consistency"]
    C --> D["RDBMS / Transactions"]
    B -->|No| E{"Tolerate stale reads?"}
    E -->|Briefly| F["Eventual Consistency"]
    F --> G["DNS / Email / Async replication"]
    E -->|Yes| H["Weak Consistency"]
    H --> I["VoIP / Video chat / Gaming"]
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Recall
                    </div>
                    <div class="shadcn-alert-description">From the <strong>CAP theorem</strong>: Consistency means every read receives the most recent write or an error. With multiple copies of data, we must choose <em>how</em> to synchronize them.</div>
                </div>

                <h2>Three Consistency Patterns</h2>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="weak-tab" data-tabgroup="consistency">Weak</button>
                        <button class="shadcn-tab-trigger" data-tab="eventual-tab" data-tabgroup="consistency">Eventual</button>
                        <button class="shadcn-tab-trigger" data-tab="strong-tab" data-tabgroup="consistency">Strong</button>
                    </div>

                    <div class="shadcn-tab-content active" id="weak-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Weak Consistency <span class="shadcn-badge shadcn-badge-amber" style="margin-left:8px">Best Effort</span></div>
                                <p class="shadcn-card-description">After a write, reads may or may not see it.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>A <strong>best effort</strong> approach is taken. After a write, there is no guarantee that subsequent reads will return the updated value.</p>
                                <p>This approach is seen in systems such as <span class="shadcn-badge shadcn-badge-outline">memcached</span>. Weak consistency works well in <strong>real-time use cases</strong> such as:</p>
                                <ul style="padding-left:18px">
                                    <li><strong>VoIP</strong> — if you lose reception, you don't hear what was spoken during the loss</li>
                                    <li><strong>Video chat</strong> — dropped frames are simply skipped</li>
                                    <li><strong>Realtime multiplayer games</strong> — brief desync is acceptable</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="shadcn-tab-content" id="eventual-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Eventual Consistency <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Converges</span></div>
                                <p class="shadcn-card-description">After a write, reads will eventually see it (typically within milliseconds).</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>Data is replicated <strong>asynchronously</strong>. After a write completes, reads will eventually return the updated value — typically within milliseconds.</p>
                                <p>This approach is seen in systems such as:</p>
                                <ul style="padding-left:18px">
                                    <li><span class="shadcn-badge shadcn-badge-outline">DNS</span> — record updates propagate over minutes/hours</li>
                                    <li><span class="shadcn-badge shadcn-badge-outline">Email</span> — eventual delivery across servers</li>
                                    <li><strong>Highly available systems</strong> — where uptime is more critical than immediate consistency</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="shadcn-tab-content" id="strong-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Strong Consistency <span class="shadcn-badge shadcn-badge-green" style="margin-left:8px">Guaranteed</span></div>
                                <p class="shadcn-card-description">After a write, reads will see it immediately.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>Data is replicated <strong>synchronously</strong>. After a write completes, any subsequent read will return the updated value. This provides the strongest guarantees but at the cost of higher latency.</p>
                                <p>This approach is seen in systems such as:</p>
                                <ul style="padding-left:18px">
                                    <li><span class="shadcn-badge shadcn-badge-outline">File systems</span> — writes are durable and immediately visible</li>
                                    <li><span class="shadcn-badge shadcn-badge-outline">RDBMSes</span> — transactional guarantees (ACID)</li>
                                    <li><strong>Systems that need transactions</strong> — banking, inventory, booking</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Comparison at a Glance</h2>

                <div class="table-wrapper" style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;">
                        <thead>
                            <tr>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Pattern</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">After Write</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Replication</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Use Cases</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-amber">Weak</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">May or may not see it</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Best effort</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">VoIP, video chat, games</td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-blue">Eventual</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Eventually sees it (ms)</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Asynchronous</td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">DNS, email, HA systems</td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;"><span class="shadcn-badge shadcn-badge-green">Strong</span></td>
                                <td style="padding:0.75rem;">Sees it immediately</td>
                                <td style="padding:0.75rem;">Synchronous</td>
                                <td style="padding:0.75rem;">RDBMS, file systems, transactions</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📄</span> <a href="http://snarfed.org/transactions_across_datacenters_io.html" target="_blank" rel="noopener">Transactions across data centers</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 09 — Availability Patterns
    // ================================================================
    'availability-patterns': {
        part: 'Part B',
        title: 'Availability Patterns',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 09 — Core Concepts</div>
                <h1>Availability Patterns</h1>
                <p class="chapter-subtitle">Two complementary patterns to support high availability: fail-over and replication — plus how to quantify availability in numbers.</p>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Failover Architecture Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["Active Server"] --> B["Heartbeat Monitor"]
    C["Passive Server"] --> B
    B --> D{"Active healthy?"}
    D -->|Yes| E["Route traffic to Active"]
    D -->|No| F["Promote Passive to Active"]
    F --> G["DNS / VIP Failover"]
    G --> E
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Overview
                    </div>
                    <div class="shadcn-alert-description">There are two complementary patterns to support high availability: <strong>fail-over</strong> and <strong>replication</strong>.</div>
                </div>

                <!-- ===== FAIL-OVER ===== -->
                <h2>Fail-over</h2>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="active-passive-tab" data-tabgroup="failover">Active-Passive</button>
                        <button class="shadcn-tab-trigger" data-tab="active-active-tab" data-tabgroup="failover">Active-Active</button>
                    </div>

                    <div class="shadcn-tab-content active" id="active-passive-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Active-Passive <span class="shadcn-badge shadcn-badge-amber" style="margin-left:8px">Master-Slave</span></div>
                                <p class="shadcn-card-description">One active server handles traffic; a passive standby takes over on failure.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>With active-passive fail-over, <strong>heartbeats</strong> are sent between the active and the passive server on standby. If the heartbeat is interrupted, the passive server takes over the active's IP address and resumes service.</p>
                                <p>The length of downtime is determined by whether the passive server is already running in <span class="shadcn-badge shadcn-badge-green">'hot' standby</span> or whether it needs to start up from <span class="shadcn-badge shadcn-badge-amber">'cold' standby</span>.</p>
                                <p>Only the <strong>active server handles traffic</strong>. Active-passive failover can also be referred to as master-slave failover.</p>
                            </div>
                        </div>
                    </div>

                    <div class="shadcn-tab-content" id="active-active-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Active-Active <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Master-Master</span></div>
                                <p class="shadcn-card-description">Both servers manage traffic, spreading the load between them.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>In active-active, <strong>both servers are managing traffic</strong>, spreading the load between them.</p>
                                <ul style="padding-left:18px">
                                    <li>If the servers are <strong>public-facing</strong>, the DNS would need to know about the public IPs of both servers.</li>
                                    <li>If the servers are <strong>internal-facing</strong>, application logic would need to know about both servers.</li>
                                </ul>
                                <p>Active-active failover can also be referred to as master-master failover.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="shadcn-alert shadcn-alert-destructive" style="margin-top:1rem;">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                        Disadvantages of Fail-over
                    </div>
                    <div class="shadcn-alert-description">
                        <ul style="padding-left:18px;margin:0;">
                            <li>Fail-over adds <strong>more hardware</strong> and additional <strong>complexity</strong>.</li>
                            <li>There is a potential for <strong>loss of data</strong> if the active system fails before any newly written data can be replicated to the passive.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <!-- ===== REPLICATION ===== -->
                <h2>Replication</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Master-Slave &amp; Master-Master Replication</div>
                        <p class="shadcn-card-description">Replication strategies are covered in depth in the Database section.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <div class="shadcn-comparison-grid">
                            <div class="shadcn-card" style="border:1px solid var(--border);">
                                <div class="shadcn-card-header">
                                    <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Master-Slave</span></div>
                                </div>
                                <div class="shadcn-card-content">
                                    <p>Master serves reads and writes; replicates writes to one or more slaves. Slaves serve reads only. If the master goes offline, the system continues in read-only mode until a slave is promoted.</p>
                                </div>
                            </div>
                            <div class="shadcn-card" style="border:1px solid var(--border);">
                                <div class="shadcn-card-header">
                                    <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Master-Master</span></div>
                                </div>
                                <div class="shadcn-card-content">
                                    <p>Both masters serve reads and writes, coordinating with each other. If either master goes down, the other continues with both reads and writes. Increases write availability but adds complexity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <!-- ===== AVAILABILITY IN NUMBERS ===== -->
                <h2>Availability in Numbers</h2>

                <p>Availability is often quantified by uptime (or downtime) as a <strong>percentage of time</strong> the service is available. Availability is generally measured in <strong>number of 9s</strong> — a service with 99.99% availability is described as having <em>four 9s</em>.</p>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="three-nines-tab" data-tabgroup="nines">99.9% — Three 9s</button>
                        <button class="shadcn-tab-trigger" data-tab="four-nines-tab" data-tabgroup="nines">99.99% — Four 9s</button>
                    </div>

                    <div class="shadcn-tab-content active" id="three-nines-tab">
                        <div class="table-wrapper" style="overflow-x:auto;">
                            <table style="width:100%;border-collapse:collapse;">
                                <thead>
                                    <tr>
                                        <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Duration</th>
                                        <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Acceptable Downtime</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Downtime per year</td>
                                        <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><strong>8h 45min 57s</strong></td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Downtime per month</td>
                                        <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><strong>43m 49.7s</strong></td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Downtime per week</td>
                                        <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><strong>10m 4.8s</strong></td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0.75rem;">Downtime per day</td>
                                        <td style="padding:0.75rem;"><strong>1m 26.4s</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="shadcn-tab-content" id="four-nines-tab">
                        <div class="table-wrapper" style="overflow-x:auto;">
                            <table style="width:100%;border-collapse:collapse;">
                                <thead>
                                    <tr>
                                        <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Duration</th>
                                        <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Acceptable Downtime</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Downtime per year</td>
                                        <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><strong>52min 35.7s</strong></td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Downtime per month</td>
                                        <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><strong>4m 23s</strong></td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Downtime per week</td>
                                        <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><strong>1m 5s</strong></td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0.75rem;">Downtime per day</td>
                                        <td style="padding:0.75rem;"><strong>8.6s</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <!-- ===== IN SEQUENCE vs IN PARALLEL ===== -->
                <h2>Availability in Sequence vs in Parallel</h2>

                <p>If a service consists of multiple components prone to failure, the service's overall availability depends on whether the components are <strong>in sequence</strong> or <strong>in parallel</strong>.</p>

                <div class="shadcn-comparison-grid">
                    <div class="shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title">In Sequence <span class="shadcn-badge shadcn-badge-amber" style="margin-left:8px">Decreases</span></div>
                            <p class="shadcn-card-description">Overall availability decreases when components are in sequence.</p>
                        </div>
                        <div class="shadcn-card-content">
                            <div style="background:var(--muted);padding:1rem;border-radius:6px;font-family:'JetBrains Mono',monospace;font-size:0.9rem;margin-bottom:0.75rem;">
                                Availability(Total) = Avail(Foo) × Avail(Bar)
                            </div>
                            <p>If both <code>Foo</code> and <code>Bar</code> each had <strong>99.9%</strong> availability, their total availability in sequence would be <strong>99.8%</strong>.</p>
                        </div>
                    </div>
                    <div class="shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title">In Parallel <span class="shadcn-badge shadcn-badge-green" style="margin-left:8px">Increases</span></div>
                            <p class="shadcn-card-description">Overall availability increases when components are in parallel.</p>
                        </div>
                        <div class="shadcn-card-content">
                            <div style="background:var(--muted);padding:1rem;border-radius:6px;font-family:'JetBrains Mono',monospace;font-size:0.9rem;margin-bottom:0.75rem;">
                                Availability(Total) = 1 − (1 − Avail(Foo)) × (1 − Avail(Bar))
                            </div>
                            <p>If both <code>Foo</code> and <code>Bar</code> each had <strong>99.9%</strong> availability, their total availability in parallel would be <strong>99.9999%</strong>.</p>
                        </div>
                    </div>
                </div>

                <div class="callout callout-info" style="margin-top:1rem;">
                    <div class="callout-title">💡 Key Insight</div>
                    <p>Use <strong>redundancy</strong> (parallel components) to improve availability. Every serial dependency is a single point of failure that drags down your overall uptime.</p>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📄</span> <a href="https://availabilitydigest.com/public_articles/0201/predictions.pdf" target="_blank" rel="noopener">Availability digest</a></li>
                </ul>
            </div>
        `
    }

};
