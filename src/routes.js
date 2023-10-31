import { createRouter, createWebHashHistory } from 'vue-router';

// components & route map
import HelloWorld from './components/HelloWorld.vue'
import Other from './components/Other.vue'
const routes = [
    { path: '/', component: HelloWorld },
    { path: '/other', component: Other }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;