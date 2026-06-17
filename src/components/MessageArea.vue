<script setup lang="ts">
import { useChatStore } from '@/stores/chatStore';
import MessageBubble from './MessageBubble.vue';

const chatStore = useChatStore()


</script>
<template>
    <div style="padding: 1rem; display: flex; flex-direction: column;">
        <MessageBubble v-for="msg in chatStore.messageList" :key="msg.id" :message="msg" />
    </div>
</template>