---
date: 2024-03-08
coverimage: ../assets/realtime-multiplayer-drawing_1709917652384_0.png
description: Draw in realtime on a blank canvas with others on the same server
githubrepo: https://github.com/wonyoung-jang/realtime-multiplayer-drawing
title: Realtime Multiplayer Drawing App
tags:
categories:
lastMod: 2024-06-13
---
## Introduction

This project is a fork of [GitHub - mayfer/claude-app-generator-demo](https://github.com/mayfer/claude-app-generator-demo), which was a demonstration of [Anthropic's Claude 3 Opus](https://www.anthropic.com/news/claude-3-family) generating an app in one go without errors. You can see a demonstration of the generation and the program here: [murat on Twitter](https://twitter.com/mayfer/status/1765385826496864290).

## Why

While the demonstration shows no errors, the instructions in the README were incomplete, and others had trouble with installing the dependencies.

I also thought it would be a neat alternative to texting people who are in the same area.

## Improvements

Included a `package.json` file for easy installation of dependencies:

```json
{
  "scripts": {
    "start": "cd server && npx ts-node index.ts",
    "clean": "cd server && rimraf db.sqlite"
  },
  "dependencies": {
    "cookie-parser": "^1.4.6",
    "express": "^4.18.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "rebuild": "^0.1.2",
    "socket.io": "^4.7.4",
    "socket.io-client": "^4.7.4",
    "sqlite3": "^5.1.7",
    "uuid": "^9.0.1"
  },
  "devDependencies": {
    "@types/cookie-parser": "^1.4.7",
    "@types/express": "^4.17.21",
    "@types/react": "^18.2.64",
    "@types/react-dom": "^18.2.21",
    "@types/uuid": "^9.0.8",
    "rimraf": "^5.0.5",
    "ts-node": "^10.9.2",
    "typescript": "^5.4.2"
  }
}
```

I am primarily a Windows user, so I created some options for other Windows users. This includes a `npm run start` script to run the server, and an `npm run clean` script to clear the database.
