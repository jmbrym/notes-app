import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import firebase from "firebase/app";
import {firestorePlugin} from 'vuefire'
import store from './store'

// import * as firebase from 'firebase';
import 'firebase/firestore';



Vue.use(firestorePlugin);
Vue. prototype.$axios = axios;
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs7YOlACkv6wDYbDNc0TTTugzT0fU1AL8",
    authDomain: "notes-app-ae506.firebaseapp.com",
    databaseURL: "https://notes-app-ae506.firebaseio.com",
    projectId: "notes-app-ae506",
    storageBucket: "notes-app-ae506.appspot.com",
    messagingSenderId: "492011499314",
    appId: "1:492011499314:web:77eb5b2ebec7a8c780712b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

let app;
firebase.auth().onAuthStateChanged(user=> {
  console.log(user);
  if(!app){
    app = new Vue ({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
