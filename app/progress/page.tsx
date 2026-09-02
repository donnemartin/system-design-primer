'use client';

import React, { useState } from 'react';
import { useProgress } from '@/context/ProgressContext';
import { allTopicsData } from '@/content/topicsData';
import { categoriesData } from '@/content/categoriesData';
import { interviewProblemsData } from '@/content/interviewProblems';
import {
  TrendingUp,
  Award,
  Flame,
  CheckCircle2,
  Calendar,
  Download,
  RotateCcw,
  Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const categoryColors: Record<string, { bar: string; badge: string; text: string }> = {
  fundamentals: { bar: 'bg-indigo-500', badge: 'domain-badge-fundamentals', text: 'text-indigo-600 dark:text-indigo-400' },
  networking: { bar: 'bg-cyan-500', badge: 'domain-badge-networking', text: 'text-cyan-600 dark:text-cyan-400' },
  'app-architecture': { bar: 'bg-blue-500', badge: 'domain-badge-app-architecture', text: 'text-blue-600 dark:text-blue-400' },
  databases: { bar: 'bg-emerald-500', badge: 'domain-badge-databases', text: 'text-emerald-600 dark:text-emerald-400' },
  caching: { bar: 'bg-amber-500', badge: 'domain-badge-caching', text: 'text-amber-600 dark:text-amber-400' },
  'distributed-systems': { bar: 'bg-violet-500', badge: 'domain-badge-distributed-systems', text: 'text-violet-600 dark:text-violet-400' },
  security: { bar: 'bg-rose-500', badge: 'domain-badge-security', text: 'text-rose-600 dark:text-rose-400' },
  'real-world-architectures': { bar: 'bg-purple-500', badge: 'domain-badge-real-world-architectures', text: 'text-purple-600 dark:text-purple-400' },
};

export default function ProgressAnalyticsPage() {
  const {
    progress,
    getCompletionPercentage,
    getCategoryProgress,
    exportProgressJson,
    importProgressJson,
    resetProgress,
  } = useProgress();

  const [importText, setImportText] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [copiedExport, setCopiedExport] = useState(false);

  const completionPercentage = getCompletionPercentage();

  const handleExport = () => {
    const json = exportProgressJson();
    navigator.clipboard.writeText(json);
    setCopiedExport(true);
    setTimeout(() => setCopiedExport(false), 2000);
  };

  const handleImport = () => {
    if (!importText.trim()) return;
    const ok = importProgressJson(importText);
    if (ok) {
      setImportStatus('Progress imported successfully!');
      setImportText('');
    } else {
      setImportStatus('Failed to import JSON: Invalid format');
    }
    setTimeout(() => setImportStatus(null), 3000);
  };

  const past28Days = Array.from({ length: 28 }, (_, i) => {
    const d = new Date(Date.now() - (27 - i) * 86400000);
    return d.toISOString().split('T')[0];
  });

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 pb-20">
      <div>
        <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-bold">
          Learning Analytics
        </span>
        <h1 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mt-0.5">
          Progress & Domain Mastery
        </h1>
        <p className="text-xs text-muted-foreground mt-0.5">
          Track completed architectural modules, interview practice, memory retention, and study streaks.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-950/20 space-y-1.5">
          <div className="flex items-center justify-between text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
            <span>Overall Mastery</span>
            <Award size={15} className="text-indigo-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-foreground">
            {completionPercentage}%
          </div>
          <div className="text-[10px] text-muted-foreground font-mono">
            {progress.completedTopicSlugs.length} / {allTopicsData.length} topics completed
          </div>
        </div>

        <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 dark:bg-amber-950/20 space-y-1.5">
          <div className="flex items-center justify-between text-xs text-amber-600 dark:text-amber-400 font-semibold">
            <span>Study Streak</span>
            <Flame size={15} className="text-amber-500 fill-amber-500/20 animate-pulse" />
          </div>
          <div className="text-2xl font-bold font-mono text-foreground">
            {progress.streakDays} Days
          </div>
          <div className="text-[10px] text-muted-foreground font-mono">
            Active today ({new Date().toISOString().split('T')[0]})
          </div>
        </div>

        <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/20 space-y-1.5">
          <div className="flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
            <span>Interviews Solved</span>
            <CheckCircle2 size={15} className="text-emerald-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-foreground">
            {progress.solvedInterviewSlugs.length} / {interviewProblemsData.length}
          </div>
          <div className="text-[10px] text-muted-foreground font-mono">
            FAANG design problems completed
          </div>
        </div>
      </div>

      {/* Activity Heatmap Grid */}
      <div className="p-4 rounded-xl border border-border bg-card space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5 font-mono">
            <Calendar size={13} className="text-indigo-500" />
            Study Activity Heatmap (Last 4 Weeks)
          </h3>
          <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono font-bold">
            {progress.activityDates.length} Active Days
          </span>
        </div>

        <div className="grid grid-cols-7 sm:grid-cols-14 gap-1.5 pt-1">
          {past28Days.map((dateStr) => {
            const isActive = progress.activityDates.includes(dateStr);

            return (
              <div
                key={dateStr}
                className={cn(
                  'h-8 rounded-md border flex flex-col items-center justify-center text-[10px] font-mono transition-all',
                  isActive
                    ? 'border-indigo-500 bg-indigo-600 text-white font-bold shadow-sm shadow-indigo-500/20'
                    : 'border-border/60 bg-secondary/30 text-muted-foreground/60'
                )}
                title={`${dateStr}: ${isActive ? 'Active' : 'No activity'}`}
              >
                <span>{dateStr.slice(8)}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Domain Breakdown */}
      <div className="p-4 rounded-xl border border-border bg-card space-y-3.5">
        <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5 font-mono">
          <TrendingUp size={13} className="text-emerald-500" />
          Category Mastery Breakdown
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categoriesData.map((cat) => {
            const catStat = getCategoryProgress(cat.id);
            const style = categoryColors[cat.id] || categoryColors.fundamentals;

            return (
              <div key={cat.id} className="p-3.5 rounded-lg border border-border bg-card space-y-1.5 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-foreground text-[11px]">{cat.title}</span>
                  <span className={cn("font-mono text-[11px] font-bold", style.text)}>{catStat.percentage}%</span>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <div
                    className={cn("h-full rounded-full transition-all duration-300", style.bar)}
                    style={{ width: `${catStat.percentage}%` }}
                  />
                </div>
                <div className="text-[10px] text-muted-foreground font-mono">
                  {catStat.completed} / {catStat.total} completed
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Data Backup */}
      <div className="p-4 rounded-xl border border-border bg-card space-y-3">
        <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5 font-mono">
          <Download size={13} className="text-indigo-500" />
          Data Portability & Backup (JSON)
        </h3>

        <p className="text-xs text-muted-foreground leading-relaxed">
          Export your learning history, flashcard SRS ratings, notes, and streak to a portable JSON backup file.
        </p>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleExport}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-colors"
          >
            {copiedExport ? <Check size={12} className="text-emerald-300" /> : <Download size={12} />}
            <span>{copiedExport ? 'Copied JSON!' : 'Export Progress JSON'}</span>
          </button>

          <button
            onClick={resetProgress}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-card hover:bg-secondary text-muted-foreground hover:text-rose-500 text-xs font-medium transition-colors"
          >
            <RotateCcw size={12} />
            <span>Reset Progress</span>
          </button>
        </div>

        {/* Import JSON */}
        <div className="pt-3 border-t border-border space-y-2">
          <label className="text-xs font-medium text-foreground block">
            Import Progress from JSON
          </label>
          <div className="flex gap-2">
            <textarea
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder="Paste exported JSON here..."
              className="flex-1 h-16 p-2 rounded-md border border-border bg-secondary/30 text-xs text-foreground font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <button
              onClick={handleImport}
              className="px-3.5 py-1.5 rounded-md bg-foreground text-background text-xs font-semibold self-end hover:opacity-90 transition-opacity"
            >
              Import
            </button>
          </div>
          {importStatus && (
            <div className={cn('text-xs font-medium', importStatus.includes('success') ? 'text-emerald-500' : 'text-rose-500')}>
              {importStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
