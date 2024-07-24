---
date: 2023-11-18
description: Customized a Spring app with HTML and Java for inventory management,
  showcasing software development skills for a client's needs
githubrepo: https://github.com/wonyoung-jang/retail-inventory-manager
lastMod: 2024-07-07
projects:
- university
title: Retail inventory manager
---
![🖼 retail-inventory.webp](/assets/retail-inventory.webp)

{{< logseq/orgWARNING >}}This project was completed for coursework and is no longer maintained. Names and details have been modified for academic integrity. Below is a summary of the university's main requirements.
{{< / logseq/orgWARNING >}}

## Requirements

  + Customize the HTML user interface of the [Spring](https://spring.io/projects/spring-framework) application to reflect the specific customer's shop name, product names, and part names

  + Add an `About` page that accurately describes the customer's company and ensure proper navigation within the application

  + Integrate a sample inventory for the chosen store, including five products and five parts, ensuring no data overwrite and handling duplicates as "multi-pack" parts

  + Implement a `Buy Now` button in the product list that decrements the product inventory without affecting associated parts and provides purchase feedback

  + Modify part entities to track maximum and minimum inventory levels, including updates to forms and persistent storage

  + Introduce validation for inventory levels, displaying appropriate error messages for violations of maximum and minimum thresholds

  + Develop at least two unit tests for the new maximum and minimum inventory fields within the `PartTest` class
