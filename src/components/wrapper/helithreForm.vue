<template>
    <form-element @formChange="formChangeEventHandler">
        <component :is="componentsMap.get(validatedResult(children.type))" :conf="children" :response= "derivatedChildrens?.responseForId(children.id)"
            v-for="children, key in derivatedChildrens?.getLoadArray" :key="key">
        </component>
    </form-element>
</template>

<script lang="ts" setup>
import { onMounted, type PropType } from 'vue'
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

onMounted(() => {
    document.title = validatedResult(props.name)
})

//read form edit
const formChangeEventHandler = (e: { id: string, value: string }) => {
    if (props && props.derivatedChildrens) {
        props.derivatedChildrens.setSaveMap = { id: e.id, value: e.value };
    }
    console.log(props.derivatedChildrens)
}
</script>
