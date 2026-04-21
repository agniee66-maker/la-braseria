<template>
  <div id="app">
    <AppHeader />

    <div class="main-content">
      <RouterView />
    </div>
    
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  margin: 0 auto;
  
  background-color: #3d3d32;
}

.main-content {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
