---
layout: ../../../layouts/HowIBuildPostLayout.astro
title: The 3am Rule
category: Category A
teaser: Keeping systems as simple as possible keeps them easy to debug, reason about, and extend.
---

The 3am Rule is a reminder to design systems for the moment when everything is harder: the alert is firing, context is thin, and the person debugging the problem is tired.

That does not mean every system should be simplistic. It means the important paths should be easy to trace, the naming should say what is happening, and the number of moving parts should earn its keep.

When a system is simple enough to reason about at 3am, it is usually easier to extend at 3pm. The same choices that make production issues easier to diagnose also make day-to-day product work faster and safer.
