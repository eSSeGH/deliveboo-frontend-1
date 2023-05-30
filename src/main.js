import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//FONTS
import "@fontsource/kanit"
import "@fontsource/red-hat-display"
import "@fontsource/pt-sans"
// /FONTS

//FONTAWSOME
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faMagnifyingGlass)
// /FONTAWESOME

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
// /BOOTSTRAP

import { router } from './router'

//se non funziona scambiare .component con .use (.use(router))
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
