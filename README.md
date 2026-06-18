# Chat UI

A real-time-feeling chat interface built with Vue 3 and TypeScript — created to practice optimistic UI patterns and animation by building something you see in every modern app.

---

## About

Chat UI simulates a WhatsApp/Messenger-style conversation. Messages appear instantly when sent, the window auto-scrolls to the newest message, and a typing indicator signals when the bot is about to reply.

**Why I built this:** I'm learning Vue by doing — not just reading docs. This project covers optimistic updates, list animations with `<TransitionGroup>`, DOM control with template refs, and Pinia store design in a practical context.

---

## Tech Stack

| Tool       | Version |
| ---------- | ------- |
| Vue        | 3       |
| TypeScript | 5       |
| Vite       | 5       |
| Pinia      | 2       |

---

## Setup

**Requirements:**

- Node.js 18+
- VS Code with [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension

**Install and run:**

```bash
npm install
npm run dev
```

---

## Features

- Send messages instantly — appears in the chat before the "server" responds
- Bot replies after a short delay with a simulated response
- Typing indicator in both the header and message area while the bot is composing
- Messages animate in smoothly using `<TransitionGroup>`
- Chat window auto-scrolls to the newest message on every update
- Message status — `sending` → `sent` lifecycle on each message
- Empty input guard — cannot send blank messages

---

## Key Concepts Practiced

- **Optimistic update** — user message appears immediately with status `sending`, then updates to `sent` after the bot responds, without waiting for server confirmation
- **`<TransitionGroup>`** — animates each message bubble as it enters the DOM via a `v-for` list
- **Template ref + `nextTick`** — grabs the message container DOM element directly and scrolls to the bottom after Vue finishes rendering
- **Pinia store** — single source of truth for `messageList` and `isTyping`, shared across `ChatUIHeader`, `MessageArea`, and `InputBar`
- **`isTyping` state** — toggled inside a `setTimeout` chain to coordinate the typing indicator fade-out before the bot message appears
