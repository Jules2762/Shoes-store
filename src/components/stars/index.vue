<template>
    <div class="flex flex-row gap-x-3 items-center">
        <template v-for="n in 5" :key="n">
            <fa icon="star" :class="note<n?'text-gray-300':''"/>
        </template>
    </div>
</template>
<script setup>
const props =  defineProps({
    note:{
        type:Number,
        default:1
    }
})
</script>