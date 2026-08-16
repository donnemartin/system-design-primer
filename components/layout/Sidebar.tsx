'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BookOpen,
  HelpCircle,
  Map,
  Layers,
  Calculator,
  Binary,
  Sparkles,
  Flame,
  Bookmark,
  TrendingUp,
  Cpu,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useProgress } from '@/context/ProgressContext';

const navigationGroups = [
  {
    title: 'LEARN',
    items: [
      { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, badge: null, color: 'text-indigo-500' },
      { name: 'Knowledge Base', href: '/learn', icon: BookOpen, badge: '17', color: 'text-indigo-500' },
      { name: 'Visual Roadmap', href: '/roadmap', icon: Map, badge: 'New', color: 'text-cyan-500' },
      { name: 'Architectures', href: '/architectures', icon: Layers, badge: null, color: 'text-blue-500' },
    ],
  },
  {
    title: 'PRACTICE & TOOLS',
    items: [
      { name: 'Interview Problems', href: '/interviews', icon: HelpCircle, badge: '5', color: 'text-amber-500' },
      { name: 'Timed Mock Room', href: '/interview-mode', icon: Cpu, badge: null, color: 'text-amber-500' },
      { name: 'Anki Flashcards', href: '/flashcards', icon: Sparkles, badge: 'SM-2', color: 'text-violet-500' },
      { name: 'Capacity Calculator', href: '/calculator', icon: Calculator, badge: null, color: 'text-emerald-500' },
      { name: 'Numbers Cheatsheet', href: '/reference', icon: Binary, badge: null, color: 'text-cyan-500' },
    ],
  },
  {
    title: 'WORKSPACE',
    items: [
      { name: 'Saved & Notes', href: '/bookmarks', icon: Bookmark, badge: null, color: 'text-rose-500' },
      { name: 'Domain Mastery', href: '/progress', icon: TrendingUp, badge: null, color: 'text-emerald-500' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { progress, getCompletionPercentage } = useProgress();
  const completionPercentage = getCompletionPercentage();

  return (
    <aside className="w-56 border-r border-border bg-card flex flex-col justify-between shrink-0 h-screen sticky top-0 z-30 select-none">
      {/* Brand Header */}
      <div>
        <div className="h-12 border-b border-border flex items-center px-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center font-mono font-bold text-xs shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              SD
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xs text-foreground tracking-tight leading-tight flex items-center gap-1">
                System Design
                <span className="text-[9px] font-mono font-bold px-1 py-0.2 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  2.0
                </span>
              </span>
              <span className="text-[10px] text-muted-foreground font-mono">Primer Interactive</span>
            </div>
          </Link>
        </div>

        {/* Navigation Section Items */}
        <div className="p-2.5 space-y-4 overflow-y-auto max-h-[calc(100vh-140px)]">
          {navigationGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-1">
              <div className="px-2 py-1 text-[9px] font-mono font-bold tracking-widest text-muted-foreground uppercase flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-indigo-500" />
                {group.title}
              </div>

              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    pathname === item.href ||
                    (item.href !== '/' && item.href !== '/dashboard' && pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-all group relative',
                        isActive
                          ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border border-indigo-500/20'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                      )}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <Icon
                          size={14}
                          className={cn(
                            'transition-colors shrink-0',
                            isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-muted-foreground group-hover:text-foreground'
                          )}
                        />
                        <span className="truncate text-[11px]">{item.name}</span>
                      </div>

                      {item.badge && (
                        <span
                          className={cn(
                            'text-[9px] font-mono px-1.5 py-0.2 rounded border font-semibold',
                            isActive
                              ? 'bg-indigo-500 text-white border-indigo-600'
                              : 'bg-secondary text-muted-foreground border-border group-hover:border-muted-foreground/40'
                          )}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Streak & Progress Footer */}
      <div className="p-3 border-t border-border bg-secondary/30 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-amber-500 font-semibold">
            <Flame size={13} className="fill-amber-500/20" />
            <span>{progress.streakDays}d Streak</span>
          </div>
          <Link
            href="/progress"
            className="font-mono text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            {completionPercentage}% Mastery
          </Link>
        </div>

        {/* Multi-step colored progress bar */}
        <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden border border-border/60">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>
    </aside>
  );
}
