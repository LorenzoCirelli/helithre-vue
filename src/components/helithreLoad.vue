<template>
  <component @submitEvent="emitEvent"
    :is="wrapperInUse.compType"
    :derivatedChildrens="wrapperInUse.compProps"
    :name="helithreJson.name"
  />
</template>

<script lang="ts" setup>
import { type Component } from 'vue';
import type { FormHelitreJSON } from '../types/helitreJSON';
import { BasicWrapperTypeEnum } from '../types/wrapper';
import { BasicWrapper, SaveWrapper } from '../composable/wrapper/basicWrapper';
import { wrapper } from '../index';
import type { BaseResponse } from '../types/responses/baseResponse';

const props = defineProps<{
  helithreJson: FormHelitreJSON
}>();

const wrapperInUse: {
  compType: Component,
  compProps: SaveWrapper | BasicWrapper | null
  compResponses: Array<BaseResponse> | null
} = {
  compType: wrapper.HelithrePage,
  compProps: null,
  compResponses: null
};

if (props.helithreJson.wrapper.trim() === BasicWrapperTypeEnum.form) {
  wrapperInUse.compProps = new SaveWrapper(props.helithreJson.childrens, props.helithreJson.responses, props.helithreJson.name);
  wrapperInUse.compType = wrapper.HelithreForm;
  wrapperInUse.compResponses = props.helithreJson.responses
} else if (props.helithreJson.wrapper.trim() === BasicWrapperTypeEnum.page) {
  wrapperInUse.compProps = new BasicWrapper(props.helithreJson.childrens, props.helithreJson.name);
  wrapperInUse.compType = wrapper.HelithrePage;
} else {
  throw new Error(`Invalid wrapper: ${props.helithreJson.wrapper}`);
}

const emit = defineEmits(['helitreEvent']);

const emitEvent = (event:Object) => {
  emit('helitreEvent', event)
}
</script>
