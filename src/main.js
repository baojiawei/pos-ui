import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import posUi from './packages/index'
Vue.use(posUi)
new Vue({
  render: (h) => h(App),
}).$mount('#app')
