import random

class User:
    def __init__(self, user_id, name):
        self.user_id = user_id
        self.name = name
        self.rides = []

    def request_ride(self, pickup_location, dropoff_location):
        ride = Ride(self, pickup_location, dropoff_location)
        return ride

class Driver:
    def __init__(self, driver_id, name):
        self.driver_id = driver_id
        self.name = name
        self.rides = []

    def accept_ride(self, ride):
        self.rides.append(ride)
        ride.driver = self
        print(f"Driver {self.name} accepted ride from {ride.user.name}.")

class Ride:
    def __init__(self, user, pickup_location, dropoff_location):
        self.user = user
        self.pickup_location = pickup_location
        self.dropoff_location = dropoff_location
        self.driver = None
        self.ride_id = random.randint(1000, 9999)  # Random ID for ride

class RideSharingService:
    def __init__(self):
        self.drivers = []
        self.users = []

    def register_driver(self, driver_id, name):
        driver = Driver(driver_id, name)
        self.drivers.append(driver)
        print(f"Driver {name} registered.")

    def register_user(self, user_id, name):
        user = User(user_id, name)
        self.users.append(user)
        print(f"User {name} registered.")

    def match_ride(self, ride):
        if self.drivers:
            selected_driver = random.choice(self.drivers)  # Simple random matching
            selected_driver.accept_ride(ride)
        else:
            print("No drivers available.")

# Example Usage
ride_sharing_service = RideSharingService()
ride_sharing_service.register_driver(1, "John")
ride_sharing_service.register_driver(2, "Jane")

ride_sharing_service.register_user(101, "Alice")
ride_sharing_service.register_user(102, "Bob")

alice = ride_sharing_service.users[0]
ride_request = alice.request_ride("Location A", "Location B")
ride_sharing_service.match_ride(ride_request)
