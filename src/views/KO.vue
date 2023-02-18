// honestly, remove this page
<!--
<template>
  <v-container fluid fill-height class="KO">
    <v-layout wrap text-xs-center justify-center>
      <v-flex xs12>
        <Topbar :inner="true" :image="theme.image" gif="projects" :color="theme.color" />
      </v-flex>
      <v-flex xs12>
        <div class="glitch">#KOeveryDayO</div>
      </v-flex>
      <v-flex xs2 />
      <v-flex xs8 class="twitter">
         <a class="twitter-timeline"
            align="center"
            data-theme="dark"
            href="https://twitter.com/TerminalAnomaly?ref_src=twsrc%5Etfw">
         </a>
      </v-flex>
      <v-flex xs2 />
    </v-layout>
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Topbar from '@/components/Topbar.vue'

export default {
  title: 'KOeveryDayO',
  components: { Footer, Topbar },
  data () {
     return {
        theme: { color: '#b967ff', image: 'ta-purple.gif' }
     }
  },
  created() {
     let twitterFeed = document.createElement("script");
     twitterFeed.setAttribute("src", "https://platform.twitter.com/widgets.js");
     document.head.appendChild(twitterFeed);
  }
}
</script>

<style scoped>
.KO {
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

.glitch {
  font-size: 8vw;
  font-weight: 700;
  font-family: 'OCR-A', 'Courier', monospace;
  position: relative;

  text-shadow: 0.05em 0 0 #b967ff,
    -0.025em -0.05em 0#6c67ff,
    0.025em 0.05em 0 #ffdc67;

  animation: glitch 500ms infinite;
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}

.glitch span:first-child {
  animation: glitch 650ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-0.025em, -0.0125em);
  opacity: 0.8;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
  transform: translate(0.0125em, 0.025em);
  opacity: 0.8;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0#b967ff,
      -0.05em -0.025em 0#6c67ff,
      -0.025em 0.05em 0 #ffdc67;
  }
  14% {
    text-shadow: 0.05em 0 0 #b967ff,
      -0.05em -0.025em 0#6c67ff,
      -0.025em 0.05em 0 #ffdc67;
  }
  15% {
    text-shadow: -0.05em -0.025em 0 #b967ff,
      0.025em 0.025em 0#6c67ff,
      -0.05em -0.05em 0 #ffdc67;
  }
  49% {
    text-shadow: -0.05em -0.025em 0#b967ff,
      0.025em 0.025em 0#6c67ff,
      -0.05em -0.05em 0 #ffdc67;
  }
  50% {
    text-shadow: 0.025em 0.05em 0 #b967ff,
      0.05em 0 0#6c67ff, 0 -0.05em 0 #ffdc67;
  }
  99% {
    text-shadow: 0.025em 0.05em 0 #b967ff,
      0.05em 0 0#6c67ff, 0 -0.05em 0 #ffdc67;
  }
  100% {
    text-shadow: -0.025em 0 0 #b967ff,
      -0.025em -0.025em 0 #faff67,
      -0.025em -0.05em 0 #ffdc67;
  }
}
</style>
-->