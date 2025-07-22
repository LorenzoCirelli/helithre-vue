export const BasicPageType = {
  p: "p",
  div: "div",
  nav: "nav"
} as const;

export type BasicPageType =
  (typeof BasicPageType)[keyof typeof BasicPageType];
