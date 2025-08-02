import { BasicFieldInterfaceComponent } from "../../../types/fields/basicField";
import { validatedResult } from "../../utils";
import { wrapperItemOptions } from "../basicWrapper";

export class BasicWrapper {
  //name of the wrapper
  protected name: string;
  //item that need to be loaded
  protected loadMap: Map<string, wrapperItemOptions.loadObjTypeField | wrapperItemOptions.loadObjTypePage>;
  constructor(name: string | undefined) {
    this.loadMap = new Map();
    this.name = validatedResult(name);
  }

  get getLoadMap() {
    return this.loadMap;
  }

  get getLoadArray() {
    const elementToLoad: BasicFieldInterfaceComponent[] = Array.from(
      this.loadMap,
      ([key, value]) => ({
        id: key,
        ...value,
      })
    ) as BasicFieldInterfaceComponent[];
    return elementToLoad;
  }

  get getName() {
    return this.name;
  }
}
