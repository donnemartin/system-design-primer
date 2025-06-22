from abc import ABCMeta
from enum import Enum


class UserService(object):

    def __init__(self):
        self.users_by_id = {}  # key: user id, value: User

    def add_user(self, user_id, name, pass_hash):
        pass

    def remove_user(self, user_id):
        pass

    def add_friend_request(self, from_user_id, to_user_id):
        pass

    def approve_friend_request(self, from_user_id, to_user_id):
        pass

    def reject_friend_request(self, from_user_id, to_user_id):
        pass


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
        pass

    def message_group(self, group_id, message):
        pass

    def send_friend_request(self, friend_id):
        pass

    def check_pending_friend_requests(self):
        pass

    def approve_friend_request(self, friend_id):
        pass

    def reject_friend_request(self, friend_id):
        pass

    def remove_friend(self, friend_id):
        pass


class Chat(metaclass=ABCMeta):

    def __init__(self, chat_id, max_member):
        self.chat_id = chat_id
        self.users = []
        self.messages = []
        self.max_member = max_member

    def add_user(self, user):
        if len(self.users) == self.max_member:
            raise OverflowError('Chat {} already has maximum number of users'.format(self.chat_id))
        self.users.append(user)

    def remove_user(self, user):
        self.users.remove(user)


class PrivateChat(Chat):

    def __init__(self, chat_id, first_user, second_user):
        super(PrivateChat, self).__init__(chat_id, max_member=2)
        self.add_user(first_user)
        self.add_user(second_user)

    def add_user(self, user):
        if len(self.users) == self.max_member:
            raise OverflowError(
                'PrivateChat {} cannot have more than {} members'.format(self.chat_id, self.max_member)
            )
        super(PrivateChat, self).add_user(user)


class GroupChat(Chat):
    pass


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
