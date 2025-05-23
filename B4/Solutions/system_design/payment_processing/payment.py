import random

class User:
    def __init__(self, user_id, name, balance):
        self.user_id = user_id
        self.name = name
        self.balance = balance

class Transaction:
    def __init__(self, sender, receiver, amount):
        self.transaction_id = random.randint(1000, 9999)
        self.sender = sender
        self.receiver = receiver
        self.amount = amount

class PaymentProcessingSystem:
    def process_payment(self, transaction):
        if transaction.sender.balance >= transaction.amount:
            transaction.sender.balance -= transaction.amount
            transaction.receiver.balance += transaction.amount
            print(f"Transaction {transaction.transaction_id} successful: {transaction.sender.name} paid {transaction.receiver.name} ${transaction.amount}.")
        else:
            print(f"Transaction {transaction.transaction_id} failed: Insufficient funds.")

# Example Usage
user1 = User(1, "Alice", 100)
user2 = User(2, "Bob", 50)

payment_system = PaymentProcessingSystem()
transaction = Transaction(user1, user2, 30)
payment_system.process_payment(transaction)

print(f"{user1.name}'s balance: ${user1.balance}")
print(f"{user2.name}'s balance: ${user2.balance}")
