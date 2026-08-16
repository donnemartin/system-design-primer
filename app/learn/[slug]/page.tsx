import React from 'react';
import { notFound } from 'next/navigation';
import { allTopicsData, getTopicBySlug } from '@/content/topicsData';
import { TopicReader } from '@/components/learn/TopicReader';
import { Metadata } from 'next';

interface TopicPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return allTopicsData.map((topic) => ({
    slug: topic.slug,
  }));
}

export function generateMetadata({ params }: TopicPageProps): Metadata {
  const topic = getTopicBySlug(params.slug);
  if (!topic) return { title: 'Topic Not Found' };

  return {
    title: `${topic.title} | System Design Primer 2.0`,
    description: topic.summary,
  };
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = getTopicBySlug(params.slug);

  if (!topic) {
    notFound();
  }

  return (
    <div className="pt-2">
      <TopicReader topic={topic} />
    </div>
  );
}
