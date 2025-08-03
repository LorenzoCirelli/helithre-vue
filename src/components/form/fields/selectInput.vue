<template>
    <label :for="selectInpObj.id">{{ selectInpObj.text }}</label>

    <select :name="selectInpObj.id" :id="selectInpObj.id">
        <option :value="choise.questionAnswerId" v-for="choise, key in selectInpObj.getchoices" :key="key"
            :selected="response == choise.questionAnswerId">{{ choise.text }}</option>
    </select>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue';
import type { BasicFieldInterfaceComponent } from '../../../types/fields/basicField';
import { MultiInput } from '../../../composable/inputUtil';

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

const selectInpObj = new MultiInput(props.conf?.text, props.conf?.id, props.conf?.type, props.conf?.choices);
</script>