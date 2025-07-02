<template>
    <form @change.prevent="getFormValues" @submit.prevent="getFormValues">
        <slot />
    </form>
</template>
<script setup lang="ts">
import { validatedResult } from '../../composable/utils';

import { reactive } from 'vue'

const formValues = reactive(new Map<string, string>())

// Handler generico per tutti gli input del form
function getFormValues(event: Event) {
    const target = validatedResult(event.target) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    if (target && target.name) {
        validatedResult(target.value)
        formValues.set(target.name, target.value)
    }
    console.log('formValues:', formValues)
}


</script>