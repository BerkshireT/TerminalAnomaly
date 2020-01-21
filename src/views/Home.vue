<!-- 
TODO:
Add home page stuff, desc of each thing? idk yet
Redo about page to match new theme
Add Headway info
Add Super Smash Search info
Add vaporwave page, make album art, list other cool sites, music
-->
<template>
  <v-container fluid fill-height class="home">
    <v-layout>
      <v-flex>
        <Navbar :image="theme.image" :color="theme.color" />
      </v-flex>
    </v-layout>

    

    <Footer :border="theme.color"/>
  </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  title: 'Home - TerminalAnomaly',
  components: { Footer, Navbar },
  data () {
    return {
      theme: { color: '#05ffa1', image: 'ta-green.gif' },
      info: 'This website serves as an online resume and as a portfolio for some of my favorite projects. It\'s also '
    }
  }
}
</script>

<style scoped>
.home {
  background-color: #212121;
  width: 100vw;
  height: 100vh;
  font-family: 'Times New Roman', Times, serif;
}
</style>
