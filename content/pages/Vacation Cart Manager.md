---
date: 2023-11-21
categories:
- University Coursework Projects
coverimage: ../assets/vacation_cart_manager_1709746642372_0.png
githubrepo: wonyoung-jang/vacation-cart-manager
title: Vacation Cart Manager
tags:
lastMod: 2024-03-17
---
![vacation_cart_manager.png](/assets/vacation_cart_manager_1709746642372_0.png)

Developing a [Spring Framework](https://spring.io/projects/spring-framework) Java backend for a web application to replace the legacy backend system of a travel agency, interfacing with an existing [Angular](https://angular.io/) front end without modifying it.

{{< logseq/orgWARNING >}}This project was completed as part of academic coursework and is no longer being actively maintained. Certain names, identifiers, and other details have been modified from the original submission for academic integrity purposes. This page contains a summarized list of the main requirements given by the university.
{{< / logseq/orgWARNING >}}

---

## Learning Objectives and Requirements

  + Create a new Java project using [Spring Initializr](https://start.spring.io/), incorporating essential dependencies like Spring Data JPA, Rest Repositories, MySQL Driver, and Lombok.

  + Establish a [GitLab](https://gitlab.com/) repository for the project, ensuring regular commits and pushes to document progress, and submit the repository URL and branch history upon completion.

  + Construct four new packages within the project to organize the codebase: `controllers`, `entities`, `dao` (Data Access Object), and `services`, focusing on functionalities related to a checkout form and vacation packages list.

  + Develop `entity` classes and an enumerator in the `entities` package that align with the provided UML diagram, ensuring accurate mapping to the project's [MySQL](https://www.mysql.com/) database.

  + Create `repository` interfaces in the `dao` package that extend `JpaRepository`, adding cross-origin support to facilitate communication with the Angular front end.

  + Implement `service` classes in the `services` package to handle purchase data and responses, including a checkout service interface and its implementation.

  + Integrate validation within the application to ensure the data inputs meet the front-end requirements.

  + Develop a [REST controller](https://github.com/spring-guides/tut-rest) in the `controllers` package to manage checkout processes, including a post mapping to handle order placements.

  + Add five sample customers to the application programmatically, ensuring their data persist correctly without duplication on subsequent application runs.

  + Test the integrated application by placing an order for a vacation with two excursions, verifying that there are no network errors and the data is correctly stored in the MySQL database, supported by appropriate screenshots.
