<template>
    <form-element @formChange="formChangeEventHandler" :name="wrapper.getName">
        <div v-for="children, key in wrapper?.getLoadArray" :key="key">
            <component :is="componentToRender(children.type)" :conf="children"
                :response="wrapper?.responseForId(children.id)">
            </component>
        </div>

    </form-element>
</template>

<script lang="ts" setup>

////////////////////////////////////////////////////////////////////////////
//////// This page create the form and manage operations on it ////////////
///////////////////////////////////////////////////////////////////////////

import { validatedResult } from '../../composable/utils'
import { componentsMap } from '../../composable/form/formComponents'
import formElement from '../form/FormElement.vue'
import { FormWrapper } from '../../composable/wrapper/form/formWrapper';

const { wrapper } = defineProps<{ wrapper: FormWrapper }>();

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
    wrapper?.clearSaved();
    formData.forEach((value, key) => {
        const formChangeValue = { id: key, value: String(value) };
        if (wrapper?.autoSetItem(formChangeValue.id, formChangeValue.value)) {
            wrapper.setResponsesMap = { id: formChangeValue.id, value: formChangeValue.value };
        }
    });
    try {
        emit('submitEvent', validatedResult(wrapper?.createResultToEmit()))
    } catch (e) {
        console.error(`Error genereting event action, open an issue on https://github.com/LorenzoCirelli/helithre-vue/issues. ${e}`);
    }
}
</script>
