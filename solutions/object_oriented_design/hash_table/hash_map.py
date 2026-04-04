from typing import Any, List


class Item(object):
    """Represents a key-value pair in the hash table."""

    def __init__(self, key: Any, value: Any) -> None:
        self.key: Any = key
        self.value: Any = value


class HashTable(object):
    """Hash table implementation using chaining for collision resolution."""

    def __init__(self, size: int) -> None:
        self.size: int = size
        self.table: List[List[Item]] = [[] for _ in range(self.size)]

    def _hash_function(self, key: Any) -> int:
        """Simple hash function using modulo."""
        return key % self.size

    def set(self, key: Any, value: Any) -> None:
        """Set value for given key."""
        hash_index: int = self._hash_function(key)
        for item in self.table[hash_index]:
            if item.key == key:
                item.value = value
                return
        self.table[hash_index].append(Item(key, value))

    def get(self, key: Any) -> Any:
        """Get value for given key. Raises KeyError if not found."""
        hash_index: int = self._hash_function(key)
        for item in self.table[hash_index]:
            if item.key == key:
                return item.value
        raise KeyError('Key not found')

    def remove(self, key: Any) -> None:
        """Remove key from hash table. Raises KeyError if not found."""
        hash_index: int = self._hash_function(key)
        for index, item in enumerate(self.table[hash_index]):
            if item.key == key:
                del self.table[hash_index][index]
                return
        raise KeyError('Key not found')
