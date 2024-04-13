---
date: 2024-03-05
coverimage: ../assets/image_1709746330336_0.png
description: This page is a meta presentation for the deployment of this website (and this page).
githubrepo: https://github.com/wonyoung-jang/wonyoung-jang.github.io
site-link: https://wonyoungjang.org/pages/this-website/
title: This Website
tags:
categories:
lastMod: 2024-04-13
---
## How It's Made

---

1. Pages (notes, articles, projects) are written in Logseq markdown.

2. Pages with a `public` property are exported and converted to Hugo markdown using the Logseq Schrödinger plugin.

3. The exported `assets` and `pages` folders are placed in the `content` folder of this Hugo site.

4. `hugo -D` + `hugo serve -D` to build and serve the site locally.

5. GitHub Actions to serve the site publicly.

## Admonitions

---

{{< logseq/orgNOTE >}}This is a note
{{< / logseq/orgNOTE >}}

{{< logseq/orgTIP >}}This is a tip
{{< / logseq/orgTIP >}}

{{< logseq/orgIMPORTANT >}}This is important
{{< / logseq/orgIMPORTANT >}}

{{< logseq/orgCAUTION >}}This is a sign of caution
{{< / logseq/orgCAUTION >}}

{{< logseq/orgPINNED >}}This is pinned
{{< / logseq/orgPINNED >}}

{{< logseq/orgWARNING >}}This is a warning
{{< / logseq/orgWARNING >}}

{{< logseq/orgEXAMPLE >}}This is an example
{{< / logseq/orgEXAMPLE >}}

{{< logseq/orgCOMMENT >}}This is a comment
{{< / logseq/orgCOMMENT >}}

{{< logseq/orgQUERY >}}This is a query
{{< / logseq/orgQUERY >}}

{{< logseq/orgEXPORT >}}This is an export
{{< / logseq/orgEXPORT >}}

{{< logseq/orgEXPORT >}}This is a latex export
{{< / logseq/orgEXPORT >}}

{{< logseq/orgEXPORT >}}This is a ascii export
{{< / logseq/orgEXPORT >}}

{{< logseq/orgVERSE >}}This is a verse
{{< / logseq/orgVERSE >}}
