<template>
    <PageElement>
        <span v-for="pageElement, key in wrapper?.getLoadArray" :key="key">
            <component :is="componentToRender(pageElement.type)" :conf="pageElement">
            </component>
        </span>
    </PageElement>
</template>

<script lang="ts" setup>

////////////////////////////////////////////////////////////////////////////
//////// This page create the page and manage operations on it /////////////
///////////////////////////////////////////////////////////////////////////

import { pageComponentsMap } from '../../composable/page/pageComponents';
import { validatedResult } from '../../composable/utils';
import { PageWrapper } from '../../composable/wrapper/page/pageWrapper';
import PageElement from '../page/PageElement.vue';
const { wrapper } = defineProps<{ wrapper: PageWrapper }>()
const emit = defineEmits(['submitEvent'])

//validate component render
const componentToRender = (type: string | undefined) => {
    if (type == undefined) {
        throw new Error("Undefined type for component type is not accepted");
    }
    const component = pageComponentsMap.get(validatedResult(type))
    if (component == undefined) {
        throw new Error("The required component cannot be render, because is not in the map");
    }
    return component
}


</script>
