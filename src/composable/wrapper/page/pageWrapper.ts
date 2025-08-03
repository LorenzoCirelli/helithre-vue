import { BasicPageComponent } from "../../../types/pages/confPage";
import { BasicWrapper } from "../base/baseWrapper";
import { wrapperItemOptions } from "../basicWrapper";

export class PageWrapper extends BasicWrapper {
  constructor(childrens: Array<BasicPageComponent>, name: string) {
    super(name);
    this.parseChildrens(childrens);
  }

  getComponent() {
    return "page";
  }

  set setLoadMap(loadItem: wrapperItemOptions.LoadTypePage) {
    this.loadMap.set(loadItem.id, loadItem.value);
  }

  parseChildrens(childrens: Array<BasicPageComponent>) {
    childrens.forEach((children) => {
      if (children.type != null && children.text != null) {
        const obj = {
          id: children.id,
          value: {
            text: children?.text,
            type: children?.type,
            elements: children?.elements,
            src: children?.src
          },
        };
        this.setLoadMap = obj;
      } else {
        throw new Error("Type or text was passed as null for the page");
      }
    });
  }
}
