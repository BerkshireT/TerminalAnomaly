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
                                        <div class="display-2 font-weight-thin white--text">Computer Programmer</div>
                                        <div class="display-2 font-weight-thin white--text">University of Dayton CPS '19</div>
                                    </div>
                                </v-card-title>
                            </v-flex>
                        </v-layout>
                        <!-- Mobile Only -->
                        <v-layout column hidden-md-and-up>
                            <v-flex xs5>
                                <v-img :src="require('@/assets/aboutimage.png')" contain height="300px" />
                            </v-flex>
                            <v-flex xs12>
                                <div>
                                    <div class="display-2 text-xs-center font-weight-thin">Tyler Berkshire</div>
                                    <v-divider dark />
                                    <div class="display-1 text-xs-center font-weight-thin white--text">Computer Programmer</div>
                                    <div class="display-1 text-xs-center font-weight-thin white--text">University of Dayton CPS '19</div>
                                </div>
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
                        + 'I plan on graduating in December of 2019. During my time at UD, I also co-founded '
                        + 'and served as president of the Super Smash Brothers Club which has become one of the '
                        + 'fastest growing student organizations at the university since its creation in 2017.',

                        'During the summer of 2017, I had the wonderful opportunity of working as an intern for the United '
                        + 'States Air Force Institute of Technology under the supervision of Capt. Robet Loibl '
                        + 'and Dr. Kenneth Hopkinson. I worked with Capt. Loibl and three other interns to help '
                        + 'develop tools to automatically collect and mark satellite data for use with Google\'s '
                        + 'TensorFlow machine learning platform. The ultimate goal of the project was to train '
                        + 'a neural network to detect airports, naval ports, and other locations of interest from '
                        + 'satellite images. I created two GUIs in C# to automatically download images from NASA\'s '
                        + 'Landsat database and DigitalGlobe when given a set of coordinates. The images were then passed '
                        + 'on to the other tools we created in Python. They partitioned the images into sets of '
                        + '"relevant" and "irrelevant data. With these methods, we were able to create a training '
                        + 'data set of about 10,000 images for the neural network.',

                        'I also had the delightful opportunity of working as an intern for Hyland Software in Cleveland, Ohio '
                        + 'during the summer of 2018. I worked on a few projects during my time as a development '
                        + 'intern at Hyland. The first, and largest, was a command-line utility which helped '
                        + 'properly transition machines from using Microsoft\'s Team Foundation Server to ' 
                        + 'a different form of Git version control. This utility analyzed a given directory '
                        + 'for any unused or missing resource files and deleted or added them accordingly. '
                        + 'During this time, I also learned to write my own unit tests and implemented these '
                        + 'tests into my utility. Next, I worked with three other interns to develop an application '
                        + 'as part of Hyland\'s Intern Hackathon. Our application utilized Hyland\'s cloud storage '
                        + 'platform, ShareBase, to hold audio recordings for playback triggered by Google Actions. The '
                        + 'goal was to enable parents to record bedtime stories for their children and have them play '
                        + 'those stories by saying, "Hey Google, tell me a bedtime story." Our application won first place '
                        + 'in the contest! Finally, I used Microsoft\'s SourceLink to create NuGet packages and developed '
                        + 'Microsoft Roslyn code analyzers to help other developers enforce Hyland\'s coding style guidelines.',

                        'If you would like to see all of the projects I have completed and am currently working on, '
                        + 'including some of the ones mentioned above, be sure to find them on the Home Page!'
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
.AboutTile {
    font-family: "Arial", sans-serif;
}
</style>

