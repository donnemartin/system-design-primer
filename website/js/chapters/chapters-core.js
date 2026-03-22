/**
 * Chapter Registry — Core
 * Merges all CHAPTERS_A through CHAPTERS_H into a single CHAPTERS object,
 * defines the chapter order, and provides utility functions.
 *
 * This file must be loaded AFTER all chapters-*.js part files.
 */

// Merge all part objects into the master CHAPTERS map
const CHAPTERS = Object.assign({},
    typeof CHAPTERS_A !== 'undefined' ? CHAPTERS_A : {},
    typeof CHAPTERS_B !== 'undefined' ? CHAPTERS_B : {},
    typeof CHAPTERS_C !== 'undefined' ? CHAPTERS_C : {},
    typeof CHAPTERS_D !== 'undefined' ? CHAPTERS_D : {},
    typeof CHAPTERS_E !== 'undefined' ? CHAPTERS_E : {},
    typeof CHAPTERS_F !== 'undefined' ? CHAPTERS_F : {},
    typeof CHAPTERS_G !== 'undefined' ? CHAPTERS_G : {},
    typeof CHAPTERS_H !== 'undefined' ? CHAPTERS_H : {}
);

// Ordered list of chapter keys for navigation
const CHAPTER_ORDER = [
    // Part A: Getting Started
    'motivation', 'flashcards', 'study-guide', 'interview-approach',
    // Part B: Core Concepts
    'performance-scalability', 'latency-throughput', 'availability-consistency', 'consistency-patterns', 'availability-patterns',
    // Part C: Infrastructure
    'dns', 'cdn', 'load-balancer', 'reverse-proxy',
    // Part D: Data Layer
    'application-layer', 'database', 'cache', 'asynchronism',
    // Part E: Communication
    'communication', 'security',
    // Part F: Practice Problems
    'design-pastebin', 'design-twitter', 'design-web-crawler', 'design-mint',
    'design-social-graph', 'design-kv-store', 'design-sales-rank', 'design-scaling-aws',
    // Part G: OO Design
    'oo-hash-map', 'oo-lru-cache', 'oo-call-center', 'oo-deck-of-cards', 'oo-parking-lot', 'oo-online-chat',
    // Part H: Appendix
    'powers-of-two', 'latency-numbers', 'additional-questions', 'real-world-architectures', 'engineering-blogs'
];

/**
 * Generate "Coming Soon" placeholder content for chapters not yet built.
 */
function getComingSoonContent(chapterKey) {
    const chapter = CHAPTERS[chapterKey];
    if (!chapter) return '<p>Chapter not found.</p>';
    return `
        <div class="coming-soon">
            <div class="coming-soon-icon">🚧</div>
            <h2>Coming Soon</h2>
            <p><strong>${chapter.title}</strong> content is being prepared.<br>
            This chapter will be available in a future update.</p>
        </div>
    `;
}
