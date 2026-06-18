<script setup lang="ts">
import { useChatStore } from '@/stores/chatStore';

const chatStore = useChatStore()
</script>
<template>
    <h2 style="margin-bottom: 0;">Header will display here</h2>
    <Transition name="fade" mode="out-in">
        <p v-if="chatStore.isTyping" key="typing" style="font-size: 16px; color: gray; margin: 0;">Typing...</p>
        <p v-else key="online" style="font-size: 16px; color: gray; margin: 0;">Online</p>
    </Transition>
</template>
<style>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>