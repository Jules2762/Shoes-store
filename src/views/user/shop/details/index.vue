<template>
    <div class="app-container">
        <div class="flex flex-row  gap-x-16 mb-12 mt-24 ">
            <div class="flex flex-col gap-4 w-[700px]">
                <img :src="sport1" class="bg-slate-50" />
                <div class="grid grid-cols-4 gap-4">
                    <img :src="sport2" class="bg-slate-50" />
                    <img :src="sport3" class="bg-slate-50" />
                    <img :src="sport4" class="bg-slate-50" />
                    <img :src="sport5" class="bg-slate-50" />
                </div>
            </div>
            <div class="flex flex-col gap-y-3">
                <h3 class="text-4xl font-bold">Adidas</h3>
                <span class="bg-gray-100 w-fit p-2 rounded-md">Male</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, debitis vero veritatis optio veniam
                    quisquam commodi necessitatibus totam alias ab. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Sequi, beatae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolore.
                </p>
                <Stars></Stars>
                <div class="flex flex-row gap-x-4 items-center">
                    <div class="flex flex-row items-center gap-x-3  font-bold">
                        <span class="text-2xl">12 000</span>
                        <span class="text-2xl">Ar</span>
                    </div>
                    <Spinner :value="1"></Spinner>
                </div>
                <button class="btn-primary" @click="addToCart">
                    <div class="flex flex-row gap-x-3 items-center w-full justify-center">
                        <fa icon="cart-plus" />
                        <div>Add to cart</div>
                    </div>
                </button>

            </div>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import sport1 from "@/assets/swiper/sport1.png"
import sport2 from "@/assets/swiper/sport2.png"
import sport3 from "@/assets/swiper/sport3.png"
import sport4 from "@/assets/swiper/sport4.png"
import sport5 from "@/assets/swiper/sport5.png"
import Stars from "@/components/stars/index.vue"
import Spinner from "@/components/Spinner/index.vue"
import Button from "@/components/Button/index.vue"
import { ref } from 'vue';
import { useCart } from '@/store/cart';
import { useNotif } from '@/store/Notification';
const notif = useNotif()

const route = useRoute()
console.log(route.params?.id)
const data = {
    id: 1,
    nom: "Puma",
    categorie: "Male",
    description: "SKYROCKET LITE 2 UNISEX - Chaussures de running - pinkscape/white",
    photo: sport1,
    prix: 12000,
    rate: 4
}
const cart = useCart()
function addToCart() {
    let res = cart.addData(data)
    if (res) {
        notif.open("success", "Product added successfully")
    } else {
        notif.open("error", "Product already exist")

    }
}
</script>