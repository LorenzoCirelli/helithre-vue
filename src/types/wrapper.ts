export namespace save {
  export interface SaveType {
    id: string;
    value: string;
  }
}

export namespace load {
  export interface LoadType {
    id: string;
    value: Object;
  }
}

export const BasicWrapperTypeEnum = {
  form: "form",
  page: "page",
} as const;

export type BasicWrapperType =
  (typeof BasicWrapperTypeEnum)[keyof typeof BasicWrapperTypeEnum];
