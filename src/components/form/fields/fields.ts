import { defineAsyncComponent, defineComponent, h, type PropType } from "vue";
const basicInput = defineAsyncComponent(() => import("./basicInput.vue"));
import type { BasicFieldInterfaceComponent } from "../../../types/fields/basicField";
import { BasicFieldTypeEnum } from "../../../types/fields/basicField";

const textInput = defineComponent({
  name: "textInput",
  props: {
  conf: {
    type: Object as PropType<BasicFieldInterfaceComponent>,
    required: true,
    default: () => ({
      text: undefined,
      id: undefined
    }),
  },
},

  setup(props) {
    return () => h(basicInput, { conf: { ...props.conf, type: BasicFieldTypeEnum.text} });
  },
});

const numberInput = defineComponent({
  name: "textInput",
  props: {
  conf: {
    type: Object as PropType<BasicFieldInterfaceComponent>,
    required: true,
    default: () => ({
      text: undefined,
      id: undefined
    }),
  },
},

  setup(props) {
    return () => h(basicInput, { conf: { ...props.conf, type:BasicFieldTypeEnum.number} });
  },
});

const dateInput = defineComponent({
  name: "textInput",
  props: {
  conf: {
    type: Object as PropType<BasicFieldInterfaceComponent>,
    required: true,
    default: () => ({
      text: undefined,
      id: undefined
    }),
  },
},

  setup(props) {
    return () => h(basicInput, { conf: { ...props.conf, type:BasicFieldTypeEnum.date} });
  },
});

export { textInput, numberInput, dateInput };
