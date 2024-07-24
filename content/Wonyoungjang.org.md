---
date: 2024-03-05
description: WonyoungJang.org (this site)
githubrepo: https://github.com/wonyoung-jang/wonyoung-jang.github.io
lastMod: 2024-07-07
projects:
- software
title: Wonyoungjang.org
---
![wonyoungjang-org.webp](/assets/wonyoungjang-org.webp)

## How it's made

1. Pages (notes, articles, projects) are written in Logseq markdown.

2. Pages with a `public` property are exported and converted to Hugo markdown using the Logseq Schrödinger plugin.

3. The exported `assets` and `pages` folders are placed in the `content` folder of this Hugo site.

4. `hugo -D` + `hugo serve -D` to build and serve the site locally.

5. GitHub Actions to serve the site publicly.
