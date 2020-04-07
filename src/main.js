import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Ionic from '@ionic/vue';
import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"
import '@/assets/css/tailwind.css';
import './registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { addIcons } from 'ionicons';
import {
  menu,
  home,
  close,
  grid,
  list,
  image,
  images,
  albums,
} from 'ionicons/icons';
addIcons({
  'ios-menu': menu.ios,
  'md-menu': menu.md,
  'ios-home': home.ios,
  'md-home': home.md,
  'ios-close': close.ios,
  'md-close': close.md,
  'ios-grid': grid.ios,
  'md-grid': grid.md,
  'ios-list': list.ios,
  'md-list': list.md,
  'ios-image': image.ios,
  'md-image': image.md,
  'ios-images': images.ios,
  'md-images': images.md,
  'ios-albums': albums.ios,
  'md-albums': albums.md,
});


// import { Plugins, StatusBarStyle } from '@capacitor/core';
// import { Plugins } from '@capacitor/core';
// const { SplashScreen, StatusBar, Network } = Plugins;
// const { StatusBar } = Plugins;

Vue.config.productionTip = false;

// Tell Vue that the ion-components aren’t Vue components
Vue.config.ignoredElements = [/^ion-/];

// StatusBar.hide();

Vue.use(VueAxios, axios);
Vue.use(Ionic);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
