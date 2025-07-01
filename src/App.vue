<script setup lang="ts">
import { formElement } from './index';
import { fields } from './index';
</script>

<template>

    <formElement>
        <fields.textInput :conf="{ text: 'test', id: '0' }"></fields.textInput>
        <fields.dateInput :conf="{ text: 'test', id: '1' }"></fields.dateInput>
    </formElement>

</template>