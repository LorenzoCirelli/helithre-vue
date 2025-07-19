export namespace save {
  export interface SaveType {
    id: string;
    value: string;
  }
}


export const wrapperTypeEnum = {
  form: "form",
  page: "page",
} as const;

export type BasicWrapperType =
  (typeof wrapperTypeEnum)[keyof typeof wrapperTypeEnum];
