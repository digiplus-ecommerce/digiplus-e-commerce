import { createWebHistory, createRouter } from "vue-router";
import WomensView from "../views/defaultLayout/WomensView.vue";
import HomeView from "../views/defaultLayout/HomeView.vue";
import MensView from "../views/defaultLayout/MensView.vue";
import ElectronicsView from "../views/defaultLayout/ElectronicsView.vue";
import ProductDetails from "../components/ProductDetails.vue";
import CreateProductView from "../views/defaultLayout/CreateProductView.vue";
import LoginView from "../views/specialLayout/LoginView.vue";
import SignupView from "../views/specialLayout/SignupView.vue";
import JewelryView from "../views/defaultLayout/JewelryView.vue";
import DashboardView from "../views/adminLayout/DashboardView.vue";
import AdminLoginView from "../views/adminLayout/AdminLoginView.vue";
import ProductsView from "../views/adminLayout/ProductsView.vue";
import UsersView from "../views/adminLayout/UsersView.vue";
import OrdersView from "../views/adminLayout/OrdersView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView, meta: { layout: "default" } },
  {
    path: "/product/:id",
    name: "productDetails",
    component: ProductDetails,
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
    path: "/electronics",
    name: "electronics",
    component: ElectronicsView,
    meta: { layout: "default" },
  },
  {
    path: "/jewelry",
    name: "jewelry",
    component: JewelryView,
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
  {
    path: "/admin-login",
    name: "admin-login",
    component: AdminLoginView,
    meta: { layout: "admin-auth" },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    meta: { layout: "admin" },
  },
  {
    path: "/admin-products",
    name: "admin-products",
    component: ProductsView,
    meta: { layout: "admin" },
  },
  {
    path: "/admin-users",
    name: "admin-users",
    component: UsersView,
    meta: { layout: "admin" },
  },
  {
    path: "/admin-orders",
    name: "admin-orders",
    component: OrdersView,
    meta: { layout: "admin" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
