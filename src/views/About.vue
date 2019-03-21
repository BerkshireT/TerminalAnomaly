<template>
    <v-container fluid fill-height class="about indigo lighten-3">
        <Navbar :colorProp="theme.color" :imageProp="theme.image"/>  
        <v-container justify-center > 
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card flat :class="'grey darken-4 ' + theme.color">
                        <v-layout>
                            <v-flex xs5>
                                <v-img :src="require('@/assets/aboutimage.png')" contain height="300px" />
                            </v-flex>
                            <v-flex xs7>
                                <v-card-title primary-title>
                                    <div>
                                        <div class="pa display-3 font-weight-thin">Tyler Berkshire</div>
                                        <v-divider dark />
                                        <div class="pa display-2 font-weight-thin">Computer Programmer</div>
                                        <div class="pa display-2 font-weight-thin">University of Dayton CPS '19</div>
                                    </div>
                                </v-card-title>
                            </v-flex>
                        </v-layout>
                    </v-card>
                    <v-divider dark />
                    <v-card flat :class="'grey darken-4 ' + theme.color">
                        <v-layout>
                            <v-flex xs12>
                                <div class="pa-3 white--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    title: 'About - TerminalAnomaly',
    components: { Navbar },
    data () {
        return {
            theme:
                { theme: 'indigo', color: 'indigo--text text--lighten-3', image: 'ta-nav-in.png'}
        }
    }
}
</script>

<style scoped>
.theme--dark.v-divider {
    border-color: rgba(159, 168, 218) !important; 
}
</style>

