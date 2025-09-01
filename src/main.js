import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "@/styles/main.css"
import { createPinia } from 'pinia'
import { useAuth } from "@/store/auth"

// import vuetify from './plugins/vuetify'

/* import font awesome icon component */

const pinia = createPinia()
const app = createApp(App)


library.add(fas)

app.use(pinia)
app.use(router)

app.component('fa', FontAwesomeIcon)
app.mount('#app')

router.beforeEach((to, from, next) => {
    const auth = useAuth()
    if (to.meta.requiresAuth == true && auth.isAuthentificated == false) {

        return next({ name: "Login" })
    }
    if (to.meta.requiresAdmin == true && auth.getRole != "ADMIN") {
        return next({ name: "Unauthorized" })
    }
    if (to.matched.length === 0) {
        next({ name: "PageNotFound" })
    }
    return next()
})
