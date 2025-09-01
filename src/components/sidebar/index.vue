<template>
    <div class="w-[300px] bg-white h-screen py-10 flex flex-col gap-y-5">
        <div class="flex flex-row gap-x-3 items-center px-4">
            <img :src="logo" class="w-16" />
            <h6>Shoes store</h6>

        </div>
        <div class="flex flex-col gap-y-3">
            <template v-for="(value, index) in admin_route" :key="index">
                <router-link :to="{ name: value.name }" class="w-full py-3 px-5 transition-all duration-300"
                    :class="getRouterClass(index)">{{ value.alias }}</router-link>
            </template>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import logo from "@/assets/logo/shoes_store_dark.png"
import router from '@/router';

const routes = useRoute()
const admin_route = computed(() => {
    return routes.matched.find((item) => item.name === "Admin").children
})

function getRouterClass(index) {
    return admin_route.value[index].name === router.currentRoute.value.name ? 'border-r-4 border-purple-500 bg-purple-100 text-purple-600 ' : 'hover:bg-purple-100 hover:text-purple-600 '
}
</script>