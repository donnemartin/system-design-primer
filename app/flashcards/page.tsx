import React from 'react';
import { FlashcardDeck } from '@/components/flashcards/FlashcardDeck';

export const metadata = {
  title: 'Anki SRS Flashcards | System Design Primer 2.0',
  description: 'Master system design numbers, CAP theorem, and distributed patterns with spaced repetition flashcards.',
};

export default function FlashcardsPage() {
  return (
    <div className="pt-2">
      <FlashcardDeck />
    </div>
  );
}
