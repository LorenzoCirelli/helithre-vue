<template>
    <form-element @formChange="formChangeEventHandler">
        <component :is="componentsMap.get(validatedResult(children.type))" :conf="children"
            :response="derivatedChildrens?.responseForId(children.id)"
            v-for="children, key in derivatedChildrens?.getLoadArray" :key="key">
        </component>
    </form-element>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue'
import { validatedResult } from '../../composable/utils'
import { SaveWrapper } from '../../composable/wrapper/basicWrapper'
import { form } from '../../index'
import { componentsMap } from '../../composable/form/formComponents'
const formElement = form.formElement;

const props = defineProps({
    derivatedChildrens: {
        type: Object as PropType<SaveWrapper>
    },
    name: { type: String },
})
const derivatedChildrens = props.derivatedChildrens;

//read form edit
const formChangeEventHandler = (formData: FormData) => {
    derivatedChildrens?.clearSaved();
    formData.forEach((value, key) => {
        const formChangeValue = { id: key, value: String(value) };
        if (derivatedChildrens && derivatedChildrens?.isItemToSave(formChangeValue.id, formChangeValue.value)) {
            derivatedChildrens.setResponsesMap = { id: formChangeValue.id, value: formChangeValue.value };
            derivatedChildrens.setSaveMap = { id: formChangeValue.id, value: formChangeValue.value };
        }
    });
    console.log(derivatedChildrens?.getResponsesMap)
    console.log(derivatedChildrens?.getSaveMap)

}
</script>
