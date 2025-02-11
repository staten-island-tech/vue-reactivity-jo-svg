<script setup>
import { ref, watchEffect } from 'vue';
import CardContainer from '@/components/icons/CardContainer.vue';
import OnScreen from '@/components/icons/OnScreen.vue';
const categories = {
  bases: [
    { id: 1, image: '/vanBase.png', name: 'Vanilla Base', selected: false },
    { id: 2, image: '/chocoBase.png', name: 'Chocolate Base', selected: false },
    { id: 3, image: '/strawBase.png', name: 'Strawberry Base', selected: false },
    { id: 4, image: '/redVelvetBase.png', name: 'Red Velvet Base', selected: false },
    { id: 5, image: '/iceCreamBase.png', name: 'Ice Cream Base', selected: false },
  ],
  frostings: [
    { id: 1, image: '/vanFrost.png', name: 'Vanilla Frost', selected: false },
    { id: 2, image: '/chocoFrost.png', name: 'Chocolate Frost', selected: false },
    { id: 3, image: '/strawFrost.png', name: 'Strawberry Frost', selected: false },
    { id: 4, image: '/redFrost.png', name: 'Red Velvet Frost', selected: false },
    { id: 5, image: '/cookiesNcreamFrost.png', name: 'Cookies N Cream Frost', selected: false },
  ],
  toppings: [
    { id: 1, image: '/cherry.png', name: 'Cherry', selected: false },
    { id: 2, image: '/frosts.png', name: 'Frostings', selected: false },
    { id: 3, image: '/oreo.png', name: 'Oreo', selected: false },
    { id: 4, image: '/pinkRibbon.png', name: 'Pink Ribbon', selected: false },
    { id: 5, image: '/redToppingThing.png', name: 'Red', selected: false },
    { id: 6, image: '/sprinkles.png', name: 'Sprinkles', selected: false },
    { id: 7, image: '/whiteRibbon.png', name: 'White Ribbon', selected: false },
    { id: 8, image: '/chocolateTop.png', name: 'Chocolate', selected: false },
  ],

  candles: [

  ]
};

const selectedCategory = ref({ name: 'bases', items: categories.bases });
const onScreenItems = ref([]);
watchEffect(() => {
  onScreenItems.value = selectedCategory.value.items.filter(item => item.selected);
});
const changeCategory = (categoryName) => {
  selectedCategory.value = {
    name: categoryName, 
    items: categories[categoryName] || [] 
  };
};
const updateSelected = (updatedItems) => {
  selectedCategory.value.items = updatedItems;
};

</script>

<template>
  <div class="entire flex relative h-screen bg-[#F8CFDD] bg-cover bg-center">
 
    <div class="side">
      <img src="/bow.png" alt="" class="w-[5%] absolute left-[2.5%] top-[10%]">
      <img src="/swirl.png" alt="" class="w-[5%] absolute left-[2.5%] top-[40%]">
      <img src="/bow.png" alt="" class="w-[5%] absolute left-[2.5%] top-[70%]">
    </div>
    <div class="side">
      <img src="/bow.png" alt="" class="w-[5%] absolute right-[2.5%] top-[10%]">
      <img src="/swirl.png" alt="" class="w-[5%] absolute right-[2.5%] top-[40%]">
      <img src="/bow.png" alt="" class="w-[5%] absolute right-[2.5%] top-[70%]">
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
      
      <OnScreen :onScreenItems="onScreenItems" />

    </div>
    <div class="items_container border-3 border-[#6B3B56] absolute bottom-4 left-1/2 rounded-3xl transform -translate-x-1/2 w-[80%] h-[24%] p-5 bg-white">
      <CardContainer :selectedCategory="selectedCategory"
        @update:selectedItems="updateSelected"
        @changeCategory="changeCategory"/>
      
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