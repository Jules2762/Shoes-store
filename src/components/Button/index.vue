<template>
    <button @click="handleClick" :class="[getStyleButton(),disabled?'opacity-40':'']" :type="type" :disabled="disabled"
        class="flex flex-row gap-x-3 items-center justify-center">
        <div v-if="loading">
            <fa icon="spinner" class="animate-spin duration-300" />
        </div>
        <slot></slot>
    </button>
</template>
<script setup>
const props = defineProps({
    type: {
        type: String,
        default: "button",
        validator: (value) => {
            return ["button", "reset", "submit"].includes(value)
        }
    },
    variant: {
        type: String,
        default: "text",
        validator: (value) => {
            return ["primary", "secondary", "outlined", "text"].includes(value
            )
        },


    },
    loading: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
}
)
const  emit = defineEmits(['click'])
function handleClick(){
    emit('click')
}
function getStyleButton() {
    switch (props.variant) {
        case "primary":
            return "btn-primary"
        case "secondary":
            return "btn-secondary"
        case "outlined":
            return "btn-outlined"
        default:
            return ""
    }
}
</script>