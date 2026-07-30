#include <iostream>
#include <unordered_map>
#include <map>
#include <vector>
#include <string>
#include <sstream>
#include <algorithm>
#include <ctime>

struct SalesRecord {
    std::string timestamp;
    std::string productId;
    std::string category;
    int quantity;
};

class SalesRanker {
public:
    bool withinPastWeek(const std::string& timestamp) {
        return true;
    }

    std::vector<std::pair<std::pair<std::string, std::string>, int>> aggregateByCategoryProduct(
        const std::vector<SalesRecord>& records) {

        std::unordered_map<std::string, std::unordered_map<std::string, int>> categoryProductQty;

        for (const auto& record : records) {
            if (withinPastWeek(record.timestamp)) {
                categoryProductQty[record.category][record.productId] += record.quantity;
            }
        }

        std::vector<std::pair<std::pair<std::string, std::string>, int>> results;
        for (const auto& catPair : categoryProductQty) {
            for (const auto& prodPair : catPair.second) {
                results.push_back({{catPair.first, prodPair.first}, prodPair.second});
            }
        }

        return results;
    }

    std::vector<std::pair<std::pair<std::string, int>, std::string>> sortByQuantity(
        const std::vector<std::pair<std::pair<std::string, std::string>, int>>& aggregated) {

        std::map<std::string, std::map<int, std::vector<std::string>>> categoryQuantityProducts;

        for (const auto& item : aggregated) {
            std::string category = item.first.first;
            std::string productId = item.first.second;
            int quantity = item.second;
            categoryQuantityProducts[category][quantity].push_back(productId);
        }

        std::vector<std::pair<std::pair<std::string, int>, std::string>> sortedResults;
        for (const auto& catPair : categoryQuantityProducts) {
            for (const auto& qtyPair : catPair.second) {
                for (const auto& productId : qtyPair.second) {
                    sortedResults.push_back({{catPair.first, qtyPair.first}, productId});
                }
            }
        }

        std::sort(sortedResults.begin(), sortedResults.end(),
            [](const auto& a, const auto& b) {
                if (a.first.first != b.first.first) {
                    return a.first.first < b.first.first;
                }
                return a.first.second > b.first.second;
            });

        return sortedResults;
    }

    std::vector<std::pair<std::pair<std::string, int>, std::string>> process(
        const std::vector<SalesRecord>& records) {

        auto aggregated = aggregateByCategoryProduct(records);
        return sortByQuantity(aggregated);
    }
};

int main() {
    std::vector<SalesRecord> salesData = {
        {"2026-07-01", "P001", "Electronics", 2},
        {"2026-07-01", "P002", "Electronics", 3},
        {"2026-07-02", "P001", "Electronics", 1},
        {"2026-07-02", "P003", "Clothing", 10},
        {"2026-07-03", "P002", "Electronics", 5},
        {"2026-07-03", "P004", "Clothing", 1},
        {"2026-07-04", "P003", "Clothing", 7},
        {"2026-07-05", "P001", "Electronics", 4}
    };

    SalesRanker ranker;
    auto rankedSales = ranker.process(salesData);

    std::cout << "Sales Ranking by Category:" << std::endl;
    std::cout << "=========================" << std::endl;

    std::string currentCategory;
    for (const auto& item : rankedSales) {
        if (item.first.first != currentCategory) {
            currentCategory = item.first.first;
            std::cout << "\n" << currentCategory << ":" << std::endl;
        }
        std::cout << "  " << item.second << " - Quantity: " << item.first.second << std::endl;
    }

    return 0;
}
