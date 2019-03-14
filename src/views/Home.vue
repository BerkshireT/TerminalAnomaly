<template>
    <div class="home teal lighten-4">
    <Navbar :colorProp="theme.color" :imageProp="theme.image"/>
        <h1>TODO:</h1>
        <v-list>
                <v-list-tile v-for="todo in todos" :key="todo.text">
                    <v-list-tile-content class="teal--text">
                        <v-list-tile-title>{{ todo.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
        </v-list>
        <v-container grid-list-md>
            <v-layout column>
                <v-flex>
                    <v-card>
                        <v-parallax :src="require('../assets/pic.png')" height="400"></v-parallax>
                        <v-card-title primary-title class="grey darken-4">
                            <v-flex grow>
                                <span class="white--text display-1 font-weight-thin mb-3 justify-center">Tyler Berkshire</span>
                            </v-flex>
                            <v-flex shrink>
                                <v-btn flat outline color="teal" right route :to="'/about'">
                                    <h3 class="subhedaing">About Me</h3>
                                </v-btn>
                            </v-flex>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex v-for="parallax in parallaxes" :key="parallax.title">
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
        </v-container>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    title: 'Home - TerminalAnomaly',
    components: { Navbar },
    data () {
        return {
            theme:
                { color: 'teal--text', image: 'ta-nav-te.png'},
            todos: [
                { text: 'optimize layouts for mobile' },
                { text: 'create about page' },
                { text: 'create gallery page' }
            ],
            parallaxes: [
                { image: 'comingsoon.jpg', title: 'Art Gallery', button: 'View Gallery', route: 'gallery'},
                { image: 'comingsoon.jpg', title: 'Project 2', button: 'View Project 2', route: 'project2'}
            ]
        }
    }
}
</script>
