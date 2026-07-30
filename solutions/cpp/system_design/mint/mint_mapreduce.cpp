#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>
#include <sstream>
#include <ctime>
#include <iomanip>

enum class Category {
    HOUSING,
    FOOD,
    GAS,
    SHOPPING,
    UTILITIES,
    TRANSPORTATION,
    ENTERTAINMENT
};

std::string categoryToString(Category cat) {
    switch (cat) {
        case Category::HOUSING: return "Housing";
        case Category::FOOD: return "Food";
        case Category::GAS: return "Gas";
        case Category::SHOPPING: return "Shopping";
        case Category::UTILITIES: return "Utilities";
        case Category::TRANSPORTATION: return "Transportation";
        case Category::ENTERTAINMENT: return "Entertainment";
        default: return "Unknown";
    }
}

struct Transaction {
    std::string timestamp;
    std::string category;
    double amount;
};

class SpendingByCategory {
private:
    std::unordered_map<std::string, Category> sellerCategoryMap;
    std::unordered_map<Category, double> budgetMap;

public:
    SpendingByCategory() {
        sellerCategoryMap["Exxon"] = Category::GAS;
        sellerCategoryMap["Target"] = Category::SHOPPING;
        sellerCategoryMap["Whole Foods"] = Category::FOOD;

        budgetMap[Category::HOUSING] = 1500.0;
        budgetMap[Category::FOOD] = 500.0;
        budgetMap[Category::GAS] = 200.0;
        budgetMap[Category::SHOPPING] = 300.0;
    }

    std::string currentYearMonth() {
        time_t now = time(nullptr);
        tm* ltm = localtime(&now);
        std::ostringstream oss;
        oss << std::put_time(ltm, "%Y-%m");
        return oss.str();
    }

    std::string extractYearMonth(const std::string& timestamp) {
        return timestamp.substr(0, 7);
    }

    void handleBudgetNotifications(const std::string& period, Category category, double total) {
        auto it = budgetMap.find(category);
        if (it != budgetMap.end()) {
            if (total > it->second * 0.9) {
                std::cout << "WARNING: " << categoryToString(category)
                          << " spending ($" << total << ") approaching budget ($"
                          << it->second << ")" << std::endl;
            }
            if (total > it->second) {
                std::cout << "ALERT: " << categoryToString(category)
                          << " spending ($" << total << ") exceeded budget ($"
                          << it->second << ")" << std::endl;
            }
        }
    }

    std::vector<std::pair<std::pair<std::string, std::string>, double>> process(
        const std::vector<Transaction>& transactions) {

        std::string currentPeriod = currentYearMonth();
        std::unordered_map<std::string, std::unordered_map<std::string, double>> periodCategoryAmounts;

        for (const auto& txn : transactions) {
            std::string period = extractYearMonth(txn.timestamp);
            if (period == currentPeriod) {
                periodCategoryAmounts[period][txn.category] += txn.amount;
            }
        }

        std::vector<std::pair<std::pair<std::string, std::string>, double>> results;
        for (const auto& periodPair : periodCategoryAmounts) {
            for (const auto& catPair : periodPair.second) {
                results.push_back({{periodPair.first, catPair.first}, catPair.second});
            }
        }

        for (const auto& result : results) {
            Category cat = Category::GAS;
            if (result.first.second == "Housing") cat = Category::HOUSING;
            else if (result.first.second == "Food") cat = Category::FOOD;
            else if (result.first.second == "Shopping") cat = Category::SHOPPING;

            handleBudgetNotifications(result.first.first, cat, result.second);
        }

        return results;
    }
};

int main() {
    SpendingByCategory processor;

    std::vector<Transaction> transactions = {
        {"2026-07-01", "Gas", 45.50},
        {"2026-07-02", "Shopping", 120.00},
        {"2026-07-03", "Food", 85.75},
        {"2026-07-04", "Gas", 30.25},
        {"2026-07-05", "Shopping", 200.00}
    };

    auto results = processor.process(transactions);

    std::cout << "\nSpending by category:" << std::endl;
    for (const auto& result : results) {
        std::cout << "(" << result.first.first << ", " << result.first.second
                  << ") -> $" << result.second << std::endl;
    }

    return 0;
}
