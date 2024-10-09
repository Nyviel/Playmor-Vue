import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as CoIcons from "oh-vue-icons/icons/co";
import { addIcons, OhVueIcon } from "oh-vue-icons";

const Fa = Object.values({ ...FaIcons });
const Co = Object.values({ ...CoIcons });
addIcons(...Fa, ...Co);
const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount("#app");
