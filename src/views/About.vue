<template>
    <v-container fluid fill-height class="about indigo lighten-3">
        <Navbar :colorProp="theme.color" :imageProp="theme.image"/>  
        <v-container justify-center > 
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card :class="'grey darken-4 ' + theme.color">
                        <v-layout hidden-xs-only>
                            <v-flex xs5>
                                <v-img :src="require('@/assets/aboutimage.png')" contain height="300px" />
                            </v-flex>
                            <v-flex xs7>
                                <v-card-title primary-title>
                                    <div>
                                        <div class="display-3 font-weight-thin">Tyler Berkshire</div>
                                        <v-divider dark />
                                        <div class="display-2 font-weight-thin white--text">Computer Programmer</div>
                                        <div class="display-2 font-weight-thin white--text">University of Dayton CPS '19</div>
                                    </div>
                                </v-card-title>
                            </v-flex>
                        </v-layout>
                        <!-- Mobile Only -->
                        <v-layout column hidden-sm-and-up>
                            <v-flex xs5>
                                <v-img :src="require('@/assets/aboutimage.png')" contain height="300px" />
                            </v-flex>
                            <v-flex xs7>
                                <v-card-title primary-title>
                                    <div>
                                        <div class="display-2 font-weight-thin">Tyler Berkshire</div>
                                        <v-divider dark />
                                        <div class="display-1 font-weight-thin white--text">Computer Programmer</div>
                                        <div class="display-1 font-weight-thin white--text">University of Dayton CPS '19</div>
                                    </div>
                                </v-card-title>
                            </v-flex>
                        </v-layout>
                    </v-card>
                    <v-divider dark class="py-1" />
                    <v-flex v-for="tile in cards" :key="tile.title">
                        <AboutTile :titleProp="tile.title" :alignProp="tile.align" :textProp="tile.text" :picProp="tile.pic" />
                        <v-divider dark class="py-1" />
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
                { title: 'Background', align: 'center', pic: 'gal1.jpg', 
                    text: [
                        'My name is Tyler Berkshire and I was born and raised in the greater Dayton, '
                        + 'Ohio area. I attended Bethel Local Schools for my primary and secondary '
                        + 'education. I was a part of the Varsity Bethel Men\'s Soccer Team for all four '
                        + 'years of my secondary education and I received my Honors Diploma in May of 2016 ' 
                        + 'with a 4.10 GPA. After high school, I attended the University of Dayton where '
                        + 'I am currently enrolled in the Computer Science department to earn my Bachelor '
                        + 'of Science degree with a minor in Psychology. Some of my favorite courses I took '
                        + 'were Operating Systems, Data Structures, Computer Organzation & Architecture, '
                        + 'Cognition, Forensic Psychology, Creative Writing, and Descriptive Astronomy. '
                        + 'I plan on graduating in December of 2020. During my time at UD, I also co-founded '
                        + 'and served as president of the Super Smash Brothers Club which has become one of the '
                        + 'fastest growing student organizations at the university since its creation in 2017.',

                        'TESTING'
                    ]},
                { title: 'Programming Experience', align: 'left', pic: 'comingsoon.jpg',
                    text: [
                        'Hey',
                        'Testing'
                    ]},
                { title: 'Hobbies', align: 'right', pic: 'comingsoon.jpg',
                    text: [
                        'Hey',
                        'Testing'
                    ]}
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

