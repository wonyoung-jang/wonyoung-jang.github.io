---
aliases: 
tags:
categories:
draft: false
slug: 
layout: 
githubrepo: https://github.com/wonyoung-jang/student-record-system
keywords: 
type: 
date: 2023-07-01
projects:
- university
description: Developing a system in C++ to manage and maintain a student roster, involving data manipulation and object-oriented programming
title: Student record system
lastMod: 2024-07-07
---
![student-record-system.webp](/assets/student-record-system.webp)

{{< logseq/orgWARNING >}}This project was completed for coursework and is no longer maintained. Names and details have been modified for academic integrity. Below is a summary of the university's main requirements.
{{< / logseq/orgWARNING >}}

## Requirements

  + Migrate an existing student system to a new platform, focusing on data manipulation and student roster maintenance

  + Develop a program with two main classes: `Student` and `Roster`, to manage student data and course enrollment

  + Ensure the program reads and processes a list of five students, creating student objects from the provided data

  + Store the student list in an array called `classRosterArray`, with specific output directed to the console

  + Include essential student information like `ID`, `name`, `email`, `age`, `course completion days`, and `degree program`

  + Modify the `StudentData` table as required, and create six specific files (`main.cpp,` `degree.h`, `student.h/cpp`, `roster.h/cpp`) with appropriate source and header separations

  + Define an enumerated data type `DegreeProgram` with values `SECURITY`, `NETWORK`, and `SOFTWARE`

  + Implement and use accessor and mutator functions in the `Student` class for data manipulation, along with a constructor and a print function

  + Develop the `Roster` class to manage the student data array, including functions to add, remove, print, and manage student data based on specific criteria like degree program and average days in courses

  + Demonstrate program functionality in `main.cpp` with specific function calls and logic to manage and display student data effectively, including handling invalid email addresses and specific student removal scenarios.

  + Implement memory management practices, ensuring the dynamic memory allocated in `Roster` is appropriately released
