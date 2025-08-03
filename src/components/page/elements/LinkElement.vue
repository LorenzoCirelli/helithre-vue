<template>
    <a :href="conf?.src" :id="conf?.id" class="helithrePageLink">{{ conf?.text }}</a>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { BasicPageComponent } from '../../../types/pages/confPage';

const { conf } = defineProps({
    conf: {
        type: Object as PropType<BasicPageComponent>
    }
})
</script>