import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueCurrencyFilter from 'vue-currency-filter'

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

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
