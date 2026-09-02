'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { interviewProblemsData } from '@/content/interviewProblems';
import { useProgress } from '@/context/ProgressContext';
import {
  Search,
  CheckCircle2,
  Clock,
  ChevronRight,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function InterviewsDirectoryPage() {
  const { isInterviewSolved } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const filteredProblems = interviewProblemsData.filter((p) => {
    if (selectedDifficulty !== 'all' && p.difficulty !== selectedDifficulty) return false;
    if (
      searchQuery &&
      !p.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !p.companyTags.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()))
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
          <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider font-bold">
            FAANG & Top Tech Practice
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mt-0.5">
            System Design Interview Questions
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Stepped solutions for the most frequent system design interview questions asked at top tech companies.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 p-2.5 rounded-lg border border-border bg-card">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search problems or companies (e.g. Twitter, Pastebin, Google)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs text-foreground placeholder:text-muted-foreground pl-8 pr-2.5 py-1.5 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="text-xs bg-secondary border border-border rounded-md px-2.5 py-1.5 text-foreground focus:outline-none font-medium"
            >
              <option value="all">All Difficulties</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {filteredProblems.map((problem) => {
          const isSolved = isInterviewSolved(problem.slug);

          return (
            <Link
              key={problem.slug}
              href={`/interviews/${problem.slug}`}
              className={cn(
                'p-5 rounded-xl border transition-all flex flex-col justify-between group bg-card relative overflow-hidden',
                isSolved
                  ? 'border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/10'
                  : 'border-amber-500/20 hover:border-amber-500/40 hover:bg-amber-500/5'
              )}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500" />

              <div>
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded domain-badge-interviews uppercase">
                      {problem.difficulty}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
                      <Clock size={10} /> {problem.estimatedTime}
                    </span>
                  </div>

                  {isSolved && (
                    <span className="text-emerald-500 font-mono text-[10px] flex items-center gap-1 font-bold">
                      <CheckCircle2 size={11} /> Solved
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-sm text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                  {problem.subtitle}
                </p>

                {/* Company tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {problem.companyTags.map((company, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 font-medium"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-border/60 flex items-center justify-between text-[10px] font-mono">
                <span className="text-muted-foreground">
                  {problem.scorecardChecklist.length} Rubric Criteria
                </span>
                <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-0.5 text-xs group-hover:translate-x-0.5 transition-transform">
                  Practice <ChevronRight size={11} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
