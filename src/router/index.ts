import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/HomePage/index'),
  },
  {
    path: '/',
    redirect: { name: 'Home' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
