<template>
    <div class="app-container flex flex-col gap-y-3 mb-5">
        <div class="flex flex-row justify-between items-center border-b border-gray-500">
            <h3 class="text-5xl  font-bold">New shoes</h3>
            <button @click="router.push({name:'Shop'})" class="flex flex-row items-center gap-x-3 text-blue-600">
                <span>See more</span>
                <fa icon="chevron-right" class="text-xs"/>
            </button>
        </div>
        <div class="grid grid-cols-4 gap-4">
            <template v-for="(value,index) in data" :key="index">
                <Card :data="value" />
            </template>
        </div>
    </div>
</template>
<script setup>
import sport1 from "@/assets/swiper/sport1.png"
import Card from "@/views/user/shop/components/card/index.vue"
import router from "@/router";
const data = [
    {
        id: 1,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate:4
    },
    {
        id: 2,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate:4
    },
    {
        id: 3,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate:4
    },
    {
        id: 4,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate:4
    },
    {
        id: 5,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate:4
    },
    {
        id: 6,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate:4
    },
    {
        id: 7,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate:4
    },
    {
        id: 8,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate:4
    },
]
</script>