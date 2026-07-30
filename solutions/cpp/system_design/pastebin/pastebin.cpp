#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>
#include <sstream>
#include <ctime>

struct LogEntry {
    std::string timestamp;
    std::string url;
    int hitCount;
};

class HitCounts {
public:
    std::string extractUrl(const std::string& line) {
        std::istringstream iss(line);
        std::string timestamp, url;
        iss >> timestamp >> url;
        return url;
    }

    std::string extractYearMonth(const std::string& line) {
        std::istringstream iss(line);
        std::string timestamp;
        iss >> timestamp;
        return timestamp.substr(0, 7);
    }

    std::vector<std::pair<std::pair<std::string, std::string>, int>> process(
        const std::vector<std::string>& lines) {

        std::unordered_map<std::string, std::unordered_map<std::string, int>> periodUrlCounts;

        for (const auto& line : lines) {
            std::string url = extractUrl(line);
            std::string period = extractYearMonth(line);
            periodUrlCounts[period][url]++;
        }

        std::vector<std::pair<std::pair<std::string, std::string>, int>> results;
        for (const auto& periodPair : periodUrlCounts) {
            for (const auto& urlPair : periodPair.second) {
                results.push_back({{periodPair.first, urlPair.first}, urlPair.second});
            }
        }

        return results;
    }
};

int main() {
    std::vector<std::string> logLines = {
        "2016-01-15 10:30:00 http://example.com/page1",
        "2016-01-15 10:31:00 http://example.com/page2",
        "2016-01-15 10:32:00 http://example.com/page1",
        "2016-01-15 10:33:00 http://example.com/page3",
        "2016-01-15 10:34:00 http://example.com/page1",
        "2016-02-15 11:00:00 http://example.com/page1",
        "2016-02-15 11:01:00 http://example.com/page2"
    };

    HitCounts counter;
    auto results = counter.process(logLines);

    std::cout << "Hit counts by period and URL:" << std::endl;
    for (const auto& result : results) {
        std::cout << "(" << result.first.first << ", " << result.first.second
                  << ") -> " << result.second << std::endl;
    }

    return 0;
}
