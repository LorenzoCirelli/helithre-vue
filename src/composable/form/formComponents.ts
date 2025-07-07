import type { Component } from "vue";
import { form } from "../../index";

export const componentsMap: Map<string, Component> = new Map([
  ["text", form.fields.textInput],
  ["number", form.fields.numberInput],
  ["date", form.fields.dateInput],
  ["color", form.fields.colorInput],
  ["datetimeLocal", form.fields.datetimeLocalInput],
  ["email", form.fields.emailInput],
  ["hidden", form.fields.hiddenInput],
  ["image", form.fields.imageInput],
  ["month", form.fields.monthInput],
  ["password", form.fields.passwordInput],
  ["reset", form.fields.resetInput],
  ["search", form.fields.searchInput],
  ["tel", form.fields.telInput],
  ["time", form.fields.timeInput],
  ["date", form.fields.dateInput],
  ["url", form.fields.urlInput],
  ["week", form.fields.weekInput],
  ["select", form.fields.selectInput],
  ["checkbox", form.fields.checkBoxInput]
]);
