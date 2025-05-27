import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

// element plus imports
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.mount("#app");
