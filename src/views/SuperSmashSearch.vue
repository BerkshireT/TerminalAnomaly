<template>
  <v-container fluid fill-height class="smash">
    <v-layout wrap text-xs-center justify-center>
      <v-flex xs12>
        <Topbar :inner="true" :image="theme.image" gif="projects" :color="theme.color" />
      </v-flex>
      <body>
        <div class="window">
          <div class="title-bar">
            <div class="title-bar-text">Super Smash Search</div>
            <div class="title-bar-controls">styled with <a href="https://jdan.github.io/98.css/" target="_blank">98.css</a></div>
          </div>
          <div class="window-body">
            <span>I'm looking for upcoming </span>
            <select v-model="lan"><option v-for="option in lanOptions" :key="option.title" v-bind:value="{ selection: option.title }">{{ option.title }}</option></select>
            <span> melee tournaments </span>
            <select v-model="miles"><option v-for="option in milesOptions" :key="option.title" v-bind:value="{ selection: option.title }">{{ option.title }}</option></select>
            <span> miles from </span>
            <button v-on:click="getLocation()">{{ location.text }}</button>
            <button v-on:click="search(lan.selection, miles.selection)" :disabled="!this.$data.isLocated || this.$data.lan == null || this.$data.miles == null">Search!</button>
            <ul v-if="!isHidden" class="tree-view">
              <div v-if="isLocated && containsElements">
                <li class="results" v-for="result in resultsList" :key="result.title">
                  <img :src="result.img" />
                  <h2><a :href="result.url" target="_blank" class="link">{{ result.title }}</a></h2>
                  <h3>{{ result.date }}</h3>
                  <h3>{{ result.location }}</h3>
                </li>
              </div>
              <h3 v-else>{{ resultsList }}</h3>
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
import Request from '@/scripts/SmashGG.js'

export default {
  title: 'Super Smash Search',
  components: { Footer, Topbar },
  data () {
     return {
        theme: { color: '#b967ff', image: 'ta-purple.gif' },
        lanOptions: [
          { title: 'online' },
          { title: 'lan' },
        ],
        lan: null,
        milesOptions: [ 
          { title: '10' },
          { title: '50' },
          { title: '100' },
          { title: 'unlimited'},
        ],
        miles: null,
        isHidden: true,
        isLocated: false,
        containsElements: false,
        resultsList: "No results for the given criteria.",
        location: { text: 'get current location', lat: '', long: ''}
     }
  },
  methods: {
    search(lan, miles) {
      Request(process.env.VUE_APP_SMASHGG_API, lan , miles, this.$data.location)
      .then(data => {
        let result = [];
        if (data.data.tournaments.nodes.length === 0) {
          this.$data.containsElements = false;
          this.$data.resultsList = "No results for the given criteria.";
        }
        else {
          data.data.tournaments.nodes.forEach(tournament => {
            let date = new Date(tournament.startAt * 1000);
            if (date.getTime() < Date.now()) {
              return;
            }
            let tourney = { 
              img: tournament.images.length === 0 ? require('@/assets/logos/ta-purple.gif') : tournament.images[0].url,
              title: tournament.name,
              date: date.toString(),
              location: tournament.venueAddress ,
              url: "https://smash.gg/" + tournament.slug
            }
            result.push(tourney);
          });
          if (result.length === 0) {
            this.$data.containsElements = false;
            this.$data.resultsList = "No results for the given criteria.";
          }
          else {
            this.$data.containsElements = true;
            this.$data.resultsList = result;
          }
        }
      });
      
      this.$data.isHidden = false;
    },
    setPosition(position) {
      this.$data.location.text = position.coords.latitude + ', ' + position.coords.longitude;
      this.$data.location.lat = position.coords.latitude;
      this.$data.location.long = position.coords.longitude;
      this.$data.isLocated = true;
    },
    showError(error) {
      this.$data.isHidden = false;
      this.$data.isLocated = false;
      this.$data.resultsList = error.message;
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.setPosition, this.showError);
      }
    }
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
  width: 50%;
}

.link {
  color: blue;
  text-decoration: underline;
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
