// Manage export of components
import { defineAsyncComponent } from 'vue';
import * as form from './components/form/form'
import * as wrapper from './components/wrapper/wrapper'
const helithreLoad = defineAsyncComponent(() => import("./components/helithreLoad.vue"));

export {form}
export {wrapper}
export {helithreLoad}