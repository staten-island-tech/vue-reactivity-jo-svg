<template>
    <div class="flex w-100% gap-x-[1.5rem] h-3/4">
     <div 
      v-for="decoration in decorations"
      :key="decoration.id"
      @click="AddCard" 
      class="card cursor-pointer w-fit rounded-2xl bg-amber-200 "
      >
      
      </div>
    </div>
</template>

<script>

</script>