<template>
  <v-footer dark absolute height="auto">
    <v-flex pa-2 text-xs-center class="footer" :style="{ borderColor: border }">
      &copy; {{ new Date().getFullYear() }} - Tyler Berkshire
    </v-flex>
  </v-footer>
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
.footer {
  border-top: solid;
  border-bottom: solid;
  border-width: 1px;
  letter-spacing: 0.1em;
}
</style>
