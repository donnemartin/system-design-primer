/**
 * Part A: Getting Started — Chapters 01–04
 * Motivation, Anki Flashcards, Study Guide, Interview Approach
 *
 * Registered into global CHAPTERS_A object.
 */

const CHAPTERS_A = {

    // ================================================================
    // Chapter 01 — Motivation
    // ================================================================
    'motivation': {
        part: 'Part A',
        title: 'Motivation',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 01 — Getting Started</div>
                <h1>Motivation</h1>
                <p class="chapter-subtitle">Why learn system design? Understanding how to build large-scale systems is one of the most valuable skills for any software engineer.</p>

                <hr class="shadcn-separator">

                <h2>Learn How to Design Large-Scale Systems</h2>
                <p>Learning how to design scalable systems will help you become a <strong>better engineer</strong>.</p>
                <p>System design is a broad topic. There are a <strong>vast number of resources scattered throughout the web</strong> on system design principles.</p>
                <p>This course is an <strong>organized collection</strong> of resources to help you learn how to build systems at scale.</p>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Key Insight
                    </div>
                    <div class="shadcn-alert-description">System design isn't just for interviews — it's the foundation of building reliable, scalable software in the real world.</div>
                </div>

                <h2>Learn from the Open Source Community</h2>
                <p>This is a continually updated, open source project. Contributions are welcome! The best way to learn is by engaging with the community and seeing how real systems are built.</p>

                <h2>Prep for the System Design Interview</h2>
                <p>In addition to coding interviews, system design is a <strong>required component</strong> of the <strong>technical interview process</strong> at many tech companies.</p>
                <p><strong>Practice common system design interview questions</strong> and <strong>compare</strong> your results with <strong>sample solutions</strong>: discussions, code, and diagrams.</p>

                <h3>What You'll Learn</h3>
                <div class="concept-grid">
                    <div class="concept-card">
                        <div class="concept-card-icon">📚</div>
                        <h4>Study Guide</h4>
                        <p>A structured study plan for short, medium, and long timelines.</p>
                    </div>
                    <div class="concept-card">
                        <div class="concept-card-icon">🎯</div>
                        <h4>Interview Approach</h4>
                        <p>Step-by-step methodology for tackling system design questions.</p>
                    </div>
                    <div class="concept-card">
                        <div class="concept-card-icon">💡</div>
                        <h4>Design Problems with Solutions</h4>
                        <p>Real-world system design problems with detailed walkthroughs.</p>
                    </div>
                    <div class="concept-card">
                        <div class="concept-card-icon">🏗️</div>
                        <h4>Core Concepts</h4>
                        <p>In-depth coverage of scalability, caching, databases, networking, and more.</p>
                    </div>
                </div>

                <h2>Course Overview</h2>
                <p>This interactive course is organized into the following parts:</p>

                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr><th>Part</th><th>Topics</th><th>Chapters</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>A</strong></td><td>Getting Started</td><td>Motivation, Flashcards, Study Guide, Interview Approach</td></tr>
                            <tr><td><strong>B</strong></td><td>Core Concepts</td><td>Performance, Latency, Availability, Consistency Patterns</td></tr>
                            <tr><td><strong>C</strong></td><td>Infrastructure</td><td>DNS, CDN, Load Balancer, Reverse Proxy</td></tr>
                            <tr><td><strong>D</strong></td><td>Data Layer</td><td>Application Layer, Database, Cache, Asynchronism</td></tr>
                            <tr><td><strong>E</strong></td><td>Communication</td><td>TCP, UDP, RPC, REST, Security</td></tr>
                            <tr><td><strong>F</strong></td><td>Practice Problems</td><td>8 system design problems with solutions</td></tr>
                            <tr><td><strong>G</strong></td><td>OO Design</td><td>6 object-oriented design problems</td></tr>
                            <tr><td><strong>H</strong></td><td>Appendix</td><td>Reference tables, additional questions, real-world architectures</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="callout callout-tip">
                    <div class="callout-title">✅ Getting Started</div>
                    <p>Ready to begin? Click <strong>"Mark Complete"</strong> above when you're done with this section, then move on to Chapter 02: Anki Flashcards. Use the sidebar to navigate between chapters anytime.</p>
                </div>
            </div>
        `
    },

    // ================================================================
    // Chapter 02 — Anki Flashcards
    // ================================================================
    'flashcards': {
        part: 'Part A',
        title: 'Anki Flashcards',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 02 — Getting Started</div>
                <h1>Anki Flashcards</h1>
                <p class="chapter-subtitle">Use spaced repetition to retain key system design concepts. Anki flashcard decks are a proven study method for long-term knowledge retention.</p>

                <hr class="shadcn-separator">

                <div class="img-container">
                    <img src="../images/zdCAkB3.png" alt="Anki Flashcards" class="zoomable">
                    <div class="img-caption">Anki flashcard interface for system design study</div>
                </div>

                <h2>Available Flashcard Decks</h2>
                <p>The provided <a href="https://apps.ankiweb.net/" target="_blank" rel="noopener">Anki flashcard decks</a> use spaced repetition to help you retain key system design concepts.</p>

                <div class="concept-grid">
                    <div class="concept-card">
                        <div class="concept-card-icon">🃏</div>
                        <h4>System Design Deck</h4>
                        <p>Core system design concepts, trade-offs, and patterns in a flashcard format.</p>
                    </div>
                    <div class="concept-card">
                        <div class="concept-card-icon">🏋️</div>
                        <h4>System Design Exercises</h4>
                        <p>Practice exercises to test your understanding of system design principles.</p>
                    </div>
                    <div class="concept-card">
                        <div class="concept-card-icon">🎨</div>
                        <h4>OO Design Deck</h4>
                        <p>Object-oriented design concepts and exercises for interview prep.</p>
                    </div>
                </div>

                <h2>How to Use Anki</h2>
                <ol>
                    <li>Download <a href="https://apps.ankiweb.net/" target="_blank" rel="noopener">Anki</a> (free for desktop & Android, paid on iOS)</li>
                    <li>Import the <code>.apkg</code> flashcard deck files</li>
                    <li>Review cards daily — Anki will schedule cards based on spaced repetition</li>
                    <li>Rate your recall honestly (Again / Hard / Good / Easy) for effective scheduling</li>
                </ol>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Tip: Great for On-the-Go Study
                    </div>
                    <div class="shadcn-alert-description">Anki flashcards are especially effective for studying during commutes, breaks, or any downtime. The mobile app syncs with the desktop version.</div>
                </div>

                <h2>Coding Interview Resources</h2>
                <p>Looking for resources to help you prep for the <strong>Coding Interview</strong>? Check out the sister repo <a href="https://github.com/donnemartin/interactive-coding-challenges" target="_blank" rel="noopener">Interactive Coding Challenges</a>, which contains an additional Anki deck for coding concepts.</p>

                <div class="img-container">
                    <img src="../images/b4YtAEN.png" alt="Interactive Coding Challenges" class="zoomable">
                    <div class="img-caption">Interactive Coding Challenges repository</div>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📎</span> <a href="https://apps.ankiweb.net/" target="_blank" rel="noopener">Anki Official Website</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://github.com/donnemartin/interactive-coding-challenges" target="_blank" rel="noopener">Interactive Coding Challenges (sister repo)</a></li>
                </ul>
            </div>
        `
    },

    // ================================================================
    // Chapter 03 — Study Guide
    // ================================================================
    'study-guide': {
        part: 'Part A',
        title: 'Study Guide',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 03 — Getting Started</div>
                <h1>Study Guide</h1>
                <p class="chapter-subtitle">Suggested topics to review based on your interview timeline. Adjust this guide based on your experience, target positions, and target companies.</p>

                <hr class="shadcn-separator">

                <div class="img-container">
                    <img src="../images/OfVllex.png" alt="Study Guide Overview" class="zoomable">
                    <div class="img-caption">Study guide overview — topics mapped to timelines</div>
                </div>

                <div class="shadcn-alert shadcn-alert-info">
                    <div class="shadcn-alert-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                        Do I need to know everything here?
                    </div>
                    <div class="shadcn-alert-description"><strong>No, you don't need to know everything here to prepare for the interview.</strong> What you are asked depends on your experience, technical background, target positions, and which companies you're interviewing with. Start broad and go deeper in a few areas.</div>
                </div>

                <h2>Factors That Affect Your Prep</h2>
                <ul>
                    <li>How much <strong>experience</strong> you have</li>
                    <li>What your <strong>technical background</strong> is</li>
                    <li>What <strong>positions</strong> you are interviewing for</li>
                    <li>Which <strong>companies</strong> you are interviewing with</li>
                    <li>A bit of <strong>luck</strong> 🍀</li>
                </ul>
                <p>More experienced candidates are generally expected to know more about system design. Architects or team leads might be expected to know more than individual contributors. Top tech companies are likely to have one or more design interview rounds.</p>

                <h2>Timeline-Based Strategy</h2>

                <div class="concept-grid">
                    <div class="concept-card">
                        <div class="concept-card-icon">⚡</div>
                        <h4>Short Timeline</h4>
                        <p>Aim for <strong>breadth</strong> with system design topics. Practice by solving <strong>some</strong> interview questions.</p>
                    </div>
                    <div class="concept-card">
                        <div class="concept-card-icon">📊</div>
                        <h4>Medium Timeline</h4>
                        <p>Aim for <strong>breadth and some depth</strong> with system design topics. Practice by solving <strong>many</strong> interview questions.</p>
                    </div>
                    <div class="concept-card">
                        <div class="concept-card-icon">🎯</div>
                        <h4>Long Timeline</h4>
                        <p>Aim for <strong>breadth and more depth</strong> with system design topics. Practice by solving <strong>most</strong> interview questions.</p>
                    </div>
                </div>

                <h2>Study Plan Matrix</h2>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr><th>Activity</th><th>Short</th><th>Medium</th><th>Long</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Read through system design topics for a broad understanding</td>
                                <td>✅</td><td>✅</td><td>✅</td>
                            </tr>
                            <tr>
                                <td>Read company engineering blogs for your target companies</td>
                                <td>✅</td><td>✅</td><td>✅</td>
                            </tr>
                            <tr>
                                <td>Read through real world architectures</td>
                                <td>✅</td><td>✅</td><td>✅</td>
                            </tr>
                            <tr>
                                <td>Review "How to approach a system design interview question"</td>
                                <td>✅</td><td>✅</td><td>✅</td>
                            </tr>
                            <tr>
                                <td>Work through system design interview questions with solutions</td>
                                <td>Some</td><td>Many</td><td>Most</td>
                            </tr>
                            <tr>
                                <td>Work through OO design interview questions with solutions</td>
                                <td>Some</td><td>Many</td><td>Most</td>
                            </tr>
                            <tr>
                                <td>Review additional system design interview questions</td>
                                <td>Some</td><td>Many</td><td>Most</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="callout callout-tip">
                    <div class="callout-title">✅ Recommendation</div>
                    <p>Even on a short timeline, make sure to cover the core concepts (Part B) and at least 2-3 practice problems (Part F). Understanding trade-offs is more important than memorizing specific architectures.</p>
                </div>
            </div>
        `
    },

    // ================================================================
    // Chapter 04 — Interview Approach
    // ================================================================
    'interview-approach': {
        part: 'Part A',
        title: 'Interview Approach',
        content: `
            <div class="shadcn-chapter">
                <div class="chapter-badge">Chapter 04 — Getting Started</div>
                <h1>How to Approach a System Design Interview Question</h1>
                <p class="chapter-subtitle">The system design interview is an open-ended conversation. You are expected to lead it. Use the following framework to guide the discussion systematically.</p>

                <hr class="shadcn-separator">

                <div class="callout callout-warning">
                    <div class="callout-title">⚠️ Important</div>
                    <p>The system design interview is <strong>not</strong> about getting the "right" answer. It's about demonstrating your thought process, ability to make trade-offs, and capacity to design systems under constraints.</p>
                </div>

                <h2>Step 1: Outline Use Cases, Constraints, and Assumptions</h2>
                <p>Gather requirements and scope the problem. Ask questions to clarify use cases and constraints. Discuss assumptions.</p>

                <div class="concept-grid">
                    <div class="concept-card">
                        <div class="concept-card-icon">👥</div>
                        <h4>Who uses it?</h4>
                        <p>Identify the users and their roles in the system.</p>
                    </div>
                    <div class="concept-card">
                        <div class="concept-card-icon">⚙️</div>
                        <h4>What does it do?</h4>
                        <p>Define the core functionality and behavior.</p>
                    </div>
                    <div class="concept-card">
                        <div class="concept-card-icon">📊</div>
                        <h4>How much scale?</h4>
                        <p>Users, data volume, requests per second.</p>
                    </div>
                    <div class="concept-card">
                        <div class="concept-card-icon">📈</div>
                        <h4>Input/Output?</h4>
                        <p>What goes in and what comes out of the system.</p>
                    </div>
                </div>

                <h3>Key Questions to Ask</h3>
                <ul>
                    <li>Who is going to use it?</li>
                    <li>How are they going to use it?</li>
                    <li>How many users are there?</li>
                    <li>What does the system do?</li>
                    <li>What are the inputs and outputs of the system?</li>
                    <li>How much data do we expect to handle?</li>
                    <li>How many requests per second do we expect?</li>
                    <li>What is the expected read to write ratio?</li>
                </ul>

                <h2>Step 2: Create a High-Level Design</h2>
                <p>Outline a high-level design with all important components.</p>
                <ul>
                    <li><strong>Sketch</strong> the main components and connections</li>
                    <li><strong>Justify</strong> your ideas and decisions</li>
                </ul>

                <div class="callout callout-tip">
                    <div class="callout-title">✅ Pro Tip</div>
                    <p>Draw a simple diagram with boxes and arrows. Start with the client, load balancer, web server, application server, database, and cache. Then add more detail as needed.</p>
                </div>

                <h2>Step 3: Design Core Components</h2>
                <p>Dive into details for each core component. For example, if you were asked to design a URL shortening service, discuss:</p>
                <ul>
                    <li>Generating and storing a hash of the full URL
                        <ul>
                            <li>MD5 and Base62 hashing</li>
                            <li>Hash collisions</li>
                            <li>SQL or NoSQL</li>
                            <li>Database schema</li>
                        </ul>
                    </li>
                    <li>Translating a hashed URL to the full URL
                        <ul>
                            <li>Database lookup</li>
                        </ul>
                    </li>
                    <li>API and object-oriented design</li>
                </ul>

                <h2>Step 4: Scale the Design</h2>
                <p>Identify and address bottlenecks, given the constraints. Consider whether you need:</p>

                <div class="concept-grid">
                    <div class="concept-card">
                        <div class="concept-card-icon">⚖️</div>
                        <h4>Load Balancer</h4>
                        <p>Distribute traffic across multiple servers for reliability.</p>
                    </div>
                    <div class="concept-card">
                        <div class="concept-card-icon">↔️</div>
                        <h4>Horizontal Scaling</h4>
                        <p>Add more machines to handle increased load.</p>
                    </div>
                    <div class="concept-card">
                        <div class="concept-card-icon">⚡</div>
                        <h4>Caching</h4>
                        <p>Reduce database load and improve response times.</p>
                    </div>
                    <div class="concept-card">
                        <div class="concept-card-icon">🗄️</div>
                        <h4>Database Sharding</h4>
                        <p>Split data across multiple databases for scale.</p>
                    </div>
                </div>

                <p>Discuss potential solutions and trade-offs. <strong>Everything is a trade-off.</strong> Address bottlenecks using principles of scalable system design.</p>

                <h2>Back-of-the-Envelope Calculations</h2>
                <p>You might be asked to do some estimates by hand. Keep these references handy:</p>
                <ul>
                    <li>Use back-of-the-envelope calculations to evaluate different designs</li>
                    <li>Powers of two table (see Appendix)</li>
                    <li>Latency numbers every programmer should know (see Appendix)</li>
                </ul>

                <h2>Summary Framework</h2>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr><th>Step</th><th>Action</th><th>Time (~45 min interview)</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>1</strong></td><td>Requirements & Constraints</td><td>~5 minutes</td></tr>
                            <tr><td><strong>2</strong></td><td>High-Level Design</td><td>~10 minutes</td></tr>
                            <tr><td><strong>3</strong></td><td>Core Component Design</td><td>~20 minutes</td></tr>
                            <tr><td><strong>4</strong></td><td>Scale & Trade-offs</td><td>~10 minutes</td></tr>
                        </tbody>
                    </table>
                </div>

                <hr class="shadcn-separator">

                <h3>Further Reading</h3>
                <ul class="resource-list">
                    <li><span class="resource-icon">📎</span> <a href="https://web.archive.org/web/20210505130322/https://www.palantir.com/2011/10/how-to-rock-a-systems-design-interview/" target="_blank" rel="noopener">How to ace a systems design interview</a></li>
                    <li><span class="resource-icon">📎</span> <a href="http://www.hiredintech.com/system-design" target="_blank" rel="noopener">The system design interview</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://www.youtube.com/watch?v=ZgdS0EUmn70" target="_blank" rel="noopener">Intro to Architecture and Systems Design Interviews</a></li>
                    <li><span class="resource-icon">📎</span> <a href="https://leetcode.com/discuss/career/229177/My-System-Design-Template" target="_blank" rel="noopener">System design template</a></li>
                </ul>
            </div>
        `
    }

};
