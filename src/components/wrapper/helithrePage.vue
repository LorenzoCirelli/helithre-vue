<template>
    {{ wrapper }}
</template>

<script lang="ts" setup>

////////////////////////////////////////////////////////////////////////////
//////// This page create the page and manage operations on it /////////////
///////////////////////////////////////////////////////////////////////////

import { FormWrapper } from '../../composable/wrapper/form/formWrapper'
const wrapper = defineProps<{ wrapper: FormWrapper }>()
const emit = defineEmits(['submitEvent'])

</script>
