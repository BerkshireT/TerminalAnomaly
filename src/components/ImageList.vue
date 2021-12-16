<template>
   <v-layout v-if="$vuetify.breakpoint.lgAndUp" wrap text-xs-center justify-center>
      <v-flex xs3 v-for="image in images" :key="image.full">
         <div v-if="image.isEmpty">
            <v-img class="ma-4 image-trans" :src="image.emptyLink" max-height="200px"/>
         </div>
         <div v-else-if="!image.expanded" @click="image.expanded = true">
            <v-img class="ma-4 image" :src="image.compressed" max-height="200px"/>
         </div>
         <div v-else @click="image.expanded = false" class="expanded">
            <div class="image-placeholder">loading...<br>読み込み...</div>
            <v-img contain :src="image.full" />
            <div class="image-text">{{ image.info }}</div>
         </div>
      </v-flex>
      <v-flex xs12>
         <PaginationControl :currentPage="page" :pageCount="pageCount" @nextPage="pageChangeHandle('next')" @previousPage="pageChangeHandle('previous')"/>
      </v-flex>
   </v-layout>
   
   <v-layout v-else wrap text-xs-center justify-center>
      <v-flex xs6 v-for="image in imagesMobile" :key="image.full">
         <div v-if="image.isEmpty">
            <v-img class="ma-4 image-trans" :src="image.emptyLink" :max-height="$vuetify.breakpoint.smAndDown ? '60px' : '200px'"/>
         </div>
         <div v-else-if="!image.expanded" @click="image.expanded = true">
            <v-img class="ma-4 image" :src="image.compressed" :max-height="$vuetify.breakpoint.smAndDown ? '60px' : '200px'"/>
         </div>
         <div v-else @click="image.expanded = false" class="expanded">
            <div class="image-placeholder">loading...<br>読み込み...</div>
            <v-img contain :src="image.full" />
            <div class="image-text-m">{{ image.info }}</div>
         </div>
      </v-flex>
      <v-flex xs12>
         <PaginationControl :currentPage="pageMobile" :pageCount="pageCountMobile" @nextPage="pageChangeHandle('next')" @previousPage="pageChangeHandle('previous')"/>
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
      randomImages(list) {
         return list.sort(function(){return 0.5 - Math.random()})
      },
      async pageChangeHandle(value) {
         switch (value) {
            case 'next':
               this.page += 1
               this.start += 8
               this.end += 8

               this.pageMobile += 1
               this.startMobile += 4
               this.endMobile += 4
               break
            case 'previous':
               this.page -= 1
               this.start -= 8
               this.end -= 8
               
               this.pageMobile -= 1
               this.startMobile -= 4
               this.endMobile -= 4
               break
            }
         this.images = this.originalData.slice(this.start, this.end)
         this.imagesMobile = this.$data.dataCopy.slice(this.startMobile, this.endMobile)
      },
   },
   data () {
      return {
         images: [],
         page: 1,
         start: 0,
         end: 8,
         pageCount: 1,
         pageEmpties: 0,

         dataCopy: [],
         imagesMobile: [],
         pageMobile: 1,
         startMobile: 0,
         endMobile: 4,
         pageCountMobile: 1,
         pageEmptiesMobile: 0,
      }
   },
   async mounted() {
      this.originalData = this.randomImages(this.originalData)
      let empty = { isEmpty: true, emptyLink: "https://github.com/BerkshireT/Assets/blob/main/transparent.png?raw=true" }

      if (this.$vuetify.breakpoint.lgAndUp) {
         let perPageCount = 8
         this.$data.pageCount = Math.ceil(this.originalData.length / perPageCount)
         this.$data.pageEmpties = perPageCount - (this.originalData.length % perPageCount)
         if (perPageCount != this.$data.pageEmpties) {
            for (let x = 1; x <= this.$data.pageEmpties; x++) {
               this.originalData.push(empty)
            }
         }
         this.$data.images = this.originalData.slice(this.start, this.end)
      }
      else {
         this.$data.dataCopy = [...this.originalData]
         let perPageCountMobile = 4
         this.$data.pageCountMobile = Math.ceil(this.originalData.length / perPageCountMobile)
         this.$data.pageEmptiesMobile = perPageCountMobile - (this.originalData.length % perPageCountMobile)
         if (perPageCountMobile != this.$data.pageEmptiesMobile) {
            for (let x = 1; x <= this.$data.pageEmptiesMobile; x++) {
               this.$data.dataCopy.push(empty)
            }
         }
         this.$data.imagesMobile = this.$data.dataCopy.slice(this.startMobile, this.endMobile) 
      }
   }
}
</script>

<style scoped>
.image, .image-trans {
  border-style: solid;
  border-color: #fffb96;
  transition: all .5s ease;
}

.image-placeholder {
  font-size: 20px;
  letter-spacing: .5em;
  font-family: 'OCR-A', 'Courier', monospace;
  position: fixed;
  top: 50%;
  width: 100%;
  height: 100%;
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
