<template>
  <v-container fluid fill-height class="smash">
    <v-layout wrap text-xs-center justify-center>
      <v-flex xs12>
        <Topbar :inner="true" :image="theme.image" :color="theme.color" />
      </v-flex>
      <v-flex xs12>
        <div class="aesthetic-windows-95-loader">
           <div></div>
           <div></div>
           <div></div>
        </div>
      </v-flex>
      <v-flex xs12 pa-2 text-xs-center :class="$vuetify.breakpoint.smAndUp? 'credit' : 'credit-m'">
         <span>
            Styling on this page utilizes <a href="https://torch2424.github.io/aesthetic-css/">aesthetic-css</a>. Check them out!
         </span>
    </v-flex>
    </v-layout>
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Topbar from '@/components/Topbar.vue'
//import Request from '@/scripts/SmashGG.js'

export default {
  title: 'SuperSmashSearch',
  components: { Footer, Topbar },
  data () {
     return {
        theme: { color: '#b967ff', image: 'ta-purple.gif' }
     }
  },
  methods: {

  },
  created() {
     let twitterFeed = document.createElement("script");
     twitterFeed.setAttribute("src", "https://platform.twitter.com/widgets.js");
     document.head.appendChild(twitterFeed);
  }
}
</script>

<style scoped>
.smash {
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
  text-decoration: underline;
}

.credit {
   letter-spacing: 0.3em;
   font-family: 'OCR-A', 'Courier', monospace;
}

.credit-m {
   font-size: 10px;
}
</style>
