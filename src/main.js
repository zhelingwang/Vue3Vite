import { createApp } from 'vue'
import './style.css'
import router from './routes.js'
import App from './App.vue'

const appInstance = createApp(App);
appInstance.use(router);
appInstance.mount('#app');
