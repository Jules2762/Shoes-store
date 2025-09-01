<template>
    <div class="app-container">
        <div class="w-full flex flex-row justify-center">


        <div class="w-4/12 max-lg:w-8/12 max-md:w-11/12 flex flex-col mt-10  gap-y-3">
           
            <h4 class="text-center">Authentification</h4>
            <form @submit.prevent="handleSubmit" class="w-full flex flex-col gap-y-3">
                <Input v-model:value="email" type="email" name="email" label="Email" required />
                <Input v-model:value="password" name="password" type="password" label="password" required />
                <div class="flex flex-row justify-between items-center">
                    <label class="flex flex-row items-center gap-x-3">
                        <input type="checkbox" />
                        <span>Remember me </span>
                    </label>
                    <router-link class="text-blue-500 underline" :to="{ name: 'ForgotPassword' }">Forgot password
                        ?</router-link>
                </div>
                <button type="submit" class="transition-all duration-300"
                    :class="validated ? 'btn-primary ' : 'bg-purple-300 text-white cursor-not-allowed'"
                    :disabled="!validated">Submit</button>
                <!--  -->
                <div class="flex flex-row gap-x-3 items-center">
                    <p>Vous n'avez pas de compte ?</p>
                    <router-link class="text-blue-500 underline" :to="{ name: 'Signup' }">Signup</router-link>
                </div>
            </form>
        </div>
    </div>

    </div>
</template>
<script setup>
import Input from "@/components/form/input/index.vue"
import router from "@/router";
import { loginService } from "@/services/services/auth/login";
import { useAuth } from "@/store/auth";
import { useNotif } from "@/store/Notification";
import { ref, watchEffect } from "vue";



const email = ref()
const password = ref()
const validated = ref(false)
const notif = useNotif()

const auth = useAuth()

function handleSubmit() {
    // console.log(email, password)
    loginService.login({ email: email.value, password: password.value })
        .then((res) => {
            console.log(res.data)
            auth.login(res.data.user, res.data.token)
            notif.open("success","Logged successfully")
            setTimeout(() => {
                notif.close()
                if (res.data.user.role === "ADMIN") {
                    router.push('/admin')
                } else {
                    router.push({ name: 'Home' })
                }
            }, 2000)
        })
        .catch((err) => {
            notif.open("error",err.message)
            console.error(err)
            setTimeout(()=>{
                notif.close()
            },1500)
        })

}
function handleData() {
    if (email.value && password.value) {
        validated.value = true
    } else {
        validated.value = false
    }
}

watchEffect(() => {
    handleData()
})

</script>
