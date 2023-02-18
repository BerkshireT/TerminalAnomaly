<template>
  <v-app class="app">
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
.app {
  background-color: black;
  cursor: crosshair;
}
</style>
