'use client';

import React, { useState, useEffect } from 'react';
import { flashcardsData } from '@/content/flashcardsData';
import { useProgress } from '@/context/ProgressContext';
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Brain,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function FlashcardDeck() {
  const { progress, recordFlashcardReview } = useProgress();
  const [activeDeck, setActiveDeck] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [sessionReviewedCount, setSessionReviewedCount] = useState<number>(0);

  const filteredCards = flashcardsData.filter((card) =>
    activeDeck === 'all' ? true : card.deckId === activeDeck
  );

  const currentCard = filteredCards[currentIndex] || filteredCards[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (isFlipped) {
        if (e.key === '1') handleRate(1);
        else if (e.key === '2') handleRate(2);
        else if (e.key === '3') handleRate(3);
        else if (e.key === '4') handleRate(4);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFlipped, currentCard]);

  const handleRate = (rating: number) => {
    if (!currentCard) return;
    recordFlashcardReview(currentCard.id, rating);
    setSessionReviewedCount((prev) => prev + 1);

    setIsFlipped(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const reviewData = currentCard ? progress.flashcardReviews[currentCard.id] : null;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 pb-20">
      {/* Header Bar & Deck Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg border border-border bg-card">
        <div>
          <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
            <Sparkles size={15} className="text-violet-500" />
            Anki Spaced Repetition (SM-2)
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Retain system design concepts, trade-offs, and critical latency numbers.
          </p>
        </div>

        {/* Deck Filter Tabs */}
        <div className="flex items-center gap-1 p-0.5 bg-secondary rounded-md border border-border overflow-x-auto text-xs shrink-0">
          {[
            { id: 'all', label: 'All' },
            { id: 'networking', label: 'Networking' },
            { id: 'databases', label: 'Databases' },
            { id: 'caching', label: 'Caching' },
            { id: 'distributed', label: 'Distributed' },
            { id: 'numbers', label: 'Numbers' },
          ].map((deck) => (
            <button
              key={deck.id}
              onClick={() => {
                setActiveDeck(deck.id);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={cn(
                'px-2 py-1 rounded text-[11px] font-semibold transition-colors whitespace-nowrap',
                activeDeck === deck.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {deck.label}
            </button>
          ))}
        </div>
      </div>

      {/* Flashcard 3D Interactive Card Container */}
      <div className="perspective-1000 min-h-[300px] flex items-center justify-center">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className={cn(
            'w-full min-h-[280px] rounded-xl border bg-card p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 transform-style-3d select-none relative shadow-sm',
            isFlipped ? 'border-indigo-500/60 ring-1 ring-indigo-500/30' : 'border-border hover:border-indigo-500/40'
          )}
        >
          {/* Top Metadata */}
          <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border pb-2.5">
            <div className="flex items-center gap-2">
              <span className="font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-[10px] uppercase font-bold">
                {currentCard?.category}
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">
                {currentIndex + 1} / {filteredCards.length}
              </span>
            </div>

            <div className="flex items-center gap-1 text-[10px] text-indigo-600 dark:text-indigo-400 font-mono font-medium">
              <RotateCw size={10} />
              <span>[Space] or click to flip</span>
            </div>
          </div>

          {/* Card Body */}
          <div className="py-6 flex flex-col items-center justify-center text-center">
            {!isFlipped ? (
              <div className="space-y-2 max-w-lg">
                <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground font-mono">
                  Prompt
                </span>
                <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight leading-snug">
                  {currentCard?.front}
                </h3>
              </div>
            ) : (
              <div className="space-y-3 max-w-lg animate-in fade-in duration-150">
                <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                  Answer
                </span>
                <p className="text-xs sm:text-sm font-semibold text-foreground whitespace-pre-line leading-relaxed">
                  {currentCard?.back}
                </p>
                {currentCard?.explanation && (
                  <p className="text-xs text-muted-foreground italic mt-2 border-t border-border pt-2 leading-relaxed">
                    {currentCard.explanation}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Bottom metadata */}
          <div className="flex items-center justify-between text-[10px] text-muted-foreground border-t border-border pt-2 font-mono">
            <div className="flex items-center gap-1.5">
              {currentCard?.tags.map((tag) => (
                <span key={tag} className="text-indigo-500/80 font-medium">#{tag}</span>
              ))}
            </div>
            {reviewData && (
              <span className="text-emerald-500 font-semibold">
                Interval: {reviewData.interval}d | Reps: {reviewData.repetition}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Controls & SM-2 Grade Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-lg border border-border bg-card">
        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePrev}
            className="p-1.5 rounded-md border border-border bg-card hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            title="Previous"
          >
            <ChevronLeft size={13} />
          </button>
          <button
            onClick={handleNext}
            className="p-1.5 rounded-md border border-border bg-card hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            title="Next"
          >
            <ChevronRight size={13} />
          </button>
        </div>

        {/* SM-2 Rating Buttons */}
        {isFlipped ? (
          <div className="flex items-center gap-1.5 animate-in fade-in duration-150">
            <button
              onClick={() => handleRate(1)}
              className="px-2.5 py-1 rounded-md border border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20 text-xs font-bold flex items-center gap-1 transition-colors"
            >
              <span>Again</span>
              <kbd className="text-[9px] font-mono opacity-70">1</kbd>
            </button>
            <button
              onClick={() => handleRate(2)}
              className="px-2.5 py-1 rounded-md border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 text-xs font-bold flex items-center gap-1 transition-colors"
            >
              <span>Hard</span>
              <kbd className="text-[9px] font-mono opacity-70">2</kbd>
            </button>
            <button
              onClick={() => handleRate(3)}
              className="px-2.5 py-1 rounded-md border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/20 text-xs font-bold flex items-center gap-1 transition-colors"
            >
              <span>Good</span>
              <kbd className="text-[9px] font-mono opacity-70">3</kbd>
            </button>
            <button
              onClick={() => handleRate(4)}
              className="px-2.5 py-1 rounded-md bg-emerald-600 text-white text-xs font-bold flex items-center gap-1 hover:bg-emerald-700 shadow-sm transition-colors"
            >
              <span>Easy</span>
              <kbd className="text-[9px] font-mono opacity-80">4</kbd>
            </button>
          </div>
        ) : (
          <div className="text-xs text-muted-foreground font-mono">
            Flip card to rate recall interval (1-4)
          </div>
        )}

        <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1">
          <Brain size={13} />
          <span>{sessionReviewedCount} reviewed</span>
        </div>
      </div>
    </div>
  );
}
