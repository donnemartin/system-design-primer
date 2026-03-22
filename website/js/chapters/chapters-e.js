/**
 * Part E: Communication — Chapters 18–19
 * Communication, Security
 *
 * Registered into global CHAPTERS_E object.
 */

const CHAPTERS_E = {

    // ================================================================
    // Chapter 18 — Communication
    // ================================================================
    'communication': {
        part: 'Part E',
        title: 'Communication',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 18 — Communication</div>
                <h1>Communication</h1>
                <p class="chapter-subtitle">How systems talk to each other — from low-level transport protocols to high-level architectural styles like REST and RPC.</p>

                <hr class="shadcn-separator">

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/5KeocQs.jpg" class="zoomable" alt="OSI 7 layer model" style="max-width:620px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em>OSI 7 Layer Model</em></p>
                </div>

                <!-- ────────── HTTP ────────── -->

                <h2>Hypertext Transfer Protocol (HTTP)</h2>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Application Layer Protocol
                    </div>
                    <div class="shadcn-alert-description">HTTP is a method for encoding and transporting data between a client and a server. It is a <strong>request/response protocol</strong>: clients issue requests and servers issue responses with relevant content and completion status info about the request.</div>
                </div>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">How HTTP Works</div>
                        <p class="shadcn-card-description">Self-contained request/response protocol relying on lower-level TCP and UDP.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <p>HTTP is <strong>self-contained</strong>, allowing requests and responses to flow through many intermediate routers and servers that perform load balancing, caching, encryption, and compression.</p>
                        <p>A basic HTTP request consists of a <strong>verb</strong> (method) and a <strong>resource</strong> (endpoint). HTTP is an application layer protocol relying on lower-level protocols such as <strong>TCP</strong> and <strong>UDP</strong>.</p>
                    </div>
                </div>

                <h3>HTTP Verbs</h3>

                <div class="table-wrapper" style="overflow-x:auto;margin:1.5rem 0;">
                    <table style="width:100%;border-collapse:collapse;font-size:0.92rem;">
                        <thead>
                            <tr style="border-bottom:2px solid var(--border);text-align:left;">
                                <th style="padding:10px 12px;">Verb</th>
                                <th style="padding:10px 12px;">Description</th>
                                <th style="padding:10px 12px;">Idempotent*</th>
                                <th style="padding:10px 12px;">Safe</th>
                                <th style="padding:10px 12px;">Cacheable</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid var(--border);">
                                <td style="padding:10px 12px;"><span class="shadcn-badge shadcn-badge-green">GET</span></td>
                                <td style="padding:10px 12px;">Reads a resource</td>
                                <td style="padding:10px 12px;">Yes</td>
                                <td style="padding:10px 12px;">Yes</td>
                                <td style="padding:10px 12px;">Yes</td>
                            </tr>
                            <tr style="border-bottom:1px solid var(--border);">
                                <td style="padding:10px 12px;"><span class="shadcn-badge shadcn-badge-blue">POST</span></td>
                                <td style="padding:10px 12px;">Creates a resource or triggers a process</td>
                                <td style="padding:10px 12px;">No</td>
                                <td style="padding:10px 12px;">No</td>
                                <td style="padding:10px 12px;">Yes if response contains freshness info</td>
                            </tr>
                            <tr style="border-bottom:1px solid var(--border);">
                                <td style="padding:10px 12px;"><span class="shadcn-badge shadcn-badge-amber">PUT</span></td>
                                <td style="padding:10px 12px;">Creates or replaces a resource</td>
                                <td style="padding:10px 12px;">Yes</td>
                                <td style="padding:10px 12px;">No</td>
                                <td style="padding:10px 12px;">No</td>
                            </tr>
                            <tr style="border-bottom:1px solid var(--border);">
                                <td style="padding:10px 12px;"><span class="shadcn-badge shadcn-badge-outline">PATCH</span></td>
                                <td style="padding:10px 12px;">Partially updates a resource</td>
                                <td style="padding:10px 12px;">No</td>
                                <td style="padding:10px 12px;">No</td>
                                <td style="padding:10px 12px;">Yes if response contains freshness info</td>
                            </tr>
                            <tr>
                                <td style="padding:10px 12px;"><span class="shadcn-badge shadcn-badge-destructive">DELETE</span></td>
                                <td style="padding:10px 12px;">Deletes a resource</td>
                                <td style="padding:10px 12px;">Yes</td>
                                <td style="padding:10px 12px;">No</td>
                                <td style="padding:10px 12px;">No</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="font-size:0.82rem;color:var(--muted-foreground);margin-top:0.5rem;">* Can be called many times without different outcomes.</p>
                </div>

                <hr class="shadcn-separator">

                <!-- ────────── TCP vs UDP ────────── -->

                <h2>Transport Protocols: TCP vs UDP</h2>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="tcp-tab" data-tabgroup="transport">TCP — Transmission Control Protocol</button>
                        <button class="shadcn-tab-trigger" data-tab="udp-tab" data-tabgroup="transport">UDP — User Datagram Protocol</button>
                    </div>

                    <!-- TCP -->
                    <div class="shadcn-tab-content active" id="tcp-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">TCP — Transmission Control Protocol <span class="shadcn-badge shadcn-badge-green" style="margin-left:8px">Reliable</span></div>
                                <p class="shadcn-card-description">Connection-oriented protocol over an IP network. Guarantees delivery, order, and integrity.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <div class="img-container" style="text-align:center;margin:0 0 1.5rem 0;">
                                    <img src="../images/JdAsdvG.jpg" class="zoomable" alt="TCP connection handshake" style="max-width:560px;width:100%;border-radius:8px;">
                                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em>TCP connection handshake</em></p>
                                </div>

                                <p>TCP is a <strong>connection-oriented</strong> protocol over an IP network. Connection is established and terminated using a <strong>handshake</strong>.</p>
                                <p>All packets sent are <strong>guaranteed to reach the destination in the original order</strong> and without corruption through:</p>
                                <ul style="padding-left:18px">
                                    <li><strong>Sequence numbers</strong> and <strong>checksum fields</strong> for each packet</li>
                                    <li><strong>Acknowledgement packets</strong> and automatic retransmission</li>
                                </ul>
                                <p>If the sender does not receive a correct response, it will <strong>resend the packets</strong>. If there are multiple timeouts, the connection is <strong>dropped</strong>.</p>
                                <p>TCP also implements <strong>flow control</strong> and <strong>congestion control</strong>. These guarantees cause delays and generally result in <strong>less efficient transmission</strong> than UDP.</p>

                                <div class="callout callout-warning" style="margin-top:1rem;">
                                    <div class="callout-title">⚠️ Resource Usage</div>
                                    <p>To ensure high throughput, web servers can keep a large number of TCP connections open, resulting in <strong>high memory usage</strong>. Connection pooling can help mitigate this, as well as switching to UDP where applicable.</p>
                                </div>

                                <h4 style="margin-top:1.2rem;">Use TCP When You Need:</h4>
                                <ul style="padding-left:18px">
                                    <li><strong>All of the data to arrive intact</strong></li>
                                    <li>The best automatic estimation of <strong>network throughput</strong></li>
                                </ul>

                                <h4 style="margin-top:1rem;">Common Use Cases:</h4>
                                <div class="concept-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:0.75rem 0;">
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-content" style="padding:0.75rem;text-align:center;">
                                            <strong>Web Servers</strong>
                                        </div>
                                    </div>
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-content" style="padding:0.75rem;text-align:center;">
                                            <strong>Database</strong>
                                        </div>
                                    </div>
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-content" style="padding:0.75rem;text-align:center;">
                                            <strong>SMTP / FTP / SSH</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- UDP -->
                    <div class="shadcn-tab-content" id="udp-tab">
                        <div class="shadcn-card">
                            <div class="shadcn-card-header">
                                <div class="shadcn-card-title">UDP — User Datagram Protocol <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Fast</span></div>
                                <p class="shadcn-card-description">Connectionless protocol. Datagrams may arrive out of order or not at all — but it's very fast.</p>
                            </div>
                            <div class="shadcn-card-content">
                                <div class="img-container" style="text-align:center;margin:0 0 1.5rem 0;">
                                    <img src="../images/yzDrJtA.jpg" class="zoomable" alt="UDP datagram" style="max-width:560px;width:100%;border-radius:8px;">
                                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em>UDP datagram structure</em></p>
                                </div>

                                <p>UDP is <strong>connectionless</strong>. Datagrams (analogous to packets) are guaranteed only at the datagram level. Datagrams might reach their destination <strong>out of order</strong> or <strong>not at all</strong>.</p>
                                <p>UDP does not support congestion control. Without the guarantees that TCP support, UDP is generally <strong>more efficient</strong>.</p>
                                <p>UDP can <strong>broadcast</strong>, sending datagrams to all devices on the subnet. This is useful with <strong>DHCP</strong> because the client has not yet received an IP address, thus preventing a way for TCP to stream without the IP address.</p>

                                <div class="callout callout-info" style="margin-top:1rem;">
                                    <div class="callout-title">💡 When to Use UDP</div>
                                    <p>Use UDP when you need the <strong>lowest latency</strong>, when <strong>late data is worse than loss of data</strong>, or when you want to implement your <strong>own error correction</strong>.</p>
                                </div>

                                <h4 style="margin-top:1.2rem;">Use UDP When You Need:</h4>
                                <ul style="padding-left:18px">
                                    <li>The <strong>lowest latency</strong></li>
                                    <li>Late data is <strong>worse than loss</strong> of data</li>
                                    <li>You want to implement your <strong>own error correction</strong></li>
                                </ul>

                                <h4 style="margin-top:1rem;">Common Use Cases:</h4>
                                <div class="concept-grid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:0.75rem;margin:0.75rem 0;">
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-content" style="padding:0.75rem;text-align:center;">
                                            <strong>VoIP / Video Chat</strong>
                                        </div>
                                    </div>
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-content" style="padding:0.75rem;text-align:center;">
                                            <strong>Streaming Media</strong>
                                        </div>
                                    </div>
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-content" style="padding:0.75rem;text-align:center;">
                                            <strong>Realtime Multiplayer Games</strong>
                                        </div>
                                    </div>
                                    <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                        <div class="shadcn-card-content" style="padding:0.75rem;text-align:center;">
                                            <strong>DHCP / DNS (lookups)</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>TCP vs UDP — Side-by-Side</h3>

                <div class="shadcn-comparison-grid">
                    <div class="shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green" style="margin-right:8px">TCP</span> Reliable &amp; Ordered</div>
                        </div>
                        <div class="shadcn-card-content">
                            <ul style="padding-left:18px">
                                <li>Connection-oriented (handshake)</li>
                                <li>Guaranteed delivery &amp; ordering</li>
                                <li>Flow control &amp; congestion control</li>
                                <li>Higher latency; higher overhead</li>
                                <li>Best for: web, DB, email, file transfer</li>
                            </ul>
                        </div>
                    </div>
                    <div class="shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue" style="margin-right:8px">UDP</span> Fast &amp; Lightweight</div>
                        </div>
                        <div class="shadcn-card-content">
                            <ul style="padding-left:18px">
                                <li>Connectionless (no handshake)</li>
                                <li>No delivery or ordering guarantees</li>
                                <li>No congestion control</li>
                                <li>Lower latency; lower overhead</li>
                                <li>Best for: streaming, gaming, VoIP</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <!-- ────────── RPC ────────── -->

                <h2>Remote Procedure Call (RPC)</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">RPC Overview <span class="shadcn-badge shadcn-badge-amber" style="margin-left:8px">Behavior-Focused</span></div>
                        <p class="shadcn-card-description">A client causes a procedure to execute on a different address space (remote server), coded as if it were a local procedure call.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <div class="img-container" style="text-align:center;margin:0 0 1.5rem 0;">
                            <img src="../images/iF4Mkb5.png" class="zoomable" alt="RPC request/response flow" style="max-width:620px;width:100%;border-radius:8px;">
                            <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em>RPC request/response flow</em></p>
                        </div>

                        <p>In an RPC, a client causes a procedure to execute on a different address space, usually a <strong>remote server</strong>. The procedure is coded as if it were a local procedure call, <strong>abstracting away the details</strong> of how to communicate with the server from the client program.</p>
                        <p>Remote calls are usually <strong>slower and less reliable</strong> than local calls, so it is helpful to distinguish them. Popular RPC frameworks include <strong>Protobuf</strong>, <strong>Thrift</strong>, and <strong>Avro</strong>.</p>

                        <h4 style="margin-top:1.2rem;">RPC Call Flow</h4>
                        <div class="shadcn-card" style="border:1px solid var(--border);margin:1rem 0;">
                            <div class="shadcn-card-content" style="font-size:0.9rem;">
                                <ol style="padding-left:18px;margin:0;">
                                    <li><strong>Client program</strong> — calls the client stub procedure</li>
                                    <li><strong>Client stub procedure</strong> — marshals (packs) the procedure ID and arguments into a request message</li>
                                    <li><strong>Client communication module</strong> — OS sends the message from the client to the server</li>
                                    <li><strong>Server communication module</strong> — OS passes the incoming packets to the server stub procedure</li>
                                    <li><strong>Server stub procedure</strong> — unmarshalls the results, calls the server procedure matching the procedure ID</li>
                                    <li><strong>Server procedure</strong> — executes and returns result to the server stub, which reverses the process back to the client</li>
                                </ol>
                            </div>
                        </div>

                        <p>RPC is focused on <strong>exposing behaviors</strong>. RPCs are often used for <strong>performance reasons</strong> with internal communications, as you can hand-craft native calls to better fit your use cases.</p>

                        <div class="callout callout-info" style="margin-top:1rem;">
                            <div class="callout-title">💡 Choose a Native Library (SDK) When:</div>
                            <ul style="padding-left:18px;margin:0;">
                                <li>You <strong>know your target platform</strong></li>
                                <li>You want to <strong>control how your "logic" is accessed</strong></li>
                                <li>You want to <strong>control how error control happens</strong> off your library</li>
                                <li><strong>Performance</strong> and end user experience is your primary concern</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h3>Disadvantages of RPC</h3>

                <div class="shadcn-alert shadcn-alert-destructive">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                        RPC Trade-Offs
                    </div>
                    <div class="shadcn-alert-description">
                        <ul style="padding-left:18px;margin:0;">
                            <li>RPC clients become <strong>tightly coupled</strong> to the service implementation</li>
                            <li>A <strong>new API must be defined</strong> for every new operation or use case</li>
                            <li>It can be <strong>difficult to debug</strong> RPC calls</li>
                            <li>You might not be able to leverage <strong>existing technologies out of the box</strong> — for example, it might require additional effort to ensure RPC calls are properly cached on caching servers such as Squid</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <!-- ────────── REST ────────── -->

                <h2>Representational State Transfer (REST)</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">REST Overview <span class="shadcn-badge shadcn-badge-blue" style="margin-left:8px">Data-Focused</span></div>
                        <p class="shadcn-card-description">An architectural style enforcing a client/server model where the client acts on a set of resources managed by the server.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <p>REST is an architectural style enforcing a <strong>client/server model</strong> where the client acts on a set of resources managed by the server. The server provides a representation of resources and actions that can either manipulate or get a new representation of resources. All communication must be <strong>stateless</strong> and <strong>cacheable</strong>.</p>

                        <h4 style="margin-top:1.2rem;">Four Qualities of a RESTful Interface</h4>
                        <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1rem 0;">
                            <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                <div class="shadcn-card-header">
                                    <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">1</span> Identify Resources</div>
                                </div>
                                <div class="shadcn-card-content">
                                    <p>Identify resources via <strong>URI</strong> — use the same URI regardless of any operation.</p>
                                </div>
                            </div>
                            <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                <div class="shadcn-card-header">
                                    <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">2</span> Change with Representations</div>
                                </div>
                                <div class="shadcn-card-content">
                                    <p>Change with representations — use <strong>verbs</strong> (GET, POST, PUT, DELETE, etc.).</p>
                                </div>
                            </div>
                            <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                <div class="shadcn-card-header">
                                    <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">3</span> Self-Descriptive Messages</div>
                                </div>
                                <div class="shadcn-card-content">
                                    <p>Self-descriptive error messages — use <strong>status codes</strong>; don't reinvent the wheel.</p>
                                </div>
                            </div>
                            <div class="concept-card shadcn-card" style="border:1px solid var(--border);">
                                <div class="shadcn-card-header">
                                    <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">4</span> HATEOAS</div>
                                </div>
                                <div class="shadcn-card-content">
                                    <p><strong>Hypermedia as the Engine of Application State</strong> — the response should include links to related resources.</p>
                                </div>
                            </div>
                        </div>

                        <p>REST is focused on <strong>exposing data</strong>. It minimizes the coupling between client/server and is often used for <strong>public HTTP APIs</strong>. REST excels at <strong>horizontal scaling</strong> and <strong>partitioning</strong>.</p>
                    </div>
                </div>

                <h3>Disadvantages of REST</h3>

                <div class="shadcn-alert shadcn-alert-destructive">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                        REST Trade-Offs
                    </div>
                    <div class="shadcn-alert-description">
                        <ul style="padding-left:18px;margin:0;">
                            <li>REST may <strong>not be well-suited</strong> for resources that are not naturally organized in a simple hierarchy</li>
                            <li>The <strong>limited set of verbs</strong> may not fit every use case, and some actions are awkward to model as CRUD</li>
                            <li>Fetching complicated resources with <strong>nested hierarchies</strong> requires multiple round trips between the client and server</li>
                            <li>Over time, more fields might be added to an API response, leading to <strong>payload bloat</strong> — older clients receiving data they don't need</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <!-- ────────── RPC vs REST ────────── -->

                <h2>RPC vs REST</h2>

                <div class="shadcn-tabs">
                    <div class="shadcn-tabs-list">
                        <button class="shadcn-tab-trigger active" data-tab="rpcrest-compare-tab" data-tabgroup="rpc-rest">Comparison Table</button>
                        <button class="shadcn-tab-trigger" data-tab="rpcrest-tradeoffs-tab" data-tabgroup="rpc-rest">Key Differences</button>
                    </div>

                    <div class="shadcn-tab-content active" id="rpcrest-compare-tab">
                        <div class="table-wrapper" style="overflow-x:auto;margin:1rem 0;">
                            <table style="width:100%;border-collapse:collapse;font-size:0.92rem;">
                                <thead>
                                    <tr style="border-bottom:2px solid var(--border);text-align:left;">
                                        <th style="padding:10px 12px;">Operation</th>
                                        <th style="padding:10px 12px;">RPC</th>
                                        <th style="padding:10px 12px;">REST</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border-bottom:1px solid var(--border);">
                                        <td style="padding:10px 12px;"><strong>Signup</strong></td>
                                        <td style="padding:10px 12px;"><code>POST /signup</code></td>
                                        <td style="padding:10px 12px;"><code>POST /persons</code></td>
                                    </tr>
                                    <tr style="border-bottom:1px solid var(--border);">
                                        <td style="padding:10px 12px;"><strong>Resign</strong></td>
                                        <td style="padding:10px 12px;"><code>POST /resign</code><br><code>{"personid": "1234"}</code></td>
                                        <td style="padding:10px 12px;"><code>DELETE /persons/1234</code></td>
                                    </tr>
                                    <tr style="border-bottom:1px solid var(--border);">
                                        <td style="padding:10px 12px;"><strong>Read a person</strong></td>
                                        <td style="padding:10px 12px;"><code>GET /readPerson?personid=1234</code></td>
                                        <td style="padding:10px 12px;"><code>GET /persons/1234</code></td>
                                    </tr>
                                    <tr style="border-bottom:1px solid var(--border);">
                                        <td style="padding:10px 12px;"><strong>Read person's items</strong></td>
                                        <td style="padding:10px 12px;"><code>GET /readUsersItemsList?personid=1234</code></td>
                                        <td style="padding:10px 12px;"><code>GET /persons/1234/items</code></td>
                                    </tr>
                                    <tr style="border-bottom:1px solid var(--border);">
                                        <td style="padding:10px 12px;"><strong>Add an item</strong></td>
                                        <td style="padding:10px 12px;"><code>POST /addItemToUsersItemsList</code><br><code>{...}</code></td>
                                        <td style="padding:10px 12px;"><code>POST /persons/1234/items</code><br><code>{...}</code></td>
                                    </tr>
                                    <tr style="border-bottom:1px solid var(--border);">
                                        <td style="padding:10px 12px;"><strong>Update an item</strong></td>
                                        <td style="padding:10px 12px;"><code>POST /modifyItem</code><br><code>{...}</code></td>
                                        <td style="padding:10px 12px;"><code>PUT /items/456</code><br><code>{...}</code></td>
                                    </tr>
                                    <tr>
                                        <td style="padding:10px 12px;"><strong>Delete an item</strong></td>
                                        <td style="padding:10px 12px;"><code>POST /removeItem</code><br><code>{"itemid": "456"}</code></td>
                                        <td style="padding:10px 12px;"><code>DELETE /items/456</code></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="shadcn-tab-content" id="rpcrest-tradeoffs-tab">
                        <div class="shadcn-comparison-grid">
                            <div class="shadcn-card">
                                <div class="shadcn-card-header">
                                    <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber" style="margin-right:8px">RPC</span> Behavior-Focused</div>
                                </div>
                                <div class="shadcn-card-content">
                                    <ul style="padding-left:18px">
                                        <li>Focused on <strong>exposing behaviors</strong></li>
                                        <li>Used for <strong>internal communications</strong> for performance</li>
                                        <li>Tightly coupled to service implementation</li>
                                        <li>Frameworks: Protobuf, Thrift, Avro</li>
                                        <li>New API needed per operation/use case</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="shadcn-card">
                                <div class="shadcn-card-header">
                                    <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue" style="margin-right:8px">REST</span> Data-Focused</div>
                                </div>
                                <div class="shadcn-card-content">
                                    <ul style="padding-left:18px">
                                        <li>Focused on <strong>exposing data</strong></li>
                                        <li>Used for <strong>public APIs</strong> and external interfaces</li>
                                        <li>Minimizes coupling between client/server</li>
                                        <li>Great for horizontal scaling &amp; partitioning</li>
                                        <li>Standard verbs &amp; status codes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📄</span> <a href="https://www.nginx.com/blog/building-microservices-inter-process-communication/" target="_blank" rel="noopener">Building microservices: inter-process communication</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank" rel="noopener">Wikipedia — REST</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc/" target="_blank" rel="noopener">Do you really know why you prefer REST over RPC?</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/Transmission_Control_Protocol" target="_blank" rel="noopener">Wikipedia — TCP</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/User_Datagram_Protocol" target="_blank" rel="noopener">Wikipedia — UDP</a></li>
                    <li><span class="resource-icon">📄</span> <a href="https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol" target="_blank" rel="noopener">Wikipedia — HTTP</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 19 — Security
    // ================================================================
    'security': {
        part: 'Part E',
        title: 'Security',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 19 — Communication</div>
                <h1>Security</h1>
                <p class="chapter-subtitle">Security is a broad topic. Unless you have considerable experience, a security background, or are applying for a position that requires knowledge of security, you probably don't need to know more than the basics.</p>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-warning">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                        Security Essentials
                    </div>
                    <div class="shadcn-alert-description">Security is a <strong>broad topic</strong>. Unless you have considerable experience, a security background, or are applying for a position that requires knowledge of security, you probably don't need to know more than the <strong>basics</strong>.</div>
                </div>

                <h2>Core Security Principles</h2>

                <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-green">1</span> Encrypt in Transit &amp; at Rest</div>
                        </div>
                        <div class="shadcn-card-content">
                            <div class="shadcn-alert shadcn-alert-info" style="margin:0;">
                                <div class="shadcn-alert-title">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                                    Encryption
                                </div>
                                <div class="shadcn-alert-description">Encrypt data <strong>in transit</strong> (TLS/SSL for network communication) and <strong>at rest</strong> (encrypt databases, file storage, backups). This protects sensitive data from interception and unauthorized access.</div>
                            </div>
                        </div>
                    </div>

                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-blue">2</span> Sanitize All User Inputs</div>
                        </div>
                        <div class="shadcn-card-content">
                            <div class="shadcn-alert shadcn-alert-info" style="margin:0;">
                                <div class="shadcn-alert-title">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                                    Input Sanitization
                                </div>
                                <div class="shadcn-alert-description">Sanitize <strong>all user inputs</strong> or any input parameters exposed to the user to prevent <strong>XSS</strong> (Cross-Site Scripting) and <strong>SQL injection</strong> attacks. Never trust user input.</div>
                            </div>
                        </div>
                    </div>

                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-amber">3</span> Parameterized Queries</div>
                        </div>
                        <div class="shadcn-card-content">
                            <div class="shadcn-alert shadcn-alert-info" style="margin:0;">
                                <div class="shadcn-alert-title">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                                    SQL Injection Prevention
                                </div>
                                <div class="shadcn-alert-description">Use <strong>parameterized queries</strong> to prevent SQL injection. Never build SQL queries by concatenating user-supplied strings — use prepared statements or an ORM's built-in protections.</div>
                            </div>
                        </div>
                    </div>

                    <div class="concept-card shadcn-card">
                        <div class="shadcn-card-header">
                            <div class="shadcn-card-title"><span class="shadcn-badge shadcn-badge-outline">4</span> Principle of Least Privilege</div>
                        </div>
                        <div class="shadcn-card-content">
                            <div class="shadcn-alert shadcn-alert-info" style="margin:0;">
                                <div class="shadcn-alert-title">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                                    Least Privilege
                                </div>
                                <div class="shadcn-alert-description">Apply the <strong>principle of least privilege</strong>. Every module, process, or user should only have access to the information and resources necessary for its legitimate purpose. Minimize the blast radius of any potential breach.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Quick Reference</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Security Checklist</div>
                        <p class="shadcn-card-description">A concise summary of the key security practices every system designer should follow.</p>
                    </div>
                    <div class="shadcn-card-content">
                        <div class="table-wrapper" style="overflow-x:auto;">
                            <table style="width:100%;border-collapse:collapse;font-size:0.92rem;">
                                <thead>
                                    <tr style="border-bottom:2px solid var(--border);text-align:left;">
                                        <th style="padding:10px 12px;">Principle</th>
                                        <th style="padding:10px 12px;">What To Do</th>
                                        <th style="padding:10px 12px;">Threats Mitigated</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border-bottom:1px solid var(--border);">
                                        <td style="padding:10px 12px;"><strong>Encrypt in transit</strong></td>
                                        <td style="padding:10px 12px;">Use TLS/SSL for all network communication</td>
                                        <td style="padding:10px 12px;">Man-in-the-middle, eavesdropping</td>
                                    </tr>
                                    <tr style="border-bottom:1px solid var(--border);">
                                        <td style="padding:10px 12px;"><strong>Encrypt at rest</strong></td>
                                        <td style="padding:10px 12px;">Encrypt databases, file storage, and backups</td>
                                        <td style="padding:10px 12px;">Data breach, unauthorized access</td>
                                    </tr>
                                    <tr style="border-bottom:1px solid var(--border);">
                                        <td style="padding:10px 12px;"><strong>Sanitize inputs</strong></td>
                                        <td style="padding:10px 12px;">Validate and escape all user-provided data</td>
                                        <td style="padding:10px 12px;">XSS, SQL injection</td>
                                    </tr>
                                    <tr style="border-bottom:1px solid var(--border);">
                                        <td style="padding:10px 12px;"><strong>Parameterized queries</strong></td>
                                        <td style="padding:10px 12px;">Use prepared statements; never concatenate SQL</td>
                                        <td style="padding:10px 12px;">SQL injection</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:10px 12px;"><strong>Least privilege</strong></td>
                                        <td style="padding:10px 12px;">Grant minimum permissions needed per role/service</td>
                                        <td style="padding:10px 12px;">Privilege escalation, blast radius</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📎</span> <a href="https://github.com/shieldfy/API-Security-Checklist" target="_blank" rel="noopener">API security checklist</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://github.com/FallibleInc/security-guide-for-developers" target="_blank" rel="noopener">Security guide for developers</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://www.owasp.org/index.php/OWASP_Top_Ten_Cheat_Sheet" target="_blank" rel="noopener">OWASP Top Ten</a></li>
                </ul>
            </div>
        `
    },

};
