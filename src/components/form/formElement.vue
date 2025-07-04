<template>
    <form @submit.prevent="getFormValues">
        <slot />
        <input type="submit" value="send">
    </form>
</template>
<script setup lang="ts">
const emitChange = defineEmits(['formChange']);

// Handler generico per tutti gli input del form
function getFormValues(event: Event) {
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  formData.forEach((value, key) => {
    const formChangeValue = { id: key, value: String(value) };
    emitChange('formChange', formChangeValue);
  });
}


</script>