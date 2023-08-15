import { createApp } from 'vue';
import App from './app.vue';
// import ELongButton from "@elong-ui/components";
import ElongUi from '@elong-ui/components';

const app = createApp(App);
app.use(ElongUi);
app.mount('#app');
