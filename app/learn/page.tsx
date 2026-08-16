'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { allTopicsData } from '@/content/topicsData';
import { categoriesData } from '@/content/categoriesData';
import { useProgress } from '@/context/ProgressContext';
import {
  Search,
  Clock,
  ChevronRight,
  Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const domainCardTints: Record<string, { dotColor: string; badgeClass: string; borderHover: string }> = {
  fundamentals: { dotColor: 'bg-indigo-500', badgeClass: 'domain-badge-fundamentals', borderHover: 'hover:border-indigo-500/50' },
  networking: { dotColor: 'bg-cyan-500', badgeClass: 'domain-badge-networking', borderHover: 'hover:border-cyan-500/50' },
  'app-architecture': { dotColor: 'bg-blue-500', badgeClass: 'domain-badge-app-architecture', borderHover: 'hover:border-blue-500/50' },
  databases: { dotColor: 'bg-emerald-500', badgeClass: 'domain-badge-databases', borderHover: 'hover:border-emerald-500/50' },
  caching: { dotColor: 'bg-amber-500', badgeClass: 'domain-badge-caching', borderHover: 'hover:border-amber-500/50' },
  'distributed-systems': { dotColor: 'bg-violet-500', badgeClass: 'domain-badge-distributed-systems', borderHover: 'hover:border-violet-500/50' },
  security: { dotColor: 'bg-rose-500', badgeClass: 'domain-badge-security', borderHover: 'hover:border-rose-500/50' },
  'real-world-architectures': { dotColor: 'bg-purple-500', badgeClass: 'domain-badge-real-world-architectures', borderHover: 'hover:border-purple-500/50' },
};

export default function LearnDirectoryPage() {
  const { isTopicCompleted } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const filteredTopics = allTopicsData.filter((topic) => {
    if (selectedCategory !== 'all' && topic.category !== selectedCategory) return false;
    if (selectedDifficulty !== 'all' && topic.difficulty !== selectedDifficulty) return false;
    if (
      searchQuery &&
      !topic.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !topic.summary.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 pb-20">
      {/* Header & Controls */}
      <div className="space-y-3">
        <div>
          <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-bold">
            Knowledge Base
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mt-0.5">
            System Design Topics & Modules
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Structured modules on large-scale infrastructure, caching, database sharding, and consensus.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 p-2.5 rounded-lg border border-border bg-card">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Filter concepts (e.g. CAP Theorem, Sharding, Load Balancer)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs text-foreground placeholder:text-muted-foreground pl-8 pr-2.5 py-1.5 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-xs bg-secondary border border-border rounded-md px-2.5 py-1.5 text-foreground focus:outline-none font-medium"
            >
              <option value="all">All Domains</option>
              {categoriesData.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="text-xs bg-secondary border border-border rounded-md px-2.5 py-1.5 text-foreground focus:outline-none font-medium"
            >
              <option value="all">All Difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredTopics.map((topic) => {
          const isCompleted = isTopicCompleted(topic.slug);
          const domainInfo = domainCardTints[topic.category] || domainCardTints.fundamentals;

          return (
            <Link
              key={topic.slug}
              href={`/learn/${topic.slug}`}
              className={cn(
                'p-4 rounded-xl border transition-all flex flex-col justify-between group bg-card relative overflow-hidden',
                domainInfo.borderHover,
                isCompleted
                  ? 'border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/10'
                  : 'border-border hover:bg-secondary/30'
              )}
            >
              <div className={cn("absolute top-0 left-0 right-0 h-0.5", domainInfo.dotColor)} />

              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className={cn("text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-bold", domainInfo.badgeClass)}>
                      {topic.difficulty}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
                      <Clock size={10} /> {topic.estimatedMinutes}m
                    </span>
                  </div>
                  {isCompleted && (
                    <span className="text-emerald-500 font-mono text-[10px] flex items-center gap-1 font-bold">
                      <Check size={11} /> Done
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-xs text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                  {topic.summary}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-border/60 flex items-center justify-between text-[10px] text-muted-foreground font-mono">
                <span className="truncate">{topic.categoryName}</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform">
                  Read <ChevronRight size={11} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {filteredTopics.length === 0 && (
        <div className="text-center py-12 text-muted-foreground text-xs font-mono">
          No concepts match your filter criteria.
        </div>
      )}
    </div>
  );
}
