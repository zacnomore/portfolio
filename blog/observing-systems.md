---
title: What's Going On?
description: "Watching objects, events and systems without hurting yourself"
slug: whats-going-on
---

Imagine that you get a new job as a messenger for your local neighborhood. Every day you get a list messages to share from Charlie the news man. He's a nice guy but boy does he have a lot of messages for you to share. From 8 am to 4 pm every day you go door to door in the neighborhood to inform people of an incoming storm or a sale at the local butcher shop. People enjoy them... for the most part.

```javascript
// Don't worry how he gets his messages,
// we'll focus on delivery for now
const charlie = {
  getMessages: () => [
    `WARNING! Storm today at 2pm.`,
    `Info: The butcher has a sale on steaks!`
  ]
}

class Messenger {
  _messages = [];
  getMessages() {
    return this._messages;
  }
  addMessages(newMessages) {
    this._messages = [
      ...this._messages,
      ...newMessages
    ];
  }
  emptyMessages() {
    this._messages = [];
  }
}

// Welcome to your new job!
const you = new Messenger();

// Called at 8 am
function start () {
  you.addMessages(
    charlie.getMessages()
  );
}

// Called for each delivery
function deliverMessages () {
  return you.getMessages();
}

// Called at 4 pm
function end () {
  you.emptyMessages();
}
```

Sometimes the message isn't quite right. You come to tell people about the coming storm but it's already raining at their house. Or you share the news of the butcher shop sale with Sal even though you know he's vegetarian.vAfter doing this day-in and day-out you start to wonder if there's a better way. You could go to your boss but you need a good pitch, what could you change?

So you sit down and make a list of the problems you've seen. It looks a little something like this:

- Poor matching of message and recipient
- Busy recipient
- Outdated Messages
- Poor ordering of messages
- More messages than can be delivered

So you've got your problems and it's time for solutions.

## Poor Matching of Message and Recipient



## Outdated Messages

You think about it for a while and realize that there's only two kinds of outdated messages. Some need cancelled while the others just need updated. When an event happens like a parade through town, this message becomes outdated at a certain time and then it can be discarded. That's not so tough, you can mark the envelope with instructions of when to discard it.




This post is in-progress! Thanks for visiting.
