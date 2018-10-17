import Vue from "vue";
import Router from "vue-router";
const home = r =>
  require.ensure([], () => r(require("view/home.vue")), "home");

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    //跳转主页面
    {
      path: "/home",
      component: home
    },
  
  ]
});



export default router;