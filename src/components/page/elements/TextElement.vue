<template>
    <p :id="id" class="helithrePageText">{{ text }}</p>
</template>
<script lang="ts" setup>
const { text, id } = defineProps({
    text: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})
</script>