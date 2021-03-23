import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '@/views/Signup.vue';
import Signin from '@/views/Signin.vue';
import firebase from 'firebase';
import { ROUTER_NAMES } from "@/constants/routerNames";
import * as Firebase from "@/service/FirebaseService";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: ROUTER_NAMES.LANGUAGE,
    component: Home,
    meta: { auth: true }
  },
  {
    path: '/signup',
    name: ROUTER_NAMES.SIGN_UP,
    component: Signup,
    meta: { auth: false }
  },
  {
    path: '/signin',
    name: ROUTER_NAMES.SIGN_IN,
    component: Signin,
    meta: { auth: false }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  // 認証状態によるルーティング
  await Firebase.onAuthStateChanged((user) => {
    // 認証が必要な画面かどうかを取得
    const authView = to.matched.some(record => record.meta.auth);

    if (user) {
      // 認証状態
      // 認証時に遷移しない画面はホームに遷移
      authView === false ?
        next({ name: ROUTER_NAMES.LANGUAGE }) :
        next();
    } else {
      // 非認証状態
      // 認証が必要な画面に遷移する場合はリダイレクト
      if (authView) next({ name: ROUTER_NAMES.SIGN_IN })
    }

    next();
  });

  next();
})

export default router
