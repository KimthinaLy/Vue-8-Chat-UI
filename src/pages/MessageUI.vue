<script setup lang="ts">
import ChatUIHeader from '@/components/ChatUIHeader.vue';
import MessageArea from '@/components/MessageArea.vue';
import InputBar from '@/components/InputBar.vue';

</script>
<template>
    <div
        style="display: flex; flex-direction: column; width: 80%; max-width: 500px; min-width: 300px;  background-color: azure;">
        <ChatUIHeader />
        <MessageArea />
        <InputBar />
    </div>
</template>