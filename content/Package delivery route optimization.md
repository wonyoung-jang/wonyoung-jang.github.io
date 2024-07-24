---
date: 2024-01-08
description: Designing a hash table-based package delivery tracking system in Python,
  with package insertion, look-up, delivery routing, and a user interface
githubrepo: https://github.com/wonyoung-jang/package-delivery-network
lastMod: 2024-07-07
projects:
- university
title: Package delivery route optimization
---
![🖼 package-delivery-network.webp](/assets/package-delivery-network.webp)

{{< logseq/orgWARNING >}}This project was completed for coursework and is no longer maintained. Names and details have been modified for academic integrity. Below is a summary of the university's main requirements.
{{< / logseq/orgWARNING >}}

## Requirements

  + Implement a hash table data structure (without external libraries) to store package data

  + Create an insertion function to add package details (`address`, `deadline`, `city`, `zip code`, `weight`, `status`) to the hash table

  + Create a lookup function to retrieve package details based on package ID

  + Write a program to simulate package delivery, utilizing provided distance and location data

  + Ensure that all packages are delivered with less than a 140 total mileage of all trucks

  + Create an interface allowing users to track package delivery status and view total truck mileage

  + Explain the strengths of my delivery algorithm, verify it meets requirements, and suggest two alternative algorithms suitable for the task

  + Describe changes I would implement with hindsight and the reasoning behind the modifications

  + Confirm the chosen data structure's suitability and propose two alternative data structures that would also work
