---
title: Progressive Web App Podcast Client
description: Exploration of PWA technologies
slug: pwa-podcatcher
date: 2019-11
technologies: Angular, TypeScript, PWA, Angular Material, IDB, RxJS
repository: https://github.com/zacnomore/pwa-podcatcher
published: true
---


## What

Podcast client (AKA podcatcher) that supports search and audio streaming

## Why

While the core behind PWAs is _progressive_, pushing on the new capabilities shows the possibilities for a categorically different experience. These technologies provide the foundation to explore areas that were previously the purview of only native apps. Improved storage persistence for holding onto podcast subscriptions, home-screen install for easy access, offline functionality to utilize pre-downloaded episodes, push notifications for new episodes, and caching of key resources to allow UI to maintain app-like responsiveness.

## How

This app has a thick client and just a sprinkling of serverless functions to get through the CORS requirements of the podcast ecosystem.

Starting at the bottom of the stack, the serverless functions provide search and feed reading. For search, there's a number of podcast directories these days but iTunes is the defacto standard. The iTunes search API provides the podcast listings with enough data to reach their individual feeds. The episodes feeds themselves also conform to the iTunes standards, they are XML RSS feeds with meta information and the mp3 urls.

> The Feed API processes the RSS feeds into JSON while the client could just as easily. I did this because I would expect the RSS feeds to remain fairly stable and the requests to be concentrated around the popular ones lending to a simple caching strategy. This makes that processing free after the first request and prevents the need from delivering a lot of code to process that XML.

Sitting between all those requests and the rest of the application is the all important service worker. This system allows us to create a cached, offline-capable application that can be installed on mobile devices similar to a native app.

The service worker cache is helpful for data from the network, the client specific data lands in persistent storage. IndexedDB is used for asynchronous storage of feeds and episodes.

RxJS observables provide single source of truth, always up to date view models for maintaining a internally-consistent app state.

> While a redux-style solution like NGRX could just as easily maintain that app state (not to mention be super cool and trendy), I wanted to spin up something smaller for a couple reasons. I wanted to maintain focus on the core technologies and build those systems on my own to build the best understanding. The store persistence was one of those places. Additionally, for an app of this size that seemed to be a sledgehammer for a nail.

I utilized the Material component library for this project as I didn't want to get too caught up in the UI. The focus here is on the new UX possibilities of PWAs, not how cool I can style my buttons.

