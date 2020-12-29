<template>
  <v-container fluid fill-height class="projects">
    <v-layout wrap text-xs-center justify-center>
      <v-flex xs12>
        <Topbar :inner="true" :image="theme.image" :color="theme.color" />
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.lgAndUp? 'xs12' : 'xs12'">
        <div class="glow">
          <router-link to="/KOeveryDayO">
            <div class="ma-1">#KOeveryDayO</div>
            <div class="ma-1">ノックアウト</div>
          </router-link>
        </div>
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.lgAndUp? 'xs12' : 'xs12'">
        <div class="glow">
          <router-link to="/SuperSmashSearch">
            <div class="ma-1">Super Smash Search</div>
            <div class="ma-1">スーパー・スマッシュ・サーチ</div>
          </router-link>
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
  width: 100%;
  height: 100%;
  background: url(../assets/backgrounds/grid-purple.png);
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
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
  transition: all 2s ease;
}

.glow:hover {
  color: #b967ff;
  text-shadow: 0 0 5px #b967ff;
}
</style>
