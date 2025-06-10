import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.ts";
import i18n from "./locales.ts";

createApp(App).use(router).use(i18n).mount("#app");
