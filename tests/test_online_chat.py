"""Unit tests for online_chat.py"""
import unittest
from solutions.object_oriented_design.online_chat.online_chat import (
    UserService, User, GroupChat, PrivateChat, Message, AddRequest, RequestStatus
)


class TestUserService(unittest.TestCase):
    """Test cases for UserService"""

    def setUp(self):
        """Initialize test fixtures"""
        self.service = UserService()

    def test_add_user(self):
        """Test adding user to service"""
        user = self.service.add_user(1, "Alice", "hash123")
        
        self.assertEqual(user.user_id, 1)
        self.assertEqual(user.name, "Alice")
        self.assertIn(1, self.service.users_by_id)

    def test_remove_user(self):
        """Test removing user from service"""
        self.service.add_user(1, "Alice", "hash123")
        self.service.remove_user(1)
        
        self.assertNotIn(1, self.service.users_by_id)

    def test_add_friend_request(self):
        """Test adding friend request"""
        self.service.add_user(1, "Alice", "hash1")
        self.service.add_user(2, "Bob", "hash2")
        
        self.service.add_friend_request(1, 2)
        
        alice = self.service.users_by_id[1]
        bob = self.service.users_by_id[2]
        
        self.assertIn(2, alice.sent_friend_requests_by_friend_id)
        self.assertIn(1, bob.received_friend_requests_by_friend_id)

    def test_approve_friend_request(self):
        """Test approving friend request"""
        self.service.add_user(1, "Alice", "hash1")
        self.service.add_user(2, "Bob", "hash2")
        
        self.service.add_friend_request(1, 2)
        self.service.approve_friend_request(1, 2)
        
        alice = self.service.users_by_id[1]
        bob = self.service.users_by_id[2]
        
        self.assertIn(2, alice.friends_by_id)
        self.assertIn(1, bob.friends_by_id)

    def test_reject_friend_request(self):
        """Test rejecting friend request"""
        self.service.add_user(1, "Alice", "hash1")
        self.service.add_user(2, "Bob", "hash2")
        
        self.service.add_friend_request(1, 2)
        self.service.reject_friend_request(1, 2)
        
        alice = self.service.users_by_id[1]
        
        self.assertNotIn(2, alice.sent_friend_requests_by_friend_id)


class TestUser(unittest.TestCase):
    """Test cases for User"""

    def setUp(self):
        """Initialize test fixtures"""
        self.user1 = User(1, "Alice", "hash1")
        self.user2 = User(2, "Bob", "hash2")

    def test_user_creation(self):
        """Test user creation"""
        self.assertEqual(self.user1.user_id, 1)
        self.assertEqual(self.user1.name, "Alice")

    def test_send_friend_request(self):
        """Test sending friend request"""
        self.user1.send_friend_request(2)
        
        self.assertIn(2, self.user1.sent_friend_requests_by_friend_id)

    def test_receive_friend_request(self):
        """Test receiving friend request"""
        self.user1.receive_friend_request(2)
        
        self.assertIn(2, self.user1.received_friend_requests_by_friend_id)

    def test_approve_friend_request(self):
        """Test approving friend request"""
        request = AddRequest(2, 1, RequestStatus.UNREAD, None)
        self.user1.received_friend_requests_by_friend_id[2] = request
        self.user1.approve_friend_request(2)
        
        self.assertNotIn(2, self.user1.received_friend_requests_by_friend_id)


class TestGroupChat(unittest.TestCase):
    """Test cases for GroupChat"""

    def setUp(self):
        """Initialize test fixtures"""
        self.group_chat = GroupChat("group1")
        self.user1 = User(1, "Alice", "hash1")
        self.user2 = User(2, "Bob", "hash2")

    def test_add_user_to_group(self):
        """Test adding user to group chat"""
        self.group_chat.add_user(self.user1)
        
        self.assertIn(self.user1, self.group_chat.users)
        self.assertIn("group1", self.user1.group_chats_by_id)

    def test_remove_user_from_group(self):
        """Test removing user from group chat"""
        self.group_chat.add_user(self.user1)
        self.group_chat.remove_user(self.user1)
        
        self.assertNotIn(self.user1, self.group_chat.users)
        self.assertNotIn("group1", self.user1.group_chats_by_id)


class TestMessage(unittest.TestCase):
    """Test cases for Message"""

    def test_message_creation(self):
        """Test message creation"""
        msg = Message(1, "Hello", None)
        
        self.assertEqual(msg.message_id, 1)
        self.assertEqual(msg.message, "Hello")


if __name__ == '__main__':
    unittest.main()
