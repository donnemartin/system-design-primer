import React from 'react';
import { CapacityCalculator } from '@/components/calculator/CapacityCalculator';

export const metadata = {
  title: 'Capacity & Sizing Calculator | System Design Primer 2.0',
  description: 'Interactive back-of-the-envelope capacity calculator for throughput QPS, bandwidth, and multi-year storage estimation.',
};

export default function CalculatorPage() {
  return (
    <div className="pt-2">
      <CapacityCalculator />
    </div>
  );
}
