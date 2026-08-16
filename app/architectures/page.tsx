import React from 'react';
import { ArchitectureBuilder } from '@/components/builder/ArchitectureBuilder';

export const metadata = {
  title: 'Architecture Builder & Playground | System Design Primer 2.0',
  description: 'Interactive canvas for constructing distributed systems, configuring component latencies, and validating architecture resiliency.',
};

export default function ArchitecturesPage() {
  return (
    <div className="pt-2">
      <ArchitectureBuilder />
    </div>
  );
}
