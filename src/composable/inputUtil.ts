import { DefaultElement } from "../types/basic";
import {
  BasicFieldTypeEnum,
  type MultiplechoicesInterface,
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
  choices: Array<MultiplechoicesInterface>;
  constructor(
    text: string | undefined,
    id: string | undefined,
    type: string | undefined,
    choices: Array<MultiplechoicesInterface> | null | undefined
  ) {
    super(text, id, type);
    if (choices === null) {
      throw new Error("No choices set for multiple option input");
    }
    this.choices = validatedResult(choices);
  }

  get getchoices() {
    return this.choices;
  }
}
