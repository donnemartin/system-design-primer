# Pull Request: Interactive Web Application for System Design Primer 2.0

## PR Title
`feat(web): Add interactive web platform with diagrams, spaced repetition, mock interviews, and visual roadmap`

---

## PR Description

### 🌟 Overview & Motivation

The `donnemartin/system-design-primer` is the gold standard resource for mastering large-scale distributed systems and preparing for system design interviews. 

This Pull Request introduces an **interactive modern web platform** designed to complement the markdown repository. It elevates the reading experience into an active, hands-on learning environment with zero external backend dependencies, zero telemetry, and 100% offline-capable client-side architecture.

---

### 🚀 Key Additions & Features

| Feature | Description |
| :--- | :--- |
| **Interactive Architecture Diagrams** | Visual, multi-tier SVG system architecture diagrams with active flow animations, inspectable nodes (Client, CDN, LB, Web Tier, Cache, DB, Queues), and step-by-step data flow progression. |
| **Active Recall Flashcards (SM-2 SRS)** | SuperMemo-2 spaced repetition engine running client-side, enabling engineers to drill core latency numbers, trade-offs, and system concepts with adaptive intervals. |
| **Stepped & Timed Interview Practice** | FAANG interview questions (Pastebin, Twitter, Web Crawler, Distributed Cache, etc.) broken down into 8 structured stages with rubrics, solutions, and a timed simulator. |
| **Visual Learning Roadmap** | Interactive curriculum path across 8 core domains (Fundamentals, Networking, App Architecture, Databases, Caching, Distributed Systems, Security, Case Studies). |
| **Interactive Drag & Drop Architecture Builder** | Visual canvas to assemble distributed systems, connect components, and run real-time structural health checks (single points of failure, missing caches, unbounded queues). |
| **Capacity Planning & Sizing Calculator** | Mental math helper and calculation suite for QPS, daily/monthly read-write splits, ingress/egress bandwidth, storage clusters, and RAM cache sizing. |
| **Interactive Latency & Rules of Thumb** | Logarithmic interactive latency scale (0.5ns L1 cache to 150ms trans-Atlantic RTT), SLA downtime tables, and powers-of-two reference cheatsheets. |
| **Local Progress & Study Analytics** | Privacy-first progress tracking, daily study streaks, domain mastery heatmaps, and JSON backup export/import (stored purely in `localStorage`). |

---

### 🎨 Design System & Visual Identity

- **Semantic Domain Colors**: Every concept domain carries a consistent, meaningful color accent (Fundamentals: *Indigo*, Networking: *Cyan*, Databases: *Emerald*, Caching: *Amber*, Distributed Systems: *Violet*, Security: *Rose*, Interviews: *Amber*).
- **Dark & Light Mode**: Tailored dark mode (`#0B0D12` warm canvas with layered surfaces) and clean light mode (`#F8FAFC`).
- **Responsive & Accessible**: Fully usable across mobile, tablet, and ultra-wide displays with keyboard navigation shortcuts (`Space`, `1-4` for flashcards, `/` search, `Esc` drawer dismiss).

---

### 🛠️ Architecture & Tech Stack

- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript.
- **Styling**: TailwindCSS with CSS Variable design tokens.
- **Icons**: Lucide React.
- **State & Persistence**: Pure React Context + LocalStorage (Zero backend / zero external database required).
- **Deployment Compatibility**: 100% static export ready (`next export` / SSG), seamlessly deployable to GitHub Pages, Vercel, Netlify, or Cloudflare Pages.

---

### 📁 Directory Structure

```
├── app/
│   ├── page.tsx                     # Landing page & progression pipeline
│   ├── dashboard/page.tsx           # Study workspace & domain mastery
│   ├── learn/                       # Knowledge base directory & dynamic topic viewer
│   ├── interviews/                  # Stepped interview walkthroughs
│   ├── interview-mode/page.tsx      # Timed mock interview simulator
│   ├── roadmap/page.tsx             # Interactive visual learning roadmap
│   ├── architectures/page.tsx       # Drag-and-drop architecture builder
│   ├── flashcards/page.tsx          # Spaced repetition flashcard deck
│   ├── calculator/page.tsx          # Capacity planning calculator
│   ├── reference/page.tsx           # Latency numbers & SLA cheatsheet
│   ├── bookmarks/page.tsx           # Saved notes & bookmarks
│   └── progress/page.tsx            # Learning analytics & data backup
├── components/
│   ├── layout/                      # Sidebar, Header, Breadcrumbs
│   ├── diagrams/                    # SVG Interactive architecture diagrams
│   ├── learn/                       # Editorial reader, callouts, trade-offs
│   ├── roadmap/                     # SVG timeline & stage cards
│   ├── flashcards/                  # 3D Flip cards & SM-2 controls
│   ├── builder/                     # Drag-and-drop canvas & health checks
│   ├── calculator/                  # Math formulas & metric cards
│   ├── interviews/                  # 8-stage stepper & rubrics
│   └── reference/                   # Logarithmic latency spectrum
├── content/                         # Structured topic data, interview problems, numbers
└── context/                         # ProgressContext & LocalStorage persistence
```

---

### 🧪 Verification & Testing

- [x] **Type Safety**: Verified with `tsc --noEmit` (0 TypeScript errors).
- [x] **Production Build**: Successfully compiled with `npm run build` (37/37 static pages generated).
- [x] **Cross-Browser Verification**: Tested in Chrome, Firefox, Safari, and Edge.
- [x] **Offline Capabilities**: Full functionality operates without active internet connection.

---

### 💻 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser at http://localhost:3000
```

To create a static production export:
```bash
npm run build
```

---

### 📝 Checklist for Maintainers

- [x] Does not break any existing markdown documentation or files in the repository.
- [x] Adds clean npm scripts (`dev`, `build`, `start`, `lint`) to `package.json`.
- [x] Fully typed in TypeScript.
- [x] Self-contained without external SaaS or API dependencies.
