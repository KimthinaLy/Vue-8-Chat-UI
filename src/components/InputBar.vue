<script setup lang="ts">
import { useChatStore } from '@/stores/chatStore';
import { ref } from 'vue'

const chatStore = useChatStore()
const content = ref('')

function sendUserMessage() {
    if (!content.value.trim()) return
    chatStore.sendMessage(content.value)
    content.value = ''
}
</script>
<template>
    <input v-model="content" type="text" placeholder="message" @keyup.enter="sendUserMessage" />
    <button @click="sendUserMessage">send</button>
</template>