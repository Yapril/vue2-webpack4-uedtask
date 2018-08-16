import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'

Vue.config.productionTip = false

new Vue({
	el: '#app',
	router: router,
	components: { App },
	template: '<App/>'
})