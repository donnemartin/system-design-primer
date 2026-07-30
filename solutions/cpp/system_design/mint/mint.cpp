#include <iostream>
#include <unordered_map>
#include <string>
#include <queue>
#include <vector>
#include <ctime>
#include <optional>

enum class DefaultCategories {
    HOUSING = 0,
    FOOD = 1,
    GAS = 2,
    SHOPPING = 3,
    UTILITIES = 4,
    TRANSPORTATION = 5,
    ENTERTAINMENT = 6
};

std::string categoryToString(DefaultCategories cat) {
    switch (cat) {
        case DefaultCategories::HOUSING: return "Housing";
        case DefaultCategories::FOOD: return "Food";
        case DefaultCategories::GAS: return "Gas";
        case DefaultCategories::SHOPPING: return "Shopping";
        case DefaultCategories::UTILITIES: return "Utilities";
        case DefaultCategories::TRANSPORTATION: return "Transportation";
        case DefaultCategories::ENTERTAINMENT: return "Entertainment";
        default: return "Unknown";
    }
}

struct Transaction {
    time_t timestamp;
    std::string seller;
    double amount;

    Transaction(time_t t, const std::string& s, double a) : timestamp(t), seller(s), amount(a) {}
};

class Categorizer {
private:
    std::unordered_map<std::string, DefaultCategories> sellerCategoryMap;
    std::unordered_map<std::string, std::priority_queue<int, std::vector<int>, std::greater<int>>> sellerCategoryOverridesMap;

public:
    Categorizer(const std::unordered_map<std::string, DefaultCategories>& sellerMap,
                const std::unordered_map<std::string, std::priority_queue<int, std::vector<int>, std::greater<int>>>& overridesMap)
        : sellerCategoryMap(sellerMap), sellerCategoryOverridesMap(overridesMap) {}

    std::optional<DefaultCategories> categorize(const Transaction& transaction) {
        auto it = sellerCategoryMap.find(transaction.seller);
        if (it != sellerCategoryMap.end()) {
            return it->second;
        }

        auto overrideIt = sellerCategoryOverridesMap.find(transaction.seller);
        if (overrideIt != sellerCategoryOverridesMap.end() && !overrideIt->second.empty()) {
            DefaultCategories category = static_cast<DefaultCategories>(overrideIt->second.top());
            sellerCategoryMap[transaction.seller] = category;
            return category;
        }

        return std::nullopt;
    }
};

class Budget {
private:
    std::unordered_map<DefaultCategories, double> categoriesToBudgetMap;

public:
    Budget(const std::unordered_map<DefaultCategories, double>& templateMap)
        : categoriesToBudgetMap(templateMap) {}

    void overrideCategoryBudget(DefaultCategories category, double amount) {
        categoriesToBudgetMap[category] = amount;
    }

    double getBudget(DefaultCategories category) const {
        auto it = categoriesToBudgetMap.find(category);
        return (it != categoriesToBudgetMap.end()) ? it->second : 0.0;
    }
};

int main() {
    std::unordered_map<std::string, DefaultCategories> sellerMap = {
        {"Exxon", DefaultCategories::GAS},
        {"Target", DefaultCategories::SHOPPING},
        {"Whole Foods", DefaultCategories::FOOD},
        {"Home Depot", DefaultCategories::HOUSING}
    };

    std::unordered_map<std::string, std::priority_queue<int, std::vector<int>, std::greater<int>>> overridesMap;

    Categorizer categorizer(sellerMap, overridesMap);

    std::unordered_map<DefaultCategories, double> budgetTemplate = {
        {DefaultCategories::HOUSING, 1500.0},
        {DefaultCategories::FOOD, 500.0},
        {DefaultCategories::GAS, 200.0},
        {DefaultCategories::SHOPPING, 300.0}
    };

    Budget budget(budgetTemplate);

    std::vector<Transaction> transactions = {
        {time(nullptr), "Exxon", 45.50},
        {time(nullptr), "Target", 120.00},
        {time(nullptr), "Whole Foods", 85.75},
        {time(nullptr), "Unknown Store", 50.00}
    };

    for (const auto& txn : transactions) {
        auto category = categorizer.categorize(txn);
        if (category) {
            std::cout << txn.seller << " -> " << categoryToString(*category)
                      << " ($" << txn.amount << ")" << std::endl;
        } else {
            std::cout << txn.seller << " -> Uncategorized ($" << txn.amount << ")" << std::endl;
        }
    }

    std::cout << "\nBudgets:" << std::endl;
    std::cout << "Housing: $" << budget.getBudget(DefaultCategories::HOUSING) << std::endl;
    std::cout << "Food: $" << budget.getBudget(DefaultCategories::FOOD) << std::endl;

    return 0;
}
