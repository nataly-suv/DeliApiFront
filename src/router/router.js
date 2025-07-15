import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AdminPage from "../views/AdminPage.vue";
import CartPage from "../views/CartPage.vue";


const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  // Добавьте другие маршруты по мере необходимости
  {
    path: "/admin",
    name: "AdminPage",
    component: AdminPage,
  },
  {
    path: "/cart",
    name: "CartPage",
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
