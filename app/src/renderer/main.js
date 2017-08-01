import Vue from 'vue';
import Electron from 'vue-electron';
import Resource from 'vue-resource';
import Router from 'vue-router';
import store from './vuex/store';
import App from './App';
import routes from './routes';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(ElementUI);
Vue.use(Electron);
Vue.use(Resource);
Vue.use(Router);

Vue.config.debug = true;

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

/* eslint-disable no-new */
new Vue({
  components: {},
  store,
  router,
  ...App,
}).$mount('#app');
