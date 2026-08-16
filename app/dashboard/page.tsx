'use client';

import React from 'react';
import Link from 'next/link';
import { useProgress } from '@/context/ProgressContext';
import { allTopicsData, getTopicBySlug } from '@/content/topicsData';
import { categoriesData } from '@/content/categoriesData';
import { interviewProblemsData } from '@/content/interviewProblems';
import {
  PlayCircle,
  Award,
  Flame,
  BookOpen,
  HelpCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Bookmark,
  ChevronRight,
  Map,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const categoryColorBars: Record<string, string> = {
  fundamentals: 'bg-indigo-500',
  networking: 'bg-cyan-500',
  'app-architecture': 'bg-blue-500',
  databases: 'bg-emerald-500',
  caching: 'bg-amber-500',
  'distributed-systems': 'bg-violet-500',
  security: 'bg-rose-500',
  'real-world-architectures': 'bg-purple-500',
};

export default function DashboardPage() {
  const {
    progress,
    getCompletionPercentage,
    getCategoryProgress,
    getRecommendedNextTopic,
    isTopicCompleted,
  } = useProgress();

  const completionPercentage = getCompletionPercentage();
  const recommendedTopic = getRecommendedNextTopic();

  const inProgressTopic = progress.inProgressTopicSlugs.length > 0
    ? getTopicBySlug(progress.inProgressTopicSlugs[0])
    : recommendedTopic;

  const flashcardReviewsCount = Object.keys(progress.flashcardReviews).length;

  return (
    <div className="space-y-6 pb-16">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-card">
        <div>
          <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-bold">
            Engineer Dashboard
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mt-0.5">
            System Design Workspace
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Track architecture mastery, review weak areas, and practice FAANG interview questions.
          </p>
        </div>

        {/* Streak & Mastery stats */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-amber-500/30 bg-amber-500/10 font-mono">
            <Flame className="text-amber-500 fill-amber-500/20 animate-pulse" size={18} />
            <div>
              <div className="text-xs font-bold text-amber-600 dark:text-amber-400">{progress.streakDays}d</div>
              <div className="text-[9px] text-muted-foreground font-semibold">Streak</div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 font-mono">
            <Award size={18} className="text-indigo-500" />
            <div>
              <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{completionPercentage}%</div>
              <div className="text-[9px] text-muted-foreground font-semibold">Mastery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Metric Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-lg border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-950/20 space-y-1">
          <div className="flex items-center justify-between text-xs text-indigo-600 dark:text-indigo-400 font-medium">
            <span>Topics Completed</span>
            <BookOpen size={14} className="text-indigo-500" />
          </div>
          <div className="text-xl font-bold font-mono text-foreground">
            {progress.completedTopicSlugs.length}{' '}
            <span className="text-xs font-normal text-muted-foreground">/ {allTopicsData.length}</span>
          </div>
        </div>

        <div className="p-3.5 rounded-lg border border-amber-500/20 bg-amber-500/5 dark:bg-amber-950/20 space-y-1">
          <div className="flex items-center justify-between text-xs text-amber-600 dark:text-amber-400 font-medium">
            <span>Interviews Solved</span>
            <HelpCircle size={14} className="text-amber-500" />
          </div>
          <div className="text-xl font-bold font-mono text-foreground">
            {progress.solvedInterviewSlugs.length}{' '}
            <span className="text-xs font-normal text-muted-foreground">/ {interviewProblemsData.length}</span>
          </div>
        </div>

        <div className="p-3.5 rounded-lg border border-violet-500/20 bg-violet-500/5 dark:bg-violet-950/20 space-y-1">
          <div className="flex items-center justify-between text-xs text-violet-600 dark:text-violet-400 font-medium">
            <span>Flashcards Reviewed</span>
            <Sparkles size={14} className="text-violet-500" />
          </div>
          <div className="text-xl font-bold font-mono text-foreground">
            {flashcardReviewsCount}
          </div>
        </div>

        <div className="p-3.5 rounded-lg border border-rose-500/20 bg-rose-500/5 dark:bg-rose-950/20 space-y-1">
          <div className="flex items-center justify-between text-xs text-rose-600 dark:text-rose-400 font-medium">
            <span>Saved Bookmarks</span>
            <Bookmark size={14} className="text-rose-500" />
          </div>
          <div className="text-xl font-bold font-mono text-foreground">
            {progress.bookmarkedSlugs.length}
          </div>
        </div>
      </div>

      {/* Main Grid: Continue Learning + Domain Mastery */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Continue Learning Widget */}
          {inProgressTopic && (
            <div className="p-5 rounded-xl border border-indigo-500/30 bg-card space-y-3.5 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-600" />

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 font-bold">
                  <PlayCircle size={14} className="text-indigo-500" /> Continue Learning
                </span>
                <span className="text-[11px] font-mono text-muted-foreground">{inProgressTopic.estimatedMinutes}m read</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground">{inProgressTopic.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">{inProgressTopic.summary}</p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                  <span>Topic Progress</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">{isTopicCompleted(inProgressTopic.slug) ? '100%' : '50%'}</span>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full transition-all duration-300"
                    style={{ width: isTopicCompleted(inProgressTopic.slug) ? '100%' : '50%' }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-muted-foreground font-mono">{inProgressTopic.categoryName}</span>
                <Link
                  href={`/learn/${inProgressTopic.slug}`}
                  className="px-3.5 py-1.5 rounded-md bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <span>Resume Topic</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          )}

          {/* Recommended Next Concept */}
          {recommendedTopic && recommendedTopic.slug !== inProgressTopic?.slug && (
            <div className="p-4 rounded-lg border border-border bg-card space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
                  <Sparkles size={12} /> Recommended Next
                </span>
                <span className="text-[10px] text-muted-foreground font-mono">{recommendedTopic.difficulty}</span>
              </div>

              <div>
                <h4 className="font-semibold text-xs text-foreground">{recommendedTopic.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2 leading-relaxed">{recommendedTopic.summary}</p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border/60">
                <span className="text-[10px] text-muted-foreground font-mono">{recommendedTopic.categoryName}</span>
                <Link
                  href={`/learn/${recommendedTopic.slug}`}
                  className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-semibold flex items-center gap-0.5"
                >
                  <span>Start Topic</span>
                  <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          )}

          {/* Bookmarked Topics */}
          <div className="p-4 rounded-lg border border-border bg-card space-y-2.5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xs uppercase tracking-wider text-muted-foreground font-mono flex items-center gap-1.5">
                <Bookmark size={12} className="text-rose-500" />
                Saved Bookmarks & Notes
              </h3>
              <Link href="/bookmarks" className="text-[11px] text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
                View All
              </Link>
            </div>

            <div className="divide-y divide-border/50">
              {progress.bookmarkedSlugs.slice(0, 3).map((slug) => {
                const topic = getTopicBySlug(slug);
                if (!topic) return null;

                return (
                  <Link
                    key={slug}
                    href={`/learn/${slug}`}
                    className="py-2 flex items-center justify-between hover:text-foreground transition-colors group text-xs"
                  >
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{topic.title}</div>
                      <div className="text-[10px] text-muted-foreground font-mono">{topic.categoryName}</div>
                    </div>
                    <ChevronRight size={13} className="text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Domain Mastery */}
        <div className="lg:col-span-5 space-y-5">
          <div className="p-4 rounded-lg border border-border bg-card space-y-3.5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xs uppercase tracking-wider text-foreground flex items-center gap-1.5 font-mono">
                <TrendingUp size={13} className="text-emerald-500" />
                Domain Mastery Breakdown
              </h3>
              <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">{completionPercentage}%</span>
            </div>

            <div className="space-y-2.5">
              {categoriesData.map((category) => {
                const catProgress = getCategoryProgress(category.id);
                const barColor = categoryColorBars[category.id] || 'bg-indigo-500';

                return (
                  <div key={category.id} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-foreground text-[11px]">{category.title}</span>
                      <span className="font-mono text-muted-foreground text-[10px]">
                        {catProgress.completed}/{catProgress.total} ({catProgress.percentage}%)
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className={cn("h-full rounded-full transition-all duration-300", barColor)}
                        style={{ width: `${catProgress.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2.5 border-t border-border">
              <Link
                href="/roadmap"
                className="w-full flex items-center justify-center gap-1.5 p-2 rounded-md border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 text-xs font-semibold text-indigo-600 dark:text-indigo-400 transition-colors"
              >
                <Map size={13} />
                <span>View Full Visual Roadmap</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
