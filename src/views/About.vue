<!--
TODO
neon sign three animation of smash combos
inspiration section icons
mobile
-->
<template>
  <v-container fluid fill-height class="about">
    <v-layout wrap text-xs-center justify-center>
      <v-flex xs12>
        <Topbar :inner="true" :image="theme.image" :color="theme.color" />
      </v-flex>
      <!-- RESUME -->
      <v-flex xs2 />
      <v-flex xs8 class="wiggles">
        <div class="text">
          <div class="ma-1">resumé</div>
          <div class="ma-1">履歴書</div>
        </div>
        <div class="words">
          <img src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs_2k-2.png" />
          <div class="ma-1"><a href="https://github.com/BerkshireT/Resume/blob/main/TylerBerkshire_Resume.pdf" target="blank">view</a></div>
        </div>
      </v-flex>
      <v-flex xs2 />
      <!-- END RESUME -->
      <v-flex xs12> hi </v-flex>
      <!-- INTERESTS -->
      <v-flex xs2 />
      <v-flex xs8 class="diamonds">
        <div class="text">
          <div class="ma-1">interests</div>
          <div class="ma-1">興味</div>
        </div>
        <div class="words">
          <img class="img-spaced" src="https://win98icons.alexmeub.com/icons/png/keyboard-3.png" />
          <img class="img-spaced" src="https://win98icons.alexmeub.com/icons/png/camera-0.png" />
          <img class="img-spaced" src="https://win98icons.alexmeub.com/icons/png/joystick-5.png" />
          <img class="img-spaced" src="https://win98icons.alexmeub.com/icons/png/globe_map-0.png" />
          <img class="img-spaced" src="https://win98icons.alexmeub.com/icons/png/multimedia-2.png" />
          <img class="img-spaced" src="https://win98icons.alexmeub.com/icons/png/tree-0.png" />
          <img class="img-spaced" src="https://win98icons.alexmeub.com/icons/png/help_book_cool-4.png" />
        </div>
      </v-flex>
      <v-flex xs2 />
      <!-- END INTERESTS -->
      <v-flex xs12> hi </v-flex>
      <!-- PERSONALS -->
      <v-flex xs2 />
      <v-flex xs8 class="circles">
        <div class="text">
          <div class="ma-1">personals</div>
          <div class="ma-1">パーソナルズ</div>
        </div>
        <div class="words">
          <div class="ma-1">
            <a href="https://github.com/BerkshireT" target="blank"><img class="img-spaced" src="https://image.flaticon.com/icons/png/512/25/25231.png" height="48px" width="48px"/></a>
            <a href="https://open.spotify.com/user/cf9hq7vhmnz4lizol8969ph6t?si=3uj903wIRji4mHXT0q3GmQ" target="blank"><img class="img-spaced" src="https://image.flaticon.com/icons/png/512/2111/2111624.png" height="48px" width="48px"/></a>
            <a href="https://www.instagram.com/terminalanomaly/" target="blank"><img class="img-spaced" src="https://image.flaticon.com/icons/png/512/174/174855.png" height="48px" width="48px"/></a>
            <a href="https://www.goodreads.com/user/show/108732185-tyler" target="blank"><img class="img-spaced" src="https://www.flaticon.com/svg/static/icons/svg/2111/2111431.svg" height="48px" width="48px"/></a>
            <a href="https://www.myanimelist.net/animelist/TerminalAnomaly" target="blank"><img class="img-spaced" src="https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAiC8a86sHufn_jOI-JGtoCQ" height="48px" width="48px"/></a>
            <a href="https://www.twitter.com/TerminalAnomaly" target="blank"><img class="img-spaced" src="https://elementarylibrarian.com/wp-content/uploads/2013/11/twitter-bird-white-on-blue.png" height="48px" width="48px"/></a>
            <a href="https://steamcommunity.com/id/terminalanomaly/" target="blank"><img class="img-spaced" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1024px-Steam_icon_logo.svg.png" height="48px" width="48px"/></a>
          </div>
        </div>
      </v-flex>
      <v-flex xs2 />
      <!-- END PERSONALS -->
      <v-flex xs12> hi </v-flex>
      <!-- VISTAS -->
      <v-flex xs2 />
      <v-flex xs8 class="fan">
        <div class="text">
          <div class="ma-1">vistas</div>
          <div class="ma-1">眺望</div>
        </div>
        <div class="words">
          <div class="ma-1"> <!--
            <a href="http://cachemonet.com/" target="blank"><img class="img-spaced" :src="require()" height="48px" width="48px"/></a>
            <a href="http://zoomquilt2.com/" target="blank"><img class="img-spaced" :src="require()" height="48px" width="48px"/></a>
            <a href="https://www.samspratt.com/" target="blank"><img class="img-spaced" :src="require()" height="48px" width="48px"/></a>
            <a href="https://falsememories.neocities.org/" target="blank"><img class="img-spaced" :src="require()" height="48px" width="48px"/></a>
            <a href="https://blissnet.neocities.org/" target="blank"><img class="img-spaced" :src="require()" height="48px" width="48px"/></a>
            <a href="https://www.youtube.com/channel/UCWlhyyYBiD67Aju1CXUgaug" target="blank"><img class="img-spaced" :src="require()" height="48px" width="48px"/></a>
            <a href="https://jdan.github.io/98.css/" target="blank"><img class="img-spaced" :src="require()" height="48px" width="48px"/></a> -->
          </div>
        </div>
      </v-flex>
      <v-flex xs2 />
      <!-- END VISTAS -->
      <v-flex xs12> hi </v-flex>
      <!-- CONTACT -->
      <v-flex xs2 />
      <v-flex xs8 class="tac">
        <div class="text">
          <div class="ma-1">contact</div>
          <div class="ma-1">連絡先</div>
        </div>
        <div class="words">
          <img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png" />
          <div class="ma-1"><a href="mailto:berkshiret122@gmail.com" target="blank">send virtual mail</a></div>
        </div>
      </v-flex>
      <v-flex xs2 />
      <!-- END CONTACT -->
    </v-layout>
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Topbar from '@/components/Topbar.vue'

export default {
  title: 'ABOUT',
  components: { Footer, Topbar },
  data () {
     return {
        theme: { color: '#01cdfe', image: 'ta-blue.gif' },
        dialogR: false,
        dialogI: false,
        dialogL: false,
        dialogC: false
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

.text, .words {
  float: left;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin-top: .5em;
}

.text {
  font-size: 4em;
  letter-spacing: .5em;
  font-family: 'Cutive Mono', 'Courier', monospace;
  margin-bottom: .5em;
}

.words {
  font-size: 3.5em;
  font-family: "Times New Roman", Times, serif;
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

.wiggles a:hover, .circles a:hover, .tac a:hover {
  color: #b967ff;
  transition: all 2s ease;
}

.diamonds a:hover, .fan a:hover {
  color: #01cdfe;
  transition: all 2s ease;
}

.wiggles, .diamonds, .circles, .fan, .tac {
  background-repeat: repeat;
  border-style: double;
  border-color: white;
  border-right: 0;
  border-bottom: 0;
  box-shadow: 10px 10px;
  text-shadow: 2px 2px black;
}

.wiggles {
  background-color: #01cdfe;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b967ff' fill-opacity='1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.diamonds {
  background-color: #b967ff;
  background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%2301cdfe' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.circles {
  background-color: #01cdfe;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b967ff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.fan {
  background-color: #b967ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%2301cdfe' fill-opacity='1' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");
}

.tac {
  background-color: #01cdfe;
  background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23b967ff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>