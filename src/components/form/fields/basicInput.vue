<template>
    <label :for="BasicInputObj.id">{{ BasicInputObj.text }}</label>
    <input :type="BasicInputObj.type" :id="BasicInputObj.id" :name="BasicInputObj.id">
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import { BasicInput } from '../../../composable/inputUtil';
import type { BasicFieldInterfaceComponent } from '../../../types/fields/basicField';

const props = defineProps({
    conf: {
        type: Object as PropType<BasicFieldInterfaceComponent>
    }
})

//retriving information for a basic input
const BasicInputObj = new BasicInput(props.conf?.text, props.conf?.id, props.conf?.type)

</script>