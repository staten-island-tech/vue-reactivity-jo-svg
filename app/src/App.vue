<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="view_container">

  </div>
  <div class="container">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Female</RouterLink>
        <RouterLink to="/about">Male</RouterLink>
        <RouterLink to="/about">Male</RouterLink>
      </nav>
    </div>
    <RouterView />
  </div>
  

</template>

<style scoped>
.view_container{
  background-color: aqua;
  width: 30rem;
}
.container{
  background-color: rgb(214, 176, 176);
  height: fit-content;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {


  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} 
</style>
