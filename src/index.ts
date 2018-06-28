import Vue from 'vue';
import App from './App.vue';

const div = document.createElement('div');

document.body.appendChild(div);

new Vue({
  render: (h) => h(App)
}).$mount(div);

