<template>
  <v-container fluid fill-height class="about">
    <v-layout wrap text-xs-center justify-center>
      <v-flex xs12>
        <Topbar :inner="true" :image="theme.image" :color="theme.color" />
      </v-flex>
      <v-flex xs3 v-if="$vuetify.breakpoint.mdAndUp" />
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs3' : 'xs6'">
        <div class="text">
          <div class="ma-1">resume</div>
          <div class="ma-1">レジューメー</div>
        </div>
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs3' : 'xs6'">
        <div class="ma-1">
          <a :class="$vuetify.breakpoint.mdAndUp? 'text' : 'text-m'" href="./TylerBerkshire_Resume.pdf" target="blank">view</a>
        </div>
      </v-flex>
      <v-flex xs3 v-if="$vuetify.breakpoint.mdAndUp" />
      <v-flex xs3 v-if="$vuetify.breakpoint.mdAndUp" />
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs3' : 'xs6'">
        <div class="text">
          <div class="ma-1">interests</div>
          <div class="ma-1">イントレスツ</div>
        </div>
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs3' : 'xs6'">
        <div :class="$vuetify.breakpoint.mdAndUp? 'text-desc' : 'text-desc-m'">
          <div class="ma-1">programming, smash melee, aesthetics</div>
        </div>
      </v-flex>
      <v-flex xs3 v-if="$vuetify.breakpoint.mdAndUp" />
      <v-flex xs3 v-if="$vuetify.breakpoint.mdAndUp" />
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs3' : 'xs6'">
        <div class="text">
          <div class="ma-1">links</div>
          <div class="ma-1">リンクス</div>
        </div>
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs3' : 'xs6'">
        <div class="ma-1">
          <a :class="$vuetify.breakpoint.mdAndUp? 'text' : 'text-m'" href="https://github.com/BerkshireT" target="blank">github</a>・
          <a :class="$vuetify.breakpoint.mdAndUp? 'text' : 'text-m'" href="https://open.spotify.com/user/cf9hq7vhmnz4lizol8969ph6t?si=3uj903wIRji4mHXT0q3GmQ" target="blank">spotify</a>・
          <a :class="$vuetify.breakpoint.mdAndUp? 'text' : 'text-m'" href="https://www.instagram.com/terminalanomaly/" target="blank">instagram</a>・
          <a :class="$vuetify.breakpoint.mdAndUp? 'text' : 'text-m'" href="https://www.goodreads.com/user/show/108732185-tyler" target="blank">good reads</a>
        </div>
      </v-flex>
      <v-flex xs3 v-if="$vuetify.breakpoint.mdAndUp" />
      <v-flex xs3 v-if="$vuetify.breakpoint.mdAndUp" />
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs3' : 'xs6'">
        <div class="text">
          <div class="ma-1">contact</div>
          <div class="ma-1">コンタクト</div>
        </div>
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs3' : 'xs6'">
        <div class="ma-1">
          <a :class="$vuetify.breakpoint.mdAndUp? 'text' : 'text-m'" href="mailto:berkshiret122@gmail.com" target="blank">send virtual mail</a>
        </div>
      </v-flex>
      <v-flex xs3 v-if="$vuetify.breakpoint.mdAndUp" />
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
        theme: { color: '#01cdfe', image: 'ta-blue.gif' }
     }
  }
}
</script>

<style scoped>
.about {
  width: 100vw;
  height: 100vh;
  background: url(../assets/backgrounds/grid-blue.png);
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
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

.text:hover {
  color: #05ffa1;
  text-shadow: 0 0 5px #05ffa1;
}

a {
  color: inherit;
  text-decoration: underline;
}
</style>