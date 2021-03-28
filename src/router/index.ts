import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Language from '@/views/Language.vue'
import Signup from '@/views/Signup.vue';
import Signin from '@/views/Signin.vue';
import LanguageList from '@/components/organisms/LanguageList.vue';
import LanguageAdd from '@/components/organisms/LanguageAdd.vue';
import { ROUTER_NAMES } from "@/constants/routerNames";
import * as Firebase from "@/service/FirebaseService";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Language,
    meta: { auth: true },
    children: [
      {
        path: '',
        component: LanguageList,
        name: ROUTER_NAMES.LANGUAGE_LIST
      },
      {
        path: 'add',
        component: LanguageAdd,
        name: ROUTER_NAMES.LANGUAGE_ADD
      }
    ]
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
        next({ name: ROUTER_NAMES.LANGUAGE_LIST }) :
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
