import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'virtual:windi.css'
import './styles/global.css'
import { imgUrl } from './config/cdn'
import PageShell from './components/PageShell.vue'

Vue.use(ElementUI)
Vue.component('PageShell', PageShell)
Vue.prototype.$img = imgUrl

Vue.mixin({
  methods: {
    copyText(text) {
      const done = () => this.$message.success({ message: '复制成功！', duration: 1000 })
      const fail = () => this.$message.error('复制失败，请手动复制')
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(fail)
      } else {
        const input = document.createElement('textarea')
        input.value = text
        document.body.appendChild(input)
        input.select()
        try {
          document.execCommand('copy')
          done()
        } catch (e) {
          fail()
        }
        document.body.removeChild(input)
      }
    },
    goToUrl(url) {
      window.open(url)
    },
  },
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
