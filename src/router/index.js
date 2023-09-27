import { createRouter, createWebHistory } from "vue-router";

import routerNavbar from "./routerNavbar";
import routerIntroduce from "./routerIntroduce";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routerIntroduce, ...routerNavbar],
});

export default router;
