#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>
#include <sstream>

class RemoveDuplicateUrls {
public:
    std::vector<std::pair<std::string, int>> process(const std::vector<std::string>& lines) {
        std::unordered_map<std::string, int> urlCounts;

        for (const auto& line : lines) {
            urlCounts[line]++;
        }

        std::vector<std::pair<std::string, int>> results;
        for (const auto& pair : urlCounts) {
            if (pair.second == 1) {
                results.push_back(pair);
            }
        }

        return results;
    }
};

int main() {
    std::vector<std::string> urls = {
        "http://example.com/page1",
        "http://example.com/page2",
        "http://example.com/page1",
        "http://example.com/page3",
        "http://example.com/page2",
        "http://example.com/page4"
    };

    RemoveDuplicateUrls dedup;
    auto uniqueUrls = dedup.process(urls);

    std::cout << "Unique URLs (appearing exactly once):" << std::endl;
    for (const auto& pair : uniqueUrls) {
        std::cout << pair.first << " (count: " << pair.second << ")" << std::endl;
    }

    return 0;
}
