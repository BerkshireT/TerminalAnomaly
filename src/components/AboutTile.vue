<template>
    <v-card class="py-2 grey darken-4 AboutTile">
        <v-layout>
            <v-flex xs12>
                <div class="hidden-sm-and-down">
                    <div class="pa-3 text-xs-center display-2 font-weight-thin indigo--text text--lighten-3">{{ titleProp }}</div>
                    <v-divider dark class="py-1" />
                    <v-layout row wrap>
                        <v-flex xs1 />
                        <v-flex xs10>
                            <v-img :src="require('@/assets/' + picProp)" height="400" class="ma-3 pb-1" contain/>
                        </v-flex>
                        <v-flex xs1 />
                        <v-flex xs12 v-for="paragraph in textProp" :key="paragraph">
                            <div class="pa-2 mx-3 subheading white--text">&emsp;{{ paragraph }}</div>
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
                            <v-img :src="require('@/assets/' + picProp)" class="ma-3 pb-1" contain/>
                        </v-flex>
                        <v-flex xs1 />
                        <v-expansion-panel dark inset>
                            <v-expansion-panel-content class="grey darken-4 indigo--text text--lighten-3">
                                <template v-slot:header>
                                    <div>About Me</div>
                                </template>
                                <v-flex xs12 v-for="paragraph in textProp" :key="paragraph">
                                    <div class="pa-1 mx-3 text-xs-center body-1 white--text">{{ paragraph }}</div>
                                    <br />
                                </v-flex>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
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

<style scoped>
.theme--dark.v-divider {
    border-color: rgba(159, 168, 218) !important; 
}
</style>
