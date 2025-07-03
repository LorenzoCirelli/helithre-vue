<template>
    <form-element @formChange="formChangeEventHandler">
        <component :is="componentsMap.get(validatedResult(children.type))" :conf="children"
            v-for="children, key in childrens?.getLoadArray" :key="key"
></component>
    </form-element>
</template>

<script lang="ts" setup>
import { onMounted, type PropType } from 'vue'
import { validatedResult } from '../../composable/utils'
import { BasicWrapper, SaveWrapper } from '../../composable/wrapper/basicWrapper'
import { form } from '../../index'
import { componentsMap } from '../../composable/form/formComponents'
const formElement = form.formElement

const props = defineProps({
    childrens: {
        type: Object as PropType<SaveWrapper | BasicWrapper>
    },
    name: { type: String }
})

onMounted(() => {
  document.title = validatedResult(props.name)
})

//read form edit
const formChangeEventHandler = (e) => {
    console.log(e)
}
</script>
