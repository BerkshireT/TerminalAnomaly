<template>
  <v-container fluid fill-height class="Mixer">
    <v-layout wrap text-xs-center justify-center>
      <v-flex xs12>
        <Topbar :inner="true" :image="theme.image" :color="theme.color" />
      </v-flex>
      <v-flex xs12  v-for="item in text" :key="item.title">
        <v-layout wrap text-xs-left justify-center>
          <!-- TITLE -->
          <v-flex xs12 class="title text-xs-center">
            <p class="titletext">{{ item.title }}</p>
          </v-flex>
          <!-- PICTURE -->
          <v-flex xs3 v-if="$vuetify.breakpoint.mdAndUp" />
          <v-flex :xs6="$vuetify.breakpoint.mdAndUp" :xs10="$vuetify.breakpoint.smAndDown" class="pic">
            <v-img :src="require('@/assets/mixer/' + item.pic)"/>
          </v-flex>
          <v-flex xs3 v-if="$vuetify.breakpoint.mdAndUp" />
          <!-- TEXT -->
          <v-flex xs3 v-if="$vuetify.breakpoint.mdAndUp" />
          <v-flex :xs6="$vuetify.breakpoint.mdAndUp" :xs10="$vuetify.breakpoint.smAndDown" class="box" v-if="item.title === 'Karl Klomp Dirty Video Mixer (GCC Edition)'">
            <div class="text">{{ item.text }}<a href="https://www.karlklomp.nl/" target="blank">site.</a></div>
          </v-flex>
          <v-flex :xs6="$vuetify.breakpoint.mdAndUp" :xs10="$vuetify.breakpoint.smAndDown" class="box" v-else-if="item.title === 'GAME SET!'">
            <div class="text">{{ item.text }}<a href="https://www.youtube.com/c/TerminalAnomaly" target="blank">YouTube channel!</a></div>
          </v-flex>
          <v-flex :xs6="$vuetify.breakpoint.mdAndUp" :xs10="$vuetify.breakpoint.smAndDown" class="box" v-else>
            <div class="text">{{ item.text }}</div>
          </v-flex>
          <v-flex xs3 v-if="$vuetify.breakpoint.mdAndUp" />
        </v-layout>
      </v-flex>
    </v-layout>
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Topbar from '@/components/Topbar.vue'

export default {
  title: 'Karl Klomp Mixer',
  components: { Footer, Topbar },
  data () {
     return {
        theme: { color: '#b967ff', image: 'ta-purple.gif' },
        text: [ { title: "Karl Klomp Dirty Video Mixer (GCC Edition)",
                pic: "step0.gif",
                text: "Karl Klomp is an audiovisual designer who has created a number of cool gadgets for live performance visuals. One of these is dubbed the Dirty Video Mixer. This device " +
                "takes in two composite visual inputs and mixes them together to create trippy and glitchy effects. I had never seen anything like this before so I decided to make one " +
                "for myself! If you want to learn more about Karl Klomp, then check out their "
                },

                { title: "Components",
                pic: "step1.jpg",
                text: "The components for the Dirty Visual Mixer are nothing too complex. All that is needed is a set of three RCA inputs, two toggle switches, a 1k potentiometer, and " +
                "wire/solder to connect it all together. I got the RCA ports from an old TV I tore apart one day, the toggle switches from a local hardware store, and the rest off of " +
                "Amazon. It probably would have been easier to just get everything from Amazon or Ebay, but I enjoyed dismantling some old gadgets to see what I could salvage from them."
                },

                { title: "Initial Setup",
                pic: "step2.jpg",
                text: "My first attempt at putting the mixer together was done on some old cardboard. I did this so I could test that all my components worked and that I could successfully " +
                "solder them together (I had never soldered before this project). You can google some schematics for the wiring, but essentially each video signal is output to each switch " +
                "and the switches are output to the potentiometer. The potentiometer then controls the amount of each video signal that gets displayed to the main output, creating the glitches. " +
                "This trial run was a success, although my soldering was pretty shoddy and some connections snapped when I was testing the rig out..."
                },

                { title: "Choosing A Container",
                pic: "step3.jpg",
                text: "Now that I knew I could create the mixer, I thought it would be a novel challenge to try and put it in a controller shell. I initially wanted to use a N64 controller. After " +
                "taking it apart, though, I was surprised to find very little space in the shell itself. So I dug up a broken GameCube controller a friend had given me and scoped out the " +
                "dimensions. I was happy to find much more space than in the N64 controller. The button spaces were larger and the rumble pack attached to the motherboard made it so the shell " +
                "gave plenty of room for wiring. I sketched out the schematics and got to work!"
                },

                { title: "Building The Controller",
                pic: "step4.jpg",
                text: "The button/stick spaces in the GameCube controller seemed to naturally fit my components. I only had to cut out a few bits of plastic to get the potentiometer to fit in the " +
                "D-pad space. I super glued the switches to the trigger openings and the RCA output to the C-stick area. Then I started making the wire connections. After I connected " +
                "everything attached to the base, I added the final two RCA ports on top of the switches and soldered them in. This process was much more involved than my trial run because of the controller's " +
                "space constraints. However, I had gotten the hang of soldering and my connections were much more secure. The only thing left was to screw the top of the shell back on."
                },
                
                { title: "GAME SET!",
                pic: "step5.jpg",
                text: "Everything worked as expected! I just had to be careful when plugging the RCA cables into the rig since the super glued ports weren't the " +
                "strongest thing in the world. Now I could start to create trippy visuals to my heart's content. If you want to see what kind of cool things I'm trying with this, " +
                "be sure to check out my "
                }],
     }
  }
}
</script>

<style scoped>
.Mixer {
  width: 100%;
  height: 100%;
  background: url(../assets/backgrounds/grid-purple.png);
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  color: white;
}

.title {
  font-weight: bold;
  font-family: sans-serif;
  text-shadow: -.0625rem -.0625rem 0 #6BFFFF, .0625rem .0625rem 0 #FF819E;
}

.titletext {
  font-size: 2em;
}

.box, .pic {
  border: 2px solid #b967ff;
  margin-bottom: 24px;
}

.box {
  background-color: black;
}

.text {
  font-size: 1.3em;
  margin: 1em;
}

</style>
