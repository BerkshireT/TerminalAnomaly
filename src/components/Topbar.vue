<template>
  <v-container grid-list-xs fluid class="text-xs-center">
    <v-layout row fluid justify-space-around wrap>
      <v-flex xs12 :class="$vuetify.breakpoint.smAndUp? 'analog' : 'analog-m'">
        <v-img class="ma-4" :src="require('@/assets/logos/' + image)" contain :max-height="$vuetify.breakpoint.smAndUp? '200px' : '125px'"/>
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.smAndUp? 'xs8' : 'xs12'">
        <v-card-text class="white--text">
          <div :class="$vuetify.breakpoint.mdAndUp? 'top-title' : 'top-title-m'" :style="{ textShadow: '1px 1px ' + color }">Terminal Anomaly</div>
          <div :class="$vuetify.breakpoint.mdAndUp? 'top-sub' : 'top-sub-m'" :style="{ color: color }">ターミナル・アノマリー</div>
            <div v-if="inner">
              <router-link to="/" class="back" :style="{ textShadow: '1px 1px ' + color }">go home</router-link>
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
      default: '@/assets/logos/ta-green.gif'
    },
    color: {
      required: true,
      default: '#212121'
    },
    inner: {
      required: true,
      default: false
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

.analog {
  height: 100%;
  background: url(../assets/analog.gif);
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

.glow {
  font-size: 17px;
  letter-spacing: .5em;
  font-family: 'OCR-A', 'Courier', monospace;
  transition: all 2s ease;
}

.back {
  font-size: 17px;
  letter-spacing: .5em;
  font-family: 'OCR-A', 'Courier', monospace;
}

.glow:hover {
  color: #05ffa1;
  text-shadow: 0 0 5px #05ffa1;
}

a {
  color: white;
  text-decoration: none;
}

/* Mobile */
.top-title-m {
  font-size: 23px;
  font-style: italic;
  font-family: 'OCR-A', 'Courier', monospace;
}

.analog-m {
  height: 100%;
  background: url(../assets/analog.gif);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.top-sub-m {
  font-size: 13px;
  letter-spacing: 0.1em;
  font-style: italic;
}
</style>
