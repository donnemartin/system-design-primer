class Customer:
    def __init__(self, name, address, phone):
        self.name = name
        self.address = address
        self.phone = phone

    def __str__(self):
        return f"Customer: {self.name}, Address: {self.address}, Phone: {self.phone}"


class Restaurant:
    def __init__(self, name, menu):
        self.name = name
        self.menu = menu  # menu is a dictionary with item names as keys and prices as values

    def show_menu(self):
        print(f"Menu for {self.name}:")
        for item, price in self.menu.items():
            print(f"{item}: ${price:.2f}")

    def get_price(self, item):
        return self.menu.get(item, None)

    def __str__(self):
        return f"Restaurant: {self.name}"


class DeliveryPerson:
    def __init__(self, name):
        self.name = name

    def deliver(self, customer, order):
        print(f"{self.name} is delivering {order.food_item} to {customer.name} at {customer.address}")

    def __str__(self):
        return f"Delivery Person: {self.name}"


class Order:
    def __init__(self, customer, restaurant, food_item):
        self.customer = customer
        self.restaurant = restaurant
        self.food_item = food_item
        self.price = self.restaurant.get_price(food_item)

    def display_order_details(self):
        print(f"Order Details: \nCustomer: {self.customer.name}\nFood Item: {self.food_item}\n"
              f"Price: ${self.price:.2f}\nRestaurant: {self.restaurant.name}")

    def __str__(self):
        return f"Order: {self.food_item} from {self.restaurant.name} for {self.customer.name}"


class FoodDeliverySystem:
    def __init__(self):
        self.customers = []
        self.restaurants = []
        self.delivery_people = []

    def add_customer(self, customer):
        self.customers.append(customer)

    def add_restaurant(self, restaurant):
        self.restaurants.append(restaurant)

    def add_delivery_person(self, delivery_person):
        self.delivery_people.append(delivery_person)

    def place_order(self, customer, restaurant, food_item):
        if food_item not in restaurant.menu:
            print(f"Sorry, {food_item} is not available at {restaurant.name}.")
            return None

        order = Order(customer, restaurant, food_item)
        order.display_order_details()
        delivery_person = self.assign_delivery_person()
        if delivery_person:
            delivery_person.deliver(customer, order)
        return order

    def assign_delivery_person(self):
        if not self.delivery_people:
            print("No delivery person available at the moment.")
            return None
        # Assign the first available delivery person
        return self.delivery_people[0]

    def show_restaurants(self):
        for restaurant in self.restaurants:
            print(restaurant)

    def show_customers(self):
        for customer in self.customers:
            print(customer)


# Example usage
if __name__ == "__main__":
    # Initialize the system
    delivery_system = FoodDeliverySystem()

    # Create some customers
    customer1 = Customer("Alice", "123 Main St", "555-1234")
    customer2 = Customer("Bob", "456 Oak St", "555-5678")

    # Add customers to the system
    delivery_system.add_customer(customer1)
    delivery_system.add_customer(customer2)

    # Create some restaurants with menus
    pizza_place = Restaurant("Pizza Place", {"Pizza": 10.99, "Burger": 7.99, "Pasta": 8.99})
    sushi_spot = Restaurant("Sushi Spot", {"Sushi Roll": 12.99, "Tempura": 9.99, "Miso Soup": 3.99})

    # Add restaurants to the system
    delivery_system.add_restaurant(pizza_place)
    delivery_system.add_restaurant(sushi_spot)

    # Create a delivery person
    delivery_person1 = DeliveryPerson("John")

    # Add delivery person to the system
    delivery_system.add_delivery_person(delivery_person1)

    # Display available restaurants
    print("Available Restaurants:")
    delivery_system.show_restaurants()

    # Customer places an order
    print("\nCustomer 1 places an order:")
    delivery_system.place_order(customer1, pizza_place, "Pizza")

    # Another customer places an order
    print("\nCustomer 2 places an order:")
    delivery_system.place_order(customer2, sushi_spot, "Sushi Roll")
