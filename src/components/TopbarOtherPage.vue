<template>
  <v-flex xs12 class="black-background">
    <v-layout v-if="$vuetify.breakpoint.lgAndUp" row align-center>
      <v-flex xs2 :class="page">
        <v-img class="ma-4" :src="require('@/assets/logos/' + image)" contain max-height='125px'/>
      </v-flex>
      <v-flex xs8>
        <v-card-text class="white--text pb-0">
          <img class="img-spaced" :src="icon" height='48px' width='48px'/>
          <div :class='top-title' :style="{ textShadow: '1px 1px ' + color }">{{ title }}</div>
          <router-link to="/">
            <div class='top-sub' :style="{ color: color }">RETURN・HOME</div>
          </router-link>
        </v-card-text>
      </v-flex>
      <v-flex xs2 :class="page">
        <v-img class="ma-4" :src="require('@/assets/logos/' + image)" contain max-height='125px'/>
      </v-flex>
    </v-layout>

    <v-layout v-else-if="$vuetify.breakpoint.md" row align-center>
      <v-flex xs4 :class="page" class="ml-4">
        <v-img class="ma-4" :src="require('@/assets/logos/' + image)" contain max-height='125px'/>
      </v-flex>
      <v-flex xs8>
        <v-card-text class="white--text pb-0">
          <img class="img-spaced" :src="icon" height='33px' width='33px'/>
          <div class='top-title-med' :style="{ textShadow: '1px 1px ' + color }">{{ title }}</div>
          <router-link to="/">
            <div class='top-sub-med' :style="{ color: color }">RETURN・HOME</div>
          </router-link>
        </v-card-text>
      </v-flex>
    </v-layout>

    <v-layout v-else row align-center>
      <v-flex xs4 :class="page" class="ml-4">
        <v-img class="ma-4" :src="require('@/assets/logos/' + image)" contain max-height='125px'/>
      </v-flex>
      <v-flex xs8>
        <v-card-text class="white--text pb-0">
          <div class='top-title-small' :style="{ textShadow: '1px 1px ' + color }">{{ title }}</div>
          <router-link to="/">
            <div class='top-sub-small mb-2' :style="{ color: color }">RETURN・HOME</div>
          </router-link>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>

export default {
  props: {
    image: {
      required: true,
      default: 'ta-green.gif'
    },
    page: {
      required: true,
      default: 'gallery'
    },
    color: {
      required: true,
      default: '#212121'
    },
    title: {
      required: true,
      default: 'GALLERY'
    },
    icon: {
      required: true,
      default: 'https://win98icons.alexmeub.com/icons/png/camera3-2.png'
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
  font-family: 'OCR-A', 'Courier', monospace;
  cursor: default;
}

.top-title-med {
  font-size: 33px;
  font-family: 'OCR-A', 'Courier', monospace;
  cursor: default;
}

.top-title-small {
  font-size: 19px;
  font-family: 'OCR-A', 'Courier', monospace;
  cursor: default;
}

.gallery {
  background: url(../assets/gallery.gif);
}

.projects {
  background: url(../assets/projects.gif);
}

.about {
  background: url(../assets/about.gif);
}

.gallery, .projects, .about {
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

.top-sub-med {
  font-size: 12px;
  font-style: italic;
  letter-spacing: 0.1em;
  padding-bottom: 2px;
}

.top-sub-small {
  font-size: 9px;
  font-style: italic;
  letter-spacing: 0.1em;
  padding-bottom: 2px;
}

a {
  color: white;
  text-decoration: none;
}
</style>
