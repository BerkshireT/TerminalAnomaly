<template>
  <v-flex pa-2 text-xs-center class="footer-border">
    <span :class="$vuetify.breakpoint.smAndUp? 'text' : 'text-m'">
      Copyright 20XX &copy; Tyler Berkshire
    </span>
  </v-flex>
</template>

<style scoped>
.footer-border {
  letter-spacing: 0.3em;
  background: rgb(1, 1, 1, 0.0);
  color: white;
  font-family: 'OCR-A', 'Courier', monospace;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.text-m {
  font-size: 10px;
}
</style>
