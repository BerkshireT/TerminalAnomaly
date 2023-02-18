<template>
  <v-container grid-list-xs fluid class="text-xs-center">
    <v-layout row fluid justify-space-around wrap>
      <v-flex v-if="gif === 'projects'" xs12 :class="$vuetify.breakpoint.smAndUp? 'projects' : 'projects-m'">
        <v-img class="ma-4" :src="require('@/assets/logos/' + image)" contain :max-height="$vuetify.breakpoint.smAndUp? '200px' : '125px'"/>
      </v-flex>
      <v-flex v-if="gif === 'gallery'" xs12 :class="$vuetify.breakpoint.smAndUp? 'gallery' : 'gallery-m'">
        <v-img class="ma-4" :src="require('@/assets/logos/' + image)" contain :max-height="$vuetify.breakpoint.smAndUp? '200px' : '125px'"/>
      </v-flex>
      <v-flex v-if="gif === 'about'" xs12 :class="$vuetify.breakpoint.smAndUp? 'about' : 'about-m'">
        <v-img class="ma-4" :src="require('@/assets/logos/' + image)" contain :max-height="$vuetify.breakpoint.smAndUp? '200px' : '125px'"/>
      </v-flex>
      <v-flex v-if="gif === 'home'" xs12 :class="$vuetify.breakpoint.smAndUp? 'home' : 'home-m'">
        <v-img class="ma-4" :src="require('@/assets/logos/' + image)" contain :max-height="$vuetify.breakpoint.smAndUp? '200px' : '125px'"/>
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.smAndUp? 'xs8' : 'xs12'">
        <v-card-text class="white--text">
          <div :class="$vuetify.breakpoint.mdAndUp? 'top-title' : 'top-title-m'" :style="{ textShadow: '1px 1px ' + color }">Terminal Anomaly</div>
          <div :class="$vuetify.breakpoint.mdAndUp? 'top-sub' : 'top-sub-m'" :style="{ color: color }">ターミナル・アノマリー</div>
          <div class="mt-3" v-if=inner>
            <a href="javascript:history.go(-1)" :class="$vuetify.breakpoint.mdAndUp? 'back' : 'back-m'" :style="backText">admin@terminal:{{path}}cd ..<p class="cursor">|</p></a>
          </div>
          <div class="mt-3" v-else>
            <a :class="$vuetify.breakpoint.mdAndUp? 'back-home' : 'back-home-m'" :style="backText">admin@terminal:{{path}}<p class="cursor">|</p></a>
          </div>
        </v-card-text>
        <v-divider :style="{ borderColor: color + ' !important' }" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    image: {
      required: true,
      default: 'ta-green.gif'
    },
    gif: {
      required: true,
      default: 'home'
    },
    color: {
      required: true,
      default: '#212121'
    },
    inner: {
      required: true,
      default: false
    },
    path: {
      required: true,
      default: '~$ '
    }
  },
  computed: {
    backText: function() {
      return {
        '--color': this.$props.color
      }
    }
  }
}
</script>

<style scoped>
.top-title {
  font-size: 45px;
  font-style: italic;
  font-family: 'OCR-A', 'Courier', monospace;
}

.home, .home-m {
  background: url(../assets/home.gif);
}

.gallery, .gallery-m {
  background: url(../assets/gallery.gif);
}

.projects, .projects-m {
  background: url(../assets/projects.gif);
}

.about, .about-m {
  background: url(../assets/about.gif);
}

.home, .gallery, .projects, .about {
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.top-sub {
  font-size: 17px;
  font-style: italic;
  letter-spacing: 0.1em;
  padding-bottom: 2px;
}

.top-sub-b {
  font-size: 17px;
  font-style: italic;
  letter-spacing: 0.5em;
}

.back, .back-home {
  font-size: 15px;
  letter-spacing: .01em;
  font-family: 'Lucida Sans Typewriter', 'Courier', monospace;

  text-shadow: 1px 1px var(--color);
  transition: all 2s ease;
}

.back:hover {
  color: var(--color);
  text-shadow: 0 0 5px var(--color);
}

.cursor {
  display: inline-block;
  animation: blinker 1s step-start infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

a {
  color: white;
  text-decoration: none;
  cursor: crosshair;
}

/* Mobile */
.top-title-m {
  font-size: 20px;
  font-style: italic;
  font-family: 'OCR-A', 'Courier', monospace;
}

.home-m, .gallery-m, .projects-m, .about-m {
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.top-sub-m {
  font-size: 13px;
  letter-spacing: 0.1em;
  font-style: italic;
}

.back-m, .back-home-m {
  font-size: 10px;
  letter-spacing: 0.1em;
  font-family: 'Lucida Sans Typewriter', 'Courier', monospace;

  text-shadow: 1px 1px var(--color);
}
</style>
