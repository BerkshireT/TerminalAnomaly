import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDumpster } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDumpster)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
