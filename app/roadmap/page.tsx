import React from 'react';
import { RoadmapCanvas } from '@/components/roadmap/RoadmapCanvas';

export const metadata = {
  title: 'Learning Roadmap | System Design Primer 2.0',
  description: 'Interactive visual learning roadmap for mastering system design from fundamentals to advanced distributed systems.',
};

export default function RoadmapPage() {
  return (
    <div className="space-y-6">
      <RoadmapCanvas />
    </div>
  );
}
