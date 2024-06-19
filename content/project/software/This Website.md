---
aliases: 
tags:
categories:
draft: false
slug: 
layout: 
githubrepo: https://github.com/wonyoung-jang/wonyoung-jang.github.io
keywords: 
type: 
date: 2024-03-05
description: This page is a meta presentation for the deployment of this website (and this page)
title: This Website
lastMod: 2024-06-19
---
![wonyoungjang-org.webp](/assets/wonyoungjang-org.webp)

## How it's made

1. Pages (notes, articles, projects) are written in Logseq markdown.

2. Pages with a `public` property are exported and converted to Hugo markdown using the Logseq Schrödinger plugin.

3. The exported `assets` and `pages` folders are placed in the `content` folder of this Hugo site.

4. `hugo -D` + `hugo serve -D` to build and serve the site locally.

5. GitHub Actions to serve the site publicly.
