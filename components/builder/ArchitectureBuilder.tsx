'use client';

import React, { useState } from 'react';
import {
  PlacedNode,
  PlacedConnection,
  ArchitectureArchitecturePreset,
  ArchitectureValidationIssue,
} from '@/types';
import {
  Server,
  Database,
  Zap,
  Globe,
  Network,
  Cpu,
  Layers,
  HardDrive,
  Plus,
  Trash2,
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  Link2,
  Sliders,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const availableComponentTemplates = [
  { type: 'client', name: 'User Client / Browser', category: 'client', icon: Globe, color: 'text-sky-500', bg: 'bg-sky-500/15', border: 'border-sky-500/30' },
  { type: 'dns', name: 'Route53 / GeoDNS', category: 'networking', icon: Globe, color: 'text-sky-500', bg: 'bg-sky-500/15', border: 'border-sky-500/30' },
  { type: 'cdn', name: 'CloudFront CDN Edge', category: 'networking', icon: Globe, color: 'text-cyan-500', bg: 'bg-cyan-500/15', border: 'border-cyan-500/30' },
  { type: 'lb', name: 'L7 Load Balancer / ALB', category: 'networking', icon: Network, color: 'text-blue-500', bg: 'bg-blue-500/15', border: 'border-blue-500/30' },
  { type: 'server', name: 'Stateless App Server', category: 'compute', icon: Server, color: 'text-indigo-500', bg: 'bg-indigo-500/15', border: 'border-indigo-500/30' },
  { type: 'cache', name: 'Redis / Memcached', category: 'caching', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/15', border: 'border-amber-500/30' },
  { type: 'db', name: 'PostgreSQL Primary DB', category: 'database', icon: Database, color: 'text-emerald-500', bg: 'bg-emerald-500/15', border: 'border-emerald-500/30' },
  { type: 'db-replica', name: 'PostgreSQL Read Replica', category: 'database', icon: Database, color: 'text-emerald-500', bg: 'bg-emerald-500/15', border: 'border-emerald-500/30' },
  { type: 'nosql', name: 'NoSQL (DynamoDB / Cassandra)', category: 'database', icon: HardDrive, color: 'text-teal-500', bg: 'bg-teal-500/15', border: 'border-teal-500/30' },
  { type: 'queue', name: 'Kafka / SQS Message Queue', category: 'messaging', icon: Layers, color: 'text-violet-500', bg: 'bg-violet-500/15', border: 'border-violet-500/30' },
  { type: 'worker', name: 'Background Worker Fleet', category: 'compute', icon: Cpu, color: 'text-violet-500', bg: 'bg-violet-500/15', border: 'border-violet-500/30' },
  { type: 'storage', name: 'S3 Object Storage', category: 'storage', icon: HardDrive, color: 'text-emerald-500', bg: 'bg-emerald-500/15', border: 'border-emerald-500/30' },
];

const prebuiltPresets: ArchitectureArchitecturePreset[] = [
  {
    id: 'preset-3tier',
    title: 'Scalable 3-Tier Web App',
    description: 'High-availability web service with CDN, Load Balancer, Redis Cache-Aside, and Primary + Read Replica database.',
    tags: ['Web', 'High-Availability', 'Caching'],
    estimatedLatencyMs: 18,
    estimatedThroughputQps: 50000,
    nodes: [
      { id: 'node-client', type: 'client', name: 'Client App', category: 'client', x: 30, y: 140, properties: { clients: '10,000 users' } },
      { id: 'node-cdn', type: 'cdn', name: 'CloudFront CDN', category: 'networking', x: 180, y: 70, properties: { cacheHitRate: '85%' } },
      { id: 'node-lb', type: 'lb', name: 'ALB Load Balancer', category: 'networking', x: 180, y: 210, properties: { algorithm: 'Round Robin' } },
      { id: 'node-server', type: 'server', name: 'App Server Tier', category: 'compute', x: 380, y: 210, properties: { instances: 4, autoScaling: true } },
      { id: 'node-cache', type: 'cache', name: 'Redis Cache', category: 'caching', x: 570, y: 110, properties: { ttlMinutes: 60, evictionPolicy: 'allkeys-lru' } },
      { id: 'node-db', type: 'db', name: 'Postgres Primary', category: 'database', x: 570, y: 220, properties: { multiAZ: true, storageGB: 500 } },
      { id: 'node-replica', type: 'db-replica', name: 'Read Replica', category: 'database', x: 570, y: 320, properties: { replicationLagMs: 20 } },
    ],
    connections: [
      { id: 'c1', sourceId: 'node-client', targetId: 'node-cdn', label: 'Static assets', protocol: 'HTTPS' },
      { id: 'c2', sourceId: 'node-client', targetId: 'node-lb', label: 'Dynamic API', protocol: 'HTTPS' },
      { id: 'c3', sourceId: 'node-lb', targetId: 'node-server', label: 'Forward request', protocol: 'HTTP/2' },
      { id: 'c4', sourceId: 'node-server', targetId: 'node-cache', label: 'Cache Aside', protocol: 'RESP' },
      { id: 'c5', sourceId: 'node-server', targetId: 'node-db', label: 'Write queries', protocol: 'SQL' },
      { id: 'c6', sourceId: 'node-server', targetId: 'node-replica', label: 'Read queries', protocol: 'SQL' },
    ],
  },
  {
    id: 'preset-event-driven',
    title: 'Event-Driven Async Pipeline',
    description: 'Decoupled high-throughput pipeline using Kafka buffer and auto-scaling worker consumers with NoSQL and Object Storage.',
    tags: ['Async', 'Kafka', 'Streaming'],
    estimatedLatencyMs: 12,
    estimatedThroughputQps: 150000,
    nodes: [
      { id: 'node-client', type: 'client', name: 'Mobile Clients', category: 'client', x: 30, y: 140, properties: {} },
      { id: 'node-lb', type: 'lb', name: 'Network LB', category: 'networking', x: 180, y: 140, properties: {} },
      { id: 'node-server', type: 'server', name: 'Ingestion Gateway', category: 'compute', x: 340, y: 140, properties: {} },
      { id: 'node-queue', type: 'queue', name: 'Kafka Cluster', category: 'messaging', x: 500, y: 140, properties: { retentionDays: 7 } },
      { id: 'node-worker', type: 'worker', name: 'Stream Workers', category: 'compute', x: 670, y: 70, properties: {} },
      { id: 'node-nosql', type: 'nosql', name: 'Cassandra NoSQL', category: 'database', x: 670, y: 200, properties: {} },
      { id: 'node-storage', type: 'storage', name: 'S3 Data Lake', category: 'storage', x: 670, y: 300, properties: {} },
    ],
    connections: [
      { id: 'c1', sourceId: 'node-client', targetId: 'node-lb', label: 'gRPC stream', protocol: 'TCP' },
      { id: 'c2', sourceId: 'node-lb', targetId: 'node-server', label: 'Route', protocol: 'TCP' },
      { id: 'c3', sourceId: 'node-server', targetId: 'node-queue', label: 'Publish event', protocol: 'Kafka' },
      { id: 'c4', sourceId: 'node-queue', targetId: 'node-worker', label: 'Consume stream', protocol: 'Pull' },
      { id: 'c5', sourceId: 'node-worker', targetId: 'node-nosql', label: 'Hot writes', protocol: 'CQL' },
      { id: 'c6', sourceId: 'node-worker', targetId: 'node-storage', label: 'Cold raw dump', protocol: 'S3 API' },
    ],
  },
];

export function ArchitectureBuilder() {
  const [nodes, setNodes] = useState<PlacedNode[]>(prebuiltPresets[0].nodes);
  const [connections, setConnections] = useState<PlacedConnection[]>(prebuiltPresets[0].connections);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [connectingSourceId, setConnectingSourceId] = useState<string | null>(null);

  const validateArchitecture = (): ArchitectureValidationIssue[] => {
    const issues: ArchitectureValidationIssue[] = [];

    const hasLB = nodes.some((n) => n.type === 'lb');
    const servers = nodes.filter((n) => n.type === 'server');
    const dbs = nodes.filter((n) => n.type === 'db' || n.type === 'nosql');
    const caches = nodes.filter((n) => n.type === 'cache');

    if (servers.length > 1 && !hasLB) {
      issues.push({
        type: 'error',
        title: 'Missing Load Balancer',
        description: 'Multiple app servers without a Load Balancer to distribute traffic evenly.',
        recommendation: 'Add a Layer 7 Load Balancer between clients and your server fleet.',
      });
    }

    if (dbs.length > 0 && caches.length === 0) {
      issues.push({
        type: 'warning',
        title: 'No In-Memory Caching Layer',
        description: 'Direct queries to the database without a cache tier can cause database CPU saturation.',
        recommendation: 'Add a Redis cache-aside tier to offload high-frequency reads.',
      });
    }

    if (nodes.length > 0 && !nodes.some((n) => n.type === 'client')) {
      issues.push({
        type: 'info',
        title: 'No Inbound Client Node',
        description: 'Consider adding a Client node to represent where incoming user traffic originates.',
        recommendation: 'Add a User Client from the component palette.',
      });
    }

    return issues;
  };

  const validationIssues = validateArchitecture();

  const handleAddNode = (template: typeof availableComponentTemplates[0]) => {
    const newId = `node-${Date.now()}`;
    const newNode: PlacedNode = {
      id: newId,
      type: template.type,
      name: template.name,
      category: template.category,
      x: 60 + (nodes.length % 4) * 80,
      y: 60 + (nodes.length % 3) * 65,
      properties: {},
    };
    setNodes([...nodes, newNode]);
    setSelectedNodeId(newId);
  };

  const handleDeleteNode = (nodeId: string) => {
    setNodes(nodes.filter((n) => n.id !== nodeId));
    setConnections(connections.filter((c) => c.sourceId !== nodeId && c.targetId !== nodeId));
    if (selectedNodeId === nodeId) setSelectedNodeId(null);
  };

  const handleConnectClick = (nodeId: string) => {
    if (!connectingSourceId) {
      setConnectingSourceId(nodeId);
    } else if (connectingSourceId !== nodeId) {
      const newConn: PlacedConnection = {
        id: `conn-${Date.now()}`,
        sourceId: connectingSourceId,
        targetId: nodeId,
        label: 'Connects to',
        protocol: 'TCP',
      };
      setConnections([...connections, newConn]);
      setConnectingSourceId(null);
    } else {
      setConnectingSourceId(null);
    }
  };

  const loadPreset = (preset: ArchitectureArchitecturePreset) => {
    setNodes(preset.nodes);
    setConnections(preset.connections);
    setSelectedNodeId(null);
    setConnectingSourceId(null);
  };

  const selectedNode = nodes.find((n) => n.id === selectedNodeId);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-4 pb-16">
      {/* Top Header & Presets */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg border border-border bg-card">
        <div>
          <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
            <Layers size={15} className="text-indigo-500" />
            System Architecture Builder & Playground
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Construct distributed architectures, inspect parameters, and audit failure resiliency.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-xs text-muted-foreground">Presets:</span>
          {prebuiltPresets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => loadPreset(preset)}
              className="px-2.5 py-1 rounded-md border border-border bg-secondary hover:bg-indigo-500/10 hover:border-indigo-500/30 text-foreground text-xs transition-colors font-medium"
            >
              {preset.title.split(' ')[0]}
            </button>
          ))}
          <button
            onClick={() => {
              setNodes([]);
              setConnections([]);
            }}
            className="p-1 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            title="Clear canvas"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* Main Builder Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Component Palette (Left 3 cols) */}
        <div className="lg:col-span-3 rounded-lg border border-border bg-card p-3.5 space-y-3 h-fit">
          <div className="flex items-center justify-between">
            <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider font-mono">
              Component Palette
            </h4>
            <span className="text-[10px] text-muted-foreground font-mono">Click to place</span>
          </div>

          <div className="space-y-1 max-h-[460px] overflow-y-auto pr-1">
            {availableComponentTemplates.map((template, idx) => {
              const Icon = template.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleAddNode(template)}
                  className="w-full flex items-center justify-between p-2 rounded-md border border-border/60 bg-secondary/30 hover:bg-secondary text-left transition-colors group text-xs"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className={cn("p-1 rounded shrink-0", template.bg, template.color)}>
                      <Icon size={12} />
                    </div>
                    <span className="font-medium text-foreground text-[11px] truncate">{template.name}</span>
                  </div>
                  <Plus size={11} className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                </button>
              );
            })}
          </div>

          <div className="pt-2.5 border-t border-border text-[11px] text-muted-foreground space-y-1">
            <div className="flex items-center gap-1 font-semibold text-foreground text-xs">
              <Link2 size={12} className="text-indigo-500" />
              Connecting Nodes
            </div>
            <p className="text-[10px] leading-relaxed">
              Click the link icon on a source component, then click any target component to connect.
            </p>
          </div>
        </div>

        {/* Canvas Area (Center 6 cols) */}
        <div className="lg:col-span-6 rounded-lg border border-border bg-card p-4 min-h-[460px] relative overflow-hidden flex flex-col justify-between bg-grid-pattern">
          {/* Canvas Toolbar */}
          <div className="flex items-center justify-between pb-2.5 border-b border-border/80 text-xs">
            <span className="text-indigo-600 dark:text-indigo-400 font-mono text-[10px] font-semibold">
              {nodes.length} Components | {connections.length} Connections
            </span>
            {connectingSourceId && (
              <span className="text-amber-500 font-mono text-[10px] font-bold animate-pulse">
                Select target component to connect...
              </span>
            )}
          </div>

          {/* Placed Nodes & SVG Lines */}
          <div className="relative flex-1 min-h-[380px] my-2 overflow-auto">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minWidth: '700px', minHeight: '400px' }}>
              {connections.map((conn) => {
                const src = nodes.find((n) => n.id === conn.sourceId);
                const tgt = nodes.find((n) => n.id === conn.targetId);
                if (!src || !tgt) return null;

                const sx = src.x + 65;
                const sy = src.y + 24;
                const tx = tgt.x;
                const ty = tgt.y + 24;

                return (
                  <g key={conn.id}>
                    <line
                      x1={sx}
                      y1={sy}
                      x2={tx}
                      y2={ty}
                      stroke="#6366F1"
                      strokeWidth={2}
                      strokeDasharray="5 4"
                      opacity={0.8}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Render Nodes */}
            {nodes.map((node) => {
              const isSelected = selectedNodeId === node.id;
              const isConnecting = connectingSourceId === node.id;
              const template = availableComponentTemplates.find((t) => t.type === node.type) || availableComponentTemplates[4];
              const Icon = template.icon;

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  style={{
                    position: 'absolute',
                    left: `${node.x}px`,
                    top: `${node.y}px`,
                  }}
                  className={cn(
                    'p-2 rounded-md border bg-card shadow-sm flex items-center gap-2 cursor-pointer transition-all w-40 select-none z-10',
                    isSelected ? 'ring-2 ring-indigo-500 border-indigo-500' : 'border-border hover:border-indigo-500/50',
                    isConnecting && 'ring-2 ring-amber-500'
                  )}
                >
                  <div className={cn("h-5 w-5 rounded flex items-center justify-center shrink-0", template.bg, template.color)}>
                    <Icon size={11} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold text-foreground truncate">{node.name}</div>
                    <div className={cn("text-[8px] font-mono font-semibold uppercase", template.color)}>{node.type}</div>
                  </div>

                  <div className="flex items-center gap-0.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleConnectClick(node.id);
                      }}
                      className={cn(
                        'p-0.5 rounded hover:bg-secondary text-muted-foreground',
                        isConnecting && 'text-amber-500 font-bold'
                      )}
                      title="Connect node"
                    >
                      <Link2 size={11} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteNode(node.id);
                      }}
                      className="p-0.5 rounded hover:bg-secondary text-muted-foreground hover:text-rose-500"
                      title="Delete node"
                    >
                      <Trash2 size={11} />
                    </button>
                  </div>
                </div>
              );
            })}

            {nodes.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground text-xs py-20">
                <Layers size={24} className="text-indigo-500/40 mb-2" />
                <p className="font-semibold text-foreground">Canvas is empty</p>
                <p className="text-[10px] mt-0.5">Add components from the left palette or choose a template above.</p>
              </div>
            )}
          </div>
        </div>

        {/* Health Validator & Inspector (Right 3 cols) */}
        <div className="lg:col-span-3 rounded-lg border border-border bg-card p-3.5 space-y-4 h-fit">
          {/* Architecture Health */}
          <div>
            <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 mb-2 font-mono">
              <CheckCircle2 size={12} className="text-emerald-500" />
              Architecture Health
            </h4>

            {validationIssues.length === 0 ? (
              <div className="p-2.5 rounded-md border border-emerald-500/30 bg-emerald-500/5 text-xs text-foreground flex items-center gap-2">
                <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">Topology is resilient. No SPOFs detected.</span>
              </div>
            ) : (
              <div className="space-y-2">
                {validationIssues.map((issue, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-md border border-border bg-secondary/30 text-xs space-y-1"
                  >
                    <div className="font-semibold flex items-center gap-1.5 text-foreground text-[11px]">
                      <AlertTriangle size={11} className={issue.type === 'error' ? 'text-rose-500' : 'text-amber-500'} />
                      {issue.title}
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">{issue.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Node Property Inspector */}
          {selectedNode ? (
            <div className="pt-3 border-t border-border space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1 font-mono">
                  <Sliders size={11} />
                  Properties
                </h4>
                <span className="text-[9px] font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase">{selectedNode.type}</span>
              </div>

              <div>
                <label className="text-[10px] text-muted-foreground font-medium">Custom Label</label>
                <input
                  type="text"
                  value={selectedNode.name}
                  onChange={(e) => {
                    const updated = nodes.map((n) =>
                      n.id === selectedNode.id ? { ...n, name: e.target.value } : n
                    );
                    setNodes(updated);
                  }}
                  className="w-full text-xs bg-secondary border border-border rounded-md px-2.5 py-1.5 text-foreground mt-1 focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              <div className="p-2 rounded bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200/40 dark:border-indigo-800/30 text-[9px] space-y-1 font-mono text-muted-foreground">
                <div>Failover: <span className="text-emerald-500 font-bold">Multi-AZ Active</span></div>
                <div>Telemetry: <span className="text-indigo-500 font-bold">OpenTelemetry</span></div>
              </div>
            </div>
          ) : (
            <div className="pt-3 border-t border-border text-[10px] text-muted-foreground text-center py-3">
              Select component on canvas to inspect
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
