import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import Home from '@/views/home';
import SignIn from '@/views/signin';
import Present from '@/views/Present';
import History from '@/views/History';

Vue.use(Router);

const vueRouter = new Router({
  mode: 'history',
  routes: [
    // 后台
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/present',
      name: 'Present',
      component: Present,
    },
    {
      path: '/history',
      name: 'History',
      component: History,
    },
    // 护照
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
    },
  ],
});

vueRouter.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

vueRouter.afterEach(() => {
  NProgress.done();
});

export default vueRouter;
