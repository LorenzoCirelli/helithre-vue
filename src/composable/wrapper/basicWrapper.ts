import type {
  BasicFieldType,
  MultipleChoisesInterface,
} from "../../types/fields/basicField";
import { BasicPageType } from "../../types/pages/pagesTypes";

export namespace wrapperItemOptions {
  export type loadObjTypeField = {
    text: string;
    type: BasicFieldType;
    choises?: null | Array<MultipleChoisesInterface>;
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
