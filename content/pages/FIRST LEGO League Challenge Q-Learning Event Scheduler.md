---
date: 2024-02-25
categories:
- Software Development Projects
- University Coursework Projects
coverimage: ../assets/fllc_qlearning_demo_1709746398103_0.png
githubrepo: wonyoung-jang/fllc-qlearning-scheduler
title: FIRST LEGO League Challenge Q-Learning Event Scheduler
tags:
lastMod: 2024-03-18
---
![fllc_qlearning_demo.png](/assets/fllc_qlearning_demo_1709746398103_0.png)

A FLLC event scheduler using Q-Learning.

{{< logseq/orgNOTE >}}Update 2024-03-18: Minimally reformatted and refactored. Organization I couldn't do in the one month span to complete a functional product for the course. Began writing out a brief history on this project.
{{< / logseq/orgNOTE >}}

---

## A Brief History

### A Nerd Snipe from a Coworker

My coworker [nerd sniped](https://xkcd.com/356/) me with this problem: Given a set of constraints, can you devise a way to create schedule for the [FIRST LEGO League Challenge](https://www.firstinspires.org/robotics/fll) event we're running later this year? I liked scheduling problems and solving puzzles so it piqued my interest, and I began to get to work on it.

### Early Attempts

Since this was not a necessary project for my job, I began working on the problem in my free time.

This project first began with trying to model how to think about the problem in the first place. I came up with 3 mental models:

  + As a Sudoku puzzle (DFS).

  + As a constraint satisfaction problem (CSP Solvers).

  + As a pathfinding optimization problem (BFS, Djikstra's, and A*).

While I made some progress pursuing each I did not find a fully satisfactory solution.

### Interruption - Getting My Bachelors of Science in Computer Science

My job was grant funded for seven months. During this time, I began the third term of getting my degree. When the grant ended, I decided to hunker down and finish the degree in the remaining five months I had left in the term. Given that, I put the scheduling problem on the backburner, working on it only here and there in my spare time.

### Capstone Opportunity

When I got to the final capstone project for my degree, the requirements (see below) allowed me to create whatever I want, as long as it utilized machine learning in some way. I had never tried applying ML to the scheduling problem, so I decided to revisit it and explore Q-Learning as a potential approach.

### Q-Learning implementation

I decided against strictly supervised or unsupervised learning for one main reason: There isn't enough historical scheduling data out there to train on.

Schedules are weird in that each empty space has a kind of quantum existence. And when an empty space is filled with a scheduled team, it ripples out, affecting the potential states of all properties of the schedule. Balancing that with the constraints is the challenge my previous approaches couldn't encapsulate.

### A Solution?

No, not quite yet, but this has been the most promising approach so far, and I am pursuing it further.

Since existing data isn't sufficient, data is generated for this Q-learner, I think incorporating supervised learning on a large enough corpus of generated schedules may be useful, if not interesting. A large dataset would also allow me to integrate Deep Q-learning and end-to-end neural networks to see if improves things at all.

---

## Learning Objectives and Requirements

{{< logseq/orgWARNING >}}Below is a summarization of the given task and rubric criteria. All university specific details  are removed.
{{< / logseq/orgWARNING >}}

Designing, developing, and implementing a capstone project that incorporates machine learning and data visualization to address a specific business or organizational need.

### Write a Letter of Transmittal and a Project Proposal

  + Create a compelling letter of transmittal and project proposal to convince senior, non-technical managers and executives to implement the data product.

  + The proposal should succinctly describe the problem, proposed solution, benefits to the organization, costs, timeline, data considerations, ethical concerns, and my relevant expertise.

### Write an executive summary

  + Write an executive summary for IT professionals, detailing the technical context, project summary, data handling, implementation plan, timeline, evaluation methods, and resource and cost estimations.

### Design and develop a data product

  + At least one descriptive method and one non-descriptive (predictive or prescriptive) method.

  + A mechanism to handle data collection, processing, and management.

  + Three different types of data visualizations integrated into a user-friendly dashboard.

  + Implementation of machine learning methods and algorithms.

### Document the project's development

  + A detailed business vision and requirements document.

  + An overview of data sources, cleaning, preprocessing, and structure.

  + Detailed descriptions and justifications of the machine learning methods used.

  + A validation plan with results and assessments.

  + Visualizations and their purposes within the data product.

  + A user guide with installation and execution instructions.
