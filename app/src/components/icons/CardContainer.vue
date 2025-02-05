<template>
  <div class="flex w-full gap-x-6 h-3/4">
    <div 
      v-for="item in selectedCategory.items"
      :key="item.id"
      @click="AddCard(item)" 
      class="card cursor-pointer w-fit rounded-2xl bg-amber-200"
    >
      <img 
        :src="item.image" 
        :alt="item.label" 
        class="h-full object-cover rounded-t-2xl"
      >
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  selectedCategory: Object, // Expects an object with { name, items }
});

const AddCard = (item) => {
  console.log('Selected:', item.label);
};
</script>
