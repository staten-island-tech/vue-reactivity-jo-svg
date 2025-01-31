<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="view_container w-2/5 bg-amber-500 h-[90%] absolute right-6 ">
  </div>
  <div class="items_container ">
    <div class="wrapper">
      <nav>
        <RouterLink to="/hair" event="click" ><button class="base">Base Cake</button></RouterLink>
        <RouterLink to="/nose" class="frosting ">Frosting</RouterLink>
        <RouterLink to="/decor" class="decor ">Decoration</RouterLink>
        <RouterLink to="/topper" class="topper ">Topper</RouterLink>
        <RouterLink to="/candles" class="candles ">Candles</RouterLink>
      </nav>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
