<template>
  <div class="nav-grid">
    <div
      v-for="(card, i) in cards"
      :key="card.route"
      v-reveal="{ delay: i * 120, variant: 'up' }"
      class="nav-grid__cell"
    >
      <NavigationCard
        :title="card.title"
        :subtitle="card.subtitle"
        :image="card.image"
        :route="card.route"
      />
    </div>
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

.nav-grid__cell {
  display: flex;
}

.nav-grid__cell > * {
  width: 100%;
}

@media (max-width: 820px) {
  .nav-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
