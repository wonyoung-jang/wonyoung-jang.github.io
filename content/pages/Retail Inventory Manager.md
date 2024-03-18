---
date: 2023-11-18
categories:
- University Coursework Projects
coverimage: ../assets/guitar_shop_inventory_1709746147769_0.png
githubrepo: wonyoung-jang/retail-inventory-manager
title: Retail Inventory Manager
tags:
lastMod: 2024-03-17
---
![guitar_shop_inventory.png](/assets/guitar_shop_inventory_1709746147769_0.png)

Customizing a [Spring Framework](https://spring.io/projects/spring-framework) application with an HTML front-end and a Java backend to manage inventory for a specific customer's needs, demonstrating various software development skills.

{{< logseq/orgWARNING >}}This project was completed as part of academic coursework and is no longer being actively maintained. Certain names, identifiers, and other details have been modified from the original submission for academic integrity purposes. This page contains a summarized list of the main requirements given by the university.
{{< / logseq/orgWARNING >}}

---

## Learning Objectives and Requirements

  + Customize the HTML user interface to reflect the specific customer's shop name, product names, and part names.

  + Add an `About` page that accurately describes the customer's company and ensure proper navigation within the application.

  + Integrate a sample inventory for the chosen store, including five products and five parts, ensuring no data overwrite and handling duplicates as "multi-pack" parts.

  + Implement a `Buy Now` button in the product list that decrements the product inventory without affecting associated parts and provides purchase feedback.

  + Modify part entities to track maximum and minimum inventory levels, including updates to forms and persistent storage.

  + Introduce validation for inventory levels, displaying appropriate error messages for violations of maximum and minimum thresholds.

  + Develop at least two unit tests for the new maximum and minimum inventory fields within the `PartTest` class.
