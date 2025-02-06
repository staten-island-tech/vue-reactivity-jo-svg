
<template>
  <div class="side">
      <img 
        src="/bow.png" 
        alt="" 
        class="w-[5%] absolute" 
        :class="direction === 'right' ? 'right-[2.5%]' : 'left-[2.5%]'"
        style="top: 15%"
      >
      <img 
        src="/swirl.png" 
        alt="" 
        class="w-[5%] absolute" 
        :class="direction === 'right' ? 'right-[2.5%]' : 'left-[2.5%]'"
        style="top: 45%"
      >
      <img 
        src="/bow.png" 
        alt="" 
        class="w-[5%] absolute" 
        :class="direction === 'right' ? 'right-[2.5%]' : 'left-[2.5%]'"
        style="top: 75%"
      >
  </div>
</template>

<script>
const props = defineProps({
  position: {
    type: String,
    default: 'left', 
  }
});
</script>
<style scoped>
.side {
  position: relative;
}
</style>
