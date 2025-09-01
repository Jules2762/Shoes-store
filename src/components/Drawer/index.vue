<template>
    <transition name="container">
        <div class="w-screen h-screen fixed z-40 left-0 top-0 bg-black/50" @click.self="handleClick" v-if="isVisible">

            <div class="absolute h-screen left-0 top-0  bg-white content" :class="'w-['+width+'px]'">
                <slot></slot>
            </div>

        </div>
    </transition>
</template>
<script setup>
import { defineProps } from 'vue';

const propss = defineProps({
    isVisible: {
        type: Boolean,
        default: false
    },
    width:200
})
const emit = defineEmits(['close'])
function handleClick() {
    emit('close')
} 
</script>
<style scoped>
.container-enter-active,
.container-leave-active {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
}

.container-enter-from,
.container-leave-to {
    opacity: 0;
}

.container-enter-from .content {
    transform: translateX(-200px);
     opacity: 0;
}


.container-leave-to .content {
    transform: translateX(-200px);
    opacity: 0;
}


.content {
    transition: all 0.3s ease-in-out;
}
</style>