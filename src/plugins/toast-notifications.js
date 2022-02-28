// import { createApp } from 'vue';
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
// Import one of the available themes
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

// const app = createApp({});
Vue.use(VueToast);
// app.mount('#app');

// Vue.$toast.open({/* options */});
const instance = Vue.$toast.open('You did it!');

// Force dismiss specific toast
instance.dismiss();
// Dismiss all opened toast immediately
// Vue.$toast.clear();
