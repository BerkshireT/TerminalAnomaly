<template>
  <v-container fluid fill-height class="smash">
    <v-layout wrap text-xs-center justify-center>
      <v-flex xs12>
        <Topbar :inner="true" :image="theme.image" :color="theme.color" />
      </v-flex>
      <body>
        <div class="window">
          <div class="title-bar">
            <div class="title-bar-text">Super Smash Search</div>
          </div>
          <div class="window-body">
            <span>I'm looking for upcoming </span>
            <select v-model="lan"><option v-for="option in lanOptions" :key="option.title" v-bind:value="{ selection: option.title }">{{ option.title }}</option></select>
            <select v-model="game"><option v-for="option in gameOptions" :key="option.title" v-bind:value="{ selection: option.title }">{{ option.title }}</option></select>
            <span> tournaments </span>
            <select v-model="miles"><option v-for="option in milesOptions" :key="option.title" v-bind:value="{ selection: option.title }">{{ option.title }}</option></select>
            <span> from </span>
            <div class="field-row">
              <input type="text" v-model="location" />
            </div>
            <span>.</span>
            <button v-on:click="search(lan.selection, game.selection, miles.selection, location)">Search!</button>
            <ul v-if="!isHidden" class="tree-view">
              <div v-if="isVerified">
                <li class="results" v-for="result in resultsList" :key="result.data">
                  <img :src="result.img" />
                  <h2>{{ result.title }}</h2>
                  <h3>{{ result.date }}</h3>
                  <h3>{{ result.game }}</h3>
                  <h3>{{ result.type }}</h3>
                  <h3>{{ result.location }}</h3>
                </li>
              </div>
              <div v-else>{{ resultsList }}</div>
            </ul>
          </div>
        </div>
      </body>
    </v-layout>
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Topbar from '@/components/Topbar.vue'
import { Request, Verify } from '@/scripts/SmashGG.js'

export default {
  title: 'SuperSmashSearch',
  components: { Footer, Topbar },
  data () {
     return {
        theme: { color: '#b967ff', image: 'ta-purple.gif' },
        lanOptions: [
          { title: 'online' },
          { title: 'lan' },
          { title: 'online & lan'},
        ],
        lan: '',
        gameOptions: [
          { title: 'Melee' },
          { title: 'Ultimate' },
          { title: 'Melee & Ultimate' },
        ],
        game: '',
        milesOptions: [ 
          { title: '10 miles' },
          { title: '50 miles' },
          { title: '100 miles' },
          { title: 'unlimited miles'},
        ],
        miles: '',
        location: '(city name)',
        isHidden: true,
        isVerified: false,
        resultsList: [],
        errorMessage: '',
     }
  },
  methods: {
    search(lan, game, miles, location) {
      let verification = Verify(lan, game, miles, location)
      if (verification == null) {
        this.$data.isVerified = true
        Request(lan, game, miles, location);
        this.$data.resultsList = [ 
          { img: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg", title: "tournament", date: "today", game: "melee", type: "online", location: "md" },
          { img: "https://www.w3schools.com/w3css/img_forest.jpg", title: "tournament", date: "tomorrow", game: "ult", type: "online", location: "md" },
        ]
      }
      else {
        this.$data.isVerified = false
        this.$data.resultsList = verification
      }
      
      this.$data.isHidden = false;
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

button {
  display: block;
  margin: 2% auto;
}

select {
  height: 50%;
  text-align-last: center;
}

option, p {
  font-size: 15px;
}

img {
  width: 100%;
}

.window {
  width: 60vw;
}

.window-body, .title-bar-text {
  display: inline-block;
  font-size: 15px;
}

.field-row {
  display: inline;
}

.credit {
   letter-spacing: 0.3em;
   font-family: 'OCR-A', 'Courier', monospace;
}

.credit-m {
   font-size: 10px;
}
</style>
