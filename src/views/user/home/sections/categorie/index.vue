<template>
    <div class="app-container my-20">
        <div class="grid grid-cols-3 gap-4">
            <template v-for="(value, index) in data" :key="index">
                <div class="relative w-full h-[200px]">
                    <div class="w-full h-full flex flex-row items-center">
                        <span class="text-4xl text-white font-bold text-center w-full">
                            {{ value.nom }}
                        </span>
                    </div>
                    <img :src="value.img" class="flex-1 h-[200px] w-full absolute -z-20 top-0" />
                    <div class="w-full h-[200px] bg-black/30 absolute -z-10 top-0 left-0">
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script setup>
import bg from "@/assets/bg/bg.jpg"
const data = [
    {
        nom: "Male",
        img: bg
    },
    {
        nom: "Female",
        img: bg
    },
    {
        nom: "Kids",
        img: bg
    },
    {
        nom: "Scandale",
        img: bg
    },
    {
        nom: "Freestyle",
        img: bg
    },
    {
        nom: "Luxe",
        img: bg
    }
]
</script>