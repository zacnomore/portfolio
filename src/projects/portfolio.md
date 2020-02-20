---
title: Portfolio Site
description: "This site! A Gridsome blog and portfolio"
slug: portfolio
date: 2019-06
technologies: Gridsome, Vue, GraphQL
repository: https://github.com/zacnomore/portfolio
published: true
---

## What

A Gridsome site displaying my development work and writing. Image and text based content makes up the projects and writing sections of the site. There's little else to speak of at the moment so it's essentially a blog.

## Why

Quite simply, I want to be able collect and share my work. Writing to show theory, projects to show application.

## How

I chose to use the Gridsome framework out of interest in the system, I figured real world use would make contribution to the library easier. However, I believe there's strong justification otherwise as a JAMstack is well suited to infrequently changing content. Traditionally this sort of site would be made with a CMS framework like Joomla, WordPress or Ghost that provide both content management and frontend. This doesn't differ much on the content side, this could certainly source its content from any of those options, it doesn't only due to the current simplicity. It does differ however in the frontend. I spoke a bit about the JAMstack in this post ["Why We're Rendering Static Pages Again"](/writing/why-jamstack-is-actually-new) but I can be brief. This site is all static files so it's entirely hosted on the Zeit CDN which makes it incredibly fast. You can build essentially any site, you only lack the ability to do server side processing of those files you've made static. This isn't as limiting as it sounds, any functionality (even auth based) can be built off of APIs.

While there's ways to work around this limitation, why bother? There's a number of sites and technologies that provide simple means to build a site like this. The problem is they frequently lack speed or flexibility.

Flexibility is the first word that comes to mind when I think of WordPress. Speed is not. While it offers an incredible  range of free and paid plugins and am extensible platform, the headed version suffers in speed. For example, Facebook has [a WordPress blog](https://about.fb.com/news/) and while they certainly have great engineers with fantastic skills, they're only getting [passable speed](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fabout.fb.com%2Fnews%2F). In the same respect, speed is achievable from some out of the box solutions. Blogger has [fantastic load times](https://blogger.googleblog.com/) but is definitely limited in the breadth of what can be built.  

The flexibility and speed is not free however, there's always a cost. In this case there's additional complexity which brings additional cost to development and a higher barrier to entry. I'm not really able to drop in UI complete plugins or spin up a site as a non-developer.

## What I learned

I've spun up plenty of over complicated projects that fizzled out after getting lost in the details. I was really happy to see that this site could come together without getting too lost in pieces that have small user-facing impacts. The ready-made image lazy loading is exactly the sort of thing I might get caught up in. The development and user experience is pleasant without too much setup and I ended up throwing myself into the actual content pretty quickly. It taught me that the technology helps only so much as you're going to use it.
