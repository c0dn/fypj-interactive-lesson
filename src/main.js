import {createApp} from 'vue';
import App from './App.vue';
import './global.css'
import router from "./router"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus);

const app = createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.unmount();
  });
}
