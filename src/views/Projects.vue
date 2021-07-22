<template>
  <v-container fluid fill-height class="projects">
    <v-layout wrap text-xs-center justify-center>
      <v-flex xs12>
        <Topbar :inner="true" :image="theme.image" gif="projects" :color="theme.color" />
      </v-flex>
      <ProjectListItem link="/DirtyVideoMixer" image="MixerThumb.png" title="Karl Klomp Video Mixer" titleJap="ビデオミキサー" :isLeft="false"/>
      <ProjectListItem link="/KOeveryDayO" image="KOThumb.png" title="#KOeveryDayO" titleJap="ノックアウト" :isLeft="true"/>
      <ProjectListItem link="/SuperSmashSearch" image="SmashThumb.png" title="Super Smash Search" titleJap="スーパー・スマッシュ・サーチ" :isLeft="false"/>
    </v-layout>
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Topbar from '@/components/Topbar.vue'
import ProjectListItem from '@/components/ProjectListItem.vue'

export default {
  title: 'PROJECTS',
  components: { Footer, Topbar, ProjectListItem },
  data () {
     return {
        theme: { color: '#b967ff', image: 'ta-purple.gif' }
     }
  }
}
</script>

<style scoped>
.projects {
  width: 100%;
  height: 100%;
  background: url(../assets/backgrounds/grid-purple.png);
  background-color: black;
  background-size: cover;
  background-repeat: repeat-y;
  background-position: center;
  background-attachment: fixed;
  color: white;
}
</style>
