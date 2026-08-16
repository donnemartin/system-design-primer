import React from 'react';
import { notFound } from 'next/navigation';
import { interviewProblemsData, getInterviewProblemBySlug } from '@/content/interviewProblems';
import { SteppedInterviewViewer } from '@/components/interviews/SteppedInterviewViewer';
import { Metadata } from 'next';

interface InterviewPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return interviewProblemsData.map((problem) => ({
    slug: problem.slug,
  }));
}

export function generateMetadata({ params }: InterviewPageProps): Metadata {
  const problem = getInterviewProblemBySlug(params.slug);
  if (!problem) return { title: 'Problem Not Found' };

  return {
    title: `${problem.title} | System Design Primer 2.0`,
    description: problem.subtitle,
  };
}

export default function InterviewProblemPage({ params }: InterviewPageProps) {
  const problem = getInterviewProblemBySlug(params.slug);

  if (!problem) {
    notFound();
  }

  return (
    <div className="pt-2">
      <SteppedInterviewViewer problem={problem} />
    </div>
  );
}
