import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
// Importamos JQuery
window.$ = window.jQuery = require('jquery');

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

let app = null
firebase.auth().onAuthStateChanged(() => {
	if(!app){
		new Vue({
			router,
			render: h => h(App)
		}).$mount('#app')
	}
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
