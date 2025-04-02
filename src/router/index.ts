import { createWebHistory, createRouter } from "vue-router";
import WomensView from "../views/defaultLayout/WomensView.vue";
import HomeView from "../views/defaultLayout/HomeView.vue";
import MensView from "../views/defaultLayout/MensView.vue";
import SalesView from "../views/defaultLayout/SalesView.vue";
import ProductsDetails from "../views/defaultLayout/ProductsDetails.vue";
import CreateProductView from "../views/defaultLayout/CreateProductView.vue";
import LoginView from "../views/specialLayout/LoginView.vue";
import SignupView from "../views/specialLayout/SignupView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView, meta: { layout: "default" } },
  {
    path: "/product/:id",
    name: "productDetails",
    component: ProductsDetails,
    meta: { layout: "default" },
  },
  {
    path: "/womens",
    name: "womens",
    component: WomensView,
    meta: { layout: "default" },
  },
  {
    path: "/mens",
    name: "mens",
    component: MensView,
    meta: { layout: "default" },
  },
  {
    path: "/sales",
    name: "sales",
    component: SalesView,
    meta: { layout: "default" },
  },
  {
    path: "/add-product",
    name: "addProduct",
    component: CreateProductView,
    meta: { layout: "default" },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { layout: "special" },
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
    meta: { layout: "special" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
