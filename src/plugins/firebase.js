import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import * as firebaseui from 'firebaseui'

const firebaseConfig = {
    apiKey: "AIzaSyBl_BoLEySWo4LtiyeVRrWxP4uIU9Y-Bu4",
    authDomain: "blog-8ad2f.firebaseapp.com",
    databaseURL: "https://blog-8ad2f.firebaseio.com",
    projectId: "blog-8ad2f",
    storageBucket: "blog-8ad2f.appspot.com",
    messagingSenderId: "953556659013",
    appId: "1:953556659013:web:e36cdf4582922fdcdf2c2c"
}

firebase.initializeApp(firebaseConfig)

const ui = new firebaseui.auth.AuthUI(firebase.auth())

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseui = ui