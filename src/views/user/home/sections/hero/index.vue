<template>
    <div class="bg-slate-50 mt-16">

        <swiper class="swiper" :modules="modules" :slides-per-view="1" :loop="true" :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        }" :navigation="true" :pagination="{
            dynamicBullets: true,
            clickable: true,
        }" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
            <template v-for="(value, index) in data" :key="index">
                <swiper-slide class="relative w-full">
                    <div class="absolute -z-10 w-full">
                        <h1 class="text-[220px] text-center">{{ value.nom }}</h1>
                    </div>
                    <div class=" bottom-24 right-24 left-24 absolute w-10/12 flex flex-row justify-between items-center">
                        <div class=" p-4   flex flex-col gap-y-2   ">
                            <p class="text-left">
                                {{ value.description }}
                            </p>
                            <div class="flex flex-row h-fit items-center ">
                                <span class="text-6xl font-bold">
                                    {{ value.prix.toLocaleString() }}
                                </span>
                                <span class="font-bold rotate-90 text-center">Ariary</span>
                            </div>
                            <Stars :note="value.rate" />
                        </div>
                        <div class="   p-4    gap-y-3 flex flex-col">
                            <p class="text-right font-semibold">
                                Quality you can count on
                            </p>
                            <div class="flex flex-row h-fit items-center justify-end divide-x gap-x-3 divide-black/50">
                                <div class="flex flex-row gap-x-3 items-center ">
                                    <fa icon="truck-fast" class="text-lg" />
                                    <span class="text-lg font-semibold">Shipping</span>
                                </div>
                                <div class="flex flex-row gap-x-3 items-center pl-2">
                                    <fa icon="box" class="text-lg" />
                                    <span class="text-lg font-semibold">Returns</span>
                                </div>
                                <div class="flex flex-row gap-x-3 items-center pl-2">
                                    <fa icon="shield" class="text-lg" />
                                    <span class="text-lg font-semibold">Waranty</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 justify-self-center animation-image">
                        <img :src="value.photo" />
                    </div>
                    <div class="absolute   justify-self-center bottom-24   ">
                        <button class="bg-black text-white  w-32 flex flex-row gap-x-3 items-center justify-center ">
                            <span>Buy now</span>
                            <fa icon="chevron-right" />
                        </button>
                    </div>
                </swiper-slide>
            </template>
        </swiper>
    </div>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import sport1 from "@/assets/swiper/sport1.png"
import sport2 from "@/assets/swiper/sport2.png"
import sport3 from "@/assets/swiper/sport3.png"
import sport4 from "@/assets/swiper/sport4.png"
import sport5 from "@/assets/swiper/sport5.png"
import Stars from "@/components/stars/index.vue"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

// Les fonctions sont également définies directement
const onSwiper = (swiper) => {
    // console.log('Instance Swiper :', swiper);
};

const onSlideChange = () => {
    // console.log('Diapositive changée');
};
const data = [
    {
        id: 1,
        nom: "PUMA",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport1,
        prix: 12000,
        rate: 4
    },
    {
        id: 2,
        nom: "PUMA",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport2,
        prix: 20000,
        rate: 5
    },
    {
        id: 3,
        nom: "NIKE",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport3,
        prix: 20000,
        rate: 5
    },
    {
        id: 4,
        nom: "Audentum",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport4,
        prix: 20000,
        rate: 5
    },
    {
        id: 5,
        nom: "Audentum",
        description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
        photo: sport5,
        prix: 20000,
        rate: 5
    },
]
</script>

<style scoped>
/* Les styles restent inchangés */
.swiper {
    width: 100%;
    height: 600px;
}

.moving-h1 {
    /*
    Utilisation de la fonction CSS "calc" pour créer un effet de parallaxe
    La valeur de swiperProgress est entre -1 et 1, donc la transformation
    sera inversée pour le mouvement de l'élément h1
  */
    transform: translateX(calc(v-bind(swiperProgress) * 10%));
}

.shape {
    clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30%, 30% 30%);
    filter: drop-shadow(5px 5px 10px #000000);
}

.animation-image {
    animation: bounce 5s infinite ease-in-out;
}

@keyframes bounce {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }

    100% {
        transform: translateY(0);
    }
}
</style>