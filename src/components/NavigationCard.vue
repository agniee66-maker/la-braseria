<template>
  <RouterLink :to="route" class="nav-card">
    <div class="nav-card__image-wrapper">
      <img :src="image" :alt="title" class="nav-card__image" />
    </div>
    <div class="nav-card__content">
      <span class="nav-card__subtitle">{{ subtitle }}</span>
      <h2 class="nav-card__title">{{ title }}</h2>
      <div class="nav-card__divider"></div>
      <button class="nav-card__btn">Entrar</button>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  title:    { type: String, required: true },
  subtitle: { type: String, required: true },
  image:    { type: String, required: true },
  route:    { type: String, required: true }
})
</script>

<style scoped>
.nav-card {
  display: flex;
  flex-direction: column;
  background: #1C1C19;
  border-radius: 18px;
  overflow: hidden;
  border: 3px solid #2E2E28;
  text-decoration: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.nav-card__image-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}
.nav-card__image-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(232, 93, 38, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.4s ease;
}

.nav-card:hover {
  border-color: #D4A853;
  box-shadow: 0 0 18px rgba(232, 93, 38, 0.35);
}

.nav-card:hover .nav-card__image-wrapper::after {
  opacity: 1;
}

.nav-card__content {
  display: flex;
  flex-direction: column;
  height: 250px;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 24px 20px 28px;
  gap: 13px;
}

.nav-card__subtitle {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #E85D26;
}

.nav-card__title {
  font-size: 26px;
  font-weight: 500;
  color: #d1ccc0;
  line-height: 1.2;
}

.nav-card__divider {
  width: 32px;
  height: 1px;
  background: #E85D26;
}

.nav-card__btn {
  margin-top: 8px;
  width: 100%;
  background: #E85D26;
  color: #fff;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
}
</style>