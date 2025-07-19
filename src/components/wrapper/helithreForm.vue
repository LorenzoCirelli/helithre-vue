<template>
    <form-element @formChange="formChangeEventHandler" :name="name">
        <div v-for="children, key in derivatedChildrens?.getLoadArray" :key="key">
            <component :is="componentToRender(children.type)" :conf="children" :response="derivatedChildrens?.responseForId(children.id)">
            </component>
        </div>

    </form-element>
</template>

<script lang="ts" setup>

////////////////////////////////////////////////////////////////////////////
//////// This page create the form and manage operations on it /////////////
///////////////////////////////////////////////////////////////////////////

import { type PropType } from 'vue'
import { validatedResult } from '../../composable/utils'
import { SaveWrapper } from '../../composable/wrapper/basicWrapper'
import { componentsMap } from '../../composable/form/formComponents'
import formElement from '../form/formElement.vue'

const props = defineProps({
    derivatedChildrens: {
        type: Object as PropType<SaveWrapper>,
        required: true
    },
    name: { type: String, required: false, default: '' },
})
const derivatedChildrens = props.derivatedChildrens;

//define emits
const emit = defineEmits(['submitEvent']);

//validate component render
const componentToRender = (type: string | undefined) => {
    if (type == undefined) {
        throw new Error("Undefined type for component type is not accepted");
    }
    const component = componentsMap.get(validatedResult(type))
    if (component == undefined) {
        throw new Error("The required component cannot be render, because is not in the map");
    }
    return component
}

//read form edit
const formChangeEventHandler = (formData: FormData) => {
    derivatedChildrens?.clearSaved();
    formData.forEach((value, key) => {
        const formChangeValue = { id: key, value: String(value) };
        if (derivatedChildrens?.autoSetItem(formChangeValue.id, formChangeValue.value)) {
            derivatedChildrens.setResponsesMap = { id: formChangeValue.id, value: formChangeValue.value };
        }
    });
    try {
        emit('submitEvent', validatedResult(derivatedChildrens?.createResultToEmit()))
    } catch (e) {
        console.error(`Error genereting event action, open an issue on https://github.com/LorenzoCirelli/helithre-vue/issues. ${e}`);
    }
}
</script>
