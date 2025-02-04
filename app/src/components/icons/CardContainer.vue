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

<script>
import Card from './CardProps.vue';
import { ref } from 'vue'
const bases = [
  { id: 1, image: '/vanBase.png', label: 'Vanilla Base' },
  { id: 2, image: '/chocoBase.png', label: 'Chocolate Base' },
  { id: 3, image: '/strawBase.png', label: 'Strawberry Base' },
  { id: 4, image: '/redVelvetBase.png', label: 'Red Velvet Base' },
  { id: 5, image: '/iceCreamBase.png', label: 'Ice Cream Base' },
]
const frostings = [
  { id: 1, image: '/vanFrost.png', label: 'Vanilla Frost' },
  { id: 2, image: '/chocoFrost.png', label: 'Chocolate Frost' },
  { id: 3, image: '/strawFrost.png', label: 'Strawberry Frost' },
  { id: 4, image: '/redFrost.png', label: 'Red Velvet Frost' },
  { id: 5, image: '/cookiesNcreamFrost.png', label: 'Cookies N Cream Frost' },
]
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