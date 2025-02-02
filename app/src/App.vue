<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import BaseView from './views/BaseView.vue';
</script>

<template>
  <div class="entire flex h-screen bg-[#F8CFDD] bg-cover bg-center">
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
        <div class="search w-7/9 h-10 bg-white flex items-center px-4">
          <a class="tracking-[0.25em] hover:underline" href="https://docs.google.com/presentation/d/1UsfFp7J5B5ybeGB2X2Feux_T49h_AL7I1ig6PvjcyuI/edit?usp=sharing">
            https://CakeShop.com
          </a>
        </div>
      </div>
      <div class="view w-full bg-white flex-1 border-t-3 border-[#6B3B56] rounded-b-3xl overflow-auto">

      </div>
    </div>

    <div class="items_container border-3 border-[#6B3B56] absolute bottom-8 left-1/2 rounded-3xl transform -translate-x-1/2 w-[80%] h-[23%] p-5 bg-white">
      <div class="wrapper mb-5 mt-1">
        <nav class="">
          <RouterLink to="/" class=" border-4 border-[#db5c86] bg-[#f7afc7] text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">Base Cake</RouterLink>
          <RouterLink to="/frosting" class="bg-[#db5c86] text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"> Frosting</RouterLink>
          <RouterLink to="/decor" class="bg-[#db5c86] text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"> Decoration</RouterLink>
          <RouterLink to="/candles" class="bg-[#db5c86] text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">Candles</RouterLink>
        </nav>
      </div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap');
.entire {
  font-family: 'Pixelify Sans', sans-serif;
}

</style>
