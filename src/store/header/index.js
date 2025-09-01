import { defineStore } from "pinia";

export const useHeader = defineStore('header',{
    state:()=>({
        menu:false,
        cart:false
    }),
    getters:{
        getMenuState:(state)=>state.menu,
        getCartState:(state)=>state.cart
    },
    actions:{
            toggleMenu(){
            this.$state.menu=!this.$state.menu
            console.log("menu state changed : ",this.$state.menu)
        },
        toggleState(){
            this.$state.cart=!this.$state.cart
             console.log("cart state changed : ",this.$state.cart)

        }
    }
})