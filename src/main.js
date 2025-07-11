import "@/assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import axios from "axios";

const pinia = createPinia();

// Set the Authorization header globally if token exists in localStorage
const token = localStorage.getItem("token");
if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log("🔑 Axios Authorization header set from localStorage token");
} else {
    console.log("⚠️ No token found in localStorage");
}

createApp(App)
    .use(router)
    .use(pinia)
    .mount("#app");
