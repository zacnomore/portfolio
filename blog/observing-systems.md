---
title: The Complicated Life of A Messenger
description: "Strategies for watching objects, events and systems without hurting yourself"
slug: strategies-for-observation
---

Imagine that you get a new job as a messenger for your local neighborhood. Every day you get a list messages to share from Charlie the news man. He's a nice guy but boy does he have a lot of messages for you to share. From 8 am to 4 pm every day you go door to door in the neighborhood to inform people of an incoming storm or a sale at the local butcher shop. People enjoy them... for the most part.

```javascript
// Don't worry how he gets his messages,
// we'll focus on delivery for now
const charlie = {
  getMessages: () => [
    `WARNING! Storm today at 10am.`,
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

There's some problems though. When you told Sal about the fun at the butcher shop he was less than interested. He's a vegetarian. Also, the rain storm at 10am ended at 11am so people were less than pleased to receive the news at 3pm. It was alright for a first day but you wonder if there's room for improvement so you sit down and think about the problems you've seen:

- Poor matching of message and recipient
- Outdated Messages

You decide to visit your boss's office after work to make some suggestions.

## Poor Matching of Message and Recipient

You've figured out that many people in your neighborhood only care about certain kinds of messages. Rather than giving them every message you can ask which topics they're interested in and give only messages under those topics. You pitch the following proposal:

```javascript
const messageTypes = {
  WEATHER: 'weather',
  SALE: 'sale'
}

// We ask Charlie to mark up the envelopes
// with the message type
const charlie = {
  getMessages: () => [
    {
      type: messageTypes.WEATHER,
      body: `WARNING! Storm today at 2pm.`
    },
    {
      type: messageTypes.SALE,
      body: `Info: The butcher has a sale on steaks!`
    }
  ]
}

class Messenger {
  // Only give the messages matching the given type
  getMessages(type) {
    return this._messages.filter(
      m => m.type === type
    );
  }
  /*...*/
}

// Our recipients now tell us what kinds
// of messages they would like
function deliverMessages (types) {
  return types.flatMap(type => you.getMessages(type));
}
```

You boss is intrigued but has some feedback for you. She points out that you're adding some cost to the department as now you and Charlie need to coordinate about what kinds of messages there are. She also notes that residents may still be ignoring the messages despite being a interested in the topic. You're slowing down to filter through them yourself but they still need to sort through them too. She says that you're introducing complexity and running an additional loop on your array without a meaningful optimization.

What a weird thing to say.

This gives you an idea though. What if residents submitted subscriptions to you so that you only visit their house when you have messages for them?

You make the following amendments:

```javascript
class SubscriptionBox {
  _subscriptions = [];
  _messageTypes = {
    WEATHER: 'weather',
    SALE: 'sale'
  }
  subscribe(residence, type) {
    const subscription = {residence,type};
    // Prevent duplicate subscriptions and
    // ones to topics we don't have yet
    if(_messageTypes[type] !== undefined &&
      !this._subscriptions.includes(subscription)) {
      this._subscriptions.push(subscription);
    }
  }

  unsubscribe(residence, type) {
    this._subscriptions.splice(
      this._subscriptions.findIndex(
        sub => sub === {residence, type}
      ), 1
    );
  }
}

```

## Outdated Messages

You think about it for a while and realize that there's only two kinds of outdated messages. Some need cancelled while the others just need updated. When an event happens like a storm, this message becomes outdated at a certain time and then it can be discarded. That's not so tough, you can mark the envelope with a specific time of when to discard it.

