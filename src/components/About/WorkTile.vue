<template>
    <v-card class="py-2 grey darken-4 AboutTiles">
        <v-layout row wrap>
            <v-flex xs12>
                <div class="hidden-sm-and-down">
                    <div class="pa-3 text-xs-center display-2 font-weight-thin indigo--text text--lighten-3">
                        {{ sectionProp.title }}
                    </div>
                    <v-divider dark class="py-1" />
                    <p>TEST SECTINO INFO</p>
                </div>
                <!-- Mobile -->
                <!-- END mobile -->
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    props:{
        sectionProp: {
            required: true,
            default: 'Error loading section.'
        }
    }
}
</script>

<style scoped>
.theme--dark.v-divider {
    border-color: rgba(159, 168, 218) !important; 
}
</style>
