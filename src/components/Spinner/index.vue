<template>
    <div class="flex flex-row  items-center">
        <button class="custom" @click="handleMinus">
            <fa icon="minus" class="border border-black p-1 text-xs rounded-full"/>

        </button>
        <span class="h-6">{{ value }}</span>
        <button class="custom" @click="handlePlus">
            <fa icon="plus" class="border border-black p-1 text-xs rounded-full"/>
        </button>
    </div>
</template>
<script setup>
const props = defineProps({
    value: {
        type: Number,
        required: true,
        default: 0
    }
})
const emit = defineEmits(['plus', 'minus'])

function handlePlus() {
    emit('plus')
}
function handleMinus() {
    emit('minus')
}
</script>