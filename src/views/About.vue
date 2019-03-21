<template>
    <v-container fluid fill-height class="about indigo lighten-3">
        <Navbar :colorProp="theme.color" :imageProp="theme.image"/>  
        <v-container justify-center > 
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card :class="'grey darken-4 ' + theme.color">
                        <v-layout>
                            <v-flex xs5>
                                <v-img :src="require('@/assets/aboutimage.png')" contain height="300px" />
                            </v-flex>
                            <v-flex xs7>
                                <v-card-title primary-title>
                                    <div>
                                        <div class="display-3 font-weight-thin">Tyler Berkshire</div>
                                        <v-divider dark />
                                        <div class="display-2 font-weight-thin">Computer Programmer</div>
                                        <div class="display-2 font-weight-thin">University of Dayton CPS '19</div>
                                    </div>
                                </v-card-title>
                            </v-flex>
                        </v-layout>
                    </v-card>
                    <v-divider dark class="py-1" />
                    <v-flex v-for="tile in cards" :key="tile.title">
                        <AboutTile :titleProp="tile.title" :alignProp="tile.align" :textProp="tile.text" />
                    </v-flex>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
import Navbar from '@/components/Navbar'
import AboutTile from '@/components/AboutTile'

export default {
    title: 'About - TerminalAnomaly',
    components: { Navbar, AboutTile },
    data () {
        return {
            theme: { 
                theme: 'indigo', 
                color: 'indigo--text text--lighten-3', 
                image: 'ta-nav-in.png' 
            },
            cards: [
                { title: 'history', align: 'center', text: 'history section' },
                { title: 'programming', align: 'left', text: 'programming section' }
            ]
        }
    }
}
</script>

<style scoped>
.theme--dark.v-divider {
    border-color: rgba(159, 168, 218) !important; 
}
</style>

