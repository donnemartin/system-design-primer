#include <iostream>
#include <unordered_map>
#include <unordered_set>
#include <queue>
#include <vector>
#include <string>
#include <memory>

enum class State {
    UNVISITED,
    VISITED
};

class Person {
public:
    int id;
    std::string name;
    std::vector<int> friendIds;

    Person(int id, const std::string& name) : id(id), name(name) {}
};

class Node {
public:
    Person* person;
    State visitState;
    std::unordered_map<int, Node*> adjNodes;

    Node(Person* p) : person(p), visitState(State::UNVISITED) {}
};

class Graph {
public:
    bool bfs(Node* source, Node* dest) {
        if (!source || !dest) return false;

        std::queue<Node*> queue;
        queue.push(source);
        source->visitState = State::VISITED;

        while (!queue.empty()) {
            Node* node = queue.front();
            queue.pop();

            std::cout << "Visiting: " << node->person->name << std::endl;

            if (node == dest) {
                return true;
            }

            for (auto& pair : node->adjNodes) {
                Node* adjacentNode = pair.second;
                if (adjacentNode->visitState == State::UNVISITED) {
                    queue.push(adjacentNode);
                    adjacentNode->visitState = State::VISITED;
                }
            }
        }
        return false;
    }
};

class PersonServer {
private:
    std::unordered_map<int, Person*> people;

public:
    ~PersonServer() {
        for (auto& pair : people) {
            delete pair.second;
        }
    }

    void addPerson(Person* person) {
        people[person->id] = person;
    }

    Person* getPerson(int id) {
        auto it = people.find(id);
        return (it != people.end()) ? it->second : nullptr;
    }

    std::vector<Person*> getPeople(const std::vector<int>& ids) {
        std::vector<Person*> results;
        for (int id : ids) {
            Person* person = getPerson(id);
            if (person) {
                results.push_back(person);
            }
        }
        return results;
    }
};

class LookupService {
private:
    std::unordered_map<int, PersonServer*> lookup;

public:
    ~LookupService() {
        for (auto& pair : lookup) {
            delete pair.second;
        }
    }

    void addServer(int personId, PersonServer* server) {
        lookup[personId] = server;
    }

    Person* getPerson(int personId) {
        auto it = lookup.find(personId);
        if (it != lookup.end()) {
            return it->second->getPerson(personId);
        }
        return nullptr;
    }
};

class UserGraphService {
private:
    LookupService& lookup;
    std::unordered_set<int> visitedIds;

public:
    UserGraphService(LookupService& lookup) : lookup(lookup) {}

    bool bfs(int sourceId, int destId) {
        visitedIds.clear();

        std::queue<int> queue;
        queue.push(sourceId);
        visitedIds.insert(sourceId);

        while (!queue.empty()) {
            int currentId = queue.front();
            queue.pop();

            Person* currentPerson = lookup.getPerson(currentId);
            if (!currentPerson) continue;

            std::cout << "Visiting: " << currentPerson->name << std::endl;

            if (currentId == destId) {
                return true;
            }

            for (int friendId : currentPerson->friendIds) {
                if (visitedIds.find(friendId) == visitedIds.end()) {
                    queue.push(friendId);
                    visitedIds.insert(friendId);
                }
            }
        }
        return false;
    }
};

int main() {
    PersonServer server1;
    PersonServer server2;

    Person* alice = new Person(1, "Alice");
    Person* bob = new Person(2, "Bob");
    Person* charlie = new Person(3, "Charlie");
    Person* diana = new Person(4, "Diana");

    alice->friendIds = {2, 3};
    bob->friendIds = {1, 4};
    charlie->friendIds = {1, 4};
    diana->friendIds = {2, 3};

    server1.addPerson(alice);
    server1.addPerson(bob);
    server2.addPerson(charlie);
    server2.addPerson(diana);

    LookupService lookup;
    lookup.addServer(1, &server1);
    lookup.addServer(2, &server1);
    lookup.addServer(3, &server2);
    lookup.addServer(4, &server2);

    UserGraphService graphService(lookup);

    std::cout << "BFS from Alice to Diana:" << std::endl;
    bool found = graphService.bfs(1, 4);
    std::cout << "Path found: " << (found ? "Yes" : "No") << std::endl;

    return 0;
}
