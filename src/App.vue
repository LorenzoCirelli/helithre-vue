<script setup lang="ts">
import helithreLoad from './index';
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
            },
            {
                text: 'Accept terms of services?',
                id: 'user_terms_accept',
                type: 'checkbox',
            },
            {
                text: 'Profile type',
                id: 'user_profile_type',
                type: 'select',
                choices: [{
                    text: 'Admin',
                    questionAnswerId: 'ADMIN'
                },
                {
                    text: 'User',
                    questionAnswerId: 'USER'
                }]
            }
        ],
        responses: [
            {
                id: 'user_name',
                value: 'Lorenzo'
            },
            {
                id: 'user_surname',
                value: 'Hello world'
            },
            {
                id: 'user_profile_type',
                value: 'USER'
            },
            {
                id: 'user_terms_accept',
                value: 'true'
            }
        ]
    }" @helitreEvent="(event: object) => { console.log(event) }"></helithreLoad>

    <helithreLoad :helithre-json="{
        name: 'FirstPage',
        wrapper: 'page',
        childrens: [
            {
                text: 'My text',
                id: 'first_text',
                type: 'text',
            },
            {
                text: 'My video',
                id: 'first_video',
                src: '',
                type: 'video',
            },
            {
                text: 'My image',
                id: 'first_image',
                src: '',
                type: 'image',
            },
            {
                text: 'My list',
                id: 'first_list',
                type: 'list',
                elements: [{
                    id: 'first',
                    value: 'Beautiful'
                }]
            },
            {
                text: 'My link',
                id: 'first_link',
                src: '',
                type: 'link',
            }
        ]
    }"></helithreLoad>
</template>