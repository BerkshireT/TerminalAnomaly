<template>
    <v-layout :class="layoutProp + ' ' + visibilityProp">
        <v-flex v-for="parallax in parallaxProp" :key="parallax.title">
            <v-card>
                <v-parallax :src="require('../assets/' + parallax.image)" height="400"></v-parallax>
                <v-card-title primary-title class="grey darken-4">
                    <v-flex grow>
                        <span class="white--text display-1 font-weight-thin mb-3 justify-center">
                            {{ parallax.title }}
                        </span>
                    </v-flex>
                    <v-flex shrink>
                        <v-btn flat outline color="teal" right route :to="'/' + parallax.route">
                            <h3 class="subhedaing">{{ parallax.button }}</h3>
                        </v-btn>
                    </v-flex>
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: {
        parallaxProp: {
            required: true,
            default: [
                { image: 'comingsoon.jpg', title: 'Home', button: 'Home', route: '' }
            ]
        },
        layoutProp: {
            required: true,
            default: 'column'
        },
        visibilityProp: {
            required: false,
            default: '',
        }
    }
}
</script>