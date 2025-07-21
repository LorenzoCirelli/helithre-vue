<template>
    {{ name }}
    {{ derivatedChildrens }}
</template>

<script lang="ts" setup>

////////////////////////////////////////////////////////////////////////////
//////// This page create the form and manage operations on it /////////////
///////////////////////////////////////////////////////////////////////////

import { type PropType } from 'vue'
import { BasicWrapper } from '../../composable/wrapper/basicWrapper'

const props = defineProps({
    derivatedChildrens: {
        type: Object as PropType<BasicWrapper>,
        required: true
    },
    name: { type: String, required: false, default: '' },
})

</script>
