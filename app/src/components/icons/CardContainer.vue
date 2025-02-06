<template>
  <div class="wrapper">
        <nav class="flex gap-x-[1rem] mb-3">
          <button @click="$emit('changeCategory', 'bases')" class="h-[40px] border-4 border-[#db5c86] bg-[#f7afc7] text-white px-4 py-[5px] rounded-lg hover:bg-pink-600 transition">Base Cake</button>
          <button @click="$emit('changeCategory', 'frostings')" class="h-[40px] border-4 border-[#db5c86] bg-[#f7afc7] text-white px-4 py-[5px] rounded-lg hover:bg-pink-600 transition">Frosting</button>
          <button @click="$emit('changeCategory', 'toppings')" class="h-[40px] border-4 border-[#db5c86] bg-[#f7afc7] text-white px-4 py-[5px] rounded-lg hover:bg-pink-600 transition">Toppings</button>
          <button @click="$emit('changeCategory', 'candles')" class="h-[40px] border-4 border-[#db5c86] bg-[#f7afc7] text-white px-4 py-[5px] rounded-lg hover:bg-pink-600 transition">Candles</button>
          
        </nav>
  </div>
  <div class="flex w-full gap-x-6 h-3/4">
    <div 
      v-for="item in selectedCategory?.items || []" 
      :key="item.id" 
      @click="selectCard(item)" 
      class="card cursor-pointer w-fit rounded-2xl bg-amber-200"
    >
      <img 
        :src="item.image" 
        :alt="item.name" 
        class="h-full object-cover rounded-t-2xl"
      >
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['update:selectedItems', 'changeCategory']);
const props = defineProps({
  selectedCategory: Object, 
});

const selectCard = (item) => {
  const updatedItems = props.selectedCategory.items.map(i => {
    //map creates a new array checking each i to see if they were clicked
    if (i.id === item.id) {
      console.log(item.selected);
      return { id: i.id, image: i.image, name: i.name, selected: !i.selected };
      
    } else {
      console.log(i.selected, i.name);  
      return { id: i.id, image: i.image, name: i.name, selected: false };
    }
  });
  emit('update:selectedItems', updatedItems);
};


</script>
