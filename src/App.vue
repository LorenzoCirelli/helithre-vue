<script setup lang="ts">
import { helithreLoad } from './index';
</script>

<template>
    <helithreLoad :helithreJson="{
    name:'testForm',
    wrapper:'form',
    childrens: [
        {
            text:'Primo input exempio',
            id: '0',
            type:'number'
        }
    ]
}"></helithreLoad>
</template>