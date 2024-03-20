---
date: 2024-01-13
categories:
- Software Development Projects
coverimage: ../assets/logseq_tokenizer_1709673334004_0.png
githubrepo: wonyoung-jang/logseq-tokenizer
title: Logseq Markdown Tokenizer
tags:
lastMod: 2024-03-17
---
![logseq_tokenizer.png](/assets/logseq_tokenizer_1709673334004_0.png)

Estimate the cost of tokenizing markdown files for [OpenAI's text-embedding models](https://platform.openai.com/docs/guides/embeddings/).

---

## The Problem

  + [Logseq](https://logseq.com/) does not have a native way to view the character count of your notes (aka pages).

  + Logseq's performance is a balance between the number of pages and the size of each page.

  + Logseq's graph is difficult to search and prune manually.

---

## Proposed Solution

Encode Logseq's graph to enable semantic search, then leverage this encoding to develop an automatic pruning tool of some kind.

---

## Implementation

  + If I want to enable semantic search, then I must embed my graph.

  + If I don't know the size of my graph or its pages, then there exists a chance that embedding my graph could be very costly.

  + If I want to tokenize all the pages in my graph, then I need to iterate through the text of each page.

  + If I have to do that anyways, then I may as well count the characters along the way.

  + If I do both, then I also increment a total counter to get a total count of characters and tokens for my graph.

  + If have the token counts, I can estimate the cost of embedding for OpenAI's three available `text-embedding` models.

---

## Outputting the Data to CSV

If I output this data as a CSV, I can manipulate and format the data. For instance, with conditional formatting:

![example_output.png](/assets/example_output_1710007420546_0.png)

---

## Summary

This is my answer to efficiently managing large texts within the note-taking tool [Logseq](https://logseq.com/), particularly when dealing with extensive book highlights and other sizable content sources, like automatic imports of highlights of large articles from Read-Later apps like [Omnivore](https://omnivore.app/).