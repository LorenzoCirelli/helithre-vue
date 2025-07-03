<template>
  <component
    :is="wrapperInUse.compType"
    :childrens="wrapperInUse.compProps"
    :name="helithreJson.name"
  />
</template>

<script lang="ts" setup>
import { type Component } from 'vue';
import type { FormHelitreJSON } from '../types/helitreJSON';
import { BasicWrapperTypeEnum } from '../types/wrapper';
import { BasicWrapper, SaveWrapper } from '../composable/wrapper/basicWrapper';
import { wrapper } from '../index';

const props = defineProps<{
  helithreJson: FormHelitreJSON
}>();

const wrapperInUse: {
  compType: Component,
  compProps: SaveWrapper | BasicWrapper | null
} = {
  compType: wrapper.HelithrePage,
  compProps: null
};

if (props.helithreJson.wrapper.trim() === BasicWrapperTypeEnum.form) {
  wrapperInUse.compProps = new SaveWrapper(props.helithreJson.childrens);
  wrapperInUse.compType = wrapper.HelithreForm;
} else if (props.helithreJson.wrapper.trim() === BasicWrapperTypeEnum.page) {
  wrapperInUse.compProps = new BasicWrapper(props.helithreJson.childrens);
  wrapperInUse.compType = wrapper.HelithrePage;
} else {
  throw new Error(`Invalid wrapper: ${props.helithreJson.wrapper}`);
}
</script>
