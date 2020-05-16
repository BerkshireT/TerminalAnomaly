<template>
  <v-container fluid fill-height class="about">
    <v-layout wrap text-xs-center justify-center>
      <v-flex xs12>
        <Topbar :inner="true" :image="theme.image" :color="theme.color" />
      </v-flex>
      <v-flex xs3 v-if="$vuetify.breakpoint.lgAndUp" />
      <v-flex v-if="$vuetify.breakpoint.lgAndUp" xs3>
        <div class="text">
          <div class="ma-1">resume</div>
          <div class="ma-1">履歴書</div>
        </div>
      </v-flex>
      <!-- Mobile -->
      <v-flex xs12 v-else>
        <v-dialog v-model="dialogR" width="500">
          <template v-slot:activator="{ on }">
            <div class="text-m" v-on="on">
              <a class="a-m">
                <div class="ma-1">resume</div>
                <div class="ma-1">レジューメー</div>
              </a>
            </div>
          </template>
          <div class="dialog text-xs-center">
            <a class="dialog-text" href="./TylerBerkshire_Resume.pdf" target="blank">view</a>
          </div>
        </v-dialog>
      </v-flex>
      <!-- End Mobile -->
      <v-flex v-if="$vuetify.breakpoint.lgAndUp" xs3>
        <div class="ma-1">
          <a :class="$vuetify.breakpoint.lgAndUp? 'text' : 'text-m'" href="./TylerBerkshire_Resume.pdf" target="blank">view</a>
        </div>
      </v-flex>
      <v-flex xs3 v-if="$vuetify.breakpoint.lgAndUp" />
      <v-flex xs3 v-if="$vuetify.breakpoint.lgAndUp" />
      <v-flex v-if="$vuetify.breakpoint.lgAndUp" xs3>
        <div class="text">
          <div class="ma-1">interests</div>
          <div class="ma-1">興味</div>
        </div>
      </v-flex>
      <!-- Mobile -->
      <v-flex xs12 v-else>
        <v-dialog v-model="dialogI" width="500">
          <template v-slot:activator="{ on }">
            <div class="text-m" v-on="on">
              <a class="a-m">
                <div class="ma-1">interests</div>
                <div class="ma-1">イントレスツ</div>
              </a>
            </div>
          </template>
          <div class="dialog text-xs-center">
            <div class="dialog-text">programming</div><p class="dialog-text">・</p>
            <div class="dialog-text">smash melee</div><p class="dialog-text">・</p>
            <div class="dialog-text">video editing</div><p class="dialog-text">・</p>
            <div class="dialog-text">aesthetics</div>
          </div>
        </v-dialog>
      </v-flex>
      <!-- End Mobile -->
      <v-flex v-if="$vuetify.breakpoint.lgAndUp" xs3>
        <div :class="$vuetify.breakpoint.lgAndUp? 'text-desc' : 'text-desc-m'">
          <div class="ma-1">programming, smash melee, photography, aesthetics</div>
        </div>
      </v-flex>
      <v-flex xs3 v-if="$vuetify.breakpoint.lgAndUp" />
      <v-flex xs3 v-if="$vuetify.breakpoint.lgAndUp" />
      <v-flex v-if="$vuetify.breakpoint.lgAndUp" xs3>
        <div class="text">
          <div class="ma-1">links</div>
          <div class="ma-1">リンクス</div>
        </div>
      </v-flex>
      <!-- Mobile -->
      <v-flex xs12 v-else>
        <v-dialog v-model="dialogL" width="500">
          <template v-slot:activator="{ on }">
            <div class="text-m" v-on="on">
              <a class="a-m">
                <div class="ma-1">links</div>
                <div class="ma-1">リンクス</div>
              </a>
            </div>
          </template>
          <div class="dialog text-xs-center">
            <a class="dialog-text" href="https://github.com/BerkshireT" target="blank">github</a><p class="dialog-text">・</p>
            <a class="dialog-text" href="https://open.spotify.com/user/cf9hq7vhmnz4lizol8969ph6t?si=3uj903wIRji4mHXT0q3GmQ" target="blank">spotify</a><p class="dialog-text">・</p>
            <a class="dialog-text" href="https://www.instagram.com/terminalanomaly/" target="blank">instagram</a><p class="dialog-text">・</p>
            <a class="dialog-text" href="https://www.goodreads.com/user/show/108732185-tyler" target="blank">good reads</a>
          </div>
        </v-dialog>
      </v-flex>
      <!-- End Mobile -->
      <v-flex v-if="$vuetify.breakpoint.lgAndUp" xs3>
        <div class="ma-1">
          <a :class="$vuetify.breakpoint.lgAndUp? 'text' : 'text-m'" href="https://github.com/BerkshireT" target="blank">github</a>・
          <a :class="$vuetify.breakpoint.lgAndUp? 'text' : 'text-m'" href="https://open.spotify.com/user/cf9hq7vhmnz4lizol8969ph6t?si=3uj903wIRji4mHXT0q3GmQ" target="blank">spotify</a>・
          <a :class="$vuetify.breakpoint.lgAndUp? 'text' : 'text-m'" href="https://www.instagram.com/terminalanomaly/" target="blank">instagram</a>・
          <a :class="$vuetify.breakpoint.lgAndUp? 'text' : 'text-m'" href="https://www.goodreads.com/user/show/108732185-tyler" target="blank">good reads</a>・
          <a :class="$vuetify.breakpoint.lgAndUp? 'text' : 'text-m'" href="https://www.myanimelist.net/animelist/TerminalAnomaly" target="blank">my anime list</a>
        </div>
      </v-flex>
      <v-flex xs3 v-if="$vuetify.breakpoint.lgAndUp" />
      <v-flex xs3 v-if="$vuetify.breakpoint.lgAndUp" />
      <v-flex v-if="$vuetify.breakpoint.lgAndUp" xs3>
        <div class="text">
          <div class="ma-1">contact</div>
          <div class="ma-1">連絡先</div>
        </div>
      </v-flex>
      <!-- Mobile -->
      <v-flex xs12 v-else>
        <v-dialog v-model="dialogC" width="500">
          <template v-slot:activator="{ on }">
            <div class="text-m" v-on="on">
              <a class="a-m">
                <div class="ma-1">contact</div>
                <div class="ma-1">コンタクト</div>
              </a>
            </div>
          </template>
          <div class="dialog text-xs-center">
            <a class="dialog-text" href="mailto:berkshiret122@gmail.com" target="blank">send virtual mail</a>
          </div>
        </v-dialog>
      </v-flex>
      <!-- End Mobile -->
      <v-flex v-if="$vuetify.breakpoint.lgAndUp" xs3>
        <div class="ma-1">
          <a class="text" href="mailto:berkshiret122@gmail.com" target="blank">send virtual mail</a>
        </div>
      </v-flex>
      <v-flex xs3 v-if="$vuetify.breakpoint.lgAndUp" />
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

.dialog {
  background: url(../assets/analog.gif);
  background-position: center;
  border-style: solid;
  border-color: white;
  background-repeat: no-repeat;
  padding: 5px;
}

.text {
  font-size: 17px;
  letter-spacing: .5em;
  font-family: 'OCR-A', 'Courier', monospace;
  transition: all 2s ease;
}

.text-m {
  font-size: 15px;
  letter-spacing: .5em;
  font-family: 'OCR-A', 'Courier', monospace;
  transition: all 2s ease;
}

.dialog-text {
  font-size: 20px;
  letter-spacing: .5em;
  font-family: 'OCR-A', 'Courier', monospace;
  color: white;
}

.text-desc {
  font-size: 17px;
  font-family: 'OCR-A', 'Courier', monospace;
  transition: all 2s ease;
}

.text-desc-m {
  font-size: 15px;
  font-family: 'OCR-A', 'Courier', monospace;
}

.text:hover{
  color: #01cdfe;
  text-shadow: 0 0 5px #01cdfe;
}

.text-m:hover{
  color: #01cdfe;
  text-shadow: 0 0 5px #01cdfe;
}

a {
  color: inherit;
  text-decoration: underline;
}

.a-m {
  color: inherit;
  text-decoration: none;
}
</style>