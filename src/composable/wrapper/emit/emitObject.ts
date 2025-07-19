import { wrapperTypeEnum } from "../../../types/wrapper";

export class ClassToEmitSaveWrapper {
  protected save: Map<string, string>;
  protected edit: Map<string, string>;
  protected delete: Map<string, string>;
  protected name: string;
  constructor(
    save: Map<string, string>,
    edit: Map<string, string>,
    del: Map<string, string>,
    name: string
  ) {
    this.save = new Map();
    this.edit = new Map();
    this.delete = new Map();
    this.name = "Default_wrapper"
    if (save.size > 0) {
      this.save = save;
    }

    if (edit.size > 0) {
      this.edit = edit;
    }

    if (del.size > 0) {
      this.delete = del;
    }

    if (typeof name != "string") {
      throw new Error("The given wrapper name was not a string");
    } else if (name.trim().length <= 0) {
      throw new Error(
        "The given wrapper name was not at least 1 char in lenght"
      );
    } else {
      this.name = name.trim();
    }
  }

  get getObjToEmit():Object {
    const obj = {
        name: this.name,
        type: wrapperTypeEnum.form,
        results: {
            save: this.save,
            edit:this.edit,
            delete:this.delete
        }
    }
    return obj
  }
}
