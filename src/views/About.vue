<template>
    <v-container fluid fill-height class="about indigo lighten-3">
        <Navbar :colorProp="theme.color" :imageProp="theme.image"/>  
        <v-container justify-center > 
            <v-layout row wrap>
                <v-flex xs12>
                    <!-- Title -->
                    <v-card :class="'grey darken-4 ' + theme.color">
                        <v-layout hidden-sm-and-down>
                            <v-flex xs5>
                                <v-img :src="require('@/assets/aboutimage.png')" contain height="300px" />
                            </v-flex>
                            <v-flex xs7>
                                <v-card-title primary-title>
                                    <v-flex xs7>
                                        <div class="display-3 font-weight-thin">Tyler Berkshire</div>
                                        <v-divider dark />
                                        <div class="subheading white--text py-3 font-weight-light">{{ aboutText }}</div>
                                    </v-flex>
                                </v-card-title>
                            </v-flex>
                        </v-layout>
                        <!-- Title Mobile -->
                        <v-layout column hidden-md-and-up>
                            <v-flex xs12>
                                <div>
                                    <div class="display-2 text-xs-center font-weight-thin py-2">Tyler Berkshire</div>
                                    <v-divider dark />
                                    <div class="body-2 white--text text-xs-center py-3 px-3 font-weight-light">{{ aboutText }}</div>
                                </div>
                            </v-flex>
                            <v-flex xs5>
                                <v-img :src="require('@/assets/aboutimage.png')" contain height="200px" />
                            </v-flex>
                        </v-layout>
                        <!-- End Title Mobile -->
                    </v-card>
                    <v-divider dark class="py-1" />
                    <!-- Programming -->
                    <v-card>
                        <v-layout>
                            <v-flex xs12>
                                <v-expansion-panel>
                                    <v-expansion-panel-content :class="'grey darken-4 ' + theme.color">
                                        <template v-slot:header>
                                        <div class="pa-3 text-xs-center display-2 font-weight-thin">Programming Experience</div>
                                        </template>
                                        <template v-slot:actions>
                                            <v-icon color="indigo lighten-3">$vuetify.icons.expand</v-icon>
                                        </template>
                                        <v-layout row wrap class="text-xs-center hidden-xs-only">
                                            <v-flex xs4 v-for="icon in programmingIcons" :key="icon.lang">
                                                <a v-bind:href="icon.route" target="blank">
                                                    <font-awesome-icon v-if="icon.fa == true" :icon="[icon.type, icon.icon ]" class="display-4 pa-2" />
                                                    <v-img v-else :src="require('@/assets/' + icon.icon)" contain max-height="112px" class="pa-2" />
                                                </a>
                                                <div class="pa-2 display-2 font-weight-thin white--text">{{ icon.lang }}</div>
                                                <v-layout row wrap justify-center class="py-2">
                                                    <v-rating background-color="indigo lighten-3" color="indigo lighten-3" :value="icon.stars" x-large readonly />
                                                </v-layout>
                                                <v-divider dark class="py-2" />
                                            </v-flex>
                                        </v-layout>
                                        <!-- Programming Mobile-->
                                        <v-layout row wrap class="text-xs-center hidden-sm-and-up">
                                            <v-flex xs6 v-for="icon in programmingIcons" :key="icon.lang">
                                                <a v-bind:href="icon.route" target="blank">
                                                    <font-awesome-icon v-if="icon.fa == true" :icon="[icon.type, icon.icon ]" class="display-3 pa-2" />
                                                    <v-img v-else :src="require('@/assets/' + icon.icon)" contain max-height="56px" class="pa-2" />
                                                </a>
                                                <div class="pa-2 headline font-weight-thin white--text">{{ icon.lang }}</div>
                                                <div class="pa-2 subheading">{{ icon.level }}</div>
                                                <v-divider dark class="py-2" />
                                            </v-flex>
                                        </v-layout>
                                    <!-- End Programming Mobile-->
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-flex>
                        </v-layout>
                    </v-card>
                    <v-divider dark class="py-1" />
                    <!-- Education -->
                    <v-card>
                        <v-layout>
                            <v-flex xs12>
                                <v-expansion-panel>
                                    <v-expansion-panel-content :class="'grey darken-4 ' + theme.color">
                                        <template v-slot:header>
                                        <div class="pa-3 text-xs-center display-2 font-weight-thin">Education</div>
                                        </template>
                                        <template v-slot:actions>
                                            <v-icon color="indigo lighten-3">$vuetify.icons.expand</v-icon>
                                        </template>
                                        <v-layout row wrap v-for="school in educationText" :key="school.place" class="text-xs-left hidden-xs-only">
                                            <v-flex xs1 />
                                            <v-flex xs3 class="pl-5 pb-1 mr-5 headline font-weight-light">{{ school.place }}</v-flex>
                                            <v-flex xs7 class="pb-1 headline font-weight-light">{{ school.status }}</v-flex>
                                            <v-flex xs1 />
                                            <v-flex xs3 class="pl-5 pb-3 mr-5 subheading font-weight-light white--text">{{ school.date }}</v-flex>
                                            <v-flex xs7 class="pb-3 subheading font-weight-light white--text">{{ school.info }}</v-flex>
                                            <v-flex xs1 />
                                        </v-layout>
                                        <!-- Education Mobile-->
                                        <v-layout row wrap v-for="(school, index) in educationText" :key="index" class="text-xs-left hidden-sm-and-up">
                                            <v-flex xs12 class="pl-2 pb-1 headline font-weight-light">{{ school.place }}</v-flex>
                                            <v-flex xs12 class="pl-2 pb-1 body-2 font-weight-light white--text">{{ school.date }}</v-flex>
                                            <v-flex xs12 class="pl-2 pb-3 subheading font-weight-light">{{ school.status }}</v-flex>
                                        </v-layout>
                                        <!-- End Education Mobile -->
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-flex>
                        </v-layout>
                    </v-card>
                    <v-divider dark class="py-1" />
                    <!-- Work -->
                    <v-divider dark class="py-1" />
                    <!-- Interests -->
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    title: 'About - TerminalAnomaly',
    components: { Navbar },
    data () {
        return {
            theme: { 
                theme: 'indigo', 
                color: 'indigo--text text--lighten-3', 
                image: 'ta-nav-in.png' 
            },
            aboutText: 'Hi! I am a software developer, music addict, and Super Smash Brothers Melee competitor. My goals are to create unique and ingenuitive applications, ' + 
                       'widen my personal discography, and become a nationally ranked SSBM player!',
            programmingIcons: [
                { icon: 'terminal', fa: true, type: 'fas', lang: 'Assembly', route: 'https://en.wikipedia.org/wiki/Assembly_language', stars: 1, level: 'Beginner' },
                { icon: 'aws', fa: true, type: 'fab', lang: 'AWS', route: 'https://aws.amazon.com/', stars: 1, level: 'Beginner' },
                { icon: 'CSharp.png', fa: false, lang: 'C#', route: 'https://docs.microsoft.com/en-us/dotnet/csharp/', stars: 5, level: 'Advanced' },
                { icon: 'C.png', fa: false, lang: 'C', route: 'https://docs.microsoft.com/en-us/cpp/c-language/c-language-reference?view=vs-2019', stars: 3, level: 'Intermediate' },
                { icon: 'CPP.png', fa: false, lang: 'C++', route: 'http://www.cplusplus.com/doc/', stars: 2, level: 'Intermediate' },
                { icon: 'Elixir.png', fa: false, lang: 'Elixir', route: 'https://elixir-lang.org/', stars: 2, level: 'Intermediate' },
                { icon: 'FSharp.png', fa: false, lang: 'F#', route: 'https://fsharp.org', stars: 3, level: 'Intermediate' },
                { icon: 'code-branch', fa: true, type: 'fas', lang: 'Git', route : 'https://git-scm.com/', stars: 5, level: 'Advanced' },
                { icon: 'GoLang.png', fa: false, lang: 'GoLang', route: 'https://golang.org/', stars: 2, level: 'Intermediate' },
                { icon: 'java', fa: true, type: 'fab', lang: 'Java', route: 'https://www.java.com/en/', stars: 5, level: 'Advanced' },
                { icon: 'Kotlin.png', fa: false, lang: 'Kotlin', route: 'https://kotlinlang.org/', stars: 2, level: 'Intermediate' },
                { icon: 'linux', fa: true, type: 'fab', lang: 'Linux', route: 'https://www.linux.org/', stars: 4, level: 'Advanced' },
                { icon: 'MongoDB.png', fa: false, lang: "MongoDB", route: 'https://www.mongodb.com/', stars: 1, level: 'Beginner' },
                { icon: 'python', fa: true, type: 'fab', lang: 'Python', route: 'https://www.python.org/', stars: 2, level: 'Intermediate' },
                { icon: 'Racket.png', fa: false, lang: 'Racket', route: 'https://racket-lang.org/', stars: 2, level: 'Intermediate' },
                { icon: 'Spring.png', fa: false, lang: 'Spring', route: 'https://spring.io/', stars: 1, level: 'Beginner' },
                { icon: 'TensorFlow.png', fa: false, lang: 'Tensor Flow', route: 'https://www.tensorflow.org/', stars: 1, level: 'Beginner' }, 
                { icon: 'TypeScript.png', fa: false, lang: 'Type Script', route: 'https://www.typescriptlang.org/', stars: 3, level: 'Intermediate' },
                { icon: 'vuejs', fa: true, type: 'fab', lang: 'VueJS', route: 'https://vuejs.org/', stars: 4, level: 'Advanced' },
                { icon: 'windows', fa: true, type: 'fab', lang: "Windows", route: 'https://www.microsoft.com/en-us/windows', stars: 5, level: 'Advanced' },
            ],
            educationText: [
                { place: 'University of Dayton', status: 'BS in Computer Science (Minor in Psychology)', date: 'August 2016 - December 2019', info: 'I graduated magna cum laude ' +
                         'and with Honors. I thoroughly enjoyed my time at UD and some of my favorite classes were Emerging Programming Languages, Linux Programming, Decriptive Astronomy, ' +
                         'Biopsychology, and Abnormal Psychology. My capstone project involved building a full-stack web application using Vue.JS, Kotlin, Spring, and MongoDB. This project ' +
                         'taught me how much I enjoy all sides software development and showed me the scope of knowledge I had gained in three years. I also had the chance to co-found the ' +
                         'University of Dayton Super Smash Brothers Club, which became one of the fastest growing clubs at the university!' },
                { place: 'Bethel High School', status: 'Highschool Diploma (Honors)', date: 'August 2012 - May 2016', info: 'I graduated highschool with a 4.10 GPA ' + 
                         'and enjoyed being a part of the Varsity Men\'s Soccer Team for all four years of my education. I was also a member of the National Honors Society ' + 
                         'and Envirothon Team (an environmental education competition). During my third year of school, I discovered an interest in computer science and ' +
                         'started making small Visual Basic applications. The rest is history!' }
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
.theme--dark.v-divider {
    border-color: rgba(159, 168, 218) !important; 
}
a {
    color: inherit;
    text-decoration: inherit;
}
</style>
