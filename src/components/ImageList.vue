<template>
   <v-layout v-if="$vuetify.breakpoint.lgAndUp" wrap text-xs-center justify-center>
      <v-flex xs3 v-for="image in images" :key="image.full">
         <div v-if="image.isEmpty">
            <v-img class="ma-4 image-trans" :src="image.emptyLink" max-height="150px"/>
         </div>
         <div v-else-if="!image.expanded" @click="image.expanded = true">
            <v-img class="ma-4 image" :src="image.compressed" max-height="150px"/>
            <div class="image-text">{{ image.info }}</div>
         </div>
         <div v-else @click="image.expanded = false" class="expanded">
            <div class="image-placeholder">loading...<br>読み込み...</div>
            <v-img contain :src="image.full" />
            <div class="image-text-expanded">{{ image.info }}</div>
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
            <div class="image-text-m">{{ image.info }}</div>
         </div>
         <div v-else @click="image.expanded = false" class="expanded">
            <div class="image-placeholder">loading...<br>読み込み...</div>
            <v-img contain :src="image.full" />
            <div class="image-text-expanded-m">{{ image.info }}</div>
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

      let emptyOptions = 
      [
         { isEmpty: true, emptyLink: "https://github.com/BerkshireT/Assets/blob/main/transparent1.png?raw=true" },
         { isEmpty: true, emptyLink: "https://github.com/BerkshireT/Assets/blob/main/transparent2.png?raw=true" },
         { isEmpty: true, emptyLink: "https://github.com/BerkshireT/Assets/blob/main/transparent3.png?raw=true" },
         { isEmpty: true, emptyLink: "https://github.com/BerkshireT/Assets/blob/main/transparent4.png?raw=true" },
         { isEmpty: true, emptyLink: "https://github.com/BerkshireT/Assets/blob/main/transparent5.png?raw=true" },
      ]

      if (this.$vuetify.breakpoint.lgAndUp) {
         let perPageCount = 8
         this.$data.pageCount = Math.ceil(this.originalData.length / perPageCount)
         this.$data.pageEmpties = perPageCount - (this.originalData.length % perPageCount)
         if (perPageCount != this.$data.pageEmpties) {
            for (let x = 1; x <= this.$data.pageEmpties; x++) {
               let empty = emptyOptions[Math.floor(Math.random() * 5)];
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
               let empty = emptyOptions[Math.floor(Math.random() * 5)];
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
  font-size: 17px;
  font-family: 'OCR-A', 'Courier', monospace;
  -webkit-text-stroke: .03em #fffb96;
  padding: 1px;
  overflow-wrap: break-word;
  width: 65%;
  justify-content: center;
  margin: auto;
}

.image-text-m {
  font-size: 13px;
  font-family: 'OCR-A', 'Courier', monospace;
  -webkit-text-stroke: .03em #fffb96;
  padding: 1px;
  overflow-wrap: break-word;
  width: 100%;
  justify-content: center;
  margin: auto;
}

.image-text-expanded {
  font-size: 17px;
  font-family: 'OCR-A', 'Courier', monospace;
  -webkit-text-stroke: .03em #fffb96;
  padding: 1px;
  overflow-wrap: break-word;
  width: 65%;
  justify-content: center;

  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);
  margin: 0 auto;

  text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px;
}

.image-text-expanded-m {
  font-size: 13px;
  font-family: 'OCR-A', 'Courier', monospace;
  -webkit-text-stroke: .03em #fffb96;
  padding: 1px;
  overflow-wrap: break-word;
  width: 100%;
  justify-content: center;
  
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);
  margin: 0 auto;

  text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px;
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
}

a {
  color: inherit;
  text-decoration: underline;
  cursor: crosshair;
}

a:hover {
  color: #fffb96;
  text-shadow: 0 0 5px #fffb96;
}

.inline {
  display: inline;
}
</style>
