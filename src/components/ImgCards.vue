<template>
    <v-layout :class="layoutProp + ' ' + visibilityProp">
        <v-flex v-for="pic in imgProp" :key="pic.title">
            <v-card>
                <v-img :src="require('@/assets/' + pic.image)" height="400" />
                <v-card-title primary-title class="grey darken-4">
                    <v-flex grow>
                        <span class="white--text display-1 font-weight-thin mb-3 justify-center">
                            {{ pic.title }}
                        </span>
                    </v-flex>
                    <v-flex shrink>
                        <v-btn flat outline color="teal" right route :to="'/' + pic.route">
                            <h3 class="subhedaing">{{ pic.button }}</h3>
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
        imgProp: {
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