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
    choises: null | Array<MultipleChoisesInterface>;
  };

  export interface LoadType {
    id: string;
    value: loadObjType;
  }
}

export class BasicWrapper {
  //name of the wrapper
  protected name: string;
  //item that need to be loaded
  protected loadMap: Map<string, wrapperItemOptions.loadObjType>;
  constructor(
    childrens: Array<BasicFieldInterfaceComponent>,
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
}

export class SaveWrapper extends BasicWrapper {
  protected errorMessageOpenIssue =
    "The id of the response is null or undefined, open an issue on https://github.com/LorenzoCirelli/helitre-vue/issues";
  //item that need to be send to server for persistant save
  protected saveMap: Map<string, string>;
  protected editMap: Map<string, string>;
  protected deleteMap: Map<string, string>;
  //load response from server
  protected responsesMap: Map<string, string>;
  constructor(
    childrens: Array<BasicFieldInterfaceComponent>,
    responses: Array<BaseResponse>,
    name: string
  ) {
    super(childrens, name);
    this.responsesMap = new Map();
    if (responses != null) {
      responses.forEach((response: BaseResponse) => {
        this.setResponsesMap = response;
      });
    }

    this.saveMap = new Map();
    this.editMap = new Map();
    this.deleteMap = new Map();
  }

  get getResponsesMap() {
    return this.responsesMap;
  }

  //set of save, edit and delete
  set setSaveMap(saveItem: save.SaveType) {
    if (saveItem.id == null || saveItem.id == undefined) {
      throw new Error(this.errorMessageOpenIssue);
    }
    this.saveMap.set(saveItem.id, saveItem.value);
  }

  set setEditMap(saveItem: save.SaveType) {
    if (saveItem.id == null || saveItem.id == undefined) {
      throw new Error(this.errorMessageOpenIssue);
    }
    this.editMap.set(saveItem.id, saveItem.value);
  }

  set setDeleteMap(saveItem: save.SaveType) {
    if (saveItem.id == null || saveItem.id == undefined) {
      throw new Error(this.errorMessageOpenIssue);
    }
    this.deleteMap.set(saveItem.id, saveItem.value);
  }

  //get of save, edit and delete

  get getSaveMap() {
    return this.saveMap;
  }

  get getEditMap() {
    return this.editMap;
  }

  get getDeleteMap() {
    return this.deleteMap;
  }

  responseForId(id: string) {
    const resForId = this.responsesMap.get(id);
    return resForId;
  }

  autoSetItem(id: string, value: string): boolean {
    const response = this.responseForId(id);
    if (response == undefined) {
      //save item map
      if (value.length > 0) {
        this.setSaveMap = { id: id, value: value };
        return true;
      }
      return false;
    } else if (response != undefined && response != value && value != "") {
      //edit item map
      this.setEditMap = { id: id, value: value };
      return true;
    } else if (response != undefined && response != value && value == "") {
      //delete item map
      this.setDeleteMap = { id: id, value: value };
      return true;
    }
    return false;
  }

  set setResponsesMap(response: BaseResponse) {
    if (response.value.length > 0) {
      this.responsesMap.set(response.id, response.value);
    } else {
      this.responsesMap.delete(response.id);
    }
  }

  clearSaved() {
    this.saveMap = new Map();
  }

  createResultToEmit() {
    const objToEmit = new ClassToEmitSaveWrapper(
      this.getSaveMap,
      this.getEditMap,
      this.deleteMap,
      this.name
    );
    return objToEmit.getObjToEmit;
  }
}
