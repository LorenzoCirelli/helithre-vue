export const BasicPageType = {
  text:"text",
  list:"list",
  image:"image",
  video:"video",
  details:"details",
  table:"table",
  link:"link"
} as const;

export type BasicPageType =
  (typeof BasicPageType)[keyof typeof BasicPageType];
