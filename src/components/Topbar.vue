<template>
  <v-container grid-list-xs fluid class="text-xs-center">
    <v-layout v-if="gif === 'home'" row fluid justify-space-around wrap> <!-- home page -->
      <v-flex v-if="$vuetify.breakpoint.lgAndUp" xs12 class="home">
        <v-img class="ma-4" :src="require('@/assets/logos/' + image)" contain max-height="200px"/>
      </v-flex>
      <v-flex v-else-if="$vuetify.breakpoint.md" xs12 class="home">
        <v-img class="ma-4" :src="require('@/assets/logos/' + image)" contain max-height="125px"/>
      </v-flex>
      <v-flex v-else xs12 class="home">
        <v-img class="ma-4" :src="require('@/assets/logos/' + image)" contain max-height="100px"/>
      </v-flex>

      <v-flex v-if="$vuetify.breakpoint.lgAndUp" class="xs8">
        <v-card-text class="white--text pb-0">
          <div class="top-title" :style="{ textShadow: '1px 1px ' + color }">WELCOME!</div>
          <div class="top-sub" :style="{ color: color }">いらっしゃいませ！</div>
          <div class="ma-4" />
        </v-card-text>
        <v-divider :style="{ borderColor: color + ' !important' }" />
      </v-flex>
      <v-flex v-else-if="$vuetify.breakpoint.md" class="xs8">
        <v-card-text class="white--text pb-0">
          <div class="top-title-md" :style="{ textShadow: '1px 1px ' + color }">WELCOME!</div>
          <div class="top-sub-md" :style="{ color: color }">いらっしゃいませ！</div>
          <div class="mb-4" />
        </v-card-text>
        <v-divider :style="{ borderColor: color + ' !important' }" />
      </v-flex>
      <v-flex v-else class="xs8">
        <v-card-text class="white--text pb-0">
          <div class="top-title-sm" :style="{ textShadow: '1px 1px ' + color }">WELCOME!</div>
          <div class="top-sub-sm" :style="{ color: color }">いらっしゃいませ！</div>
          <div class="ma-3" />
        </v-card-text>
        <v-divider :style="{ borderColor: color + ' !important' }" />
      </v-flex>

    </v-layout>
    
    <v-layout v-else row fluid justify-space-around wrap> <!-- other pages -->
      <TopbarOtherPage v-if="gif === 'projects'" :page="gif" :image="image" title="PROJECTS" icon="https://win98icons.alexmeub.com/icons/png/directory_folder_options-2.png" :color="color"/>
      <TopbarOtherPage v-if="gif === 'gallery'" :page="gif" :image="image" title="GALLERY" icon="https://win98icons.alexmeub.com/icons/png/camera3-2.png" :color="color"/>
      <TopbarOtherPage v-if="gif === 'about'" :page="gif" :image="image" title="ABOUT" icon="https://win98icons.alexmeub.com/icons/png/help_sheet-0.png" :color="color"/>
    </v-layout>
  </v-container>
</template>

<script>
import TopbarOtherPage from '@/components/TopbarOtherPage.vue'

export default {
  components: { TopbarOtherPage },
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
      required: false,
      default: '/home$ '
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

.top-title-md {
  font-size: 35px;
  font-family: 'OCR-A', 'Courier', monospace;
  cursor: default;
}

.top-title-sm {
  font-size: 25px;
  font-family: 'OCR-A', 'Courier', monospace;
  cursor: default;
}

.home {
  background: url(../assets/home.gif);
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
  cursor: default;
}

.top-sub-md {
  font-size: 15px;
  font-style: italic;
  letter-spacing: 0.1em;
  padding-bottom: 2px;
  cursor: default;
}

.top-sub-sm {
  font-size: 14px;
  font-style: italic;
  letter-spacing: 0.1em;
  padding-bottom: 2px;
  cursor: default;
}

a {
  color: white;
  text-decoration: none;
}
</style>
