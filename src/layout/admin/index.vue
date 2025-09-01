<template>
    <div class="w-screen flex flex-row ">
        <Sidebar></Sidebar>
        <div class="bg-slate-50 w-full h-screen  px-5"> 
            <HeaderAdmin></HeaderAdmin>
            <router-view></router-view>
        </div>
    </div>
    
</template>
<script setup>
import Sidebar from "@/components/sidebar/index.vue"
import HeaderAdmin from "@/components/header_admin/index.vue"
</script>