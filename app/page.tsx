'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Map,
  BookOpen,
  HelpCircle,
  Clock,
  Layers,
  Calculator,
  ShieldCheck,
  Zap,
  Database,
  Network,
  Cpu,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { allTopicsData } from '@/content/topicsData';
import { interviewProblemsData } from '@/content/interviewProblems';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const learningPipeline = [
    { title: 'Fundamentals', desc: 'Scalability, Latency vs Throughput, CAP Theorem', icon: Layers, href: '/learn#fundamentals', color: 'text-indigo-500', bg: 'bg-indigo-500/10', border: 'border-indigo-500/30' },
    { title: 'Networking & Edge', desc: 'DNS, CDNs, L4/L7 Load Balancers, Proxies', icon: Network, href: '/learn#networking', color: 'text-cyan-500', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' },
    { title: 'App Architecture', desc: 'Microservices, API Gateways, Rate Limiting', icon: Cpu, href: '/learn#app-architecture', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
    { title: 'Databases & Storage', desc: 'RDBMS vs NoSQL, Replication, Sharding', icon: Database, href: '/learn#databases', color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
    { title: 'Caching Strategies', desc: 'Cache Aside, Write-Back, Eviction Policies', icon: Zap, href: '/learn#caching', color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
    { title: 'Distributed Systems', desc: 'Message Queues, Backpressure, Raft Consensus', icon: Layers, href: '/learn#distributed-systems', color: 'text-violet-500', bg: 'bg-violet-500/10', border: 'border-violet-500/30' },
    { title: 'Security & Reliability', desc: 'JWT, OAuth2, Encryption, Threat Modeling', icon: ShieldCheck, href: '/learn#security', color: 'text-rose-500', bg: 'bg-rose-500/10', border: 'border-rose-500/30' },
    { title: 'Real-World Case Studies', desc: 'Scaling AWS to 10M Users, Netflix, Twitter', icon: BookOpen, href: '/learn#real-world-architectures', color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
    { title: 'System Design Interviews', desc: 'Pastebin, Web Crawler, Distributed KV Store', icon: HelpCircle, href: '/interviews', color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
  ];

  return (
    <div className="space-y-14 py-4">
      {/* Hero Section */}
      <section className="text-center space-y-5 pt-8 pb-4 max-w-3xl mx-auto relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold shadow-sm">
          <Sparkles size={12} className="text-indigo-500" />
          <span>System Design Primer 2.0</span>
          <span className="text-muted-foreground">• Interactive Edition</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
          Master Large-Scale <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
            System Architecture
          </span>
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Understand distributed trade-offs, explore interactive architecture flows, and practice real FAANG system design interviews with structured frameworks.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/learn"
            className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-all shadow-md shadow-indigo-500/25 inline-flex items-center gap-1.5"
          >
            <span>Start Knowledge Base</span>
            <ArrowRight size={13} />
          </Link>
          <Link
            href="/roadmap"
            className="px-5 py-2.5 rounded-lg border border-border bg-card hover:bg-secondary text-foreground font-semibold text-xs transition-colors inline-flex items-center gap-1.5 shadow-sm"
          >
            <Map size={13} className="text-indigo-500" />
            <span>Explore Visual Roadmap</span>
          </Link>
        </div>
      </section>

      {/* Learning Journey Pipeline */}
      <section className="space-y-4 max-w-5xl mx-auto">
        <div className="space-y-0.5">
          <h2 className="font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 text-[10px] font-mono">
            Curriculum Structure
          </h2>
          <h3 className="text-lg font-extrabold text-foreground tracking-tight">
            System Design Progression Pipeline
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {learningPipeline.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Link
                key={idx}
                href={step.href}
                className="p-3.5 rounded-xl border border-border bg-card hover:border-indigo-500/40 hover:bg-secondary/40 transition-all group flex items-start gap-3 relative overflow-hidden"
              >
                <div className={cn("p-2 rounded-lg shrink-0 mt-0.5", step.bg, step.color)}>
                  <Icon size={14} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-muted-foreground font-semibold">0{idx + 1}</span>
                    <h4 className="text-xs font-bold text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed truncate">{step.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Concepts */}
      <section className="space-y-4 max-w-5xl mx-auto pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-extrabold text-foreground tracking-tight">
              Essential Architectural Topics
            </h2>
            <p className="text-xs text-muted-foreground">
              Deep, structured modules with interactive trade-offs and decision trees.
            </p>
          </div>
          <Link
            href="/learn"
            className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-bold flex items-center gap-0.5 transition-colors"
          >
            All Concepts ({allTopicsData.length}) <ChevronRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {allTopicsData.slice(0, 6).map((topic) => (
            <Link
              key={topic.slug}
              href={`/learn/${topic.slug}`}
              className="p-4 rounded-xl border border-border bg-card hover:border-indigo-500/40 hover:bg-secondary/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground border border-border uppercase font-semibold">
                    {topic.difficulty}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono flex items-center gap-1">
                    <Clock size={10} /> {topic.estimatedMinutes}m read
                  </span>
                </div>

                <h3 className="font-bold text-xs text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-[11px] text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                  {topic.summary}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-border/60 flex items-center justify-between text-[10px] text-muted-foreground font-mono">
                <span>{topic.categoryName}</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center">
                  Read <ChevronRight size={10} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Interview Problems */}
      <section className="space-y-4 max-w-5xl mx-auto pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-extrabold text-foreground tracking-tight">
              FAANG System Design Walkthroughs
            </h2>
            <p className="text-xs text-muted-foreground">
              End-to-end solutions broken down into 8 structured stages.
            </p>
          </div>
          <Link
            href="/interviews"
            className="text-xs text-amber-600 dark:text-amber-400 hover:underline font-bold flex items-center gap-0.5 transition-colors"
          >
            All Problems ({interviewProblemsData.length}) <ChevronRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {interviewProblemsData.slice(0, 3).map((problem) => (
            <Link
              key={problem.slug}
              href={`/interviews/${problem.slug}`}
              className="p-4 rounded-xl border border-amber-500/20 bg-card hover:border-amber-500/40 hover:bg-amber-500/5 transition-all group flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500" />
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 uppercase font-bold">
                    {problem.difficulty}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {problem.estimatedTime}
                  </span>
                </div>

                <h3 className="font-bold text-xs text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-[11px] text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                  {problem.overview}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-border/60 flex items-center justify-between text-[10px] text-muted-foreground font-mono">
                <span>{problem.companyTags.slice(0, 2).join(', ')}</span>
                <span className="text-amber-600 dark:text-amber-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center">
                  Solve <ChevronRight size={10} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Interactive Tools Showcase */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto pt-4 border-t border-border">
        <Link
          href="/architectures"
          className="p-4 rounded-lg border border-border bg-card hover:bg-secondary/40 transition-colors group space-y-2"
        >
          <div className="p-2 rounded bg-secondary text-foreground w-fit">
            <Layers size={14} />
          </div>
          <h4 className="font-semibold text-xs text-foreground group-hover:text-foreground">
            System Architecture Builder
          </h4>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Drag-and-drop components onto an interactive canvas. Audit failure modes and latencies.
          </p>
        </Link>

        <Link
          href="/calculator"
          className="p-4 rounded-lg border border-border bg-card hover:bg-secondary/40 transition-colors group space-y-2"
        >
          <div className="p-2 rounded bg-secondary text-foreground w-fit">
            <Calculator size={14} />
          </div>
          <h4 className="font-semibold text-xs text-foreground group-hover:text-foreground">
            Capacity & Sizing Calculator
          </h4>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Estimate QPS, peak multipliers, bandwidth, and multi-year storage requirements.
          </p>
        </Link>

        <Link
          href="/interview-mode"
          className="p-4 rounded-lg border border-border bg-card hover:bg-secondary/40 transition-colors group space-y-2"
        >
          <div className="p-2 rounded bg-secondary text-foreground w-fit">
            <Clock size={14} />
          </div>
          <h4 className="font-semibold text-xs text-foreground group-hover:text-foreground">
            Mock Interview Simulator
          </h4>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            45-minute timed simulation with requirements scratchpad and FAANG evaluation rubrics.
          </p>
        </Link>
      </section>
    </div>
  );
}
