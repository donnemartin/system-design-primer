'use client';

import React, { useState } from 'react';
import {
  latencyNumbersData,
  powersOfTwoData,
  availabilityTableData,
  systemRulesOfThumb,
} from '@/content/numbersData';
import {
  Binary,
  Search,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function NumbersReference() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'latency' | 'powers' | 'availability' | 'rules'>('latency');

  const filteredLatencies = latencyNumbersData.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4 pb-20">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg border border-border bg-card">
        <div>
          <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
            <Binary size={15} className="text-cyan-500" />
            System Design Numbers Cheatsheet
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Latency orders of magnitude, 9s availability SLAs, and binary powers of two.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-0.5 bg-secondary rounded-md border border-border overflow-x-auto text-xs shrink-0">
          {[
            { id: 'latency', label: 'Latency Numbers' },
            { id: 'availability', label: 'Availability SLAs' },
            { id: 'powers', label: 'Powers of Two' },
            { id: 'rules', label: 'Rules of Thumb' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                'px-2.5 py-1 rounded text-xs font-semibold transition-colors whitespace-nowrap',
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: Latency Numbers */}
      {activeTab === 'latency' && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-card">
            <Search size={13} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Filter latency operations (e.g. SSD, RAM, Mutex, Network)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-xs text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
            />
          </div>

          <div className="rounded-lg border border-border bg-card overflow-hidden">
            <div className="p-3 border-b border-border bg-secondary/30 flex items-center justify-between text-xs">
              <span className="font-bold text-foreground uppercase tracking-wider text-[10px] font-mono">
                Operation & Latency
              </span>
              <span className="text-[10px] text-muted-foreground font-mono">Normalized Log Scale (0.5ns → 150ms)</span>
            </div>

            <div className="divide-y divide-border/60">
              {filteredLatencies.map((item) => {
                const minLog = Math.log10(0.5);
                const maxLog = Math.log10(150_000_000);
                const currentLog = Math.log10(item.nsValue || 1);
                const barPercent = Math.max(3, Math.min(100, ((currentLog - minLog) / (maxLog - minLog)) * 100));

                return (
                  <div key={item.id} className="p-3 hover:bg-secondary/20 transition-colors space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-foreground">{item.label}</span>
                        <span className="text-[11px] text-muted-foreground hidden sm:inline">— {item.description}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">{item.humanValue}</span>
                        {item.analogy && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-secondary text-muted-foreground border border-border">
                            {item.analogy}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 rounded-full"
                        style={{ width: `${barPercent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Availability Table */}
      {activeTab === 'availability' && (
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="p-3.5 border-b border-border bg-secondary/30">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider font-mono">
              High Availability SLA Downtime
            </h3>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Allowed downtime windows per year, month, and day for standard SLA tiers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-border bg-secondary/20 text-[10px] font-bold text-muted-foreground uppercase font-mono">
                  <th className="p-2.5">SLA Target</th>
                  <th className="p-2.5">Common Tier</th>
                  <th className="p-2.5 text-foreground">Downtime / Year</th>
                  <th className="p-2.5">Downtime / Month</th>
                  <th className="p-2.5">Downtime / Day</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {availabilityTableData.map((sla, idx) => (
                  <tr key={idx} className="hover:bg-secondary/20 transition-colors">
                    <td className="p-2.5 font-mono font-bold text-indigo-600 dark:text-indigo-400">
                      {sla.nines}
                    </td>
                    <td className="p-2.5 text-muted-foreground font-medium">{sla.name}</td>
                    <td className="p-2.5 font-mono font-bold text-foreground">{sla.downtimePerYear}</td>
                    <td className="p-2.5 font-mono text-muted-foreground">{sla.downtimePerMonth}</td>
                    <td className="p-2.5 font-mono text-muted-foreground">{sla.downtimePerDay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Powers of Two */}
      {activeTab === 'powers' && (
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="p-3.5 border-b border-border bg-secondary/30">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider font-mono">
              Powers of Two Binary Multiples
            </h3>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Memory capacities, address space boundaries, and byte magnitude conversions.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-border bg-secondary/20 text-[10px] font-bold text-muted-foreground uppercase font-mono">
                  <th className="p-2.5">Power</th>
                  <th className="p-2.5">Exact Value</th>
                  <th className="p-2.5 text-foreground">Approx.</th>
                  <th className="p-2.5">IEC Prefix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {powersOfTwoData.map((pow, idx) => (
                  <tr key={idx} className="hover:bg-secondary/20 transition-colors">
                    <td className="p-2.5 font-mono font-bold text-indigo-600 dark:text-indigo-400">{pow.power}</td>
                    <td className="p-2.5 font-mono text-muted-foreground">{pow.exact}</td>
                    <td className="p-2.5 font-mono font-bold text-foreground">{pow.approximate}</td>
                    <td className="p-2.5 font-mono font-bold text-cyan-600 dark:text-cyan-400">{pow.binaryPrefix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Rules of Thumb */}
      {activeTab === 'rules' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {systemRulesOfThumb.map((rule, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-border bg-card hover:border-indigo-500/30 transition-colors space-y-1.5">
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 uppercase">
                {rule.use}
              </span>
              <h4 className="font-bold text-xs text-foreground">{rule.rule}</h4>
              <div className="p-2 rounded bg-secondary/50 font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 border border-border/60">
                {rule.value}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
