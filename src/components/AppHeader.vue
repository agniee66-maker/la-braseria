<template>
  <header class="header" :class="{ 'is-open': isOpen }">
    <div class="header__inner">

      <div class="header__brand">
        <img src="../assets/logo.png" alt="Logo La Brasería" class="header__logo-img" />
        <span class="header__logo-text">La Brasería</span>
      </div>

      <nav class="header__nav">
        <a href="#" @click.prevent="$router.push('/')">Home</a>
        <a href="#" @click.prevent="$router.push('/menu')">Menú</a>
        <a href="#" @click.prevent="$router.push('/nosotros')">Nosotros</a>
        <a href="#" @click.prevent="$router.push('/contacto')" class="header__cta">Contacto</a>
      </nav>

      <button
        class="header__burger"
        :class="{ 'is-active': isOpen }"
        @click="toggle"
        :aria-expanded="isOpen"
        aria-label="Menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>

    <transition name="dropdown">
      <nav v-if="isOpen" class="header__mobile-nav">
        <a href="#" @click.prevent="go('/')">Home</a>
        <a href="#" @click.prevent="go('/menu')">Menú</a>
        <a href="#" @click.prevent="go('/nosotros')">Nosotros</a>
        <a href="#" @click.prevent="go('/contacto')" class="header__mobile-cta">Contacto</a>
      </nav>
    </transition>

    <transition name="fade">
      <div v-if="isOpen" class="header__backdrop" @click="close"></div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref(false)
const toggle = () => (isOpen.value = !isOpen.value)
const close  = () => (isOpen.value = false)
const go = (path) => {
  router.push(path)
  close()
}
</script>

<style scoped>
.header {
  background: var(--color-brasa);
  width: 100%;
  border-bottom: 1px solid var(--color-line);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header__inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 100px;
}

.header__brand {
  display: flex;
  align-items: center;
  gap: 0;
  text-decoration: none;
}

.header__logo-img {
  width: 95px;
  height: 95px;
  object-fit: cover;
  filter: brightness(0) saturate(100%) invert(38%) sepia(72%) saturate(600%) hue-rotate(340deg) brightness(95%);
}

.header__logo-text {
  font-family: var(--font-display);
  font-size: 35px;
  font-weight: 700;
  color: var(--color-hueso);
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 36px;
}

.header__nav a {
  font-family: var(--font-body);
  color: var(--text-muted);
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  position: relative;
  transition: color var(--transition-fast);
}

.header__nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-fuego);
  transition: width var(--transition-base);
}

.header__nav a:hover {
  color: var(--color-fuego);
}

.header__nav a:hover::after {
  width: 100%;
}

.header__cta {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-hueso);
  background: var(--color-fuego);
  border: 1px solid var(--color-fuego);
  border-radius: var(--radius-sm);
  padding: 11px 24px;
  transition:
    background var(--transition-base),
    border-color var(--transition-base),
    transform var(--transition-fast);
}

.header__cta:hover {
  background: var(--color-fuego-hover);
  border-color: var(--color-fuego-hover);
  transform: translateY(-1px);
}

.header__cta::after { display: none; }

.header__burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  z-index: 1101;
}

.header__burger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-hueso);
  border-radius: 2px;
  transition: transform var(--transition-base), opacity var(--transition-fast);
  transform-origin: center;
}

.header__burger.is-active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.header__burger.is-active span:nth-child(2) {
  opacity: 0;
}

.header__burger.is-active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.header__mobile-nav {
  position: absolute;
  top: 100%;
  right: 16px;
  margin-top: 12px;
  width: min(280px, calc(100vw - 32px));
  display: flex;
  flex-direction: column;
  background: rgba(14, 14, 14, 0.92);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid var(--color-line-strong);
  border-radius: var(--radius-md);
  padding: 16px;
  gap: 4px;
  z-index: 1100;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5);
}

.header__mobile-nav a {
  font-family: var(--font-body);
  color: var(--color-hueso);
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  transition: background var(--transition-fast), color var(--transition-fast);
}

.header__mobile-nav a:hover {
  background: rgba(244, 236, 217, 0.06);
  color: var(--color-llama);
}

.header__mobile-cta {
  margin-top: 8px;
  background: var(--color-fuego);
  color: var(--color-hueso) !important;
  text-align: center;
  font-weight: 500;
}

.header__mobile-cta:hover {
  background: var(--color-fuego-hover) !important;
  color: var(--color-hueso) !important;
}

.header__backdrop {
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(14, 14, 14, 0.35);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1090;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity var(--transition-base), transform var(--transition-base);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-base);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 820px) {
  .header__inner {
    padding: 0 20px;
    height: 78px;
  }

  .header__logo-img {
    width: 60px;
    height: 60px;
  }

  .header__logo-text {
    font-size: 22px;
  }

  .header__nav {
    display: none;
  }

  .header__burger {
    display: flex;
  }

  .header__backdrop {
    top: 78px;
  }
}
</style>
