<template>
    <form @submit.prevent="getFormValues">
        <slot />
        <input type="submit" value="Invia">
    </form>
</template>
<script setup lang="ts">
import { validatedResult } from '../../composable/utils';

function getFormValues(submitEvent: Event) {

    const event = validatedResult(submitEvent) as Event
    const form = (validatedResult(validatedResult(event.target).elements)) as HTMLFormControlsCollection
    console.log(form)
}
</script>