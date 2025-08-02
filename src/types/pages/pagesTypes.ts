export const BasicPageType = {
  text:"text"
} as const;

export type BasicPageType =
  (typeof BasicPageType)[keyof typeof BasicPageType];
