<template>
    <form-element @formChange="formChangeEventHandler">
        <div v-for="children, key in derivatedChildrens?.getLoadArray" :key="key">
            <component :is="componentsMap.get(validatedResult(children.type))" :conf="children"
                :response="derivatedChildrens?.responseForId(children.id)">
            </component>
        </div>

    </form-element>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue'
import { validatedResult } from '../../composable/utils'
import { SaveWrapper } from '../../composable/wrapper/basicWrapper'
import { componentsMap } from '../../composable/form/formComponents'
import formElement from '../form/formElement.vue'

const props = defineProps({
    derivatedChildrens: {
        type: Object as PropType<SaveWrapper>
    },
    name: { type: String },
})
const derivatedChildrens = props.derivatedChildrens;

const emit = defineEmits(['submitEvent']);
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
        console.error(`Error genereting event action, open an issue on https://github.com/LorenzoCirelli/helitre-vue/issues. ${e}`);
    }
}
</script>
