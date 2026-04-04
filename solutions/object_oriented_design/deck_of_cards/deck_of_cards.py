from abc import ABCMeta, abstractmethod
from enum import Enum
import sys
from typing import List, Optional


class Suit(Enum):
    """Card suits in a standard deck."""
    HEART = 0
    DIAMOND = 1
    CLUBS = 2
    SPADE = 3


class Card(metaclass=ABCMeta):
    """Abstract base class for cards."""

    def __init__(self, value: int, suit: Suit) -> None:
        self.value: int = value
        self.suit: Suit = suit
        self.is_available: bool = True

    @property
    @abstractmethod
    def value(self) -> int:
        pass

    @value.setter
    @abstractmethod
    def value(self, other: int) -> None:
        pass


class BlackJackCard(Card):
    """Card implementation for BlackJack game."""

    def __init__(self, value: int, suit: Suit) -> None:
        super(BlackJackCard, self).__init__(value, suit)

    def is_ace(self) -> bool:
        """Check if card is an ace."""
        return True if self._value == 1 else False

    def is_face_card(self) -> bool:
        """Check if card is a face card (Jack = 11, Queen = 12, King = 13)."""
        return True if 10 < self._value <= 13 else False

    @property
    def value(self) -> int:
        """Get BlackJack value of the card (Aces=1 or 11, Face=10, Number=number)."""
        if self.is_ace():
            return 1
        elif self.is_face_card():
            return 10
        else:
            return self._value

    @value.setter
    def value(self, new_value: int) -> None:
        """Set card value (1-13)."""
        if 1 <= new_value <= 13:
            self._value = new_value
        else:
            raise ValueError('Invalid card value: {}'.format(new_value))


class Hand(object):
    """Base class for card hands."""

    def __init__(self, cards: List[Card]) -> None:
        self.cards: List[Card] = cards

    def add_card(self, card: Card) -> None:
        """Add a card to the hand."""
        self.cards.append(card)

    def score(self) -> int:
        """Calculate the hand score."""
        total_value: int = 0
        for card in self.cards:
            total_value += card.value
        return total_value


class BlackJackHand(Hand):
    """Hand implementation for BlackJack game."""

    BLACKJACK: int = 21

    def __init__(self, cards: List[Card]) -> None:
        super(BlackJackHand, self).__init__(cards)

    def score(self) -> int:
        """Calculate the best BlackJack hand score (closest to 21 without exceeding)."""
        min_over: int = sys.MAXSIZE
        max_under: int = -sys.MAXSIZE
        for score in self.possible_scores():
            if self.BLACKJACK < score < min_over:
                min_over = score
            elif max_under < score <= self.BLACKJACK:
                max_under = score
        return max_under if max_under != -sys.MAXSIZE else min_over

    def possible_scores(self) -> List[int]:
        """Return a list of possible scores, taking Aces into account."""
        score: int = 0
        aces: int = 0
        scores: List[int] = []
        
        for card in self.cards:
            if card.is_ace():
                aces += 1
            score += card.value
        
        scores.append(score)
        
        # Generate additional scores with Ace as 11 instead of 1
        while aces > 0:
            score -= 1  # Convert Ace from 11 to 1 (net -10)
            score += 10
            aces -= 1
            scores.append(score)
        
        return scores


class Deck(object):
    """Standard card deck."""

    def __init__(self, cards: List[Card]) -> None:
        self.cards: List[Card] = cards
        self.deal_index: int = 0

    def remaining_cards(self) -> int:
        """Get number of remaining cards in deck."""
        return len(self.cards) - self.deal_index

    def deal_card(self) -> Optional[Card]:
        """Deal a card from the deck."""
        try:
            card: Card = self.cards[self.deal_index]
            card.is_available = False
            self.deal_index += 1
        except IndexError:
            return None
        return card

    def shuffle(self) -> None:
        """Shuffle the deck."""
        import random
        random.shuffle(self.cards)
