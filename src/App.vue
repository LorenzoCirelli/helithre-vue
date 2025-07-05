<script setup lang="ts">
import { helithreLoad } from './index';
</script>

<template>
    <helithreLoad :helithreJson="{
        name: 'RegisterForm',
        wrapper: 'form',
        childrens: [
            {
                text: 'Nome',
                id: 'user_name',
                type: 'text'
            },
            {
                text: 'Cognome',
                id: 'user_surname',
                type: 'text',
            },
            {
                text: 'Password',
                id: 'user_password',
                type: 'password',
            },
            {
                text: 'Email',
                id: 'user_email',
                type: 'email',
            },
            {
                text: 'Favourite color',
                id: 'user_favorite_color',
                type: 'color',
            }
        ],
        responses: [
            {
                id: 'user_name',
                value: 'Lorenzo'
            },
            {
                id: 'user_surname',
                value: 'Test d'
            }
        ]
    }" @helitreEvent="(event: object) => { console.log(event) }"></helithreLoad>
</template>