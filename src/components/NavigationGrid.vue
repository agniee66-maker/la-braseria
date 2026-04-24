<template>
  <div class="nav-grid">
    <NavigationCard
      v-for="card in cards"
      :key="card.route"
      :title="card.title"
      :subtitle="card.subtitle"
      :image="card.image"
      :route="card.route"
    />
  </div>
</template>

<script setup>
import NavigationCard from './NavigationCard.vue'

defineProps({
  cards: { type: Array, required: true }
})
</script>

<style scoped>
.nav-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  background: transparent;
}

</style>
