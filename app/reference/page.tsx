import React from 'react';
import { NumbersReference } from '@/components/reference/NumbersReference';

export const metadata = {
  title: 'System Design Numbers Cheatsheet | System Design Primer 2.0',
  description: 'Latency numbers every engineer should know, high availability 9s table, powers of two, and system sizing rules of thumb.',
};

export default function ReferencePage() {
  return (
    <div className="pt-2">
      <NumbersReference />
    </div>
  );
}
