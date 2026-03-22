/**
 * Part H: Appendix — Chapters 34–38
 * Powers of Two Table, Latency Numbers, Additional Questions,
 * Real World Architectures, Engineering Blogs
 *
 * Registered into global CHAPTERS_H object.
 */

const CHAPTERS_H = {

    // ================================================================
    // Chapter 34 — Powers of Two Table
    // ================================================================
    'powers-of-two': {
        part: 'Part H',
        title: 'Powers of Two Table',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 34 — Appendix</div>
                <h1>Powers of Two Table</h1>
                <p class="chapter-subtitle">A quick-reference table for back-of-the-envelope calculations — essential for estimating storage, memory, and bandwidth requirements in system design interviews.</p>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Why This Matters
                    </div>
                    <div class="shadcn-alert-description">You'll often be asked to do <strong>back-of-the-envelope estimates</strong> in system design interviews — for example, determining how long it takes to generate 100 image thumbnails from disk, or how much memory a data structure will consume. Knowing powers of two by heart lets you quickly convert between KB, MB, GB, and TB without a calculator.</div>
                </div>

                <h2>Powers of Two Reference</h2>

                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Power</th>
                                <th>Exact Value</th>
                                <th>Approx Value</th>
                                <th>Bytes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="shadcn-badge shadcn-badge-outline">2<sup>7</sup></span></td>
                                <td>128</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td><span class="shadcn-badge shadcn-badge-outline">2<sup>8</sup></span></td>
                                <td>256</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td><span class="shadcn-badge shadcn-badge-blue">2<sup>10</sup></span></td>
                                <td>1,024</td>
                                <td>1 thousand</td>
                                <td><strong>1 KB</strong></td>
                            </tr>
                            <tr>
                                <td><span class="shadcn-badge shadcn-badge-outline">2<sup>16</sup></span></td>
                                <td>65,536</td>
                                <td>—</td>
                                <td>64 KB</td>
                            </tr>
                            <tr>
                                <td><span class="shadcn-badge shadcn-badge-green">2<sup>20</sup></span></td>
                                <td>1,048,576</td>
                                <td>1 million</td>
                                <td><strong>1 MB</strong></td>
                            </tr>
                            <tr>
                                <td><span class="shadcn-badge shadcn-badge-amber">2<sup>30</sup></span></td>
                                <td>1,073,741,824</td>
                                <td>1 billion</td>
                                <td><strong>1 GB</strong></td>
                            </tr>
                            <tr>
                                <td><span class="shadcn-badge shadcn-badge-outline">2<sup>32</sup></span></td>
                                <td>4,294,967,296</td>
                                <td>—</td>
                                <td>4 GB</td>
                            </tr>
                            <tr>
                                <td><span class="shadcn-badge shadcn-badge-destructive">2<sup>40</sup></span></td>
                                <td>1,099,511,627,776</td>
                                <td>1 trillion</td>
                                <td><strong>1 TB</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Quick Mental Math Tips</div>
                        <p class="shadcn-card-description">Useful shortcuts for estimation</p>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px">
                            <li><strong>1 KB</strong> ≈ 1 thousand bytes — a short email or text snippet</li>
                            <li><strong>1 MB</strong> ≈ 1 million bytes — a high-resolution photo or a minute of MP3 audio</li>
                            <li><strong>1 GB</strong> ≈ 1 billion bytes — a movie in SD or ~1000 photos</li>
                            <li><strong>1 TB</strong> ≈ 1 trillion bytes — roughly 500 hours of HD video</li>
                            <li>Each jump of <strong>10 powers</strong> ≈ multiply by <strong>~1000</strong></li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📎</span> <a href="https://en.wikipedia.org/wiki/Power_of_two" target="_blank" rel="noopener">Powers of two</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 35 — Latency Numbers Every Programmer Should Know
    // ================================================================
    'latency-numbers': {
        part: 'Part H',
        title: 'Latency Numbers',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 35 — Appendix</div>
                <h1>Latency Numbers Every Programmer Should Know</h1>
                <p class="chapter-subtitle">Memorize these order-of-magnitude latency figures to make quick, informed decisions during system design discussions.</p>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Core Reference
                    </div>
                    <div class="shadcn-alert-description">These numbers give you an intuitive sense of the <strong>relative costs</strong> of different operations. Knowing that a main memory reference is ~200× faster than an SSD read can guide caching and architecture decisions instantly.</div>
                </div>

                <h2>Latency Comparison Numbers</h2>

                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Operation</th>
                                <th>Latency (ns)</th>
                                <th>Latency (μs)</th>
                                <th>Latency (ms)</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>L1 cache reference</td>
                                <td><span class="shadcn-badge shadcn-badge-green">0.5 ns</span></td>
                                <td>—</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>Branch mispredict</td>
                                <td><span class="shadcn-badge shadcn-badge-green">5 ns</span></td>
                                <td>—</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>L2 cache reference</td>
                                <td><span class="shadcn-badge shadcn-badge-green">7 ns</span></td>
                                <td>—</td>
                                <td>—</td>
                                <td>14× L1 cache</td>
                            </tr>
                            <tr>
                                <td>Mutex lock/unlock</td>
                                <td><span class="shadcn-badge shadcn-badge-green">25 ns</span></td>
                                <td>—</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>Main memory reference</td>
                                <td><span class="shadcn-badge shadcn-badge-green">100 ns</span></td>
                                <td>—</td>
                                <td>—</td>
                                <td>20× L2 cache, 200× L1 cache</td>
                            </tr>
                            <tr>
                                <td>Compress 1K bytes with Zippy</td>
                                <td><span class="shadcn-badge shadcn-badge-blue">10,000 ns</span></td>
                                <td>10 μs</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>Send 1 KB over 1 Gbps network</td>
                                <td><span class="shadcn-badge shadcn-badge-blue">10,000 ns</span></td>
                                <td>10 μs</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>Read 4 KB randomly from SSD*</td>
                                <td><span class="shadcn-badge shadcn-badge-blue">150,000 ns</span></td>
                                <td>150 μs</td>
                                <td>—</td>
                                <td>~1 GB/sec SSD</td>
                            </tr>
                            <tr>
                                <td>Read 1 MB sequentially from memory</td>
                                <td><span class="shadcn-badge shadcn-badge-blue">250,000 ns</span></td>
                                <td>250 μs</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>Round trip within same datacenter</td>
                                <td><span class="shadcn-badge shadcn-badge-blue">500,000 ns</span></td>
                                <td>500 μs</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>Read 1 MB sequentially from SSD*</td>
                                <td><span class="shadcn-badge shadcn-badge-amber">1,000,000 ns</span></td>
                                <td>1,000 μs</td>
                                <td>1 ms</td>
                                <td>~1 GB/sec SSD, 4× memory</td>
                            </tr>
                            <tr>
                                <td>HDD seek</td>
                                <td><span class="shadcn-badge shadcn-badge-amber">10,000,000 ns</span></td>
                                <td>10,000 μs</td>
                                <td>10 ms</td>
                                <td>20× datacenter roundtrip</td>
                            </tr>
                            <tr>
                                <td>Read 1 MB sequentially from 1 Gbps</td>
                                <td><span class="shadcn-badge shadcn-badge-amber">10,000,000 ns</span></td>
                                <td>10,000 μs</td>
                                <td>10 ms</td>
                                <td>40× memory, 10× SSD</td>
                            </tr>
                            <tr>
                                <td>Read 1 MB sequentially from HDD</td>
                                <td><span class="shadcn-badge shadcn-badge-amber">30,000,000 ns</span></td>
                                <td>30,000 μs</td>
                                <td>30 ms</td>
                                <td>120× memory, 30× SSD</td>
                            </tr>
                            <tr>
                                <td>Send packet CA → Netherlands → CA</td>
                                <td><span class="shadcn-badge shadcn-badge-destructive">150,000,000 ns</span></td>
                                <td>150,000 μs</td>
                                <td>150 ms</td>
                                <td>—</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="shadcn-card" style="margin-top:1.5rem;">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Unit Conversions</div>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px;margin:0">
                            <li><strong>1 ns</strong> = 10<sup>−9</sup> seconds</li>
                            <li><strong>1 μs</strong> = 10<sup>−6</sup> seconds = 1,000 ns</li>
                            <li><strong>1 ms</strong> = 10<sup>−3</sup> seconds = 1,000 μs = 1,000,000 ns</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h2>Handy Metrics</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Throughput &amp; Round-Trip Rules of Thumb</div>
                        <p class="shadcn-card-description">Derived from the latency numbers above</p>
                    </div>
                    <div class="shadcn-card-content">
                        <ul style="padding-left:18px">
                            <li><span class="shadcn-badge shadcn-badge-amber" style="margin-right:6px;">HDD</span> Read sequentially from HDD at <strong>30 MB/s</strong></li>
                            <li><span class="shadcn-badge shadcn-badge-blue" style="margin-right:6px;">Network</span> Read sequentially from 1 Gbps Ethernet at <strong>100 MB/s</strong></li>
                            <li><span class="shadcn-badge shadcn-badge-green" style="margin-right:6px;">SSD</span> Read sequentially from SSD at <strong>1 GB/s</strong></li>
                            <li><span class="shadcn-badge shadcn-badge-green" style="margin-right:6px;">Memory</span> Read sequentially from main memory at <strong>4 GB/s</strong></li>
                            <li><span class="shadcn-badge shadcn-badge-destructive" style="margin-right:6px;">WAN</span> <strong>6–7</strong> world-wide round trips per second</li>
                            <li><span class="shadcn-badge shadcn-badge-blue" style="margin-right:6px;">DC</span> <strong>2,000</strong> round trips per second within a data center</li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📎</span> <a href="https://gist.github.com/jboner/2841832" target="_blank" rel="noopener">Latency numbers every programmer should know - 1</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://gist.github.com/hellerbarde/2843375" target="_blank" rel="noopener">Latency numbers every programmer should know - 2</a></li>
                    <li><span class="resource-icon">📎</span> <a href="http://www.cs.cornell.edu/projects/ladis2009/talks/dean-keynote-ladis2009.pdf" target="_blank" rel="noopener">Designs, lessons, and advice from building large distributed systems</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://static.googleusercontent.com/media/research.google.com/en//people/jeff/stanford-295-talk.pdf" target="_blank" rel="noopener">Software Engineering Advice from Building Large-Scale Distributed Systems</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 36 — Additional System Design Interview Questions
    // ================================================================
    'additional-questions': {
        part: 'Part H',
        title: 'Additional Questions',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 36 — Appendix</div>
                <h1>Additional System Design Interview Questions</h1>
                <p class="chapter-subtitle">Common system design interview questions with links to resources on how to solve each — use these for extra practice beyond the core exercises.</p>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Practice Tip
                    </div>
                    <div class="shadcn-alert-description">Each of these questions can be approached using the same structured framework: <strong>clarify requirements → estimate scale → define API → design high-level architecture → deep-dive into components → identify bottlenecks</strong>. The linked references show how experts think through each problem.</div>
                </div>

                <h2>Questions &amp; References</h2>

                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Reference(s)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Design a file sync service like Dropbox</td>
                                <td><a href="https://www.youtube.com/watch?v=PE4gwstWhmc" target="_blank" rel="noopener">youtube.com</a></td>
                            </tr>
                            <tr>
                                <td>Design a search engine like Google</td>
                                <td>
                                    <a href="http://queue.acm.org/detail.cfm?id=988407" target="_blank" rel="noopener">queue.acm.org</a><br/>
                                    <a href="http://programmers.stackexchange.com/questions/38324/interview-question-how-would-you-implement-google-search" target="_blank" rel="noopener">stackexchange.com</a><br/>
                                    <a href="http://www.ardendertat.com/2012/01/11/implementing-search-engines/" target="_blank" rel="noopener">ardendertat.com</a><br/>
                                    <a href="http://infolab.stanford.edu/~backrub/google.html" target="_blank" rel="noopener">stanford.edu</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Design a scalable web crawler like Google</td>
                                <td><a href="https://www.quora.com/How-can-I-build-a-web-crawler-from-scratch" target="_blank" rel="noopener">quora.com</a></td>
                            </tr>
                            <tr>
                                <td>Design Google docs</td>
                                <td>
                                    <a href="https://code.google.com/p/google-mobwrite/" target="_blank" rel="noopener">code.google.com</a><br/>
                                    <a href="https://neil.fraser.name/writing/sync/" target="_blank" rel="noopener">neil.fraser.name</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Design a key-value store like Redis</td>
                                <td>
                                    <a href="http://codecapsule.com/2012/11/07/ikvs-implementing-a-key-value-store-table-of-contents/" target="_blank" rel="noopener">codecapsule.com</a><br/>
                                    <a href="https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf" target="_blank" rel="noopener">allthingsdistributed.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Design a cache system like Memcached</td>
                                <td><a href="http://www.slideshare.net/oemebamo/introduction-to-memcached" target="_blank" rel="noopener">slideshare.net</a></td>
                            </tr>
                            <tr>
                                <td>Design a recommendation system like Amazon's</td>
                                <td>
                                    <a href="https://web.archive.org/web/20170406065247/http://tech.hulu.com/blog/2011/09/19/recommendation-system.html" target="_blank" rel="noopener">hulu.com</a><br/>
                                    <a href="http://ijcai13.org/files/tutorial_slides/td3.pdf" target="_blank" rel="noopener">ijcai13.org</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Design a tinyurl system like Bitly</td>
                                <td><a href="http://n00tc0d3r.blogspot.com/" target="_blank" rel="noopener">n00tc0d3r.blogspot.com</a></td>
                            </tr>
                            <tr>
                                <td>Design a chat app like WhatsApp</td>
                                <td><a href="http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html" target="_blank" rel="noopener">highscalability.com</a></td>
                            </tr>
                            <tr>
                                <td>Design a picture sharing system like Instagram</td>
                                <td>
                                    <a href="http://highscalability.com/flickr-architecture" target="_blank" rel="noopener">highscalability.com</a><br/>
                                    <a href="http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html" target="_blank" rel="noopener">highscalability.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Design the Facebook news feed function</td>
                                <td>
                                    <a href="http://www.quora.com/What-are-best-practices-for-building-something-like-a-News-Feed" target="_blank" rel="noopener">quora.com</a><br/>
                                    <a href="http://www.quora.com/Activity-Streams/What-are-the-scaling-issues-to-keep-in-mind-while-developing-a-social-network-feed" target="_blank" rel="noopener">quora.com</a><br/>
                                    <a href="http://www.slideshare.net/danmckinley/etsy-activity-feeds-architecture" target="_blank" rel="noopener">slideshare.net</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Design the Facebook timeline function</td>
                                <td>
                                    <a href="https://www.facebook.com/note.php?note_id=10150468255628920" target="_blank" rel="noopener">facebook.com</a><br/>
                                    <a href="http://highscalability.com/blog/2012/1/23/facebook-timeline-brought-to-you-by-the-power-of-denormaliza.html" target="_blank" rel="noopener">highscalability.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Design the Facebook chat function</td>
                                <td>
                                    <a href="http://www.erlang-factory.com/upload/presentations/31/EugeneLetuchy-ErlangatFacebook.pdf" target="_blank" rel="noopener">erlang-factory.com</a><br/>
                                    <a href="https://www.facebook.com/note.php?note_id=14218138919&id=9445547199&index=0" target="_blank" rel="noopener">facebook.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Design a graph search function like Facebook's</td>
                                <td>
                                    <a href="https://www.facebook.com/notes/facebook-engineering/under-the-hood-building-out-the-infrastructure-for-graph-search/10151347573598920" target="_blank" rel="noopener">facebook.com</a><br/>
                                    <a href="https://www.facebook.com/notes/facebook-engineering/under-the-hood-indexing-and-ranking-in-graph-search/10151361720763920" target="_blank" rel="noopener">facebook.com</a><br/>
                                    <a href="https://www.facebook.com/notes/facebook-engineering/under-the-hood-the-natural-language-interface-of-graph-search/10151432733048920" target="_blank" rel="noopener">facebook.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Design a content delivery network like CloudFlare</td>
                                <td><a href="https://figshare.com/articles/Globally_distributed_content_delivery/6605972" target="_blank" rel="noopener">figshare.com</a></td>
                            </tr>
                            <tr>
                                <td>Design a trending topic system like Twitter's</td>
                                <td>
                                    <a href="http://www.michael-noll.com/blog/2013/01/18/implementing-real-time-trending-topics-in-storm/" target="_blank" rel="noopener">michael-noll.com</a><br/>
                                    <a href="http://snikolov.wordpress.com/2012/11/14/early-detection-of-twitter-trends/" target="_blank" rel="noopener">snikolov.wordpress.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Design a random ID generation system</td>
                                <td>
                                    <a href="https://blog.twitter.com/2010/announcing-snowflake" target="_blank" rel="noopener">blog.twitter.com</a><br/>
                                    <a href="https://github.com/twitter/snowflake/" target="_blank" rel="noopener">github.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Return the top k requests during a time interval</td>
                                <td>
                                    <a href="https://www.cs.ucsb.edu/sites/default/files/documents/2005-23.pdf" target="_blank" rel="noopener">cs.ucsb.edu</a><br/>
                                    <a href="http://davis.wpi.edu/xmdv/docs/EDBT11-diyang.pdf" target="_blank" rel="noopener">wpi.edu</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Design a system that serves data from multiple data centers</td>
                                <td><a href="http://highscalability.com/blog/2009/8/24/how-google-serves-data-from-multiple-datacenters.html" target="_blank" rel="noopener">highscalability.com</a></td>
                            </tr>
                            <tr>
                                <td>Design an online multiplayer card game</td>
                                <td>
                                    <a href="https://web.archive.org/web/20180929181117/http://www.indieflashblog.com/how-to-create-an-asynchronous-multiplayer-game.html" target="_blank" rel="noopener">indieflashblog.com</a><br/>
                                    <a href="http://buildnewgames.com/real-time-multiplayer/" target="_blank" rel="noopener">buildnewgames.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Design a garbage collection system</td>
                                <td>
                                    <a href="http://journal.stuffwithstuff.com/2013/12/08/babys-first-garbage-collector/" target="_blank" rel="noopener">stuffwithstuff.com</a><br/>
                                    <a href="http://courses.cs.washington.edu/courses/csep521/07wi/prj/rick.pdf" target="_blank" rel="noopener">washington.edu</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Design an API rate limiter</td>
                                <td><a href="https://stripe.com/blog/rate-limiters" target="_blank" rel="noopener">stripe.com/blog/</a></td>
                            </tr>
                            <tr>
                                <td>Design a Stock Exchange (like NASDAQ or Binance)</td>
                                <td>
                                    <a href="https://youtu.be/b1e4t2k2KJY" target="_blank" rel="noopener">Jane Street (YouTube)</a><br/>
                                    <a href="https://around25.com/blog/building-a-trading-engine-for-a-crypto-exchange/" target="_blank" rel="noopener">Golang Implementation</a><br/>
                                    <a href="http://bhomnick.net/building-a-simple-limit-order-in-go/" target="_blank" rel="noopener">Go Implementation</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-card">
                    <div class="shadcn-card-content">
                        <p style="margin:0">Want to contribute a new question? See the <strong>Contributing</strong> section in the main README for guidelines on adding system design interview questions.</p>
                    </div>
                </div>
            </div>
        `
    },

    // ================================================================
    // Chapter 37 — Real World Architectures
    // ================================================================
    'real-world-architectures': {
        part: 'Part H',
        title: 'Real World Architectures',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 37 — Appendix</div>
                <h1>Real World Architectures</h1>
                <p class="chapter-subtitle">Articles on how real-world systems are designed — study the shared principles, common technologies, and patterns across these architectures.</p>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        How to Study These
                    </div>
                    <div class="shadcn-alert-description">Don't focus on nitty-gritty details for the following articles. Instead: <strong>identify shared principles</strong>, common technologies, and patterns. Study what problems are solved by each component, where it works, and where it doesn't. Review the <strong>lessons learned</strong>.</div>
                </div>

                <div class="img-container" style="text-align:center;margin:1.5rem 0;">
                    <img src="../images/TcUo2fw.png" class="zoomable" alt="Twitter timelines at scale" style="max-width:620px;width:100%;border-radius:8px;">
                    <p style="font-size:0.85rem;color:var(--muted-foreground);margin-top:0.5rem;"><em><a href="https://www.infoq.com/presentations/Twitter-Timeline-Scalability" target="_blank" rel="noopener">Source: Twitter timelines at scale</a></em></p>
                </div>

                <h2>System Architectures by Category</h2>

                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>System</th>
                                <th>Reference(s)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowspan="3"><span class="shadcn-badge shadcn-badge-blue">Data Processing</span></td>
                                <td><strong>MapReduce</strong> — Distributed data processing from Google</td>
                                <td><a href="http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/mapreduce-osdi04.pdf" target="_blank" rel="noopener">research.google.com</a></td>
                            </tr>
                            <tr>
                                <td><strong>Spark</strong> — Distributed data processing from Databricks</td>
                                <td><a href="http://www.slideshare.net/AGrishchenko/apache-spark-architecture" target="_blank" rel="noopener">slideshare.net</a></td>
                            </tr>
                            <tr>
                                <td><strong>Storm</strong> — Distributed data processing from Twitter</td>
                                <td><a href="http://www.slideshare.net/previa/storm-16094009" target="_blank" rel="noopener">slideshare.net</a></td>
                            </tr>
                            <tr>
                                <td rowspan="8"><span class="shadcn-badge shadcn-badge-green">Data Store</span></td>
                                <td><strong>Bigtable</strong> — Distributed column-oriented database from Google</td>
                                <td><a href="http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf" target="_blank" rel="noopener">harvard.edu</a></td>
                            </tr>
                            <tr>
                                <td><strong>HBase</strong> — Open source implementation of Bigtable</td>
                                <td><a href="http://www.slideshare.net/alexbaranau/intro-to-hbase" target="_blank" rel="noopener">slideshare.net</a></td>
                            </tr>
                            <tr>
                                <td><strong>Cassandra</strong> — Distributed column-oriented database from Facebook</td>
                                <td><a href="http://www.slideshare.net/planetcassandra/cassandra-introduction-features-30103666" target="_blank" rel="noopener">slideshare.net</a></td>
                            </tr>
                            <tr>
                                <td><strong>DynamoDB</strong> — Document-oriented database from Amazon</td>
                                <td><a href="http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf" target="_blank" rel="noopener">harvard.edu</a></td>
                            </tr>
                            <tr>
                                <td><strong>MongoDB</strong> — Document-oriented database</td>
                                <td><a href="http://www.slideshare.net/mdirolf/introduction-to-mongodb" target="_blank" rel="noopener">slideshare.net</a></td>
                            </tr>
                            <tr>
                                <td><strong>Spanner</strong> — Globally-distributed database from Google</td>
                                <td><a href="http://research.google.com/archive/spanner-osdi2012.pdf" target="_blank" rel="noopener">research.google.com</a></td>
                            </tr>
                            <tr>
                                <td><strong>Memcached</strong> — Distributed memory caching system</td>
                                <td><a href="http://www.slideshare.net/oemebamo/introduction-to-memcached" target="_blank" rel="noopener">slideshare.net</a></td>
                            </tr>
                            <tr>
                                <td><strong>Redis</strong> — Distributed memory caching system with persistence and value types</td>
                                <td><a href="http://www.slideshare.net/dvirsky/introduction-to-redis" target="_blank" rel="noopener">slideshare.net</a></td>
                            </tr>
                            <tr>
                                <td rowspan="2"><span class="shadcn-badge shadcn-badge-amber">File System</span></td>
                                <td><strong>Google File System (GFS)</strong> — Distributed file system</td>
                                <td><a href="http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/gfs-sosp2003.pdf" target="_blank" rel="noopener">research.google.com</a></td>
                            </tr>
                            <tr>
                                <td><strong>Hadoop File System (HDFS)</strong> — Open source implementation of GFS</td>
                                <td><a href="http://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener">apache.org</a></td>
                            </tr>
                            <tr>
                                <td rowspan="4"><span class="shadcn-badge shadcn-badge-outline">Misc</span></td>
                                <td><strong>Chubby</strong> — Lock service for loosely-coupled distributed systems from Google</td>
                                <td><a href="http://static.googleusercontent.com/external_content/untrusted_dlcp/research.google.com/en/us/archive/chubby-osdi06.pdf" target="_blank" rel="noopener">research.google.com</a></td>
                            </tr>
                            <tr>
                                <td><strong>Dapper</strong> — Distributed systems tracing infrastructure</td>
                                <td><a href="http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/36356.pdf" target="_blank" rel="noopener">research.google.com</a></td>
                            </tr>
                            <tr>
                                <td><strong>Kafka</strong> — Pub/sub message queue from LinkedIn</td>
                                <td><a href="http://www.slideshare.net/mumrah/kafka-talk-tri-hug" target="_blank" rel="noopener">slideshare.net</a></td>
                            </tr>
                            <tr>
                                <td><strong>Zookeeper</strong> — Centralized infrastructure and services enabling synchronization</td>
                                <td><a href="http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper" target="_blank" rel="noopener">slideshare.net</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <hr class="shadcn-separator">

                <h2>Company Architectures</h2>

                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Reference(s)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Amazon</strong></td>
                                <td><a href="http://highscalability.com/amazon-architecture" target="_blank" rel="noopener">Amazon architecture</a></td>
                            </tr>
                            <tr>
                                <td><strong>Cinchcast</strong></td>
                                <td><a href="http://highscalability.com/blog/2012/7/16/cinchcast-architecture-producing-1500-hours-of-audio-every-d.html" target="_blank" rel="noopener">Producing 1,500 hours of audio every day</a></td>
                            </tr>
                            <tr>
                                <td><strong>DataSift</strong></td>
                                <td><a href="http://highscalability.com/blog/2011/11/29/datasift-architecture-realtime-datamining-at-120000-tweets-p.html" target="_blank" rel="noopener">Realtime datamining at 120,000 tweets per second</a></td>
                            </tr>
                            <tr>
                                <td><strong>Dropbox</strong></td>
                                <td><a href="https://www.youtube.com/watch?v=PE4gwstWhmc" target="_blank" rel="noopener">How we've scaled Dropbox</a></td>
                            </tr>
                            <tr>
                                <td><strong>ESPN</strong></td>
                                <td><a href="http://highscalability.com/blog/2013/11/4/espns-architecture-at-scale-operating-at-100000-duh-nuh-nuhs.html" target="_blank" rel="noopener">Operating at 100,000 duh nuh nuhs per second</a></td>
                            </tr>
                            <tr>
                                <td><strong>Google</strong></td>
                                <td><a href="http://highscalability.com/google-architecture" target="_blank" rel="noopener">Google architecture</a></td>
                            </tr>
                            <tr>
                                <td><strong>Instagram</strong></td>
                                <td>
                                    <a href="http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html" target="_blank" rel="noopener">14 million users, terabytes of photos</a><br/>
                                    <a href="http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances" target="_blank" rel="noopener">What powers Instagram</a>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Justin.tv</strong></td>
                                <td><a href="http://highscalability.com/blog/2010/3/16/justintvs-live-video-broadcasting-architecture.html" target="_blank" rel="noopener">Justin.Tv's live video broadcasting architecture</a></td>
                            </tr>
                            <tr>
                                <td><strong>Facebook</strong></td>
                                <td>
                                    <a href="https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/key-value/fb-memcached-nsdi-2013.pdf" target="_blank" rel="noopener">Scaling memcached at Facebook</a><br/>
                                    <a href="https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/data-store/tao-facebook-distributed-datastore-atc-2013.pdf" target="_blank" rel="noopener">TAO: Facebook's distributed data store for the social graph</a><br/>
                                    <a href="https://www.usenix.org/legacy/event/osdi10/tech/full_papers/Beaver.pdf" target="_blank" rel="noopener">Facebook's photo storage</a><br/>
                                    <a href="http://highscalability.com/blog/2016/6/27/how-facebook-live-streams-to-800000-simultaneous-viewers.html" target="_blank" rel="noopener">How Facebook Live Streams To 800,000 Simultaneous Viewers</a>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Flickr</strong></td>
                                <td><a href="http://highscalability.com/flickr-architecture" target="_blank" rel="noopener">Flickr architecture</a></td>
                            </tr>
                            <tr>
                                <td><strong>Mailbox</strong></td>
                                <td><a href="http://highscalability.com/blog/2013/6/18/scaling-mailbox-from-0-to-one-million-users-in-6-weeks-and-1.html" target="_blank" rel="noopener">From 0 to one million users in 6 weeks</a></td>
                            </tr>
                            <tr>
                                <td><strong>Netflix</strong></td>
                                <td>
                                    <a href="http://highscalability.com/blog/2015/11/9/a-360-degree-view-of-the-entire-netflix-stack.html" target="_blank" rel="noopener">A 360 Degree View Of The Entire Netflix Stack</a><br/>
                                    <a href="http://highscalability.com/blog/2017/12/11/netflix-what-happens-when-you-press-play.html" target="_blank" rel="noopener">Netflix: What Happens When You Press Play?</a>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Pinterest</strong></td>
                                <td>
                                    <a href="http://highscalability.com/blog/2013/4/15/scaling-pinterest-from-0-to-10s-of-billions-of-page-views-a.html" target="_blank" rel="noopener">From 0 to 10s of billions of page views a month</a><br/>
                                    <a href="http://highscalability.com/blog/2012/5/21/pinterest-architecture-update-18-million-visitors-10x-growth.html" target="_blank" rel="noopener">18 million visitors, 10x growth, 12 employees</a>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Playfish</strong></td>
                                <td><a href="http://highscalability.com/blog/2010/9/21/playfishs-social-gaming-architecture-50-million-monthly-user.html" target="_blank" rel="noopener">50 million monthly users and growing</a></td>
                            </tr>
                            <tr>
                                <td><strong>PlentyOfFish</strong></td>
                                <td><a href="http://highscalability.com/plentyoffish-architecture" target="_blank" rel="noopener">PlentyOfFish architecture</a></td>
                            </tr>
                            <tr>
                                <td><strong>Salesforce</strong></td>
                                <td><a href="http://highscalability.com/blog/2013/9/23/salesforce-architecture-how-they-handle-13-billion-transacti.html" target="_blank" rel="noopener">How they handle 1.3 billion transactions a day</a></td>
                            </tr>
                            <tr>
                                <td><strong>Stack Overflow</strong></td>
                                <td><a href="http://highscalability.com/blog/2009/8/5/stack-overflow-architecture.html" target="_blank" rel="noopener">Stack Overflow architecture</a></td>
                            </tr>
                            <tr>
                                <td><strong>TripAdvisor</strong></td>
                                <td><a href="http://highscalability.com/blog/2011/6/27/tripadvisor-architecture-40m-visitors-200m-dynamic-page-view.html" target="_blank" rel="noopener">40M visitors, 200M dynamic page views, 30TB data</a></td>
                            </tr>
                            <tr>
                                <td><strong>Tumblr</strong></td>
                                <td><a href="http://highscalability.com/blog/2012/2/13/tumblr-architecture-15-billion-page-views-a-month-and-harder.html" target="_blank" rel="noopener">15 billion page views a month</a></td>
                            </tr>
                            <tr>
                                <td><strong>Twitter</strong></td>
                                <td>
                                    <a href="http://highscalability.com/scaling-twitter-making-twitter-10000-percent-faster" target="_blank" rel="noopener">Making Twitter 10000 percent faster</a><br/>
                                    <a href="http://highscalability.com/blog/2011/12/19/how-twitter-stores-250-million-tweets-a-day-using-mysql.html" target="_blank" rel="noopener">Storing 250 million tweets a day using MySQL</a><br/>
                                    <a href="http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html" target="_blank" rel="noopener">150M active users, 300K QPS, a 22 MB/S firehose</a><br/>
                                    <a href="https://www.infoq.com/presentations/Twitter-Timeline-Scalability" target="_blank" rel="noopener">Timelines at scale</a><br/>
                                    <a href="https://www.youtube.com/watch?v=5cKTP36HVgI" target="_blank" rel="noopener">Big and small data at Twitter</a><br/>
                                    <a href="https://www.youtube.com/watch?v=z8LU0Cj6BOU" target="_blank" rel="noopener">Operations at Twitter: scaling beyond 100 million users</a><br/>
                                    <a href="http://highscalability.com/blog/2016/4/20/how-twitter-handles-3000-images-per-second.html" target="_blank" rel="noopener">How Twitter Handles 3,000 Images Per Second</a>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Uber</strong></td>
                                <td>
                                    <a href="http://highscalability.com/blog/2015/9/14/how-uber-scales-their-real-time-market-platform.html" target="_blank" rel="noopener">How Uber scales their real-time market platform</a><br/>
                                    <a href="http://highscalability.com/blog/2016/10/12/lessons-learned-from-scaling-uber-to-2000-engineers-1000-ser.html" target="_blank" rel="noopener">Lessons Learned From Scaling Uber To 2000 Engineers, 1000 Services, And 8000 Git Repositories</a>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>WhatsApp</strong></td>
                                <td><a href="http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html" target="_blank" rel="noopener">The WhatsApp architecture Facebook bought for $19 billion</a></td>
                            </tr>
                            <tr>
                                <td><strong>YouTube</strong></td>
                                <td>
                                    <a href="https://www.youtube.com/watch?v=w5WVu624fY8" target="_blank" rel="noopener">YouTube scalability</a><br/>
                                    <a href="http://highscalability.com/youtube-architecture" target="_blank" rel="noopener">YouTube architecture</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },

    // ================================================================
    // Chapter 38 — Engineering Blogs
    // ================================================================
    'engineering-blogs': {
        part: 'Part H',
        title: 'Engineering Blogs',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 38 — Appendix</div>
                <h1>Engineering Blogs</h1>
                <p class="chapter-subtitle">Architectures for companies you are interviewing with — questions you encounter might be from the same domain.</p>

                <hr class="shadcn-separator">

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Interview Prep Tip
                    </div>
                    <div class="shadcn-alert-description">Before interviewing at a company, <strong>read their engineering blog</strong>. It gives you insight into the technologies they use, the scale they operate at, and the problems they've solved — all of which can come up in system design interviews.</div>
                </div>

                <h2>Engineering Blogs Directory</h2>

                <div class="shadcn-card">
                    <div class="shadcn-card-header">
                        <div class="shadcn-card-title">Company Engineering Blogs</div>
                        <p class="shadcn-card-description">Alphabetical list of engineering blogs from top tech companies</p>
                    </div>
                    <div class="shadcn-card-content">
                        <ul class="resource-list">
                            <li><span class="resource-icon">📝</span> <a href="http://nerds.airbnb.com/" target="_blank" rel="noopener">Airbnb Engineering</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://developer.atlassian.com/blog/" target="_blank" rel="noopener">Atlassian Developers</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://aws.amazon.com/blogs/aws/" target="_blank" rel="noopener">AWS Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://word.bitly.com/" target="_blank" rel="noopener">Bitly Engineering Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://blog.box.com/blog/category/engineering" target="_blank" rel="noopener">Box Blogs</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://blog.cloudera.com/" target="_blank" rel="noopener">Cloudera Developer Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://tech.dropbox.com/" target="_blank" rel="noopener">Dropbox Tech Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://www.quora.com/q/quoraengineering" target="_blank" rel="noopener">Engineering at Quora</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://www.ebaytechblog.com/" target="_blank" rel="noopener">eBay Tech Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://blog.evernote.com/tech/" target="_blank" rel="noopener">Evernote Tech Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://codeascraft.com/" target="_blank" rel="noopener">Etsy Code as Craft</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://www.facebook.com/Engineering" target="_blank" rel="noopener">Facebook Engineering</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://code.flickr.net/" target="_blank" rel="noopener">Flickr Code</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://engineering.foursquare.com/" target="_blank" rel="noopener">Foursquare Engineering Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://github.blog/category/engineering" target="_blank" rel="noopener">GitHub Engineering Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://googleresearch.blogspot.com/" target="_blank" rel="noopener">Google Research Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://engineering.groupon.com/" target="_blank" rel="noopener">Groupon Engineering Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://engineering.heroku.com/" target="_blank" rel="noopener">Heroku Engineering Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://product.hubspot.com/blog/topic/engineering" target="_blank" rel="noopener">HubSpot Engineering Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://highscalability.com/" target="_blank" rel="noopener">High Scalability</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://instagram-engineering.tumblr.com/" target="_blank" rel="noopener">Instagram Engineering</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://software.intel.com/en-us/blogs/" target="_blank" rel="noopener">Intel Software Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://blogs.janestreet.com/category/ocaml/" target="_blank" rel="noopener">Jane Street Tech Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://engineering.linkedin.com/blog" target="_blank" rel="noopener">LinkedIn Engineering</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://engineering.microsoft.com/" target="_blank" rel="noopener">Microsoft Engineering</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://blogs.msdn.microsoft.com/pythonengineering/" target="_blank" rel="noopener">Microsoft Python Engineering</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://techblog.netflix.com/" target="_blank" rel="noopener">Netflix Tech Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://developer.paypal.com/community/blog/" target="_blank" rel="noopener">PayPal Developer Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://medium.com/@Pinterest_Engineering" target="_blank" rel="noopener">Pinterest Engineering Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://www.redditblog.com/" target="_blank" rel="noopener">Reddit Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://developer.salesforce.com/blogs/engineering/" target="_blank" rel="noopener">Salesforce Engineering Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://slack.engineering/" target="_blank" rel="noopener">Slack Engineering Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://labs.spotify.com/" target="_blank" rel="noopener">Spotify Labs</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://stripe.com/blog/engineering" target="_blank" rel="noopener">Stripe Engineering Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://www.twilio.com/engineering" target="_blank" rel="noopener">Twilio Engineering Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://blog.twitter.com/engineering/" target="_blank" rel="noopener">Twitter Engineering</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://eng.uber.com/" target="_blank" rel="noopener">Uber Engineering Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://yahooeng.tumblr.com/" target="_blank" rel="noopener">Yahoo Engineering Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="http://engineeringblog.yelp.com/" target="_blank" rel="noopener">Yelp Engineering Blog</a></li>
                            <li><span class="resource-icon">📝</span> <a href="https://www.zynga.com/blogs/engineering" target="_blank" rel="noopener">Zynga Engineering Blog</a></li>
                        </ul>
                    </div>
                </div>

                <hr class="shadcn-separator">

                <div class="shadcn-card">
                    <div class="shadcn-card-content">
                        <p style="margin:0">Looking to add a blog? To avoid duplicating work, consider adding your company blog to: <a href="https://github.com/kilimchoi/engineering-blogs" target="_blank" rel="noopener"><strong>kilimchoi/engineering-blogs</strong></a></p>
                    </div>
                </div>
            </div>
        `
    },

};
