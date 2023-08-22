import { createApp } from 'vue';
import App from './app.vue';
// import ELongButton from "@elong-ui/components";
import ElongUi from '@elong-ui/components';

import { MInput } from '@elong-ui/vant';

const app = createApp(App);
app.use(ElongUi);
app.use(MInput);
app.mount('#app');
