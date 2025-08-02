<template>
  <HelithreForm v-if="wrapper.getComponent() === 'form'" :wrapper="wrapper as FormWrapper" @submitEvent="emitEvent" />
  <HelithrePage v-else :wrapper="wrapper as PageWrapper"/>
</template>

<script lang="ts" setup>
import { FormWrapper } from '../composable/wrapper/form/formWrapper'
import { PageWrapper } from '../composable/wrapper/page/pageWrapper'
import type { HelithreLoadType } from '../types/helitreJSON'
import { wrapperTypeEnum } from '../types/wrapper'
import HelithreForm from './wrapper/helithreForm.vue'
import HelithrePage from './wrapper/helithrePage.vue'
import { BasicPageComponent } from '../types/pages/confPage'

const {helithreJson} = defineProps<{ helithreJson: HelithreLoadType }>()
const emit = defineEmits(['helitreEvent'])

let wrapper: FormWrapper | PageWrapper

const wrapperType = helithreJson.wrapper?.trim()
if (wrapperType === wrapperTypeEnum.form) {
  wrapper = new FormWrapper(helithreJson.childrens, helithreJson.responses, helithreJson.name)
} else if (wrapperType === wrapperTypeEnum.page) {

  wrapper = new PageWrapper(helithreJson.childrens as BasicPageComponent[], helithreJson.name)
} else {
  throw new Error(`Invalid wrapper type`)
}

function emitEvent(event: unknown) {
  emit('helitreEvent', event)
}
</script>
