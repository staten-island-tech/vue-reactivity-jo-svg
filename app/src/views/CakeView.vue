<template>
    <div class="h-screen flex relative">
        <div class="side">
            <img src="/bow.png" alt="" class="w-[7%] absolute left-[4%] top-[10%]">
            <img src="/swirl.png" alt="" class="w-[7%] absolute left-[4%] top-[40%]">
            <img src="/bow.png" alt="" class="w-[7%] absolute left-[4%] top-[70%]">
        </div>
        <div class="side">
            <img src="/bow.png" alt="" class="w-[7%] absolute right-[4%] top-[10%]">
            <img src="/swirl.png" alt="" class="w-[7%] absolute right-[4%] top-[40%]">
            <img src="/bow.png" alt="" class="w-[7%] absolute right-[4%] top-[70%]">
        </div> 
        
        <div class="relative w-[60%] h-[95%] my-10 left-[50%] transform -translate-x-[50%]">
            <!-- Bakery Image -->
            <img src="/bakery.png" alt="" class="h-full w-full ">

            <!-- Shelf Image (Positioned inside bakery image) -->
            <img src="/shelfPart.png" alt="" class="absolute top-0 left-0 w-full h-full bg-repeat">
        </div>
    </div>

</template>

<script>
import { ref } from 'vue';


const handleSelectedItems = (selectedItems) => {
    selectedItems.value = selectedItems;
    console.log("Selected items have been added:", selectedItemsArray.value);
}
</script>

<style  scoped>

</style>