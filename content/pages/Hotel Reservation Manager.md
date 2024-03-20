---
date: 2023-11-27
categories:
- University Coursework Projects
coverimage: ../assets/hotel_reservation_manager_1709746723628_0.png
githubrepo: wonyoung-jang/hotel-reservation-manager
title: Hotel Reservation Manager
tags:
lastMod: 2024-03-17
---
![hotel_reservation_manager.png](/assets/hotel_reservation_manager_1709746723628_0.png)

Enhancing a [Spring](https://spring.io/projects/spring-framework) application for a hotel reservation system by incorporating multithreaded language translation, time zone adjustments, and currency exchange functionalities. Containerizing the application using [Docker](https://www.docker.com/), demonstrating an advanced deployment strategy.

{{< logseq/orgWARNING >}}This project was completed as part of academic coursework and is no longer being actively maintained. Certain names, identifiers, and other details have been modified from the original submission for academic integrity purposes. This page contains a summarized list of the main requirements given by the university.
{{< / logseq/orgWARNING >}}

---

## Learning Objectives and Requirements

  + Integrate resource bundles in the application for English and French translations, including a welcome message.

  + Implement multithreading to display the welcome message in both English and French simultaneously.

  + Modify the front end to show reservation prices in USD, CAD, and EUR.

  + Develop a Java method to convert time between Eastern, Mountain, and Coordinated Universal Time zones.

  + Display the times of an online presentation at the Landon Hotel in all three time zones using the conversion method.

  + Create a Dockerfile to build a single image of the application, encapsulating all code modifications.

  + Test the Docker image by creating and running a container, ensuring the application functions correctly within the containerized environment.

  + Describe a deployment strategy for the multithreaded Spring application to a cloud service, detailing the steps and the chosen cloud service provider.