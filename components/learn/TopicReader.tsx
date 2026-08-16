'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Topic } from '@/types';
import { allTopicsData, getTopicsByCategory } from '@/content/topicsData';
import { categoriesData } from '@/content/categoriesData';
import { useProgress } from '@/context/ProgressContext';
import { InteractiveArchitectureDiagram } from '@/components/diagrams/InteractiveArchitectureDiagram';
import { TradeOffMatrix } from '@/components/diagrams/TradeOffMatrix';
import { DecisionTree } from '@/components/diagrams/DecisionTree';
import {
  CheckCircle2,
  Bookmark,
  Clock,
  ArrowRight,
  ArrowLeft,
  Share2,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  Building,
  PenTool,
  Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TopicReaderProps {
  topic: Topic;
}

const domainColorMap: Record<string, {
  badgeClass: string;
  washGradient: string;
  tintBorder: string;
  dotColor: string;
  accentText: string;
}> = {
  fundamentals: {
    badgeClass: 'domain-badge-fundamentals',
    washGradient: 'from-indigo-500/15 via-indigo-500/5 to-transparent',
    tintBorder: 'border-indigo-500/30',
    dotColor: 'bg-indigo-500',
    accentText: 'text-indigo-600 dark:text-indigo-400',
  },
  networking: {
    badgeClass: 'domain-badge-networking',
    washGradient: 'from-cyan-500/15 via-cyan-500/5 to-transparent',
    tintBorder: 'border-cyan-500/30',
    dotColor: 'bg-cyan-500',
    accentText: 'text-cyan-600 dark:text-cyan-400',
  },
  'app-architecture': {
    badgeClass: 'domain-badge-app-architecture',
    washGradient: 'from-blue-500/15 via-blue-500/5 to-transparent',
    tintBorder: 'border-blue-500/30',
    dotColor: 'bg-blue-500',
    accentText: 'text-blue-600 dark:text-blue-400',
  },
  databases: {
    badgeClass: 'domain-badge-databases',
    washGradient: 'from-emerald-500/15 via-emerald-500/5 to-transparent',
    tintBorder: 'border-emerald-500/30',
    dotColor: 'bg-emerald-500',
    accentText: 'text-emerald-600 dark:text-emerald-400',
  },
  caching: {
    badgeClass: 'domain-badge-caching',
    washGradient: 'from-amber-500/15 via-amber-500/5 to-transparent',
    tintBorder: 'border-amber-500/30',
    dotColor: 'bg-amber-500',
    accentText: 'text-amber-600 dark:text-amber-400',
  },
  'distributed-systems': {
    badgeClass: 'domain-badge-distributed-systems',
    washGradient: 'from-violet-500/15 via-violet-500/5 to-transparent',
    tintBorder: 'border-violet-500/30',
    dotColor: 'bg-violet-500',
    accentText: 'text-violet-600 dark:text-violet-400',
  },
  security: {
    badgeClass: 'domain-badge-security',
    washGradient: 'from-rose-500/15 via-rose-500/5 to-transparent',
    tintBorder: 'border-rose-500/30',
    dotColor: 'bg-rose-500',
    accentText: 'text-rose-600 dark:text-rose-400',
  },
  'real-world-architectures': {
    badgeClass: 'domain-badge-real-world-architectures',
    washGradient: 'from-purple-500/15 via-purple-500/5 to-transparent',
    tintBorder: 'border-purple-500/30',
    dotColor: 'bg-purple-500',
    accentText: 'text-purple-600 dark:text-purple-400',
  },
};

export function TopicReader({ topic }: TopicReaderProps) {
  const { progress, toggleCompleteTopic, toggleBookmark, isTopicCompleted, isBookmarked, saveTopicNote } = useProgress();
  const [activeSection, setActiveSection] = useState<string>('definition');
  const [noteContent, setNoteContent] = useState<string>(progress.notes[topic.slug] || '');
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const isCompleted = isTopicCompleted(topic.slug);
  const bookmarked = isBookmarked(topic.slug);

  const categoryTopics = getTopicsByCategory(topic.category);
  const currentIdx = allTopicsData.findIndex((t) => t.slug === topic.slug);
  const prevTopic = currentIdx > 0 ? allTopicsData[currentIdx - 1] : null;
  const nextTopic = currentIdx < allTopicsData.length - 1 ? allTopicsData[currentIdx + 1] : null;

  const domainStyle = domainColorMap[topic.category] || domainColorMap.fundamentals;

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['definition', 'intuition', 'deep-dive', 'diagram', 'trade-offs', 'when-to-use', 'pitfalls', 'real-world', 'interviews'];
      const scrollPos = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleSaveNotes = (text: string) => {
    setNoteContent(text);
    saveTopicNote(topic.slug, text);
  };

  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 pb-24">
      {/* LEFT PANEL: Category Navigation (3 cols) */}
      <aside className="hidden lg:block lg:col-span-3 sticky top-16 h-[calc(100vh-5rem)] overflow-y-auto pr-3 space-y-4 select-none">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
            Topic Domain
          </span>
          <h3 className={cn("text-xs font-bold mt-0.5 flex items-center gap-1.5", domainStyle.accentText)}>
            <span className={cn("h-2 w-2 rounded-full shrink-0", domainStyle.dotColor)} />
            {topic.categoryName}
          </h3>
        </div>

        <div className="space-y-0.5">
          {categoryTopics.map((t) => {
            const isCurrent = t.slug === topic.slug;
            const isDone = isTopicCompleted(t.slug);

            return (
              <Link
                key={t.slug}
                href={`/learn/${t.slug}`}
                className={cn(
                  'flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs transition-colors',
                  isCurrent
                    ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border border-indigo-500/20'
                    : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                )}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className={cn('h-1.5 w-1.5 rounded-full shrink-0', isDone ? 'bg-emerald-500' : 'bg-muted-foreground/30')} />
                  <span className="truncate">{t.title}</span>
                </div>
                {isDone && <Check size={12} className="text-emerald-500 shrink-0" />}
              </Link>
            );
          })}
        </div>

        {/* All Domains Navigation */}
        <div className="pt-3.5 border-t border-border/70 space-y-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
            All Domains
          </span>
          <div className="space-y-0.5">
            {categoriesData.map((cat) => {
              const catStyle = domainColorMap[cat.id] || domainColorMap.fundamentals;
              return (
                <Link
                  key={cat.id}
                  href={`/learn#${cat.id}`}
                  className="flex items-center justify-between py-1 px-2.5 rounded-md text-[11px] text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className={cn("h-1.5 w-1.5 rounded-full", catStyle.dotColor)} />
                    <span>{cat.title}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </aside>

      {/* CENTER PANEL: Main Reading Area (6 cols - constrained line length for readability) */}
      <main className="lg:col-span-6 space-y-8 min-w-0 max-w-3xl">
        {/* Header & Editorial Wash Banner */}
        <div className={cn("p-6 rounded-xl border bg-gradient-to-b space-y-3 relative overflow-hidden", domainStyle.washGradient, domainStyle.tintBorder)}>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
            <Link href="/learn" className="hover:text-foreground transition-colors">Knowledge Base</Link>
            <span>/</span>
            <span className={cn("font-medium", domainStyle.accentText)}>{topic.categoryName}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            {topic.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className={cn("font-mono px-2 py-0.5 rounded border text-[10px] font-semibold uppercase", domainStyle.badgeClass)}>
              {topic.difficulty}
            </span>
            <span className="font-mono px-2 py-0.5 rounded bg-card/80 text-muted-foreground border border-border text-[10px] flex items-center gap-1">
              <Clock size={10} /> {topic.estimatedMinutes} min read
            </span>
            {topic.sourceAttribution && (
              <span className="text-[10px] text-muted-foreground font-mono">
                {topic.sourceAttribution}
              </span>
            )}
          </div>
        </div>

        {/* 1. Definition */}
        <section id="definition" className="space-y-2 scroll-mt-20">
          <div className={cn("p-4 rounded-lg border-l-4 bg-card shadow-sm text-sm text-foreground leading-relaxed space-y-1.5", domainStyle.tintBorder)}>
            <div className={cn("font-bold text-[10px] uppercase tracking-wider font-mono", domainStyle.accentText)}>
              Core Definition
            </div>
            <p className="font-medium text-xs sm:text-sm">{topic.definition}</p>
          </div>
        </section>

        {/* 2. Intuition & Real-World Analogy */}
        <section id="intuition" className="space-y-2 scroll-mt-20">
          <div className="p-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5 dark:bg-cyan-950/20 space-y-1.5">
            <div className="font-bold text-[10px] text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <Lightbulb size={13} className="text-cyan-500" /> Intuition & Analogy
            </div>
            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed italic">{topic.intuition}</p>
          </div>
        </section>

        {/* 3. Deep Dive Technical Explanation */}
        <section id="deep-dive" className="space-y-3 scroll-mt-20">
          <h2 className="text-base sm:text-lg font-bold text-foreground tracking-tight border-b border-border pb-2">
            Technical Architecture & Mechanics
          </h2>
          <div className="text-xs sm:text-sm text-foreground/90 leading-relaxed whitespace-pre-line space-y-3">
            {topic.deepDive}
          </div>
        </section>

        {/* 4. Interactive Architecture Diagram */}
        {topic.diagramData && (
          <section id="diagram" className="scroll-mt-20">
            <InteractiveArchitectureDiagram data={topic.diagramData} />
          </section>
        )}

        {/* 5. Trade-off Matrix & Decision Tree */}
        {topic.tradeOffs && (
          <section id="trade-offs" className="scroll-mt-20">
            <TradeOffMatrix data={topic.tradeOffs} />
          </section>
        )}

        {topic.decisionTree && (
          <section id="decision-tree" className="scroll-mt-20">
            <DecisionTree data={topic.decisionTree} />
          </section>
        )}

        {/* 6. Pros & Cons */}
        <section id="pros-cons" className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 scroll-mt-20">
          <div className="p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/20 space-y-2">
            <h3 className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-mono">
              Advantages & Benefits
            </h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {topic.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">•</span>
                  <span className="text-foreground/90 leading-relaxed">{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg border border-rose-500/20 bg-rose-500/5 dark:bg-rose-950/20 space-y-2">
            <h3 className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider font-mono">
              Trade-offs & Constraints
            </h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {topic.cons.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">•</span>
                  <span className="text-foreground/90 leading-relaxed">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. When to Use vs When NOT to Use */}
        <section id="when-to-use" className="space-y-3 scroll-mt-20">
          <h2 className="text-base sm:text-lg font-bold text-foreground tracking-tight border-b border-border pb-2">
            Usage Criteria
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/20 space-y-2">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-mono">When to Use</span>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {topic.whenToUse.map((w, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-foreground/90 leading-relaxed">
                    <span className="text-emerald-500 shrink-0 font-bold">✓</span> {w}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-rose-500/20 bg-rose-500/5 dark:bg-rose-950/20 space-y-2">
              <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider font-mono">When NOT to Use</span>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {topic.whenNotToUse.map((wn, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-foreground/90 leading-relaxed">
                    <span className="text-rose-500 shrink-0 font-bold">✕</span> {wn}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8. Common Pitfalls */}
        <section id="pitfalls" className="space-y-3 scroll-mt-20">
          <div className="p-4 rounded-lg border border-amber-500/20 bg-amber-500/5 dark:bg-amber-950/20 space-y-2">
            <h3 className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <AlertTriangle size={13} className="text-amber-500" /> Common Pitfalls & Anti-Patterns
            </h3>
            <ul className="space-y-1.5 text-xs text-foreground/90">
              {topic.pitfalls.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold shrink-0">•</span>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. Real-World Case Studies */}
        {topic.realWorldExamples.length > 0 && (
          <section id="real-world" className="space-y-3 scroll-mt-20">
            <h2 className="text-base sm:text-lg font-bold text-foreground tracking-tight border-b border-border pb-2 flex items-center gap-2">
              <Building size={15} className="text-muted-foreground" />
              Real-World Architectures
            </h2>
            <div className="space-y-3">
              {topic.realWorldExamples.map((ex, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-border bg-card hover:border-indigo-500/30 transition-colors space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-xs text-foreground">{ex.company}</span>
                    <span className="text-[11px] text-muted-foreground">— {ex.useCase}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{ex.architectureDetail}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10. Interview Questions */}
        {topic.interviewQuestions.length > 0 && (
          <section id="interviews" className="space-y-3 scroll-mt-20">
            <h2 className="text-base sm:text-lg font-bold text-foreground tracking-tight border-b border-border pb-2 flex items-center gap-2">
              <HelpCircle size={15} className="text-amber-500" />
              System Design Interview Focus
            </h2>
            <div className="space-y-3">
              {topic.interviewQuestions.map((iq, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-border bg-card space-y-2">
                  <h4 className="font-semibold text-xs text-foreground">Q: {iq.question}</h4>
                  <div className="p-3 rounded bg-secondary/40 text-xs text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Approach: </span>
                    {iq.answerHint}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {iq.keyPoints.map((kp, kIdx) => (
                      <span key={kIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        {kp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Next / Previous Navigation */}
        <div className="pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-3">
          {prevTopic ? (
            <Link
              href={`/learn/${prevTopic.slug}`}
              className="p-3.5 rounded-lg border border-border bg-card hover:bg-secondary/40 text-left transition-colors group flex items-center gap-3"
            >
              <ArrowLeft size={14} className="text-muted-foreground group-hover:-translate-x-0.5 transition-transform" />
              <div className="min-w-0">
                <span className="text-[9px] font-mono text-muted-foreground uppercase">Previous</span>
                <div className="font-medium text-xs text-foreground truncate">{prevTopic.title}</div>
              </div>
            </Link>
          ) : <div />}

          {nextTopic && (
            <Link
              href={`/learn/${nextTopic.slug}`}
              className="p-3.5 rounded-lg border border-border bg-card hover:bg-secondary/40 text-right transition-colors group flex items-center justify-end gap-3"
            >
              <div className="min-w-0">
                <span className="text-[9px] font-mono text-muted-foreground uppercase">Next</span>
                <div className="font-medium text-xs text-foreground truncate">{nextTopic.title}</div>
              </div>
              <ArrowRight size={14} className="text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>
      </main>

      {/* RIGHT PANEL: Sticky TOC & Actions (3 cols) */}
      <aside className="hidden lg:block lg:col-span-3 sticky top-16 h-[calc(100vh-5rem)] overflow-y-auto pl-3 space-y-5 select-none">
        {/* Completion & Bookmark Actions */}
        <div className="p-3.5 rounded-lg border border-border bg-card space-y-2">
          <button
            onClick={() => toggleCompleteTopic(topic.slug)}
            className={cn(
              'w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-medium transition-colors',
              isCompleted
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/20'
                : 'bg-foreground text-background hover:opacity-90'
            )}
          >
            <CheckCircle2 size={13} />
            <span>{isCompleted ? 'Completed ✓' : 'Mark as Complete'}</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => toggleBookmark(topic.slug)}
              className={cn(
                'flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md border text-xs font-medium transition-colors',
                bookmarked
                  ? 'border-foreground bg-secondary text-foreground'
                  : 'border-border bg-card hover:bg-secondary text-muted-foreground'
              )}
            >
              <Bookmark size={12} className={cn(bookmarked && 'fill-foreground')} />
              <span>{bookmarked ? 'Saved' : 'Bookmark'}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md border border-border bg-card hover:bg-secondary text-muted-foreground hover:text-foreground text-xs font-medium transition-colors"
            >
              <Share2 size={12} />
              <span>{copiedLink ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            On This Page
          </span>
          <nav className="space-y-0.5 text-xs">
            {[
              { id: 'definition', label: 'Core Definition' },
              { id: 'intuition', label: 'Intuition & Analogy' },
              { id: 'deep-dive', label: 'Technical Mechanics' },
              ...(topic.diagramData ? [{ id: 'diagram', label: 'Architecture Diagram' }] : []),
              ...(topic.tradeOffs ? [{ id: 'trade-offs', label: 'Trade-off Matrix' }] : []),
              { id: 'pros-cons', label: 'Pros & Cons' },
              { id: 'when-to-use', label: 'When to Use' },
              { id: 'pitfalls', label: 'Common Pitfalls' },
              ...(topic.realWorldExamples.length > 0 ? [{ id: 'real-world', label: 'Real-World Systems' }] : []),
              ...(topic.interviewQuestions.length > 0 ? [{ id: 'interviews', label: 'Interview Questions' }] : []),
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  'block py-1 px-2 rounded-md transition-colors text-[11px]',
                  activeSection === item.id
                    ? 'text-foreground font-medium bg-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Topic Notes Scratchpad */}
        <div className="pt-3 border-t border-border/70 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
              <PenTool size={11} /> Topic Notes
            </span>
          </div>
          <textarea
            value={noteContent}
            onChange={(e) => handleSaveNotes(e.target.value)}
            placeholder="Save private notes on this concept..."
            className="w-full h-24 p-2.5 rounded-md border border-border bg-secondary/30 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring font-mono resize-none"
          />
        </div>
      </aside>
    </div>
  );
}
