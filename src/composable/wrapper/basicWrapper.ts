import type { BasicFieldInterfaceComponent } from "../../types/fields/basicField";
import type { BaseResponse } from "../../types/responses/baseResponse";
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
    ) as BasicFieldInterfaceComponent[];
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
  //load response from server
  protected responsesMap: Map<string, string>;
  constructor(
    childrens: Array<BasicFieldInterfaceComponent>,
    responses: Array<BaseResponse>
  ) {
    super(childrens);
    this.responsesMap = new Map();
    if (responses != null) {
      responses.forEach((response: BaseResponse) => {
        this.setResponsesMap = response;
      });
    }

    this.saveMap = new Map();
  }

  get getSaveMap() {
    return this.saveMap;
  }

  set setSaveMap(saveItem: save.SaveType) {
    if (saveItem.id == null || saveItem.id == undefined) {
      throw new Error(
        "The id of the response is null or undefined, open an issue on https://github.com/LorenzoCirelli/helitre-vue/issues"
      );
    }
    if (saveItem.value.length > 0) {
      this.saveMap.set(saveItem.id, saveItem.value);
    }
  }

  get getResponsesMap() {
    return this.responsesMap;
  }

  responseForId(id: string) {
    const resForId = this.responsesMap.get(id);
    if (resForId != undefined) {
      return resForId;
    } else {
      return null
    }
  }

  set setResponsesMap(response: BaseResponse) {
    this.responsesMap.set(response.id, response.value);
  }
}
