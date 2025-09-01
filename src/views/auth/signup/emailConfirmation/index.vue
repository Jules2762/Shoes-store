<template>
    Confirmation email
</template>
<script setup>
import router from '@/router';
import { useSignup } from '@/store/auth/signup';
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
const signup = useSignup()
onBeforeMount(()=>{
    if(Object.keys(signup.getUsers).length===0){
        console.log("no")
    } 
})
console.log(signup.getUsers)
</script>