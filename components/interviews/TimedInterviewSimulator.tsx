'use client';

import React, { useState, useEffect } from 'react';
import { interviewProblemsData } from '@/content/interviewProblems';
import { InterviewProblem } from '@/types';
import {
  Clock,
  Play,
  Pause,
  CheckCircle2,
  FileText,
  Layers,
  Calculator,
  Database,
  Award,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function TimedInterviewSimulator() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<'All' | 'Medium' | 'Hard'>('All');
  const [durationMinutes, setDurationMinutes] = useState<number>(45);
  const [activeProblem, setActiveProblem] = useState<InterviewProblem | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(45 * 60);
  const [activeTab, setActiveTab] = useState<'prompt' | 'requirements' | 'capacity' | 'architecture' | 'apis' | 'rubric'>('prompt');

  const [notes, setNotes] = useState({
    functionalReqs: '',
    nonFunctionalReqs: '',
    estimations: '',
    architectureDraft: '',
    apisAndData: '',
  });

  const [rubricScores, setRubricScores] = useState<Record<number, boolean>>({});

  const filteredProblems = interviewProblemsData.filter((p) =>
    selectedDifficulty === 'All' ? true : p.difficulty === selectedDifficulty
  );

  const startRandomInterview = () => {
    const randomIndex = Math.floor(Math.random() * filteredProblems.length);
    const chosen = filteredProblems[randomIndex];
    setActiveProblem(chosen);
    setSecondsRemaining(durationMinutes * 60);
    setIsRunning(true);
    setActiveTab('prompt');
    setRubricScores({});
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);
    } else if (secondsRemaining === 0 && isRunning) {
      setIsRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, secondsRemaining]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const toggleRubric = (idx: number) => {
    setRubricScores((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const rubricChecklist = [
    'Clarified all functional and non-functional requirements with the interviewer',
    'Conducted back-of-the-envelope calculations for QPS, bandwidth, and storage',
    'Drew a clear high-level architectural diagram before jumping into details',
    'Defined REST / gRPC API endpoint signatures and schemas',
    'Designed database tables, chosen appropriate SQL/NoSQL storage engines',
    'Addressed caching strategies (Cache Aside, TTLs, invalidation)',
    'Identified and resolved Single Points of Failure (SPOF)',
    'Discussed database sharding and replication lag',
    'Explained architectural trade-offs honestly rather than claiming a "perfect" system',
    'Communicated clearly throughout the session',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-5 pb-20">
      {!activeProblem ? (
        <div className="p-8 rounded-xl border border-amber-500/25 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-card text-center space-y-5">
          <div className="mx-auto h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
            <Clock size={22} />
          </div>

          <div className="max-w-md mx-auto space-y-1.5">
            <h1 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              Mock System Design Interview Room
            </h1>
            <p className="text-xs text-muted-foreground leading-relaxed">
              45-minute timed interview simulation. Receive a random architectural prompt, manage time, sketch designs, and self-assess against FAANG rubrics.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-border max-w-md mx-auto">
            {/* Difficulty */}
            <div className="space-y-1 text-left">
              <label className="text-[10px] font-bold text-muted-foreground uppercase font-mono">Difficulty</label>
              <div className="flex items-center gap-1 p-0.5 bg-secondary rounded-md border border-border">
                {(['All', 'Medium', 'Hard'] as const).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={cn(
                      'px-2.5 py-1 rounded text-xs font-semibold transition-colors',
                      selectedDifficulty === diff ? 'bg-indigo-600 text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-1 text-left">
              <label className="text-[10px] font-bold text-muted-foreground uppercase font-mono">Duration</label>
              <div className="flex items-center gap-1 p-0.5 bg-secondary rounded-md border border-border">
                {[30, 45, 60].map((mins) => (
                  <button
                    key={mins}
                    onClick={() => setDurationMinutes(mins)}
                    className={cn(
                      'px-2.5 py-1 rounded text-xs font-semibold transition-colors',
                      durationMinutes === mins ? 'bg-indigo-600 text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {mins}m
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={startRandomInterview}
              className="px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-500/20 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <Play size={13} />
              <span>Start Mock Interview</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Active Timer Header Bar */}
          <div className="p-3.5 rounded-lg border border-border bg-card flex flex-wrap items-center justify-between gap-4 sticky top-14 z-10 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-secondary text-foreground border border-border uppercase">
                {activeProblem.difficulty}
              </span>
              <div>
                <h3 className="text-xs font-bold text-foreground">{activeProblem.title}</h3>
                <span className="text-[10px] text-muted-foreground font-mono">
                  {activeProblem.companyTags.join(' • ')}
                </span>
              </div>
            </div>

            {/* Timer */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 rounded-md border border-border bg-secondary font-mono font-semibold text-sm">
                <Clock size={13} className={secondsRemaining < 300 ? 'text-rose-500 animate-pulse' : 'text-muted-foreground'} />
                <span className={secondsRemaining < 300 ? 'text-rose-500' : 'text-foreground'}>
                  {formatTime(secondsRemaining)}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className="p-1.5 rounded-md border border-border bg-card hover:bg-secondary text-foreground transition-colors"
                  title={isRunning ? 'Pause timer' : 'Resume timer'}
                >
                  {isRunning ? <Pause size={13} /> : <Play size={13} />}
                </button>
                <button
                  onClick={() => setActiveProblem(null)}
                  className="px-2.5 py-1.5 rounded-md border border-border bg-card hover:bg-secondary text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  End Session
                </button>
              </div>
            </div>
          </div>

          {/* Multi-Tab Workspace */}
          <div className="rounded-lg border border-border bg-card overflow-hidden">
            <div className="flex items-center gap-1 p-2 border-b border-border bg-secondary/30 overflow-x-auto text-xs">
              {[
                { id: 'prompt', label: '1. Prompt', icon: FileText },
                { id: 'requirements', label: '2. Requirements', icon: CheckCircle2 },
                { id: 'capacity', label: '3. Capacity Math', icon: Calculator },
                { id: 'architecture', label: '4. Architecture', icon: Layers },
                { id: 'apis', label: '5. APIs & Data', icon: Database },
                { id: 'rubric', label: '6. FAANG Rubric', icon: Award },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={cn(
                      'flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-colors text-xs shrink-0',
                      isActive
                        ? 'bg-background text-foreground font-medium shadow-sm border border-border'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <Icon size={12} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="p-5 space-y-4">
              {activeTab === 'prompt' && (
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-md bg-secondary/30 border border-border space-y-1.5">
                    <h4 className="font-semibold text-foreground">Interview Prompt</h4>
                    <p className="text-muted-foreground leading-relaxed">{activeProblem.overview}</p>
                  </div>

                  <div className="p-3.5 rounded-md bg-secondary/20 border border-border space-y-1.5">
                    <h4 className="font-semibold text-foreground">Clarifying Questions to ask</h4>
                    <div className="space-y-1.5 mt-2">
                      {activeProblem.clarifyingQuestions.map((q, idx) => (
                        <div key={idx} className="p-2 rounded bg-card border border-border text-[11px]">
                          <span className="font-medium text-foreground">Ask: </span>
                          <span className="text-muted-foreground">{q.question}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'requirements' && (
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="font-semibold text-foreground block mb-1">
                      Functional Requirements
                    </label>
                    <textarea
                      value={notes.functionalReqs}
                      onChange={(e) => setNotes({ ...notes, functionalReqs: e.target.value })}
                      placeholder="• User submits content and gets shortlink&#10;• User retrieves content by shortlink&#10;• Content expires after TTL"
                      className="w-full h-28 p-2.5 rounded-md border border-border bg-secondary/20 text-foreground font-mono text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-foreground block mb-1">
                      Non-Functional Requirements
                    </label>
                    <textarea
                      value={notes.nonFunctionalReqs}
                      onChange={(e) => setNotes({ ...notes, nonFunctionalReqs: e.target.value })}
                      placeholder="• High Availability: 99.99%&#10;• Low Latency: < 20ms read&#10;• Multi-Year Data Retention"
                      className="w-full h-28 p-2.5 rounded-md border border-border bg-secondary/20 text-foreground font-mono text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'capacity' && (
                <div className="space-y-3 text-xs">
                  <div className="p-2.5 rounded-md bg-secondary/30 border border-border text-muted-foreground text-[11px]">
                    Tip: 1 Day ≈ 100,000 seconds (86,400s) for rapid back-of-the-envelope estimation.
                  </div>
                  <textarea
                    value={notes.estimations}
                    onChange={(e) => setNotes({ ...notes, estimations: e.target.value })}
                    placeholder="DAU: 100M&#10;Write QPS: 10M / 86400 ≈ 115 writes/sec&#10;Read QPS: 100M / 86400 ≈ 1,150 reads/sec&#10;Storage: 10M * 1KB = 10GB/day -> 3.6TB/year"
                    className="w-full h-44 p-2.5 rounded-md border border-border bg-secondary/20 text-foreground font-mono text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              )}

              {activeTab === 'architecture' && (
                <div className="space-y-3 text-xs">
                  <label className="font-semibold text-foreground block mb-1">
                    Architecture Component Flow
                  </label>
                  <textarea
                    value={notes.architectureDraft}
                    onChange={(e) => setNotes({ ...notes, architectureDraft: e.target.value })}
                    placeholder="Client -> CDN (static) -> ALB -> App Server Tier -> Redis Cache -> PostgreSQL Master + Read Replicas"
                    className="w-full h-44 p-2.5 rounded-md border border-border bg-secondary/20 text-foreground font-mono text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              )}

              {activeTab === 'apis' && (
                <div className="space-y-3 text-xs">
                  <label className="font-semibold text-foreground block mb-1">
                    API Endpoints & Schemas
                  </label>
                  <textarea
                    value={notes.apisAndData}
                    onChange={(e) => setNotes({ ...notes, apisAndData: e.target.value })}
                    placeholder="POST /api/v1/pastes -> { shortlink: string }&#10;GET /:shortlink -> { content: string }&#10;&#10;Table: pastes (id PK, s3_url, created_at, expires_at)"
                    className="w-full h-44 p-2.5 rounded-md border border-border bg-secondary/20 text-foreground font-mono text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              )}

              {activeTab === 'rubric' && (
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-border">
                    <h4 className="font-bold text-foreground text-xs uppercase tracking-wider">
                      Self-Assessment Scorecard
                    </h4>
                    <span className="font-mono text-xs text-foreground font-medium">
                      {Object.values(rubricScores).filter(Boolean).length} / {rubricChecklist.length} Checked
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-1.5">
                    {rubricChecklist.map((item, idx) => {
                      const isChecked = rubricScores[idx] || false;
                      return (
                        <button
                          key={idx}
                          onClick={() => toggleRubric(idx)}
                          className={cn(
                            'p-2.5 rounded-md border text-left transition-colors flex items-start gap-2 text-xs',
                            isChecked ? 'border-foreground bg-secondary text-foreground' : 'border-border bg-card text-muted-foreground hover:bg-secondary/40'
                          )}
                        >
                          <div className={cn(
                            'h-3.5 w-3.5 rounded border flex items-center justify-center shrink-0 mt-0.5',
                            isChecked ? 'border-foreground bg-foreground text-background' : 'border-muted-foreground'
                          )}>
                            {isChecked && <CheckCircle2 size={9} />}
                          </div>
                          <span className="leading-relaxed">{item}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
