#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <optional>

class LRUCache {
private:
    struct Node {
        std::string key;
        int results;
        Node* prev;
        Node* next;

        Node(const std::string& k, int r) : key(k), results(r), prev(nullptr), next(nullptr) {}
    };

    int maxSize;
    int size;
    std::unordered_map<std::string, Node*> lookup;
    Node* head;
    Node* tail;

    void moveToFront(Node* node) {
        if (node == head) return;

        removeNode(node);
        addToFront(node);
    }

    void removeNode(Node* node) {
        if (node->prev) node->prev->next = node->next;
        if (node->next) node->next->prev = node->prev;
        if (node == head) head = node->next;
        if (node == tail) tail = node->prev;
    }

    void addToFront(Node* node) {
        node->next = head;
        node->prev = nullptr;
        if (head) head->prev = node;
        head = node;
        if (!tail) tail = node;
    }

public:
    LRUCache(int maxSize) : maxSize(maxSize), size(0), head(nullptr), tail(nullptr) {}

    ~LRUCache() {
        for (auto& pair : lookup) {
            delete pair.second;
        }
    }

    std::optional<int> get(const std::string& query) {
        auto it = lookup.find(query);
        if (it == lookup.end()) {
            return std::nullopt;
        }
        moveToFront(it->second);
        return it->second->results;
    }

    void set(const std::string& query, int results) {
        auto it = lookup.find(query);
        if (it != lookup.end()) {
            it->second->results = results;
            moveToFront(it->second);
        } else {
            if (size == maxSize) {
                lookup.erase(tail->key);
                removeNode(tail);
                delete tail;
                tail = head;
            } else {
                size++;
            }
            Node* newNode = new Node(query, results);
            addToFront(newNode);
            lookup[query] = newNode;
        }
    }

    void print() const {
        Node* current = head;
        std::cout << "LRU Cache (size=" << size << "/" << maxSize << "): ";
        while (current) {
            std::cout << current->key << "=" << current->results << " ";
            current = current->next;
        }
        std::cout << std::endl;
    }
};

int main() {
    LRUCache cache(3);

    cache.set("query1", 100);
    cache.set("query2", 200);
    cache.set("query3", 300);
    cache.print();

    auto result = cache.get("query1");
    if (result) std::cout << "Get query1: " << *result << std::endl;
    cache.print();

    cache.set("query4", 400);
    cache.print();

    result = cache.get("query2");
    std::cout << "Get query2: " << (result ? std::to_string(*result) : "not found") << std::endl;
    cache.print();

    return 0;
}
