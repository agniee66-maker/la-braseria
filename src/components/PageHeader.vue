<template>
  <header class="page-header">
    <img src="../assets/logo.png" alt="" class="page-header__logo" aria-hidden="true" />
    <span class="page-header__kicker">{{ kicker }}</span>
    <h1 class="page-header__title">{{ title }}</h1>
    <p v-if="hint" class="page-header__hint">{{ hint }}</p>
  </header>
</template>

<script setup>
defineProps({
  kicker: { type: String, default: '' },
  title: { type: String, default: '' },
  hint: { type: String, default: '' }
})
</script>




<style scoped>
.page-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 24px;
  gap: 6px;
  background: var(--color-hueso);
  border-bottom: 1px solid rgba(14, 14, 14, 0.08);
}

.page-header__logo {
  width: 60px;
  height: 40px;
  object-fit: contain;
  filter: brightness(0) saturate(100%) invert(38%) sepia(72%) saturate(600%) hue-rotate(340deg) brightness(95%);
}

.page-header__kicker {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--color-fuego);
}

.page-header__title {
  font-family: var(--font-display);
  font-size: 38px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--color-brasa);
  line-height: 1;
  margin: 4px 0 0;
}

.page-header__hint {
  font-family: var(--font-accent);
  font-style: italic;
  font-size: 17px;
  color: rgba(14, 14, 14, 0.6);
  margin-top: 4px;
}

@media (min-width: 768px) {
  .page-header {
    padding: 56px 32px;
  }

  .page-header__logo {
    width: 72px;
    height: 50px;
  }

  .page-header__title {
    font-size: 60px;
  }

  .page-header__hint {
    font-size: 20px;
  }
}
</style>
