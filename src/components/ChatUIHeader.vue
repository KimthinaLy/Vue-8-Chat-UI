<script setup lang="ts">
import { useChatStore } from '@/stores/chatStore';

const chatStore = useChatStore()
</script>
<template>
    <h2 style="margin-bottom: 0;">Header will display here</h2>
    <Transition name="fade">
        <p style="font-size: 16px; color: gray; margin: 0;">{{ chatStore.isTyping ? "Typing..." : "Online" }}</p>
    </Transition>
</template>
<style>
.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 1s ease;
}

.fade-enter-to {
    opacity: 1;
}

.fade-leave-from {
    opacity: 0;
}

.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-leave-to {
    opacity: 1;
}
</style>