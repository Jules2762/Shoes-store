<template>

    <Drawer @close="menu = false" :isVisible="menu">

        <div class="flex flex-col mt-4 gap-y-2">
            <button @click="router.push('/')" class="flex flex-row gap-x-3 items-center px-6" data-cy="logo">
                <img :src="logo" class="w-16" />
                <h5>Shoes store</h5>
            </button>
            <template v-for="(value, index) in links" :key="index">
                <router-link @click="menu = false" :to="value.link"
                    class="hover:text-purple-600 transition-all duration-300 hover:border-b-2 hover:border-purple-600 py-2  px-6"
                    :class="value.link === router.currentRoute.value.path ? 'bg-purple-100 text-purple-600' : ''">{{
                        value.name }}</router-link>
            </template>
        </div>
    </Drawer>


    <div class="w-screen flex flex-row justify-between items-center px-20 py-4 shadow-md fixed z-30 top-0 shadow-slate-50 bg-white "
        data-cy="header">
        <button @click="router.push('/')" class="flex flex-row gap-x-3 items-center px-6" data-cy="logo">
            <img :src="logo" class="w-16" />
            <h5>Shoes store</h5>
        </button>
        <div class="flex flex-row gap-x-4 items-center">
            <template v-for="(value, index) in links" :key="index">
                <router-link :to="value.link"
                    class="hover:text-purple-600 transition-all duration-300 hover:border-b-2 hover:border-purple-600  max-lg:hidden "
                    :class="getRouteStyle(value.link)">{{ value.name }}</router-link>
            </template>
            <div class="flex flex-row ">
                <Cart />
                <button v-show="auth.isAuthentificated" data-cy="btn_user">
                    <fa icon="user" />
                </button>
            </div>
            <button class="btn-primary" data-cy="btn_login" v-if="auth.isAuthentificated == false"
                @click="router.push({ name: 'Login' })">Login</button>
            <button class="btn-outlined" data-cy="btn_logout" v-else @click="logout()">Logout</button>

            <button class="lg:hidden" @click="menu = true">
                <transition name="bar">
                    <fa icon="bars" class="text-lg" v-if="menu == false" />
                    <fa icon="times" class="text-lg" v-else />
                </transition>
            </button>
        </div>
    </div>


</template>

<script setup>
import { useHeader } from '@/store/header';
import { useAuth } from '@/store/auth';
import router from '@/router';
import { ref, watchEffect } from 'vue';
import logo from "@/assets/logo/shoes_store_dark.png"
import Drawer from "@/components/Drawer/index.vue"
import Modals from "@/components/Modals/index.vue"
import Cart from "./cart/index.vue"

import { useNotif } from '@/store/Notification';
const menu = ref(false)
const notif = useNotif()
const bar = ref(false)

const auth = useAuth()
const header = useHeader()
const links = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Shop",
        link: "/shop"
    },
    {
        name: "Contact",
        link: "/contact"
    },
]

function getRouteStyle(link) {
    return router.currentRoute.value.path == link ? "border-b-2 border-purple-600 text-purple-600 " : ""
}
function logout() {
    auth.logout()
    notif.open("success", "Loggout successfully")
    setTimeout(() => {
        notif.close()
        router.push({ name: 'Login' })
    }, 2000)
}
</script>
<style scoped>
.bar-enter-active,
.bar-leave-active {
    transition: all 0.3s ease;

}

.bar-enter-from,
.bar-leave-to {
    opacity: 0;
    transform: rotate(30deg);
    position: absolute;
    /* display:none; */
}
</style>