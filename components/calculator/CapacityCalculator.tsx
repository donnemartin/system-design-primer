'use client';

import React, { useState, useMemo } from 'react';
import { CalculatorInputs, CalculatorOutputs } from '@/types';
import {
  Calculator,
  HardDrive,
  Activity,
  Zap,
  Server,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { formatNumber } from '@/lib/utils';

const presets: { name: string; description: string; values: CalculatorInputs }[] = [
  {
    name: 'Twitter Timeline',
    description: '300M DAU, 15 reads/day, 100:1 read/write ratio.',
    values: {
      dau: 300_000_000,
      requestsPerUser: 15,
      readRatio: 100,
      writeRatio: 1,
      avgRequestSizeKB: 2,
      mediaUploadSizeMB: 0.5,
      mediaUploadPercent: 10,
      retentionYears: 5,
      peakMultiplier: 2.5,
    },
  },
  {
    name: 'Bit.ly URL Shortener',
    description: '50M DAU, 10 reads/day, 10:1 read/write ratio.',
    values: {
      dau: 50_000_000,
      requestsPerUser: 10,
      readRatio: 10,
      writeRatio: 1,
      avgRequestSizeKB: 1,
      mediaUploadSizeMB: 0,
      mediaUploadPercent: 0,
      retentionYears: 3,
      peakMultiplier: 3.0,
    },
  },
  {
    name: 'Instant Messaging',
    description: '500M DAU, 40 msgs/day, 1:1 read/write ratio.',
    values: {
      dau: 500_000_000,
      requestsPerUser: 40,
      readRatio: 1,
      writeRatio: 1,
      avgRequestSizeKB: 0.5,
      mediaUploadSizeMB: 1.0,
      mediaUploadPercent: 15,
      retentionYears: 2,
      peakMultiplier: 2.0,
    },
  },
];

export function CapacityCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>(presets[0].values);
  const [showFormulas, setShowFormulas] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const outputs = useMemo<CalculatorOutputs>(() => {
    const totalDailyRequests = inputs.dau * inputs.requestsPerUser;
    const avgQPS = totalDailyRequests / 86400;
    const peakQPS = avgQPS * inputs.peakMultiplier;

    const totalRatio = inputs.readRatio + inputs.writeRatio;
    const readFraction = inputs.readRatio / totalRatio;
    const writeFraction = inputs.writeRatio / totalRatio;

    const readQPS = avgQPS * readFraction;
    const writeQPS = avgQPS * writeFraction;
    const peakReadQPS = readQPS * inputs.peakMultiplier;
    const peakWriteQPS = writeQPS * inputs.peakMultiplier;

    const dailyWrites = totalDailyRequests * writeFraction;
    const dailyTextPayloadGB = (dailyWrites * inputs.avgRequestSizeKB) / (1024 * 1024);
    const dailyMediaUploads = dailyWrites * (inputs.mediaUploadPercent / 100);
    const dailyMediaGB = (dailyMediaUploads * inputs.mediaUploadSizeMB) / 1024;
    const dailyStorageGB = dailyTextPayloadGB + dailyMediaGB;

    const monthlyStorageTB = (dailyStorageGB * 30.5) / 1024;
    const totalStorageTB = monthlyStorageTB * 12 * inputs.retentionYears;
    const mediaStorageTBPerYear = (dailyMediaGB * 365) / 1024;

    const ingressBytesPerSec = writeQPS * (inputs.avgRequestSizeKB * 1024) + (dailyMediaUploads / 86400) * (inputs.mediaUploadSizeMB * 1024 * 1024);
    const egressBytesPerSec = readQPS * (inputs.avgRequestSizeKB * 1024);

    const ingressBandwidthMBps = ingressBytesPerSec / (1024 * 1024);
    const egressBandwidthMBps = egressBytesPerSec / (1024 * 1024);
    const ingressBandwidthGbps = (ingressBytesPerSec * 8) / 1_000_000_000;
    const egressBandwidthGbps = (egressBytesPerSec * 8) / 1_000_000_000;

    const dailyReads = totalDailyRequests * readFraction;
    const cacheMemoryGB = (dailyReads * 0.20 * inputs.avgRequestSizeKB) / (1024 * 1024) * 1.25;

    const estimatedAppServers = Math.ceil(peakQPS / 1000);
    const estimatedDbInstances = Math.max(2, Math.ceil(peakWriteQPS / 4000));

    return {
      totalDailyRequests,
      avgQPS: Math.round(avgQPS),
      peakQPS: Math.round(peakQPS),
      readQPS: Math.round(readQPS),
      writeQPS: Math.round(writeQPS),
      peakReadQPS: Math.round(peakReadQPS),
      peakWriteQPS: Math.round(peakWriteQPS),
      dailyStorageGB: parseFloat(dailyStorageGB.toFixed(2)),
      monthlyStorageTB: parseFloat(monthlyStorageTB.toFixed(2)),
      totalStorageTB: parseFloat(totalStorageTB.toFixed(2)),
      mediaStorageTBPerYear: parseFloat(mediaStorageTBPerYear.toFixed(2)),
      ingressBandwidthMBps: parseFloat(ingressBandwidthMBps.toFixed(2)),
      egressBandwidthMBps: parseFloat(egressBandwidthMBps.toFixed(2)),
      ingressBandwidthGbps: parseFloat(ingressBandwidthGbps.toFixed(2)),
      egressBandwidthGbps: parseFloat(egressBandwidthGbps.toFixed(2)),
      cacheMemoryGB: parseFloat(cacheMemoryGB.toFixed(2)),
      estimatedAppServers,
      estimatedDbInstances,
    };
  }, [inputs]);

  const copyMarkdownSummary = () => {
    const text = `### Capacity Sizing Estimation
- **DAU**: ${formatNumber(inputs.dau)}
- **Total Requests/Day**: ${formatNumber(outputs.totalDailyRequests)}
- **Throughput**: ${formatNumber(outputs.avgQPS)} QPS (Peak: ${formatNumber(outputs.peakQPS)} QPS)
- **Read/Write QPS**: ${formatNumber(outputs.readQPS)} Read / ${formatNumber(outputs.writeQPS)} Write
- **Bandwidth**: ${outputs.ingressBandwidthMBps} MB/s Ingress, ${outputs.egressBandwidthMBps} MB/s Egress
- **Storage (${inputs.retentionYears} Years)**: ${outputs.totalStorageTB} TB Total (${outputs.dailyStorageGB} GB/day)
- **RAM Cache (80/20 Rule)**: ${outputs.cacheMemoryGB} GB RAM
- **App Servers**: ~${outputs.estimatedAppServers} nodes`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4 pb-20">
      {/* Header & Presets */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg border border-border bg-card">
        <div>
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <Calculator size={15} className="text-muted-foreground" />
            Back-of-the-Envelope Capacity Calculator
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Model traffic scale, storage requirements, bandwidth, and cache sizing with transparent formulas.
          </p>
        </div>

        {/* Presets */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-xs text-muted-foreground">Presets:</span>
          {presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => setInputs(preset.values)}
              className="px-2.5 py-1 rounded-md border border-border bg-secondary hover:bg-secondary/80 text-foreground text-xs transition-colors font-medium"
            >
              {preset.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Inputs (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-lg border border-border bg-card space-y-3.5">
            <h3 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
              Workload Assumptions
            </h3>

            {/* DAU */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <label className="font-medium text-foreground">Daily Active Users (DAU)</label>
                <span className="font-mono text-foreground font-semibold text-[11px]">{formatNumber(inputs.dau)}</span>
              </div>
              <input
                type="range"
                min="100000"
                max="1000000000"
                step="1000000"
                value={inputs.dau}
                onChange={(e) => setInputs({ ...inputs, dau: Number(e.target.value) })}
                className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-foreground"
              />
            </div>

            {/* Requests / User */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <label className="font-medium text-foreground">Requests / User / Day</label>
                <span className="font-mono text-foreground font-semibold text-[11px]">{inputs.requestsPerUser}</span>
              </div>
              <input
                type="range"
                min="1"
                max="200"
                value={inputs.requestsPerUser}
                onChange={(e) => setInputs({ ...inputs, requestsPerUser: Number(e.target.value) })}
                className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-foreground"
              />
            </div>

            {/* Read / Write Ratio */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <label className="font-medium text-foreground">Read to Write Ratio</label>
                <span className="font-mono text-foreground font-semibold text-[11px]">{inputs.readRatio} : {inputs.writeRatio}</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={inputs.readRatio}
                onChange={(e) => setInputs({ ...inputs, readRatio: Number(e.target.value) })}
                className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-foreground"
              />
            </div>

            {/* Avg Request Size */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <label className="font-medium text-foreground">Payload Size (KB)</label>
                <span className="font-mono text-foreground font-semibold text-[11px]">{inputs.avgRequestSizeKB} KB</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="50"
                step="0.5"
                value={inputs.avgRequestSizeKB}
                onChange={(e) => setInputs({ ...inputs, avgRequestSizeKB: Number(e.target.value) })}
                className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-foreground"
              />
            </div>

            {/* Retention Years */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <label className="font-medium text-foreground">Retention Period (Years)</label>
                <span className="font-mono text-foreground font-semibold text-[11px]">{inputs.retentionYears} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={inputs.retentionYears}
                onChange={(e) => setInputs({ ...inputs, retentionYears: Number(e.target.value) })}
                className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-foreground"
              />
            </div>

            {/* Peak Multiplier */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <label className="font-medium text-foreground">Peak Traffic Multiplier</label>
                <span className="font-mono text-foreground font-semibold text-[11px]">{inputs.peakMultiplier}x</span>
              </div>
              <input
                type="range"
                min="1.5"
                max="10"
                step="0.5"
                value={inputs.peakMultiplier}
                onChange={(e) => setInputs({ ...inputs, peakMultiplier: Number(e.target.value) })}
                className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-foreground"
              />
            </div>
          </div>
        </div>

        {/* Right Outputs (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Average QPS */}
            <div className="p-3.5 rounded-lg border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-950/20">
              <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
                <span>Throughput</span>
                <Activity size={13} className="text-indigo-500" />
              </div>
              <div className="text-xl font-bold font-mono text-foreground mt-1">
                {formatNumber(outputs.avgQPS)} <span className="text-xs font-normal text-muted-foreground">QPS</span>
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">
                Peak: <span className="text-indigo-600 dark:text-indigo-400 font-bold">{formatNumber(outputs.peakQPS)}</span> QPS
              </div>
            </div>

            {/* Read / Write Breakdown */}
            <div className="p-3.5 rounded-lg border border-amber-500/20 bg-amber-500/5 dark:bg-amber-950/20">
              <div className="flex items-center justify-between text-amber-600 dark:text-amber-400 text-xs font-semibold">
                <span>Read / Write Split</span>
                <Zap size={13} className="text-amber-500" />
              </div>
              <div className="text-xl font-bold font-mono text-foreground mt-1">
                {formatNumber(outputs.readQPS)} / {formatNumber(outputs.writeQPS)}
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">{formatNumber(outputs.readQPS)}</span> Read • <span className="text-amber-600 dark:text-amber-400 font-bold">{formatNumber(outputs.writeQPS)}</span> Write
              </div>
            </div>

            {/* Bandwidth */}
            <div className="p-3.5 rounded-lg border border-cyan-500/20 bg-cyan-500/5 dark:bg-cyan-950/20">
              <div className="flex items-center justify-between text-cyan-600 dark:text-cyan-400 text-xs font-semibold">
                <span>Bandwidth</span>
                <Activity size={13} className="text-cyan-500" />
              </div>
              <div className="text-xl font-bold font-mono text-foreground mt-1">
                {outputs.egressBandwidthMBps} <span className="text-xs font-normal text-muted-foreground">MB/s Egress</span>
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">
                {outputs.ingressBandwidthMBps} MB/s Ingress ({outputs.ingressBandwidthGbps} Gbps)
              </div>
            </div>

            {/* Storage */}
            <div className="p-3.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/20">
              <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <span>{inputs.retentionYears}-Year Storage</span>
                <HardDrive size={13} className="text-emerald-500" />
              </div>
              <div className="text-xl font-bold font-mono text-foreground mt-1">
                {outputs.totalStorageTB} <span className="text-xs font-normal text-muted-foreground">TB Total</span>
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">
                +{outputs.dailyStorageGB} GB/day (+{outputs.monthlyStorageTB} TB/mo)
              </div>
            </div>

            {/* Cache Memory */}
            <div className="p-3.5 rounded-lg border border-orange-500/20 bg-orange-500/5 dark:bg-orange-950/20">
              <div className="flex items-center justify-between text-orange-600 dark:text-orange-400 text-xs font-semibold">
                <span>RAM Cache (80/20 Rule)</span>
                <Zap size={13} className="text-orange-500" />
              </div>
              <div className="text-xl font-bold font-mono text-foreground mt-1">
                {outputs.cacheMemoryGB} <span className="text-xs font-normal text-muted-foreground">GB RAM</span>
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5">
                Caches 20% of daily read volume
              </div>
            </div>

            {/* App Servers */}
            <div className="p-3.5 rounded-lg border border-violet-500/20 bg-violet-500/5 dark:bg-violet-950/20">
              <div className="flex items-center justify-between text-violet-600 dark:text-violet-400 text-xs font-semibold">
                <span>Server Fleet</span>
                <Server size={13} className="text-violet-500" />
              </div>
              <div className="text-xl font-bold font-mono text-foreground mt-1">
                ~{outputs.estimatedAppServers} <span className="text-xs font-normal text-muted-foreground">App Nodes</span>
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5">
                Assuming 1,000 QPS / core instance
              </div>
            </div>
          </div>

          {/* Copy Markdown Summary */}
          <div className="flex items-center justify-end">
            <button
              onClick={copyMarkdownSummary}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-card hover:bg-secondary text-xs font-medium text-foreground transition-colors"
            >
              {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
              <span>{copied ? 'Copied Markdown' : 'Copy Summary'}</span>
            </button>
          </div>

          {/* Formulas */}
          <div className="p-4 rounded-lg border border-border bg-card space-y-2.5 text-xs">
            <div
              className="flex items-center justify-between cursor-pointer select-none"
              onClick={() => setShowFormulas(!showFormulas)}
            >
              <h4 className="font-semibold text-foreground uppercase tracking-wider text-[10px]">
                Mathematical Breakdown
              </h4>
              {showFormulas ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </div>

            {showFormulas && (
              <div className="space-y-1.5 pt-2 border-t border-border font-mono text-[11px] text-muted-foreground leading-relaxed">
                <div>
                  <span className="text-foreground">Total Requests/Day</span> = DAU ({formatNumber(inputs.dau)}) × {inputs.requestsPerUser} = <span className="text-foreground">{formatNumber(outputs.totalDailyRequests)}</span>
                </div>
                <div>
                  <span className="text-foreground">Avg QPS</span> = {formatNumber(outputs.totalDailyRequests)} / 86,400s = <span className="text-foreground">{formatNumber(outputs.avgQPS)} QPS</span>
                </div>
                <div>
                  <span className="text-foreground">Cache Memory (80/20)</span> = Daily Reads × 20% × {inputs.avgRequestSizeKB}KB + 25% buffer = <span className="text-foreground font-semibold">{outputs.cacheMemoryGB} GB RAM</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
