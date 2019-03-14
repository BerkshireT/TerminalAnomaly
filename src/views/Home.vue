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
            <ParaCards :parallaxProp="parallaxes1" :layoutProp="'column'" />

            <ParaCards :parallaxProp="parallaxes2" :layoutProp="'row'" :visibilityProp="'hidden-xs-only'" />
            <ParaCards :parallaxProp="parallaxes2" :layoutProp="'column'" :visibilityProp="'hidden-sm-and-up'" />

            <ParaCards :parallaxProp="parallaxes3" :layoutProp="'column'" />
        </v-container>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import ParaCards from '../components/ParaCards'

export default {
    title: 'Home - TerminalAnomaly',
    components: { Navbar, ParaCards },
    data () {
        return {
            theme:
                { color: 'teal--text', image: 'ta-nav-te.png'},
            todos: [
                { text: 'create about page' },
                { text: 'create library page' },
                { text: 'create gallery page (carousel)' },
                { text: 'decide what projects to post' }
            ],
            parallaxes1: [
                { image: 'pic.png', title: 'Tyler Berkshire', button: 'About', route: 'about' }
            ],
            parallaxes2: [
                { image: 'comingsoon.jpg', title: 'Art Gallery', button: 'View Gallery', route: 'gallery' },
                { image: 'comingsoon.jpg', title: 'Library', button: 'View Library', route: 'library' }
            ],
            parallaxes3: [
                { image: 'comingsoon.jpg', title: 'Project 1', button: 'View Project', route: '' }
            ]
        }
    }
}
</script>
