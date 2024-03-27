import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/myHome.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;