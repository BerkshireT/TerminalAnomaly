<template>
  <footer>
    <v-flex pa-2 text-xs-center class="footer-border" :style="{ borderColor: border }">
      &copy; {{ new Date().getFullYear() }} - Tyler Berkshire
    </v-flex>
  </footer>
</template>

<script>
export default {
  props: {
    border: {
      required: true,
      default: '#212121'
    }
  }
}
</script>

<style scoped>
.footer-border {
  border-top: solid;
  border-bottom: solid;
  border-width: 1px;
  letter-spacing: 0.1em;
  background: rgb(1, 1, 1, 0.0);
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
