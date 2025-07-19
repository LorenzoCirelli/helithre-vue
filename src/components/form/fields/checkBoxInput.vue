<template>
    <label :for="BasicInputObj.id">{{ BasicInputObj.text }}</label>
    <input :type="BasicInputObj.type" v-model="serverResponse" :id="BasicInputObj.id">
    <input type="hidden" :name="BasicInputObj.id" v-model="serverResponse">
</template>
<script setup lang="ts">
import { ref, type PropType } from 'vue';
import { BasicInput } from '../../../composable/inputUtil';
import type { BasicFieldInterfaceComponent } from '../../../types/fields/basicField';

const props = defineProps({
    conf: {
        type: Object as PropType<BasicFieldInterfaceComponent>,
        required: true,
        default: () => ({
            text: undefined,
            id: undefined,
        }),
    },
    response: {
        type: String,
        required: false,
        default: '',
    },
})

//retriving information for a basic input
const BasicInputObj = new BasicInput(props.conf?.text, props.conf?.id, props.conf?.type)


const serverResponse = ref(false)
if (props.response == "true") {
    serverResponse.value = true
}
</script>