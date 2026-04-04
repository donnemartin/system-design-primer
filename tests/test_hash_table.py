"""Unit tests for hash_table.py"""
import unittest
from solutions.object_oriented_design.hash_table.hash_map import HashTable, Item


class TestHashTable(unittest.TestCase):
    """Test cases for HashTable"""

    def setUp(self):
        """Initialize test fixtures"""
        self.hash_table = HashTable(10)

    def test_hash_table_creation(self):
        """Test hash table creation"""
        self.assertEqual(self.hash_table.size, 10)
        self.assertEqual(len(self.hash_table.table), 10)

    def test_set_and_get(self):
        """Test setting and getting values"""
        self.hash_table.set(5, "five")
        self.assertEqual(self.hash_table.get(5), "five")

    def test_set_overwrites_existing(self):
        """Test that set overwrites existing value"""
        self.hash_table.set(5, "five")
        self.hash_table.set(5, "FIVE")
        
        self.assertEqual(self.hash_table.get(5), "FIVE")

    def test_get_nonexistent_key_raises_error(self):
        """Test getting non-existent key raises KeyError"""
        with self.assertRaises(KeyError):
            self.hash_table.get(999)

    def test_remove(self):
        """Test removing key from hash table"""
        self.hash_table.set(5, "five")
        self.hash_table.remove(5)
        
        with self.assertRaises(KeyError):
            self.hash_table.get(5)

    def test_remove_nonexistent_raises_error(self):
        """Test removing non-existent key raises KeyError"""
        with self.assertRaises(KeyError):
            self.hash_table.remove(999)

    def test_collision_handling(self):
        """Test handling of hash collisions"""
        # Create keys that would collide with size 10
        self.hash_table.set(5, "five")
        self.hash_table.set(15, "fifteen")  # Both hash to same slot
        
        self.assertEqual(self.hash_table.get(5), "five")
        self.assertEqual(self.hash_table.get(15), "fifteen")

    def test_multiple_operations(self):
        """Test multiple operations"""
        for i in range(20):
            self.hash_table.set(i, f"value_{i}")
        
        for i in range(20):
            self.assertEqual(self.hash_table.get(i), f"value_{i}")


class TestItem(unittest.TestCase):
    """Test cases for Item"""

    def test_item_creation(self):
        """Test item creation"""
        item = Item(5, "five")
        
        self.assertEqual(item.key, 5)
        self.assertEqual(item.value, "five")


if __name__ == '__main__':
    unittest.main()
