import './js/common'
import './assets/css/main.css'
import './assets/scss/main.scss'


// import 'vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Vue from'vue'
// window.Vue = require('vue/dist/vue.js')
window.Vue = require('vue')
import store from './store'

Vue.component('example-component', require('./components/Example.vue').default)

const app = new Vue({
  data() {
    return {
      component: false,
    }
  },
  store,
  el: '#app'
})