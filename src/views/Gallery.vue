<template>
  <v-container fluid fill-height class="gallery">
    <v-layout wrap text-xs-center justify-center>
      <v-flex v-if="$vuetify.breakpoint.smAndUp" pa-2 text-xs-center class="jumps">
        <div class="inline text">jump to</div>
        <div class="inline text"> - </div>
        <div class="inline"><a href="#photography" class="text">photography</a></div>
        <div class="inline text"> - </div>
        <div class="inline"><a href="#edits" class="text">edits</a></div>
      </v-flex>
      <v-flex xs12>
        <Topbar :inner="true" :image="theme.image" :color="theme.color" />
      </v-flex>
      <v-flex xs12>
        <div class="text" id="photography">
          <div class="ma-1">photography</div>
          <div class="ma-1">写真撮影</div>
        </div>
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs6' : 'xs12'" v-for="image in imagesPhotos" :key="image.full">
        <div v-if="!image.expanded" @click="image.expanded = true">
          <v-img class="ma-4 image" :src="image.compressed" :max-height="$vuetify.breakpoint.smAndUp? '200px' : '125px'"/>
        </div>
        <div v-else @click="image.expanded = false" class="expanded">
          <v-img contain :src="image.full" />
          <div :class="$vuetify.breakpoint.smAndUp? 'image-text' : 'image-text-m' ">{{ image.info }}</div>
        </div>
      </v-flex>
      <v-flex xs12>
        <div class="text" id="edits">
          <div class="ma-1">edits</div>
          <div class="ma-1">編集する</div>
        </div>
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs6' : 'xs12'" v-for="image in imagesEdits" :key="image.full">
        <div v-if="!image.expanded" @click="image.expanded = true">
          <v-img class="ma-4 image" :src="image.compressed" :max-height="$vuetify.breakpoint.smAndUp? '200px' : '125px'"/>
        </div>
        <div v-else @click="image.expanded = false" class="expanded">
          <v-img contain :src="image.full" />
          <div :class="$vuetify.breakpoint.smAndUp? 'image-text' : 'image-text-m' ">{{ image.info }}</div>
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
  title: 'GALLERY',
  components: { Footer, Topbar },
  methods: {
    async randomImages(list) {
      return list.sort(function(){return 0.5 - Math.random()})
    }
  },
  data () {
     return {
       theme: { color: '#fffb96', image: 'ta-yellow.gif' },
       imagesPhotos: [
         { expanded: false, info: 'the 529, dayton, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/529.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/529.jpg?raw=true' },
         { expanded: false, info: 'cobo center, detroit, michigan', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/cobo.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/cobo.jpg?raw=true' },
         { expanded: false, info: 'cockleshell bay, st. kitts', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/cockleshell.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/cockleshell.jpg?raw=true' },
         { expanded: false, info: 'cleveland state university, cleveland, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/csu.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/csu.jpg?raw=true' },
         { expanded: false, info: 'dan, panama city beach, florida', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/dan.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/dan.jpg?raw=true' },
         { expanded: false, info: 'euclid avenue, cleveland, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/euclid%20ave.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/euclid%20ave.jpg?raw=true' },
         { expanded: false, info: 'euclid commons, cleveland, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/euclid%20commons.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/euclid%20commons.jpg?raw=true' },
         { expanded: false, info: 'flanagan\'s pub, dayton, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/flanagan.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/flanagan.jpg?raw=true' },
         { expanded: false, info: 'irving commons, dayton, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/irving.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/irving.jpg?raw=true' },
         { expanded: false, info: 'japanese tea garden, san francisco, california', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/japanese.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/japanese.jpg?raw=true' },
         { expanded: false, info: 'jasper, dayton, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/jasper.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/jasper.jpg?raw=true' },
         { expanded: false, info: 'lake shore east park, chicago, illinois', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/lake.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/lake.jpg?raw=true' },
         { expanded: false, info: 'the metra, chicago, illinois', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/metra.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/metra.jpg?raw=true' },
         { expanded: false, info: 'oregon district, dayton, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/oregon.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/oregon.jpg?raw=true' },
         { expanded: false, info: 'panama city beach, florida', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/panama%20balcony.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/panama%20balcony.jpg?raw=true' },
         { expanded: false, info: 'panama city beach, florida', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/panama%20sign.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/panama%20sign.jpg?raw=true' },
         { expanded: false, info: 'panama city beach, florida', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/panama%20skyline.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/panama%20skyline.jpg?raw=true' },
         { expanded: false, info: 'paseo de la princesa, san juan, puerto rico', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/paseo.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/paseo.jpg?raw=true' },
         { expanded: false, info: 'roebling suspension bridge, cincinnati, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/roebling.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/roebling.jpg?raw=true' },
         { expanded: false, info: 'steve, panama city beach, florida', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/steve.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/steve.jpg?raw=true' },
         { expanded: false, info: 'stuart field, dayton, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/stuart.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/stuart.jpg?raw=true' },
         { expanded: false, info: 'trinity cathedral, cleveland, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/trinity.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/trinity.jpg?raw=true' },
         { expanded: false, info: 'tucker, tipp city, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/tucker.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/tucker.jpg?raw=true' },
         { expanded: false, info: 'university of dayton, dayton, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/university.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/university.jpg?raw=true' },
         { expanded: false, info: 'umbrella street, san juan, puerto rico', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/umbrella.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/umbrella.jpg?raw=true' },
         { expanded: false, info: 'washington boulevard, detroit, michigan', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/washington.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/washington.jpg?raw=true' }
       ],
       imagesEdits: [
         { expanded: false, info: 'glitch', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/glitch.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/glitch.jpg?raw=true' },
         { expanded: false, info: 'melee icon', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/melee%20icon.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/melee%20icon.jpg?raw=true' },
         { expanded: false, info: 'music icon', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/music%20icon.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/music%20icon.jpg?raw=true' },
         { expanded: false, info: 'omedetou', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/omedetou.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/omedetou.jpg?raw=true' },
         { expanded: false, info: 'photography icon', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/photography%20icon.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/photography%20icon.jpg?raw=true' },
         { expanded: false, info: 'rapture', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/rapture.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/rapture.jpg?raw=true' },
         { expanded: false, info: 'static', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/static.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/static.jpg?raw=true' },
         { expanded: false, info: 'views', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/views.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/views.jpg?raw=true' }
      ]
     }
  },
  async mounted() {
    this.$data.imagesPhotos = await this.randomImages(this.$data.imagesPhotos)
    this.$data.imagesEdits = await this.randomImages(this.$data.imagesEdits)
  }
}
</script>

<style scoped>
.gallery {
  width: 100%;
  height: 100%;
  background: url(../assets/backgrounds/grid-yellow.png);
  background-color: black;
  background-size: cover;
  background-repeat:repeat-y;
  background-position: center;
  background-attachment: fixed;
  color: white;
}

.image {
  border-style: solid;
  border-color: #fffb96;
  transition: all 2s ease;
}

.image-text {
  border-style: solid;
  border-color: #fffb96;
  font-size: 17px;
  letter-spacing: .5em;
  font-family: 'OCR-A', 'Courier', monospace;
  -webkit-text-stroke: .03em #fffb96;
  background-color: black;
  position: fixed;
  top: 1%;
  left: 25%;
  width: 50%;
  padding: 1px;
}

.image-text-m {
  border-style: solid;
  border-color: #fffb96;
  font-size: 13px;
  letter-spacing: .5em;
  font-family: 'OCR-A', 'Courier', monospace;
  -webkit-text-stroke: .03em #fffb96;
  background-color: black;
  position: fixed;
  top: 1%;
  left: 0;
  width: 100%;
  padding: 1px;
}

.expanded {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  position: fixed;
  z-index: 100000;
  overflow: hidden;
  backdrop-filter: blur(5px);
}

.glow {
  font-size: 17px;
  letter-spacing: .5em;
  font-family: 'OCR-A', 'Courier', monospace;
  transition: all 2s ease;
}

.text {
  font-size: 17px;
  letter-spacing: .5em;
  font-family: 'OCR-A', 'Courier', monospace;
}

.image:hover {
  box-shadow: 0 0 20px #fffb96;
}

.jumps {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: black;
}

a {
  color: inherit;
  text-decoration: underline;
  transition: all 2s ease;
}

a:hover {
  color: #fffb96;
  text-shadow: 0 0 5px #fffb96;
}

.inline {
  display: inline;
}

#photography, #edits {
    padding-top: 50px;
    margin-top: -50px;
}
</style>
