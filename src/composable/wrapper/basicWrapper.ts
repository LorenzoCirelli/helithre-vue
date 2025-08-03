import type {
  BasicFieldType,
  MultiplechoicesInterface,
} from "../../types/fields/basicField";
import { BasicPageType } from "../../types/pages/pagesTypes";

export namespace wrapperItemOptions {
  export type loadObjTypeField = {
    text: string;
    type: BasicFieldType;
    choices?: null | Array<MultiplechoicesInterface>;
  };

  export type loadObjTypePage = {
    text: string;
    type: BasicPageType;
  };
  export interface LoadTypeField {
    id: string;
    value: loadObjTypeField;
  }
  export interface LoadTypePage {
    id: string;
    value: loadObjTypePage;
  }
}
