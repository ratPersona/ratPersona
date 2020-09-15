import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios' //URL https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html

import styles from './scss/type.scss';
console.log(styles)

// Vue.use(firebase)
Vue.use(firestorePlugin)
Vue.use(axios)

firebase.initializeApp({
  apiKey: "AIzaSyCyZeac_yevgSLXqnlKNH1Xm2zULOYLY9Q",
  authDomain: "ratpersona-blog.firebaseapp.com",
  databaseURL: "https://ratpersona-blog.firebaseio.com",
  projectId: "ratpersona-blog",
  storageBucket: "ratpersona-blog.appspot.com",
  messagingSenderId: "427157095902",
  appId: "1:427157095902:web:35465b326edbc02483c94f",
  measurementId: "G-XKELKQ43SQ"
});
export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  firebase,
  firestorePlugin,
  render: h => h(App)
}).$mount('#app')
