import { defineStore } from "pinia"

export const useSignup = defineStore('signup',{
    state:()=>({
        user:{}
    }),
    getters:{
        getUsers:(state)=>state.user
    },
    actions:{
        setUser(userData){
            this.$state.user=userData
        }
    }

})