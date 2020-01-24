<!-- 
TODO:
send message page
Redo about page to match new theme
Add Headway info
Add Super Smash Search info
Add vaporwave page, make album art, list other cool sites, music
-->
<template>
  <v-container fluid fill-height class="home">
    <v-layout wrap text-xs-center justify-center>
      <v-flex xs12>
        <Topbar :inner="false" :image="theme.image" :color="theme.color" />
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs2' : 'xs12'">
        <div class="glow">
          <a href="/gallery">
            <div class="ma-1">gallery</div>
            <div class="ma-1">ギャラリー</div>
          </a>
        </div>
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs2' : 'xs12'">
        <div class="glow">
          <a href="/about">
            <div class="ma-1">about</div>
            <div class="ma-1">アバウト</div>
          </a>
        </div>
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs2' : 'xs12'">
        <div class="glow">
          <a href="/projects">
            <div class="ma-1">projects</div>
            <div class="ma-1">プロジェクト</div>
          </a>
        </div>
        </v-flex>
    </v-layout>
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Topbar from '@/components/Topbar.vue'

export default {
  title: 'TERMINAL ANOMALY',
  components: { Footer, Topbar },
  data () {
    return {
      theme: { color: '#05ffa1', image: 'ta-green.gif' }
    }
  }
}
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background: url(../assets/grid.png);
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
}

a {
  color: inherit;
  text-decoration: none;
}

.glow {
  font-size: 17px;
  letter-spacing: .5em;
  font-family: 'OCR-A', 'Courier', monospace;
  transition: 1s;
}

.glow:hover {
  color: #05ffa1;
  text-shadow: 0 0 5px #05ffa1;
}
</style>
