import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import titleMixin from './components/mixins/titleMixin'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas, fab)

Vue.config.productionTip = false

Vue.mixin(titleMixin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
