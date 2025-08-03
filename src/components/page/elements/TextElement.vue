<template>
    <p :id="conf?.id" class="helithrePageText">{{ conf?.text }}</p>
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