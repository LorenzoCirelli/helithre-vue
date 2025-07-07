import { defineAsyncComponent, defineComponent, h, type PropType } from "vue";
const basicInput = defineAsyncComponent(() => import("./basicInput.vue"));
import type { BasicFieldInterfaceComponent } from "../../../types/fields/basicField";
import { BasicFieldTypeEnum } from "../../../types/fields/basicField";
import { validatedResult } from "../../../composable/utils";
import selectInput from "./selectInput.vue";
import checkBoxInput from "./checkBoxInput.vue";
//default config
const baseObjConf = {
  name: "textInput",
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
    },
  },
};

function createBasicInputComponent(type: string) {
  return defineComponent({
    ...baseObjConf,
    setup(props) {
      return () =>
        h(basicInput, {
          response: props.response,
          conf: {
            ...props.conf,
           type: validatedResult(type),
          },
        });
    },
  });
}
const textInput = createBasicInputComponent(BasicFieldTypeEnum.text);
const numberInput = createBasicInputComponent(BasicFieldTypeEnum.number);
const dateInput = createBasicInputComponent(BasicFieldTypeEnum.date);
const colorInput = createBasicInputComponent(BasicFieldTypeEnum.color);
const datetimeLocalInput = createBasicInputComponent(BasicFieldTypeEnum.datetimeLocal);
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

export { textInput, numberInput, dateInput, colorInput, datetimeLocalInput, emailInput, fileInput, hiddenInput, imageInput, monthInput,passwordInput, rangeInput, resetInput, searchInput, telInput, timeInput, urlInput, weekInput, selectInput, checkBoxInput};
