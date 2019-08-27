---
title: Javascript Oddities
description: "The sort of strange tricks that some might call hacks. I figure they may as well be known."
slug: js-oddities-1
---

They're not part of the normal vernacular but could be helpful under certain circumstances. I wouldn't recommend using these without some explanation, if at all.
That doesn't make them uninteresting though!

## Void

This one is a bit subtle, the `void` operator evaluates an expression and returns undefined. My initial thought was why would I use this instead of undefined?
The key here is that it _evaluates_ which allows you to encapsulate an expression without worry of its return traveling places you don't like. The most compelling
example I've found is [this one](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void#Non-leaking_Arrow_Functions).

```javascript

button.onclick = () => void doSomething();

```

In some other languages `void` is used in place of a return type to show that no value is given to the caller. This feels somewhat related as undefined is returned in js when no other value is returned but it's a roundabout way to get to the same place. `void` can also be used to force a statement (like a function) to be evaluated as an expression

```javascript

void function(){};
undefined

function(){};
SyntaxError: function statement requires a name
```

but you could also use an IIFE and people could read your code so.

