<template>
    <v-container fluid fill-height class="home teal lighten-3">
    <Navbar :colorProp="theme.color" :imageProp="theme.image"/>
        <v-container grid-list-md>
            <ParaCards :parallaxProp="parallaxes1" :layoutProp="'column'" :visibilityProp="'hidden-xs-only'" :themeProp="theme.theme" />
            <ImgCards :imgProp="parallaxes1" :layoutProp="'column'" :visibilityProp="'hidden-sm-and-up'" :themeProp="theme.theme" />

            <ImgCards :imgProp="images1" :layoutProp="'row'" :visibilityProp="'hidden-xs-only'" :themeProp="theme.theme" />
            <ImgCards :imgProp="images1" :layoutProp="'column'" :visibilityProp="'hidden-sm-and-up'" :themeProp="theme.theme" />

            <ParaCards :parallaxProp="parallaxes2" :layoutProp="'column'" :visibilityProp="'hidden-xs-only'" :themeProp="theme.theme" />
            <ImgCards :imgProp="parallaxes2" :layoutProp="'column'" :visibilityProp="'hidden-sm-and-up'" :themeProp="theme.theme" />
        </v-container>
    </v-container>
</template>

<script>
import Navbar from '@/components/Navbar'
import ParaCards from '@/components/ParaCards'
import ImgCards from '@/components/ImgCards'

export default {
    title: 'Home - TerminalAnomaly',
    components: { Navbar, ParaCards, ImgCards },
    data () {
        return {
            theme:
                { theme: 'teal', color: 'teal--text text--lighten-3', image: 'ta-nav-te.png' },
            todos: [
                { text: 'create about page' },
                { text: 'create library page' },
                { text: 'create gallery page (carousel)' },
                { text: 'decide what projects to post' }
            ],
            parallaxes1: [
                { image: 'pic.jpg', title: 'Tyler Berkshire', button: 'About Me', route: 'about' }
            ],
            images1: [
                { image: 'comingsoon.jpg', title: 'Art Gallery (Coming Soon)', button: 'View Gallery', route: 'gallery' },
                { image: 'comingsoon.jpg', title: 'Library (Coming Soon)', button: 'View Library', route: 'library' }
            ],
            parallaxes2: [
                { image: 'comingsoon.jpg', title: 'Project 1 (Coming Soon)', button: 'View Project', route: '' }
            ]
        }
    }
}
</script>
