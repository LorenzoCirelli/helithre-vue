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
            type:'text'
        },
        {
            text:'Secondo input exempio',
            id: '1',
            type:'date',
        }
    ],
    responses: [
        {
            id: '0',
            value: 'Test load'
        },
                {
            id: '1',
            value: 'Test d'
        }
    ]
}"></helithreLoad>
</template>