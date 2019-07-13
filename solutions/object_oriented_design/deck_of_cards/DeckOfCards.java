import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

class Card{

	private Suit suit;
	private Rank rank;

	public Card(Suit suit, Rank rank){
		this.suit = suit;
		this.rank = rank;
	}

	public Suit getSuit() {
		return suit;
	}

	public void setSuit(Suit suit) {
		this.suit = suit;
	}

	public Rank getRank() {
		return rank;
	}

	public void setRank(Rank rank) {
		this.rank = rank;
	}

	@Override
	public String toString() {
		return "Card [suit=" + suit + ", rank=" + rank + "]";
	}
}

class Deck{

	List<Card> cardDeck;

	public Deck(){
		cardDeck = new ArrayList<>();
		for(Suit suit : Suit.values()){
			for(Rank rank : Rank.values()){
				cardDeck.add(new Card(suit, rank));
			}
		}
	}

	public void shuffle(){
		Random random = new Random();
		for(int i=1; i<20; i++){
			int firstCard = random.nextInt(52);
			int secondCard = random.nextInt(52);
			Collections.swap(cardDeck, firstCard, secondCard);
		}
	}

	public void dealCard(Player player){
		Card card = cardDeck.remove(0);
		player.hand.add(card);
	}

	public int cardDeckSize(){
		return cardDeck.size();
	}

	public void showCardsInDeck(){
		for(Card card : cardDeck){
			System.out.println(card);
		}
	}
}

enum Suit{
	DIAMONDS(1),
	HEARTS(2),
	SPADES(3),
	CLUBS(4);

	private int suiteValue;

	private Suit(int suiteValue){
		this.suiteValue = suiteValue;
	}

	public int getSuiteValue(){
		return suiteValue;
	}
}

enum Rank{
	ACE(1),
	TWO(2),
	THREE(3),
	FOUR(4),
	FIVE(5),
	SIX(6),
	SEVEN(7),
	EIGHT(8),
	NINE(9),
	TEN(10),
	JACK(11),
	QUEEN(12),
	KING(13);

	private int rankValue;

	private Rank(int rankValue){
		this.rankValue = rankValue;
	}

	public int getRankValue(){
		return rankValue;
	}
}

class Player{

	List<Card> hand;

	public Player(){
		hand = new ArrayList<Card>();
	}

	public List<Card> getHand() {
		return hand;
	}

	public void setHand(List<Card> hand) {
		this.hand = hand;
	}

	public void showPlayerCard(){
		for(Card card : hand){
			System.out.println(card);
		}
	}

}


public class DeckOfCards {
	public static void main(String[] args) {
		Deck deck = new Deck();
		Player player1 = new Player();
		Player player2 = new Player();

		System.out.println(deck.cardDeckSize());
		deck.showCardsInDeck();
		deck.shuffle();
		deck.showCardsInDeck();

		deck.dealCard(player1);
		deck.dealCard(player2);
		player1.showPlayerCard();
		System.out.println(" ");
		player2.showPlayerCard();
		System.out.println(" ");
		System.out.println(deck.cardDeckSize());
		deck.showCardsInDeck();
	}
}
