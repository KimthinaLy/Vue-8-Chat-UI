<script setup lang="ts">
import { useChatStore } from '@/stores/chatStore';
import MessageBubble from './MessageBubble.vue';
import { ref, watch, nextTick } from 'vue'

const chatStore = useChatStore()
const container = ref<HTMLElement | null>(null)



watch(chatStore.messageList, async () => {

    await nextTick()  //wait until vue finish updating dom
    if (container.value) {
        container.value.scrollTop = container.value?.scrollHeight
    }
}, { deep: true, immediate: true })
</script>
<template>
    <div ref="container" style="padding: 1rem; height: 80vh; overflow-y: auto; display: flex; flex-direction: column;">
        <TransitionGroup tag="div" style="padding: 1rem; display: flex; flex-direction: column;">
            <MessageBubble v-for="msg in chatStore.messageList" :key="msg.id" :message="msg" />
        </TransitionGroup>
        <Transition name="fade">
            <p style="font-size: 16px; padding: 1rem; color: gray; margin: 0;" v-if="chatStore.isTyping">Typing...</p>
        </Transition>
    </div>
</template>
<style scoped>
.v-enter-from {
    opacity: 0;
}

.v-enter-active {
    transition: opacity 1s ease;
}

.v-enter-to {
    opacity: 1;
}

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