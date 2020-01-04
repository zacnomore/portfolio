---
title: Progressive Web App Podcast Client
description: Exploration of PWA technologies
slug: pwa-podcatcher
date: 2019-11
technologies: Angular, TypeScript, PWA, Angular Material, IDB, RxJS
repository: https://github.com/zacnomore/pwa-podcatcher
published: false
---


## What

Podcast client (AKA podcatcher) that supports search, subscriptions and audio streaming

## How

This app has a thick client and just a little bit of serverless functions to get search working. Starting from the user, the UI is built with the Angular Material component
library. This is resting on the Angular framework with RxJS piping and a tiny custom store for state management. IDB (wrapped by IDB-keyval) stores the user's subscriptions
