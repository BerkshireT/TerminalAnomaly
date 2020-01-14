<!-- 
TODO:
New about/background layout
redo home page layout
Add Headway info
Add Super Smash Search info
Add vaporwave page
-->
<template>
    <v-container fluid fill-height class="home teal lighten-3">
    <Navbar :colorProp="theme.color" :imageProp="theme.image"/>
        <v-container grid-list-md>
            <ParaCards
            :parallaxProp="parallaxes1"
            :layoutProp="'column'"
            :visibilityProp="'hidden-xs-only'"
            :themeProp="theme.theme"
            />
            <ImgCards
            :imgProp="parallaxes1"
            :layoutProp="'column'" 
            :visibilityProp="'hidden-sm-and-up'"
            :themeProp="theme.theme"
            />

            <ImgCards
            :imgProp="images1"
            :layoutProp="'row'"
            :visibilityProp="'hidden-xs-only'"
            :themeProp="theme.theme"
            />
            <ImgCards
            :imgProp="images1"
            :layoutProp="'column'"
            :visibilityProp="'hidden-sm-and-up'"
            :themeProp="theme.theme"
            />

            <ParaCards
            :parallaxProp="parallaxes2"
            :layoutProp="'column'"
            :visibilityProp="'hidden-xs-only'"
            :themeProp="theme.theme"
            />
            <ImgCards
            :imgProp="parallaxes2"
            :layoutProp="'column'"
            :visibilityProp="'hidden-sm-and-up'"
            :themeProp="theme.theme"
            />

            <ImgCards
            :imgProp="images2"
            :layoutProp="'row'"
            :visibilityProp="'hidden-xs-only'"
            :themeProp="theme.theme"
            />
            <ImgCards
            :imgProp="images2"
            :layoutProp="'column'"
            :visibilityProp="'hidden-sm-and-up'"
            :themeProp="theme.theme"
            />

            <ParaCards
            :parallaxProp="parallaxes3"
            :layoutProp="'column'"
            :visibilityProp="'hidden-xs-only'"
            :themeProp="theme.theme"
            />
            <ImgCards
            :imgProp="parallaxes3"
            :layoutProp="'column'"
            :visibilityProp="'hidden-sm-and-up'"
            :themeProp="theme.theme"
            />
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
            parallaxes1: [
                { image: 'pic.jpg', title: 'Tyler Berkshire', button: 'About Me', route: 'about' }
            ],
            images1: [
                { image: 'comingsoon.jpg', title: 'Art Gallery', button: 'Coming Soon', route: 'gallery' },
                { image: 'comingsoon.jpg', title: 'Library', button: 'Coming Soon', route: 'library' }
            ],
            parallaxes2: [
                { image: 'comingsoon.jpg', title: 'Headway', button: 'Coming Soon', route: 'headway' }
            ],
            images2: [
                { image: 'comingsoon.jpg', title: 'Quote of the Day', button: 'Coming Soon', route: 'quote' },
                { image: 'comingsoon.jpg', title: 'Game', button: 'Coming Soon', route: 'game' }
            ],
            parallaxes3: [
                { image: 'melee.png', title: 'Melee Tournament Tracker', button: 'Coming Soon', route: 'melee' }
            ]
        }
    }
}
</script>
