<template>
  <transition name="modal-fade">
    <div v-if="isVisible" class="modal-overlay w-screen h-screen" @click.self="closeModal" >
      <transition name="modal-content-slide">
        <div v-if="isVisible" class="modal-content">
          
          <section class="modal-body">
            <slot></slot>
          </section>
         
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

function closeModal() {
  emit('close');
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* --- Styles pour la transition de l'overlay (fond) --- */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}

/* --- Styles pour la transition du contenu du modal (la boîte blanche) --- */
.modal-content-slide-enter-active, .modal-content-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.modal-content-slide-enter-from, .modal-content-slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>