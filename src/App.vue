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
}
.fade-enter-active {
  transition: all 2s ease;
}
.fade-leave-active, .fade-leave-to {
  filter: hue-rotate(90deg);
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
