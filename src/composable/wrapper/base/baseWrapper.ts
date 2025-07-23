import { BasicFieldInterfaceComponent } from "../../../types/fields/basicField";
import { BasicPageComponent } from "../../../types/pages/confPage";
import { validatedResult } from "../../utils";
import { wrapperItemOptions } from "../basicWrapper";

export class BasicWrapper {
  //name of the wrapper
  protected name: string;
  //item that need to be loaded
  protected loadMap: Map<string, wrapperItemOptions.loadObjType>;
  constructor(
    childrens: Array<BasicFieldInterfaceComponent | BasicPageComponent>,
    name: string | undefined
  ) {
    this.loadMap = new Map();
    this.parseChildrens(childrens);
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

  set setLoadMap(loadItem: wrapperItemOptions.LoadType) {
    this.loadMap.set(loadItem.id, loadItem.value);
  }

  parseChildrens(childrens: Array<BasicFieldInterfaceComponent>) {
    childrens.forEach((children) => {
      this.setLoadMap = {
        id: children.id,
        value: {
          text: children.text,
          type: children.type!,
          choises:
            children?.choises?.length != undefined ? children.choises : null,
        },
      };
    });
  }


  //added for page wrapper edit
  get getName() {
    return this.name
  }
}