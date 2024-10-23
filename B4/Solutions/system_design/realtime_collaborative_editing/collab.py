import threading

class Document:
    def __init__(self, title):
        self.title = title
        self.content = ""
        self.lock = threading.Lock()

    def edit(self, new_content):
        with self.lock:
            self.content = new_content
            print(f"Document '{self.title}' updated: {self.content}")

class User:
    def __init__(self, user_id, name):
        self.user_id = user_id
        self.name = name

    def edit_document(self, document, new_content):
        print(f"{self.name} is editing the document '{document.title}'...")
        document.edit(new_content)

# Example Usage
document = Document("Project Plan")
user1 = User(1, "Alice")
user2 = User(2, "Bob")

# Simulating concurrent edits
thread1 = threading.Thread(target=user1.edit_document, args=(document, "Draft by Alice."))
thread2 = threading.Thread(target=user2.edit_document, args=(document, "Draft by Bob."))

thread1.start()
thread2.start()

thread1.join()
thread2.join()
