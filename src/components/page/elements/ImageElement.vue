<template>
    <img :src="imgUrl" :alt="conf?.text" :title="conf?.text"></img>
</template>
<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { BasicPageComponent } from '../../../types/pages/confPage';

const { conf } = defineProps({
    conf: {
        type: Object as PropType<BasicPageComponent>
    }
})

const imgUrl = computed(()=>{
    if (conf?.src == null || conf?.src == undefined || conf?.src.length == 0) {
        throw new Error("Impossible to load image from an non well defined url");
    }
    return conf?.src
})
</script>