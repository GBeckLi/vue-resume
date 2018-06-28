import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: ''，
    redirect: '',
    name: 'index'
  }
];

const router = new VueRouter({
  routes
})

export default router;