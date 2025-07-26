import { BasicPageComponent } from "../../../types/pages/confPage";
import { BasicWrapper } from "../base/baseWrapper";

export class PageWrapper extends BasicWrapper {
constructor(childrens: Array<BasicPageComponent>, name: string) {
    super(childrens, name);
}
  getComponent() {
    return 'page';
  }
}
