<template>
   <v-flex xs12>
      <div class="text">
         <div class="text-xs-center">
            <div v-if="innerText === 1" class="resumeBox">
               <div class="ma-1">{{ title }}</div>
               <div class="ma-1">{{ japanese }}</div>
               <img src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs_2k-2.png" />
               <div class="ma-1"><a href="https://github.com/BerkshireT/Resume/blob/main/TylerBerkshire_Resume.pdf" target="blank">view</a></div>
            </div>
            <div v-if="innerText === 3" class="personalsBox">
               <div class="ma-1">{{ title }}</div>
               <div class="ma-1">{{ japanese }}</div>
               <div class="ma-1">
                  <a href="https://github.com/BerkshireT" target="blank"><img class="mx-2" src="https://image.flaticon.com/icons/png/512/25/25231.png" height="48px" width="48px"/></a>
                  <a href="https://open.spotify.com/user/cf9hq7vhmnz4lizol8969ph6t?si=3uj903wIRji4mHXT0q3GmQ" target="blank"><img class="mx-2" src="https://image.flaticon.com/icons/png/512/2111/2111624.png" height="48px" width="48px"/></a>
                  <a href="https://www.instagram.com/terminalanomaly/" target="blank"><img class="mx-2" src="https://image.flaticon.com/icons/png/512/174/174855.png" height="48px" width="48px"/></a>
                  <a href="https://www.goodreads.com/user/show/108732185-tyler" target="blank"><img class="mx-2" src="https://www.flaticon.com/svg/static/icons/svg/2111/2111431.svg" height="48px" width="48px"/></a>
                  <a href="https://www.myanimelist.net/animelist/TerminalAnomaly" target="blank"><img class="mx-2" src="https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAiC8a86sHufn_jOI-JGtoCQ" height="48px" width="48px"/></a>
                  <a href="https://www.twitter.com/TerminalAnomaly" target="blank"><img class="mx-2" src="https://elementarylibrarian.com/wp-content/uploads/2013/11/twitter-bird-white-on-blue.png" height="48px" width="48px"/></a>
                  <a href="https://steamcommunity.com/id/terminalanomaly/" target="blank"><img class="mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1024px-Steam_icon_logo.svg.png" height="48px" width="48px"/></a>
               </div>
            </div>
            <div v-if="innerText === 5" class="contactBox">
               <div class="ma-1">{{ title }}</div>
               <div class="ma-1">{{ japanese }}</div>
               <img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png" />
               <div class="ma-1"><a href="mailto:berkshiret122@gmail.com" target="blank">send virtual mail</a></div>
            </div>
         </div>
      </div>
   </v-flex>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      default: 'interests'
    },
    japanese: {
       required: true,
       default: 'nippon'
    },
    innerText: {
       required: true,
       default: 1
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 2em;
  letter-spacing: .5em;
  font-family: 'Cutive Mono', 'Courier', monospace;
  margin-top: .5em;
  margin-bottom: .5em;
}

.resumeBox a:hover, .personalsBox a:hover, .contactBox a:hover {
  color: #b967ff;
  transition: all 1s ease;
}

.resumeBox, .personalsBox, .contactBox {
  background-repeat: repeat;
  border-style: solid;
  border-color: white;
  border-right: 0;
  border-bottom: 0;
  box-shadow: 10px 10px;
  text-shadow: 2px 2px black;
  margin-top: 3em;
}

.resumeBox {
  background-color: #01cdfe;
}

.personalsBox {
  background-color: #b967ff;
}

.contactBox {
  background-color: #01cdfe;
}

a {
  color: inherit;
  text-decoration: underline;
}
</style>
