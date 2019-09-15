import '@/assets/vendor/nucleo/css/nucleo.css'
import '@/assets/vendor/font-awesome/css/font-awesome.css'
import '@/assets/scss/argon.scss'
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import globalComponents from './globalComponents'
import globalDirectives from './globalDirectives'

Vue.use(globalComponents)
Vue.use(globalDirectives)
Vue.use(VueLazyload)
