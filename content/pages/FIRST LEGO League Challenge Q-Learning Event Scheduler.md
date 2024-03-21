---
date: 2024-02-25
categories:
- Software Development Projects
coverimage: ../assets/fllc_qlearning_demo_1709746398103_0.png
githubrepo: wonyoung-jang/fllc-qlearning-scheduler
title: FIRST LEGO League Challenge Q-Learning Event Scheduler
tags:
lastMod: 2024-03-21
---
![fllc_qlearning_demo.png](/assets/fllc_qlearning_demo_1709746398103_0.png)

A FLLC event scheduler using Q-Learning.

---

## A Brief History

### A Nerd Snipe from a Coworker

My coworker [nerd sniped](https://xkcd.com/356/) me with this problem: Given a set of constraints, can you devise a way to create schedule for the [FIRST LEGO League Challenge](https://www.firstinspires.org/robotics/fll) event we're running later this year? I liked scheduling problems and solving puzzles so it piqued my interest.

### Early Attempts

Since this was not a necessary project for my job, I started to work on the problem in my free time.

I first tried to model how to think about the problem in the first place. I came up with 3 mental models:

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

## Constraints

### Hard Constraints

The hard constraints of a schedule are those imposed by the laws of physics and by the logical rules we usually assume without stating explicitly. There are three main hard constraints:

  + **Non-Overlapping Schedule Constraint:** Since teams cannot be in two place at once, a team cannot be scheduled for a time slot if the duration and time of that time slot overlaps with one the team is already scheduled for.

  + **Simultaneous Match Constraint:** A team cannot be scheduled for a round without another team scheduled at the same time on the opposite side of the table.

  + **Equal Scheduling Constraint:** Every team must be scheduled an equal number of times.

### Soft Constraints

The soft constraints of a schedule are those that maximize fairness. They are not a necessary condition to run a tournament, but aiming for them while scheduling can create a more fair experience for all teams. In the current iteration, there are four soft constraints:

  + **Table Consistency:** Since this competition is about autonomous robots depending on it's environment, tiny inconsistencies between competition tables and even their sides can create a large difference. So I reward the model when a team has less variety in it's scheduled table sides.

  + **Opponent Variety:** Playing with the same opposite team for all rounds is not as fun as playing with a different one each round. The model is rewarded when a team has more variety amongst it's scheduled "opponent" teams.

  + **Back to Back Penalty:** Teams perform better when they have a chance to rest and prepare after a match. The model is penalized when the schedule places a team in consecutive rounds.

  + **Break Time:** Teams should be given at least some amount of break during the tournament for rest, adjustments, or repairs to their robots. The model is rewarded when schedules include these breaks.

### An Aside: Time Constraints

One constraint I had to grapple with is the **Back to Back Penalty**. If we assume that the duration of the round will be fully spent at that location, we can assume that teams cannot magically teleport from one location to the next. However, depending on how your event is scheduled, the size  of the teams list, or the layout of the event's venue, I've found teams scheduled back to back is necessary to generate any valid schedules.

I plan on pursuing this constraint more deeply, and am currently refining the above constraints.

---

## A Roadmap and some Current Problems

{{< logseq/orgNOTE >}}Last update: 2024-03-18
{{< / logseq/orgNOTE >}}

### A Schedule Validator


  + The model currently generates an optimal schedule based on the Q-table it generates during training.

  + In some cases, this results in incomplete schedules.

### Refining the Constraints

  + For very large schedules, the model can appear to take a long time to learn from the soft constraints.

  + Currently, the user can set weights for each soft constraint, but it's unclear what effect this has across many schedule types.

  + Maybe: Some way to "backpropagate" the results of a training schedule to adjust the constraint weights dynamically?

### Test Cases

  + The goal would be to generate a large amount of simulated schedules of many varieties. Then to use a supervised learning approach or an end-to-end neural network of sorts.

### General Code Cleanup

  + I wrote this in two weeks, so the code is full of spaghetti at the moment.

  + Adding: More complete documentation here as well.

### Web Application

  + This is a big maybe at the moment, but the ultimate goal would be to allow any FLLC event organizer to easily use this tool.

### Generalized Scheduling Tool

  + If I could find a way to generalize all scheduling problems and allow the user to create any kind of schedule with any kind constraints they want, and maybe solve P = NP along the way...
