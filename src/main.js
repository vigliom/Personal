import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
// import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';
import './style.css';

const app = createApp(App);
app.use(PrimeVue, {
	ripple: true,
	inputStyle: 'outlined',
});
app.mount('#app');
