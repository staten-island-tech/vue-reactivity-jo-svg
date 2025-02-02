<template>
  <div class="flex w-100% gap-x-[1.5rem] h-3/4">
   <div 
    v-for="base in bases"
    :key="base.id"
    @click="AddCard" 
    class="card cursor-pointer w-fit rounded-2xl bg-amber-200 "
    >
    <img 
      :src="base.image" 
      :alt="base.label" 
      class="h-full object-cover rounded-t-2xl"
      >
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

//array for bases
const bases = [
  { id: 1, image: '/vanBase.png', label: 'Vanilla Base' },
  { id: 2, image: '/chocoBase.png', label: 'Chocolate Base' },
  { id: 3, image: '/strawBase.png', label: 'Strawberry Base' },
  { id: 4, image: '/redVelvetBase.png', label: 'Red Velvet Base' },
  { id: 5, image: '/iceCreamBase.png', label: 'Ice Cream Base' },
]

let clicked = ref(false);
const AddCard = () => {
  console.log('card');
}
</script>