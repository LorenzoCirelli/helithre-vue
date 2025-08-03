import type { Component } from "vue";
import { elements } from "../../components/page/page";

export const pageComponentsMap = new Map<string, Component>([
  ["text", elements.TextElement],
  ["list", elements.ListElement],
  ["image", elements.ImageElement]
]);
