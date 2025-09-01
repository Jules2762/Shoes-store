<template>
    <button data-cy="btn_cart relative" @click="isVisible = !isVisible">
        <fa icon="cart-shopping" />
        <span class="absolute z-10 -translate-x-2 -translate-y-2 bg-red-500 px-1 text-xs rounded-full text-white">
            {{ cart.getCount }}
        </span>
    </button>
    <Drawer :isVisible="isVisible" @close="isVisible = !isVisible" :width="320">
        <div class=" flex flex-col gap-y-4 px-8 w-[320px] pt-4 relative h-sceen">
            <div class="w-full flex flex-row justify-between items-center border-b border-black">
                <h5 class="text-2xl font-bold w-full ">Cart</h5>
                <div class="flex flex-row gap-x-3 items-center font-semibold">
                    <span>Total</span>
                    <span class="text-nowrap">{{ getTotal() }} Ar</span>
                </div>
            </div>
            <div class="flex flex-col gap-y-2 overflow-y-auto max-h-[80vh] h-[80vh] w-full">
                <template v-for="(value, index) in cart.getData" :key="index">
                    <div class="w-full flex flex-row gap-x-4 bg-slate-50 py-2 rounded-sm relative">
                        <img :src="value.photo" class="w-20" />
                        <div class="flex flex-col w-full pr-2">
                            <div class="flex flex-row gap-x-3 items-center justify-between w-full">
                                <h6 class="text-md">{{ value.nom }}</h6>
                                <span class="font-semibold text-red-500">{{ value.prix.toLocaleString() + " Ar"
                                    }}</span>
                            </div>
                            <span class="text-xs ">{{ value.categorie }}</span>
                            <Spinner :value="value.quantite" @plus="cart.updateData(), value.quantite++"
                                @minus="cart.updateData(), value.quantite--" />
                        </div>
                        <div @click="handleDelete(index)"
                            class="w-5 absolute  top-1 left-1 cursor-pointer h-5 flex flex-row justify-center items-center bg-red-600 rounded-full">
                            <fa icon="times" class="text-white text-xs" />
                        </div>
                    </div>
                </template>
            </div>
            <div class="w-full">
                <button @click="router.push({ name: 'Paiement' })" class="btn-primary w-full ">Process to paiement</button>
            </div>
        </div>
    </Drawer>
</template>
<script setup>
import { useCart } from '@/store/cart';
import Spinner from "@/components/Spinner/index.vue"
import Drawer from "@/components/Drawer/index.vue"
import { onMounted, ref, watch } from 'vue';
import router from '@/router';

const cart = useCart()
const isVisible = ref(false)
const data = ref([
    {
        id: 1,
        qte: 1
    },
    {
        id: 2,
        qte: 2
    },
    {
        id: 3,
        qte: 2
    }, {
        id: 4,
        qte: 2
    }, {
        id: 5,
        qte: 2
    },
])


function getTotal() {
    let total = 0
    cart.getData.forEach(item => {
        total = total + item.quantite * item.prix
    })

    return total
}

function handleDelete(index) {
    cart.deleteOneData(index)
    console.log(index)
    // data.value=data.value.slice(index,1)
    // console.log(data.value)
}



</script>