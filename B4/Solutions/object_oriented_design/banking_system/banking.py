class Account:
    def __init__(self, account_number, account_holder, balance=0):
        self.account_number = account_number
        self.account_holder = account_holder
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited {amount}. New balance: {self.balance}")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds.")
        else:
            self.balance -= amount
            print(f"Withdrawn {amount}. New balance: {self.balance}")

    def get_balance(self):
        return self.balance

class Transaction:
    def __init__(self, transaction_id, account, amount, transaction_type):
        self.transaction_id = transaction_id
        self.account = account
        self.amount = amount
        self.transaction_type = transaction_type

    def execute(self):
        if self.transaction_type == "deposit":
            self.account.deposit(self.amount)
        elif self.transaction_type == "withdraw":
            self.account.withdraw(self.amount)
        else:
            print("Invalid transaction type.")

class Bank:
    def __init__(self):
        self.accounts = {}

    def create_account(self, account_number, account_holder):
        if account_number not in self.accounts:
            self.accounts[account_number] = Account(account_number, account_holder)
            print(f"Account created for {account_holder}.")
        else:
            print("Account already exists.")

    def get_account(self, account_number):
        return self.accounts.get(account_number, None)

# Example Usage
bank = Bank()
bank.create_account("123456", "Alice")
bank.create_account("789012", "Bob")

alice_account = bank.get_account("123456")
transaction1 = Transaction(1, alice_account, 1000, "deposit")
transaction1.execute()

transaction2 = Transaction(2, alice_account, 500, "withdraw")
transaction2.execute()

print(f"Alice's balance: {alice_account.get_balance()}")
