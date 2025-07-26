import { DefaultElementType } from "../basic";
import { BasicPageType } from "./pagesTypes";

export interface BasicPageComponent extends DefaultElementType {
  type?: BasicPageType;
}
