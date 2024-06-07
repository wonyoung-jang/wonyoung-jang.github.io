---
date: 2024-03-05
coverimage: ../assets/image_1709746330336_0.png
description: This page is a meta presentation for the deployment of this website (and this page).
githubrepo: https://github.com/wonyoung-jang/wonyoung-jang.github.io
title: This Website
tags:
categories:
lastMod: 2024-05-18
---
## How It's Made

1. Pages (notes, articles, projects) are written in Logseq markdown.

2. Pages with a `public` property are exported and converted to Hugo markdown using the Logseq Schrödinger plugin.

3. The exported `assets` and `pages` folders are placed in the `content` folder of this Hugo site.

4. `hugo -D` + `hugo serve -D` to build and serve the site locally.

5. GitHub Actions to serve the site publicly.
