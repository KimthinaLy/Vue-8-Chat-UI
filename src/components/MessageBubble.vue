<script setup lang="ts">
import type { Message } from '@/types/message';

const props = defineProps<{
    message: Message;
}>();
</script>
<template>
    <div :style="{
        alignSelf: props.message.sender === 'user' ? 'flex-end' : 'flex-start',
        backgroundColor: props.message.sender === 'user' ? '#DCF8C6' : '#FFFFFF',
        padding: '0.5rem 1rem',
        borderRadius: '1rem',
        marginBottom: '0.5rem',
        maxWidth: '70%'
    }">
        <p style="margin: 0;">{{ props.message.content }}</p>
        <p style="margin: 0;">{{ props.message.timestamp }}</p>
        <p style="margin: 0;">{{ props.message.status }}</p>
    </div>
</template>