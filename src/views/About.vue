<template>
    <div class="about indigo lighten-4">
        <Navbar :colorProp="theme.color" :imageProp="theme.image"/>  
        <v-container justify-center> 
            <v-layout row wrap>
                <v-flex xs12>
                    <v-layout>
                        <v-flex xs3 offset-xs1>
                            <v-img :src="require('@/assets/aboutimage.png')" contain height="300px" />
                        </v-flex>
                        <v-flex class="indigo" align-self-center xs3 offset-xs3>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </span>
                        </v-flex>
                    </v-layout>
                    <v-divider light />
                    <v-flex class="pa-3">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </span>
                    </v-flex>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
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
