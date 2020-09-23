import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
// css
import 'reset-css'
import '/@/common/css/base.css'

createApp(App).use(Router).mount('#app')
