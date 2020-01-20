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
                      <v-img v-else :src="require('@/assets/programming/' + icon.icon)" contain max-height="112px" class="pa-2" />
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
                      <v-img v-else :src="require('@/assets/programming/' + icon.icon)" contain max-height="56px" class="pa-2" />
                    </a>
                    <div class="pa-2 headline font-weight-thin white--text">{{ icon.lang }}</div>
                    <div class="pa-2 subheading">{{ icon.level }}</div>
                    <v-divider dark class="py-2" />
                  </v-flex>
                </v-layout>
                <!-- End Programming Mobile-->
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-layout>
        </v-card>
        <v-divider dark class="py-1" />
        <!-- Education -->
        <v-card>
          <v-layout>
            <v-expansion-panel>
              <v-expansion-panel-content :class="'grey darken-4 ' + theme.color">
                <template v-slot:header>
                <div class="pa-3 text-xs-center display-2 font-weight-thin">Education</div>
                </template>
                <template v-slot:actions>
                  <v-icon color="indigo lighten-3">$vuetify.icons.expand</v-icon>
                </template>
                <v-layout row wrap v-for="school in educationText" :key="school.place" class="text-xs-left hidden-xs-only text-info">
                  <v-flex xs1 />
                  <v-flex xs3 class="pl-5 pb-1 mr-5 headline font-weight-light">{{ school.place }}</v-flex>
                  <v-flex xs7 class="pb-1 headline font-weight-light">{{ school.status }}</v-flex>
                  <v-flex xs1 />
                  <v-flex xs3 class="pl-5 pb-3 mr-5 subheading font-weight-light white--text">
                    {{ school.date }}
                    <a v-bind:href="school.link" target="blank">
                      <v-img :src="require('@/assets/school/' + school.logo + '.png')" contain max-height="175px" />
                    </a>
                  </v-flex>
                  <v-flex xs7 class="pb-3 subheading font-weight-light white--text">{{ school.info }}</v-flex>
                  <v-flex xs1 />
                </v-layout>
                <!-- Education Mobile-->
                <v-layout row wrap v-for="(school, index) in educationText" :key="index" class="text-xs-left hidden-sm-and-up text-info">
                  <v-flex xs12 class="pl-2 pb-1 headline font-weight-light">{{ school.place }}</v-flex>
                  <v-flex xs12 class="pl-2 pb-1 body-2 font-weight-light white--text">{{ school.date }}</v-flex>
                  <v-flex xs12 class="pl-2 pb-3 subheading font-weight-light">{{ school.status }}</v-flex>
                </v-layout>
                <!-- End Education Mobile -->
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-layout>
        </v-card>
        <v-divider dark class="py-1" />
        <!-- Work -->
        <v-card>
          <v-layout>
            <v-expansion-panel>
              <v-expansion-panel-content :class="'grey darken-4 ' + theme.color">
                <template v-slot:header>
                <div class="pa-3 text-xs-center display-2 font-weight-thin">Work Experience</div>
                </template>
                <template v-slot:actions>
                  <v-icon color="indigo lighten-3">$vuetify.icons.expand</v-icon>
                </template>
                <v-layout row wrap v-for="work in workText" :key="work.place" class="text-xs-left hidden-xs-only text-info">
                  <v-flex xs1 />
                  <v-flex xs3 class="pl-5 pb-1 mr-5 headline font-weight-light">{{ work.place }}</v-flex>
                  <v-flex xs7 class="pb-1 headline font-weight-light">{{ work.position }}</v-flex>
                  <v-flex xs1 />
                  <v-flex xs3 class="pl-5 pb-3 mr-5 subheading font-weight-light white--text">
                    {{ work.date }}
                    <a v-bind:href="work.link" target="blank">
                      <v-img class="mt-5" :src="require('@/assets/work/' + work.logo + '.png')" contain max-height="125px" />
                    </a>
                  </v-flex>
                  <v-flex xs7 class="pb-3 subheading font-weight-light white--text">{{ work.info }}</v-flex>
                  <v-flex xs1 />
                </v-layout>
                <!-- Work Mobile-->
                <v-layout row wrap v-for="(work, index) in workText" :key="index" class="text-xs-left hidden-sm-and-up text-info">
                  <v-flex xs12 class="pl-2 pb-1 headline font-weight-light">{{ work.place }}</v-flex>
                  <v-flex xs12 class="pl-2 pb-1 body-2 font-weight-light white--text">{{ work.date }}</v-flex>
                  <v-flex xs12 class="pl-2 pb-3 subheading font-weight-light">{{ work.position }}</v-flex>
                </v-layout>
                <!-- End Work Mobile -->
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-layout>
        </v-card>
        <v-divider dark class="py-1" />
        <!-- Interests -->
        <v-card>
          <v-layout>
            <v-expansion-panel>
              <v-expansion-panel-content :class="'grey darken-4 ' + theme.color">
                <template v-slot:header>
                <div class="pa-3 text-xs-center display-2 font-weight-thin">Interests</div>
                </template>
                <template v-slot:actions>
                  <v-icon color="indigo lighten-3">$vuetify.icons.expand</v-icon>
                </template>
                <div class="wrap hidden-xs-only">
                  <div class="content" v-for="interest in interestsText" :key="interest.title">
                    <div class="content-overlay" />
                    <a v-bind:href="interest.link" target="blank">
                      <img class="content-image" :src="require('@/assets/interests/' + interest.pic + '.png')">
                      <div class="content-details fadeIn-top">
                        <h3>{{ interest.title }}</h3>
                        <p>{{ interest.desc }}</p>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- Interests Mobile-->
                <div class="wrap hidden-sm-and-up">
                  <div class="content-mobile" v-for="interest in interestsText" :key="interest.title">
                    <div class="content-overlay" />
                    <a v-bind:href="interest.link" target="blank">
                      <img class="content-image" :src="require('@/assets/interests/' + interest.pic + '.png')">
                      <div class="content-details fadeIn-top">
                        <h3>{{ interest.title }}</h3>
                        <p>{{ interest.desc }}</p>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- End Interests Mobile -->
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-layout>
        </v-card>
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
                  'and with Honors. I thoroughly enjoyed my time at UD and some of my favorite classes were Emerging Programming Languages, Linux Programming, Descriptive Astronomy, ' +
                  'Biopsychology, and Abnormal Psychology. My capstone project involved building a full-stack web application using Vue.JS, Kotlin, Spring, and MongoDB. This project ' +
                  'taught me how much I enjoy all sides software development and showed me the scope of knowledge I had gained in three years. I also had the chance to co-found the ' +
                  'University of Dayton Super Smash Brothers Club, which became one of the fastest growing clubs at the university!', logo: 'ud', link: 'https://udayton.edu/' },
        { place: 'Bethel High School', status: 'Highschool Diploma (Honors)', date: 'August 2012 - May 2016', info: 'I graduated highschool with a 4.10 GPA ' + 
                  'and enjoyed being a part of the Varsity Men\'s Soccer Team for all four years of my education. I was also a member of the National Honors Society ' + 
                  'and Envirothon Team (an environmental education competition). During my third year of school, I discovered an interest in computer science and ' +
                  'started making small Visual Basic applications after school. The rest is history!', logo: 'bethel', link: 'http://www.bethel.k12.oh.us/' }
      ],
      workText: [
        { place: 'Hyland Software', position: 'Development Intern', date: 'May 2018 - August 2018 & May 2019 - August 2019', info: 'Hyland is a growing software company ' +
                  'located in Westlake, OH, who is most well-known for OnBase, an enterprise information management application. I was placed in the Infrastructure Runway team ' +
                  'under their Content Services Platform. I worked to create a command-line utility in C# which helped developer machines transition from TFS to Git without ' +
                  'losing or transferring the wrong project resource files. I also developed Roslyn code analyzers, used SourceLink to debug NuGet packages, and created a ' +
                  'cloud-based story recording application with Google Actions which received first place at the Intern Hackathon! The next summer I was lucky enough to be ' +
                  'welcomed back to the same team where I mainly worked on developing UI Automation Toolkits in C# for use with internal installers and continuous integration ' +
                  'regression testing. My team also won the Intern Hackathon for a second year in a row with our VR "knock-knock" system which utilized AWS IoT buttons to notify ' +
                  'VR developers when someone entered the room. Hyland offers a great atmosphere for collaboration and growth and I enjoyed exploring downtown and the greater ' +
                  'Cleveland area!', logo: 'hyland', link: 'https://www.hyland.com/en' },
        { place: 'U.S. Air Force Institute of Technology', position: 'S.O.C.H.E. Research Intern', date: 'June 2017 - August 2017', info: 'At first, it was pretty intimidating ' +
                  'to commute to Wright Patterson Air Force Base everyday for work, but I eventually found my groove and ended up taking away a lot from my time as a research intern. ' +
                  'I was working on a team of three other interns to help a lieutenant with his PhD dissertation. Our task was to develop and train a convolutional neural network ' +
                  'to recognize airports and naval bases in AWS and DigitalGlobe Landsat (Land Remote-Sensing Satellite) images. I learned a lot about modern methods of ' +
                  'machine learning and ran through the sample TensorFlow projects using Python as preparation for the task. My main job in the cycle of retrieving images, ' +
                  'splicing them for analysis, and categorizing them for training and testing was to locate known airports and naval bases and download any Landsat images of them.' +
                  'I developed web scrapers for internal sites to gather data about the locations of interest and created a GUI to download thousands of images from AWS and ' +
                  'DigitalGlobe servers. I utilized parallel processing to speed up this task significantly, but it still took an overnight run of the application to retrieve ' +
                  'all of the imgages due to the bottlenecked download bitrate of the internet connection. It was really cool to see the direction computer science is heading ' +
                  'in terms of artificial intelligence and I learned a lot about how to work efficiently as a team during the internship.', logo: 'afit', link: 'https://www.afit.edu/' },
        { place: 'Trophy Nut Company', position: 'Bulk Production Operator', date: 'May 2016 - August 2016', info: 'My very first job was working in a local peanut and candy ' +
                  'shop\'s production factory where my father had worked as a manager for years. During my summer there, I worked on various machines which included the peanut roaster, ' +
                  'canning line, garbage disposal, and the bulk production area (my main job). The bulk production area consisted of a filling machine which placed various types ' +
                  'of products into boxes that then had to be loaded onto wood pallets and taken to shipping. I managed to increase the output efficiency of bulk production by ' +
                  '10% in a few months which was measured by weekly production and shipping paperwork I had to complete. I did this by thinking of ways to reduce downtime, such as ' +
                  'placing filled boxes on temporary stacks until a new pallet was dropped off for them. The main takeaway I got from this experience was the value ' +
                  'of a good work ethic and a better appreciation for the opportunity I had to pursue higher education.', logo: 'trophy', link: 'https://www.trophynut.com/' }
      ],
      interestsText: [
        { title: 'Super Smash Brothers Melee', pic: 'melee', link: 'https://thumbs.gfycat.com/ImpressionableSereneHoneyeater-size_restricted.gif', desc: 'Melee is my '+ 
                  'favorite pastime and I strive to improve my gameplay daily. I\'ve met some amazing people through Smash, and wish to keep this commutinty alive by attending ' +
                  'and running tournaments!' },
        { title: 'Music', pic: 'music', link: 'https://open.spotify.com/user/cf9hq7vhmnz4lizol8969ph6t?si=3uj903wIRji4mHXT0q3GmQ', desc: 'Music takes up a large portion of ' +
                  'my life and I love discovering new songs! My taste changes with the wind, but I lean towards pop, rap, and math rock with some of my favorite artists ' +
                  'being Ariana Grande, Tyler the Creator, and JPEGMAFIA. Click here to have a listen to my Spotify playlists!' },
        { title: 'Reading', pic: 'reading', link: 'https://www.goodreads.com/user/show/108732185-tyler', desc: 'My favorite genres of books are usually science fiction and ' +
                  'psychology, but I also enjoy most of the classics and the occasional shounen manga. Click here to see what I\'m currently reading!' },
        { title: 'Photography', pic: 'photography', link: 'https://www.instagram.com/terminalanomaly/', desc: 'While I do not consider myself anywhere near a professional, I\'ve ' +
                  'always enjoyed taking photographs of friends, interesting architecture, and wacky lighting. Click here to take a look at my Instagram!' }
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

.text-info {
  letter-spacing: 0.5em;
  font-size: .1em;
}

/* --- Hover Overlay -- */

.wrap {
  text-align: center;
}

.content {
  position: relative;
  width: 100%;
  max-width: 350px;
  margin: auto;
  overflow: hidden;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
}

.content-mobile {
  position: relative;
  width: 40%;
  max-width: 350px;
  margin: auto;
  overflow: hidden;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
}

.content .content-overlay {
  background: rgba(33 ,33, 33, 0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay{
  opacity: 1;
}

.content-image{
  width: 100%;
}

.content-details {
  font-size: 18px;
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  word-wrap:break-word;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3{
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p{
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-top{
  top: 20%;
}
</style>
