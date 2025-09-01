<template>
    <div class="mt-24 mx-16">
        <div class="flex flex-row gap-x-3 mb-10 relative">
            <div class="shop_filter ">
                <template v-for="(value, index) in filters" :key="index">
                    <h6 class="section_title">{{ value.title }}</h6>
                    <div class="flex flex-col gap-y-1 w-full">
                        <template v-for="(v, i) in value.children" :key="i">
                            <button class="text-start w-full p-0 h-5 font-normal text-sm hover:underline">{{ v.nom
                                }}</button>
                        </template>
                    </div>
                </template>
            </div>
            <div class="flex flex-col gap-y-3">
                <div class="w-full flex flex-row justify-end items-center">
                    <Search/>
                </div>
                <div class="grid grid-cols-4 gap-4">
                    <template v-for="(value, index) in data" :key="index">
                        <Card :data="value" />
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import router from '@/router';
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import sport1 from "@/assets/swiper/sport1.png"
import Card from "@/views/user/shop/components/card/index.vue"
import Search from "@/components/form/input_search/index.vue"

const route = useRoute()
const filter = reactive(route.params)
console.log(filter)
const data = [
    {
        id: 1,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate: 4
    },
    {
        id: 2,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate: 4
    },
    {
        id: 3,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate: 4
    },
    {
        id: 4,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate: 4
    },
    {
        id: 5,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate: 4
    },
    {
        id: 6,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate: 4
    },
    {
        id: 7,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate: 4
    },
    {
        id: 8,
        nom: "Puma",
        categorie: "Male",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate: 4
    },
]
const filters = [
    {
        title: "Categorie",
        children: [
            {
                id: 1,
                nom: "Homme",
                description: "Chaussure pour Homme"
            },
            {
                id: 2,
                nom: "Femme",
                description: "Chaussure pour Homme"
            },
            {
                id: 3,
                nom: "Enfant",
                description: "Chaussure pour Homme"
            },
        ]
    }, {
        title: "Marque",
        children: [
            {
                id: 1,
                nom: "Puma",
                description: "Chaussure pour Homme"
            },
            {
                id: 2,
                nom: "Nike",
                description: "Chaussure pour Homme"
            },
            {
                id: 3,
                nom: "Adidas",
                description: "Chaussure pour Homme"
            },
        ]
    }
]
</script>
