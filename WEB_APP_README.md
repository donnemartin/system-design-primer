# System Design Primer - Web Application

## Running the Web App

### Prerequisites
- Python 3.7+
- Flask

### Installation

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the application:**
   ```bash
   python app.py
   ```

3. **Open in browser:**
   ```
   http://localhost:5000
   ```

### Available Demos

#### 📞 Call Center System
- Route calls to operators, supervisors, directors
- Automatic escalation when lower levels are busy
- Queue management for waiting calls

#### 🅿️ Parking Lot Management  
- Park motorcycles (1 spot), cars (1 spot), buses (5 spots)
- Multi-level parking structure
- Track available spots

#### 🃏 Deck of Cards (BlackJack)
- Deal BlackJack hands
- Automatic score calculation
- Ace as 1 or 11 handling

#### #️⃣ Hash Table
- Set/Get/Remove key-value pairs
- Collision resolution with chaining
- O(1) average time complexity

#### 💾 LRU Cache
- Cache query results
- Automatic eviction of least recently used items
- Perfect for expensive computations

#### 💬 Online Chat System
- User management
- Friend request system
- Group chat support

## Features

- ✅ Interactive UI for all 6 OOP solutions
- ✅ Real-time feedback and results
- ✅ Clean, responsive design
- ✅ Easy to understand and learn from
- ✅ Production-ready code

## Project Structure

```
system-design-primer/
├── app.py                 # Flask application
├── templates/             # HTML templates
│   ├── index.html
│   ├── call_center.html
│   ├── parking_lot.html
│   ├── deck_of_cards.html
│   ├── hash_table.html
│   ├── lru_cache.html
│   └── online_chat.html
├── static/
│   └── style.css         # Styling
├── solutions/            # Implementation modules
├── tests/                # Unit tests
├── requirements.txt      # Dependencies
└── README.md
```

## Troubleshooting

**Port already in use:**
The app runs on port 5000. If it's in use, modify the port in app.py:
```python
app.run(debug=True, host='localhost', port=5001)
```

**Import errors:**
Make sure you're in the project directory and have installed requirements:
```bash
pip install -r requirements.txt
```

**Module not found:**
Ensure PYTHONPATH includes the project root:
```bash
export PYTHONPATH="${PYTHONPATH}:$(pwd)"  # On Linux/Mac
set PYTHONPATH=%PYTHONPATH%;%CD%          # On Windows
```

## Learning Resources

Each solution is fully documented with:
- Type hints for IDE support
- Comprehensive docstrings
- 60+ unit tests
- Interactive demonstrations

Visit each demo to understand the design patterns and implementations!
