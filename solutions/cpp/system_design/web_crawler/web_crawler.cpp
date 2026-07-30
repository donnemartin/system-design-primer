#include <iostream>
#include <unordered_map>
#include <unordered_set>
#include <queue>
#include <vector>
#include <string>
#include <memory>
#include <climits>

class PagesDataStore {
private:
    std::unordered_set<std::string> linksToCrawl;
    std::unordered_set<std::string> crawledLinks;
    std::unordered_map<std::string, int> linkPriorities;

public:
    void addLinkToCrawl(const std::string& url) {
        linksToCrawl.insert(url);
        if (linkPriorities.find(url) == linkPriorities.end()) {
            linkPriorities[url] = 0;
        }
    }

    void removeLinkToCrawl(const std::string& url) {
        linksToCrawl.erase(url);
        linkPriorities.erase(url);
    }

    void reducePriorityLinkToCrawl(const std::string& url) {
        if (linkPriorities.find(url) != linkPriorities.end()) {
            linkPriorities[url]--;
        }
    }

    std::string extractMaxPriorityPage() {
        if (linksToCrawl.empty()) return "";

        std::string maxUrl;
        int maxPriority = INT_MIN;

        for (const auto& url : linksToCrawl) {
            int priority = linkPriorities[url];
            if (priority > maxPriority) {
                maxPriority = priority;
                maxUrl = url;
            }
        }

        return maxUrl;
    }

    void insertCrawledLink(const std::string& url, const std::string& signature) {
        crawledLinks.insert(url);
    }

    bool crawledSimilar(const std::string& signature) {
        return crawledLinks.find(signature) != crawledLinks.end();
    }

    bool hasLinksToCrawl() const {
        return !linksToCrawl.empty();
    }
};

class Page {
public:
    std::string url;
    std::string contents;
    std::vector<std::string> childUrls;
    std::string signature;

    Page(const std::string& u, const std::string& c, const std::vector<std::string>& children)
        : url(u), contents(c), childUrls(children) {
        signature = createSignature();
    }

    std::string createSignature() {
        return url + "_" + contents.substr(0, 100);
    }
};

class ReverseIndexQueue {
public:
    void generate(Page* page) {
        std::cout << "Generating reverse index for: " << page->url << std::endl;
    }
};

class DocIndexQueue {
public:
    void generate(Page* page) {
        std::cout << "Generating doc index for: " << page->url << std::endl;
    }
};

class Crawler {
private:
    PagesDataStore& dataStore;
    ReverseIndexQueue& reverseIndexQueue;
    DocIndexQueue& docIndexQueue;

public:
    Crawler(PagesDataStore& ds, ReverseIndexQueue& riq, DocIndexQueue& diq)
        : dataStore(ds), reverseIndexQueue(riq), docIndexQueue(diq) {}

    void crawlPage(Page* page) {
        for (const auto& url : page->childUrls) {
            dataStore.addLinkToCrawl(url);
        }

        reverseIndexQueue.generate(page);
        docIndexQueue.generate(page);

        dataStore.removeLinkToCrawl(page->url);
        dataStore.insertCrawledLink(page->url, page->signature);

        std::cout << "Crawled: " << page->url << std::endl;
    }

    void crawl() {
        while (dataStore.hasLinksToCrawl()) {
            std::string url = dataStore.extractMaxPriorityPage();
            if (url.empty()) break;

            Page* page = new Page(url, "Contents of " + url, {"http://example.com/child1", "http://example.com/child2"});

            if (dataStore.crawledSimilar(page->signature)) {
                dataStore.reducePriorityLinkToCrawl(page->url);
                std::cout << "Skipping similar: " << page->url << std::endl;
            } else {
                crawlPage(page);
            }

            delete page;
        }
    }
};

int main() {
    PagesDataStore dataStore;
    ReverseIndexQueue reverseIndexQueue;
    DocIndexQueue docIndexQueue;

    Crawler crawler(dataStore, reverseIndexQueue, docIndexQueue);

    dataStore.addLinkToCrawl("http://example.com");
    dataStore.addLinkToCrawl("http://example.com/about");
    dataStore.addLinkToCrawl("http://example.com/contact");

    std::cout << "Starting crawl..." << std::endl;
    crawler.crawl();
    std::cout << "Crawl complete!" << std::endl;

    return 0;
}
