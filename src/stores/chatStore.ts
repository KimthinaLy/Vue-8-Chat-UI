import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Message } from '@/types/message'

export const useChatStore = defineStore('chatStore', () => {
  let id: number = 8
  const isTyping = ref(false)
  const messageList = ref<Message[]>([
    {
      id: 1,
      sender: 'user',
      content: 'Hello!',
      timestamp: '10:30',
      status: 'sent',
    },
    {
      id: 2,
      sender: 'bot',
      content: 'Hi! How can I help you today?',
      timestamp: '10:30',
      status: 'sent',
    },
    {
      id: 3,
      sender: 'user',
      content: 'Can you explain how Pinia works?',
      timestamp: '10:31',
      status: 'read',
    },
    {
      id: 4,
      sender: 'bot',
      content: 'Sure! Pinia is the official state management library for Vue.',
      timestamp: '10:31',
      status: 'read',
    },
    {
      id: 5,
      sender: 'bot',
      content: 'It allows you to create centralized stores that can be shared across components.',
      timestamp: '10:31',
      status: 'read',
    },
    {
      id: 6,
      sender: 'user',
      content: 'Can you show me a simple example?',
      timestamp: '10:32',
      status: 'read',
    },
    {
      id: 7,
      sender: 'bot',
      content: 'Of course! Here is a basic counter store using defineStore().',
      timestamp: '10:32',
      status: 'read',
    },
    {
      id: 8,
      sender: 'user',
      content: 'Thanks!',
      timestamp: '10:33',
      status: 'sending',
    },
  ])

  function sendMessage(content: string) {
    const msgId = ++id
    messageList.value.push({
      id: msgId,
      sender: 'user',
      content: content,
      timestamp: new Date().toLocaleTimeString(),
      status: 'sending',
    })

    isTyping.value = true
    setTimeout(() => {
      messageList.value.push({
        id: ++id,
        sender: 'bot',
        content: 'I got your message!',
        timestamp: new Date().toLocaleTimeString(),
        status: 'sent',
      })
      isTyping.value = false

      const userMsg = messageList.value.find((msg) => msg.id === msgId)
      if (userMsg) userMsg.status = 'sent'
    }, 2000)
  }

  return { messageList, sendMessage, isTyping }
})
