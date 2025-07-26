<template>
  <HelithreForm v-if="wrapper.getComponent() === 'form'" :wrapper="wrapper as FormWrapper" @submitEvent="emitEvent" />
  <HelithrePage v-else :wrapper="wrapper as PageWrapper"/>
</template>

<script lang="ts" setup>
import { FormWrapper } from '../composable/wrapper/form/formWrapper'
import { PageWrapper } from '../composable/wrapper/page/pageWrapper'
import type { HelithreLoadType } from '../types/helitreJSON'
import { wrapperTypeEnum } from '../types/wrapper'
import { BasicFieldInterfaceComponent } from '../types/fields/basicField'
import { BasicPageComponent } from '../types/pages/confPage'
import HelithreForm from './wrapper/helithreForm.vue'
import HelithrePage from './wrapper/helithrePage.vue'

const props = defineProps<{ helithreJson: HelithreLoadType }>()
const emit = defineEmits(['helitreEvent'])

let wrapper: FormWrapper | PageWrapper

const wrapperType = props.helithreJson.wrapper?.trim()

if (wrapperType === wrapperTypeEnum.form) {
  const formComponents = props.helithreJson.childrens.filter(
    (c): c is BasicFieldInterfaceComponent => c.type !== 'div'
  )
  wrapper = new FormWrapper(formComponents, props.helithreJson.responses, props.helithreJson.name)
} else if (wrapperType === wrapperTypeEnum.page) {
  const pageComponents = props.helithreJson.childrens.filter(
    (c): c is BasicPageComponent => c.type !== 'div'
  )
  wrapper = new PageWrapper(pageComponents, props.helithreJson.name)
} else {
  throw new Error(`Invalid wrapper type`)
}

function emitEvent(event: unknown) {
  emit('helitreEvent', event)
}
</script>
