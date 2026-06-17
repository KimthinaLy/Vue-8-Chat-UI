<script setup lang="ts">
import ChatUIHeader from '@/components/ChatUIHeader.vue';
import MessageArea from '@/components/MessageArea.vue';
import InputBar from '@/components/InputBar.vue';

</script>
<template>
    <div style="display: flex; flex-direction: column;">
        <ChatUIHeader />
        <MessageArea />
        <InputBar />
    </div>
</template>