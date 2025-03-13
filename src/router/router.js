import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  // Добавьте другие маршруты по мере необходимости
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
