#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <optional>
#include <functional>

class Node {
public:
    std::string query;
    std::vector<int> results;
    Node* prev;
    Node* next;

    Node(const std::string& q, const std::vector<int>& r) : query(q), results(r), prev(nullptr), next(nullptr) {}
};

class LinkedList {
private:
    Node* head;
    Node* tail;

public:
    LinkedList() : head(nullptr), tail(nullptr) {}

    ~LinkedList() {
        while (head) {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }

    void moveToFront(Node* node) {
        if (node == head) return;

        if (node->prev) node->prev->next = node->next;
        if (node->next) node->next->prev = node->prev;
        if (node == tail) tail = node->prev;

        node->next = head;
        node->prev = nullptr;
        if (head) head->prev = node;
        head = node;
        if (!tail) tail = node;
    }

    void appendToFront(Node* node) {
        node->next = head;
        node->prev = nullptr;
        if (head) head->prev = node;
        head = node;
        if (!tail) tail = node;
    }

    Node* removeFromTail() {
        if (!tail) return nullptr;

        Node* removed = tail;
        tail = tail->prev;
        if (tail) tail->next = nullptr;
        else head = nullptr;

        removed->prev = nullptr;
        return removed;
    }

    Node* getHead() const { return head; }
    Node* getTail() const { return tail; }
};

class QueryCache {
private:
    int maxSize;
    int size;
    std::unordered_map<std::string, Node*> lookup;
    LinkedList linkedList;

public:
    QueryCache(int maxSize) : maxSize(maxSize), size(0) {}

    ~QueryCache() {
        for (auto& pair : lookup) {
            delete pair.second;
        }
    }

    std::optional<std::vector<int>> get(const std::string& query) {
        auto it = lookup.find(query);
        if (it == lookup.end()) {
            return std::nullopt;
        }
        linkedList.moveToFront(it->second);
        return it->second->results;
    }

    void set(const std::string& query, const std::vector<int>& results) {
        auto it = lookup.find(query);
        if (it != lookup.end()) {
            it->second->results = results;
            linkedList.moveToFront(it->second);
        } else {
            if (size == maxSize) {
                Node* tailNode = linkedList.removeFromTail();
                if (tailNode) {
                    lookup.erase(tailNode->query);
                    delete tailNode;
                }
            } else {
                size++;
            }
            Node* newNode = new Node(query, results);
            linkedList.appendToFront(newNode);
            lookup[query] = newNode;
        }
    }
};

class ReverseIndexCluster {
public:
    std::vector<int> processSearch(const std::string& query) {
        return {1, 2, 3};
    }
};

class QueryApi {
private:
    QueryCache& memoryCache;
    ReverseIndexCluster& reverseIndexCluster;

public:
    QueryApi(QueryCache& cache, ReverseIndexCluster& index)
        : memoryCache(cache), reverseIndexCluster(index) {}

    std::string parseQuery(const std::string& query) {
        return query;
    }

    std::vector<int> processQuery(const std::string& query) {
        std::string parsedQuery = parseQuery(query);
        auto results = memoryCache.get(parsedQuery);
        if (!results) {
            results = reverseIndexCluster.processSearch(parsedQuery);
            memoryCache.set(parsedQuery, *results);
        }
        return *results;
    }
};

int main() {
    QueryCache cache(3);
    ReverseIndexCluster index;
    QueryApi api(cache, index);

    auto results = api.processQuery("test query");
    std::cout << "First query results: ";
    for (int r : results) std::cout << r << " ";
    std::cout << std::endl;

    results = api.processQuery("test query");
    std::cout << "Cached query results: ";
    for (int r : results) std::cout << r << " ";
    std::cout << std::endl;

    return 0;
}
