import { defineStore } from "pinia";

export const useCart = defineStore('cart', {
    state: () => ({
        data: JSON.parse(localStorage.getItem('cart')) || []
    }),
    getters: {
        getCount: (state) => state.data.length,
        getData: (state) => state.data
    },
    actions: {
        addData(data) {
            if (this.$state.data.filter(item => item.id == data.id).length != 0) {
                return false
            } else {
                console.log('dont exist')
                this.$state.data.push(data)
                localStorage.setItem('cart', JSON.stringify(this.$state.data))
                return true
            }
        },
        resetData() {
            this.$state.data = []
            localStorage.removeItem('cart')
        },
        updateData() {
            localStorage.setItem('cart', JSON.stringify(this.$state.data)||[])
        },
        deleteOneData(index){
            // this.$state.data=this.$state.data.splice(index,1)
            this.$state.data.splice(index,1)
            this.updateData()
        }
    }
})