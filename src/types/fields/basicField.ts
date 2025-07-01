import { type DefaultElementType } from "../basic";

export const BasicFieldTypeEnum = {
  text: "text",
  number: "number",
  date: "date",
} as const;

type BasicFieldType =
  (typeof BasicFieldTypeEnum)[keyof typeof BasicFieldTypeEnum];

export interface BasicFieldInterfaceComponent extends DefaultElementType {
  type?: BasicFieldType;
}