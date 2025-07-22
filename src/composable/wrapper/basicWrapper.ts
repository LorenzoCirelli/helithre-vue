import type {
  BasicFieldInterfaceComponent,
  BasicFieldType,
  MultipleChoisesInterface,
} from "../../types/fields/basicField";
import type { BaseResponse } from "../../types/responses/baseResponse";
import type { save } from "../../types/wrapper";
import { validatedResult } from "../utils";
import { ClassToEmitSaveWrapper } from "./emit/emitObject";

export namespace wrapperItemOptions {
  export type loadObjType = {
    text: string;
    type: BasicFieldType;
    choises?: null | Array<MultipleChoisesInterface>;
  };

  export interface LoadType {
    id: string;
    value: loadObjType;
  }
}


