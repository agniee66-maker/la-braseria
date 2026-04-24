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
  background-color: var(--color-brasa);
  /* Evita scroll horizontal cuando alguna sección rompe el ancho (full-bleed) */
  overflow-x: clip;
}

.main-content {
  margin: 0 auto;
}
</style>
