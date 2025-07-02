<template>
    <component :is="wrapperInUse.compType"></component>
</template>
<script lang="ts" setup>
import { defineComponent, type Component, type PropType } from 'vue';
import type { FormHelitreJSON } from '../types/helitreJSON';
import { BasicWrapperTypeEnum } from '../types/wrapper';
import { BasicWrapper, SaveWrapper } from '../composable/wrapper/basicWrapper';
import { wrapper } from '../index';
const props = defineProps({
    helithreJson: {
        type: Object as PropType<FormHelitreJSON>,
        required: true
    }
})

let wrapperInUse: {
    compType: Component,
    compProps: SaveWrapper | BasicWrapper | null
}= {
    compType: defineComponent,
    compProps: null
}

//check if the wrapper type exist and create the correct object to manage it
if (props.helithreJson.wrapper.trim() == BasicWrapperTypeEnum.form) {
    wrapperInUse.compProps = new SaveWrapper(props.helithreJson.childrens);
    wrapperInUse.compType = wrapper.HelithreForm;
} else if (props.helithreJson.wrapper.trim() == BasicWrapperTypeEnum.page) {
    wrapperInUse.compProps = new BasicWrapper(props.helithreJson.childrens);
     wrapperInUse.compType = wrapper.HelithrePage;
} else {
    throw new Error(`The wrapper type is not page or form, ${props.helithreJson.wrapper.trim()} passed`);
}

</script>