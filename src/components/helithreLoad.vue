<template>
  <component :is="wrapper.getComponent()"></component>
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

import { FormWrapper } from '../composable/wrapper/form/formWrapper';
import { PageWrapper } from '../composable/wrapper/page/pageWrapper';
import { BasicFieldInterfaceComponent } from '../types/fields/basicField';
import type { HelithreLoadType } from '../types/helitreJSON';
import { BasicPageComponent } from '../types/pages/confPage';
import { wrapperTypeEnum } from '../types/wrapper';

const props = defineProps<{
  helithreJson: HelithreLoadType
}>();

let wrapper: FormWrapper | PageWrapper;
//When props are imported identify if the wrapper is page or a form
(() => {
  let wrapperType: string = props?.helithreJson?.wrapper;

  if (typeof (wrapperType) != "string") {
    throw new Error("Wrapper type need to be a string");
  }
  wrapperType = wrapperType.trim();

  if (wrapperType == wrapperTypeEnum.form) {
    //filter only Form Childrens
    const formComponents = props.helithreJson.childrens.filter(
      (c): c is BasicFieldInterfaceComponent => c.type !== "div"
    );
    wrapper = new FormWrapper(formComponents, props.helithreJson.responses, props.helithreJson.name);
  } else if (wrapperType == wrapperTypeEnum.page) {
    //filter only Page Childrens
    const pageComponents = props.helithreJson.childrens.filter(
      (c): c is BasicPageComponent => c.type !== "div"
    );
    wrapper = new PageWrapper(pageComponents, props.helithreJson.name);
  } else {
    throw new Error(`Wrapper type is not accepted, only ${wrapperTypeEnum.form} and ${wrapperTypeEnum.page} are accepted`);
  }

})()


//manage emits to helithreLoad
const emit = defineEmits(['helitreEvent']);

const emitEvent = (event: unknown) => {
  emit('helitreEvent', event)
}
</script>
