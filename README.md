# Web Development With Node And Express

This is the companion repository to [Web Development With Node and Express, 1st Edition](http://shop.oreilly.com/product/0636920032977.do).  With this repository, you can follow along with any of the code samples in the book, as well as see additional material that wasn't appropriate for the book format.

## Mea Culpa

I must humbly beg the forgiveness of my readers for the incomplete state of this repository.  Currently, the repo contains code up through Chapter 18.  I have learned a lot about how to synchronize a repository with a book.  Or -- more to the point -- how not to.

When I started the book, I imagined the reader progressing throguh the book in a linear fashion.  A repo, I thought, should flow the same way: it might contain the sequence of commits a dedicated reader might make as she or he progresses through the book.

A nice thought, but it has a fatal flaw: errata.  Despite my best efforts, mistakes have been found in the book (shocking, I know).  Dependencies change.  Things get deprecated.  In the book, I suggest you say `npm install <whatever>` not `npm install <whatever>@1.3.17`, for example.  Allowing the repository to be a linear history of the book has made it impossible to correct errata in the repo.

## So What Now?

Well, I own this repository, so I can do whatever I want with it.  Completely rebuild it?  Sure.  It's not as if (aside from the occasional and welcome community commit) this is an active software project that would suffer from being rebuilt.  Or, I could create a new repo, and update this README to suggest that you should go there instead for a better experience.

Also, there are two broad approaches I can think of when it comes to rebuilding the repo:

### Approach 1: Chapters as Directories

In this approach, each chapter would have its own directory in the repo.  `ch01`, `ch02`, etc.  

**Advantages**:

* I can tag versions of the repo that synchronize with the book.  For example, when I fix an errata, I can put in the book that the book corresponds to r1.3, for example.
* Tagging produces a neat history of errata corrections to the book.
* Checking out `master` would give you the latest code.
* No need to use git commands to diff changes between chapters.

**Disadvantages**:

* The original intent of the repository reflecting the commits a reader may make would be gone.

### Appraoch 2: Chapters as Branches

In this approach, each chapter would have its own branch (as opposed to tag, as is currently the case).

**Advantages**:

* The original intent of the repository (the commits a reader might make) is preserved.
* It reflects more accurately the way a real-world project would work...one where you would have separate version development branches to maintain.

**Disadvantages**:

* Now practical way to tag across branches, creating a "snapshot" that represents the state of the book.  It would be possible to tag each chapter separately, but it is unlikely that I will want to fuss with that level of maintenance.
* Possibly harder to understand for Git beginners.

## So..._When_?

Here's the bad news...it won't be soon.  I have a manuscript deadline in September for my second book, and between that, work, and school, it is unlikely I will be able to undertake this kind of restructring.  Unless....

## Volunteers?

If there are volunteers who are willing to help out with the restructring -- including re-creating the samples from the chapter _as they appear in the book_ (yes, I will provide you the latest revision).  In other words, you can't change the code because you think it's better.  It may very well be, but it has to match what's in the book.  Of course you are willing to raise the idea with me...I can always change it in the book if it's a great idea.
