import type { Router } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/links",
    component: () => import("../views/LinksView.vue"),
  },
  {
    path: "/curriculo",
    component: () => import("../views/curriculum.vue"),
  },
];

declare const router: Router;
export default createRouter({
  history: createWebHistory(),
  routes,
});
