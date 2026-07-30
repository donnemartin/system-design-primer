#include <iostream>
#include <vector>
#include <algorithm>
#include <random>
#include <ctime>
#include <climits>

enum class Suit {
    HEART,
    DIAMOND,
    CLUBS,
    SPADE
};

std::string suitToString(Suit suit) {
    switch (suit) {
        case Suit::HEART: return "Hearts";
        case Suit::DIAMOND: return "Diamonds";
        case Suit::CLUBS: return "Clubs";
        case Suit::SPADE: return "Spades";
        default: return "Unknown";
    }
}

class Card {
protected:
    int value;
    Suit suit;
    bool isAvailable;

public:
    Card(int val, Suit s) : value(val), suit(s), isAvailable(true) {}
    virtual ~Card() = default;

    virtual int getValue() const { return value; }
    virtual void setValue(int newValue) {
        if (newValue >= 1 && newValue <= 13) {
            value = newValue;
        }
    }

    Suit getSuit() const { return suit; }
    bool available() const { return isAvailable; }
    void setAvailable(bool avail) { isAvailable = avail; }

    virtual std::string toString() const = 0;
};

class BlackJackCard : public Card {
public:
    BlackJackCard(int val, Suit s) : Card(val, s) {}

    bool isAce() const { return value == 1; }
    bool isFaceCard() const { return value > 10 && value <= 13; }

    int getValue() const override {
        if (isAce()) return 1;
        if (isFaceCard()) return 10;
        return value;
    }

    std::string toString() const override {
        std::string valStr;
        if (isAce()) valStr = "Ace";
        else if (value == 11) valStr = "Jack";
        else if (value == 12) valStr = "Queen";
        else if (value == 13) valStr = "King";
        else valStr = std::to_string(value);

        return valStr + " of " + suitToString(suit);
    }
};

class Hand {
protected:
    std::vector<Card*> cards;

public:
    virtual ~Hand() = default;

    void addCard(Card* card) {
        cards.push_back(card);
    }

    virtual int score() const {
        int totalValue = 0;
        for (const auto& card : cards) {
            totalValue += card->getValue();
        }
        return totalValue;
    }

    void print() const {
        for (const auto& card : cards) {
            std::cout << card->toString() << " ";
        }
        std::cout << "(Score: " << score() << ")" << std::endl;
    }
};

class BlackJackHand : public Hand {
private:
    static const int BLACKJACK = 21;

public:
    std::vector<int> possibleScores() const {
        std::vector<int> scores;
        int aces = 0;
        int total = 0;

        for (const auto& card : cards) {
            total += card->getValue();
            if (card->getValue() == 1) aces++;
        }

        scores.push_back(total);
        for (int i = 0; i < aces; i++) {
            total += 10;
            if (total <= 31) {
                scores.push_back(total);
            }
        }

        return scores;
    }

    int score() const override {
        int minOver = INT_MAX;
        int maxUnder = INT_MIN;

        for (int s : possibleScores()) {
            if (s > BLACKJACK && s < minOver) {
                minOver = s;
            } else if (s <= BLACKJACK && s > maxUnder) {
                maxUnder = s;
            }
        }

        return (maxUnder != INT_MIN) ? maxUnder : minOver;
    }

    bool isBlackjack() const {
        return score() == BLACKJACK;
    }

    bool isBusted() const {
        return score() > BLACKJACK;
    }
};

class Deck {
private:
    std::vector<Card*> cards;
    int dealIndex;

public:
    Deck() : dealIndex(0) {
        for (int suit = 0; suit <= 3; suit++) {
            for (int value = 1; value <= 13; value++) {
                cards.push_back(new BlackJackCard(value, static_cast<Suit>(suit)));
            }
        }
    }

    ~Deck() {
        for (auto card : cards) {
            delete card;
        }
    }

    int remainingCards() const {
        return cards.size() - dealIndex;
    }

    Card* dealCard() {
        if (dealIndex >= cards.size()) return nullptr;
        Card* card = cards[dealIndex];
        card->setAvailable(false);
        dealIndex++;
        return card;
    }

    void shuffle() {
        std::random_device rd;
        std::mt19937 g(rd());
        std::shuffle(cards.begin(), cards.end(), g);
        dealIndex = 0;
    }

    void print() const {
        std::cout << "Deck: " << remainingCards() << " cards remaining" << std::endl;
    }
};

int main() {
    Deck deck;
    deck.shuffle();

    std::cout << "Dealing 5 cards:" << std::endl;
    for (int i = 0; i < 5; i++) {
        Card* card = deck.dealCard();
        if (card) {
            std::cout << card->toString() << std::endl;
        }
    }

    deck.print();

    BlackJackHand hand;
    hand.addCard(deck.dealCard());
    hand.addCard(deck.dealCard());

    std::cout << "\nBlackjack hand: ";
    hand.print();

    if (hand.isBlackjack()) {
        std::cout << "Blackjack!" << std::endl;
    } else if (hand.isBusted()) {
        std::cout << "Busted!" << std::endl;
    }

    return 0;
}
