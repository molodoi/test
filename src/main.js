// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// npm install materialize-css material-design-icons jquery sass-loader node-sass --save-dev
// import 'material-design-icons/iconfont/material-icons.css'
// import '../static/fonts/material/material-icons.scss'
// import jQuery from 'jquery'
// import materialIcons from 'material-design-icons/iconfont/material-icons.css'
import 'materialize-css/dist/js/materialize.min.js'
import './assets/scss/main.scss'

global.jQuery = require('jquery')
window.$ = window.jQuery = require('jquery')
global.Materialize = require('materialize-css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
