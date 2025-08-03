import { DefaultElementType } from "../basic";
import { BasicPageType } from "./pagesTypes";

export interface ElementType {
  value: string,
  id: string
}
export interface BasicPageComponent extends DefaultElementType {
  type: BasicPageType
  src?:string
  elements?: Array<ElementType>
}

