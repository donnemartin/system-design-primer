'use client';

import React from 'react';
import Link from 'next/link';
import { useProgress } from '@/context/ProgressContext';
import { getTopicBySlug } from '@/content/topicsData';
import {
  Bookmark,
  Trash2,
  ChevronRight,
  PenTool,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BookmarksPage() {
  const { progress, toggleBookmark } = useProgress();

  const bookmarkedTopics = progress.bookmarkedSlugs
    .map((slug) => getTopicBySlug(slug))
    .filter(Boolean);

  const notesList = Object.entries(progress.notes).filter(([_, text]) => text && text.trim().length > 0);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 pb-20">
      <div>
        <span className="text-[10px] font-mono text-rose-600 dark:text-rose-400 uppercase tracking-wider font-bold">
          Personal Workspace
        </span>
        <h1 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mt-0.5">
          Saved Bookmarks & Architectural Notes
        </h1>
        <p className="text-xs text-muted-foreground mt-0.5">
          Access your saved concepts, quick references, and personal scratchpad notes.
        </p>
      </div>

      {/* Bookmarked Topics */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5 font-mono">
          <Bookmark size={13} className="text-rose-500 fill-rose-500/20" />
          Bookmarked Concepts ({bookmarkedTopics.length})
        </h3>

        {bookmarkedTopics.length === 0 ? (
          <div className="p-8 rounded-xl border border-border bg-card text-center text-xs text-muted-foreground">
            No concepts bookmarked yet. Click the &quot;Bookmark&quot; button while reading any topic!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bookmarkedTopics.map((topic) => {
              if (!topic) return null;
              return (
                <div
                  key={topic.slug}
                  className="p-4 rounded-xl border border-rose-500/20 bg-card flex flex-col justify-between group hover:border-rose-500/40 hover:bg-rose-500/5 transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-rose-500" />
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 font-bold uppercase">
                        {topic.categoryName}
                      </span>
                      <button
                        onClick={() => toggleBookmark(topic.slug)}
                        className="p-1 rounded text-muted-foreground hover:text-rose-500 hover:bg-secondary transition-colors"
                        title="Remove bookmark"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>

                    <h4 className="font-bold text-xs text-foreground group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">{topic.title}</h4>
                    <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">{topic.summary}</p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-border/60 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-muted-foreground font-mono">{topic.estimatedMinutes}m read</span>
                    <Link
                      href={`/learn/${topic.slug}`}
                      className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-0.5 text-xs hover:underline group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Open</span>
                      <ChevronRight size={11} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Personal Notebook Section */}
      <div className="space-y-3 pt-4 border-t border-border">
        <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5 font-mono">
          <PenTool size={13} className="text-indigo-500" />
          Personal Notes Notebook ({notesList.length})
        </h3>

        {notesList.length === 0 ? (
          <div className="p-8 rounded-xl border border-border bg-card text-center text-xs text-muted-foreground">
            No personal notes recorded yet. Type notes directly into any topic or interview scratchpad!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {notesList.map(([slug, noteText]) => {
              const topic = getTopicBySlug(slug);

              return (
                <div key={slug} className="p-4 rounded-xl border border-border bg-card space-y-2 hover:border-indigo-500/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-foreground">
                      {topic ? topic.title : slug}
                    </span>
                    {topic && (
                      <Link href={`/learn/${slug}`} className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                        View Topic →
                      </Link>
                    )}
                  </div>
                  <p className="text-xs text-foreground/90 font-mono bg-secondary/30 p-2.5 rounded-lg border border-border/60 whitespace-pre-wrap leading-relaxed">
                    {noteText}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
