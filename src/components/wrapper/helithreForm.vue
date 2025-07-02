<template>
    <form-element>
        <component :is="componentsMap.get(validatedResult(children.type))" :conf="children"
            v-for="children, key in childrens?.getLoadArray" :key="key"></component>
    </form-element>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
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
console.log(componentsMap)
document.title = validatedResult(props.name)
</script>
