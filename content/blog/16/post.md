---
title: A Great Pull Request
teaser: It took us years of using open source before we’ve sent our first code contribution. Though the source code is public, and everything seems accessible, taking the first step can be intimidating.
author: Hans Pagel
slug: great-pull-requests
published_at: 2020-10-28
---

It took us years of using open source before we’ve sent our first code contribution. Though the source code is public, and everything seems accessible, taking the first step can be intimidating. With this short guide written from a maintainer’s perspective, we hope to help you with your first contribution.

## Offering your help
It’s only a matter of time until you stumble upon a bug in one of your code dependencies. When you start searching for solutions, it’s very likely to land on a related issue, which probably describes the bug.

That is already a great chance to contribute to open source. Help the maintainers with information and add everything you know about the bug. Add the error message, your corresponding code, what kind of behavior you’d expect, and add steps to reproduce the bug.

Having a bug report with all related details can make a huge difference for a maintainer. You’ll save them time and make it way easier to jump into developing a fix.

If you think you’ll have a deeper understanding of the code causing the bug, you can offer your help to fix it and propose a solution. It’s not even necessary to send a pull request. Maybe the maintainer already thought about your way to solve it and decided it’s not the best one to tackle the issue.

Don’t forget that a maintainer probably not only has more knowledge about the whole codebase. It’s also up to them to maintain your code contribution in the future, that’s way easier if you’re on the same page with the solution.

Don’t invest too much time before it’s clear that your proposed solution is a welcome contribution.

## Keep it simple
If you decided to chime in and send a contribution to the code base, that’s amazing! We are very thankful for every pull request, even if we don’t merge it in the end. That said, you have few options to make it more likely that your contribution gets merged.

First of all, keep your contribution small. In most cases, it shouldn’t be necessary to change more than a handful of files. If your PR changes more than ten files or so, it’s doubtful we’ll merge it.

Remember that we need to follow your thoughts on every line of code, and your solution needs to fit our view on the codebase. Statistically, that won’t be the case if you change everything at once. If you need to change a ton, consider sending multiple pull requests that they can merge independently.

## Explain what you did
Give the maintainers a short explanation of what you did. There is no need to describe every single line of code. Focus on the things that are not in the code. Write why you did the change, what’s the benefit of the change, and if there are any breaking changes.

## Adhere to the style
You’ll want to keep the style of the project. Depending on the project, add regression tests before fixing bugs, add tests for new features, format your code according to the project’s code style, update the README or the documentation, and run all tests before sending the pull request, and so on.

Ensure it fit’s the expectations of the maintaining developers and also of the project’s users. If that feels overwhelming, consider making a smaller contribution at first.

A tiny pull request with one failing regression test is a great way to take the burden of reproducing a bug away from the maintainer and help them fix the actual issue.

Anyway, that’s enough to start with your first contribution. Maybe it’s a contribution to this blog? If you want to fix a typo or propose an addition to the post, [try it out](https://github.com/ueberdosis/blog/blob/main/content/blog/16/post.md)! Thanks for contributing!