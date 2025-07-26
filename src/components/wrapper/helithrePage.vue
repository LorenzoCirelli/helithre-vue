<template>
    {{ wrapper }}
</template>

<script lang="ts" setup>

////////////////////////////////////////////////////////////////////////////
//////// This page create the page and manage operations on it /////////////
///////////////////////////////////////////////////////////////////////////

import { PageWrapper } from '../../composable/wrapper/page/pageWrapper';
const wrapper = defineProps<{ wrapper: PageWrapper }>()
const emit = defineEmits(['submitEvent'])

</script>
