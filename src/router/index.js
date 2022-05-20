import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

import store from "../store/index"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/video",
    name: "video",
    component: () =>
      import("../views/VideoView.vue"),
  },
  {
    path: "/type",
    name: "type",
    component: () =>
      import("../views/TypeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/LoginView.vue"),
  },
  {
    path: "/talk",
    name: "talk",
    component: () =>
      import("../views/TalkView.vue"),

    beforeEnter:(to,from,next)=>{

      let token =store.state.token

      if(token){
        next()
      }else {
        next({name:"login",params:{id:"talk"}})
      }
      
    }
  },
  {
    path: "/mine",
    name: "mine",
    component: () =>
      import("../views/MineView.vue"),

      beforeEnter:(to,from,next)=>{

        let token =store.state.token

        console.log(token)
        if(token){
          next()
        }else {
          next({name:"login",params:{id:"mine"}})
        }
        
      }
  },
  {
    path: "/about",
    name: "about",
    
    component: () =>
      import("../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});
// 权限管理 

export default router;
