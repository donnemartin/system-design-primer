'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  Moon,
  Sun,
  Flame,
  Bookmark,
  ChevronRight,
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useProgress } from '@/context/ProgressContext';
import { CommandPalette } from '@/components/layout/CommandPalette';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { progress } = useProgress();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Generate breadcrumb items
  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbNameMap: Record<string, string> = {
    dashboard: 'Dashboard',
    roadmap: 'Roadmap',
    learn: 'Knowledge Base',
    interviews: 'Interviews',
    'interview-mode': 'Mock Simulator',
    architectures: 'System Builder',
    flashcards: 'Flashcards',
    calculator: 'Capacity Calculator',
    reference: 'Numbers Reference',
    bookmarks: 'Bookmarks',
    progress: 'Analytics',
  };

  return (
    <>
      <header className="sticky top-0 z-30 w-full border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="flex h-11 items-center justify-between px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground min-w-0">
            <Link href="/dashboard" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium shrink-0">
              System Design
            </Link>
            {pathSegments.map((segment, idx) => {
              const isLast = idx === pathSegments.length - 1;
              const formattedName =
                breadcrumbNameMap[segment] ||
                segment
                  .split('-')
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(' ');

              return (
                <React.Fragment key={segment}>
                  <ChevronRight size={11} className="text-muted-foreground/50 shrink-0" />
                  <span
                    className={cn(
                      'truncate',
                      isLast ? 'text-foreground font-semibold max-w-[220px]' : 'hover:text-foreground transition-colors max-w-[140px]'
                    )}
                  >
                    {formattedName}
                  </span>
                </React.Fragment>
              );
            })}
          </div>

          {/* Right Toolbar Actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Quick Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-2.5 py-1 rounded-md border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 text-xs text-muted-foreground hover:text-foreground transition-all group"
              title="Search concepts (Cmd+K)"
            >
              <Search size={12} className="text-indigo-500 group-hover:scale-105 transition-transform" />
              <span className="hidden sm:inline text-[11px]">Search...</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[9px] font-mono px-1.5 py-0.5 rounded bg-card border border-border text-muted-foreground leading-none">
                ⌘K
              </kbd>
            </button>

            {/* Bookmarks Link */}
            <Link
              href="/bookmarks"
              className="p-1.5 rounded-md border border-border bg-card hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors relative"
              title="Saved Bookmarks"
            >
              <Bookmark size={13} />
              {progress.bookmarkedSlugs.length > 0 && (
                <span className="absolute -top-1 -right-1 h-3.5 min-w-[14px] px-1 rounded-full bg-rose-500 text-white text-[8px] font-mono flex items-center justify-center font-bold">
                  {progress.bookmarkedSlugs.length}
                </span>
              )}
            </Link>

            {/* Streak Counter Pill */}
            <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-md border border-amber-500/20 bg-amber-500/10 text-xs font-mono">
              <Flame size={12} className="text-amber-500 fill-amber-500/30" />
              <span className="text-amber-600 dark:text-amber-400 font-bold text-[10px]">{progress.streakDays}d</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md border border-border bg-card hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={13} className="text-amber-400" /> : <Moon size={13} className="text-indigo-600" />}
            </button>
          </div>
        </div>
      </header>

      {/* Global Command Palette Search Modal */}
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
