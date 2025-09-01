<template>
    <div class="w-full bg-white rounded-md px-10 flex flex-row justify-between items-center h-16">
        <h6>{{ }}</h6>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';


const routes = useRoute()
const admin_route = computed(() => {
    return routes.matched.find((item) => item.name === routes.name).children
})

console.log(routes.ma)


</script>