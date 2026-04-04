"""
Flask web application for System Design Primer - Interactive OOP Solutions Demo
"""
from flask import Flask, render_template, request, jsonify
import json
from collections import deque

# Import all solutions
from solutions.object_oriented_design.call_center.call_center import (
    CallCenter, Operator, Supervisor, Director, Call, Rank, CallState
)
from solutions.object_oriented_design.parking_lot.parking_lot import (
    ParkingLot, Level, ParkingSpot, Motorcycle, Car, Bus, VehicleSize
)
from solutions.object_oriented_design.deck_of_cards.deck_of_cards import (
    BlackJackCard, BlackJackHand, Deck, Suit
)
from solutions.object_oriented_design.hash_table.hash_map import HashTable
from solutions.object_oriented_design.lru_cache.lru_cache import Cache
from solutions.object_oriented_design.online_chat.online_chat import (
    UserService, User, GroupChat, RequestStatus
)

app = Flask(__name__)

# Global instances for demo
call_center = None
parking_lot = None
hash_table = None
cache = None
user_service = None


def init_systems():
    """Initialize all demo systems."""
    global call_center, parking_lot, hash_table, cache, user_service
    
    # Initialize Call Center
    call_center = CallCenter(
        operators=[Operator(1, "Alice", None), Operator(2, "Bob", None)],
        supervisors=[Supervisor(3, "Charlie", None)],
        directors=[Director(4, "Diana", None)]
    )
    # Fix call_center reference
    for emp in call_center.operators + call_center.supervisors + call_center.directors:
        emp.call_center = call_center
    
    # Initialize Parking Lot
    parking_lot = ParkingLot(2)
    for floor in range(2):
        level = Level(floor, 10)
        for i in range(10):
            spot = ParkingSpot(level, 0, i, 1, VehicleSize.COMPACT)
            level.spots.append(spot)
        level.available_spots = len(level.spots)
        parking_lot.levels.append(level)
    
    # Initialize Hash Table
    hash_table = HashTable(10)
    
    # Initialize Cache
    cache = Cache(5)
    
    # Initialize User Service
    user_service = UserService()


@app.route('/')
def index():
    """Home page with links to all solutions."""
    return render_template('index.html')


@app.route('/call-center')
def call_center_page():
    """Call Center solution page."""
    return render_template('call_center.html')


@app.route('/api/call-center/dispatch', methods=['POST'])
def dispatch_call():
    """Dispatch a call in the call center."""
    try:
        rank_str = request.json.get('rank', 'OPERATOR')
        rank = Rank[rank_str]
        
        call = Call(rank)
        call_center.dispatch_call(call)
        
        result = {
            'success': True,
            'call_id': id(call),
            'rank': rank_str,
            'state': call.state.name,
            'assigned_to': call.employee.name if call.employee else 'Queued',
            'queued_calls': len(call_center.queued_calls)
        }
        return jsonify(result)
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400


@app.route('/parking-lot')
def parking_lot_page():
    """Parking Lot solution page."""
    return render_template('parking_lot.html')


@app.route('/api/parking-lot/park', methods=['POST'])
def park_vehicle():
    """Park a vehicle in the parking lot."""
    try:
        vehicle_type = request.json.get('vehicle_type', 'car')
        plate = request.json.get('plate', 'UNKNOWN')
        
        if vehicle_type == 'motorcycle':
            vehicle = Motorcycle(plate)
        elif vehicle_type == 'bus':
            vehicle = Bus(plate)
        else:
            vehicle = Car(plate)
        
        success = parking_lot.park_vehicle(vehicle)
        
        available = sum(level.available_spots for level in parking_lot.levels)
        
        result = {
            'success': success,
            'vehicle': f'{vehicle_type.title()}: {plate}',
            'parked': success,
            'available_spots': available,
            'message': f"Vehicle {'parked successfully' if success else 'could not be parked - lot full'}"
        }
        return jsonify(result)
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400


@app.route('/deck-of-cards')
def deck_page():
    """Deck of Cards solution page."""
    return render_template('deck_of_cards.html')


@app.route('/api/deck/deal', methods=['POST'])
def deal_cards():
    """Deal BlackJack hand."""
    try:
        num_cards = int(request.json.get('num_cards', 2))
        
        # Create deck
        cards = []
        for suit in Suit:
            for value in range(1, 14):
                cards.append(BlackJackCard(value, suit))
        
        deck = Deck(cards)
        deck.shuffle()
        
        # Deal cards
        hand_cards = []
        for i in range(min(num_cards, deck.remaining_cards())):
            card = deck.deal_card()
            hand_cards.append(card)
        
        # Calculate score
        hand = BlackJackHand(hand_cards)
        score = hand.score()
        possible = hand.possible_scores()
        
        card_info = []
        for card in hand_cards:
            suit_name = card.suit.name
            card_info.append(f"{card._value} of {suit_name}s (Value: {card.value})")
        
        result = {
            'success': True,
            'cards': card_info,
            'score': score,
            'possible_scores': possible,
            'cards_remaining': deck.remaining_cards()
        }
        return jsonify(result)
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400


@app.route('/hash-table')
def hash_table_page():
    """Hash Table solution page."""
    return render_template('hash_table.html')


@app.route('/api/hash-table/set', methods=['POST'])
def hash_set():
    """Set a value in the hash table."""
    try:
        key = int(request.json.get('key', 0))
        value = request.json.get('value', '')
        
        hash_table.set(key, value)
        
        result = {
            'success': True,
            'key': key,
            'value': value,
            'message': f'Set {key} = {value}'
        }
        return jsonify(result)
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400


@app.route('/api/hash-table/get', methods=['POST'])
def hash_get():
    """Get a value from the hash table."""
    try:
        key = int(request.json.get('key', 0))
        value = hash_table.get(key)
        
        result = {
            'success': True,
            'key': key,
            'value': value,
            'message': f'Found: {key} = {value}'
        }
        return jsonify(result)
    except Exception as e:
        return jsonify({'success': False, 'error': f'Key {int(request.json.get("key", 0))} not found'}), 400


@app.route('/api/hash-table/remove', methods=['POST'])
def hash_remove():
    """Remove a value from the hash table."""
    try:
        key = int(request.json.get('key', 0))
        hash_table.remove(key)
        
        result = {
            'success': True,
            'key': key,
            'message': f'Removed key {key}'
        }
        return jsonify(result)
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400


@app.route('/lru-cache')
def lru_cache_page():
    """LRU Cache solution page."""
    return render_template('lru_cache.html')


@app.route('/api/cache/set', methods=['POST'])
def cache_set():
    """Set a value in the cache."""
    try:
        query = request.json.get('query', '')
        result_val = request.json.get('result', '')
        
        cache.set(result_val, query)
        
        result = {
            'success': True,
            'query': query,
            'result': result_val,
            'cache_size': cache.size,
            'max_size': cache.MAX_SIZE,
            'message': f'Cached: {query} = {result_val}'
        }
        return jsonify(result)
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400


@app.route('/api/cache/get', methods=['POST'])
def cache_get():
    """Get a value from the cache."""
    try:
        query = request.json.get('query', '')
        result_val = cache.get(query)
        
        if result_val is None:
            return jsonify({'success': False, 'error': f'Query "{query}" not in cache'}), 400
        
        result = {
            'success': True,
            'query': query,
            'result': result_val,
            'cache_size': cache.size,
            'message': f'Cache hit: {query} = {result_val}'
        }
        return jsonify(result)
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400


@app.route('/online-chat')
def online_chat_page():
    """Online Chat solution page."""
    return render_template('online_chat.html')


@app.route('/api/chat/add-user', methods=['POST'])
def add_user():
    """Add a new user."""
    try:
        user_id = int(request.json.get('user_id', 0))
        name = request.json.get('name', '')
        
        user = user_service.add_user(user_id, name, 'hash123')
        
        result = {
            'success': True,
            'user_id': user_id,
            'name': name,
            'total_users': len(user_service.users_by_id),
            'message': f'User {name} added'
        }
        return jsonify(result)
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400


@app.route('/api/chat/send-request', methods=['POST'])
def send_friend_request():
    """Send a friend request."""
    try:
        from_id = int(request.json.get('from_id', 0))
        to_id = int(request.json.get('to_id', 0))
        
        user_service.add_friend_request(from_id, to_id)
        
        result = {
            'success': True,
            'from': from_id,
            'to': to_id,
            'message': f'Friend request sent from user {from_id} to user {to_id}'
        }
        return jsonify(result)
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400


@app.route('/api/chat/approve-request', methods=['POST'])
def approve_friend_request():
    """Approve a friend request."""
    try:
        from_id = int(request.json.get('from_id', 0))
        to_id = int(request.json.get('to_id', 0))
        
        user_service.approve_friend_request(from_id, to_id)
        
        result = {
            'success': True,
            'from': from_id,
            'to': to_id,
            'message': f'Friend request approved'
        }
        return jsonify(result)
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400


if __name__ == '__main__':
    init_systems()
    print("\n" + "="*60)
    print("🚀 System Design Primer - Web Dashboard")
    print("="*60)
    print("\n📱 Open your browser and go to: http://localhost:5000")
    print("\nAvailable Demos:")
    print("  • Call Center System")
    print("  • Parking Lot Management")
    print("  • Deck of Cards (BlackJack)")
    print("  • Hash Table")
    print("  • LRU Cache")
    print("  • Online Chat System")
    print("\n" + "="*60 + "\n")
    
    app.run(debug=True, host='localhost', port=5000)
