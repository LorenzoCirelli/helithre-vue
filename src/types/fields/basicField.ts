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
  week:"week",
  select:"select",
  checkbox:"checkbox",
} as const;

export type BasicFieldType =
  (typeof BasicFieldTypeEnum)[keyof typeof BasicFieldTypeEnum];

export interface MultipleChoisesInterface {
  text: string
  questionAnswareId: string
}

export interface BasicFieldInterfaceComponent extends DefaultElementType {
  type?: BasicFieldType;
  choises?: Array<MultipleChoisesInterface>
  value?: string
  response?: string
}