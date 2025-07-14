<template>
  <component @submitEvent="emitEvent"
    :is="wrapperInUse.compType"
    :derivatedChildrens="wrapperInUse.compProps"
    :name="helithreJson.name"
  />
</template>

<script lang="ts" setup>
/*
 * helithre-vue - a library written in Vue.js
 * Copyright (C) 2025 Lorenzo Cirelli
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

import { type Component } from 'vue';
import type { FormHelitreJSON } from '../types/helitreJSON';
import { BasicWrapperTypeEnum } from '../types/wrapper';
import { BasicWrapper, SaveWrapper } from '../composable/wrapper/basicWrapper';
import type { BaseResponse } from '../types/responses/baseResponse';
import { HelithreForm, HelithrePage } from './wrapper/wrapper';

const props = defineProps<{
  helithreJson: FormHelitreJSON
}>();

const wrapperInUse: {
  compType: Component,
  compProps: SaveWrapper | BasicWrapper | null
  compResponses: Array<BaseResponse> | null
} = {
  compType: HelithrePage,
  compProps: null,
  compResponses: null
};

if (props.helithreJson.wrapper.trim() === BasicWrapperTypeEnum.form) {
  wrapperInUse.compProps = new SaveWrapper(props.helithreJson.childrens, props.helithreJson.responses, props.helithreJson.name);
  wrapperInUse.compType = HelithreForm;
  wrapperInUse.compResponses = props.helithreJson.responses
} else if (props.helithreJson.wrapper.trim() === BasicWrapperTypeEnum.page) {
  wrapperInUse.compProps = new BasicWrapper(props.helithreJson.childrens, props.helithreJson.name);
  wrapperInUse.compType = HelithrePage;
} else {
  throw new Error(`Invalid wrapper: ${props.helithreJson.wrapper}`);
}
const emit = defineEmits(['helitreEvent']);

const emitEvent = (event:Object) => {
  emit('helitreEvent', event)
}
</script>
