<template>
  <div class="card">
    <transition name="card-fade" mode="out-in">
      <img
        :key="image"
        :src="image"
        :alt="alt"
        class="card__image"
      />
    </transition>
  </div>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  alt:   { type: String, default: 'Plato destacado' }
})
</script>

<style scoped>
.card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: var(--radius-md);
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.45),
    0 0 0 1px var(--color-line) inset;
  background: var(--color-brasa-soft);
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.card-fade-enter-active,
.card-fade-leave-active {
  transition: opacity 0.7s ease, transform 0.7s ease;
  position: absolute;
  inset: 0;
}

.card-fade-enter-from {
  opacity: 0;
  transform: scale(1.04);
}

.card-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
