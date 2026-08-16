'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { RoadmapNode } from '@/types';
import { roadmapNodesData } from '@/content/roadmapData';
import { getTopicBySlug } from '@/content/topicsData';
import { useProgress } from '@/context/ProgressContext';
import {
  CheckCircle2,
  Lock,
  Clock,
  BookOpen,
  ArrowRight,
  Filter,
  Check,
  ChevronRight,
  X,
  Map,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const domainBadgeMap: Record<string, { label: string; badgeClass: string; dotColor: string }> = {
  fundamentals: { label: 'Fundamentals', badgeClass: 'domain-badge-fundamentals', dotColor: 'bg-indigo-500' },
  networking: { label: 'Networking', badgeClass: 'domain-badge-networking', dotColor: 'bg-cyan-500' },
  'app-architecture': { label: 'Architecture', badgeClass: 'domain-badge-app-architecture', dotColor: 'bg-blue-500' },
  databases: { label: 'Databases', badgeClass: 'domain-badge-databases', dotColor: 'bg-emerald-500' },
  caching: { label: 'Caching', badgeClass: 'domain-badge-caching', dotColor: 'bg-amber-500' },
  'distributed-systems': { label: 'Distributed', badgeClass: 'domain-badge-distributed-systems', dotColor: 'bg-violet-500' },
  security: { label: 'Security', badgeClass: 'domain-badge-security', dotColor: 'bg-rose-500' },
  'real-world-architectures': { label: 'Case Studies', badgeClass: 'domain-badge-real-world-architectures', dotColor: 'bg-purple-500' },
};

export function RoadmapCanvas() {
  const { isTopicCompleted, isTopicInProgress, toggleCompleteTopic } = useProgress();
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null);
  const [filterTrack, setFilterTrack] = useState<string>('all');

  const getNodeStatus = (node: RoadmapNode): 'completed' | 'in_progress' | 'available' | 'locked' => {
    if (isTopicCompleted(node.slug)) return 'completed';
    if (isTopicInProgress(node.slug)) return 'in_progress';
    
    const prereqsMet = node.prerequisites.every((slug) => isTopicCompleted(slug));
    if (prereqsMet || node.prerequisites.length === 0) return 'available';
    return 'locked';
  };

  const stages = Array.from(new Set(roadmapNodesData.map((n) => n.stage))).sort((a, b) => a - b);

  const filteredStages = stages.map((stageNum) => {
    const stageNodes = roadmapNodesData.filter((n) => {
      if (n.stage !== stageNum) return false;
      if (filterTrack !== 'all' && n.category !== filterTrack) return false;
      return true;
    });
    const stageTitle = roadmapNodesData.find((n) => n.stage === stageNum)?.stageTitle || `Stage ${stageNum}`;
    return { stageNum, stageTitle, nodes: stageNodes };
  }).filter((s) => s.nodes.length > 0);

  const selectedTopic = selectedNode ? getTopicBySlug(selectedNode.slug) : null;

  return (
    <div className="relative w-full max-w-5xl mx-auto pb-16">
      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 p-4 rounded-lg border border-border bg-card">
        <div>
          <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
            <Map size={15} className="text-indigo-500" />
            System Design Learning Roadmap
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Structured progression path from foundational single-server trade-offs to distributed platforms.
          </p>
        </div>

        {/* Track Filter */}
        <div className="flex items-center gap-2">
          <Filter size={12} className="text-muted-foreground" />
          <select
            value={filterTrack}
            onChange={(e) => setFilterTrack(e.target.value)}
            className="text-xs bg-secondary border border-border rounded-md px-2.5 py-1.5 text-foreground focus:outline-none focus:ring-1 focus:ring-ring font-medium"
          >
            <option value="all">All Tracks</option>
            <option value="fundamentals">Fundamentals</option>
            <option value="networking">Networking & Edge</option>
            <option value="app-architecture">App Architecture</option>
            <option value="databases">Databases & Storage</option>
            <option value="caching">Caching</option>
            <option value="distributed-systems">Distributed Systems</option>
            <option value="security">Security & Reliability</option>
            <option value="real-world-architectures">Real-World Architectures</option>
          </select>
        </div>
      </div>

      {/* Roadmap Stages Tree */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-emerald-500 before:opacity-30 before:-z-0">
        {filteredStages.map((stage) => (
          <div key={stage.stageNum} className="relative z-10">
            {/* Stage Title Header Pill */}
            <div className="flex justify-start sm:justify-center mb-4 pl-8 sm:pl-0">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-card border border-indigo-500/30 text-foreground shadow-sm flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                {stage.stageTitle}
              </span>
            </div>

            {/* Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-8 sm:pl-0">
              {stage.nodes.map((node) => {
                const status = getNodeStatus(node);
                const isSelected = selectedNode?.id === node.id;
                const domainInfo = domainBadgeMap[node.category] || domainBadgeMap.fundamentals;

                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={cn(
                      'p-4 rounded-lg border transition-all duration-150 cursor-pointer flex flex-col justify-between group bg-card relative overflow-hidden',
                      status === 'completed' && 'border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/10',
                      status === 'in_progress' && 'border-indigo-500 ring-2 ring-indigo-500/30 bg-indigo-500/10 dark:bg-indigo-950/20',
                      status === 'available' && 'border-border hover:border-indigo-500/40 hover:bg-secondary/40',
                      status === 'locked' && 'border-border/50 opacity-60 bg-muted/20 hover:opacity-80',
                      isSelected && 'ring-2 ring-indigo-500 border-indigo-500'
                    )}
                  >
                    {/* Top colored line indicator */}
                    <div className={cn("absolute top-0 left-0 right-0 h-0.5", domainInfo.dotColor)} />

                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className={cn(
                            'text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-bold',
                            status === 'completed' && 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
                            status === 'in_progress' && 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
                            status === 'available' && 'bg-secondary text-muted-foreground border-border',
                            status === 'locked' && 'bg-muted text-muted-foreground border-border/40'
                          )}>
                            {status === 'completed' ? 'Completed ✓' : status === 'in_progress' ? 'In Progress' : status === 'available' ? 'Available' : 'Prereq Required'}
                          </span>
                          <span className={cn("text-[9px] font-mono px-1.5 py-0.2 rounded border font-medium", domainInfo.badgeClass)}>
                            {domainInfo.label}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-mono">
                          <Clock size={10} />
                          <span>{node.estimatedMinutes}m</span>
                        </div>
                      </div>

                      <h3 className="font-bold text-xs text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {node.title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                        {node.summary}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-border/60 flex items-center justify-between text-[11px]">
                      <span className="text-muted-foreground font-mono text-[10px]">{node.difficulty}</span>
                      <div className="flex items-center gap-0.5 text-indigo-600 dark:text-indigo-400 font-semibold text-[11px] group-hover:translate-x-0.5 transition-transform">
                        <span>Details</span>
                        <ChevronRight size={11} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Node Details Drawer */}
      {selectedNode && selectedTopic && (
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-card border-l border-border shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-right duration-200 overflow-y-auto">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="text-xs font-mono uppercase text-indigo-600 dark:text-indigo-400 font-bold">
                {selectedNode.stageTitle}
              </span>
              <button
                onClick={() => setSelectedNode(null)}
                className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            <div className="mt-4">
              <h3 className="text-base font-bold text-foreground">{selectedNode.title}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground border border-border">
                  {selectedNode.difficulty}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border flex items-center gap-1">
                  <Clock size={10} /> {selectedNode.estimatedMinutes} min read
                </span>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1 font-mono">
                Overview
              </div>
              <p className="text-xs text-foreground/90 leading-relaxed">
                {selectedTopic.definition}
              </p>
            </div>

            <div className="mt-4">
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5 font-mono">
                Prerequisites ({selectedNode.prerequisites.length})
              </div>
              {selectedNode.prerequisites.length === 0 ? (
                <div className="text-xs text-emerald-500 flex items-center gap-1.5 font-medium">
                  <Check size={12} /> No prerequisites required.
                </div>
              ) : (
                <div className="space-y-1.5">
                  {selectedNode.prerequisites.map((prereqSlug) => {
                    const prereqTopic = getTopicBySlug(prereqSlug);
                    const isDone = isTopicCompleted(prereqSlug);

                    return (
                      <div
                        key={prereqSlug}
                        className={cn(
                          'flex items-center justify-between p-2 rounded-md border text-xs',
                          isDone ? 'border-emerald-500/20 bg-emerald-500/5 text-foreground' : 'border-border bg-secondary/20 text-muted-foreground'
                        )}
                      >
                        <span className="font-medium text-[11px]">{prereqTopic?.title || prereqSlug}</span>
                        {isDone ? (
                          <span className="text-emerald-500 font-mono text-[10px] flex items-center gap-1 font-bold">
                            <CheckCircle2 size={11} /> Done
                          </span>
                        ) : (
                          <span className="text-amber-500 font-mono text-[10px] flex items-center gap-1 font-bold">
                            <Lock size={11} /> Required
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="mt-4">
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5 font-mono">
                Key Learning Outcomes
              </div>
              <ul className="space-y-1">
                {selectedTopic.pros.slice(0, 2).map((pro, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1.5 leading-relaxed">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-border mt-6 space-y-2">
            <Link
              href={`/learn/${selectedNode.slug}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <BookOpen size={13} />
              <span>Read Full Topic</span>
              <ArrowRight size={13} />
            </Link>

            <button
              onClick={() => toggleCompleteTopic(selectedNode.slug)}
              className={cn(
                'w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md border text-xs font-semibold transition-colors',
                isTopicCompleted(selectedNode.slug)
                  ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                  : 'border-border bg-card hover:bg-secondary text-foreground'
              )}
            >
              <CheckCircle2 size={13} />
              <span>{isTopicCompleted(selectedNode.slug) ? 'Completed ✓' : 'Mark as Completed'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
