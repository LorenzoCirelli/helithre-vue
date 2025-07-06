<template>
    <label :for="selectInpObj.id">{{ selectInpObj.text }}</label>

    <select :name="selectInpObj.id" :id="selectInpObj.id">
        <option :value="choise.questionAnswareId" v-for="choise, key in selectInpObj.getChoises" :key="key" :selected="response == choise.questionAnswareId">{{ choise.text }}</option>
    </select>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue';
import type { BasicFieldInterfaceComponent } from '../../../types/fields/basicField';
import { MultiInput } from '../../../composable/inputUtil';

const props = defineProps({
    conf: {
        type: Object as PropType<BasicFieldInterfaceComponent>
    },
    response: {
        type: String,
        default: null
    }
})

const selectInpObj = new MultiInput(props.conf?.text, props.conf?.id, props.conf?.type, props.conf?.choises);
</script>