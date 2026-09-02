import React from 'react';
import { TimedInterviewSimulator } from '@/components/interviews/TimedInterviewSimulator';

export const metadata = {
  title: 'Mock Interview Simulator | System Design Primer 2.0',
  description: 'Timed 45-minute system design mock interview simulation room with live scratchpad and FAANG grading rubric.',
};

export default function InterviewModePage() {
  return (
    <div className="pt-2">
      <TimedInterviewSimulator />
    </div>
  );
}
