<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import CardContainer from '@/components/icons/CardContainer.vue';
import OnScreen from '@/components/icons/OnScreen.vue';
const categories = ref({
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
    { id: 1, image: '/chocolateTop.png', name: 'Chocolate', selected: false },
    { id: 2, image: '/sprinkles.png', name: 'Sprinkles', selected: false },
    { id: 3, image: '/frosts.png', name: 'Frostings', selected: false },
    { id: 4, image: '/redToppingThing.png', name: 'Red', selected: false },
    { id: 5, image: '/oreo.png', name: 'Oreo', selected: false },
    { id: 6, image: '/cherry.png', name: 'Cherry', selected: false },
    { id: 7, image: '/pinkRibbon.png', name: 'Pink Ribbon', selected: false },
    { id: 8, image: '/whiteRibbon.png', name: 'White Ribbon', selected: false },
  ],
  candles: [

  ]
});
const submittedItems = ref({
    
})
const selectedCategory = ref({ name: 'bases', items: categories.value.bases});
//Everything inside a ref() needs .value to access or update it 
//Without .value, you’re trying to grab toys without opening the chest. ❌
//With .value, you unlock the chest and actually get the toys inside. ✅
const onScreenItems = ref([]);
//storing the stuff that is on screen
const changeCategory = (categoryName) => {
  selectedCategory.value.name = categoryName;
  selectedCategory.value.items = categories.value[categoryName];
  // Update onScreenItems after changing category
  updateOnScreenItems();
};
//changes the category 
const updateSelected = (updatedItems) => {
  categories.value[selectedCategory.value.name] = updatedItems;
  //finds the current category inside categories
  //before you click a button, it contains all the categories (such as base, frosting, etc.)
  //after you click it clears all but that one category u clicked, set it to updatedItems so it replaces the old list to the new one
  selectedCategory.value.items = updatedItems;
  //this line updates the items 
  // we need both lines bc the second one will only update instantly but it will reset after switch catergory 
  Object.keys(categories.value).forEach(category => {
    //object contains everything, since its object.keys rn it shows bases, frostings, toppings, and candles
    localStorage.setItem(category, JSON.stringify(categories.value[category]));
    //localStorage.setItem(key, value) - Saves Data
    //The key is like the title of a page.
    //The value is like the thing you’re saving under that title.
  });
  updateOnScreenItems();
  // Save updated items to localStorage
};
// Load selections from localStorage on page reload
onMounted(() => {
  Object.keys(categories.value).forEach(category => {
    const savedItems = localStorage.getItem(category);
    if (savedItems) {
      categories.value[category] = JSON.parse(savedItems);
    }
  });
  updateOnScreenItems(); // Ensure selected items appear on reload
});
const updateOnScreenItems = () => {
  // Get all selected items across all categories
  onScreenItems.value = Object.values(categories.value)
    .flat() // Merge all category arrays into one array
    .filter(item => item.selected); // Keep only selected items
};
watchEffect(() => {
  console.log("onScreenItems: ", onScreenItems.value);
  updateOnScreenItems();
});
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