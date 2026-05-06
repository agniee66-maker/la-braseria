<template>
  <section class="hero">
    <div class="hero__inner">

      <div class="hero__content">
        <span v-if="kicker" class="hero__kicker">{{ kicker }}</span>

        <h1 v-if="title" class="hero__title">{{ title }}<template v-if="titleAccent"> <span class="hero__title-accent">{{ titleAccent }}</span></template></h1>

        <p v-if="description" class="hero__desc">{{ description }}</p>

        <div v-if="buttons.length" class="hero__actions">
          <template v-for="(btn, i) in buttons" :key="i">
            <RouterLink
              v-if="btn.to"
              :to="btn.to"
              class="hero__btn"
              :class="`hero__btn--${btn.variant || 'primary'}`"
            >
              <span v-if="btn.icon" class="hero__btn-play" aria-hidden="true">{{ btn.icon }}</span>
              {{ btn.label }}
            </RouterLink>
            <button
              v-else
              type="button"
              class="hero__btn"
              :class="`hero__btn--${btn.variant || 'primary'}`"
              @click="btn.onClick && btn.onClick()"
            >
              <span v-if="btn.icon" class="hero__btn-play" aria-hidden="true">{{ btn.icon }}</span>
              {{ btn.label }}
            </button>
          </template>
        </div>
      </div>

      <div class="hero__media">
        <Card :image="images[current]" />

        <div v-if="images.length > 1" class="hero__dots" role="tablist" aria-label="Imágenes destacadas">
          <button
            v-for="(img, i) in images"
            :key="i"
            class="hero__dot"
            :class="{ 'hero__dot--active': i === current }"
            @click="goTo(i)"
            :aria-label="`Ver imagen ${i + 1}`"
          ></button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Card from './Card.vue'

const props = defineProps({
  kicker: { type: String, default: '' },
  title: { type: String, default: '' },
  titleAccent: { type: String, default: '' },
  description: { type: String, default: '' },
  images: { type: Array, required: true },
  interval: { type: Number, default: 5500 },
  buttons: { type: Array, default: () => [] }
})

const current = ref(0)
const next = () => (current.value = (current.value + 1) % props.images.length)
const goTo = (i) => (current.value = i)

let intervalId
onMounted(() => {
  if (props.images.length > 1) {
    intervalId = setInterval(next, props.interval)
  }
})
onUnmounted(() => clearInterval(intervalId))
</script>

<style scoped>
.hero {
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: var(--color-brasa);
  overflow: hidden;
  isolation: isolate;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  background:
    radial-gradient(
      ellipse at 80% 40%,
      rgba(236, 47, 26, 0.18) 0%,
      transparent 55%
    );
  z-index: 0;
  pointer-events: none;
}

.hero__inner {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 50px 48px;
  display: grid;
  grid-template-columns: 1fr 1.55fr;
  gap: 20px;
  align-items: center;
}

.hero__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
}

.hero__kicker {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--color-llama);
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(38px, 5vw, 58px);
  font-weight: 800;
  line-height: 1.05;
  color: var(--color-hueso);
  text-transform: uppercase;
  letter-spacing: 0.01em;
  margin: 2px 0 6px;
  white-space: pre-line;
}

.hero__title-accent {
  display: inline-block;
  color: var(--color-fuego);
  font-style: italic;
  opacity: 0;
  transform: translateY(18px) scale(0.96);
  filter: blur(6px);
  animation: ignite 1.4s 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@keyframes ignite {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.96);
    filter: blur(6px);
    text-shadow: 0 0 0 transparent;
    color: var(--color-hueso);
  }
  55% {
    opacity: 1;
    transform: translateY(0) scale(1.02);
    filter: blur(0);
    text-shadow: 0 0 28px rgba(217, 164, 65, 0.55);
    color: var(--color-llama);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
    text-shadow: 0 0 0 transparent;
    color: var(--color-fuego);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__title-accent {
    animation: none;
    opacity: 1;
    transform: none;
    filter: none;
  }
}

.hero__desc {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.65;
  color: var(--text-muted);
  max-width: 440px;
}

.hero__actions {
  display: flex;
  gap: 14px;
  margin-top: 14px;
  flex-wrap: wrap;
}

.hero__btn {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 14px 28px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition:
    background var(--transition-base),
    color var(--transition-base),
    border-color var(--transition-base),
    transform var(--transition-fast);
}

.hero__btn--primary {
  background: var(--color-fuego);
  color: var(--color-hueso);
  border: 1px solid var(--color-fuego);
}

.hero__btn--primary:hover {
  background: var(--color-fuego-hover);
  border-color: var(--color-fuego-hover);
  transform: translateY(-1px);
}

.hero__btn--ghost {
  background: transparent;
  color: var(--color-hueso);
  border: 1px solid var(--color-line-strong);
}

.hero__btn--ghost:hover {
  border-color: var(--color-llama);
  color: var(--color-llama);
}

.hero__btn-play {
  font-size: 10px;
  color: var(--color-fuego);
}

.hero__btn--ghost:hover .hero__btn-play {
  color: var(--color-llama);
}

.hero__media {
  position: relative;
  width: 100%;
  height: 500px;
}

.hero__dots {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  padding: 8px 14px;
  background: rgba(14, 14, 14, 0.5);
  backdrop-filter: blur(6px);
  border-radius: 999px;
  border: 1px solid var(--color-line);
}

.hero__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: var(--color-line-strong);
  cursor: pointer;
  padding: 0;
  transition: background var(--transition-base), width var(--transition-base);
}

.hero__dot--active {
  background: var(--color-fuego);
  width: 24px;
  border-radius: 999px;
}

@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 56px 32px;
  }

  .hero__media {
    height: 360px;
  }

  .hero__title {
    font-size: clamp(34px, 8vw, 48px);
  }
}
</style>
