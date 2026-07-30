#include <iostream>
#include <vector>
#include <stdexcept>

class Item {
public:
    int key;
    int value;

    Item(int key, int value) : key(key), value(value) {}
};

class HashTable {
private:
    int size;
    std::vector<std::vector<Item>> table;

    int hashFunction(int key) const {
        return key % size;
    }

public:
    HashTable(int size) : size(size), table(size) {}

    void set(int key, int value) {
        int hashIndex = hashFunction(key);
        for (auto& item : table[hashIndex]) {
            if (item.key == key) {
                item.value = value;
                return;
            }
        }
        table[hashIndex].emplace_back(key, value);
    }

    int get(int key) const {
        int hashIndex = hashFunction(key);
        for (const auto& item : table[hashIndex]) {
            if (item.key == key) {
                return item.value;
            }
        }
        throw std::runtime_error("Key not found");
    }

    void remove(int key) {
        int hashIndex = hashFunction(key);
        auto& chain = table[hashIndex];
        for (auto it = chain.begin(); it != chain.end(); ++it) {
            if (it->key == key) {
                chain.erase(it);
                return;
            }
        }
        throw std::runtime_error("Key not found");
    }

    void print() const {
        for (int i = 0; i < size; ++i) {
            std::cout << "Bucket " << i << ": ";
            for (const auto& item : table[i]) {
                std::cout << "(" << item.key << ": " << item.value << ") ";
            }
            std::cout << std::endl;
        }
    }
};

int main() {
    HashTable ht(10);

    ht.set(1, 100);
    ht.set(2, 200);
    ht.set(3, 300);
    ht.set(11, 1100);
    ht.set(12, 1200);

    std::cout << "Hash Table contents:" << std::endl;
    ht.print();

    std::cout << "\nGet key 1: " << ht.get(1) << std::endl;
    std::cout << "Get key 11: " << ht.get(11) << std::endl;

    ht.set(1, 999);
    std::cout << "After updating key 1: " << ht.get(1) << std::endl;

    ht.remove(2);
    std::cout << "\nAfter removing key 2:" << std::endl;
    ht.print();

    return 0;
}
