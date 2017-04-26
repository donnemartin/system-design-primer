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
* Translations follow the content of the original. Unfortunately, contributors must speak at least some English, so that translations do not diverge.
* Each translation has a maintainer to update the translation as the original evolves and to review others' changes. This doesn't require a lot of time, but review by the maintainer is important to maintain quality.

### Changes to translations

* Changes to content should be made to the English version first, and then translated to each other language.
* Changes that improve translations should be made directly on the file for that language. PRs should only modify one language at a time.
* Submit a PR with changes to the file in that language. Each language has a maintainer, who reviews changes in that language. Then the primary maintainer @donnemartin merges it in.
* Prefix PRs and issues with language codes if they are for that translation only, e.g. "es: Improve grammar", so maintainers can find them easily.

### Adding translations to new languages

Translations to new languages are always welcome, especially if you can maintain the translation!

* Check existing issues to see if a translation is in progress or stalled. If so, offer to help.
* If it is not in progress, file an issue for your language so people know you are working on it and we can arrange. Confirm you are native level in the language and are willing to maintain the translation, so it's not orphaned.
* To get it started, fork the repo, then submit a PR with the single file README-xx.md added, where xx is the language code. Use standard [IETF language tags](https://www.w3.org/International/articles/language-tags/), i.e. the same as is used by Wikipedia, *not* the code for a single country. These are usually just the two-letter lowercase code, for example, `fr` for French and `uk` for Ukrainian (not `ua`, which is for the country). For languages that have variations, use the shortest tag, such as `zh-Hant`.
* Invite friends to review if possible. If desired, feel free to invite friends to help your original translation by letting them fork your repo, then merging their PRs.
* Add links to your translation at the top of every README*.md file. (For consistency, the link should be added in alphabetical order by ISO code, and the anchor text should be in the native language.)
* When done, indicate on the PR that it's ready to be merged into the main repo.

### Translation template credits

Thanks to [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line) for the translation template.
