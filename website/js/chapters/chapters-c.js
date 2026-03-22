/**
 * Part C: Infrastructure — Chapters 10–13
 * Domain Name System, Content Delivery Network,
 * Load Balancer, Reverse Proxy
 *
 * Registered into global CHAPTERS_C object.
 */

const CHAPTERS_C = {

    // ================================================================
    // Chapter 10 — Domain Name System
    // ================================================================
    'dns': {
        part: 'Part C',
        title: 'Domain Name System',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 10 — Infrastructure</div>
                <h1>Domain Name System</h1>
                <p class="chapter-subtitle">How the internet's phonebook translates human-readable domain names into machine-routable IP addresses — and the trade-offs involved.</p>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">🔄</span> DNS Resolution Flow
                        <span class="diagram-type-badge">Sequence</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
sequenceDiagram
    participant Browser
    participant Local as Local DNS Cache
    participant Root as Root Server
    participant TLD as TLD Server
    participant Auth as Authoritative Server
    Browser->>Local: Resolve example.com
    alt Cache Hit
        Local-->>Browser: Return cached IP
    else Cache Miss
        Local->>Root: Query root
        Root-->>Local: Refer to .com TLD
        Local->>TLD: Query .com
        TLD-->>Local: Refer to authoritative
        Local->>Auth: Query example.com
        Auth-->>Local: Return IP address
        Local-->>Browser: Return IP
    end
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/IOyLj4i.jpg" class="zoomable" alt="DNS security presentation" style="max-width:620px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="http://www.slideshare.net/srikrupa5/dns-security-presentation-issa" target="_blank" rel="noopener">Source: DNS security presentation</a></em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Core Concept
                    </div>
                    <div class="shadcn-alert-description">A <strong>Domain Name System (DNS)</strong> translates a domain name such as <code>www.example.com</code> to an IP address. DNS is hierarchical, with a few authoritative servers at the top level.</div>
                </div>

                <h2>How DNS Works</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Hierarchical Resolution &amp; Caching</div>
                    </div>
                    <div class="shadcn-card-content">
                        <p>DNS is <strong>hierarchical</strong>, with a few authoritative servers at the top level. Your router or ISP provides information about which DNS server(s) to contact when doing a lookup.</p>
                        <p>Lower level DNS servers <strong>cache mappings</strong>, which could become stale due to DNS propagation delays. DNS results can also be cached by your <strong>browser or OS</strong> for a certain period of time, determined by the <strong>time to live (TTL)</strong>.</p>
                    </div>
                </div>

                <h2>DNS Record Types</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">NS</span> Name Server</div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Specifies the DNS servers for your domain/subdomain.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">MX</span> Mail Exchange</div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Specifies the mail servers for accepting messages.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">A</span> Address Record</div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Points a name to an IP address.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">CNAME</span> Canonical</div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Points a name to another name or <code>CNAME</code> (e.g. <code>example.com</code> to <code>www.example.com</code>) or to an <code>A</code> record.</p>
                        </div>
                    </div>
                </div>

                <h2>Managed DNS &amp; Traffic Routing</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Managed DNS Services</div>
                        <p class="shadcn-card-description">Services such as CloudFlare and Route 53 provide managed DNS with advanced traffic routing.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <div class="shadcn-tabs">
                            <div class="shadcn-tabs-list">
                                <button class="shadcn-tab-trigger active" data-tab="dns-weighted-tab" data-tabgroup="dns-routing">Weighted Round Robin</button>
                                <button class="shadcn-tab-trigger" data-tab="dns-latency-tab" data-tabgroup="dns-routing">Latency-Based</button>
                                <button class="shadcn-tab-trigger" data-tab="dns-geo-tab" data-tabgroup="dns-routing">Geolocation-Based</button>
                            </div>

                            <div class="shadcn-tab-content active" id="dns-weighted-tab">
                                <div class="shadcn-card" style="border:1px solid var(--border);">
                                    <div class="shadcn-card-header">
                                        <div class="shadcn-card-title">Weighted Round Robin <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Flexible</span></div>
                                    </div>
                                    <div class="shadcn-card-content">
                                        <p>Distributes traffic based on assigned weights. Useful for:</p>
                                        <ul style="padding-left:18px">
                                            <li>Prevent traffic from going to servers under <strong>maintenance</strong></li>
                                            <li>Balance between varying <strong>cluster sizes</strong></li>
                                            <li><strong>A/B testing</strong> — send a percentage of users to a new version</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="shadcn-tab-content" id="dns-latency-tab">
                                <div class="shadcn-card" style="border:1px solid var(--border);">
                                    <div class="shadcn-card-header">
                                        <div class="shadcn-card-title">Latency-Based Routing <span class="shadcn-badge shadcn-badge-green" style="margin-left:8px">Performance</span></div>
                                    </div>
                                    <div class="shadcn-card-content">
                                        <p>Routes users to the region that provides the <strong>lowest latency</strong>. AWS Route 53 measures latency between your users and AWS regions to determine the best endpoint.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="shadcn-tab-content" id="dns-geo-tab">
                                <div class="shadcn-card" style="border:1px solid var(--border);">
                                    <div class="shadcn-card-header">
                                        <div class="shadcn-card-title">Geolocation-Based Routing <span class="shadcn-badge shadcn-badge-amber" style="margin-left:8px">Location</span></div>
                                    </div>
                                    <div class="shadcn-card-content">
                                        <p>Routes users based on their <strong>geographic location</strong>. Useful for content localization, regulatory compliance, and distributing load across regions.</p>
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
                        Disadvantages of DNS
                    </div>
                    <div class="shadcn-alert-description">
                        <ul style="padding-left:18px;margin:0;">
                            <li>Accessing a DNS server introduces a <strong>slight delay</strong>, although mitigated by caching.</li>
                            <li>DNS server management can be <strong>complex</strong> and is generally managed by governments, ISPs, and large companies.</li>
                            <li>DNS services have come under <strong>DDoS attack</strong>, preventing users from accessing websites without knowing the IP address(es) directly.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📄</span> <a href="https://technet.microsoft.com/en-us/library/dd197427(v=ws.10).aspx" target="_blank" rel="noopener">DNS architecture</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/Domain_Name_System" target="_blank" rel="noopener">Wikipedia — Domain Name System</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://support.dnsimple.com/categories/dns/" target="_blank" rel="noopener">DNS articles (dnsimple)</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 11 — Content Delivery Network
    // ================================================================
    'cdn': {
        part: 'Part C',
        title: 'Content Delivery Network',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 11 — Infrastructure</div>
                <h1>Content Delivery Network</h1>
                <p class="chapter-subtitle">Globally distributed proxy servers that serve content from locations closer to the user — accelerating delivery and offloading origin servers.</p>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Push vs Pull CDN Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    subgraph Push CDN
        A1["Content changes"] --> B1["Origin pushes to CDN"]
        B1 --> C1["CDN stores content"]
        D1["User request"] --> C1
        C1 --> E1["Serve from edge"]
    end
    subgraph Pull CDN
        D2["User request"] --> F2["CDN Edge"]
        F2 --> G2{"Content cached?"}
        G2 -->|Hit| H2["Serve from edge"]
        G2 -->|Miss| I2["Fetch from Origin"]
        I2 --> J2["Cache at edge"]
        J2 --> H2
    end
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/h9TAuGI.jpg" class="zoomable" alt="Why use a CDN" style="max-width:620px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="https://www.creative-artworks.eu/why-use-a-content-delivery-network-cdn/" target="_blank" rel="noopener">Source: Why use a CDN</a></em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Core Concept
                    </div>
                    <div class="shadcn-alert-description">A <strong>content delivery network (CDN)</strong> is a globally distributed network of proxy servers, serving content from locations closer to the user. Generally, static files such as HTML/CSS/JS, photos, and videos are served from CDN, although some CDNs such as Amazon's CloudFront support dynamic content.</div>
                </div>

                <h2>Why Use a CDN?</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Performance Benefits</div>
                        <p class="shadcn-card-description">CDNs significantly improve performance in two key ways.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                            <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                <div class="shadcn-card-header">
                                    <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Proximity</span></div>
                                </div>
                                <div class="shadcn-card-content">
                                    <p>Users receive content from <strong>data centers close to them</strong>, reducing latency and improving load times.</p>
                                </div>
                            </div>
                            <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                <div class="shadcn-card-header">
                                    <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Offloading</span></div>
                                </div>
                                <div class="shadcn-card-content">
                                    <p>Your servers <strong>do not have to serve requests</strong> that the CDN fulfills, freeing origin capacity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Push vs Pull CDNs</h2>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="cdn-push-tab" data-tabgroup="cdn-type">Push CDN</button>
                        <button class="shadcn-tab-trigger" data-tab="cdn-pull-tab" data-tabgroup="cdn-type">Pull CDN</button>
                    </div>

                    <div class="shadcn-tab-content active" id="cdn-push-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Push CDN <span class="shadcn-badge shadcn-badge-amber" style="margin-left:8px">Upload on Change</span></div>
                                <p class="shadcn-card-description">You proactively upload content to the CDN when changes occur.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>Push CDNs receive new content whenever changes occur on your server. You take full responsibility for providing content, uploading directly to the CDN and rewriting URLs to point to the CDN.</p>
                                <p>You can configure when content <strong>expires</strong> and when it is <strong>updated</strong>. Content is uploaded only when it is new or changed, <strong>minimizing traffic</strong> but <strong>maximizing storage</strong>.</p>
                                <div class="callout callout-info" style="margin-top:1rem;">
                                    <div class="callout-title">💡 Best For</div>
                                    <p>Sites with a <strong>small amount of traffic</strong> or sites with content that <strong>isn't often updated</strong>. Content is placed on the CDN once, instead of being re-pulled at regular intervals.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="shadcn-tab-content" id="cdn-pull-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Pull CDN <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Lazy Fetch</span></div>
                                <p class="shadcn-card-description">CDN grabs content from your server on the first user request.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>Pull CDNs grab new content from your server when the first user requests the content. You leave the content on your server and rewrite URLs to point to the CDN. This results in a <strong>slower first request</strong> until the content is cached on the CDN.</p>
                                <p>A <strong>time-to-live (TTL)</strong> determines how long content is cached. Pull CDNs <strong>minimize storage space</strong> on the CDN, but can create redundant traffic if files expire and are pulled before they have actually changed.</p>
                                <div class="callout callout-info" style="margin-top:1rem;">
                                    <div class="callout-title">💡 Best For</div>
                                    <p>Sites with <strong>heavy traffic</strong>, as traffic is spread out more evenly with only recently-requested content remaining on the CDN.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Comparison at a Glance</h2>

                <div class="shadcn-comparison-grid">
                    <div class="shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title">Push CDN</div>
                            <p class="shadcn-card-description">Proactive upload model</p>
                        </div>
                        <div class="shadcn-card-content">
                            <ul style="padding-left:18px">
                                <li>You upload content when it changes</li>
                                <li>Full control of expiry and updates</li>
                                <li>Minimizes traffic, maximizes storage</li>
                                <li>Best for low-traffic or rarely-updated sites</li>
                            </ul>
                        </div>
                    </div>
                    <div class="shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title">Pull CDN</div>
                            <p class="shadcn-card-description">On-demand fetch model</p>
                        </div>
                        <div class="shadcn-card-content">
                            <ul style="padding-left:18px">
                                <li>CDN fetches content on first request</li>
                                <li>TTL determines cache duration</li>
                                <li>Minimizes CDN storage, possible redundant pulls</li>
                                <li>Best for heavy-traffic sites</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Disadvantages</h2>

                <div class="shadcn-alert shadcn-alert-destructive">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                        Disadvantages of CDN
                    </div>
                    <div class="shadcn-alert-description">
                        <ul style="padding-left:18px;margin:0;">
                            <li>CDN costs could be <strong>significant</strong> depending on traffic, although this should be weighed with additional costs you would incur not using a CDN.</li>
                            <li>Content might be <strong>stale</strong> if it is updated before the TTL expires it.</li>
                            <li>CDNs require <strong>changing URLs</strong> for static content to point to the CDN.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📄</span> <a href="https://figshare.com/articles/Globally_distributed_content_delivery/6605972" target="_blank" rel="noopener">Globally distributed content delivery</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://www.geeksforgeeks.org/system-design/pull-cdn-vs-push-cdn/" target="_blank" rel="noopener">The differences between push and pull CDNs</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/Content_delivery_network" target="_blank" rel="noopener">Wikipedia — Content delivery network</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 12 — Load Balancer
    // ================================================================
    'load-balancer': {
        part: 'Part C',
        title: 'Load Balancer',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 12 — Infrastructure</div>
                <h1>Load Balancer</h1>
                <p class="chapter-subtitle">Distributing incoming client requests across computing resources to improve reliability, eliminate single points of failure, and enable horizontal scaling.</p>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Load Balancer Request Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["Client Request"] --> B["Load Balancer"]
    B --> C{"L4 or L7?"}
    C -->|L4 Transport| D["Route by IP/Port"]
    C -->|L7 Application| E["Route by URL/Headers"]
    D --> F["Server Pool"]
    E --> F
    F --> G["Health Check"]
    G -->|Healthy| H["Process Request"]
    G -->|Unhealthy| I["Remove from Pool"]
    H --> J["Response to Client"]
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/h81n9iK.png" class="zoomable" alt="Scalable system design patterns" style="max-width:620px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html" target="_blank" rel="noopener">Source: Scalable system design patterns</a></em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Core Concept
                    </div>
                    <div class="shadcn-alert-description"><strong>Load balancers</strong> distribute incoming client requests to computing resources such as application servers and databases. The load balancer returns the response from the computing resource to the appropriate client.</div>
                </div>

                <h2>What Load Balancers Do</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Effectiveness</div>
                        <p class="shadcn-card-description">Load balancers address three critical concerns.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <div class="concept-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;">
                            <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                <div class="shadcn-card-header">
                                    <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Health</span></div>
                                </div>
                                <div class="shadcn-card-content">
                                    <p>Preventing requests from going to <strong>unhealthy servers</strong>.</p>
                                </div>
                            </div>
                            <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                <div class="shadcn-card-header">
                                    <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Load</span></div>
                                </div>
                                <div class="shadcn-card-content">
                                    <p>Preventing <strong>overloading</strong> resources.</p>
                                </div>
                            </div>
                            <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                <div class="shadcn-card-header">
                                    <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">SPOF</span></div>
                                </div>
                                <div class="shadcn-card-content">
                                    <p>Helping to eliminate a <strong>single point of failure</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Implementation &amp; Benefits</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-content">
                        <p>Load balancers can be implemented with <strong>hardware</strong> (expensive) or with <strong>software</strong> such as HAProxy.</p>
                        <p>Additional benefits include:</p>
                        <ul style="padding-left:18px">
                            <li><strong>SSL termination</strong> — Decrypt incoming requests and encrypt server responses so backend servers do not have to perform these potentially expensive operations. Removes the need to install X.509 certificates on each server.</li>
                            <li><strong>Session persistence</strong> — Issue cookies and route a specific client's requests to the same instance if the web apps do not keep track of sessions.</li>
                        </ul>
                        <div class="callout callout-info" style="margin-top:1rem;">
                            <div class="callout-title">💡 High Availability</div>
                            <p>To protect against failures, it's common to set up <strong>multiple load balancers</strong>, either in <strong>active-passive</strong> or <strong>active-active</strong> mode.</p>
                        </div>
                    </div>
                </div>

                <h2>Routing Methods</h2>

                <div class="table-wrapper" style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;">
                        <thead>
                            <tr>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Method</th>
                                <th style="text-align:left;padding:0.75rem;border-bottom:2px solid var(--border);">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-outline">Random</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Distributes requests randomly across servers</td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-outline">Least Loaded</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Sends requests to the server with the fewest active connections</td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-outline">Session / Cookies</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Routes based on session affinity or cookie values</td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-outline">Round Robin</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Cycles through servers sequentially (or weighted)</td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);"><span class="shadcn-badge shadcn-badge-blue">Layer 4</span></td>
                                <td style="padding:0.75rem;border-bottom:1px solid var(--border);">Transport layer — routes based on IP/ports</td>
                            </tr>
                            <tr>
                                <td style="padding:0.75rem;"><span class="shadcn-badge shadcn-badge-green">Layer 7</span></td>
                                <td style="padding:0.75rem;">Application layer — routes based on headers, message, cookies</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <hr class="shadcn-separator">

                <h2>Layer 4 vs Layer 7 Load Balancing</h2>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="lb-l4-tab" data-tabgroup="lb-layer">Layer 4</button>
                        <button class="shadcn-tab-trigger" data-tab="lb-l7-tab" data-tabgroup="lb-layer">Layer 7</button>
                    </div>

                    <div class="shadcn-tab-content active" id="lb-l4-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Layer 4 Load Balancing <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Transport</span></div>
                                <p class="shadcn-card-description">Operates at the transport layer — fast and efficient.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>Layer 4 load balancers look at info at the <strong>transport layer</strong> to decide how to distribute requests. Generally, this involves the source, destination IP addresses, and ports in the header, but <strong>not the contents of the packet</strong>.</p>
                                <p>Layer 4 load balancers forward network packets to and from the upstream server, performing <strong>Network Address Translation (NAT)</strong>.</p>
                                <ul style="padding-left:18px">
                                    <li>Less time and computing resources required</li>
                                    <li>Less flexible — cannot inspect application data</li>
                                    <li>Faster for high-throughput scenarios</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="shadcn-tab-content" id="lb-l7-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">Layer 7 Load Balancing <span class="shadcn-badge shadcn-badge-green" style="margin-left:8px">Application</span></div>
                                <p class="shadcn-card-description">Operates at the application layer — flexible and content-aware.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <p>Layer 7 load balancers look at the <strong>application layer</strong> to decide how to distribute requests. This can involve contents of the header, message, and cookies.</p>
                                <p>Layer 7 load balancers <strong>terminate network traffic</strong>, read the message, make a load-balancing decision, then open a connection to the selected server. For example, a layer 7 load balancer can direct video traffic to video servers while directing billing traffic to security-hardened servers.</p>
                                <ul style="padding-left:18px">
                                    <li>More time and computing resources required</li>
                                    <li>Highly flexible — can route based on content</li>
                                    <li>Enables smart routing and content-based decisions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="callout callout-warning" style="margin-top:1rem;">
                    <div class="callout-title">⚠️ Trade-Off</div>
                    <p>At the cost of flexibility, <strong>Layer 4</strong> load balancing requires less time and computing resources than <strong>Layer 7</strong>, although the performance impact can be minimal on modern commodity hardware.</p>
                </div>

                <hr class="shadcn-separator">

                <h2>Horizontal Scaling</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Scaling Out with Commodity Machines</div>
                    </div>
                    <div class="shadcn-card-content">
                        <p>Load balancers enable <strong>horizontal scaling</strong>, improving both performance and availability. Scaling out using commodity machines is more <strong>cost efficient</strong> and results in <strong>higher availability</strong> than scaling up a single server on more expensive hardware (<strong>Vertical Scaling</strong>).</p>
                        <p>It is also easier to hire for talent working on commodity hardware than it is for specialized enterprise systems.</p>
                    </div>
                </div>

                <div class="shadcn-alert shadcn-alert-warning" style="margin-top:1rem;">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                        Disadvantages of Horizontal Scaling
                    </div>
                    <div class="shadcn-alert-description">
                        <ul style="padding-left:18px;margin:0;">
                            <li>Scaling horizontally introduces complexity and involves <strong>cloning servers</strong>.</li>
                            <li>Servers should be <strong>stateless</strong>: they should not contain any user-related data like sessions or profile pictures.</li>
                            <li>Sessions can be stored in a <strong>centralized data store</strong> such as a database (SQL, NoSQL) or a persistent cache (Redis, Memcached).</li>
                            <li>Downstream servers such as caches and databases need to handle <strong>more simultaneous connections</strong> as upstream servers scale out.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Disadvantages</h2>

                <div class="shadcn-alert shadcn-alert-destructive">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                        Disadvantages of Load Balancer
                    </div>
                    <div class="shadcn-alert-description">
                        <ul style="padding-left:18px;margin:0;">
                            <li>The load balancer can become a <strong>performance bottleneck</strong> if it does not have enough resources or is not configured properly.</li>
                            <li>Introducing a load balancer to eliminate a single point of failure results in <strong>increased complexity</strong>.</li>
                            <li>A single load balancer is a <strong>single point of failure</strong>; configuring multiple load balancers further increases complexity.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📄</span> <a href="https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/" target="_blank" rel="noopener">NGINX architecture</a></li>
                    <li><span class="resource-icon">📄</span> <a href="http://www.haproxy.org/download/1.2/doc/architecture.txt" target="_blank" rel="noopener">HAProxy architecture guide</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/Load_balancing_(computing)" target="_blank" rel="noopener">Wikipedia — Load balancing</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://www.nginx.com/resources/glossary/layer-4-load-balancing/" target="_blank" rel="noopener">Layer 4 load balancing</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://www.nginx.com/resources/glossary/layer-7-load-balancing/" target="_blank" rel="noopener">Layer 7 load balancing</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 13 — Reverse Proxy
    // ================================================================
    'reverse-proxy': {
        part: 'Part C',
        title: 'Reverse Proxy',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 13 — Infrastructure</div>
                <h1>Reverse Proxy</h1>
                <p class="chapter-subtitle">A web server that centralizes internal services and provides unified interfaces to the public — adding security, scalability, and caching in one layer.</p>

                <div class="mermaid-diagram">
                    <div class="mermaid-diagram-header">
                        <span class="diagram-icon">📊</span> Reverse Proxy Request Flow
                        <span class="diagram-type-badge">Flow</span>
                    </div>
                    <div class="mermaid-display"></div>
                    <div class="mermaid-code">
flowchart TD
    A["Client"] --> B["Reverse Proxy"]
    B --> C["SSL Termination"]
    C --> D["Compression"]
    D --> E{"Static content?"}
    E -->|Yes| F["Serve from Cache"]
    E -->|No| G["Forward to Backend"]
    G --> H["Backend Server 1"]
    G --> I["Backend Server 2"]
    H --> J["Response"]
    I --> J
    J --> B
    B --> A
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/n41Azff.png" class="zoomable" alt="Wikipedia reverse proxy diagram" style="max-width:620px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="https://upload.wikimedia.org/wikipedia/commons/6/67/Reverse_proxy_h2g2bob.svg" target="_blank" rel="noopener">Source: Wikipedia</a></em></p>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Core Concept
                    </div>
                    <div class="shadcn-alert-description">A <strong>reverse proxy</strong> is a web server that centralizes internal services and provides unified interfaces to the public. Requests from clients are forwarded to a server that can fulfill it before the reverse proxy returns the server's response to the client.</div>
                </div>

                <h2>Benefits</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Security</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Hide information about <strong>backend servers</strong>, blacklist IPs, limit number of connections per client.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Scalability</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Clients only see the reverse proxy's IP, allowing you to <strong>scale servers</strong> or change their configuration transparently.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">SSL Termination</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p>Decrypt incoming requests and encrypt server responses so backend servers do not have to perform these <strong>expensive operations</strong>. Removes the need to install X.509 certificates on each server.</p>
                        </div>
                    </div>
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">Compression</span></div>
                        </div>
                        <div class="shadcn-card-content">
                            <p><strong>Compress server responses</strong> to reduce bandwidth usage and improve transfer speed.</p>
                        </div>
                    </div>
                </div>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Additional Capabilities</div>
                    </div>
                    <div class="shadcn-card-content">
                        <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                            <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                <div class="shadcn-card-header">
                                    <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">Caching</span></div>
                                </div>
                                <div class="shadcn-card-content">
                                    <p>Return the response for <strong>cached requests</strong> without hitting the origin server.</p>
                                </div>
                            </div>
                            <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                <div class="shadcn-card-header">
                                    <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">Static Content</span></div>
                                </div>
                                <div class="shadcn-card-content">
                                    <p>Serve <strong>static content</strong> directly — HTML/CSS/JS, photos, videos, etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Load Balancer vs Reverse Proxy</h2>

                <div class="shadcn-comparison-grid">
                    <div class="shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title">Load Balancer</div>
                            <p class="shadcn-card-description">Multiple servers required</p>
                        </div>
                        <div class="shadcn-card-content">
                            <ul style="padding-left:18px">
                                <li>Useful when you have <strong>multiple servers</strong></li>
                                <li>Routes traffic to a set of servers serving the <strong>same function</strong></li>
                                <li>Primary goal: distribute load</li>
                            </ul>
                        </div>
                    </div>
                    <div class="shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title">Reverse Proxy</div>
                            <p class="shadcn-card-description">Even one server benefits</p>
                        </div>
                        <div class="shadcn-card-content">
                            <ul style="padding-left:18px">
                                <li>Useful even with <strong>just one</strong> web server or application server</li>
                                <li>Provides security, caching, compression, SSL termination</li>
                                <li>Primary goal: centralize and protect</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="callout callout-info" style="margin-top:1rem;">
                    <div class="callout-title">💡 Key Insight</div>
                    <p>Solutions such as <strong>NGINX</strong> and <strong>HAProxy</strong> can support both layer 7 reverse proxying and load balancing.</p>
                </div>

                <hr class="shadcn-separator">

                <h2>Disadvantages</h2>

                <div class="shadcn-alert shadcn-alert-destructive">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                        Disadvantages of Reverse Proxy
                    </div>
                    <div class="shadcn-alert-description">
                        <ul style="padding-left:18px;margin:0;">
                            <li>Introducing a reverse proxy results in <strong>increased complexity</strong>.</li>
                            <li>A single reverse proxy is a <strong>single point of failure</strong>; configuring multiple reverse proxies (i.e. a failover) further increases complexity.</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📄</span> <a href="https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/" target="_blank" rel="noopener">Reverse proxy vs load balancer</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/" target="_blank" rel="noopener">NGINX architecture</a></li>
                    <li><span class="resource-icon">📄</span> <a href="http://www.haproxy.org/download/1.2/doc/architecture.txt" target="_blank" rel="noopener">HAProxy architecture guide</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/Reverse_proxy" target="_blank" rel="noopener">Wikipedia — Reverse proxy</a></li>
                </ul>
            </div>
        `
    }

};
