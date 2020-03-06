import Vue from 'vue'
// 导入App根组件
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
import axios from 'axios'
import TreeTable from 'vue-table-with-tree-grid'

// 将axios挂载到vue的原型对象上，这样每个组件都能用this访问axios
Vue.prototype.$http = axios
// 设置请求根路径根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.config.productionTip = false
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

Vue.component('tree-table', TreeTable)
// 创建Vue实例
new Vue({
  // 将路由挂载到Vue实例
  router,
  // 将App根组件渲染到页面
  render: h => h(App)
}).$mount('#app')
