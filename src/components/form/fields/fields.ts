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

import { defineAsyncComponent, defineComponent, h, type PropType } from "vue";
const basicInput = defineAsyncComponent(() => import("./basicInput.vue"));
import type { BasicFieldInterfaceComponent } from "../../../types/fields/basicField";
import { BasicFieldTypeEnum } from "../../../types/fields/basicField";
import { validatedResult } from "../../../composable/utils";
import checkBoxInput from "./checkBoxInput.vue";
import selectInput from "./selectInput.vue";
//default config
const baseObjConf = {
  name: "BasicInput",
  props: {
    conf: {
      type: Object as PropType<BasicFieldInterfaceComponent>,
      required: true,
      default: () => ({
        text: undefined,
        id: undefined,
      }),
    },
    response: {
      type: String,
      required: false,
      default: "",
    },
  },
};

function createBasicInputComponent(type: string) {
  return defineComponent({
    name: baseObjConf.name,
    props: baseObjConf.props,
    setup(props) {
      return () =>
        h(basicInput, {
          response: props.response,
          conf: { ...props.conf, type: validatedResult(type) },
        });
    },
  });
}


const textInput = createBasicInputComponent(BasicFieldTypeEnum.text);
const numberInput = createBasicInputComponent(BasicFieldTypeEnum.number);
const dateInput = createBasicInputComponent(BasicFieldTypeEnum.date);
const colorInput = createBasicInputComponent(BasicFieldTypeEnum.color);
const datetimeLocalInput = createBasicInputComponent(
  BasicFieldTypeEnum.datetimeLocal
);
const emailInput = createBasicInputComponent(BasicFieldTypeEnum.email);
const fileInput = createBasicInputComponent(BasicFieldTypeEnum.file);
const hiddenInput = createBasicInputComponent(BasicFieldTypeEnum.hidden);
const imageInput = createBasicInputComponent(BasicFieldTypeEnum.image);
const monthInput = createBasicInputComponent(BasicFieldTypeEnum.month);
const passwordInput = createBasicInputComponent(BasicFieldTypeEnum.password);
const rangeInput = createBasicInputComponent(BasicFieldTypeEnum.range);
const resetInput = createBasicInputComponent(BasicFieldTypeEnum.reset);
const searchInput = createBasicInputComponent(BasicFieldTypeEnum.search);
const telInput = createBasicInputComponent(BasicFieldTypeEnum.tel);
const timeInput = createBasicInputComponent(BasicFieldTypeEnum.time);
const urlInput = createBasicInputComponent(BasicFieldTypeEnum.url);
const weekInput = createBasicInputComponent(BasicFieldTypeEnum.week);

export {
  textInput,
  numberInput,
  dateInput,
  colorInput,
  datetimeLocalInput,
  emailInput,
  fileInput,
  hiddenInput,
  imageInput,
  monthInput,
  passwordInput,
  rangeInput,
  resetInput,
  searchInput,
  telInput,
  timeInput,
  urlInput,
  weekInput,
  checkBoxInput,
  selectInput,
};
