<template>
    <div class="flex w-100% gap-x-[1.5rem] h-3/4">
     <div 
      v-for="frosting in frostings"
      :key="frosting.id"
      @click="AddCard" 
      class="card cursor-pointer w-fit rounded-2xl bg-amber-200 "
      >
      <img 
        :src="frosting.image" 
        :alt="frosting.label" 
        class="h-full object-cover rounded-t-2xl"
        >
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from 'vue'
  
  //array for bases
  const frostings = [
    { id: 1, image: '/vanFrost.png', label: 'Vanilla Frost' },
    { id: 2, image: '/chocoFrost.png', label: 'Chocolate Frost' },
    { id: 3, image: '/strawFrost.png', label: 'Strawberry Frost' },
    { id: 4, image: '/redFrost.png', label: 'Red Velvet Frost' },
    { id: 5, image: '/cookiesNcreamFrost.png', label: 'Cookies N Cream Frost' },
  ]
  
  let clicked = ref(false);
  const AddCard = () => {
    console.log('card');
  }
  </script>