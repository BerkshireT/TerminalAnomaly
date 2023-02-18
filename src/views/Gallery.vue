<template>
  <v-container fluid fill-height class="gallery">
    <v-layout wrap text-xs-center justify-center>
      <v-flex xs12>
        <Topbar :inner="true" :image="theme.image" gif="gallery" :color="theme.color" :path="theme.path"/>
      </v-flex>
      <v-flex xs12>
        <div :class="$vuetify.breakpoint.smAndUp ? 'text mt-2' : 'text-m mt-2'" id="photography">
          <div class="ma-1">P H O T O G R A P H Y</div>
          <div class="ma-1">写真撮影</div>
        </div>
      </v-flex>
      <ImageList :originalData="imagesPhotos" />
      <v-flex xs12>
        <div :class="$vuetify.breakpoint.smAndUp ? 'text mt-2' : 'text-m mt-2'" id="edits">
          <div class="ma-1">E D I T S</div>
          <div class="ma-1">編集する</div>
        </div>
      </v-flex>
      <ImageList :originalData="imagesEdits" />
    </v-layout>
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Topbar from '@/components/Topbar.vue'
import ImageList from '@/components/ImageList.vue'

export default {
  title: 'GALLERY',
  components: { Footer, Topbar, ImageList },
  data () {
    return {
      theme: { color: '#fffb96', image: 'ta-yellow.gif', path: '/home/gallery$ ' },
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
        { expanded: false, info: 'washington boulevard, detroit, michigan', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/washington.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/washington.jpg?raw=true' },
        { expanded: false, info: 'bryson, wadsworth, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/bryson.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/bryson.jpg?raw=true' },
        { expanded: false, info: 'corey, wadsworth, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/corey.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/corey.jpg?raw=true' },
        { expanded: false, info: 'dan v2, wadsworth, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/dan%20v2.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/dan%20v2.jpg?raw=true' },
        { expanded: false, info: 'driftwood beach, jekyll island, georgia 📷 em', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/driftwood%20beach.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/driftwood%20beach.jpg?raw=true' },
        { expanded: false, info: 'em, jekyll island, georgia', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/em.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/em.jpg?raw=true' },
        { expanded: false, info: 'evan, wadsworth, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/evan.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/evan.jpg?raw=true' },
        { expanded: false, info: 'jekyll island, georgia', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/jekyll%20island.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/jekyll%20island.jpg?raw=true' },
        { expanded: false, info: 'rocky river reservation, north olmstead, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/rocky%20river.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/rocky%20river.jpg?raw=true' },
        { expanded: false, info: 'steve v2, wadsworth, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/steve%20v2.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/steve%20v2.jpg?raw=true' },
        { expanded: false, info: 'stop, wadsworth, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/stop.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/stop.jpg?raw=true' },
        { expanded: false, info: 'zenith, wadsworth, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/zenith.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/zenith.jpg?raw=true' },
        { expanded: false, info: 'colorado springs, colorado', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/cos%20alley.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/cos%20alley.jpg?raw=true' },
        { expanded: false, info: 'colorado springs, colorado', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/cos%20bnb.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/cos%20bnb.jpg?raw=true' },
        { expanded: false, info: 'bryson, colorado springs, colorado', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/cos%20bryson.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/cos%20bryson.jpg?raw=true' },
        { expanded: false, info: 'colorado springs, colorado', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/cos%20lodge.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/cos%20lodge.jpg?raw=true' },
        { expanded: false, info: 'colorado springs, colorado', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/cos%20motel.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/cos%20motel.jpg?raw=true' },
        { expanded: false, info: 'first st, san jose, california', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/first%20st.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/first%20st.jpg?raw=true' },
        { expanded: false, info: 'j, san jose, california', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/jeff.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/jeff.jpg?raw=true' },
        { expanded: false, info: 'cincinnati, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/full%20moon.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/full%20moon.jpg?raw=true' },
        { expanded: false, info: 'demon, cincinnati, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/demon.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/demon.jpg?raw=true' },
        { expanded: false, info: 'public house, cincinnati, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/public%20house.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/public%20house.jpg?raw=true' },
        { expanded: false, info: 'spider, cincinnati, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/spider.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/spider.jpg?raw=true' },
        { expanded: false, info: 'incinerator, covington, kentucky', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/incinerator.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/incinerator.jpg?raw=true' },
        { expanded: false, info: 'needle, seattle, washington', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/needle.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/needle.jpg?raw=true' },
        { expanded: false, info: 'lion, seattle, washington', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/lion.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/lion.jpg?raw=true' },
        { expanded: false, info: 'snow lake, washington', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/snow%20lake.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/snow%20lake.jpg?raw=true' },
        { expanded: false, info: 'snow lake trail, washington', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/snow%20lake%20trail.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/snow%20lake%20trail.jpg?raw=true' },
        { expanded: false, info: 'seattle, washington', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/seattle%20building.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/seattle%20building.jpg?raw=true' },
        { expanded: false, info: 'cincinnati, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/cincysunset.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/cincysunset.jpg?raw=true' },
        { expanded: false, info: 'all the way, tipp city, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/doublerainbow.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/doublerainbow.jpg?raw=true' },
        { expanded: false, info: 'egg benny, seattle, washington', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/egg.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/egg.jpg?raw=true' },
        { expanded: false, info: 'manitou springs, colorado', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/manitouhouses.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/manitouhouses.jpg?raw=true' },
        { expanded: false, info: 'the mockbee, cincinnati, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/mockbee.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/mockbee.jpg?raw=true' },
        { expanded: false, info: 'g9, san jose, california 📷 j', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/refreshments.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/refreshments.jpg?raw=true' },
        { expanded: false, info: 'unicorn, cincinnati, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/unicorn.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/unicorn.jpg?raw=true' },
        { expanded: false, info: 'woodland cemetary, dayton, ohio', full: 'https://github.com/BerkshireT/Assets/blob/main/photography/woodlandcemetary.jpg?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/photography/compressed/woodlandcemetary.jpg?raw=true' },
      ],
      imagesEdits: [
        { expanded: false, info: 'glitch', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/glitch.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/glitch.jpg?raw=true' },
        { expanded: false, info: 'melee icon', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/melee%20icon.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/melee%20icon.jpg?raw=true' },
        { expanded: false, info: 'music icon', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/music%20icon.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/music%20icon.jpg?raw=true' },
        { expanded: false, info: 'omedetou', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/omedetou.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/omedetou.jpg?raw=true' },
        { expanded: false, info: 'photography icon', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/photography%20icon.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/photography%20icon.jpg?raw=true' },
        { expanded: false, info: 'rapture', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/rapture.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/rapture.jpg?raw=true' },
        { expanded: false, info: 'static', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/static.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/static.jpg?raw=true' },
        { expanded: false, info: 'views', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/views.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/views.jpg?raw=true' },
        { expanded: false, info: 'jaguar', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/jaguar.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/jaguar.jpg?raw=true'},
        { expanded: false, info: 'portrait palette', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/portrait%20palette.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/portrait-palette.jpg?raw=true'},
        { expanded: false, info: 'rainbow cruise', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/rainbow%20cruise.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/rainbow%20cruise.jpg?raw=true' },
        { expanded: false, info: 'eden', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/eden.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/eden.jpg?raw=true' },
        { expanded: false, info: 'danimation', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/danimation.gif?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/danimation.gif?raw=true' },
        { expanded: false, info: 'summit', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/summit.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/summit.jpg?raw=true' },
        { expanded: false, info: 'thump', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/thump.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/thump.jpg?raw=true' },
        { expanded: false, info: 'we shall be forever', full: 'https://github.com/BerkshireT/Assets/blob/main/edits/we%20shall%20not%20be%20forever.png?raw=true', compressed: 'https://github.com/BerkshireT/Assets/blob/main/edits/compressed/we%20shall%20not%20be%20forever.jpg?raw=true' },
      ]           
    }
  },
}
</script>

<style scoped>
.gallery {
  width: 100%;
  height: 100%;
  background: url(../assets/backgrounds/grid-yellow.png);
  background-color: black;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
}

.text {
  font-size: 24px;
  font-weight: bold;
  letter-spacing: .5em;
  font-family: 'OCR-A', 'Courier', monospace;
}

.text-m {
  font-size: 17px;
  letter-spacing: .1em;
  font-family: 'OCR-A', 'Courier', monospace;
}

#photography, #edits {
  padding-top: 10px;
  margin-top: -50px;
}
</style>
