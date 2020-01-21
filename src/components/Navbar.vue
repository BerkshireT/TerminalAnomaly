<template>
  <v-container grid-list-xs fluid class="text-xs-center">
    <v-layout row fluid justify-space-around wrap>
      <v-flex xs2 class="hidden-xs-only">
        <v-img :src="require('@/assets/logos/' + image)" contain :max-height="$vuetify.breakpoint.smAndUp? '50px' : '25px'"/>
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.smAndUp? 'xs8' : 'xs12'">
        <v-card-text class="white--text">
          <div :class="$vuetify.breakpoint.smAndUp? 'top-title' : 'top-title-m'" :style="{ textShadow: '1px 1px ' + color }">Terminal Anomaly</div>
          <div :class="$vuetify.breakpoint.smAndUp? 'top-sub' : 'top-sub-m'" :style="{ color: color }">ターミナル・アノマリー</div>
          <div :class="$vuetify.breakpoint.smAndUp? 'top-sub' : 'top-sub-m'">Virtual Résumé, Portfolio, and Nightscape</div>
          <div :class="$vuetify.breakpoint.smAndUp? 'top-sub' : 'top-sub-m'" :style="{ color: color }">バーチャル履歴書、ポートフォリオ、および夜景</div>
        </v-card-text>
      </v-flex>
      <v-flex xs2 class="hidden-xs-only">
        <v-img :src="require('@/assets/logos/' + image)" contain :max-height="$vuetify.breakpoint.smAndUp? '50px' : '25px'"/>
      </v-flex>
      <v-flex xs12 :style="{ borderColor: color }" class="nav" v-if="$vuetify.breakpoint.smAndUp">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Résumé</a></li>
        </ul>
      </v-flex>
      <!-- Mobile -->
      <v-flex xs12 v-else :style="{ borderColor: color }" class="nav-m">
        <a @click.stop="drawer = !drawer">Navigate ・ ナビゲートする</a>
      </v-flex>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-container fill-height class="drawer">
          <ul>
            <li><a href="/">Home ・ ホーム</a></li>
            <li><a href="/about">Résumé ・ 履歴書</a></li>
          </ul>
        </v-container>
      </v-navigation-drawer>
      <!-- End Mobile -->
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
    }
  },
  data() {
    return {
      drawer: null,
      icons: [
        { brand: 'envelope-square', style: 'fas', route: 'mailto:berkshiret122@gmail.com' },
        { brand: 'linkedin', style: 'fab', route: 'https://linkedin.com/in/TylerBerkshire' },
        { brand: 'github-square', style: 'fab', route: 'https://github.com/BerkshireT' }
      ]
    }
  }
}
</script>

<style scoped>
.top-title {
  font-size: 30px;
  letter-spacing: 0.75em;
  font-family: 'Alien Encounters', 'Times New Roman', serif;
}

.top-sub {
  font-size: 15px;
  letter-spacing: 0.1em;
  padding-bottom: 2px;
  padding-top: 2px;
}

.nav {
  border-top: solid;
  border-bottom: solid;
  border-width: 1px;
}

ul {
  font-size: 15px;
  letter-spacing: 0.1em;
  list-style-type: none;
  margin: 0;
  padding: 5px;
  overflow: hidden;
  color: white;
}

li {
  display: inline;
}

a {
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

a:hover {
  border-top: solid;
  border-bottom: solid;
  border-width: 1px;
  border-color: white;
  text-decoration: underline;
}

a:active {
  color: #212121;
}

/* Mobile */
.top-title-m {
  font-size: 25px;
  letter-spacing: 0.5em;
  font-family: 'Alien Encounters', 'Times New Roman', serif;
}

.top-sub-m {
  font-size: 12px;
  letter-spacing: 0.1em;
  padding-top: 1px;
}

.nav-m {
  border-top: solid;
  border-bottom: solid;
  border-width: 1px;
}

.nav-m a:hover {
  border-width: 0px;
  text-decoration: none;
}

.drawer {
  background-color: #212121;
}

.drawer li {
  display: flex;
}

.drawer a:hover {
  border-width: 0px;
  text-decoration: none;
}
</style>
