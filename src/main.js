import Vue from 'vue';
import './plugins/bootstrap-vue';
import VueToastr from 'vue-toastr';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    this.$toastr.defaultClassNames = ['animated', 'zoomInUp'];
    this.$toastr.defaultPosition = 'toast-top-right';
  },
}).$mount('#app');
