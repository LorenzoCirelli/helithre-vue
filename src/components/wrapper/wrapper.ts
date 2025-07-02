import { defineAsyncComponent } from "vue";
const HelithreForm = defineAsyncComponent(() => import("./helithreForm.vue"));
const HelithrePage = defineAsyncComponent(() => import("./helithrePage.vue"));
export { HelithreForm, HelithrePage };
