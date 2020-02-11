<template>
  <v-container fluid fill-height class="gallery">
    <v-layout wrap text-xs-center justify-center>
      <v-flex xs12>
        <Topbar :inner="true" :image="theme.image" :color="theme.color" />
      </v-flex>
      <v-flex xs12>
        <div class="text">
          <div class="ma-1">photography</div>
          <div class="ma-1">写真撮影</div>
        </div>
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs6' : 'xs12'" v-for="image in imagesPhotos" :key="image.name">
        <div v-if="!image.expanded" @click="image.expanded = true">
          <v-img class="ma-4 image" :src="require('@/assets/gallery/photography/compressed/' + image.name)" :max-height="$vuetify.breakpoint.smAndUp? '200px' : '125px'"/>
        </div>
        <div v-else @click="image.expanded = false" class="expanded">
          <v-img contain :src="require('@/assets/gallery/photography/' + image.name)" />
          <div :class="$vuetify.breakpoint.smAndUp? 'image-text' : 'image-text-m' ">{{ image.info }}</div>
        </div>
      </v-flex>
      <v-flex xs12>
        <div class="text">
          <div class="ma-1">edits</div>
          <div class="ma-1">編集する</div>
        </div>
      </v-flex>
      <v-flex :class="$vuetify.breakpoint.mdAndUp? 'xs6' : 'xs12'" v-for="image in imagesEdits" :key="image.name">
        <div v-if="!image.expanded" @click="image.expanded = true">
          <v-img class="ma-4 image" :src="require('@/assets/gallery/edits/' + image.name)" :max-height="$vuetify.breakpoint.smAndUp? '200px' : '125px'"/>
        </div>
        <div v-else @click="image.expanded = false" class="expanded">
          <v-img contain :src="require('@/assets/gallery/edits/' + image.name)"/>
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
  data () {
     return {
       theme: { color: '#fffb96', image: 'ta-yellow.gif' },
       imagesPhotos: [
         { name: 'image1.jpg', expanded: false, info: 'paseo de la princesa, san juan, puerto rico' },
         { name: 'image2.jpg', expanded: false, info: 'umbrella street, san juan, puerto rico' },
         { name: 'image3.jpg', expanded: false, info: 'roebling suspension bridge, cincinnati, ohio' },
         { name: 'image4.jpg', expanded: false, info: 'the 529, dayton, ohio' },
         { name: 'image5.jpg', expanded: false, info: 'euclid commons, cleveland, ohio' },
         { name: 'image6.jpg', expanded: false, info: 'the metra, chicago, illinois' },
         { name: 'image7.jpg', expanded: false, info: 'cockleshell bay, st. kitts' },
         { name: 'image8.jpg', expanded: false, info: 'euclid avenue, cleveland, ohio' },
         { name: 'image9.jpg', expanded: false, info: 'washington boulevard, detroit, michigan' },
         { name: 'image10.jpg', expanded: false, info: 'japanese tea garden, san francisco, california' },
         { name: 'image11.jpg', expanded: false, info: 'cleveland state university, cleveland, ohio' },
         { name: 'image12.jpg', expanded: false, info: 'irving commons, dayton, ohio' },
         { name: 'image13.jpg', expanded: false, info: 'trinity cathedral, cleveland, ohio' },
         { name: 'image14.jpg', expanded: false, info: 'lake shore east park, chicago, illinois' },
         { name: 'image15.jpg', expanded: false, info: 'cobo center, detroit, michigan' }
       ],
       imagesEdits: [
         { name: 'image1.png', expanded: false, info: 'static' },
         { name: 'image2.png', expanded: false, info: 'glitch' },
         { name: 'image3.png', expanded: false, info: 'terminal anomaly' },
         { name: 'image4.png', expanded: false, info: 'lank' },
         { name: 'image5.png', expanded: false, info: 'melee icon' },
         { name: 'image6.png', expanded: false, info: 'music icon' },
         { name: 'image7.png', expanded: false, info: 'photography icon' }
      ]
     }
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
  max-width: 90%;
  max-height: 90%;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  position: fixed;
  z-index: 100000;
  overflow: hidden;
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
  transition: all 2s ease;
}

.text:hover {
  color: #fffb96;
  text-shadow: 0 0 5px #fffb96;
}

.image:hover {
  box-shadow: 0 0 20px #fffb96;
}
</style>
