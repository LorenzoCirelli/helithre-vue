import { defineAsyncComponent } from "vue";
import * as fields from "./fields/fields";
const formElement = defineAsyncComponent(() => import("./formElement.vue"));
export { fields };
export { formElement };
