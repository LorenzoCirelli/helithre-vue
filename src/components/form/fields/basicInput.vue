<template>
    <label :for="BasicInputObj.id">{{ BasicInputObj.text }}</label>
    <input :type="BasicInputObj.type" :id="BasicInputObj.id">
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import { DefaultElement } from '../../../types/basic.ts'
import type { BasicFieldInterfaceComponent } from '../../../types/fields/basicField';
import { BasicFieldTypeEnum } from '../../../types/fields/basicField';
import { validatedResult } from '../../../composable/utils.ts';
const props = defineProps({
    conf: {
        type: Object as PropType<BasicFieldInterfaceComponent>
    }
})

class BasicInput extends DefaultElement {
    type: string | undefined
    constructor(text: string | undefined, id: string | undefined, type: string | undefined) {
        super(String(validatedResult(text)), String(validatedResult(id)));
        this.type = this.checkIfTypeIsValid(String(validatedResult(type)))
    }

    checkIfTypeIsValid(type: string): string {
        if (type in BasicFieldTypeEnum) {
            return type;
        } else {
            throw new Error(`Type for input was not in the accepted list, ${type} received`);
        }
    }

}
//retriving information for a basic input
const BasicInputObj = new BasicInput(props.conf?.text, props.conf?.id, props.conf?.type)


</script>