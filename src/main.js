import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import vueTextareaAutosize from 'vue-textarea-autosize'
Vue.use(vueTextareaAutosize);
import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD21oSMQ6n7rD0ImdGTO2c134KiXYV4agc",
  authDomain: "vue-calendar-b85de.firebaseapp.com",
  databaseURL: "https://vue-calendar-b85de.firebaseio.com",
  projectId: "vue-calendar-b85de",
  storageBucket: "vue-calendar-b85de.appspot.com",
  messagingSenderId: "918696769784",
  appId: "1:918696769784:web:5f5d249e73f92fe27b230d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db=firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
