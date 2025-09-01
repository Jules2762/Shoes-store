import { defineStore } from "pinia";

export const useNotif = defineStore('notif', {
    state: () => ({
        isVisible: false,
        message: "",
        variant: "success"
    }),
    getters: {
        getIsVisible: (state) => state.isVisible,
        getMessage: (state) => state.message,
        getVariant: (state) => state.variant
    },
    actions: {
        open(variant, message) {
            this.close()
            setTimeout(() => {
                this.$state.isVisible = true
                this.$state.variant = variant
                this.$state.message = message

                setTimeout(() => {
                    this.close()
                }, 1800)

            }, 200)

        },
        close() {
            this.$state.isVisible = false
        }
    }
})