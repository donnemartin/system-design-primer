/**
 * System Design Primer — Documentation App
 * Navigation, theme, search, progress tracking, notes, shadcn tabs
 * Runs on /docs/ page only.
 */

(function () {
    'use strict';

    // ============================================
    // DOM References
    // ============================================
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarClose = document.getElementById('sidebarClose');
    const menuToggle = document.getElementById('menuToggle');
    const themeToggle = document.getElementById('themeToggle');
    const searchInput = document.getElementById('searchInput');
    const sidebarNav = document.getElementById('sidebarNav');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const contentArea = document.getElementById('contentArea');
    const chapterContent = document.getElementById('chapterContent');
    const breadcrumb = document.getElementById('breadcrumb');
    const markComplete = document.getElementById('markComplete');
    const prevChapter = document.getElementById('prevChapter');
    const nextChapter = document.getElementById('nextChapter');
    const prevLabel = document.getElementById('prevLabel');
    const nextLabel = document.getElementById('nextLabel');
    const backToTop = document.getElementById('backToTop');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    // Notes
    const notesToggle = document.getElementById('notesToggle');
    const notesPanel = document.getElementById('notesPanel');
    const notesPanelClose = document.getElementById('notesPanelClose');
    const notesPanelChapter = document.getElementById('notesPanelChapter');
    const notesTextarea = document.getElementById('notesTextarea');
    const notesSavedIndicator = document.getElementById('notesSavedIndicator');
    const notesOverlay = document.getElementById('notesOverlay');

    // ============================================
    // State
    // ============================================
    let currentChapter = 'motivation';
    let completedChapters = new Set();
    let chapterNotes = {};
    let notesSaveTimeout = null;

    // ============================================
    // Initialization
    // ============================================
    function init() {
        loadState();
        restoreTheme();

        // Check if #resume hash is present — load saved chapter
        if (window.location.hash === '#resume' && currentChapter) {
            loadChapter(currentChapter);
        } else {
            loadChapter(currentChapter);
        }

        updateProgress();
        bindEvents();

        // Clean up the hash so URL looks clean
        if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname);
        }
    }

    // ============================================
    // State Persistence (localStorage)
    // ============================================
    function loadState() {
        try {
            const saved = localStorage.getItem('sdp_completed');
            if (saved) completedChapters = new Set(JSON.parse(saved));

            const savedChapter = localStorage.getItem('sdp_current');
            if (savedChapter && CHAPTERS[savedChapter]) currentChapter = savedChapter;

            const savedNotes = localStorage.getItem('sdp_notes');
            if (savedNotes) chapterNotes = JSON.parse(savedNotes);
        } catch (e) { /* ignore */ }
    }

    function saveState() {
        try {
            localStorage.setItem('sdp_completed', JSON.stringify([...completedChapters]));
            localStorage.setItem('sdp_current', currentChapter);
            localStorage.setItem('sdp_notes', JSON.stringify(chapterNotes));
        } catch (e) { /* ignore */ }
    }

    // ============================================
    // Theme
    // ============================================
    function restoreTheme() {
        const saved = localStorage.getItem('sdp_theme');
        if (saved) {
            document.documentElement.setAttribute('data-theme', saved);
        }
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('sdp_theme', next);
    }

    // ============================================
    // Sidebar (mobile toggle)
    // ============================================
    function openSidebar() {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ============================================
    // Chapter Loading
    // ============================================
    function loadChapter(key) {
        if (!CHAPTERS[key]) return;
        currentChapter = key;

        const chapter = CHAPTERS[key];
        const html = chapter.content || getComingSoonContent(key);

        // Animate content change
        chapterContent.style.opacity = '0';
        chapterContent.style.transform = 'translateY(8px)';

        setTimeout(() => {
            chapterContent.innerHTML = html;
            chapterContent.style.opacity = '1';
            chapterContent.style.transform = 'translateY(0)';

            // Scroll to top
            contentArea.scrollTop = 0;
            window.scrollTo({ top: 0 });

            // Update UI
            updateBreadcrumb(chapter);
            updateActiveNav(key);
            updateChapterNav(key);
            updateMarkCompleteBtn(key);
            updateNotesIndicator(key);
            bindImageZoom();
            bindAccordions();
            bindShadcnTabs();
            renderMermaidDiagrams();

            saveState();
        }, 150);
    }

    function updateBreadcrumb(chapter) {
        breadcrumb.innerHTML = `
            <span class="breadcrumb-part">${chapter.part}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            <span class="breadcrumb-chapter">${chapter.title}</span>
        `;
    }

    function updateActiveNav(key) {
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        const activeItem = document.querySelector(`.nav-item[data-chapter="${key}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
            const group = activeItem.closest('.nav-group-items');
            if (group && group.classList.contains('collapsed')) {
                group.classList.remove('collapsed');
            }
            activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }

    function updateChapterNav(key) {
        const idx = CHAPTER_ORDER.indexOf(key);

        if (idx > 0) {
            prevChapter.disabled = false;
            prevLabel.textContent = CHAPTERS[CHAPTER_ORDER[idx - 1]].title;
        } else {
            prevChapter.disabled = true;
            prevLabel.textContent = '—';
        }

        if (idx < CHAPTER_ORDER.length - 1) {
            nextChapter.disabled = false;
            nextLabel.textContent = CHAPTERS[CHAPTER_ORDER[idx + 1]].title;
        } else {
            nextChapter.disabled = true;
            nextLabel.textContent = '—';
        }
    }

    function updateMarkCompleteBtn(key) {
        if (completedChapters.has(key)) {
            markComplete.classList.add('completed');
            markComplete.querySelector('span').textContent = 'Completed';
        } else {
            markComplete.classList.remove('completed');
            markComplete.querySelector('span').textContent = 'Mark Complete';
        }
    }

    // ============================================
    // Progress Tracking
    // ============================================
    function updateProgress() {
        const total = CHAPTER_ORDER.length;
        const done = completedChapters.size;
        const pct = Math.round((done / total) * 100);

        progressFill.style.width = pct + '%';
        progressText.textContent = `${done}/${total} chapters — ${pct}% complete`;

        document.querySelectorAll('.nav-item-status').forEach(el => {
            const key = el.getAttribute('data-check');
            if (completedChapters.has(key)) {
                el.classList.add('completed');
            } else {
                el.classList.remove('completed');
            }
        });
    }

    function toggleChapterComplete() {
        if (completedChapters.has(currentChapter)) {
            completedChapters.delete(currentChapter);
        } else {
            completedChapters.add(currentChapter);
        }
        updateMarkCompleteBtn(currentChapter);
        updateProgress();
        saveState();
    }

    // ============================================
    // Notes Panel
    // ============================================
    function openNotesPanel() {
        const chapter = CHAPTERS[currentChapter];
        notesPanelChapter.textContent = 'Chapter: ' + chapter.title;
        notesTextarea.value = chapterNotes[currentChapter] || '';
        notesPanel.classList.add('open');
        notesOverlay.classList.add('active');
        notesSavedIndicator.textContent = 'All changes saved';
        setTimeout(function () { notesTextarea.focus(); }, 300);
    }

    function closeNotesPanel() {
        notesPanel.classList.remove('open');
        notesOverlay.classList.remove('active');
        saveCurrentNote();
    }

    function saveCurrentNote() {
        var text = notesTextarea.value.trim();
        if (text) {
            chapterNotes[currentChapter] = text;
        } else {
            delete chapterNotes[currentChapter];
        }
        saveState();
        updateNotesIndicator(currentChapter);
    }

    function handleNoteInput() {
        notesSavedIndicator.textContent = 'Saving...';
        clearTimeout(notesSaveTimeout);
        notesSaveTimeout = setTimeout(function () {
            saveCurrentNote();
            notesSavedIndicator.textContent = 'All changes saved';
        }, 500);
    }

    function updateNotesIndicator(key) {
        if (chapterNotes[key] && chapterNotes[key].trim()) {
            notesToggle.classList.add('has-notes');
        } else {
            notesToggle.classList.remove('has-notes');
        }
    }

    // ============================================
    // Search
    // ============================================
    function handleSearch(query) {
        const q = query.toLowerCase().trim();
        const navItems = document.querySelectorAll('.nav-item');

        navItems.forEach(item => {
            const label = item.querySelector('.nav-item-label').textContent.toLowerCase();
            const chapter = item.getAttribute('data-chapter');
            const chapterData = CHAPTERS[chapter];
            const partMatch = chapterData ? chapterData.part.toLowerCase().includes(q) : false;

            if (q === '' || label.includes(q) || partMatch) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });

        if (q) {
            document.querySelectorAll('.nav-group-items').forEach(g => g.classList.remove('collapsed'));
        }
    }

    // ============================================
    // Nav Group Toggle
    // ============================================
    function toggleNavGroup(header) {
        const groupId = header.getAttribute('data-group');
        const items = document.querySelector(`[data-group-items="${groupId}"]`);
        if (items) {
            items.classList.toggle('collapsed');
        }
    }

    // ============================================
    // Image Lightbox
    // ============================================
    function bindImageZoom() {
        document.querySelectorAll('.chapter-content img.zoomable').forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('active');
            });
        });
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
    }

    // ============================================
    // Accordions in chapter content
    // ============================================
    function bindAccordions() {
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                header.classList.toggle('open');
                const body = header.nextElementSibling;
                if (body) body.classList.toggle('open');
            });
        });
    }

    // ============================================
    // Shadcn-style Tabs
    // ============================================
    function bindShadcnTabs() {
        document.querySelectorAll('.shadcn-tab-trigger').forEach(trigger => {
            trigger.addEventListener('click', () => {
                const tabId = trigger.getAttribute('data-tab');

                // Deactivate siblings within the same tabs container
                const container = trigger.closest('.shadcn-tabs');
                if (!container) return;

                container.querySelectorAll('.shadcn-tab-trigger').forEach(t => t.classList.remove('active'));
                container.querySelectorAll('.shadcn-tab-content').forEach(c => c.classList.remove('active'));

                // Activate selected
                trigger.classList.add('active');
                const panel = document.getElementById(tabId);
                if (panel) panel.classList.add('active');
            });
        });
    }

    // ============================================
    // Mermaid Diagrams
    // ============================================
    let mermaidInitialized = false;
    function renderMermaidDiagrams() {
        const containers = document.querySelectorAll('.mermaid-diagram');
        if (containers.length === 0) return;

        if (typeof mermaid === 'undefined') return;

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        mermaid.initialize({
            startOnLoad: false,
            theme: isDark ? 'dark' : 'default',
            themeVariables: isDark ? {
                primaryColor: '#1f6feb',
                primaryTextColor: '#e6edf3',
                primaryBorderColor: '#30363d',
                lineColor: '#8b949e',
                secondaryColor: '#21262d',
                tertiaryColor: '#161b22',
                background: '#0d1117',
                mainBkg: '#161b22',
                nodeBorder: '#30363d',
                clusterBkg: '#161b2288',
                clusterBorder: '#30363d',
                titleColor: '#e6edf3',
                edgeLabelBackground: '#161b22',
                nodeTextColor: '#e6edf3',
                actorTextColor: '#e6edf3',
                actorBorder: '#30363d',
                actorBkg: '#161b22',
                actorLineColor: '#8b949e',
                signalColor: '#e6edf3',
                signalTextColor: '#e6edf3',
                labelBoxBkgColor: '#161b22',
                labelBoxBorderColor: '#30363d',
                labelTextColor: '#e6edf3',
                loopTextColor: '#8b949e',
                noteBkgColor: '#21262d',
                noteTextColor: '#e6edf3',
                noteBorderColor: '#30363d',
                activationBorderColor: '#1f6feb',
                activationBkgColor: '#1f6feb33',
                sequenceNumberColor: '#e6edf3',
                classText: '#e6edf3'
            } : {
                primaryColor: '#0969da',
                primaryTextColor: '#1f2328',
                primaryBorderColor: '#d0d7de',
                lineColor: '#656d76',
                secondaryColor: '#f6f8fa',
                tertiaryColor: '#f0f2f5',
                background: '#ffffff',
                mainBkg: '#f6f8fa',
                nodeBorder: '#d0d7de',
                clusterBkg: '#f6f8fa88',
                clusterBorder: '#d0d7de',
                titleColor: '#1f2328',
                edgeLabelBackground: '#ffffff'
            },
            flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'basis' },
            sequence: { useMaxWidth: true, actorMargin: 60 },
            classDiagram: { useMaxWidth: true }
        });

        containers.forEach(async (container, i) => {
            const code = container.querySelector('.mermaid-code');
            if (!code) return;
            const graphDef = code.textContent.trim();
            const id = 'mermaid-svg-' + Date.now() + '-' + i;
            try {
                const { svg } = await mermaid.render(id, graphDef);
                const display = container.querySelector('.mermaid-display');
                if (display) {
                    display.innerHTML = svg;
                    // Make SVG responsive
                    const svgEl = display.querySelector('svg');
                    if (svgEl) {
                        svgEl.style.maxWidth = '100%';
                        svgEl.style.height = 'auto';
                    }
                }
            } catch (err) {
                console.warn('Mermaid render error:', err);
                const display = container.querySelector('.mermaid-display');
                if (display) {
                    display.innerHTML = '<pre style="color:var(--text-tertiary);font-size:0.85rem;">Diagram rendering failed</pre>';
                }
            }
        });
        mermaidInitialized = true;
    }

    // ============================================
    // Back to Top
    // ============================================
    function handleScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    // ============================================
    // Event Bindings
    // ============================================
    function bindEvents() {
        // Theme toggle
        themeToggle.addEventListener('click', toggleTheme);

        // Mobile sidebar
        menuToggle.addEventListener('click', openSidebar);
        sidebarClose.addEventListener('click', closeSidebar);
        sidebarOverlay.addEventListener('click', closeSidebar);

        // Nav group toggles
        document.querySelectorAll('.nav-group-header').forEach(header => {
            header.addEventListener('click', () => toggleNavGroup(header));
        });

        // Nav item clicks
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const key = item.getAttribute('data-chapter');
                if (key) {
                    loadChapter(key);
                    closeSidebar();
                }
            });
        });

        // Search
        searchInput.addEventListener('input', (e) => handleSearch(e.target.value));

        // Mark complete
        markComplete.addEventListener('click', toggleChapterComplete);

        // Notes
        notesToggle.addEventListener('click', openNotesPanel);
        notesPanelClose.addEventListener('click', closeNotesPanel);
        notesOverlay.addEventListener('click', closeNotesPanel);
        notesTextarea.addEventListener('input', handleNoteInput);

        // Prev/Next chapter
        prevChapter.addEventListener('click', () => {
            const idx = CHAPTER_ORDER.indexOf(currentChapter);
            if (idx > 0) loadChapter(CHAPTER_ORDER[idx - 1]);
        });
        nextChapter.addEventListener('click', () => {
            const idx = CHAPTER_ORDER.indexOf(currentChapter);
            if (idx < CHAPTER_ORDER.length - 1) loadChapter(CHAPTER_ORDER[idx + 1]);
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchInput.focus();
            }
            if (e.key === 'Escape') {
                closeLightbox();
                closeSidebar();
                closeNotesPanel();
            }
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                if (e.key === 'ArrowLeft') prevChapter.click();
                if (e.key === 'ArrowRight') nextChapter.click();
            }
        });

        // Back to top
        window.addEventListener('scroll', handleScroll, { passive: true });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Lightbox
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) closeLightbox();
        });
    }

    // ============================================
    // Boot
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
