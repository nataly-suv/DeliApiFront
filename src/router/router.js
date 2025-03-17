import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AdminPage from "../views/AdminPage.vue";

const routes = [
  {
    path: "/DeliApiFront/",
    name: "HomePage",
    component: HomePage,
  },
  // Добавьте другие маршруты по мере необходимости
  {
    path: "/DeliApiFront/admin",
    name: "AdminPage",
    component: AdminPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
