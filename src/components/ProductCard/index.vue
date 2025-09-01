<template>
    <div class="card relative w-full cursor-pointer" @click="getSelectedId">
        <img :src="item?.img" class="" />
        <div class="flex flex-col gap-y-2 p-4">
            <div class="flex flex-row gap-x-3 items-center divide-x-2">
                <h6>{{ item?.name }}</h6>
                <div class="flex flex-row  items-center text-xs text-gray-500 pl-2">
                    <fa icon="download"/>
                    <span class="">{{ item?.download }}</span>
                </div>
            </div>
            <p>{{ item?.description }}</p>
            <div class="flex flex-wrap gap-2">
                <template v-for="(value,index) in item?.genre" :key="index">
                    <div  class="px-3 py-1 text-xs bg-gray-100 text-gray-500 rounded-full ">{{ value }}</div>
                </template>
            </div>
        </div>
    </div>
</template>
<script setup>
import router from '@/router';

const props = defineProps({
    item: {}
})

function getSelectedId(){
    router.push({name:"DetailsShop",params:{
        id:props.item?.id
    }})
}
</script>