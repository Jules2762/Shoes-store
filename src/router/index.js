import { createWebHistory, createRouter } from "vue-router"
//auth component
import Login from "@/views/auth/login/index.vue"
import Signup from "@/views/auth/signup/index.vue"
import SignupEmailConfirmation from "@/views/auth/signup/emailConfirmation/index.vue"
import ForgotPasswordLayout from "@/layout/auth/forgot_password/index.vue"

//user component
import UserLayout from "@/layout/user/index.vue"
import Home from "@/views/user/home/index.vue"
import Shop from "@/views/user/shop/index.vue"
import DetailsShop from "@/views/user/shop/details/index.vue"
import Contact from "@/views/user/contact/index.vue"
import Paiement from "@/views/user/paiement/index.vue"

// admin component
import AdminLayout from "@/layout/admin/index.vue"
import Dashboard from "@/views/admin/dashboard/index.vue"
import UserAdmin from "@/views/admin/user/index.vue"

// error component
import ErrorLayout from "@/layout/error/index.vue"
import PageNotFound from "@/views/error/pagenotfound/index.vue"
import Unauthorized from "@/views/error/unauthorized/index.vue"

const routes = [

    //user route
    {
        path: "/",
        name: "User",
        component: UserLayout,
        children: [
            {
                path: "",
                name: "Home",
                component: Home
            },
            {
                path: "shop/:category?/:search?",
                name: "Shop",
                component: Shop,

            },
            {
                path: "shop/details/:id",
                name: "DetailsShop",
                component: DetailsShop
            },
            {
                path: "contact",
                name: "Contact",
                component: Contact
            },
            {
                path:"paiement",
                name:"Paiement",
                component:Paiement,
                meta:{
                    requiresAuth:true
                }
            },

            //auth route
            {
                path: "login",
                name: "Login",
                component: Login
            }, {
                path: "signup",
                name: "Signup",
                component: Signup
            }, {
                path: "signup/confirmation",
                name: "SignupConfirmation",
                component: SignupEmailConfirmation
            },{
                path: "forgotpassword",
                name: "ForgotPassword",
                component: ForgotPasswordLayout,
                children:[
                    {
                        path: "searchaccount",
                        name: "SearchAccount",
                        component: () => import("@/views/auth/forgot_password/search_account/index.vue")
                    },
                    {
                        path: "change_password",
                        name: "ChangePassword",
                        component: () => import("@/views/auth/forgot_password/change_password/index.vue")
                    }
                ]
            }
        ]
    },

    //admin route
    {
        path: "/admin",
        name: "Admin",
        component: AdminLayout,
        meta: {
            requiresAuth: true,
            requiresAdmin: true
        },
        children: [
            {
                path: "",
                name: "Dashboard",
                component: Dashboard,
                alias:"Tableau de board"
            },{
                path:"user",
                name:"UserAdmin",
                component:UserAdmin,
                alias:"Utilisateur"
            }
        ],

    },

    //error route
    {
        path: "/error",
        name: "Error",
        component: ErrorLayout,
        children: [
            {
                path: "pagenotfound",
                name: "PageNotFound",
                component: PageNotFound
            },
            {
                path: "unauthorized",
                name: "Unauthorized",
                component: Unauthorized
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router