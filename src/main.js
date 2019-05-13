import Vue from 'vue'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import util from './libs/util'
import myCharts from 'echarts'
import Vuex from 'vuex'
import store from './store/index';

Vue.config.productionTip = false;
Vue.prototype.$util = util;
Vue.prototype.$myCharts = myCharts;
Vue.use(iView);
Vue.use(VueAxios, axios);
Vue.use(Vuex);
// Vue.use(myCharts);

/* eslint-disable no-new */
new Vue({
  el: '#indexPage',
  router,
  store,
  template: '<App/>',
  components: { App }
  // render: h => h(App) (另一种方法)
})
