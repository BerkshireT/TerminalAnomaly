import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router.js'
import titleMixin from './components/mixins/titleMixin'

Vue.config.productionTip = false

Vue.mixin(titleMixin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
