import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import AppHeader from "@/components/AppHeader.vue";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp(App);
app.component('AppHeader', AppHeader);
app.use(router);

app.mount('#app');
