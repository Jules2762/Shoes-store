import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
    state: () => ({
        token: "sessionStorage.getItem('token') || null",
        user: {
            role:"ADMIN"
        }
    }),
    getters: {
        isAuthentificated: (state) => !!state.token,
        getUser: (state) => state.user,
        getRole: (state) => state.user ? state.user.role : null,
        getTokens: (state) => state.token
    },
    actions: {
        login(userData, tokenData) {
            this.$state.user = userData
            this.$state.token = tokenData
            sessionStorage.setItem('token', tokenData)
        },
        logout() {
            this.$state.user = {}
            this.$state.token = null
            sessionStorage.removeItem('token')
        }
    }
})