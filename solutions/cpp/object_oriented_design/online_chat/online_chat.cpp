#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>
#include <memory>
#include <ctime>
#include <algorithm>

enum class RequestStatus {
    UNREAD,
    READ,
    ACCEPTED,
    REJECTED
};

std::string requestStatusToString(RequestStatus status) {
    switch (status) {
        case RequestStatus::UNREAD: return "Unread";
        case RequestStatus::READ: return "Read";
        case RequestStatus::ACCEPTED: return "Accepted";
        case RequestStatus::REJECTED: return "Rejected";
        default: return "Unknown";
    }
}

class Message {
public:
    int messageId;
    std::string message;
    time_t timestamp;

    Message(int id, const std::string& msg, time_t ts)
        : messageId(id), message(msg), timestamp(ts) {}
};

class User;

class Chat {
protected:
    int chatId;
    std::vector<User*> users;
    std::vector<Message> messages;

public:
    Chat(int id) : chatId(id) {}
    virtual ~Chat() = default;

    void addMessage(const Message& msg) {
        messages.push_back(msg);
    }

    int getChatId() const { return chatId; }
    const std::vector<Message>& getMessages() const { return messages; }
};

class PrivateChat : public Chat {
public:
    PrivateChat(User* firstUser, User* secondUser) : Chat(0) {
        users.push_back(firstUser);
        users.push_back(secondUser);
    }
};

class GroupChat : public Chat {
public:
    GroupChat(int id) : Chat(id) {}

    void addUser(User* user) {
        users.push_back(user);
    }

    void removeUser(User* user) {
        users.erase(
            std::remove_if(users.begin(), users.end(),
                [user](User* u) { return u == user; }),
            users.end()
        );
    }
};

class AddRequest {
public:
    int fromUserId;
    int toUserId;
    RequestStatus requestStatus;
    time_t timestamp;

    AddRequest(int from, int to, RequestStatus status, time_t ts)
        : fromUserId(from), toUserId(to), requestStatus(status), timestamp(ts) {}
};

class User {
public:
    int userId;
    std::string name;
    std::string passHash;
    std::unordered_map<int, User*> friendsById;
    std::unordered_map<int, PrivateChat*> friendIdsToPrivateChats;
    std::unordered_map<int, GroupChat*> groupChatsById;
    std::unordered_map<int, AddRequest*> receivedFriendRequestsByFriendId;
    std::unordered_map<int, AddRequest*> sentFriendRequestsByFriendId;

    User(int id, const std::string& n, const std::string& hash)
        : userId(id), name(n), passHash(hash) {}

    void messageUser(int friendId, const std::string& message) {
        auto it = friendIdsToPrivateChats.find(friendId);
        if (it != friendIdsToPrivateChats.end()) {
            Message msg(0, message, time(nullptr));
            it->second->addMessage(msg);
            std::cout << name << " sent message to friend " << friendId << std::endl;
        }
    }

    void messageGroup(int groupId, const std::string& message) {
        auto it = groupChatsById.find(groupId);
        if (it != groupChatsById.end()) {
            Message msg(0, message, time(nullptr));
            it->second->addMessage(msg);
            std::cout << name << " sent message to group " << groupId << std::endl;
        }
    }

    void sendFriendRequest(int friendId) {
        AddRequest* request = new AddRequest(userId, friendId, RequestStatus::UNREAD, time(nullptr));
        sentFriendRequestsByFriendId[friendId] = request;
        std::cout << name << " sent friend request to " << friendId << std::endl;
    }

    void receiveFriendRequest(int friendId) {
        AddRequest* request = new AddRequest(friendId, userId, RequestStatus::UNREAD, time(nullptr));
        receivedFriendRequestsByFriendId[friendId] = request;
        std::cout << name << " received friend request from " << friendId << std::endl;
    }

    void approveFriendRequest(int friendId) {
        auto it = receivedFriendRequestsByFriendId.find(friendId);
        if (it != receivedFriendRequestsByFriendId.end()) {
            it->second->requestStatus = RequestStatus::ACCEPTED;
            friendsById[friendId] = nullptr;
            std::cout << name << " approved friend request from " << friendId << std::endl;
        }
    }

    void rejectFriendRequest(int friendId) {
        auto it = receivedFriendRequestsByFriendId.find(friendId);
        if (it != receivedFriendRequestsByFriendId.end()) {
            it->second->requestStatus = RequestStatus::REJECTED;
            std::cout << name << " rejected friend request from " << friendId << std::endl;
        }
    }
};

class UserService {
private:
    std::unordered_map<int, User*> usersById;

public:
    ~UserService() {
        for (auto& pair : usersById) {
            delete pair.second;
        }
    }

    void addUser(int userId, const std::string& name, const std::string& passHash) {
        User* user = new User(userId, name, passHash);
        usersById[userId] = user;
    }

    void removeUser(int userId) {
        usersById.erase(userId);
    }

    void addFriendRequest(int fromUserId, int toUserId) {
        User* fromUser = usersById[fromUserId];
        User* toUser = usersById[toUserId];
        if (fromUser && toUser) {
            fromUser->sendFriendRequest(toUserId);
            toUser->receiveFriendRequest(fromUserId);
        }
    }

    void approveFriendRequest(int fromUserId, int toUserId) {
        User* toUser = usersById[toUserId];
        if (toUser) {
            toUser->approveFriendRequest(fromUserId);
        }
    }

    void rejectFriendRequest(int fromUserId, int toUserId) {
        User* toUser = usersById[toUserId];
        if (toUser) {
            toUser->rejectFriendRequest(fromUserId);
        }
    }
};

int main() {
    UserService service;

    service.addUser(1, "Alice", "hash1");
    service.addUser(2, "Bob", "hash2");
    service.addUser(3, "Charlie", "hash3");

    std::cout << "Adding friend requests:" << std::endl;
    service.addFriendRequest(1, 2);
    service.addFriendRequest(3, 1);

    std::cout << "\nApproving/rejecting requests:" << std::endl;
    service.approveFriendRequest(1, 2);
    service.rejectFriendRequest(3, 1);

    return 0;
}
