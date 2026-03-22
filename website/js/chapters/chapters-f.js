/**
 * Part F: Practice Problems — Chapters 20–27
 * Design Pastebin, Design Twitter, Design Web Crawler,
 * Design Mint.com, Design Social Network, Design Key-Value Cache,
 * Design Sales Ranking, Scaling on AWS
 *
 * Registered into global CHAPTERS_F object.
 */

const CHAPTERS_F = {

    // ================================================================
    // Chapter 20 — Design Pastebin (or Bit.ly)
    // ================================================================
    'design-pastebin': {
        part: 'Part F',
        title: 'Design Pastebin',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 20 — Practice Problems</div>
                <h1>Design Pastebin (or Bit.ly)</h1>
                <p class="chapter-subtitle">Design a URL shortening service like Pastebin or Bit.ly — where users enter text or a URL and receive a randomly generated short link that redirects to the original content.</p>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/4edXG0T.png" class="zoomable" alt="Design Pastebin architecture diagram" style="max-width:720px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em>High-level architecture for a Pastebin / URL shortening service</em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Interview Tip
                    </div>
                    <div class="shadcn-alert-description"><strong>Design Bit.ly</strong> is a similar question, except Pastebin requires storing the paste contents instead of the original unshortened URL. Both fundamentally involve generating and storing a hash of the full URL.</div>
                </div>

                <h2>Use Cases &amp; Constraints</h2>

                <div class="table-wrapper" style="margin:1.5rem 0;">
                    <table>
                        <thead>
                            <tr><th>Use Case</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Create paste</strong></td><td>User enters a block of text and gets a randomly generated short link (with optional expiration)</td></tr>
                            <tr><td><strong>View paste</strong></td><td>User enters a paste's short URL and views the contents</td></tr>
                            <tr><td><strong>Analytics</strong></td><td>Service tracks monthly visit stats for pages</td></tr>
                            <tr><td><strong>Expiration</strong></td><td>Service deletes expired pastes; default is no expiration</td></tr>
                            <tr><td><strong>High availability</strong></td><td>Service remains available even during partial failures</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Back-of-the-Envelope Estimates</div>
                        <p class="shadcn-card-description">Key numbers to ground the design</p>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li>10 million users, 10 million paste writes/month, 100 million reads/month</li>
                            <li><strong>10:1 read-to-write ratio</strong> — read-heavy system</li>
                            <li>~1 KB content per paste → 12.7 GB new content per month</li>
                            <li>~4 writes/sec average, ~40 reads/sec average</li>
                        </ul>
                    </div>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Request Flow — Read & Write Paths
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["Client"] --> B["Web Server"]
    B --> C{"Write or Read?"}
    C -->|Write| D["Write API"]
    D --> E["Generate short URL"]
    E --> F["Store in SQL DB"]
    E --> G["Store content in Object Store"]
    C -->|Read| H["Read API"]
    H --> I["Check Cache"]
    I -->|Hit| J["Return content"]
    I -->|Miss| K["Query SQL DB"]
    K --> L["Fetch from Object Store"]
    L --> J
                    </div>
                </div>

                <h2>Key Design Decisions</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Hash Generation</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Generate a unique short URL using <strong>MD5</strong> hash → take the first 7 characters and <strong>Base62</strong> encode. Check for collisions in the database and regenerate if needed.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">SQL vs NoSQL</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Use a <strong>relational database</strong> as a large hash table mapping generated URLs to paste file paths. Alternatively, consider a <strong>NoSQL key-value store</strong> for simpler lookups.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Caching</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Cache frequently accessed URLs in a <strong>Memory Cache</strong> (Redis/Memcached) to handle the read-heavy workload efficiently and reduce database load.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">Object Store</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Store paste contents in a managed <strong>Object Store</strong> (e.g. Amazon S3) instead of managing a file server directly. The database maps short URLs to object store paths.</p>
                        </div>
                    </div>
                </div>

                <h2>Architecture Overview</h2>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Core Components</div>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li><strong>Client</strong> → <strong>Web Server</strong> (reverse proxy) → <strong>Read/Write API</strong></li>
                            <li><strong>Write API:</strong> generates unique URL, stores paste in Object Store, saves metadata in SQL Database</li>
                            <li><strong>Read API:</strong> looks up shortlink, checks Memory Cache first, falls back to SQL Database, fetches paste from Object Store</li>
                            <li><strong>Analytics Service:</strong> MapReduce jobs on stored logs to compute monthly stats</li>
                            <li><strong>Cleanup Service:</strong> periodically scans for and deletes expired pastes</li>
                        </ul>
                    </div>
                </div>

                <div class="shadcn-alert shadcn-alert-info" style="margin:1.5rem 0;">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Database Schema
                    </div>
                    <div class="shadcn-alert-description">The <code>pastes</code> table stores: <code>shortlink</code> (char 7, PK), <code>expiration_length_in_minutes</code> (int), <code>created_at</code> (datetime), <code>paste_path</code> (varchar 255). The shortlink column is used as the primary key for fast lookups.</div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-card" style="margin:1.5rem 0;border:2px solid var(--primary);">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">📖 Full Solution</div>
                        <p class="shadcn-card-description">Dive into the complete step-by-step solution with code samples, database schemas, and scaling discussion.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <p><a href="https://github.com/donnemartin/system-design-primer/tree/master/solutions/system_design/pastebin" target="_blank" rel="noopener"><strong>View the full Pastebin solution on GitHub →</strong></a></p>
                    </div>
                </div>
            </div>
        `
    },

    // ================================================================
    // Chapter 21 — Design Twitter Timeline and Search
    // ================================================================
    'design-twitter': {
        part: 'Part F',
        title: 'Design Twitter',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 21 — Practice Problems</div>
                <h1>Design Twitter Timeline and Search</h1>
                <p class="chapter-subtitle">Design the core infrastructure behind Twitter's home timeline, user timeline, and search functionality — handling hundreds of billions of reads per month and fan-out to millions of followers.</p>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/jrUBAF7.png" class="zoomable" alt="Design Twitter architecture diagram" style="max-width:720px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em>High-level architecture for Twitter timeline and search</em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Interview Tip
                    </div>
                    <div class="shadcn-alert-description"><strong>Design the Facebook feed</strong> and <strong>Design Facebook search</strong> are similar questions. The core challenges — fan-out, timeline assembly, and search indexing — are shared across social media feed systems.</div>
                </div>

                <h2>Use Cases &amp; Constraints</h2>

                <div class="table-wrapper" style="margin:1.5rem 0;">
                    <table>
                        <thead>
                            <tr><th>Use Case</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Post tweet</strong></td><td>User posts a tweet; service pushes to followers via push notifications and emails</td></tr>
                            <tr><td><strong>User timeline</strong></td><td>User views their own activity feed</td></tr>
                            <tr><td><strong>Home timeline</strong></td><td>User views activity from people they follow</td></tr>
                            <tr><td><strong>Search</strong></td><td>User searches keywords and sees matching tweets</td></tr>
                            <tr><td><strong>High availability</strong></td><td>Service remains available even during partial failures</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Back-of-the-Envelope Estimates</div>
                        <p class="shadcn-card-description">Key numbers to ground the design</p>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li>100 million active users, 500 million tweets/day</li>
                            <li>Each tweet fans out to ~10 followers on average → 5 billion deliveries/day</li>
                            <li>250 billion read requests/month, 10 billion searches/month</li>
                            <li>~10 KB per tweet (including media) → 150 TB new content/month</li>
                        </ul>
                    </div>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Tweet Fan-Out Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["User posts tweet"] --> B["Write API"]
    B --> C["Store in SQL DB"]
    B --> D["Fan-Out Service"]
    D --> E{"User has < 10K followers?"}
    E -->|Yes| F["Fan-out on write"]
    F --> G["Push to follower timelines in Cache"]
    E -->|No| H["Fan-out on read"]
    H --> I["Merge at read time"]
    J["User views timeline"] --> K["Timeline Service"]
    K --> L["Read from Cache"]
    L --> M["Merge with celebrity tweets"]
    M --> N["Return timeline"]
                    </div>
                </div>

                <h2>Key Design Decisions</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Fan-Out</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p><strong>Fan-out on write:</strong> pre-compute timelines when a tweet is posted, pushing to each follower's cached timeline. Fast reads but expensive writes for popular users.</p>
                            <p><strong>Fan-out on read:</strong> assemble timeline at read time by querying followees' tweets. Slower reads but cheap writes — useful for celebrity accounts with millions of followers.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Hybrid Approach</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Use <strong>fan-out on write</strong> for most users and <strong>fan-out on read</strong> for celebrity users (millions of followers). This hybrid approach balances write cost with read performance.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Search Indexing</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Build a <strong>reverse index</strong> mapping search terms to tweet IDs. Tweets are tokenized and indexed on write. Search queries are parsed, normalized, and matched against the index.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">Timeline Cache</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Store pre-computed timelines in a <strong>Memory Cache</strong> (Redis). Each user's home timeline is a list of tweet IDs. The cache is updated on fan-out and read from on timeline views.</p>
                        </div>
                    </div>
                </div>

                <h2>Architecture Overview</h2>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Core Components</div>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li><strong>Client</strong> → <strong>Web Server</strong> (reverse proxy) → <strong>Read/Write API</strong></li>
                            <li><strong>Tweet Write API:</strong> stores tweet in SQL Database, triggers Fan-Out Service to push to follower timelines (Memory Cache)</li>
                            <li><strong>Fan-Out Service:</strong> queries User Graph Service for followers, writes tweet to each follower's timeline in Memory Cache, enqueues push notifications</li>
                            <li><strong>Timeline Read API:</strong> fetches pre-computed timeline from Memory Cache, hydrates tweet data from Tweet Info Service</li>
                            <li><strong>Search API:</strong> parses query, looks up Reverse Index, fetches matching tweet details from Document Store</li>
                        </ul>
                    </div>
                </div>

                <div class="shadcn-alert shadcn-alert-info" style="margin:1.5rem 0;">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Celebrity Problem
                    </div>
                    <div class="shadcn-alert-description">Users with millions of followers (celebrities) make fan-out on write extremely expensive. The hybrid approach handles these users separately — their tweets are fetched on read and merged into the timeline at query time.</div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-card" style="margin:1.5rem 0;border:2px solid var(--primary);">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">📖 Full Solution</div>
                        <p class="shadcn-card-description">Dive into the complete step-by-step solution with code samples, database schemas, and scaling discussion.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <p><a href="https://github.com/donnemartin/system-design-primer/tree/master/solutions/system_design/twitter" target="_blank" rel="noopener"><strong>View the full Twitter solution on GitHub →</strong></a></p>
                    </div>
                </div>
            </div>
        `
    },

    // ================================================================
    // Chapter 22 — Design Web Crawler
    // ================================================================
    'design-web-crawler': {
        part: 'Part F',
        title: 'Design Web Crawler',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 22 — Practice Problems</div>
                <h1>Design a Web Crawler</h1>
                <p class="chapter-subtitle">Design a scalable web crawler that indexes billions of pages — generating reverse indexes, page titles, snippets, and supporting fresh search results across the web.</p>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/bWxPtQA.png" class="zoomable" alt="Design Web Crawler architecture diagram" style="max-width:720px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em>High-level architecture for a scalable web crawler</em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Interview Tip
                    </div>
                    <div class="shadcn-alert-description">This exercise uses more traditional systems — avoid existing solutions like <strong>Solr</strong> or <strong>Nutch</strong>. The goal is to demonstrate your understanding of crawling, indexing, and distributed systems fundamentals.</div>
                </div>

                <h2>Use Cases &amp; Constraints</h2>

                <div class="table-wrapper" style="margin:1.5rem 0;">
                    <table>
                        <thead>
                            <tr><th>Use Case</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Crawl URLs</strong></td><td>Service crawls a list of URLs, generating reverse index of words to pages</td></tr>
                            <tr><td><strong>Generate metadata</strong></td><td>Service generates titles and snippets for crawled pages (static, not query-dependent)</td></tr>
                            <tr><td><strong>Search</strong></td><td>User inputs search term and sees relevant pages with titles and snippets</td></tr>
                            <tr><td><strong>High availability</strong></td><td>Service remains available even during partial failures</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Back-of-the-Envelope Estimates</div>
                        <p class="shadcn-card-description">Key numbers to ground the design</p>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li>1 billion links to crawl, refreshed ~weekly → 4 billion links crawled/month</li>
                            <li>Average stored size per page: 500 KB → 2 PB stored content/month</li>
                            <li>~1,600 write requests/sec, ~40,000 search requests/sec</li>
                            <li>100 billion searches per month</li>
                        </ul>
                    </div>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Crawl Pipeline Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["URL Frontier"] --> B["Dequeue URL"]
    B --> C["DNS Resolver"]
    C --> D["Crawler Worker"]
    D --> E["Download Page"]
    E --> F["Duplicate Check"]
    F -->|New| G["Parse Links"]
    F -->|Duplicate| H["Discard"]
    G --> I["Add to URL Frontier"]
    G --> J["Reverse Index Service"]
    J --> K["Document Store"]
                    </div>
                </div>

                <h2>Key Design Decisions</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Crawl Strategy</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Use <strong>BFS</strong> with a prioritized URL frontier. Pages are ranked by popularity and freshness. A <strong>sorted set</strong> (e.g. Redis) maintains the ranked crawl queue.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Duplicate Detection</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Compute a <strong>page signature</strong> for each crawled page. Before processing, check against <code>crawled_links</code> in the database. Similar signatures reduce the link's priority to avoid infinite loops.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Distributed Crawling</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Distribute crawling across multiple workers. Each worker pulls top-ranked URLs from the frontier, crawls them, and enqueues jobs for the <strong>Reverse Index Service</strong> and <strong>Document Service</strong>.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">Politeness</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Respect <code>robots.txt</code> rules and enforce rate limits per domain. Add delays between requests to the same host to avoid overwhelming target servers.</p>
                        </div>
                    </div>
                </div>

                <h2>Architecture Overview</h2>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Core Components</div>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li><strong>URL Frontier:</strong> prioritized queue of URLs to crawl, stored in Redis sorted sets</li>
                            <li><strong>Crawler Service:</strong> pulls top-ranked URLs, fetches pages, generates page signatures, checks for duplicates</li>
                            <li><strong>Reverse Index Service:</strong> builds inverted index mapping words → pages containing those words</li>
                            <li><strong>Document Service:</strong> generates and stores static titles and snippets for each page</li>
                            <li><strong>NoSQL Database:</strong> stores <code>links_to_crawl</code> and <code>crawled_links</code> with page signatures</li>
                            <li><strong>Search API:</strong> queries reverse index, ranks results, and returns pages with titles and snippets</li>
                        </ul>
                    </div>
                </div>

                <div class="shadcn-alert shadcn-alert-info" style="margin:1.5rem 0;">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Avoiding Infinite Loops
                    </div>
                    <div class="shadcn-alert-description">The web is a graph that may contain cycles. The crawler prevents infinite loops by computing page signatures and checking against previously crawled pages. If a similar page signature already exists, the link's priority is reduced rather than re-crawling it.</div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-card" style="margin:1.5rem 0;border:2px solid var(--primary);">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">📖 Full Solution</div>
                        <p class="shadcn-card-description">Dive into the complete step-by-step solution with code samples, database schemas, and scaling discussion.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <p><a href="https://github.com/donnemartin/system-design-primer/tree/master/solutions/system_design/web_crawler" target="_blank" rel="noopener"><strong>View the full Web Crawler solution on GitHub →</strong></a></p>
                    </div>
                </div>
            </div>
        `
    },

    // ================================================================
    // Chapter 23 — Design Mint.com
    // ================================================================
    'design-mint': {
        part: 'Part F',
        title: 'Design Mint.com',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 23 — Practice Problems</div>
                <h1>Design Mint.com</h1>
                <p class="chapter-subtitle">Design a personal finance aggregation service like Mint.com — connecting bank accounts, extracting and categorizing transactions, recommending budgets, and analyzing spending patterns.</p>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/V5q57vU.png" class="zoomable" alt="Design Mint.com architecture diagram" style="max-width:720px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em>High-level architecture for Mint.com personal finance service</em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Interview Tip
                    </div>
                    <div class="shadcn-alert-description">This problem is <strong>write-heavy</strong> (10:1 write-to-read ratio). Users make transactions daily but few visit the site daily. Focus on efficient transaction ingestion and categorization at scale.</div>
                </div>

                <h2>Use Cases &amp; Constraints</h2>

                <div class="table-wrapper" style="margin:1.5rem 0;">
                    <table>
                        <thead>
                            <tr><th>Use Case</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Connect account</strong></td><td>User connects to a financial account</td></tr>
                            <tr><td><strong>Extract transactions</strong></td><td>Service extracts transactions from connected accounts, updates daily</td></tr>
                            <tr><td><strong>Categorize</strong></td><td>Service categorizes transactions (with manual override); no automatic re-categorization</td></tr>
                            <tr><td><strong>Spending analysis</strong></td><td>Service analyzes monthly spending by category</td></tr>
                            <tr><td><strong>Budget recommendations</strong></td><td>Service recommends a budget; users can manually set budgets; notifications on approach/exceed</td></tr>
                            <tr><td><strong>High availability</strong></td><td>Service remains available even during partial failures</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Back-of-the-Envelope Estimates</div>
                        <p class="shadcn-card-description">Key numbers to ground the design</p>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li>10 million users, 30 million financial accounts, 50,000 sellers</li>
                            <li>5 billion transactions/month → ~2,000 transactions/sec</li>
                            <li>500 million read requests/month → ~200 reads/sec</li>
                            <li>~50 bytes per transaction → 250 GB new content/month</li>
                        </ul>
                    </div>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Data Pipeline Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["Bank APIs"] --> B["Transaction Extraction Service"]
    B --> C["Raw Transactions Queue"]
    C --> D["Category Service"]
    D --> E["MapReduce Categorization"]
    E --> F["Budget Service"]
    F --> G{"Over budget?"}
    G -->|Yes| H["Notification Service"]
    G -->|No| I["Update Dashboard"]
    H --> J["Email / SMS Alert"]
    I --> K["Analytics Store"]
                    </div>
                </div>

                <h2>Key Design Decisions</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Transaction Categorization</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Use <strong>MapReduce</strong> to categorize transactions at scale. Map sellers to categories using a lookup table. Users can manually override categories, which are stored per-user.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Data Pulling</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Pull transaction data from financial institutions daily using their APIs. Only update accounts for users <strong>active in the past 30 days</strong> to avoid unnecessary load.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Budget Analysis</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Aggregate categorized spending monthly. Compare against user-defined or system-recommended budgets. Send <strong>notifications</strong> when spending approaches or exceeds budget thresholds.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">Security</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Financial data requires <strong>encryption at rest and in transit</strong>. Store bank credentials securely (vaulted). Use SSL/TLS for all API communication. Comply with financial data regulations.</p>
                        </div>
                    </div>
                </div>

                <h2>Architecture Overview</h2>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Core Components</div>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li><strong>Client</strong> → <strong>Web Server</strong> (reverse proxy) → <strong>Accounts API / Budget API</strong></li>
                            <li><strong>Accounts API:</strong> manages user accounts and bank connections in SQL Database</li>
                            <li><strong>Transaction Extraction Service:</strong> pulls transactions daily from financial APIs, stores raw data</li>
                            <li><strong>Category Service:</strong> MapReduce jobs categorize transactions using seller → category mapping</li>
                            <li><strong>Budget Service:</strong> analyzes monthly categorized spend and compares against budgets</li>
                            <li><strong>Notification Service:</strong> sends alerts when budgets are approached or exceeded</li>
                        </ul>
                    </div>
                </div>

                <div class="shadcn-alert shadcn-alert-info" style="margin:1.5rem 0;">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Database Schema
                    </div>
                    <div class="shadcn-alert-description">Key tables: <code>accounts</code> (user_id, account_url, account_login, account_password_hash, created_at, updated_at), <code>transactions</code> (id, created_at, seller, amount, user_id, category_id), and <code>monthly_spending</code> (user_id, month, category_id, amount).</div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-card" style="margin:1.5rem 0;border:2px solid var(--primary);">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">📖 Full Solution</div>
                        <p class="shadcn-card-description">Dive into the complete step-by-step solution with code samples, MapReduce implementation, and scaling discussion.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <p><a href="https://github.com/donnemartin/system-design-primer/tree/master/solutions/system_design/mint" target="_blank" rel="noopener"><strong>View the full Mint.com solution on GitHub →</strong></a></p>
                    </div>
                </div>
            </div>
        `
    },

    // ================================================================
    // Chapter 24 — Design Social Network Data Structures
    // ================================================================
    'design-social-graph': {
        part: 'Part F',
        title: 'Design Social Network',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 24 — Practice Problems</div>
                <h1>Design Social Network Data Structures</h1>
                <p class="chapter-subtitle">Design the data structures and algorithms for a social network — enabling users to search for someone and see the shortest path of connections to that person (like LinkedIn's "degrees of connection").</p>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/cdCv5g7.png" class="zoomable" alt="Design Social Network architecture diagram" style="max-width:720px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em>High-level architecture for social graph shortest path</em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Interview Tip
                    </div>
                    <div class="shadcn-alert-description">This exercise uses more traditional systems — avoid graph-specific solutions like <strong>GraphQL</strong> or graph databases like <strong>Neo4j</strong>. Focus on demonstrating BFS, adjacency lists, and distributed system fundamentals.</div>
                </div>

                <h2>Use Cases &amp; Constraints</h2>

                <div class="table-wrapper" style="margin:1.5rem 0;">
                    <table>
                        <thead>
                            <tr><th>Use Case</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Shortest path</strong></td><td>User searches for someone and sees the shortest path of connections to that person</td></tr>
                            <tr><td><strong>High availability</strong></td><td>Service remains available even during partial failures</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Back-of-the-Envelope Estimates</div>
                        <p class="shadcn-card-description">Key numbers to ground the design</p>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li>100 million users, 50 friends per user on average</li>
                            <li>5 billion friend relationships total</li>
                            <li>1 billion friend searches/month → ~400 searches/sec</li>
                            <li>Graph data won't fit on a single machine — must be distributed</li>
                        </ul>
                    </div>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Bidirectional BFS Search Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["Search: User A to User B"] --> B["BFS Service"]
    B --> C["Start BFS from User A"]
    B --> D["Start BFS from User B"]
    C --> E["Person Server Lookup"]
    D --> E
    E --> F["Query User Graph Shard"]
    F --> G{"Paths intersect?"}
    G -->|Yes| H["Return shortest path"]
    G -->|No| I["Expand next BFS level"]
    I --> E
                    </div>
                </div>

                <h2>Key Design Decisions</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">BFS Shortest Path</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Use <strong>Breadth-First Search (BFS)</strong> to find the shortest unweighted path between two users. BFS explores all nodes at distance <em>k</em> before moving to distance <em>k+1</em>, guaranteeing the shortest path.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Bidirectional BFS</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Optimize with <strong>bidirectional BFS</strong> — search from both the source and destination simultaneously. When the two frontiers meet, we've found the shortest path. This dramatically reduces the search space.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Sharding</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Shard users across multiple machines using a <strong>Person Server</strong> lookup. Each machine stores a subset of users and their adjacency lists. Lookups route to the correct shard via a lookup service.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">Caching</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Cache frequently accessed user adjacency lists in <strong>Memory Cache</strong>. Popular users (many connections) are accessed often and benefit greatly from caching to reduce database lookups.</p>
                        </div>
                    </div>
                </div>

                <h2>Architecture Overview</h2>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Core Components</div>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li><strong>Client</strong> → <strong>Web Server</strong> (reverse proxy) → <strong>Search API</strong></li>
                            <li><strong>User Graph Service:</strong> stores user friend relationships as adjacency lists, sharded across machines</li>
                            <li><strong>Person Server:</strong> lookup service mapping user IDs to the machine storing their data</li>
                            <li><strong>BFS Service:</strong> performs bidirectional BFS across sharded graph data, communicating with multiple Person Servers</li>
                            <li><strong>Memory Cache:</strong> caches hot adjacency lists (Redis/Memcached) to speed up BFS traversal</li>
                        </ul>
                    </div>
                </div>

                <div class="shadcn-alert shadcn-alert-info" style="margin:1.5rem 0;">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Graph Edges
                    </div>
                    <div class="shadcn-alert-description">Graph edges are <strong>unweighted</strong> — each friend connection has equal weight. This makes BFS the optimal algorithm since it naturally finds shortest paths in unweighted graphs. With 50 friends per user average and 100M users, there are 5 billion edges to store and traverse.</div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-card" style="margin:1.5rem 0;border:2px solid var(--primary);">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">📖 Full Solution</div>
                        <p class="shadcn-card-description">Dive into the complete step-by-step solution with BFS code, sharding strategies, and scaling discussion.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <p><a href="https://github.com/donnemartin/system-design-primer/tree/master/solutions/system_design/social_graph" target="_blank" rel="noopener"><strong>View the full Social Network solution on GitHub →</strong></a></p>
                    </div>
                </div>
            </div>
        `
    },

    // ================================================================
    // Chapter 25 — Design Key-Value Store for Search Engine
    // ================================================================
    'design-kv-store': {
        part: 'Part F',
        title: 'Design Key-Value Cache',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 25 — Practice Problems</div>
                <h1>Design a Key-Value Cache for a Search Engine</h1>
                <p class="chapter-subtitle">Design a key-value cache that stores the results of the most recent web server queries — enabling fast cache hits, LRU eviction, and distributed operation across multiple machines.</p>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/4j99mhe.png" class="zoomable" alt="Design Key-Value Cache architecture diagram" style="max-width:720px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em>High-level architecture for a key-value search cache</em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Interview Tip
                    </div>
                    <div class="shadcn-alert-description">This problem focuses on the <strong>cache layer</strong> itself — how to structure an efficient key-value store with LRU eviction. Consider hash tables, linked lists, and memory management as core building blocks.</div>
                </div>

                <h2>Use Cases &amp; Constraints</h2>

                <div class="table-wrapper" style="margin:1.5rem 0;">
                    <table>
                        <thead>
                            <tr><th>Use Case</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Cache hit</strong></td><td>User sends a search request; service returns cached results for matching queries</td></tr>
                            <tr><td><strong>Cache miss</strong></td><td>User sends a search request with no cached result; service queries backend and caches the result</td></tr>
                            <tr><td><strong>High availability</strong></td><td>Service remains available with eventual consistency</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Back-of-the-Envelope Estimates</div>
                        <p class="shadcn-card-description">Key numbers to ground the design</p>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li>10 million users, 10 billion queries/month → ~4,000 requests/sec</li>
                            <li>Cache entry: query (50 bytes) + title (20 bytes) + snippet (200 bytes) = ~270 bytes</li>
                            <li>2.7 TB of cache data/month if all queries were unique</li>
                            <li>Popular queries should almost always be in cache — need smart expiration/refresh</li>
                        </ul>
                    </div>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Cache Hit / Miss Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["Query API"] --> B["Memory Cache"]
    B --> C{"Cache Hit?"}
    C -->|Yes| D["Return cached result"]
    C -->|Miss| E["Reverse Index Service"]
    E --> F["Document Service"]
    F --> G["Return result"]
    G --> H["Store in Cache (LRU)"]
    H --> D
                    </div>
                </div>

                <h2>Key Design Decisions</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">LRU Eviction</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Use a <strong>doubly-linked list</strong> for LRU ordering: new/accessed items move to the head, evicted items are removed from the tail. Combined with a <strong>hash table</strong> for O(1) lookups to each node.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Hash + Linked List</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>The hash table maps query strings to linked list nodes. On <strong>cache hit</strong>, move the node to head. On <strong>cache miss</strong>, add to head and evict from tail if capacity reached. Both operations are O(1).</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Distribution</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Distribute cache across multiple machines using <strong>consistent hashing</strong>. Each machine handles a subset of the key space. This allows horizontal scaling and graceful handling of node additions/removals.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">Memory Management</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Limited memory in cache requires careful management. Track memory usage and evict LRU entries when approaching limits. Monitor <strong>cache hit ratio</strong> to tune capacity and eviction policies.</p>
                        </div>
                    </div>
                </div>

                <h2>Architecture Overview</h2>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Core Components</div>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li><strong>Client</strong> → <strong>Web Server</strong> (reverse proxy) → <strong>Query API</strong></li>
                            <li><strong>Query API:</strong> parses query (removes markup, fixes typos, normalizes), checks Memory Cache</li>
                            <li><strong>Memory Cache:</strong> distributed hash table + LRU linked list across multiple machines</li>
                            <li><strong>Reverse Index Service:</strong> on cache miss, finds documents matching the query terms</li>
                            <li><strong>Document Service:</strong> returns titles and snippets for matching documents</li>
                            <li>Results are cached in Memory Cache before returning to client</li>
                        </ul>
                    </div>
                </div>

                <div class="shadcn-alert shadcn-alert-info" style="margin:1.5rem 0;">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Cache Invalidation
                    </div>
                    <div class="shadcn-alert-description">Cache entries become stale as underlying data changes. Strategies include <strong>TTL-based expiration</strong> (entries expire after a set time), <strong>write-through</strong> (update cache on write), or <strong>event-driven invalidation</strong> (invalidate when source data changes). Choose based on consistency requirements.</div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-card" style="margin:1.5rem 0;border:2px solid var(--primary);">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">📖 Full Solution</div>
                        <p class="shadcn-card-description">Dive into the complete step-by-step solution with LRU cache code, query processing, and scaling discussion.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <p><a href="https://github.com/donnemartin/system-design-primer/tree/master/solutions/system_design/query_cache" target="_blank" rel="noopener"><strong>View the full Key-Value Cache solution on GitHub →</strong></a></p>
                    </div>
                </div>
            </div>
        `
    },

    // ================================================================
    // Chapter 26 — Design Amazon's Sales Ranking
    // ================================================================
    'design-sales-rank': {
        part: 'Part F',
        title: 'Design Sales Ranking',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 26 — Practice Problems</div>
                <h1>Design Amazon's Sales Ranking by Category</h1>
                <p class="chapter-subtitle">Design the sales ranking feature for an e-commerce platform like Amazon — computing the most popular products by category from billions of monthly transactions and serving rankings to users at scale.</p>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/MzExP06.png" class="zoomable" alt="Design Sales Ranking architecture diagram" style="max-width:720px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em>High-level architecture for sales ranking by category</em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Interview Tip
                    </div>
                    <div class="shadcn-alert-description">Focus on the <strong>ranking computation</strong> — not the general e-commerce platform. The key challenge is efficiently processing billions of transactions to produce per-category rankings updated hourly.</div>
                </div>

                <h2>Use Cases &amp; Constraints</h2>

                <div class="table-wrapper" style="margin:1.5rem 0;">
                    <table>
                        <thead>
                            <tr><th>Use Case</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Compute rankings</strong></td><td>Service calculates the past week's most popular products by category</td></tr>
                            <tr><td><strong>View rankings</strong></td><td>User views the most popular products by category</td></tr>
                            <tr><td><strong>High availability</strong></td><td>Service remains available even during partial failures</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Back-of-the-Envelope Estimates</div>
                        <p class="shadcn-card-description">Key numbers to ground the design</p>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li>10 million products across 1,000 categories</li>
                            <li>1 billion transactions/month → ~400 writes/sec</li>
                            <li>100 billion read requests/month → ~40,000 reads/sec</li>
                            <li><strong>100:1 read-to-write ratio</strong> — extremely read-heavy</li>
                            <li>~40 bytes per transaction → 40 GB new content/month</li>
                        </ul>
                    </div>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Sales Ranking Pipeline
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["Sales Logs"] --> B["Map Phase"]
    B --> C["Extract category + sales count"]
    C --> D["Reduce Phase"]
    D --> E["Aggregate per category"]
    E --> F["Sort by rank"]
    F --> G["Store in SQL DB"]
    G --> H["Cache Layer"]
    H --> I["Sales Rank API"]
                    </div>
                </div>

                <h2>Key Design Decisions</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">MapReduce</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Use a multi-step <strong>MapReduce</strong> pipeline: (1) Map sales logs to extract <code>(category, product_id, quantity)</code>, (2) Reduce to aggregate sales per product per category, (3) Sort by quantity within each category to produce rankings.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Sales Log Processing</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Store raw sales logs in a managed <strong>Object Store</strong> (e.g. Amazon S3). MapReduce jobs process these logs periodically. Items can appear in <strong>multiple categories</strong> but cannot change categories.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Periodic Updates</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Rankings are updated <strong>hourly</strong> (more frequently for popular products). Results are written to a <code>sales_rank</code> table in the SQL Database. The past week's data is used for ranking computation.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">Caching Rankings</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Cache computed rankings in a <strong>Memory Cache</strong> (Redis/Memcached). With a 100:1 read-to-write ratio, caching is critical. Rankings change infrequently (hourly) so cache invalidation is straightforward.</p>
                        </div>
                    </div>
                </div>

                <h2>Architecture Overview</h2>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Core Components</div>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li><strong>Client</strong> → <strong>Web Server</strong> (reverse proxy) → <strong>Sales Rank API</strong></li>
                            <li><strong>Sales API:</strong> ingests purchase events, writes raw sales logs to Object Store</li>
                            <li><strong>Sales Rank Service (MapReduce):</strong> processes sales logs → aggregates per category → sorts to produce rankings → writes to SQL Database</li>
                            <li><strong>SQL Database:</strong> stores <code>sales_rank</code> table with <code>(product_id, category_id, rank, total_sold, time_period)</code></li>
                            <li><strong>Memory Cache:</strong> caches rankings per category for fast reads at 40K req/sec</li>
                            <li><strong>Sales Rank API:</strong> checks cache first, falls back to database, returns ranked products</li>
                        </ul>
                    </div>
                </div>

                <div class="shadcn-alert shadcn-alert-info" style="margin:1.5rem 0;">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Multi-Category Items
                    </div>
                    <div class="shadcn-alert-description">Items can appear in <strong>multiple categories</strong> simultaneously. The MapReduce pipeline emits a separate <code>(category, product_id, quantity)</code> tuple for each category an item belongs to, so an item can rank differently across its categories.</div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-card" style="margin:1.5rem 0;border:2px solid var(--primary);">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">📖 Full Solution</div>
                        <p class="shadcn-card-description">Dive into the complete step-by-step solution with MapReduce pipeline, database schemas, and scaling discussion.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <p><a href="https://github.com/donnemartin/system-design-primer/tree/master/solutions/system_design/sales_rank" target="_blank" rel="noopener"><strong>View the full Sales Ranking solution on GitHub →</strong></a></p>
                    </div>
                </div>
            </div>
        `
    },

    // ================================================================
    // Chapter 27 — Design Scaling to Millions on AWS
    // ================================================================
    'design-scaling-aws': {
        part: 'Part F',
        title: 'Scaling on AWS',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 27 — Practice Problems</div>
                <h1>Design a System that Scales to Millions of Users on AWS</h1>
                <p class="chapter-subtitle">Design an iterative approach to scaling a system from a single user to millions on AWS — progressively adding components like load balancers, CDNs, caching, read replicas, and auto scaling as bottlenecks appear.</p>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/jj3A5N8.png" class="zoomable" alt="Design Scaling on AWS architecture diagram" style="max-width:720px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em>High-level architecture for scaling to millions of users on AWS</em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Interview Tip
                    </div>
                    <div class="shadcn-alert-description">AWS-specific knowledge is not required unless applying for an AWS-focused role. The <strong>general scaling principles</strong> discussed here apply broadly across cloud providers and on-premise infrastructure. Focus on the iterative approach: benchmark → profile → address bottleneck → repeat.</div>
                </div>

                <h2>Use Cases &amp; Constraints</h2>

                <div class="table-wrapper" style="margin:1.5rem 0;">
                    <table>
                        <thead>
                            <tr><th>Use Case</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Read/write requests</strong></td><td>User makes a read or write request; service processes and returns results</td></tr>
                            <tr><td><strong>Scale iteratively</strong></td><td>Service evolves from serving a small number of users to millions</td></tr>
                            <tr><td><strong>General patterns</strong></td><td>Discuss general scaling patterns as the architecture evolves</td></tr>
                            <tr><td><strong>High availability</strong></td><td>Service remains available even during partial failures</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Back-of-the-Envelope Estimates</div>
                        <p class="shadcn-card-description">Key numbers to ground the design at full scale</p>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li>10 million users at full scale</li>
                            <li>1 billion writes/month → ~400 writes/sec</li>
                            <li>100 billion reads/month → ~40,000 reads/sec</li>
                            <li><strong>100:1 read-to-write ratio</strong></li>
                            <li>1 KB per write → 1 TB new content/month</li>
                        </ul>
                    </div>
                </div>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Progressive Scaling Architecture
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["Single EC2 Instance"] --> B["Separate DB: RDS"]
    B --> C["Add ElastiCache"]
    C --> D["Multiple EC2 behind ELB"]
    D --> E["Auto Scaling Group"]
    E --> F["Multi-AZ Deployment"]
    F --> G["Add CloudFront CDN"]
    G --> H["Route 53 DNS"]
                    </div>
                </div>

                <h2>Key Design Decisions — Iterative Scaling</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Start Simple</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Begin with a <strong>single EC2 instance</strong> running the web server and MySQL database. Use <strong>vertical scaling</strong> first — simply choose a bigger box. Monitor CPU, memory, IO, and network to identify bottlenecks.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Separate Components</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Move the database to a <strong>separate instance</strong> (Amazon RDS). Add a <strong>MySQL read replica</strong> to handle read-heavy traffic. Separate the web server from the database to scale independently.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">Add Caching &amp; CDN</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Add <strong>ElastiCache</strong> (Memcached/Redis) to cache database queries and session data. Use a <strong>CDN</strong> (CloudFront) to serve static content globally. These dramatically reduce database load and latency.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">Horizontal Scaling</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Add an <strong>Elastic Load Balancer (ELB)</strong> distributing traffic across multiple web servers. Enable <strong>Auto Scaling</strong> to add/remove instances based on demand. Deploy across <strong>multiple Availability Zones</strong> for fault tolerance.</p>
                        </div>
                    </div>
                </div>

                <h2>Architecture Evolution</h2>

                <div class="shadcn-card" style="margin:1.5rem 0;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Progressive Scaling Steps</div>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;">
                            <li><strong>1 user:</strong> Single EC2 instance (web server + MySQL) — vertical scaling</li>
                            <li><strong>Users+:</strong> Separate MySQL to Amazon RDS, add read replica</li>
                            <li><strong>Users++:</strong> Add ElastiCache for read-heavy queries, CDN for static assets</li>
                            <li><strong>Users+++:</strong> ELB → multiple web server instances with Auto Scaling</li>
                            <li><strong>Users++++:</strong> Multiple Availability Zones, MySQL Multi-AZ deployment</li>
                            <li><strong>Millions:</strong> Additional read replicas, sharding for writes, microservices decomposition, dedicated analytics infrastructure</li>
                        </ul>
                    </div>
                </div>

                <div class="shadcn-alert shadcn-alert-info" style="margin:1.5rem 0;">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Iterative Approach
                    </div>
                    <div class="shadcn-alert-description">The key pattern is: <strong>(1) Benchmark/Load Test</strong> → <strong>(2) Profile for bottlenecks</strong> → <strong>(3) Address bottleneck while evaluating trade-offs</strong> → <strong>(4) Repeat</strong>. Don't over-engineer upfront — add complexity only when metrics show it's needed.</div>
                </div>

                <h2>AWS Components Summary</h2>

                <div class="table-wrapper" style="margin:1.5rem 0;">
                    <table>
                        <thead>
                            <tr><th>Component</th><th>AWS Service</th><th>Role</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Compute</td><td>EC2 + Auto Scaling</td><td>Web/app servers that scale horizontally</td></tr>
                            <tr><td>Database</td><td>Amazon RDS (MySQL)</td><td>Managed relational database with read replicas</td></tr>
                            <tr><td>Cache</td><td>ElastiCache</td><td>In-memory caching for hot queries and sessions</td></tr>
                            <tr><td>CDN</td><td>CloudFront</td><td>Global content delivery for static assets</td></tr>
                            <tr><td>Load Balancer</td><td>ELB</td><td>Distributes traffic across multiple instances</td></tr>
                            <tr><td>DNS</td><td>Route 53</td><td>DNS with health checks and failover routing</td></tr>
                            <tr><td>Storage</td><td>S3</td><td>Object storage for static files and logs</td></tr>
                        </tbody>
                    </table>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-card" style="margin:1.5rem 0;border:2px solid var(--primary);">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">📖 Full Solution</div>
                        <p class="shadcn-card-description">Dive into the complete step-by-step solution with detailed AWS architecture evolution and scaling discussion.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <p><a href="https://github.com/donnemartin/system-design-primer/tree/master/solutions/system_design/scaling_aws" target="_blank" rel="noopener"><strong>View the full Scaling on AWS solution on GitHub →</strong></a></p>
                    </div>
                </div>
            </div>
        `
    }

};
