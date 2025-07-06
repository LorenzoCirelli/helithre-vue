import { DefaultElement } from "../types/basic";
import {
  BasicFieldTypeEnum,
  type MultipleChoisesInterface,
} from "../types/fields/basicField";
import { validatedResult } from "./utils";

export class BasicInput extends DefaultElement {
  type: string | undefined;
  constructor(
    text: string | undefined,
    id: string | undefined,
    type: string | undefined
  ) {
    super(String(validatedResult(text)), String(validatedResult(id)));
    this.type = this.checkIfTypeIsValid(String(validatedResult(type)));
  }

  checkIfTypeIsValid(type: string): string {
    if (type in BasicFieldTypeEnum) {
      return type;
    } else {
      throw new Error(
        `Type for input was not in the accepted list, ${type} received`
      );
    }
  }
}

export class MultiInput extends BasicInput {
  choises: Array<MultipleChoisesInterface>;
  constructor(
    text: string | undefined,
    id: string | undefined,
    type: string | undefined,
    choises: Array<MultipleChoisesInterface> | null | undefined
  ) {
    super(text, id, type);
    if (choises === null) {
      throw new Error("No choises set for multiple option input");
    }
    this.choises = validatedResult(choises);
  }

  get getChoises() {
    return this.choises;
  }
}
