from typing import Any, Optional, Dict


class Node(object):
    """Node in the doubly-linked list for LRU Cache."""

    def __init__(self, results: Any) -> None:
        self.results: Any = results
        self.next: Optional['Node'] = None
        self.query: Optional[str] = None


class LinkedList(object):
    """Doubly-linked list for maintaining LRU order."""

    def __init__(self) -> None:
        self.head: Optional[Node] = None
        self.tail: Optional[Node] = None

    def move_to_front(self, node: Node) -> None:
        """Move a node to the front of the list (most recently used)."""
        pass

    def append_to_front(self, node: Node) -> None:
        """Append a node to the front of the list."""
        pass

    def remove_from_tail(self) -> None:
        """Remove the tail node (least recently used)."""
        pass


class Cache(object):
    """Least Recently Used (LRU) Cache implementation."""

    def __init__(self, MAX_SIZE: int) -> None:
        self.MAX_SIZE: int = MAX_SIZE
        self.size: int = 0
        self.lookup: Dict[str, Node] = {}  # key: query, value: node
        self.linked_list: LinkedList = LinkedList()

    def get(self, query: str) -> Optional[Any]:
        """Get the stored query result from the cache.

        Accessing a node updates its position to the front of the LRU list.
        """
        node: Optional[Node] = self.lookup.get(query)
        if node is None:
            return None
        self.linked_list.move_to_front(node)
        return node.results

    def set(self, results: Any, query: str) -> None:
        """Set the result for the given query key in the cache.

        When updating an entry, updates its position to the front of the LRU list.
        If the entry is new and the cache is at capacity, removes the oldest entry
        before the new entry is added.
        """
        node: Optional[Node] = self.lookup.get(query)
        if node is not None:
            # Key exists in cache, update the value
            node.results = results
            self.linked_list.move_to_front(node)
        else:
            # Key does not exist in cache
            if self.size == self.MAX_SIZE:
                # Remove the oldest entry from the linked list and lookup
                self.lookup.pop(self.linked_list.tail.query, None)
                self.linked_list.remove_from_tail()
            else:
                self.size += 1
            # Add the new key and value
            new_node: Node = Node(results)
            self.linked_list.append_to_front(new_node)
            self.lookup[query] = new_node
