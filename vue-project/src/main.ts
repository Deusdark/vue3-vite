import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueHighlightJS from 'vue3-highlightjs';
import 'highlight.js/styles/dark.css';

import App from './App.vue';
import './index.css';

import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueHighlightJS);

app.mount('#app');
