import Vue from 'vue'
import VueRouter from 'vue-router'
// import home from '@/page/home'
// import HelloWorld from '@/page/test/HelloWorld'
import iView from 'iview'
import store from '@/store/index'
// import Bind from '@/page/test/Bind/Bind'
// import ComputedWatch from '@/page/test/Computed&Watch'
// import Transit from '@/page/css/transit'

Vue.use(VueRouter)

const baseRoute = [
  {
    path: '/index',
    name: '主页',
    meta: {
      name: '',
      nameshow: false,
      pathshow: false
    },
    component: (resolve) => require(['@/page/home.vue'], resolve),
    redirect: '/index/mainpage',
    children: [
      {
        path: '/index/mainpage',
        name: '首页',
        meta: {
          name: '',
          nameshow: false,
          pathshow: false
        },
        component: (resolve) => require(['@/page/mainPage.vue'], resolve)
      }
    ]
    //   redirect: '/index/upload',
    //   children: [
    //     {
    //       path: '/index/upload',
    //       name: '首页',
    //       meta: {
    //         name: '',
    //         nameshow: false,
    //         pathshow: false
    //       },
    //       component: (resolve) => require(['@/page/iview/upload/uploadMain.vue'], resolve)
    //     }
    //   ]
  },
  {
    path: '*',
    redirect: '/index'
  }
];
const router = new VueRouter({
  mode: 'history',
  routes: baseRoute
});

var appI = new Vue({
  store
});

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  appI.$util.setBreadArray(appI, to.matched);
  next();
});
router.afterEach(r => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

export default router;
