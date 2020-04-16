import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as firebase from "firebase";

Vue.config.productionTip = false


const configOptions = {
    apiKey: "AIzaSyD6wXQlj97RHusqo6ozhGkcEIuPBEUaM34",
    authDomain: "minitcss.firebaseapp.com",
    databaseURL: "https://minitcss.firebaseio.com",
    projectId: "minitcss",
    storageBucket: "minitcss.appspot.com",
    messagingSenderId: "312548919193",
    appId: "1:312548919193:web:8e3e53179a6c058a7ef508",
    measurementId: "G-751GKEQXW7"
};

firebase.initializeApp(configOptions);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
