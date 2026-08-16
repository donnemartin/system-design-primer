'use client';

import React, { useState } from 'react';
import { ArchitectureDiagramData } from '@/types';
import {
  Server,
  Database,
  Zap,
  Globe,
  Network,
  Cpu,
  Layers,
  X,
  AlertTriangle,
  Clock,
  Activity,
  HardDrive,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface InteractiveArchitectureDiagramProps {
  data: ArchitectureDiagramData;
}

const nodeIcons: Record<string, React.ElementType> = {
  client: Globe,
  dns: Globe,
  cdn: Globe,
  lb: Network,
  gateway: Network,
  server: Server,
  cache: Zap,
  db: Database,
  nosql: HardDrive,
  queue: Layers,
  worker: Cpu,
  storage: HardDrive,
};

const nodeLayerColors: Record<string, {
  strokeClass: string;
  fillClass: string;
  iconBg: string;
  iconColor: string;
  badgeClass: string;
}> = {
  client: { strokeClass: 'stroke-sky-500/60', fillClass: 'fill-card', iconBg: 'bg-sky-500/15', iconColor: 'text-sky-600 dark:text-sky-400', badgeClass: 'text-sky-600 dark:text-sky-400' },
  dns: { strokeClass: 'stroke-sky-500/60', fillClass: 'fill-card', iconBg: 'bg-sky-500/15', iconColor: 'text-sky-600 dark:text-sky-400', badgeClass: 'text-sky-600 dark:text-sky-400' },
  cdn: { strokeClass: 'stroke-cyan-500/60', fillClass: 'fill-card', iconBg: 'bg-cyan-500/15', iconColor: 'text-cyan-600 dark:text-cyan-400', badgeClass: 'text-cyan-600 dark:text-cyan-400' },
  lb: { strokeClass: 'stroke-blue-500/60', fillClass: 'fill-card', iconBg: 'bg-blue-500/15', iconColor: 'text-blue-600 dark:text-blue-400', badgeClass: 'text-blue-600 dark:text-blue-400' },
  gateway: { strokeClass: 'stroke-blue-500/60', fillClass: 'fill-card', iconBg: 'bg-blue-500/15', iconColor: 'text-blue-600 dark:text-blue-400', badgeClass: 'text-blue-600 dark:text-blue-400' },
  server: { strokeClass: 'stroke-indigo-500/60', fillClass: 'fill-card', iconBg: 'bg-indigo-500/15', iconColor: 'text-indigo-600 dark:text-indigo-400', badgeClass: 'text-indigo-600 dark:text-indigo-400' },
  cache: { strokeClass: 'stroke-amber-500/60', fillClass: 'fill-card', iconBg: 'bg-amber-500/15', iconColor: 'text-amber-600 dark:text-amber-400', badgeClass: 'text-amber-600 dark:text-amber-400' },
  db: { strokeClass: 'stroke-emerald-500/60', fillClass: 'fill-card', iconBg: 'bg-emerald-500/15', iconColor: 'text-emerald-600 dark:text-emerald-400', badgeClass: 'text-emerald-600 dark:text-emerald-400' },
  nosql: { strokeClass: 'stroke-teal-500/60', fillClass: 'fill-card', iconBg: 'bg-teal-500/15', iconColor: 'text-teal-600 dark:text-teal-400', badgeClass: 'text-teal-600 dark:text-teal-400' },
  queue: { strokeClass: 'stroke-violet-500/60', fillClass: 'fill-card', iconBg: 'bg-violet-500/15', iconColor: 'text-violet-600 dark:text-violet-400', badgeClass: 'text-violet-600 dark:text-violet-400' },
  worker: { strokeClass: 'stroke-violet-500/60', fillClass: 'fill-card', iconBg: 'bg-violet-500/15', iconColor: 'text-violet-600 dark:text-violet-400', badgeClass: 'text-violet-600 dark:text-violet-400' },
  storage: { strokeClass: 'stroke-emerald-500/60', fillClass: 'fill-card', iconBg: 'bg-emerald-500/15', iconColor: 'text-emerald-600 dark:text-emerald-400', badgeClass: 'text-emerald-600 dark:text-emerald-400' },
};

export function InteractiveArchitectureDiagram({ data }: InteractiveArchitectureDiagramProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const selectedNode = data.nodes.find((n) => n.id === selectedNodeId);

  // SVG dimensions
  const maxX = Math.max(...data.nodes.map((n) => n.x), 800);
  const maxY = Math.max(...data.nodes.map((n) => n.y), 360);

  const svgWidth = Math.max(maxX + 140, 700);
  const svgHeight = Math.max(maxY + 80, 360);

  return (
    <div className="my-6 rounded-lg border border-border bg-card overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/30">
        <div className="flex items-center gap-2">
          <Layers size={13} className="text-indigo-500" />
          <h4 className="text-xs font-semibold text-foreground tracking-tight">{data.title}</h4>
          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold">
            Interactive
          </span>
        </div>
        <div className="text-[10px] text-muted-foreground hidden sm:flex items-center gap-1 font-mono">
          Click node to inspect latency & failure modes
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div className="relative overflow-x-auto p-4 bg-grid-pattern min-h-[340px] flex items-center justify-center">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto max-w-full select-none"
          style={{ minWidth: '650px' }}
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="7"
              markerHeight="5"
              refX="6"
              refY="2.5"
              orient="auto"
            >
              <polygon points="0 0, 7 2.5, 0 5" fill="#6366F1" opacity="0.8" />
            </marker>
          </defs>

          {/* Connection Edges */}
          {data.edges.map((edge, idx) => {
            const source = data.nodes.find((n) => n.id === edge.from);
            const target = data.nodes.find((n) => n.id === edge.to);
            if (!source || !target) return null;

            const sx = source.x + 65;
            const sy = source.y + 26;
            const tx = target.x;
            const ty = target.y + 26;

            const isHighlighted =
              hoveredNodeId === edge.from ||
              hoveredNodeId === edge.to ||
              selectedNodeId === edge.from ||
              selectedNodeId === edge.to;

            const midX = (sx + tx) / 2;
            const midY = (sy + ty) / 2;

            return (
              <g key={idx}>
                <path
                  d={`M ${sx} ${sy} C ${midX} ${sy}, ${midX} ${ty}, ${tx} ${ty}`}
                  fill="none"
                  stroke={isHighlighted ? '#6366F1' : 'hsl(var(--border))'}
                  strokeWidth={isHighlighted ? 2.5 : 1.5}
                  markerEnd="url(#arrowhead)"
                  className={cn(isHighlighted && 'animate-flow-dash')}
                />
                {edge.label && (
                  <text
                    x={midX}
                    y={midY - 6}
                    textAnchor="middle"
                    fill={isHighlighted ? '#6366F1' : 'hsl(var(--muted-foreground))'}
                    className="text-[9px] font-mono select-none font-medium"
                  >
                    {edge.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {data.nodes.map((node) => {
            const Icon = nodeIcons[node.type] || Server;
            const isSelected = selectedNodeId === node.id;
            const isHovered = hoveredNodeId === node.id;
            const layerColor = nodeLayerColors[node.type] || nodeLayerColors.server;

            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                onClick={() => setSelectedNodeId(node.id === selectedNodeId ? null : node.id)}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                className="cursor-pointer transition-all duration-150"
              >
                {/* Node Box */}
                <rect
                  width="130"
                  height="52"
                  rx="6"
                  className={cn(
                    'transition-all duration-150',
                    isSelected
                      ? 'fill-card stroke-indigo-500 stroke-2'
                      : isHovered
                      ? 'fill-card stroke-indigo-400'
                      : cn('fill-card', layerColor.strokeClass)
                  )}
                />

                {/* Left Icon Area */}
                <foreignObject x="10" y="14" width="24" height="24">
                  <div className={cn("flex items-center justify-center h-full w-full rounded", layerColor.iconBg, layerColor.iconColor)}>
                    <Icon size={13} />
                  </div>
                </foreignObject>

                {/* Node Labels */}
                <text
                  x="42"
                  y="24"
                  className="text-[11px] font-semibold fill-foreground tracking-tight"
                >
                  {node.label.length > 13 ? `${node.label.slice(0, 12)}…` : node.label}
                </text>
                <text
                  x="42"
                  y="38"
                  className={cn("text-[9px] font-mono font-medium uppercase", layerColor.badgeClass)}
                >
                  {node.sublabel ? (node.sublabel.length > 15 ? `${node.sublabel.slice(0, 14)}…` : node.sublabel) : node.type}
                </text>

                {/* Latency Pill if present */}
                {node.latency && (
                  <foreignObject x="72" y="34" width="52" height="14">
                    <div className="text-[8px] font-mono text-muted-foreground text-right pr-1">
                      {node.latency}
                    </div>
                  </foreignObject>
                )}
              </g>
            );
          })}
        </svg>

        {/* Floating Node Inspector Drawer */}
        {selectedNode && (
          <div className="absolute right-3 top-3 bottom-3 w-72 sm:w-80 rounded-lg border border-border bg-card shadow-xl p-4 flex flex-col justify-between animate-in fade-in zoom-in-95 duration-150 z-10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className={cn("p-1.5 rounded", (nodeLayerColors[selectedNode.type] || nodeLayerColors.server).iconBg, (nodeLayerColors[selectedNode.type] || nodeLayerColors.server).iconColor)}>
                    {React.createElement(nodeIcons[selectedNode.type] || Server, { size: 13 })}
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs text-foreground">{selectedNode.label}</h5>
                    <span className={cn("text-[10px] font-mono font-semibold uppercase", (nodeLayerColors[selectedNode.type] || nodeLayerColors.server).badgeClass)}>
                      {selectedNode.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNodeId(null)}
                  className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <X size={13} />
                </button>
              </div>

              {/* Role & Purpose */}
              <div className="mt-3">
                <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-1 font-mono">
                  Architectural Role
                </div>
                <p className="text-xs text-foreground/90 leading-relaxed">{selectedNode.role}</p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 mt-3">
                {selectedNode.latency && (
                  <div className="p-2 rounded bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/50 dark:border-indigo-800/30">
                    <div className="flex items-center gap-1 text-[10px] text-indigo-600 dark:text-indigo-400 font-mono">
                      <Clock size={11} /> Latency
                    </div>
                    <div className="text-xs font-mono font-bold text-foreground mt-0.5">
                      {selectedNode.latency}
                    </div>
                  </div>
                )}
                {selectedNode.throughput && (
                  <div className="p-2 rounded bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/30">
                    <div className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">
                      <Activity size={11} /> Capacity
                    </div>
                    <div className="text-xs font-mono font-bold text-foreground mt-0.5">
                      {selectedNode.throughput}
                    </div>
                  </div>
                )}
              </div>

              {/* Failure Modes */}
              {selectedNode.failureModes && selectedNode.failureModes.length > 0 && (
                <div className="mt-3">
                  <div className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400 tracking-wider mb-1 flex items-center gap-1 font-mono">
                    <AlertTriangle size={11} className="text-amber-500" /> Failure Modes
                  </div>
                  <ul className="space-y-1">
                    {selectedNode.failureModes.map((fm, idx) => (
                      <li key={idx} className="text-[11px] text-muted-foreground flex items-start gap-1.5 leading-relaxed">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{fm}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-border mt-3 text-[10px] text-muted-foreground font-mono text-center">
              Click node again or [✕] to dismiss
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
