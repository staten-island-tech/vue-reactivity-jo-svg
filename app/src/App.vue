<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

</script>

<template>
  <div class="entire bg-[#F8CFDD] flex flex-col">
    <div class="h-[5rem] flex justify-end items-center w-[100%] flex-row gap-x-[4rem] pr-[4rem] mt-5 ">
      <RouterLink to="/" class="h-[3rem] border-4 border-[#db5c86] bg-[#f7afc7] text-white px-8 py-[0.5%] rounded-lg hover:bg-pink-600 transition">Building</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
.entire {
  font-family: 'Pixelify Sans', sans-serif;
}

</style>
