// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueQrcode from '@chenfengyuan/vue-qrcode';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';

// import '@/permission'; // 路由守卫

import App from './App';
import router from './router';

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component(VueQrcode.name, VueQrcode);

const moment = require('moment');
// 时间过滤器
Vue.filter('moment', (value, formatString) => {
  // eslint-disable-next-line
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
  if (value) {
    return moment(value).format(formatString);
  }
  return '';
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
