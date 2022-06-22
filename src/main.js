import { createApp } from 'vue'
import App from './App.vue'
import router from "./routers"
createApp(App).use(router).mount('#app')
//json-server --watch api.json--->run this command to run json-server