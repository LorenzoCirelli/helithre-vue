import type {
  BasicFieldType,
  MultipleChoisesInterface,
} from "../../types/fields/basicField";

export namespace wrapperItemOptions {
  export type loadObjType = {
    text: string;
    type: BasicFieldType ;
    choises?: null | Array<MultipleChoisesInterface>;
  };

  export interface LoadType {
    id: string;
    value: loadObjType;
  }
}


