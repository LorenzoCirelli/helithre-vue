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
        },
        {
            text:'Secondo input exempio',
            id: '1',
            type:'date'
        }
    ]
}"></helithreLoad>
</template>