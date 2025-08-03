<template>
    <video controls :id="conf?.id" class="helithrePageVideo">
        <source :src="videoUrl" type="video/mp4">
        Error: HTML video element is not suppoter by your browser, please try to update!
    </video>
</template>
<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { BasicPageComponent } from '../../../types/pages/confPage';

const { conf } = defineProps({
    conf: {
        type: Object as PropType<BasicPageComponent>
    }
})

const videoUrl = computed(()=>{
    if (conf?.src == null || conf?.src == undefined || conf?.src?.length == 0) {
        throw new Error("The defined video url is not well formed");
    }
    return conf?.src
})
</script>