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
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs6' : 'xs12'" v-for="image in imagesPhotos" :key="image.name">
        <div v-if="!image.expanded" @click="image.expanded = true">
          <v-img class="ma-4 image" :src="require('@/assets/gallery/photography/compressed/' + image.name + '.jpg')" :max-height="$vuetify.breakpoint.smAndUp? '200px' : '125px'"/>
        </div>
        <div v-else @click="image.expanded = false" class="expanded">
          <v-img contain :src="require('@/assets/gallery/photography/' + image.name + '.jpg')" />
          <div :class="$vuetify.breakpoint.smAndUp? 'image-text' : 'image-text-m' ">{{ image.info }}</div>
        </div>
      </v-flex>
      <v-flex xs12>
        <div class="text" id="edits">
          <div class="ma-1">edits</div>
          <div class="ma-1">編集する</div>
        </div>
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs6' : 'xs12'" v-for="image in imagesEdits" :key="image.name">
        <div v-if="!image.expanded" @click="image.expanded = true">
          <v-img class="ma-4 image" :src="require('@/assets/gallery/edits/compressed/' + image.name + '.jpg')" :max-height="$vuetify.breakpoint.smAndUp? '200px' : '125px'"/>
        </div>
        <div v-else @click="image.expanded = false" class="expanded">
          <v-img contain :src="require('@/assets/gallery/edits/' + image.name + '.png')"/>
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
         { name: 'image1', expanded: false, info: 'paseo de la princesa, san juan, puerto rico' },
         { name: 'image2', expanded: false, info: 'umbrella street, san juan, puerto rico' },
         { name: 'image3', expanded: false, info: 'roebling suspension bridge, cincinnati, ohio' },
         { name: 'image4', expanded: false, info: 'the 529, dayton, ohio' },
         { name: 'image5', expanded: false, info: 'euclid commons, cleveland, ohio' },
         { name: 'image6', expanded: false, info: 'the metra, chicago, illinois' },
         { name: 'image7', expanded: false, info: 'cockleshell bay, st. kitts' },
         { name: 'image8', expanded: false, info: 'euclid avenue, cleveland, ohio' },
         { name: 'image9', expanded: false, info: 'washington boulevard, detroit, michigan' },
         { name: 'image10', expanded: false, info: 'japanese tea garden, san francisco, california' },
         { name: 'image11', expanded: false, info: 'cleveland state university, cleveland, ohio' },
         { name: 'image12', expanded: false, info: 'irving commons, dayton, ohio' },
         { name: 'image13', expanded: false, info: 'trinity cathedral, cleveland, ohio' },
         { name: 'image14', expanded: false, info: 'lake shore east park, chicago, illinois' },
         { name: 'image15', expanded: false, info: 'cobo center, detroit, michigan' },
         { name: 'image16', expanded: false, info: 'university of dayton, dayton, ohio' },
         { name: 'image17', expanded: false, info: 'panama city beach, florida' },
         { name: 'image18', expanded: false, info: 'dan, panama city beach, florida' },
         { name: 'image19', expanded: false, info: 'panama city beach, florida' },
         { name: 'image20', expanded: false, info: 'steve, panama city beach, florida' },
         { name: 'image21', expanded: false, info: 'panama city beach, florida' },
         { name: 'image22', expanded: false, info: 'stuart field, dayton, ohio' },
         { name: 'image23', expanded: false, info: 'tucker, tipp city, ohio' },
         { name: 'image24', expanded: false, info: 'jasper, dayton, ohio' },
         { name: 'image25', expanded: false, info: 'oregon district, dayton, ohio' },
         { name: 'image26', expanded: false, info: 'flanagan\'s pub, dayton, ohio' }
       ],
       imagesEdits: [
         { name: 'edit1', expanded: false, info: 'static' },
         { name: 'edit2', expanded: false, info: 'glitch' },
         { name: 'edit3', expanded: false, info: 'views' },
         { name: 'edit4', expanded: false, info: 'melee icon' },
         { name: 'edit5', expanded: false, info: 'music icon' },
         { name: 'edit6', expanded: false, info: 'photography icon' },
         { name: 'edit7', expanded: false, info: 'omedetou' },
         { name: 'edit8', expanded: false, info: 'rapture' }
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
