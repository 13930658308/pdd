import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible"
import Vant from 'vant'
import 'vant/lib/index.css'
import './style/reset.css' //全局样式

Vue.use(Vant)
Vue.config.productionTip = false;


import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

// 使用mock
if (process.env.NODE_ENV === "development") {
  require("./mock/mock")
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");