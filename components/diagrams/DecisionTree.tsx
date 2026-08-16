'use client';

import React, { useState } from 'react';
import { DecisionTreeNode } from '@/types';
import { GitFork, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DecisionTreeProps {
  data: DecisionTreeNode;
}

export function DecisionTree({ data }: DecisionTreeProps) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(0);

  return (
    <div className="my-6 rounded-lg border border-border bg-card overflow-hidden">
      {/* Question Header */}
      <div className="p-3.5 border-b border-border bg-secondary/30 flex items-center gap-2.5">
        <div className="p-1 rounded bg-secondary text-foreground">
          <GitFork size={14} />
        </div>
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Decision Matrix
          </span>
          <h4 className="text-xs font-semibold text-foreground">{data.question}</h4>
        </div>
      </div>

      {/* Options Selection & Recommendation */}
      <div className="p-3.5 space-y-2">
        <div className="text-[11px] text-muted-foreground font-medium">Select scenario:</div>
        <div className="grid grid-cols-1 gap-2">
          {data.options.map((option, idx) => {
            const isSelected = selectedOptionIndex === idx;

            return (
              <button
                key={idx}
                onClick={() => setSelectedOptionIndex(idx)}
                className={cn(
                  'w-full text-left p-3 rounded-md border transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs',
                  isSelected
                    ? 'border-foreground bg-secondary/60 text-foreground'
                    : 'border-border bg-card hover:bg-secondary/40 text-muted-foreground'
                )}
              >
                <div className="flex items-start gap-2.5 flex-1">
                  <div className={cn(
                    'mt-0.5 h-3.5 w-3.5 rounded-full border flex items-center justify-center shrink-0',
                    isSelected ? 'border-foreground bg-foreground text-background' : 'border-muted-foreground'
                  )}>
                    {isSelected && <CheckCircle size={9} />}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{option.condition}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{option.explanation}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-secondary text-foreground border border-border">
                    {option.recommendation}
                  </span>
                  {option.badge && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
                      {option.badge}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
