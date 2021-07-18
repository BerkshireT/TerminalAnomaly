<template>
  <v-container fluid fill-height class="about">
    <v-layout wrap text-xs-center justify-center>
      <v-flex xs12>
        <Topbar :inner="true" :image="theme.image" :color="theme.color" />
      </v-flex>
      <!-- RESUME -->
      <v-flex xs2 v-if="$vuetify.breakpoint.lgAndUp"/>
      <v-flex xs8 class="resumeBox" v-if="$vuetify.breakpoint.lgAndUp">
        <div class="text">
          <div class="ma-1">resumé</div>
          <div class="ma-1">履歴書</div>
        </div>
        <div class="words">
          <img class="resume" src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs_2k-2.png" />
          <div class="ma-1"><a href="https://github.com/BerkshireT/Resume/blob/main/TylerBerkshire_Resume.pdf" target="blank">view</a></div>
        </div>
      </v-flex>
      <MobileAbout v-else :title="'resumé'" :japanese="'履歴書'" :innerText="1"/>
      <v-flex xs2 v-if="$vuetify.breakpoint.lgAndUp"/>
      <!-- END RESUME -->
      <!-- PERSONALS -->
      <v-flex xs2 v-if="$vuetify.breakpoint.lgAndUp"/>
      <v-flex xs8 class="personalsBox" v-if="$vuetify.breakpoint.lgAndUp">
        <div class="words">
          <div class="ma-1 personals">
            <a href="https://github.com/BerkshireT" target="blank"><img class="img-spaced" src="https://image.flaticon.com/icons/png/512/25/25231.png" height="48px" width="48px"/></a>
            <a href="https://open.spotify.com/user/cf9hq7vhmnz4lizol8969ph6t?si=3uj903wIRji4mHXT0q3GmQ" target="blank"><img class="img-spaced" src="https://image.flaticon.com/icons/png/512/2111/2111624.png" height="48px" width="48px"/></a>
            <a href="https://www.instagram.com/terminalanomaly/" target="blank"><img class="img-spaced" src="https://image.flaticon.com/icons/png/512/174/174855.png" height="48px" width="48px"/></a>
            <a href="https://www.youtube.com/c/TerminalAnomaly" target="blank"><img class="img-spaced" src="https://github.com/BerkshireT/Assets/blob/main/yt.png?raw=true" height="48px" width="48px"/></a>
            <a href="https://www.goodreads.com/user/show/108732185-tyler" target="blank"><img class="img-spaced" src="https://www.flaticon.com/svg/static/icons/svg/2111/2111431.svg" height="48px" width="48px"/></a>
            <a href="https://anilist.co/user/terminalanomaly/animelist" target="blank"><img class="img-spaced" src="https://anilist.co/img/icons/android-chrome-512x512.png" height="48px" width="48px"/></a>
            <a href="https://www.twitter.com/TerminalAnomaly" target="blank"><img class="img-spaced" src="https://elementarylibrarian.com/wp-content/uploads/2013/11/twitter-bird-white-on-blue.png" height="48px" width="48px"/></a>
          </div>
        </div>
        <div class="text">
          <div class="ma-1">personals</div>
          <div class="ma-1">パーソナルズ</div>
        </div>
      </v-flex>
      <MobileAbout v-else :title="'personals'" :japanese="'パーソナルズ'" :innerText="3"/>
      <v-flex xs2 v-if="$vuetify.breakpoint.lgAndUp"/>
      <!-- END PERSONALS -->
      <!-- CONTACT -->
      <v-flex xs2 v-if="$vuetify.breakpoint.lgAndUp"/>
      <v-flex xs8 class="contactBox" v-if="$vuetify.breakpoint.lgAndUp">
        <div class="text">
          <div class="ma-1">contact</div>
          <div class="ma-1">連絡先</div>
        </div>
        <div class="words">
          <img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png" />
          <div class="ma-1"><a href="mailto:berkshiret122@gmail.com" target="blank">send virtual mail</a></div>
        </div>
      </v-flex>
      <MobileAbout v-else :title="'contact'" :japanese="'連絡先'" :innerText="5"/>
      <v-flex xs2 v-if="$vuetify.breakpoint.lgAndUp"/>
      <!-- END CONTACT -->
    </v-layout>
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Topbar from '@/components/Topbar.vue'
import MobileAbout from '@/components/MobileAbout.vue'

export default {
  title: 'ABOUT',
  components: { Footer, Topbar, MobileAbout },
  data () {
     return {
        theme: { color: '#01cdfe', image: 'ta-blue.gif' },
     }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');

.about {
  width: 100%;
  height: 100%;
  background: url(../assets/backgrounds/grid-blue.png);
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  color: white;
}

.text, .words, .vistas {
  float: left;
  width: 50%;
  justify-content: center;
  align-items: center;
}

.text {
  font-size: 4em;
  letter-spacing: .5em;
  font-family: 'Cutive Mono', 'Courier', monospace;
  margin-top: .5em;
  margin-bottom: .5em;
}

.words {
  font-size: 3em;
  font-family: "Times New Roman", Times, serif;
  margin-top: 1.5em;
}

.img-spaced {
  margin: .5em;
  justify-content: center;
  align-items: center;
}

a {
  color: inherit;
  text-decoration: underline;
}

.neon {
  margin-top: 1.5em;
  margin-bottom: 1em;
  max-height: 200px;
}

.resumeBox a:hover, .personalsBox a:hover, .contactBox a:hover {
  color: #b967ff;
  transition: all 1s ease;
}

.resumeBox, .personalsBox, .contactBox {
  background-repeat: repeat;
  border-style: solid;
  border-color: white;
  border-right: 0;
  border-bottom: 0;
  box-shadow: 10px 10px;
  text-shadow: 2px 2px black;
  margin-top: 3em;
}

.personals {
  box-shadow: 10px 10px #01cdfe;
}

.resumeBox {
  background-color: #01cdfe;
}

.personalsBox {
  background-color: #b967ff;
}

.contactBox {
  background-color: #01cdfe;
}
</style>