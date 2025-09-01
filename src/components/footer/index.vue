<template>
    <footer class="bg-black w-full py-12">
        <div class="app-container  ">
            <div class="w-full flex flex-row justify-between items-center  ">
                <button class="flex flex-row gap-x-3 items-center">
                    <img :src="logo" class="w-16" />
                    <h5 class="text-white">Shoes store</h5>
                </button>
                <span class="text-white">© Copyright Jules 2025</span>
            </div>
        </div>
    </footer>
</template>
<script setup>
import logo from "@/assets/logo/shoes_store_white.png"
</script>