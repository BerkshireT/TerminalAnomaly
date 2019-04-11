<template>
    <v-card class="py-2 grey darken-4 ProgramTile">
        <v-layout>
            <v-flex xs12 class="hidden-sm-and-down indigo--text text--lighten-3">
                <div class="pa-3 text-xs-center display-2 font-weight-thin">{{ titleProp }}</div>
                <v-divider dark class="py-1" />
                <v-layout row wrap class="text-xs-center">
                    <v-flex xs4 v-for="icon in iconsProp" :key="icon.lang" :href="'https://' + icon.route" target="blank">
                        <font-awesome-icon v-if="icon.fa == true" :icon="[icon.type, icon.icon ]" class="display-4 pa-2" />
                        <v-img v-else :src="require('@/assets/' + icon.icon)" contain max-height="112px" class="pa-2" />
                        <div class="pa-2 display-2 font-weight-thin white--text">{{ icon.lang }}</div>
                        <v-layout row wrap class="py-2">
                            <v-flex xs1 />
                            <v-flex xs2 class="pa-2 white--text" v-for="x in icon.stars" :key="x">
                                <font-awesome-icon :icon="['fas', 'star']" class="display-1" />
                            </v-flex>
                            <v-flex xs2 class="pa-2 white--text" v-for="x in 5 - icon.stars" :key="x">
                                <font-awesome-icon :icon="['far', 'star']" class="display-1" />
                            </v-flex>
                            <v-flex xs1 />
                        </v-layout>
                        <v-divider dark class="py-2" />
                    </v-flex>
                </v-layout>
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
        iconsProp: {
            required: true,
            default: [ { icon: 'C.png', fa: false, type: '', lang: 'C', route: '/', stars: 2 } ]
        }
    }
}
</script>

<style scoped>
.theme--dark.v-divider {
    border-color: rgba(159, 168, 218) !important; 
}
</style>
