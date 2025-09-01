<template>
    <div class="app-container my-24 ">
        <div class="grid grid-cols-2 gap-6">
            <div class="flex flex-col gap-y-4">
                <h4 class="text-5xl font-bold">Contact us</h4>
                <div class="flex flex-col gap-y-3">
                    <div>

                    </div>
                </div>
            </div>

            <form @submit.prevent="handleSubmit" class="bg-slate-50 p-8 rounded-md flex flex-col gap-y-4 ">
                <template v-for="(value,key,index) in data" :key="index">
                    <Input :name="key" :label="key" :type="key=='email'?'email':'text'" :required="true" v-model:value="data[key]" v-if="key!='message'"/>
                    <Input :name="key" :label="key" type="textaria"  v-model:value="data[key]" v-else/>
                </template>
                <Button type="submit" variant="primary" :loading="options.loading"
                    :disabled="options.disabled">Submit</Button>
            </form>
        </div>
    </div>
</template>
<script setup>
import Button from "@/components/Button/index.vue"
import Input from "@/components/form/input/index.vue"
import { useAuth } from "@/store/auth";
import { useNotif } from "@/store/Notification";
import { reactive, ref } from "vue";
const auth = useAuth()
const notif = useNotif()

// const data = {
//     name:ref(null),
//     email:ref(null),
//     object:ref(null),
//     message:ref(null)
// }

const data = ref({
    name: "",
    email: "",
    object: "",
    message: ""
})

const options = ref({
    loading: false,
    disabled: false
})

function handleSubmit() {
    options.value = {
        loading: true,
        disabled: true
    }
    setTimeout(() => {
        options.value = {
            loading: false,
            disabled: false
        }
        notif.open("success", "Message send successfully")
        console.log(data.value)
    }, 1000)
}
</script>