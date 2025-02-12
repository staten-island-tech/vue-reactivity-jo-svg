<template>
    <!-- the key allows vue to track the cards --> 
    <div class="view w-full bg-white flex-1 border-t-3 border-[#6B3B56] rounded-b-3xl overflow-hidden">
        <div class="relative mx-auto mt-[3rem] w-[27rem] h-[27rem] flex justify-center items-center ">
          <img 
            v-for="item in onScreenItems" 
            :key="item.id" 
            :src="item.image" 
            :alt="item.name" 
            class="w-full absolute left-1/2 transform -translate-x-1/2 z-10"
          />
        </div>
        <button class="h-[40px] absolute right-10 border-4 border-[#db5c86] bg-[#f7afc7] text-white px-4 py-[5px] rounded-lg hover:bg-pink-600 transition"><a href="/inventory" class="">Submit! ></a></button>
    </div>

</template>

<script setup>

const props = defineProps({
  onScreenItems: {
    type: Array,
    required: true
  }
});


</script>

<style scoped>

</style>