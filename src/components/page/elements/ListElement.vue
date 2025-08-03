<template>
    <TextElement :conf="textElementConf"></TextElement>
    <ul>
        <li v-for="value in conf?.elements" :key="value.id">{{ value.value }}</li>
    </ul>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { BasicPageComponent } from '../../../types/pages/confPage';
import TextElement from './TextElement.vue';

const { conf } = defineProps({
    conf: {
        type: Object as PropType<BasicPageComponent>,
        required: true
    }
})

const textElementConf = computed(() => {
    if (conf.text.length == 0 || conf.text == undefined || conf.text == null) {
        conf.text = ''
    }
    if (conf.id != null) {
        return { id: conf?.id, text: conf?.text } as BasicPageComponent
    } else {
        throw new Error("Id cannot be null");
    }

})
</script>