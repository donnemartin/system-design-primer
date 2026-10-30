class Node(object):

    def __init__(self, query, results=None):
        self.query = query
        self.results = results
        self.prev = None
        self.next = None


class LinkedList(object):

    def __init__(self):
        self.head = None
        self.tail = None

    def move_to_front(self, node):
        if node is None or node is self.head:
            return

        if node.prev is not None:
            node.prev.next = node.next
        if node.next is not None:
            node.next.prev = node.prev
        if self.tail is node:
            self.tail = node.prev

        node.prev = None
        node.next = self.head
        if self.head is not None:
            self.head.prev = node
        self.head = node
        if self.tail is None:
            self.tail = node

    def append_to_front(self, node):
        node.prev = None
        node.next = self.head
        if self.head is not None:
            self.head.prev = node
        self.head = node
        if self.tail is None:
            self.tail = node

    def remove_from_tail(self):
        if self.tail is None:
            return None
        node = self.tail
        if node.prev is not None:
            node.prev.next = None
            self.tail = node.prev
        else:
            self.head = None
            self.tail = None
        node.prev = None
        node.next = None
        return node


class Cache(object):

    def __init__(self, MAX_SIZE):
        self.MAX_SIZE = MAX_SIZE
        self.size = 0
        self.lookup = {}  # key: query, value: node
        self.linked_list = LinkedList()

    def get(self, query):
        """Get the stored query result from the cache.

        Accessing a node updates its position to the front of the LRU list.
        """
        node = self.lookup.get(query)
        if node is None:
            return None
        self.linked_list.move_to_front(node)
        return node.results

    def set(self, results, query):
        """Set the result for the given query key in the cache.

        When updating an entry, updates its position to the front of the LRU list.
        If the entry is new and the cache is at capacity, removes the oldest entry
        before the new entry is added.
        """
        node = self.lookup.get(query)
        if node is not None:
            # Key exists in cache, update the value
            node.results = results
            self.linked_list.move_to_front(node)
            return

        # Key does not exist in cache
        if self.size == self.MAX_SIZE:
            # Remove the oldest entry from the linked list and lookup
            oldest = self.linked_list.remove_from_tail()
            if oldest is not None:
                self.lookup.pop(oldest.query, None)
        else:
            self.size += 1

        # Add the new key and value
        new_node = Node(query, results)
        self.linked_list.append_to_front(new_node)
        self.lookup[query] = new_node
