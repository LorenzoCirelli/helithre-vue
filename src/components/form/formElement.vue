<template>
    <form @change.prevent="getFormValues" @submit.prevent="getFormValues">
        <slot />
    </form>
</template>
<script setup lang="ts">
import { validatedResult } from '../../composable/utils';

const emitChange = defineEmits(['formChange']);

// Handler generico per tutti gli input del form
function getFormValues(event: Event) {
    const target = validatedResult(event.target) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    if (target && target.name) {
        validatedResult(target.value)
        const formChangeValue = {id:target.name, value:target.value}
        console.log(formChangeValue)
        emitChange('formChange', formChangeValue)
    }
}


</script>