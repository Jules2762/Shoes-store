<template>
    <div class="app-container my-10">
        <div class="flex flex-row">
            <template v-for="(value, index) in data" :key="index">
                <div class="flex flex-col ">
                    <img :src="value.img" class="w-[160px]"/>
                    <!-- <span class="text-center font-semibold text-lg">{{ value.nom }}</span> -->
                </div>
            </template>
        </div>
    </div>
</template>
<script setup>
import sport1 from "@/assets/swiper/sport1.png"
const data = [
    {
        id: 1,
        nom: "Puma",
        img: sport1
    }, {
        id: 2,
        nom: "Puma2",
        img: sport1
    }, {
        id: 3,
        nom: "Puma2",
        img: sport1
    }, {
        id: 4,
        nom: "Puma2",
        img: sport1
    }, {
        id: 5,
        nom: "Puma2",
        img: sport1
    }, {
        id: 6,
        nom: "Puma2",
        img: sport1
    }, {
        id: 7,
        nom: "Puma2",
        img: sport1
    }
]
</script>