import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data: {
    coos=0
  },
  render: h => h(App),
}).$mount('#app')
