'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { allTopicsData } from '@/content/topicsData';
import { interviewProblemsData } from '@/content/interviewProblems';
import {
  Search,
  BookOpen,
  HelpCircle,
  Clock,
  Layers,
  Sparkles,
  Calculator,
  Binary,
  Map,
  X,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search
          const btn = document.querySelector('button[title="Search concepts"]') as HTMLButtonElement;
          btn?.click();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filtered search results across concepts, interview questions, and tools
  const tools = [
    { title: 'Interactive Learning Roadmap', type: 'Tool', href: '/roadmap', icon: Map },
    { title: 'System Architecture Builder', type: 'Tool', href: '/architectures', icon: Layers },
    { title: 'Mock Interview Simulator', type: 'Tool', href: '/interview-mode', icon: Clock },
    { title: 'Anki Flashcards SRS Deck', type: 'Tool', href: '/flashcards', icon: Sparkles },
    { title: 'Capacity & Sizing Calculator', type: 'Tool', href: '/calculator', icon: Calculator },
    { title: 'Latency Numbers Cheatsheet', type: 'Tool', href: '/reference', icon: Binary },
  ];

  const filteredTopics = allTopicsData
    .filter(
      (t) =>
        t.title.toLowerCase().includes(query.toLowerCase()) ||
        t.summary.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 5)
    .map((t) => ({ title: t.title, type: 'Concept', href: `/learn/${t.slug}`, icon: BookOpen, meta: t.categoryName }));

  const filteredInterviews = interviewProblemsData
    .filter(
      (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 4)
    .map((p) => ({ title: p.title, type: 'Interview', href: `/interviews/${p.slug}`, icon: HelpCircle, meta: p.difficulty }));

  const filteredTools = tools
    .filter((tool) => tool.title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 3)
    .map((t) => ({ title: t.title, type: 'Tool', href: t.href, icon: t.icon, meta: 'Interactive' }));

  const allResults = [...filteredTopics, ...filteredInterviews, ...filteredTools];

  const handleSelect = (href: string) => {
    router.push(href);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % allResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + allResults.length) % allResults.length);
    } else if (e.key === 'Enter' && allResults[selectedIndex]) {
      e.preventDefault();
      handleSelect(allResults[selectedIndex].href);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl rounded-lg border border-border bg-card shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 z-10">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search size={16} className="text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search concepts, interview questions, numbers, tools..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-muted-foreground hover:text-foreground"
            >
              <X size={14} />
            </button>
          )}
          <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-border/40">
          {allResults.length > 0 ? (
            <div className="space-y-0.5">
              {allResults.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = idx === selectedIndex;

                return (
                  <button
                    key={`${item.href}-${idx}`}
                    onClick={() => handleSelect(item.href)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={cn(
                      'w-full flex items-center justify-between px-3 py-2 rounded-md text-xs transition-colors text-left group',
                      isSelected ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon size={14} className={cn(isSelected ? 'text-foreground' : 'text-muted-foreground')} />
                      <span className={cn('font-medium truncate', isSelected && 'text-foreground')}>
                        {item.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-mono text-muted-foreground">
                        {item.meta || item.type}
                      </span>
                      {isSelected && <ArrowRight size={12} className="text-foreground" />}
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="py-8 text-center text-xs text-muted-foreground">
              No matching concepts or tools found for &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2 border-t border-border bg-secondary/30 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>System Design Primer</span>
        </div>
      </div>
    </div>
  );
}
