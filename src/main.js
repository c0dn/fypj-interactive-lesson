import {createApp} from 'vue';
import App from './App.vue';
import './global.css'
import router from "./router"
import store from "./store"
import { library } from '@fortawesome/fontawesome-svg-core'

import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronRight)

const app = createApp(App)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');

// This is needed to calm Vue down when a non critical error is triggered, the app runs fine despite of the error.
// But haven't found a fix for that error as i have trouble determining it's cause, so until then this statement should stay here until it's fixed.
// refer to web console when Hello World app is running and you you will know what errors im talking about
app.config.errorHandler = (err, vm, info) => {
  // Get error and print to console
  console.error(err, info)
}

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.unmount();
  });
}
