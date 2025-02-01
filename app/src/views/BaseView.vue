<template>
   <div @click="AddCard" class="card cursor-pointer h-3/4 w-fit rounded-2xl bg-amber-200">
    <img src="/vanBase.png" alt="Vanilla Base Cake" class="h-full object-cover rounded-t-2xl">
  </div>
</template>


<script setup>
import { ref } from 'vue'

//array for bases
const bases = [
  { id: 1, image: '/vanBase.png', label: 'Vanilla' },
  { id: 2, image: '/chocoBase.png', label: 'Chocolate' },
  { id: 3, image: '/strawBase.png', label: 'Strawberry' },
]

let clicked = ref(false);
const AddCard = () => {
  console.log('card');
}
</script>