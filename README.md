# Web Development With Node And Express

This is the companion repository to [Web Development With Node and Express, 1st Edition](http://shop.oreilly.com/product/0636920032977.do).  With this repository, you can follow along with any of the code samples in the book, as well as see additional material that wasn't appropriate for the book format.

## IMPORTANT: New Strucutre

The first version of the book attempted to treat the repo as a linear development effort.  That is, it attempted to mirror the progress a reader might make as he or she went through the book...or the progress a real development effort might take.  This approach was well-intentioned, but turned out to cause more problems than it solved.  After strugglign with those problems, I realized that compromises had to be made to reflelt the reality of this repo (including the amount of time I have to maintain this repo).  Instead of a linear commit history with tags for each chapter, each chapter now lives in its own directory (including an "alternate ending" chapter, `ch-08-jquery-file-upload`).  Tags now represent "versions".  The nice thing about versions is that the version of the book you're reading can be correlated to the version of the repository.  For example, if your book says to use version 1.5, you can checkout tag 1.5, and feel confident that the code will mirror what you're reading.

Benefits of this approach:

* Code samples match what's in the book (see "If You're Following Along by Using the Official Repository" in Chapter 4 for the version number).
* Reduced maintenance for me.  This is good for you because it allows me to focus on making meaningful updates to the book.
* Easier to accept community contributions.  This makes it a lot easier for me to accept community contributions.  I can see quickly and easily what chapter(s) you're correcting, and correct the book in parrallel.

## Contributing

I am happy to accept PRs for this repository, for changes big and small.  Please keep in mind, however, that changes to the repository have to be kept in sync with changes in the book.  Any work you can do in your PR to make it clear to me what changes need to be made in the book is very helpful to me.  Before sending a PR, please consider the following:

* If you're just correcting typos or minor things, I prefer one big PR with lots of typo corrections to a bunch of small PRs with corrections.
* If you're suggesting major changes to code that appears in the book, I recommend you discuss it with me first.  I would hate for you to do a lot of work that I am unable or unwilling to sync with the book.
* While not every bit of code is carried from chapter to chapter, most of it is.  If you make code changes in `ch05`, make sure you make the same changes in `ch06` to `ch19`.  This is one of the first things I'll check in your PR.

## This Repo Doesn't Contain Everything You Need

Many of the questions I receive have to do with the chapter sample code not working "out of the box."  Most of these are because the reader hasn't taken note that you have to create your own `credentials.js` file.  The sample project relies on a lot of third-party services: Twitter, Google, MongoLabs, Weather Underground, etc.  Not only do I not wish to share my personal access tokens for these sites, it would be against the terms of service for those sites.  The book has instructions for creating your own `credentials.js` and attaching to the appropriate account(s) you'll need.  This important file doesn't show up until `ch09`, so if you just want to get something up and running without any work, try one of the early chapters.  Starting with `ch09`, you've got to do a little work yourself to get the site running.

## What Happened to the Original Code?

The original `master` branch that I developed for the first version of the book has been saved as the `legacy` branch.  Please do NOT do any development on this branch; it is only there for reference.  I will NOT consider any PRs from this branch.
