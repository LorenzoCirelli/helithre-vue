import type { BasicFieldInterfaceComponent } from "./fields/basicField";
import type { BasicWrapperType } from "./wrapper";


export interface BasicHelitreJSON {
    name: string,
    wrapper: BasicWrapperType
}

export interface FormHelitreJSON extends BasicHelitreJSON {
    childrens: Array<BasicFieldInterfaceComponent>
}