'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserProgressState, FlashcardReview, Topic, ArchitectureArchitecturePreset } from '@/types';
import { getStoredProgress, saveStoredProgress, calculateSM2, initialProgressState } from '@/lib/storage';
import { allTopicsData } from '@/content/topicsData';
import confetti from 'canvas-confetti';

interface ProgressContextType {
  progress: UserProgressState;
  isLoaded: boolean;
  toggleCompleteTopic: (slug: string) => void;
  toggleBookmark: (slug: string) => void;
  saveTopicNote: (slug: string, note: string) => void;
  recordFlashcardReview: (cardId: string, rating: number) => FlashcardReview;
  markInterviewSolved: (slug: string) => void;
  saveArchitecture: (preset: ArchitectureArchitecturePreset) => void;
  isTopicCompleted: (slug: string) => boolean;
  isTopicInProgress: (slug: string) => boolean;
  isBookmarked: (slug: string) => boolean;
  isInterviewSolved: (slug: string) => boolean;
  getCompletionPercentage: () => number;
  getCategoryProgress: (categoryId: string) => { total: number; completed: number; percentage: number };
  getRecommendedNextTopic: () => Topic | undefined;
  resetProgress: () => void;
  exportProgressJson: () => string;
  importProgressJson: (json: string) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgressState>(initialProgressState);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loaded = getStoredProgress();
    
    // Check and update study streak
    const today = new Date().toISOString().split('T')[0];
    const activityDates = loaded.activityDates || [];
    let streak = loaded.streakDays || 1;

    if (!activityDates.includes(today)) {
      activityDates.push(today);
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (loaded.lastActiveDate === yesterday) {
        streak += 1;
      } else if (loaded.lastActiveDate !== today) {
        streak = 1;
      }
    }

    const updatedState = {
      ...loaded,
      streakDays: streak,
      lastActiveDate: today,
      activityDates,
    };

    setProgress(updatedState);
    saveStoredProgress(updatedState);
    setIsLoaded(true);
  }, []);

  const updateAndSave = (updater: (prev: UserProgressState) => UserProgressState) => {
    setProgress((prev) => {
      const next = updater(prev);
      saveStoredProgress(next);
      return next;
    });
  };

  const toggleCompleteTopic = (slug: string) => {
    updateAndSave((prev) => {
      const isCompleted = prev.completedTopicSlugs.includes(slug);
      let newCompleted: string[];
      let newInProgress = prev.inProgressTopicSlugs.filter((s) => s !== slug);

      if (isCompleted) {
        newCompleted = prev.completedTopicSlugs.filter((s) => s !== slug);
      } else {
        newCompleted = [...prev.completedTopicSlugs, slug];
        // Trigger subtle celebration confetti
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.85 },
            colors: ['#6366f1', '#10b981', '#38bdf8'],
          });
        } catch {
          // ignore if SSR or blocked
        }
      }

      return {
        ...prev,
        completedTopicSlugs: newCompleted,
        inProgressTopicSlugs: newInProgress,
      };
    });
  };

  const toggleBookmark = (slug: string) => {
    updateAndSave((prev) => {
      const isBookmarked = prev.bookmarkedSlugs.includes(slug);
      return {
        ...prev,
        bookmarkedSlugs: isBookmarked
          ? prev.bookmarkedSlugs.filter((s) => s !== slug)
          : [...prev.bookmarkedSlugs, slug],
      };
    });
  };

  const saveTopicNote = (slug: string, note: string) => {
    updateAndSave((prev) => ({
      ...prev,
      notes: {
        ...prev.notes,
        [slug]: note,
      },
    }));
  };

  const recordFlashcardReview = (cardId: string, rating: number): FlashcardReview => {
    const existing = progress.flashcardReviews[cardId];
    const updatedReview = calculateSM2(rating, existing);
    updatedReview.cardId = cardId;

    updateAndSave((prev) => ({
      ...prev,
      flashcardReviews: {
        ...prev.flashcardReviews,
        [cardId]: updatedReview,
      },
    }));

    return updatedReview;
  };

  const markInterviewSolved = (slug: string) => {
    updateAndSave((prev) => {
      if (prev.solvedInterviewSlugs.includes(slug)) return prev;
      return {
        ...prev,
        solvedInterviewSlugs: [...prev.solvedInterviewSlugs, slug],
      };
    });
  };

  const saveArchitecture = (preset: ArchitectureArchitecturePreset) => {
    updateAndSave((prev) => ({
      ...prev,
      savedArchitectures: [
        ...(prev.savedArchitectures || []).filter((a) => a.id !== preset.id),
        preset,
      ],
    }));
  };

  const isTopicCompleted = (slug: string) => progress.completedTopicSlugs.includes(slug);
  const isTopicInProgress = (slug: string) => progress.inProgressTopicSlugs.includes(slug);
  const isBookmarked = (slug: string) => progress.bookmarkedSlugs.includes(slug);
  const isInterviewSolved = (slug: string) => progress.solvedInterviewSlugs.includes(slug);

  const getCompletionPercentage = () => {
    if (allTopicsData.length === 0) return 0;
    return Math.round((progress.completedTopicSlugs.length / allTopicsData.length) * 100);
  };

  const getCategoryProgress = (categoryId: string) => {
    const categoryTopics = allTopicsData.filter((t) => t.category === categoryId);
    if (categoryTopics.length === 0) return { total: 0, completed: 0, percentage: 0 };
    const completed = categoryTopics.filter((t) => progress.completedTopicSlugs.includes(t.slug)).length;
    return {
      total: categoryTopics.length,
      completed,
      percentage: Math.round((completed / categoryTopics.length) * 100),
    };
  };

  const getRecommendedNextTopic = (): Topic | undefined => {
    // 1. Check topics where prerequisites are completed but current topic is not completed
    for (const topic of allTopicsData) {
      if (isTopicCompleted(topic.slug)) continue;
      const allPrereqsMet = topic.prerequisites.every((prereq) => isTopicCompleted(prereq));
      if (allPrereqsMet) {
        return topic;
      }
    }
    // Fallback to first uncompleted topic
    return allTopicsData.find((t) => !isTopicCompleted(t.slug)) || allTopicsData[0];
  };

  const resetProgress = () => {
    setProgress(initialProgressState);
    saveStoredProgress(initialProgressState);
  };

  const exportProgressJson = () => {
    return JSON.stringify(progress, null, 2);
  };

  const importProgressJson = (json: string): boolean => {
    try {
      const parsed = JSON.parse(json);
      if (Array.isArray(parsed.completedTopicSlugs)) {
        setProgress(parsed);
        saveStoredProgress(parsed);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        isLoaded,
        toggleCompleteTopic,
        toggleBookmark,
        saveTopicNote,
        recordFlashcardReview,
        markInterviewSolved,
        saveArchitecture,
        isTopicCompleted,
        isTopicInProgress,
        isBookmarked,
        isInterviewSolved,
        getCompletionPercentage,
        getCategoryProgress,
        getRecommendedNextTopic,
        resetProgress,
        exportProgressJson,
        importProgressJson,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
