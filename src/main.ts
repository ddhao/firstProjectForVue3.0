import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import Store from './store/index'
// css
import 'reset-css'
import '/@/common/css/base.css'

createApp(App).use(Router).use(Store).mount('#app')
