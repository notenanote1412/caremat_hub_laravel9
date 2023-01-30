import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./app.vue";
import router from "./router";

// import "./assets/main.css";
//import "./assets/input.css"; // tailwindcss

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

