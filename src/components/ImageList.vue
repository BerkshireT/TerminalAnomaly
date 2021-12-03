<template>
   <v-layout wrap text-xs-center justify-center>
      <v-flex xs3 v-for="image in images" :key="image.full">
         <div v-if="!image.expanded" @click="image.expanded = true">
            <v-img class="ma-4 image" :src="image.compressed" :max-height="$vuetify.breakpoint.smAndUp? '200px' : '75px'"/>
         </div>
         <div v-else @click="image.expanded = false" class="expanded">
            <v-img contain :src="image.full" />
            <div :class="$vuetify.breakpoint.smAndUp? 'image-text' : 'image-text-m'">{{ image.info }}</div>
         </div>
      </v-flex>
      <v-flex xs12>
         <PaginationControl :currentPage="page" :pageCount="pageCount" @nextPage="pageChangeHandle('next')" @previousPage="pageChangeHandle('previous')"/>
      </v-flex>
   </v-layout>
</template>

<script>
import PaginationControl from '@/components/PaginationControl.vue'

export default {
   components: { PaginationControl },
   props: {
      originalData: {
         required: true,
      }
   },
   methods: {
      async randomImages(list) {
         return list.sort(function(){return 0.5 - Math.random()})
      },
      async pageChangeHandle(value) {
         switch (value) {
            case 'next':
               this.page += 1
               this.start += 8
               this.end += 8
               break
            case 'previous':
               this.page -= 1
               this.start -= 8
               this.end -= 8
               break
            }
         this.images = this.originalData.slice(this.start, this.end)
      }
   },
   data () {
      return {
         images: [],
         page: 1,
         start: 0,
         end: 8,
         pageCount: 1,
      }
   },
   async mounted() {
      this.$data.images = this.originalData.slice(this.start, this.end)
      this.$data.pageCount = Math.ceil(this.originalData.length / 8)
   }
}
</script>

<style scoped>
.image {
  border-style: solid;
  border-color: #fffb96;
  transition: all .5s ease;
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
}

.text {
  font-size: 17px;
  letter-spacing: .5em;
  font-family: 'OCR-A', 'Courier', monospace;
}

.image:hover {
  box-shadow: 0 0 20px #fffb96;
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: underline;
}

a:hover {
  color: #fffb96;
  text-shadow: 0 0 5px #fffb96;
}

.inline {
  display: inline;
}
</style>
