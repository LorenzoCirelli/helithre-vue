import { DefaultElement } from "../types/basic";
import { BasicFieldTypeEnum } from "../types/fields/basicField";
import { validatedResult } from "./utils";

export class BasicInput extends DefaultElement {
    type: string | undefined
    constructor(text: string | undefined, id: string | undefined, type: string | undefined) {
        super(String(validatedResult(text)), String(validatedResult(id)));
        this.type = this.checkIfTypeIsValid(String(validatedResult(type)))
    }

    checkIfTypeIsValid(type: string): string {
        if (type in BasicFieldTypeEnum) {
            return type;
        } else {
            throw new Error(`Type for input was not in the accepted list, ${type} received`);
        }
    }

}