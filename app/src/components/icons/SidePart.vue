<!-- SidePart.vue -->
<template>
  <div class="side relative z-10">
    <!-- Bow Image -->
    <img 
      src="/bow.png" 
      alt="Bow" 
      class="w-[5%] absolute" 
      :class="direction === 'right' ? 'right-[2.5%]' : 'left-[2.5%]'"
      style="top: 15%"
    >
    <!-- Swirl Image -->
    <img 
      src="/swirl.png" 
      alt="Swirl" 
      class="w-[5%] absolute" 
      :class="direction === 'right' ? 'right-[2.5%]' : 'left-[2.5%]'"
      style="top: 45%"
    >
    <!-- Bow Image -->
    <img 
      src="/bow.png" 
      alt="Bow" 
      class="w-[5%] absolute" 
      :class="direction === 'right' ? 'right-[2.5%]' : 'left-[2.5%]'"
      style="top: 75%"
    >
  </div>
</template>

<script setup>
defineProps({
  direction: {
    type: String,
    default: 'left',  // Default value for direction
  }
});
console.log("Direction in SidePart:", direction);
</script>

<style scoped>

</style>
