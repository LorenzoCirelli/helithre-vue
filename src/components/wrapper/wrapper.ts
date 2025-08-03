import { defineAsyncComponent } from "vue";
const HelithreForm = defineAsyncComponent(() => import("./HelithreForm.vue"));
const HelithrePage = defineAsyncComponent(() => import("./HelithrePage.vue"));
export { HelithreForm, HelithrePage };
