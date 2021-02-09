import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyA6GlftKnwIVONrkfCFMqHj76c7Q-al8Zc",
  authDomain: "language-app-757b5.firebaseapp.com",
  projectId: "language-app-757b5",
  storageBucket: "language-app-757b5.appspot.com",
  messagingSenderId: "259927547074",
  appId: "1:259927547074:web:7691af763f3b0dfc1f6f5b"
}

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
