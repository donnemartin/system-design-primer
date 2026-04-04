"""Unit tests for deck_of_cards.py"""
import unittest
from solutions.object_oriented_design.deck_of_cards.deck_of_cards import (
    BlackJackCard, BlackJackHand, Card, Suit, Deck
)


class TestBlackJackCard(unittest.TestCase):
    """Test cases for BlackJackCard"""

    def test_card_creation(self):
        """Test card creation"""
        card = BlackJackCard(5, Suit.HEART)
        self.assertEqual(card.value, 5)
        self.assertEqual(card.suit, Suit.HEART)

    def test_ace_value(self):
        """Test ace returns value 1"""
        ace = BlackJackCard(1, Suit.SPADE)
        self.assertEqual(ace.value, 1)
        self.assertTrue(ace.is_ace())

    def test_face_card_value(self):
        """Test face cards return value 10"""
        king = BlackJackCard(13, Suit.HEART)  # King
        queen = BlackJackCard(12, Suit.DIAMOND)  # Queen
        jack = BlackJackCard(11, Suit.CLUBS)  # Jack
        
        self.assertEqual(king.value, 10)
        self.assertEqual(queen.value, 10)
        self.assertEqual(jack.value, 10)
        self.assertTrue(king.is_face_card())

    def test_number_card_value(self):
        """Test number cards return correct value"""
        five = BlackJackCard(5, Suit.HEART)
        ten = BlackJackCard(10, Suit.SPADE)
        
        self.assertEqual(five.value, 5)
        self.assertEqual(ten.value, 10)

    def test_invalid_card_value(self):
        """Test invalid card value raises error"""
        with self.assertRaises(ValueError):
            BlackJackCard(14, Suit.HEART)

    def test_card_availability(self):
        """Test card availability"""
        card = BlackJackCard(5, Suit.HEART)
        self.assertTrue(card.is_available)


class TestBlackJackHand(unittest.TestCase):
    """Test cases for BlackJackHand"""

    def test_hand_creation(self):
        """Test hand creation"""
        cards = [BlackJackCard(5, Suit.HEART), BlackJackCard(7, Suit.SPADE)]
        hand = BlackJackHand(cards)
        self.assertEqual(len(hand.cards), 2)

    def test_possible_scores_no_ace(self):
        """Test possible scores without ace"""
        cards = [BlackJackCard(5, Suit.HEART), BlackJackCard(7, Suit.SPADE)]
        hand = BlackJackHand(cards)
        scores = hand.possible_scores()
        
        self.assertEqual(len(scores), 1)
        self.assertEqual(scores[0], 12)

    def test_possible_scores_with_one_ace(self):
        """Test possible scores with one ace"""
        cards = [BlackJackCard(1, Suit.HEART), BlackJackCard(9, Suit.SPADE)]
        hand = BlackJackHand(cards)
        scores = hand.possible_scores()
        
        self.assertIn(10, scores)  # Ace as 1
        self.assertIn(20, scores)  # Ace as 11

    def test_possible_scores_with_multiple_aces(self):
        """Test possible scores with multiple aces"""
        cards = [BlackJackCard(1, Suit.HEART), BlackJackCard(1, Suit.SPADE)]
        hand = BlackJackHand(cards)
        scores = hand.possible_scores()
        
        self.assertIn(2, scores)   # Both aces as 1
        self.assertIn(12, scores)  # One ace as 11, one as 1
        self.assertIn(22, scores)  # Both aces as 11

    def test_hand_score_selection(self):
        """Test hand selects best score"""
        cards = [BlackJackCard(1, Suit.HEART), BlackJackCard(9, Suit.SPADE)]
        hand = BlackJackHand(cards)
        
        self.assertEqual(hand.score(), 20)  # Prefers 20 over 10

    def test_hand_score_bust_selection(self):
        """Test hand score selection when all busts"""
        cards = [
            BlackJackCard(1, Suit.HEART),
            BlackJackCard(1, Suit.SPADE),
            BlackJackCard(1, Suit.DIAMOND),
            BlackJackCard(10, Suit.CLUBS)
        ]
        hand = BlackJackHand(cards)
        
        # Should pick highest non-busting or lowest busting
        score = hand.score()
        self.assertIsNotNone(score)


class TestDeck(unittest.TestCase):
    """Test cases for Deck"""

    def test_deck_creation(self):
        """Test deck creation"""
        cards = [BlackJackCard(i % 13 + 1, Suit.HEART) for i in range(52)]
        deck = Deck(cards)
        self.assertEqual(deck.remaining_cards(), 52)

    def test_deal_card(self):
        """Test dealing card from deck"""
        cards = [BlackJackCard(5, Suit.HEART)]
        deck = Deck(cards)
        
        card = deck.deal_card()
        self.assertEqual(card.value, 5)
        self.assertFalse(card.is_available)
        self.assertEqual(deck.remaining_cards(), 0)

    def test_deal_card_empty_deck(self):
        """Test dealing from empty deck"""
        deck = Deck([])
        card = deck.deal_card()
        self.assertIsNone(card)

    def test_shuffle(self):
        """Test deck shuffle"""
        cards = [BlackJackCard(i % 13 + 1, Suit.HEART) for i in range(10)]
        deck = Deck(cards.copy())
        deck.shuffle()
        # After shuffle, deck should still have same cards
        self.assertEqual(deck.remaining_cards(), 10)


if __name__ == '__main__':
    unittest.main()
