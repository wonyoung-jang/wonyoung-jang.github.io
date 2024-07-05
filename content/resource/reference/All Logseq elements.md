---
aliases: 
draft: false
slug: 
layout: 
githubrepo: 
keywords: 
type: 
date:
- 2024-06-24 Monday
description: A work in progress page showcasing how elements are rendered from Logseq
title: All Logseq elements
tags:
categories:
lastMod: 2024-07-05
---
![logseq-elements.png](/assets/logseq-elements_1719436919750_0.png)

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Text styling

**Bold**

{{< logseq/mark >}}Highlight{{< / logseq/mark >}}

**{{< logseq/mark >}}Bold + Highlight{{< / logseq/mark >}}**

*Italic*

## Advanced commands

{{< logseq/orgCENTER >}}Centered text
{{< / logseq/orgCENTER >}}

>Blockquote with ">"

`Block quote with backticks`

An external link: https://www.pbs.org/video/art21-fantasy/

## Logseq pages

### Page reference

Input: `[About]({{< ref "/about" >}})`

Output: [About]({{< ref "/about" >}})

### Embedded page

Input: `{{embed [About]({{< ref "/about" >}})}}`

Output: {{embed [About]({{< ref "/about" >}})}}

## Logseq blocks

### Block reference

Input: `## About me
`

Output: ## About me


### Block embed


Input: `{{embed ## About me
 }}`

Output: {{embed ## About me
 }}
