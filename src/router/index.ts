import { createMemoryHistory, createRouter } from "vue-router";
import WomensView from "../views/WomensView.vue";
import HomeView from "../views/HomeView.vue";
import MensView from "../views/MensView.vue";
import SalesView from "../views/SalesView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/womens", component: WomensView },
  { path: "/mens", component: MensView },
  { path: "/sales", component: SalesView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
