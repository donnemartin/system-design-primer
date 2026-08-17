Contributing
============

Contributions are welcome!

**Please carefully read this page to make the code review process go as smoothly as possible and to maximize the likelihood of your contribution being merged.**

## Bug Reports

For bug reports or requests [submit an issue](https://github.com/donnemartin/system-design-primer/issues).

## Pull Requests

The preferred way to contribute is to fork the
[main repository](https://github.com/donnemartin/system-design-primer) on GitHub.

1. Fork the [main repository](https://github.com/donnemartin/system-design-primer).  Click on the 'Fork' button near the top of the page.  This creates a copy of the code under your account on the GitHub server.

2. Clone this copy to your local disk:

        $ git clone git@github.com:YourLogin/system-design-primer.git
        $ cd system-design-primer

3. Create a branch to hold your changes and start making changes. Don't work in the `master` branch!

        $ git checkout -b my-feature

4. Work on this copy on your computer using Git to do the version control. When you're done editing, run the following to record your changes in Git:

        $ git add modified_files
        $ git commit

5. Push your changes to GitHub with:

        $ git push -u origin my-feature

6. Finally, go to the web page of your fork of the `system-design-primer` repo and click 'Pull Request' to send your changes for review.

### GitHub Pull Requests Docs

If you are not familiar with pull requests, review the [pull request docs](https://help.github.com/articles/using-pull-requests/).

## Translations

We'd like for the guide to be available in many languages. Here is the process for maintaining translations:

* This original version and content of the guide is maintained in English.
* Translations follow the content of the original. Contributors must speak at least some English, so that translations do not diverge.
* Each translation has a maintainer to update the translation as the original evolves and to review others' changes. This doesn't require a lot of time, but a review by the maintainer is important to maintain quality.

See [Translations](TRANSLATIONS.md).

### Changes to translations

* Changes to content should be made to the English version first, and then translated to each other language.
* Changes that improve translations should be made directly on the file for that language. Pull requests should only modify one language at a time.
* Submit a pull request with changes to the file in that language. Each language has a maintainer, who reviews changes in that language. Then the primary maintainer [@donnemartin](https://github.com/donnemartin) merges it in.
* Prefix pull requests and issues with language codes if they are for that translation only, e.g. "es: Improve grammar", so maintainers can find them easily.
* Tag the translation maintainer for a code review, see the list of [translation maintainers](TRANSLATIONS.md).
    * You will need to get a review from a native speaker (preferably the language maintainer) before your pull request is merged.

### Adding translations to new languages

Translations to new languages are always welcome! Keep in mind a translation must be maintained.

* Do you have time to be a maintainer for a new language? Please see the list of [translations](TRANSLATIONS.md) and tell us so we know we can count on you in the future.
* Check the [translations](TRANSLATIONS.md), issues, and pull requests to see if a translation is in progress or stalled. If it's in progress, offer to help.  If it's stalled, consider becoming the maintainer if you can commit to it.
* If a translation has not yet been started, file an issue for your language so people know you are working on it and we'll coordinate. Confirm you are native level in the language and are willing to maintain the translation, so it's not orphaned.
* To get started, fork the repo, then submit a pull request to the main repo with the single file README-xx.md added, where xx is the language code. Use standard [IETF language tags](https://www.w3.org/International/articles/language-tags/), i.e. the same as is used by Wikipedia, *not* the code for a single country. These are usually just the two-letter lowercase code, for example, `fr` for French and `uk` for Ukrainian (not `ua`, which is for the country). For languages that have variations, use the shortest tag, such as `zh-Hant`.
* Feel free to invite friends to help your original translation by having them fork your repo, then merging their pull requests to your forked repo. Translations are difficult and usually have errors that others need to find.
* Add links to your translation at the top of every README-XX.md file. For consistency, the link should be added in alphabetical order by ISO code, and the anchor text should be in the native language.
* When you've fully translated the English README.md, comment on the pull request in the main repo that it's ready to be merged.
    * You'll need to have a complete and reviewed translation of the English README.md before your translation will be merged into the `master` branch.
    * Once accepted, your pull request will be squashed into a single commit into the `master` branch.

### Translation template credits

Thanks to [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line) for the translation template.
