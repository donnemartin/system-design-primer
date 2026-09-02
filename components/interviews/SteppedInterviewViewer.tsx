'use client';

import React, { useState } from 'react';
import { InterviewProblem } from '@/types';
import { useProgress } from '@/context/ProgressContext';
import {
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Eye,
  Bookmark,
  Check,
  FileCode,
  PenTool,
  AlertTriangle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SteppedInterviewViewerProps {
  problem: InterviewProblem;
}

export function SteppedInterviewViewer({ problem }: SteppedInterviewViewerProps) {
  const { progress, markInterviewSolved, isInterviewSolved, toggleBookmark, isBookmarked, saveTopicNote } = useProgress();
  const [revealedSteps, setRevealedSteps] = useState<Record<number, boolean>>({
    1: true,
  });
  const [userNotes, setUserNotes] = useState<string>(progress.notes[problem.slug] || '');
  const [checkedChecklist, setCheckedChecklist] = useState<Record<number, boolean>>({});

  const toggleStep = (stepNum: number) => {
    setRevealedSteps((prev) => ({
      ...prev,
      [stepNum]: !prev[stepNum],
    }));
  };

  const revealAllSteps = () => {
    setRevealedSteps({ 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true });
  };

  const isSolved = isInterviewSolved(problem.slug);
  const bookmarked = isBookmarked(problem.slug);

  const handleSaveNotes = (val: string) => {
    setUserNotes(val);
    saveTopicNote(problem.slug, val);
  };

  const toggleChecklistItem = (idx: number) => {
    setCheckedChecklist((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 pb-20">
      {/* Top Header Card */}
      <div className="p-5 rounded-xl border border-amber-500/25 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-card space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded domain-badge-interviews uppercase font-bold">
              {problem.difficulty}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-card/80 text-muted-foreground border border-border">
              {problem.estimatedTime}
            </span>
            {problem.companyTags.map((company, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 font-medium"
              >
                {company}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleBookmark(problem.slug)}
              className={cn(
                'flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-xs font-medium transition-colors',
                bookmarked
                  ? 'border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400'
                  : 'border-border bg-card hover:bg-secondary text-muted-foreground'
              )}
            >
              <Bookmark size={12} className={cn(bookmarked && 'fill-rose-500 text-rose-500')} />
              <span>{bookmarked ? 'Saved' : 'Bookmark'}</span>
            </button>

            <button
              onClick={() => markInterviewSolved(problem.slug)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-semibold transition-colors',
                isSolved
                  ? 'border-emerald-500/30 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                  : 'border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm'
              )}
            >
              <CheckCircle2 size={12} />
              <span>{isSolved ? 'Solved ✓' : 'Mark Solved'}</span>
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">{problem.title}</h1>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{problem.overview}</p>
        </div>

        {/* Stepped Navigation Toolbar */}
        <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-amber-600 dark:text-amber-400 font-bold text-[11px] font-mono">
            Step-by-Step 8-Stage Solution Framework
          </span>
          <button
            onClick={revealAllSteps}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground font-medium transition-colors"
          >
            <Eye size={12} className="text-indigo-500" /> Reveal All Steps
          </button>
        </div>
      </div>

      {/* Step 1: Use Cases & Constraints */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <button
          onClick={() => toggleStep(1)}
          className="w-full flex items-center justify-between p-3.5 bg-secondary/30 hover:bg-secondary/50 transition-colors text-left"
        >
          <div className="flex items-center gap-2.5">
            <span className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-xs font-mono font-bold flex items-center justify-center shadow-sm">
              1
            </span>
            <div>
              <h3 className="text-xs font-bold text-foreground">
                Step 1: Scope, Functional Requirements & Constraints
              </h3>
              <p className="text-[10px] text-muted-foreground">Define what is in-scope vs out-of-scope.</p>
            </div>
          </div>
          {revealedSteps[1] ? <ChevronDown size={14} className="text-muted-foreground" /> : <ChevronRight size={14} className="text-muted-foreground" />}
        </button>

        {revealedSteps[1] && (
          <div className="p-4 border-t border-border space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 rounded-md bg-secondary/20 border border-border space-y-1.5">
                <div className="font-semibold text-foreground uppercase tracking-wider text-[10px]">
                  In-Scope Functional Requirements
                </div>
                <ul className="space-y-1">
                  {problem.useCases.inScope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-foreground/90 leading-relaxed">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-md bg-secondary/20 border border-border space-y-1.5">
                <div className="font-semibold text-muted-foreground uppercase tracking-wider text-[10px]">
                  Out-of-Scope (Non-Goals)
                </div>
                <ul className="space-y-1">
                  {problem.useCases.outOfScope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-muted-foreground leading-relaxed">
                      <span>✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Clarifying Questions */}
            <div className="space-y-2 pt-1">
              <div className="font-semibold text-foreground text-xs uppercase tracking-wider">
                Clarifying Questions for the Interviewer
              </div>
              <div className="space-y-1.5">
                {problem.clarifyingQuestions.map((cq, idx) => (
                  <div key={idx} className="p-2.5 rounded-md bg-secondary/30 border border-border">
                    <div className="font-medium text-foreground text-[11px]">Q: {cq.question}</div>
                    <div className="text-muted-foreground text-[11px] mt-0.5">A: {cq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Step 2: Capacity Estimations */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <button
          onClick={() => toggleStep(2)}
          className="w-full flex items-center justify-between p-3.5 bg-secondary/30 hover:bg-secondary/50 transition-colors text-left"
        >
          <div className="flex items-center gap-2.5">
            <span className="h-5 w-5 rounded bg-secondary text-foreground text-xs font-mono font-medium flex items-center justify-center border border-border">
              2
            </span>
            <div>
              <h3 className="text-xs font-semibold text-foreground">
                Step 2: Back-of-the-Envelope Capacity Estimations
              </h3>
              <p className="text-[10px] text-muted-foreground">Calculate throughput QPS, bandwidth, and storage scale.</p>
            </div>
          </div>
          {revealedSteps[2] ? <ChevronDown size={14} className="text-muted-foreground" /> : <ChevronRight size={14} className="text-muted-foreground" />}
        </button>

        {revealedSteps[2] && (
          <div className="p-4 border-t border-border space-y-3 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {problem.capacityEstimations.calculations.map((calc, idx) => (
                <div key={idx} className="p-3 rounded-md bg-secondary/20 border border-border flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase">{calc.metric}</div>
                    <div className="font-mono text-[11px] text-muted-foreground mt-0.5">{calc.formula}</div>
                  </div>
                  <div className="font-mono font-bold text-xs text-foreground mt-2">{calc.result}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Step 3: High-Level Architecture & API Design */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <button
          onClick={() => toggleStep(3)}
          className="w-full flex items-center justify-between p-3.5 bg-secondary/30 hover:bg-secondary/50 transition-colors text-left"
        >
          <div className="flex items-center gap-2.5">
            <span className="h-5 w-5 rounded bg-secondary text-foreground text-xs font-mono font-medium flex items-center justify-center border border-border">
              3
            </span>
            <div>
              <h3 className="text-xs font-semibold text-foreground">
                Step 3: High-Level Architecture & API Endpoints
              </h3>
              <p className="text-[10px] text-muted-foreground">System components and REST/gRPC endpoint signatures.</p>
            </div>
          </div>
          {revealedSteps[3] ? <ChevronDown size={14} className="text-muted-foreground" /> : <ChevronRight size={14} className="text-muted-foreground" />}
        </button>

        {revealedSteps[3] && (
          <div className="p-4 border-t border-border space-y-4 text-xs">
            <div className="p-3 rounded-md bg-secondary/20 border border-border text-foreground leading-relaxed">
              {problem.highLevelDesign.description}
            </div>

            {/* API Endpoints */}
            <div className="space-y-2">
              <div className="font-semibold text-foreground text-xs uppercase tracking-wider flex items-center gap-1.5">
                <FileCode size={12} />
                API Endpoints
              </div>
              <div className="space-y-2">
                {problem.apiDesign.map((api, idx) => (
                  <div key={idx} className="p-3 rounded-md border border-border bg-secondary/20 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        'text-[9px] font-mono font-bold px-1.5 py-0.2 rounded border',
                        api.method === 'GET' && 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
                        api.method === 'POST' && 'bg-blue-500/10 text-blue-500 border-blue-500/20',
                        api.method === 'DELETE' && 'bg-rose-500/10 text-rose-500 border-rose-500/20'
                      )}>
                        {api.method}
                      </span>
                      <span className="font-mono font-semibold text-foreground">{api.path}</span>
                      <span className="text-muted-foreground text-[11px]">— {api.desc}</span>
                    </div>
                    {api.requestBody && (
                      <pre className="p-2 rounded bg-secondary/60 text-[10px] font-mono text-muted-foreground overflow-x-auto">
                        {api.requestBody}
                      </pre>
                    )}
                    <pre className="p-2 rounded bg-secondary/60 text-[10px] font-mono text-foreground/90 overflow-x-auto">
                      Response: {api.response}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Step 4: Data Models */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <button
          onClick={() => toggleStep(4)}
          className="w-full flex items-center justify-between p-3.5 bg-secondary/30 hover:bg-secondary/50 transition-colors text-left"
        >
          <div className="flex items-center gap-2.5">
            <span className="h-5 w-5 rounded bg-secondary text-foreground text-xs font-mono font-medium flex items-center justify-center border border-border">
              4
            </span>
            <div>
              <h3 className="text-xs font-semibold text-foreground">
                Step 4: Data Model & Schema Design
              </h3>
              <p className="text-[10px] text-muted-foreground">Database engine selection and schema tables.</p>
            </div>
          </div>
          {revealedSteps[4] ? <ChevronDown size={14} className="text-muted-foreground" /> : <ChevronRight size={14} className="text-muted-foreground" />}
        </button>

        {revealedSteps[4] && (
          <div className="p-4 border-t border-border space-y-3 text-xs">
            <div className="p-2.5 rounded-md bg-secondary/30 border border-border text-muted-foreground">
              <span className="font-semibold text-foreground">Schema Rationale: </span> {problem.dataModel.rationale}
            </div>

            {problem.dataModel.tables.map((table, idx) => (
              <div key={idx} className="rounded-md border border-border overflow-hidden">
                <div className="p-2 bg-secondary/40 font-medium text-foreground flex items-center justify-between text-[11px]">
                  <span>Table: {table.name}</span>
                  <span className="text-muted-foreground font-normal">{table.description}</span>
                </div>
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-secondary/20 text-muted-foreground text-[10px] uppercase">
                      <th className="p-2">Column</th>
                      <th className="p-2">Type</th>
                      <th className="p-2">Key</th>
                      <th className="p-2">Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-mono text-[11px]">
                    {table.columns.map((col, cIdx) => (
                      <tr key={cIdx} className="hover:bg-secondary/20">
                        <td className="p-2 text-foreground font-medium">{col.name}</td>
                        <td className="p-2 text-muted-foreground">{col.type}</td>
                        <td className="p-2 text-muted-foreground">{col.key || '-'}</td>
                        <td className="p-2 font-sans text-muted-foreground">{col.note || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Step 5: Core Component Deep Dives */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <button
          onClick={() => toggleStep(5)}
          className="w-full flex items-center justify-between p-3.5 bg-secondary/30 hover:bg-secondary/50 transition-colors text-left"
        >
          <div className="flex items-center gap-2.5">
            <span className="h-5 w-5 rounded bg-secondary text-foreground text-xs font-mono font-medium flex items-center justify-center border border-border">
              5
            </span>
            <div>
              <h3 className="text-xs font-semibold text-foreground">
                Step 5: Core Component Deep Dives
              </h3>
              <p className="text-[10px] text-muted-foreground">Addressing complex bottlenecks and edge cases.</p>
            </div>
          </div>
          {revealedSteps[5] ? <ChevronDown size={14} className="text-muted-foreground" /> : <ChevronRight size={14} className="text-muted-foreground" />}
        </button>

        {revealedSteps[5] && (
          <div className="p-4 border-t border-border space-y-3 text-xs">
            {problem.deepDives.map((dive, idx) => (
              <div key={idx} className="p-3.5 rounded-md border border-border bg-secondary/20 space-y-2">
                <h4 className="font-semibold text-xs text-foreground">{dive.title}</h4>
                <div className="p-2.5 rounded bg-secondary/40 text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">Challenge: </span>
                  {dive.challenge}
                </div>
                <div className="p-2.5 rounded bg-secondary/40 text-foreground leading-relaxed">
                  <span className="font-medium">Solution Strategy: </span>
                  {dive.solutionStrategy}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Step 6: Scaling & Bottlenecks */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <button
          onClick={() => toggleStep(6)}
          className="w-full flex items-center justify-between p-3.5 bg-secondary/30 hover:bg-secondary/50 transition-colors text-left"
        >
          <div className="flex items-center gap-2.5">
            <span className="h-5 w-5 rounded bg-secondary text-foreground text-xs font-mono font-medium flex items-center justify-center border border-border">
              6
            </span>
            <div>
              <h3 className="text-xs font-semibold text-foreground">
                Step 6: Scaling, Bottlenecks & Failure Modes
              </h3>
              <p className="text-[10px] text-muted-foreground">Single point of failure resolution and disaster recovery.</p>
            </div>
          </div>
          {revealedSteps[6] ? <ChevronDown size={14} className="text-muted-foreground" /> : <ChevronRight size={14} className="text-muted-foreground" />}
        </button>

        {revealedSteps[6] && (
          <div className="p-4 border-t border-border space-y-2 text-xs">
            {problem.scalingAndBottlenecks.map((item, idx) => (
              <div key={idx} className="p-2.5 rounded-md border border-border bg-secondary/20 flex items-start gap-2.5">
                <AlertTriangle size={13} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-foreground text-[11px]">{item.bottleneck}</div>
                  <div className="text-muted-foreground text-[11px] mt-0.5 leading-relaxed">{item.mitigation}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Step 7: Scorecard & Notes */}
      <div className="rounded-lg border border-border bg-card p-4 space-y-4">
        <div className="flex items-center justify-between pb-2.5 border-b border-border">
          <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">
            Self-Review Mastery Checklist
          </h3>
          <span className="text-xs font-mono text-muted-foreground">
            {Object.values(checkedChecklist).filter(Boolean).length} / {problem.scorecardChecklist.length} Checked
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {problem.scorecardChecklist.map((item, idx) => {
            const isChecked = checkedChecklist[idx] || false;
            return (
              <button
                key={idx}
                onClick={() => toggleChecklistItem(idx)}
                className={cn(
                  'p-2.5 rounded-md border text-left text-xs transition-colors flex items-start gap-2',
                  isChecked ? 'border-foreground bg-secondary text-foreground' : 'border-border bg-card text-muted-foreground hover:bg-secondary/40'
                )}
              >
                <div className={cn(
                  'h-3.5 w-3.5 rounded border flex items-center justify-center shrink-0 mt-0.5',
                  isChecked ? 'border-foreground bg-foreground text-background' : 'border-muted-foreground'
                )}>
                  {isChecked && <Check size={9} />}
                </div>
                <span className={cn(isChecked && 'line-through opacity-70')}>{item}</span>
              </button>
            );
          })}
        </div>

        {/* User Notes */}
        <div className="pt-3 border-t border-border space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <PenTool size={12} />
              Personal Notes & Scratchpad
            </label>
            <span className="text-[10px] text-muted-foreground font-mono">Auto-saved locally</span>
          </div>
          <textarea
            value={userNotes}
            onChange={(e) => handleSaveNotes(e.target.value)}
            placeholder="Record alternative architectural approaches or talking points..."
            className="w-full h-20 p-2.5 rounded-md border border-border bg-secondary/30 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring font-mono resize-none"
          />
        </div>
      </div>
    </div>
  );
}
