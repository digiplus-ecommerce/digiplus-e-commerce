import { createWebHistory, createRouter } from "vue-router";
import WomensView from "../views/WomensView.vue";
import HomeView from "../views/HomeView.vue";
import MensView from "../views/MensView.vue";
import SalesView from "../views/SalesView.vue";
import ProductsDetails from "../views/ProductsDetails.vue";
import CreateProductView from "../views/CreateProductView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/product/:id", component: ProductsDetails },
  { path: "/womens", component: WomensView },
  { path: "/mens", component: MensView },
  { path: "/sales", component: SalesView },
  { path: "/add-product", component: CreateProductView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
