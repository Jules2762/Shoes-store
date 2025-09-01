<template>
    <transition name="toast">
        <div class="fixed top-2 justify-self-center align-self-center z-40 p-2 shadow-md shadow-gray-300 rounded flex flex-row gap-x-4 items-center justify-between"
            :class="[getWidth()]" v-if="isVisible">
            <div class="flex flex-row gap-x-3 items-center">
                <fa :icon="getIconVariant()" class="border-2 rounded-full p-1 text-xs" :class="getStyleVariant()" />
                <span class="">{{ message }}</span>
            </div>
            <button @click="handleClose">
                <fa icon="times" />
            </button>
        </div>
    </transition>
</template>
<script setup>
import { useNotif } from '@/store/Notification'
const notif = useNotif()
const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false
    },
    variant: {
        type: String,
        default: "information",
        validator: (value) => {
            return ["infomation", "success", "error", "warning", "loading"].includes(value)
        }
    },
    width: {
        type: Number,
        default: 400,
        validator: (value) => {
            return value >= 0
        }
    },
    message: {
        type: String,
        default: "Votre texte ici"
    }
})

const emit = defineEmits(['close'])

function handleClose() {
    emit('close')
}

function getStyleVariant() {
    switch (props.variant) {
        case "success":
            return "border-green-300 text-green-300"
        case "error":
            return "border-red-300 text-red-300"
        case "warning":
            return "border-orange-300 text-orange-300"
        case "loading":
            return "border-blue-300 text-blue-300  animate-spin duration-300"
        default:
            return "border-blue-300 text-blue-300"
    }
}
function getIconVariant() {
    switch (props.variant) {
        case "success":
            return "check"
        case "error":
            return "times"
        case "warning":
            return "triangle-exclamation"
        case "loading":
            return "spinner"
        default:
            return "info"
    }
}
setTimeout(() => {
    notif.close()
}, 1500)

function getWidth() {
    return "w-[" + props.width + "px]"
}

</script>
<style scoped>
.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translateY(-200px);
}

.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}
</style>