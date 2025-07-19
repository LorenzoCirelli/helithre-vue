<template>
  <form @submit.prevent="getFormValues" class="helithre_form" :id="name">
    <slot />
    <input type="submit">
  </form>
</template>
<script setup lang="ts">
defineProps({
  name: {type:String, required: false, default: ''}
})

//define the emit
const emitChange = defineEmits(['formChange']);

// Generic handler on save
function getFormValues(event: Event) {
  const form = event.target as HTMLFormElement;
  if (form == null) {
    throw new Error("The passed value of the form was null");
  }
  const formData = new FormData(form);
  emitChange('formChange', formData);
}

</script>