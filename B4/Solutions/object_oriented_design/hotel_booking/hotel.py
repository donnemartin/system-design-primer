class Room:
    def __init__(self, room_number, room_type, price):
        self.room_number = room_number
        self.room_type = room_type
        self.price = price
        self.is_available = True

    def book_room(self):
        if self.is_available:
            self.is_available = False
            return True
        return False

    def release_room(self):
        self.is_available = True

class Customer:
    def __init__(self, customer_id, name):
        self.customer_id = customer_id
        self.name = name
        self.bookings = []

    def make_booking(self, room, check_in, check_out):
        if room.book_room():
            booking = Booking(self, room, check_in, check_out)
            self.bookings.append(booking)
            print(f"Booking successful for {self.name} in room {room.room_number}.")
            return booking
        print(f"Room {room.room_number} is not available.")
        return None

class Booking:
    def __init__(self, customer, room, check_in, check_out):
        self.customer = customer
        self.room = room
        self.check_in = check_in
        self.check_out = check_out
        self.total_price = self.calculate_price()

    def calculate_price(self):
        # Assuming check_in and check_out are datetime.date objects
        stay_duration = (self.check_out - self.check_in).days
        return stay_duration * self.room.price

    def cancel_booking(self):
        self.room.release_room()
        self.customer.bookings.remove(self)
        print(f"Booking for room {self.room.room_number} has been canceled.")

class Hotel:
    def __init__(self):
        self.rooms = []

    def add_room(self, room_number, room_type, price):
        room = Room(room_number, room_type, price)
        self.rooms.append(room)
        print(f"Room {room_number} added.")

    def search_rooms(self):
        available_rooms = [room for room in self.rooms if room.is_available]
        return available_rooms

    def display_rooms(self):
        for room in self.rooms:
            status = "Available" if room.is_available else "Booked"
            print(f"Room {room.room_number}: {room.room_type}, Price: ${room.price}, Status: {status}")

# Example Usage
from datetime import date

hotel = Hotel()
hotel.add_room(101, "Single", 100)
hotel.add_room(102, "Double", 150)
hotel.add_room(103, "Suite", 250)

# Display all rooms
hotel.display_rooms()

# Create a customer
customer1 = Customer(1, "Alice")

# Search for available rooms
available_rooms = hotel.search_rooms()
if available_rooms:
    # Customer books the first available room
    booking1 = customer1.make_booking(available_rooms[0], date(2024, 10, 25), date(2024, 10, 28))

# Display bookings for the customer
print(f"Bookings for {customer1.name}: {[booking.room.room_number for booking in customer1.bookings]}")

# Cancel booking
if booking1:
    booking1.cancel_booking()

# Display rooms after cancellation
hotel.display_rooms()
