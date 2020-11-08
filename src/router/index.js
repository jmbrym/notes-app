import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from '@firebase/app'
import '@firebase/auth';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/mynotes',
    name: 'mynotes',
    component: () => import('../components/Mynotes.vue'),
    meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=> {
  const requiresAuth = to.matched.some(record=> record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
    if(requiresAuth && !isAuthenticated){
      next("/login");
    } else {
      next();
    }
})
export default router