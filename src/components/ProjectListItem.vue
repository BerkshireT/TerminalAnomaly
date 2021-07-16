<template>
   <v-flex :class="$vuetify.breakpoint.lgAndUp? 'xs12' : 'xs12'">
      <div class="glow my-4">
         <router-link :to="link">
            <v-layout v-if="isLeft" justify-center align-center>
               <v-flex xs2>
                  <v-img :src="require('@/assets/projectListThumbs/' + image)" max-height="150px" contain/>
               </v-flex>
               <v-flex xs4>
                  <div class="ma-1">{{title}}</div>
                  <div class="ma-1">{{titleJap}}</div>
               </v-flex>
            </v-layout>
            <v-layout v-else justify-center align-center>
               <v-flex xs4>
                  <div class="ma-1">{{title}}</div>
                  <div class="ma-1">{{titleJap}}</div>
               </v-flex>
               <v-flex xs2>
                  <v-img :src="require('@/assets/projectListThumbs/' + image)" max-height="150px" contain/>
               </v-flex>
            </v-layout>
         </router-link>
      </div>
   </v-flex>
</template>

<script>
export default {
   props: {
      link: {
         required: true,
         default: ""
      },
      image: {
         required: true,
         default: ""
      },
      title: {
         required: true,
         default: ""
      },
      titleJap: {
         required: true,
         default: ""
      },
      isLeft: {
         required: true,
         default: false
      }
   }
}
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

.glow {
  font-size: 17px;
  letter-spacing: .5em;
  font-family: 'OCR-A', 'Courier', monospace;
  transition: all 2s ease;
}

.glow:hover {
  color: #b967ff;
  text-shadow: 0 0 5px #b967ff;
}
</style>
