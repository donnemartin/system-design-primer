import { UserProgressState, FlashcardReview } from '@/types';

export const initialProgressState: UserProgressState = {
  completedTopicSlugs: [],
  inProgressTopicSlugs: [],
  solvedInterviewSlugs: [],
  bookmarkedSlugs: [],
  notes: {},
  flashcardReviews: {},
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  activityDates: [new Date().toISOString().split('T')[0]],
  savedArchitectures: [],
};

const STORAGE_KEY = 'sdp_user_progress_v1';

export function getStoredProgress(): UserProgressState {
  if (typeof window === 'undefined') {
    return initialProgressState;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialProgressState;
    const parsed = JSON.parse(raw);
    return {
      ...initialProgressState,
      ...parsed,
    };
  } catch (err) {
    console.error('Failed to load progress from localStorage', err);
    return initialProgressState;
  }
}

export function saveStoredProgress(state: UserProgressState): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save progress to localStorage', err);
  }
}

/**
 * SuperMemo 2 (SM-2) Spaced Repetition Algorithm
 * @param rating 1: Again (Fail), 2: Hard, 3: Good, 4: Easy
 * @param previous Previous review state
 */
export function calculateSM2(rating: number, previous?: FlashcardReview): FlashcardReview {
  const cardId = previous?.cardId || '';
  let interval = previous?.interval || 0;
  let repetition = previous?.repetition || 0;
  let easeFactor = previous?.easeFactor || 2.5;

  if (rating >= 3) {
    if (repetition === 0) {
      interval = 1;
    } else if (repetition === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetition += 1;
  } else {
    repetition = 0;
    interval = 1;
  }

  easeFactor = easeFactor + (0.1 - (5 - rating) * (0.08 + (5 - rating) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  const now = new Date();
  const due = new Date();
  due.setDate(now.getDate() + interval);

  const ratingHistory = [...(previous?.ratingHistory || []), rating];

  return {
    cardId,
    interval,
    repetition,
    easeFactor,
    dueDate: due.toISOString(),
    lastReviewed: now.toISOString(),
    ratingHistory,
  };
}
