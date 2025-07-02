<template>
    <formElement></formElement>
</template>
<script lang="ts" setup>
import { form } from '../../index';
const formElement = form.formElement

const props = defineProps({
    childrens: {
        type: Object
    }
})

</script>