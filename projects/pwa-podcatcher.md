---
title: Progressive Web App Podcast Client
description: Exploration of PWA technologies
slug: pwa-podcatcher
date: 2019-11
technologies: Angular, TypeScript, PWA, Angular Material, IDB, RxJS
repository: https://github.com/zacnomore/pwa-podcatcher
demo: https://pwa-podcatcher-nine-black.now.sh/
published: true
---


## What

Podcast client (AKA podcatcher) that supports search and audio streaming

## Why

Progressive web apps have invited web developers into phones in a new way by allowing users to add their favorite sites to their home screen. While the core concept behind PWAs is _progressive_, layers of modern functionality on top of the backwards compatible foundation, using these new features of the foundation can create a categorically different experience but with the caveat of excluding those without a modern browser.

To demonstrate this, I built a podcast client with features that couldn't otherwise exist on a web app. Improved storage persistence for holding onto podcast subscriptions locally, home-screen install for app-like access, offline functionality to listen to downloaded episodes, push notifications for download notifications, and caching of key resources to allow UI to maintain app-like responsiveness.

## How

This app has a thick client and just a sprinkling of serverless functions to get through the CORS requirements of the podcast ecosystem.

Starting at the bottom of the stack, the serverless functions provide search and feed reading. For search, there's a number of podcast directories these days but iTunes is the defacto standard. The iTunes search API provides the podcast listings with enough data to reach their individual feeds. The episodes feeds themselves also conform to the iTunes standards, they are XML RSS feeds with meta information and the mp3 urls.

> In order to keep processing cheap enough to utilize the free tier of Zeit I transform and map the XML in the client but in a production app I would want to do that processing server side. After the first request that processing would be free due to caching and would reduce the bundle size of the client by quite a bit. The xml2js package is a bit hefty after all.

Sitting between all those requests and the rest of the application is the all important service worker. This system allows us to create a cached, offline-capable application that can be installed on mobile devices similar to a native app.

The service worker cache is helpful for data from the network, the client specific data lands in persistent storage. IndexedDB is used for asynchronous storage of feeds and episodes.

RxJS observables provide single source of truth, always up to date view models for maintaining a internally-consistent app state.

> While a redux-style solution like NGRX could just as easily maintain that app state (not to mention be super cool and trendy), I wanted to spin up something smaller for a couple reasons. I wanted to maintain focus on the core technologies and build those systems on my own to build the best understanding. The store persistence was one of those places. Additionally, for an app of this size that seemed to be a sledgehammer for a nail.

I utilized the Material component library for this project as I didn't want to get too caught up in the UI. The focus here is on the new UX possibilities of PWAs, not how cool I can style my buttons.
