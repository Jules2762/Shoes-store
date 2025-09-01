<template>
    <div class="w-full flex flex-row justify-center">
        <div class="w-10/12 max-lg:w-8/12 max-md:w-11/12 flex flex-col mt-10  gap-y-3">
            <h4 class="text-center">Inscription</h4>
            <form @submit.prevent="handleSubmit" class="flex flex-col gap-y-4">
                <div class="grid grid-cols-2 gap-x-6">
                    <template v-for="(value, index) in data"  :key="index">
                        <div v-if="value.type != 'select'">
                            <Input v-model:value="formData[value.name]" :name="value.name" :key="index"
                                :type="value.type" :label="value.label" :required="value.required" />
                        </div>
                        <div v-else>
                            <Select v-model:value="formData[value.name]" :name="value.name" :key="index"
                                :label="value.label" :values="value.values" :required="value.required" />
                        </div>
                    </template>
                </div>
                <div class="w-full flex flex-row justify-between items-center">
                    <div class="flex flex-row gap-x-3 items-center">
                        <p>Vous avez déjà de compte ?</p>
                        <router-link class="text-blue-500 underline" :to="{ name: 'Login' }">Login</router-link>
                    </div>
                    <button type="submit" class="transition-all duration-300"
                        :class="validated ? 'btn-primary ' : 'bg-purple-300 text-white'" :disabled="!validated">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import Input from "@/components/form/input/index.vue"
import Select from "@/components/form/select/index.vue"
import router from "@/router";
import { useSignup } from "@/store/auth/signup";
import { reactive, ref, watchEffect } from "vue";

// const email = ref()
// const password = ref()
// const nom = ref()
// const prenom = ref()
// const date_naissance = ref()
// const genre = ref("Male")
// const adresse = ref()
// const contact = ref()
// const photo = ref()

const data = ref([
    {
        name: "email",
        type: "email",
        label: "Email",
        required: true
    }, {
        name: "password",
        type: "password",
        label: "Password",
        required: true
    }, {
        name: "genre",
        type: "select",
        label: "Genre",
        values: ["Male", "Femelle"],
        required: true
    }
])

const formData = ref({})

const validated = ref(false)

const signup = useSignup()

function handleSubmit() {

    signup.setUser(formData)
    console.log(signup.getUsers)
    router.push({ name: "SignupConfirmation" })
}

function handleData() {
    if (formData.value?.email) {
        validated.value = true
    } else {
        validated.value = false
    }

}

watchEffect(() => {
    handleData()
})

</script>