import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Farmer from '@/views/Farmer.vue';
import OldFarmer from '@/views/OldFarmer.vue';
import Manager from '@/views/Manager.vue';
import Home from '@/views/Home.vue';
import MantissSnek from '@/views/MantissSnek.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/metazillas-manager',
    name: 'Farm Manager',
    component: Manager,
  },
  {
    path: '/old-farmer',
    name: 'Old Farmer',
    component: OldFarmer,
  },
  {
    path: '/farmer',
    name: 'Farmer',
    component: Farmer,
  },
  {
    path: '/mantiss-special-farm',
    name: 'Mantiss Snek',
    component: MantissSnek,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
