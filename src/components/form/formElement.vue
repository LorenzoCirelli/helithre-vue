<template>
  <form @submit.prevent="getFormValues" class="helithre_form">
    <slot />
    <input type="submit">
  </form>
</template>
<script setup lang="ts">
const emitChange = defineEmits(['formChange']);

// Handler generico per tutti gli input del form
function getFormValues(event: Event) {
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  emitChange('formChange', formData);
}

</script>