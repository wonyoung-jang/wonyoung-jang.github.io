---
date: 2023-07-12
categories:
- University Coursework Projects
coverimage: ../assets/dvd-rental-sample-database-diagram_1709746107091_0.png
githubrepo: wonyoung-jang/dvd-rental-revenue
title: DVD Rental Database Revenue Insights
tags:
lastMod: 2024-03-17
---
![dvd-rental-sample-database-diagram.png](/assets/dvd-rental-sample-database-diagram_1709746107091_0.png)

Generating a business report within a [PostgreSQL](https://www.postgresql.org/) lab environment, utilizing SQL code to extract granular data (Detailed section) and summarized insights (Summary section) directly from [PostgreSQLTutorial's DVD Rental Sample Database](https://www.postgresqltutorial.com/postgresql-getting-started/postgresql-sample-database/) to answer a specific business question.

{{< logseq/orgWARNING >}}This project was completed as part of academic coursework and is no longer being actively maintained. Certain names, identifiers, and other details have been modified from the original submission for academic integrity purposes. This page contains a summarized list of the main requirements given by the university.
{{< / logseq/orgWARNING >}}

---

## Learning Objectives and Requirements

  + Create a real-world business report using data extracted and analyzed from the DVD Rental Database.

  + Summarize the business report, ensuring it is answerable, useful to the business, and focused on a specific metric/dimension.

  + Identify necessary data tables and specific fields required for both the detailed and summary sections of the report.

  + Explain the transformation required for a specific field in the detailed section.

  + Clarify the business uses of both report sections and the frequency at which the report should be refreshed.

  + Develop SQL code for creating report tables, extracting raw data, applying data transformations, and creating a trigger to update the summary table automatically.

  + Implement a stored procedure to refresh data in the report tables, including the ETL load process, with a clear schedule for execution.
