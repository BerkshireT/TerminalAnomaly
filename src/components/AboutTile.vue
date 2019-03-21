<template>
    <v-card class='py-2 grey darken-4'>
        <v-layout>
            <v-flex xs12>
                <h1 class="pa-3 white--text">{{ textProp }}</h1>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    props:{
        titleProp: {
            required: true,
            default: 'Title'
        },
        alignProp: {
            required: false,
            default: 'center'
        },
        textProp: {
            required: true,
            default: 'lorem ipsum'
        }
    }
}
</script>

