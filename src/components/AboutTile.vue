<template>
    <v-card class="py-2 grey darken-4">
        <v-layout>
            <v-flex xs12>
                <div v-if="alignProp === 'center'" class="hidden-sm-and-down">
                    <div class="pa-3 text-xs-center display-2 font-weight-thin indigo--text text--lighten-3">{{ titleProp }}</div>
                    <v-divider dark class="py-1" />
                    <v-layout row wrap>
                        <v-flex xs1 />
                        <v-flex xs10>
                            <v-img :src="require('@/assets/' + picProp)" height="400" class="ma-3 pb-1" contain/>
                        </v-flex>
                        <v-flex xs1 />
                        <v-flex xs12 v-for="paragraph in textProp" :key="paragraph">
                            <div class="pa-2 mx-3 text-xs-center subheading white--text">{{ paragraph }}</div>
                        </v-flex>
                    </v-layout>
                </div>
                <div v-else-if="alignProp === 'left'" class="hidden-sm-and-down">
                    <div class="pa-3 text-xs-left display-2 font-weight-thin indigo--text text--lighten-3">{{ titleProp }}</div>
                    <v-divider dark class="py-1" />
                    <v-layout row wrap>
                        <v-flex xs6>
                            <v-layout column wrap>
                                <v-flex xs6 v-for="paragraph in textProp" :key="paragraph">
                                    <div class="pa-2 mx-3 text-xs-center subheading white--text">{{ paragraph }}</div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs6>
                            <v-img :src="require('@/assets/' + picProp)" height="400" class="ma-3" contain />
                        </v-flex>
                    </v-layout>
                </div>
                <div v-else class="hidden-sm-and-down">
                    <div class="pa-3 text-xs-right display-2 font-weight-thin indigo--text text--lighten-3">{{ titleProp }}</div>
                    <v-divider dark class="py-1" />
                    <v-layout row wrap>
                        <v-flex xs6>
                            <v-img :src="require('@/assets/' + picProp)" height="400" class="ma-3" contain />
                        </v-flex>
                        <v-flex xs6>
                            <v-layout column wrap>
                                <v-flex xs6 v-for="paragraph in textProp" :key="paragraph">
                                    <div class="pa-2 mx-3 text-xs-center subheading white--text">{{ paragraph }}</div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </div>
                <!-- Mobile -->
                <div class="hidden-md-and-up">
                    <div class="pa-3 text-xs-center display-2 font-weight-thin indigo--text text--lighten-3">{{ titleProp }}</div>
                    <v-divider dark class="py-1" />
                    <v-layout row wrap>
                        <v-flex xs1 />
                        <v-flex xs10>
                            <v-img :src="require('@/assets/' + picProp)" height="400" class="ma-3 pb-1" contain/>
                        </v-flex>
                        <v-flex xs1 />
                        <v-flex xs12 v-for="paragraph in textProp" :key="paragraph">
                            <div class="pa-1 mx-3 text-xs-center subheading white--text">{{ paragraph }}</div>
                            <br />
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    props:{
        titleProp: {
            required: true,
            default: 'TEST'
        },
        alignProp: {
            required: false,
            default: 'center'
        },
        textProp: {
            required: true,
            default: [ 'lorem ipsum' ]
        },
        picProp: {
            required: true,
            default: 'comingsoon.jpg'
        }
    }
}
</script>

<style>
.theme--dark.v-divider {
    border-color: rgba(159, 168, 218) !important; 
}
</style>
