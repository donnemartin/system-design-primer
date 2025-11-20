// Simple HashMap implementation in C++
// For Issue #1075

#include <iostream>
#include <unordered_map>
using namespace std;

int main() {
    unordered_map<string, int> mp;
    mp["apple"] = 10;
    mp["banana"] = 20;

    cout << mp["apple"] << endl;
    return 0;
}
