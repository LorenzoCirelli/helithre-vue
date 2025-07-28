import { BasicPageComponent } from "../../../types/pages/confPage";
import { BasicWrapper } from "../base/baseWrapper";

export class PageWrapper extends BasicWrapper {
  constructor(childrens: Array<BasicPageComponent>, name: string) {
    super(name);
    this.parseChildrens(childrens);
  }
  getComponent() {
    return "page";
  }
  parseChildrens(childrens: Array<BasicPageComponent>) {
    childrens.forEach((children) => {
      console.log(children);
    });
  }
}
