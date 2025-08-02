import { BasicFieldInterfaceComponent } from "../../../types/fields/basicField";
import { BaseResponse } from "../../../types/responses/baseResponse";
import { save } from "../../../types/wrapper";
import { BasicWrapper } from "../base/baseWrapper";
import { wrapperItemOptions } from "../basicWrapper";
import { ClassToEmitSaveWrapper } from "../emit/emitObject";

export class FormWrapper extends BasicWrapper {
  protected errorMessageOpenIssue =
    "The id of the response is null or undefined, open an issue on https://github.com/LorenzoCirelli/helithre-vue/issues";
  //item that need to be send to server for persistant save
  protected saveMap: Map<string, string>;
  protected editMap: Map<string, string>;
  protected deleteMap: Map<string, string>;
  //load response from server
  protected responsesMap: Map<string, string>;

  constructor(
    childrens: Array<BasicFieldInterfaceComponent>,
    responses: Array<BaseResponse> | undefined,
    name: string
  ) {
    super(name);
    //Parse childrens for the form
    this.parseChildrens(childrens);
    this.responsesMap = new Map();
    if (responses != null && responses != undefined) {
      responses.forEach((response: BaseResponse) => {
        this.setResponsesMap = response;
      });
    }

    this.saveMap = new Map();
    this.editMap = new Map();
    this.deleteMap = new Map();
  }

  getComponent() {
    return "form";
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

  set setLoadMap(loadItem: wrapperItemOptions.LoadTypeField) {
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
