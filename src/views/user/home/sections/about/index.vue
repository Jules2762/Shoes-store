<template>
    <div class="app-container m-20">
        <div class="flex flex-col gap-y-6">
            <h3 class="text-5xl text-center font-bold">
                About us
            </h3>
            <div class="grid grid-cols-2 gap-x-10 items-center">
                <div class="flex flex-col gap-y-3">
                    <h4 class="font-bold text-3xl">Store Shoes</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur saepe at fugiat ipsam consequatur exercitationem sunt suscipit nemo velit ut.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor numquam odit doloribus animi laborum in ab consectetur, quaerat nam voluptates maiores necessitatibus quo sunt! Provident.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo expedita quam, dignissimos explicabo nostrum, eos doloremque itaque voluptate totam, quod sed. Necessitatibus veniam laudantium sed voluptate architecto aliquam, perferendis obcaecati.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo expedita quam, dignissimos explicabo nostrum, eos doloremque itaque voluptate totam, quod sed. Necessitatibus veniam laudantium sed voluptate architecto aliquam, perferendis obcaecati.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo expedita quam, dignissimos explicabo nostrum, eos doloremque itaque voluptate totam, quod sed. Necessitatibus veniam laudantium sed voluptate architecto aliquam, perferendis obcaecati.
                    </p>
                </div>
                <div class="">
                    <img :src="bg" class="h-[300px] rounded-md justify-self-center"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import bg from "@/assets/bg/bg.jpg"

</script>