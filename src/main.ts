import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@/plugins/composition-api'
import '@/plugins/vee-validate'
import '@/plugins/axios'
import '@/plugins/vuetify-toast-snackbar'
import '@/plugins/vuetify-dialog'
import '@/plugins/error-handler'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
