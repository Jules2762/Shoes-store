<template>
    <div class="w-full flex flex-col gap-y-1">
        <label :for="name" class="flex flex-row gap-x-2">
            <span>{{ label }}</span>
            <span class="text-red-500" v-if="required">*</span>
        </label>
        <input :type="type"  v-model="data" :name="name" :required="required" v-if="type!='textaria'"/>
        <textarea v-else v-model="data" :name="name" :required="required"></textarea>
    </div>
</template>
<script setup>
import { computed, defineProps } from 'vue';
const props = defineProps({
    label:"",
    required:{
        type:Boolean,
        default:false
    },
    value:null,
    name:"",
    type:{
        type:String,
        default:"text"
    }
})
const emit = defineEmits(["update:value"])
const data = computed({
    get(){
        return  props.value
    },
    set(value){
        emit("update:value",value)
    }
})
</script>