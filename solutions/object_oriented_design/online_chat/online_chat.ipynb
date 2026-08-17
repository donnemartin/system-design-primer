{
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "This notebook was prepared by [Donne Martin](https://github.com/donnemartin). Source and license info is on [GitHub](https://github.com/donnemartin/system-design-primer)."
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# Design an online chat"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Constraints and assumptions\n",
    "\n",
    "* Assume we'll focus on the following workflows:\n",
    "    * Text conversations only\n",
    "    * Users\n",
    "        * Add a user\n",
    "        * Remove a user\n",
    "        * Update a user\n",
    "        * Add to a user's friends list\n",
    "            * Add friend request\n",
    "                * Approve friend request\n",
    "                * Reject friend request\n",
    "        * Remove from a user's friends list\n",
    "    * Create a group chat\n",
    "        * Invite friends to a group chat\n",
    "        * Post a message to a group chat\n",
    "    * Private 1-1 chat\n",
    "        * Invite a friend to a private chat\n",
    "        * Post a meesage to a private chat\n",
    "* No need to worry about scaling initially"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Solution"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 1,
   "metadata": {
    "collapsed": false
   },
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Overwriting online_chat.py\n"
     ]
    }
   ],
   "source": [
    "%%writefile online_chat.py\n",
    "from abc import ABCMeta\n",
    "\n",
    "\n",
    "class UserService(object):\n",
    "\n",
    "    def __init__(self):\n",
    "        self.users_by_id = {}  # key: user id, value: User\n",
    "\n",
    "    def add_user(self, user_id, name, pass_hash):  # ...\n",
    "    def remove_user(self, user_id):  # ...\n",
    "    def add_friend_request(self, from_user_id, to_user_id):  # ...\n",
    "    def approve_friend_request(self, from_user_id, to_user_id):  # ...\n",
    "    def reject_friend_request(self, from_user_id, to_user_id):  # ...\n",
    "\n",
    "\n",
    "class User(object):\n",
    "\n",
    "    def __init__(self, user_id, name, pass_hash):\n",
    "        self.user_id = user_id\n",
    "        self.name = name\n",
    "        self.pass_hash = pass_hash\n",
    "        self.friends_by_id = {}  # key: friend id, value: User\n",
    "        self.friend_ids_to_private_chats = {}  # key: friend id, value: private chats\n",
    "        self.group_chats_by_id = {}  # key: chat id, value: GroupChat\n",
    "        self.received_friend_requests_by_friend_id = {}  # key: friend id, value: AddRequest\n",
    "        self.sent_friend_requests_by_friend_id = {}  # key: friend id, value: AddRequest\n",
    "\n",
    "    def message_user(self, friend_id, message):  # ...\n",
    "    def message_group(self, group_id, message):  # ...\n",
    "    def send_friend_request(self, friend_id):  # ...\n",
    "    def receive_friend_request(self, friend_id):  # ...\n",
    "    def approve_friend_request(self, friend_id):  # ...\n",
    "    def reject_friend_request(self, friend_id):  # ...\n",
    "\n",
    "\n",
    "class Chat(metaclass=ABCMeta):\n",
    "\n",
    "    def __init__(self, chat_id):\n",
    "        self.chat_id = chat_id\n",
    "        self.users = []\n",
    "        self.messages = []\n",
    "\n",
    "\n",
    "class PrivateChat(Chat):\n",
    "\n",
    "    def __init__(self, first_user, second_user):\n",
    "        super(PrivateChat, self).__init__()\n",
    "        self.users.append(first_user)\n",
    "        self.users.append(second_user)\n",
    "\n",
    "\n",
    "class GroupChat(Chat):\n",
    "\n",
    "    def add_user(self, user):  # ...\n",
    "    def remove_user(self, user):  # ... \n",
    "\n",
    "\n",
    "class Message(object):\n",
    "\n",
    "    def __init__(self, message_id, message, timestamp):\n",
    "        self.message_id = message_id\n",
    "        self.message = message\n",
    "        self.timestamp = timestamp\n",
    "\n",
    "\n",
    "class AddRequest(object):\n",
    "\n",
    "    def __init__(self, from_user_id, to_user_id, request_status, timestamp):\n",
    "        self.from_user_id = from_user_id\n",
    "        self.to_user_id = to_user_id\n",
    "        self.request_status = request_status\n",
    "        self.timestamp = timestamp\n",
    "\n",
    "\n",
    "class RequestStatus(Enum):\n",
    "\n",
    "    UNREAD = 0\n",
    "    READ = 1\n",
    "    ACCEPTED = 2\n",
    "    REJECTED = 3"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.4.3"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 0
}
