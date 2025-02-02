<template>
    <div class="flex w-100% gap-x-[1.5rem] h-3/4">
     <div 
      v-for="decoration in decorations"
      :key="decoration.id"
      @click="AddCard" 
      class="card cursor-pointer w-fit rounded-2xl bg-amber-200 "
      >
      <img 
        :src="decoration.image" 
        :alt="decoration.label" 
        class="h-full object-cover rounded-t-2xl"
        >
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from 'vue'
  
  //array for bases
  const decorations = [
    { id: 1, image: '/cherry.png', label: 'Cherry' },
    { id: 2, image: '/frosts.png', label: 'Frostings' },
    { id: 3, image: '/oreo.png', label: 'Oreo' },
    { id: 4, image: '/pinkRibbon.png', label: 'Pink Ribbon' },
    { id: 5, image: '/redToppingThing.png', label: 'Red' },
    { id: 6, image: '/sprinkles.png', label: 'Sprinkles' },
    { id: 7, image: '/whiteRibbon.png', label: 'White Ribbon' },
    { id: 8, image: '/chocolateTop.png', label: 'Chocolate' },
  ]
  
  let clicked = ref(false);
  const AddCard = () => {
    console.log('card');
  }
  </script>