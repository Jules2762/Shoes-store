<template>

  <Notification :isVisible="notif.getIsVisible" @close="notif.close()" :variant="notif.getVariant"
    :message="notif.getMessage">
  </Notification>
  
  <router-view />
</template>
<script setup>
import Notification from "@/components/notification/index.vue"
import { useNotif } from './store/Notification';
const notif = useNotif()
</script>
<style scoped></style>
