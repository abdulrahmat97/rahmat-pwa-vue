import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueCurrencyFilter from 'vue-currency-filter'

Vue.use(VueCurrencyFilter,
  {
    name: 'rupiah',
    symbol: 'Rp',
    thousandsSeparator: '.', 
    fractionCount: 0,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true,
    avoidEmptyDecimals: undefined,
  })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
