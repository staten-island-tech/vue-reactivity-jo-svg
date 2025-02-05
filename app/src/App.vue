<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import CardContainer from './components/icons/CardContainer.vue';

const categories = {
  bases: [
    { id: 1, image: '/vanBase.png', label: 'Vanilla Base' },
    { id: 2, image: '/chocoBase.png', label: 'Chocolate Base' },
    { id: 3, image: '/strawBase.png', label: 'Strawberry Base' },
    { id: 4, image: '/redVelvetBase.png', label: 'Red Velvet Base' },
    { id: 5, image: '/iceCreamBase.png', label: 'Ice Cream Base' },
  ],
  frostings: [
    { id: 1, image: '/vanFrost.png', label: 'Vanilla Frost' },
    { id: 2, image: '/chocoFrost.png', label: 'Chocolate Frost' },
    { id: 3, image: '/strawFrost.png', label: 'Strawberry Frost' },
    { id: 4, image: '/redFrost.png', label: 'Red Velvet Frost' },
    { id: 5, image: '/cookiesNcreamFrost.png', label: 'Cookies N Cream Frost' },
  ],
  toppings: [
    { id: 1, image: '/cherry.png', label: 'Cherry' },
    { id: 2, image: '/frosts.png', label: 'Frostings' },
    { id: 3, image: '/oreo.png', label: 'Oreo' },
    { id: 4, image: '/pinkRibbon.png', label: 'Pink Ribbon' },
    { id: 5, image: '/redToppingThing.png', label: 'Red' },
    { id: 6, image: '/sprinkles.png', label: 'Sprinkles' },
    { id: 7, image: '/whiteRibbon.png', label: 'White Ribbon' },
    { id: 8, image: '/chocolateTop.png', label: 'Chocolate' },
  ],
};
</script>

<template>
  <div class="entire flex h-screen bg-[#F8CFDD] bg-cover bg-center">
    
    <div class="side">
      <img src="/bow.png" alt="" class="w-[5%] absolute left-[2.5%] top-[15%]">
      <img src="/swirl.png" alt="" class="w-[5%] absolute left-[2.5%] top-[45%]">
      <img src="/bow.png" alt="" class="w-[5%] absolute left-[2.5%] top-[75%]">
    </div>
    <div class="side">
      <img src="/bow.png" alt="" class="w-[5%] absolute right-[2.5%] top-[15%]">
      <img src="/swirl.png" alt="" class="w-[5%] absolute right-[2.5%] top-[45%]">
      <img src="/bow.png" alt="" class="w-[5%] absolute right-[2.5%] top-[75%]">
    </div>

    <div class="view_container bg-[#6B3B56] w-[80%] h-[70%] absolute top-6 left-1/2 transform -translate-x-1/2 overflow-hidden rounded-3xl p-[4px] flex flex-col">
      <div class="tab w-full rounded-t-3xl h-14 bg-[#eb7fa3]">
        <div class="w-64 h-full bg-red-100 ml-20 border-x-3 border-[#6B3B56] flex items-center">
          <img src="/logo.png" alt="Logo" class="w-8 m-2">
          <h1 class="text-1xl tracking-[0.4em]">CAKE.SHOP</h1>
        </div>
        
      </div>
      <img src="/xx.png" alt="" class="w-8 absolute top-4 right-4 cursor-pointer">
      <img src="/mini.png" alt="" class="w-8 absolute top-4 right-16 cursor-pointer">
      <div class="search_bar w-full h-14 flex justify-center items-center bg-[#f8cbad] border-t-3 border-[#6B3B56]">
        <div class="search w-7/9 h-8 bg-white flex items-center rounded-2xl px-4">
          <a class="tracking-[0.25em] hover:underline" target="_blank" href="https://docs.google.com/presentation/d/1UsfFp7J5B5ybeGB2X2Feux_T49h_AL7I1ig6PvjcyuI/edit?usp=sharing">
            https://cakeshop.com
          </a>
        </div>
        <div class="ham-menu h-[2rem] w-[2rem] absolute right-[20px] flex flex-col justify-center items-center gap-1 rounded-md">
          <span class="block h-[4px] w-[100%] bg-[#77151A] rounded-full"></span>
          <span class="block h-[4px] w-[100%] bg-[#77151A] rounded-full"></span>
          <span class="block h-[4px] w-[100%] bg-[#77151A] rounded-full"></span>
        </div>

      </div>
      <div class="view w-full bg-white flex-1 border-t-3 border-[#6B3B56] rounded-b-3xl overflow-auto">
      </div>
    </div>
    <div class="items_container border-3 border-[#6B3B56] absolute bottom-4 left-1/2 rounded-3xl transform -translate-x-1/2 w-[80%] h-[24%] p-5 bg-white">
      <div class="wrapper">
        <nav class="flex gap-x-[1rem] mb-3">
          <button @click="changeCategory('bases')" class="h-[40px] border-4 border-[#db5c86] bg-[#f7afc7] text-white px-4 py-[5px] rounded-lg hover:bg-pink-600 transition">Base Cake</button>
          <button @click="changeCategory('Frosting')" class="h-[40px] border-4 border-[#db5c86] bg-[#f7afc7] text-white px-4 py-[5px] rounded-lg hover:bg-pink-600 transition">Frosting</button>
          <button @click="changeCategory('Toppings')" class="h-[40px] border-4 border-[#db5c86] bg-[#f7afc7] text-white px-4 py-[5px] rounded-lg hover:bg-pink-600 transition">Toppings</button>
          <button class="h-[40px] border-4 border-[#db5c86] bg-[#f7afc7] text-white px-4 py-[5px] rounded-lg hover:bg-pink-600 transition">Candles</button>
          <button class="h-[40px] border-4 border-[#db5c86] bg-[#f7afc7] text-white px-4 py-[5px] rounded-lg hover:bg-pink-600 transition">Decorations</button>
        </nav>
      </div>
      <CardContainer :selectedCategory="selectedCategory" />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
.entire {
  font-family: 'Pixelify Sans', sans-serif;
}

</style>
