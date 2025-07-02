import type { BasicFieldInterfaceComponent } from "../../types/fields/basicField";
import type { save, load } from "../../types/wrapper";

export class BasicWrapper {
  //item that need to be loaded
  protected loadMap: Map<string, Object>;
  constructor(childrens: Array<BasicFieldInterfaceComponent>) {
    this.loadMap = new Map();
    this.parseChildrens(childrens);
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
    ) as BasicFieldInterfaceComponent[]
    return elementToLoad;
  }

  set setLoadMap(loadItem: load.LoadType) {
    this.loadMap.set(loadItem.id, loadItem.value);
  }

  parseChildrens(childrens: Array<BasicFieldInterfaceComponent>) {
    childrens.forEach((children) => {
      this.setLoadMap = {
        id: children.id,
        value: { text: children.text, type: children.type },
      };
    });
  }
}

export class SaveWrapper extends BasicWrapper {
  //item that need to be send to server for persistant save
  protected saveMap: Map<string, string>;
  constructor(childrens: Array<BasicFieldInterfaceComponent>) {
    super(childrens);
    this.saveMap = new Map();
  }

  get getSaveMap() {
    return this.saveMap;
  }

  set setSaveMap(saveItem: save.SaveType) {
    this.saveMap.set(saveItem.id, saveItem.value);
  }
}
