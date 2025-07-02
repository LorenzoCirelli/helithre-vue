import type { Component } from 'vue'
import { form } from '../../index'

export const componentsMap: Map<string, Component> = new Map([
  ['text', form.fields.textInput],
  ['number', form.fields.numberInput],
  ['date', form.fields.dateInput],
])
