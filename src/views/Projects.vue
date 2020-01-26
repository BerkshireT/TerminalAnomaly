<template>
  <v-container fluid fill-height class="projects">
    <v-layout wrap text-xs-center justify-center>
      <v-flex xs12>
        <Topbar :inner="true" :image="theme.image" :color="theme.color" />
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.lgAndUp? 'xs12' : 'xs12'">
        <div class="glow">
          <div class="ma-1">Coming Soon</div>
          <div class="ma-1">カミング・スーン</div>
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
  title: 'PROJECTS',
  components: { Footer, Topbar },
  data () {
     return {
        theme: { color: '#b967ff', image: 'ta-purple.gif' }
     }
  }
}
</script>

<style scoped>
.projects {
  width: 100vw;
  height: 100vh;
  background: url(../assets/backgrounds/grid-purple.png);
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
}

.glow {
  font-size: 17px;
  letter-spacing: .5em;
  font-family: 'OCR-A', 'Courier', monospace;
  transition: all 2s ease;
}
</style>
