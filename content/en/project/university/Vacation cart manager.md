---
aliases: 
tags:
categories:
draft: false
slug: 
layout: 
githubrepo: https://github.com/wonyoung-jang/vacation-cart-manager
keywords: 
type: 
date: 2023-11-21
description: Developed a Spring Java backend for a travel agency's web app, interfacing with an existing Angular front end, updating legacy systems
title: Vacation cart manager
lastMod: 2024-06-25
---
![🖼 vacation-cart-manager.webp](/assets/vacation-cart-manager.webp)

{{< logseq/orgWARNING >}}This project was completed for coursework and is no longer maintained. Names and details have been modified for academic integrity. Below is a summary of the university's main requirements.
{{< / logseq/orgWARNING >}}

## Requirements

  + Create a new Java project using [Spring Initializr](https://start.spring.io/), incorporating essential dependencies like [Spring](https://spring.io/projects/spring-framework) Data JPA, Rest Repositories, MySQL Driver, and Lombok

  + Establish a [GitLab](https://gitlab.com/) repository for the project, ensuring regular commits and pushes to document progress, and submit the repository URL and branch history upon completion

  + Construct four new packages within the project to organize the codebase: `controllers`, `entities`, `dao` (Data Access Object), and `services`, focusing on functionalities related to a checkout form and vacation packages list

  + Develop `entity` classes and an enumerator in the `entities` package that align with the provided UML diagram, ensuring accurate mapping to the project's [MySQL](https://www.mysql.com/) database

  + Create `repository` interfaces in the `dao` package that extend `JpaRepository`, adding cross-origin support to facilitate communication with the [Angular](https://angular.io/) front end

  + Implement `service` classes in the `services` package to handle purchase data and responses, including a checkout service interface and its implementation

  + Integrate validation within the application to ensure the data inputs meet the front-end requirements

  + Develop a [REST controller](https://github.com/spring-guides/tut-rest) in the `controllers` package to manage checkout processes, including a post mapping to handle order placements

  + Add five sample customers to the application programmatically, ensuring their data persist correctly without duplication on subsequent application runs

  + Test the integrated application by placing an order for a vacation with two excursions, verifying that there are no network errors and the data is correctly stored in the MySQL database, supported by appropriate screenshots
