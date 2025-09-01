<template>
    <div class="bg-slate-50 group">
        <div class="relative ">
            <img :src="data?.photo" />
            <div
                class="w-full h-full bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute z-10 top-0 ">
                <div class="flex flex-row items-center justify-center gap-x-4 w-full h-full ">
                    <button class="bg-white" @click="router.push({name:'DetailsShop',params:{
                        id:data?.id
                    }})">
                        <fa icon="eye" />
                    </button>
                    <button class="bg-white" @click="addDataCart">
                        <fa icon="cart-plus" />
                    </button>
                </div>
            </div>
        </div>
        <div class="p-3 flex flex-col gap-y-2 ">
            <div class="flex flex-row gap-x-3 items-center">
                <h4>{{ data?.nom }}</h4>
                <span class="bg-slate-300 p-1 rounded-sm">{{ data?.categorie }}</span>
            </div>
            <p>{{ data?.description }}</p>
            <Stars :note="data?.rate" />
            <div class="flex flex-row gap-x-2 font-semibold items-center">
                <span>{{ (data?.prix)?.toLocaleString() }}</span>
                <span>Ariary</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import Stars from "@/components/stars/index.vue"
import router from "@/router";
import { useCart } from '@/store/cart';
import { useNotif } from "@/store/Notification";
const notif = useNotif()
const cart = useCart()
const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    }
})
function addDataCart() {
    const res = cart.addData({
        ...props.data,
        quantite: 1
    })
    if (res) {
        notif.open("success", "Product added successfully")
    } else {
        notif.open("error", "Product already exist")

    }
    console.log(res)
}
</script>
