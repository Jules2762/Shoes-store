<template>
    <div class="max-w-screen overflow-x-hidden">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script setup>
import Header from "@/components/header/index.vue"
import Footer from "@/components/footer/index.vue"
import { computed, onMounted, onUnmounted, ref, watch, watchEffect } from "vue";

// const scrollY = ref(window.scrollY)

// function handleScrollY() {
//     scrollY.value = window.scrollY
//     console.log(scrollY.value)
// }

// onMounted(() => {
//     window.addEventListener("scroll", handleScrollY)
// })

// onUnmounted(() => {
//     window.removeEventListener("scroll", handleScrollY)
// })
</script>