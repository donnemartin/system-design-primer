from abc import ABCMeta
from enum import Enum
from typing import Dict, List, Optional


class RequestStatus(Enum):
    """Status of a friend request."""
    UNREAD = 0
    READ = 1
    ACCEPTED = 2
    REJECTED = 3


class UserService(object):
    """Service for managing users and friend requests."""

    def __init__(self) -> None:
        self.users_by_id: Dict[int, 'User'] = {}

    def add_user(self, user_id: int, name: str, pass_hash: str) -> 'User':
        """Add a new user to the system."""
        user: 'User' = User(user_id, name, pass_hash)
        self.users_by_id[user_id] = user
        return user

    def remove_user(self, user_id: int) -> None:
        """Remove a user from the system."""
        del self.users_by_id[user_id]

    def add_friend_request(self, from_user_id: int, to_user_id: int) -> None:
        """Send a friend request from one user to another."""
        from_user: Optional['User'] = self.users_by_id.get(from_user_id)
        to_user: Optional['User'] = self.users_by_id.get(to_user_id)
        if from_user and to_user:
            request: 'AddRequest' = AddRequest(from_user_id, to_user_id, RequestStatus.UNREAD, None)
            from_user.sent_friend_requests_by_friend_id[to_user_id] = request
            to_user.received_friend_requests_by_friend_id[from_user_id] = request

    def approve_friend_request(self, from_user_id: int, to_user_id: int) -> None:
        """Approve a friend request."""
        from_user: Optional['User'] = self.users_by_id.get(from_user_id)
        to_user: Optional['User'] = self.users_by_id.get(to_user_id)
        if from_user and to_user:
            request: Optional['AddRequest'] = from_user.sent_friend_requests_by_friend_id.get(to_user_id)
            if request:
                request.request_status = RequestStatus.ACCEPTED
                from_user.friends_by_id[to_user_id] = to_user
                to_user.friends_by_id[from_user_id] = from_user

    def reject_friend_request(self, from_user_id: int, to_user_id: int) -> None:
        """Reject a friend request."""
        from_user: Optional['User'] = self.users_by_id.get(from_user_id)
        to_user: Optional['User'] = self.users_by_id.get(to_user_id)
        if from_user and to_user:
            request: Optional['AddRequest'] = from_user.sent_friend_requests_by_friend_id.get(to_user_id)
            if request:
                request.request_status = RequestStatus.REJECTED
                del from_user.sent_friend_requests_by_friend_id[to_user_id]
                del to_user.received_friend_requests_by_friend_id[from_user_id]


class User(object):
    """Represents a user in the chat system."""

    def __init__(self, user_id: int, name: str, pass_hash: str) -> None:
        self.user_id: int = user_id
        self.name: str = name
        self.pass_hash: str = pass_hash
        self.friends_by_id: Dict[int, 'User'] = {}
        self.friend_ids_to_private_chats: Dict[int, 'PrivateChat'] = {}
        self.group_chats_by_id: Dict[str, 'GroupChat'] = {}
        self.received_friend_requests_by_friend_id: Dict[int, 'AddRequest'] = {}
        self.sent_friend_requests_by_friend_id: Dict[int, 'AddRequest'] = {}

    def message_user(self, friend_id: int, message: str) -> None:
        """Send a message to a friend."""
        chat: Optional['PrivateChat'] = self.friend_ids_to_private_chats.get(friend_id)
        if chat:
            msg: 'Message' = Message(None, message, None)
            chat.messages.append(msg)

    def message_group(self, group_id: str, message: str) -> None:
        """Send a message to a group."""
        chat: Optional['GroupChat'] = self.group_chats_by_id.get(group_id)
        if chat:
            msg: 'Message' = Message(None, message, None)
            chat.messages.append(msg)

    def send_friend_request(self, friend_id: int) -> None:
        """Send a friend request to another user."""
        request: 'AddRequest' = AddRequest(self.user_id, friend_id, RequestStatus.UNREAD, None)
        self.sent_friend_requests_by_friend_id[friend_id] = request

    def receive_friend_request(self, friend_id: int) -> None:
        """Receive a friend request from another user."""
        request: 'AddRequest' = AddRequest(friend_id, self.user_id, RequestStatus.UNREAD, None)
        self.received_friend_requests_by_friend_id[friend_id] = request

    def approve_friend_request(self, friend_id: int) -> None:
        """Approve a received friend request."""
        request: Optional['AddRequest'] = self.received_friend_requests_by_friend_id.get(friend_id)
        if request:
            request.request_status = RequestStatus.ACCEPTED
            # Create private chat
            private_chat: 'PrivateChat' = PrivateChat(self, None)
            self.friend_ids_to_private_chats[friend_id] = private_chat
            del self.received_friend_requests_by_friend_id[friend_id]

    def reject_friend_request(self, friend_id: int) -> None:
        """Reject a received friend request."""
        request: Optional['AddRequest'] = self.received_friend_requests_by_friend_id.get(friend_id)
        if request:
            request.request_status = RequestStatus.REJECTED
            del self.received_friend_requests_by_friend_id[friend_id]


class Chat(metaclass=ABCMeta):
    """Abstract base class for chats."""

    def __init__(self, chat_id: str) -> None:
        self.chat_id: str = chat_id
        self.users: List['User'] = []
        self.messages: List['Message'] = []


class PrivateChat(Chat):
    """Represents a private chat between two users."""

    def __init__(self, first_user: Optional['User'], second_user: Optional['User']) -> None:
        super(PrivateChat, self).__init__(None)
        if first_user:
            self.users.append(first_user)
        if second_user:
            self.users.append(second_user)


class GroupChat(Chat):
    """Represents a group chat with multiple users."""

    def add_user(self, user: 'User') -> None:
        """Add a user to the group chat."""
        if user not in self.users:
            self.users.append(user)
            user.group_chats_by_id[self.chat_id] = self

    def remove_user(self, user: 'User') -> None:
        """Remove a user from the group chat."""
        if user in self.users:
            self.users.remove(user)
            if self.chat_id in user.group_chats_by_id:
                del user.group_chats_by_id[self.chat_id]


class Message(object):
    """Represents a message in a chat."""

    def __init__(self, message_id: Optional[int], message: str, timestamp: Optional[int]) -> None:
        self.message_id: Optional[int] = message_id
        self.message: str = message
        self.timestamp: Optional[int] = timestamp


class AddRequest(object):
    """Represents a friend request."""

    def __init__(self, from_user_id: int, to_user_id: int, request_status: RequestStatus, 
                 timestamp: Optional[int]) -> None:
        self.from_user_id: int = from_user_id
        self.to_user_id: int = to_user_id
        self.request_status: RequestStatus = request_status
        self.timestamp: Optional[int] = timestamp
