<template>
    <div class="w-full flex flex-col gap-y-1">
        <label :for="name" class="flex flex-row gap-x-2">
            <span>{{ label }}</span>
            <span class="text-red-500" v-if="required">*</span>
        </label>
        <select v-model="valueModel" :name="name" :required="required">
            <option v-for="item in values" :value="item">{{ item }}</option>
        </select>

    </div>
</template>
<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
    values: {
        type:Array,
        default:()=>([])
    },
    name: "",
    label: "",
    value: "",
    required: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:value'])
const valueModel=computed({
    get(){
        return props.value
    },
    set(value){
        emit('update:value',value)
    }
})
</script>