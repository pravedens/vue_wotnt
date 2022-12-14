import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import {initializeApp} from 'firebase/app'
import { loadFonts } from './plugins/webfontloader'



loadFonts()

createApp(App).use(router)
  .use(vuetify).use(store)
  .mount('#app')

const firebaseConfig = {
    apiKey: "AIzaSyD2pG-_ktyoNEnmpjX1_8JMpnHxX35NtZk",
    authDomain: "wotnt-35e5e.firebaseapp.com",
    projectId: "wotnt-35e5e",
    storageBucket: "wotnt-35e5e.appspot.com",
    messagingSenderId: "1000125921850",
    appId: "1:1000125921850:web:5838c92de2335056461303"
}

initializeApp(firebaseConfig)





