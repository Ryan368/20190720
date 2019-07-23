import Vue from 'vue'
import vueRouter from 'vue-router'
import router from './router.js'
import vueResource from 'vue-resource'
import {Header,Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
import home from './routers/home.vue'
// import './lib/bootstrap/bootstrap.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import moment from 'moment'


Vue.use(vueRouter)
Vue.use(vueResource)

// 全局设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'

// 全局定义过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


let vm = new Vue({
    el: '#app',
    render: c => c(home),
    router
})