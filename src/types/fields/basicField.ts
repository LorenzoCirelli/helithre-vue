import { type DefaultElementType } from "../basic";

export const BasicFieldTypeEnum = {
  text: "text",
  number: "number",
  date: "date",
  color: "color",
  datetimeLocal:"datetime-local",
  email:"email",
  file:"file",
  hidden:"hidden",
  image:"image",
  month:"month",
  password:"password",
  range:"range",
  reset:"reset",
  search:"search",
  tel:"tel",
  time:"time",
  url:"url",
  week:"week"
} as const;

type BasicFieldType =
  (typeof BasicFieldTypeEnum)[keyof typeof BasicFieldTypeEnum];

export interface BasicFieldInterfaceComponent extends DefaultElementType {
  type?: BasicFieldType;
  value?: string
  response?: string
}