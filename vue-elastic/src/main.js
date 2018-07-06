import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

//Use plugins by calling the Vue.use() global method, you can also pass in options.
Vue.use(axios, VueAxios);

new Vue({
  render: h => h(App)
}).$mount('#app')
