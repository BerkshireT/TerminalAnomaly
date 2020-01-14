<template>
    <v-container fluid fill-height class="about indigo lighten-3">
        <Navbar :colorProp="theme.color" :imageProp="theme.image"/>  
        <v-container justify-center > 
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card :class="'grey darken-4 ' + theme.color">
                        <v-layout hidden-sm-and-down>
                            <v-flex xs5>
                                <v-img :src="require('@/assets/aboutimage.png')" contain height="300px" />
                            </v-flex>
                            <v-flex xs7>
                                <v-card-title primary-title>
                                    <div>
                                        <div class="display-3 font-weight-thin">Tyler Berkshire</div>
                                        <v-divider dark />
                                    </div>
                                </v-card-title>
                            </v-flex>
                        </v-layout>
                        <!-- Mobile -->
                        <v-layout column hidden-md-and-up>
                            <v-flex xs12>
                                <div>
                                    <div class="display-2 text-xs-center font-weight-thin py-2">Tyler Berkshire</div>
                                </div>
                            </v-flex>
                            <v-flex xs5>
                                <v-img :src="require('@/assets/aboutimage.png')" contain height="200px" />
                            </v-flex>
                        </v-layout>
                        <!-- End Mobile -->
                    </v-card>
                    <v-divider dark class="py-1" />
                    <v-flex>
                        <ProgramTile :titleProp="cards[0].title" :textProp="cards[0].text" :iconsProp="cards[0].icons" />
                        <v-divider dark class="py-1" />
                        <EducationTile :sectionProp="cards[1]" />
                        <v-divider dark class="py-1" />
                        <WorkTile :sectionProp="cards[2]" />
                        <v-divider dark class="py-1" />
                        <InterestsTile :sectionProp="cards[3]" />
                    </v-flex>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
import Navbar from '@/components/Navbar'
import EducationTile from '@/components/About/EducationTile'
import ProgramTile from '@/components/About/ProgramTile'
import WorkTile from '@/componenets/About/WorkTile'
import InterestsTile from '@/components/About/InterestsTile'

export default {
    title: 'About - TerminalAnomaly',
    components: { Navbar, EducationTile, ProgramTile, WorkTile, InterestsTile },
    data () {
        return {
            theme: { 
                theme: 'indigo', 
                color: 'indigo--text text--lighten-3', 
                image: 'ta-nav-in.png' 
            },
            cards: [
                { title: 'Programming Experience',
                    icons: [
                        { icon: 'java', fa: true, type: 'fab', lang: 'Java', route: '', stars: 5 },
                        { icon: 'vuejs', fa: true, type: 'fab', lang: 'VueJS', route: '', stars: 4 },
                        { icon: 'CSharp.png', fa: false, lang: 'C#', route: '', stars: 5 },
                        { icon: 'GoLang.png', fa: false, lang: 'GoLang', route: '', stars: 2 },
                        { icon: 'C.png', fa: false, lang: 'C', route: '', stars: 3 },
                        { icon: 'CPP.png', fa: false, lang: 'C++', route: '', stars: 2 },
                        { icon: 'Elixir.png', fa: false, lang: 'Elixir', route: '', stars: 2 },
                        { icon: 'python', fa: true, type: 'fab', lang: 'Python', route: '', stars: 2 },
                        { icon: 'terminal', fa: true, type: 'fas', lang: 'Assembly', route: '', stars: 1 },
                        { icon: 'Kotlin.png', fa: false, lang: 'Kotlin', route: '', stars: 2 },
                        { icon: 'Racket.png', fa: false, lang: "Racket", route: '', stars: 2 },
                        { icon: 'MongoDB.png', fa: false, lang: "MongoDB", route: '', stars: 1 },
                        { icon: 'windows', fa: true, type: 'fab', lang: "Windows", route: '', stars: 5 },
                        { icon: 'linux', fa: true, type: 'fab', lang: 'Linux', route: '', stars: 4},
                        { icon: 'aws', fa: true, type: 'fab', lang: 'AWS', route: '', stars: 1 }
                    ]},
                { title: 'Education' },
                { title: 'Work Experience' },
                { title: 'Interests' }
            ]
        }
    }
}
</script>

<style scoped>
.AboutTiles {
    font-family: "Arial", sans-serif;
    color: white;
}
</style>

