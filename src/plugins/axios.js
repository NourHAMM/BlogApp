

import Vue from 'vue'

import axios from 'axios'



const api = axios.create({

  baseURL: "http://localhost:3000",

})



Vue.prototype.$axios = api