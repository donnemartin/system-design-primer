from abc import ABCMeta
from enum import Enum


class UserService(object):

    def __init__(self):
        self.users_by_id = {}  # key: user id, value: User

    def add_user(self, user_id, name, pass_hash):
        user = User(user_id, name, pass_hash)
        self.users_by_id[user_id] = user
        return user

    def remove_user(self, user_id):
        if user_id in self.users_by_id:
            del self.users_by_id[user_id]
            return True
        return False

    def add_friend_request(self, from_user_id, to_user_id):
        from_user = self.users_by_id.get(from_user_id)
        to_user = self.users_by_id.get(to_user_id)
        if from_user is None or to_user is None:
            raise KeyError('Unknown user')
        request = from_user.send_friend_request(to_user_id)
        to_user.receive_friend_request(from_user_id)
        return request

    def approve_friend_request(self, from_user_id, to_user_id):
        from_user = self.users_by_id.get(from_user_id)
        to_user = self.users_by_id.get(to_user_id)
        if from_user is None or to_user is None:
            raise KeyError('Unknown user')
        request = None
        if from_user_id in to_user.received_friend_requests_by_friend_id:
            request = to_user.received_friend_requests_by_friend_id.pop(from_user_id)
            request.request_status = RequestStatus.ACCEPTED
        from_user.friends_by_id[to_user_id] = to_user
        to_user.friends_by_id[from_user_id] = from_user
        return request

    def reject_friend_request(self, from_user_id, to_user_id):
        from_user = self.users_by_id.get(from_user_id)
        to_user = self.users_by_id.get(to_user_id)
        if from_user is None or to_user is None:
            raise KeyError('Unknown user')
        request = None
        if from_user_id in to_user.received_friend_requests_by_friend_id:
            request = to_user.received_friend_requests_by_friend_id.pop(from_user_id)
            request.request_status = RequestStatus.REJECTED
        return request


class User(object):

    def __init__(self, user_id, name, pass_hash):
        self.user_id = user_id
        self.name = name
        self.pass_hash = pass_hash
        self.friends_by_id = {}  # key: friend id, value: User
        self.friend_ids_to_private_chats = {}  # key: friend id, value: private chats
        self.group_chats_by_id = {}  # key: chat id, value: GroupChat
        self.received_friend_requests_by_friend_id = {}  # key: friend id, value: AddRequest
        self.sent_friend_requests_by_friend_id = {}  # key: friend id, value: AddRequest

    def message_user(self, friend_id, message):
        if friend_id not in self.friends_by_id:
            raise KeyError('Not friends with user {}'.format(friend_id))
        if friend_id not in self.friend_ids_to_private_chats:
            chat = PrivateChat(self.user_id, friend_id)
            self.friend_ids_to_private_chats[friend_id] = chat
            friend = self.friends_by_id[friend_id]
            friend.friend_ids_to_private_chats[self.user_id] = chat
        chat = self.friend_ids_to_private_chats[friend_id]
        message_id = len(chat.messages) + 1
        chat.messages.append(Message(message_id, message, None))
        return chat

    def message_group(self, group_id, message):
        if group_id not in self.group_chats_by_id:
            raise KeyError('Unknown group chat {}'.format(group_id))
        chat = self.group_chats_by_id[group_id]
        message_id = len(chat.messages) + 1
        chat.messages.append(Message(message_id, message, None))
        return chat

    def send_friend_request(self, friend_id):
        request = AddRequest(self.user_id, friend_id, RequestStatus.UNREAD, None)
        self.sent_friend_requests_by_friend_id[friend_id] = request
        return request

    def receive_friend_request(self, friend_id):
        request = AddRequest(friend_id, self.user_id, RequestStatus.UNREAD, None)
        self.received_friend_requests_by_friend_id[friend_id] = request
        return request

    def approve_friend_request(self, friend_id):
        if friend_id not in self.received_friend_requests_by_friend_id:
            return None

        request = self.received_friend_requests_by_friend_id.pop(friend_id)
        request.request_status = RequestStatus.ACCEPTED
        self.friends_by_id[friend_id] = friend_id
        if friend_id not in self.friend_ids_to_private_chats:
            self.friend_ids_to_private_chats[friend_id] = PrivateChat(self.user_id, friend_id)
        return request

    def reject_friend_request(self, friend_id):
        if friend_id in self.received_friend_requests_by_friend_id:
            request = self.received_friend_requests_by_friend_id.pop(friend_id)
            request.request_status = RequestStatus.REJECTED
            return request
        return None


class Chat(metaclass=ABCMeta):

    def __init__(self, chat_id=None):
        self.chat_id = chat_id
        self.users = []
        self.messages = []


class PrivateChat(Chat):

    def __init__(self, first_user, second_user):
        if hasattr(first_user, 'user_id') and hasattr(second_user, 'user_id'):
            super(PrivateChat, self).__init__('{}-{}'.format(first_user.user_id, second_user.user_id))
            self.users.append(first_user)
            self.users.append(second_user)
        else:
            super(PrivateChat, self).__init__()
            self.users.append(first_user)
            self.users.append(second_user)


class GroupChat(Chat):

    def add_user(self, user):
        if user not in self.users:
            self.users.append(user)

    def remove_user(self, user):
        if user in self.users:
            self.users.remove(user)


class Message(object):

    def __init__(self, message_id, message, timestamp):
        self.message_id = message_id
        self.message = message
        self.timestamp = timestamp


class AddRequest(object):

    def __init__(self, from_user_id, to_user_id, request_status, timestamp):
        self.from_user_id = from_user_id
        self.to_user_id = to_user_id
        self.request_status = request_status
        self.timestamp = timestamp


class RequestStatus(Enum):

    UNREAD = 0
    READ = 1
    ACCEPTED = 2
    REJECTED = 3
