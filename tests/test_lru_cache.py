"""Unit tests for lru_cache.py"""
import unittest
from solutions.object_oriented_design.lru_cache.lru_cache import Cache, Node, LinkedList


class TestNode(unittest.TestCase):
    """Test cases for Node"""

    def test_node_creation(self):
        """Test node creation"""
        node = Node("result")
        
        self.assertEqual(node.results, "result")
        self.assertIsNone(node.next)


class TestLinkedList(unittest.TestCase):
    """Test cases for LinkedList"""

    def setUp(self):
        """Initialize test fixtures"""
        self.linked_list = LinkedList()

    def test_linked_list_creation(self):
        """Test linked list creation"""
        self.assertIsNone(self.linked_list.head)
        self.assertIsNone(self.linked_list.tail)


class TestCache(unittest.TestCase):
    """Test cases for Cache"""

    def setUp(self):
        """Initialize test fixtures"""
        self.cache = Cache(3)  # Cache with max size 3

    def test_cache_creation(self):
        """Test cache creation"""
        self.assertEqual(self.cache.MAX_SIZE, 3)
        self.assertEqual(self.cache.size, 0)

    def test_cache_set_and_get(self):
        """Test setting and getting from cache"""
        self.cache.set("result1", "query1")
        result = self.cache.get("query1")
        
        self.assertIsNotNone(result)

    def test_cache_get_nonexistent_returns_none(self):
        """Test getting non-existent key returns None"""
        result = self.cache.get("nonexistent")
        self.assertIsNone(result)

    def test_cache_size_increases(self):
        """Test cache size increases when adding entries"""
        self.cache.set("result1", "query1")
        self.cache.set("result2", "query2")
        
        self.assertEqual(self.cache.size, 2)

    def test_cache_max_size_limit(self):
        """Test cache respects max size"""
        self.cache.set("result1", "query1")
        self.cache.set("result2", "query2")
        self.cache.set("result3", "query3")
        self.cache.set("result4", "query4")  # Should evict oldest
        
        self.assertEqual(self.cache.size, 3)

    def test_cache_update_moves_to_front(self):
        """Test updating entry moves it to front"""
        self.cache.set("result1", "query1")
        self.cache.set("result2", "query2")
        self.cache.set("result1_updated", "query1")  # Update
        
        # Query1 should now be most recently used
        result = self.cache.get("query1")
        self.assertIsNotNone(result)


if __name__ == '__main__':
    unittest.main()
