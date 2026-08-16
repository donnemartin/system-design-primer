'use client';

import React, { useState } from 'react';
import { TradeOffMatrixData } from '@/types';
import { Scale, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TradeOffMatrixProps {
  data: TradeOffMatrixData;
}

export function TradeOffMatrix({ data }: TradeOffMatrixProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'A' | 'B'>('all');

  const filteredComparisons = data.comparisons.filter((comp) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'A') return comp.winner === 'A';
    if (activeFilter === 'B') return comp.winner === 'B';
    return true;
  });

  return (
    <div className="my-6 rounded-lg border border-border bg-card overflow-hidden">
      {/* Header with Title & Filter Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 border-b border-border bg-secondary/30">
        <div>
          <div className="flex items-center gap-2">
            <Scale size={14} className="text-muted-foreground" />
            <h4 className="text-xs font-semibold text-foreground tracking-tight">{data.title}</h4>
          </div>
          <p className="text-[11px] text-muted-foreground mt-0.5">{data.description}</p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 p-0.5 bg-secondary rounded-md border border-border text-xs shrink-0">
          <button
            onClick={() => setActiveFilter('all')}
            className={cn(
              'px-2 py-1 rounded text-[11px] font-medium transition-colors',
              activeFilter === 'all' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            All ({data.comparisons.length})
          </button>
          <button
            onClick={() => setActiveFilter('A')}
            className={cn(
              'px-2 py-1 rounded text-[11px] font-medium transition-colors',
              activeFilter === 'A' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {data.optionAName}
          </button>
          <button
            onClick={() => setActiveFilter('B')}
            className={cn(
              'px-2 py-1 rounded text-[11px] font-medium transition-colors',
              activeFilter === 'B' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {data.optionBName}
          </button>
        </div>
      </div>

      {/* Table of Trade-offs */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-border bg-secondary/20 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
              <th className="py-2.5 px-4 w-1/4">Evaluation Dimension</th>
              <th className="py-2.5 px-4 w-3/8 text-foreground">{data.optionAName}</th>
              <th className="py-2.5 px-4 w-3/8 text-foreground">{data.optionBName}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {filteredComparisons.map((item, idx) => (
              <tr key={idx} className="hover:bg-secondary/30 transition-colors">
                <td className="py-3 px-4 font-medium text-foreground align-top text-xs">
                  {item.feature}
                </td>
                <td className={cn('py-3 px-4 align-top leading-relaxed text-xs text-muted-foreground', item.winner === 'A' && 'text-foreground font-medium')}>
                  <div className="flex items-start gap-1.5">
                    {item.winner === 'A' && (
                      <span className="p-0.5 rounded text-foreground shrink-0 mt-0.5">
                        <Check size={11} />
                      </span>
                    )}
                    <span>{item.optionA}</span>
                  </div>
                </td>
                <td className={cn('py-3 px-4 align-top leading-relaxed text-xs text-muted-foreground', item.winner === 'B' && 'text-foreground font-medium')}>
                  <div className="flex items-start gap-1.5">
                    {item.winner === 'B' && (
                      <span className="p-0.5 rounded text-foreground shrink-0 mt-0.5">
                        <Check size={11} />
                      </span>
                    )}
                    <span>{item.optionB}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
