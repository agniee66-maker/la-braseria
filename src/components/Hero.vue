<template>
  <section class="hero">
    <div class="hero__inner">

      <!-- ============ IZQUIERDA: contenido estático ============ -->
      <div class="hero__content">
        <span class="hero__kicker">Fuego · Sabor · Amigos</span>

        <h1 class="hero__title">
          Auténtico fuego,<br />
          sabor <span class="hero__title-accent">inolvidable</span>
        </h1>

        <p class="hero__desc">
          En La Brasería celebramos el fuego, el sabor
          y lo que nos une: momentos que se disfrutan juntos.
        </p>

        <div class="hero__actions">
          <button class="hero__btn hero__btn--primary">
            Ver menú
          </button>
          <button class="hero__btn hero__btn--ghost">
            <span class="hero__btn-play" aria-hidden="true">▶</span>
            Nuestra historia
          </button>
        </div>
      </div>

      <!-- ============ DERECHA: imagen rotando ============ -->
      <div class="hero__media">
        <Card :image="images[current]" />

        <div class="hero__dots" role="tablist" aria-label="Imágenes destacadas">
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

const images = [
  'https://terracarnicerias.es/cdn/shop/articles/Entrecot_con_Chimich.jpg?v=1768909262&width=1600',
  'https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg',
  'https://i.ytimg.com/vi/pszaHtAmqBU/maxresdefault.jpg'
]

const current = ref(0)
const next = () => (current.value = (current.value + 1) % images.length)
const goTo = (i) => (current.value = i)

let interval
onMounted(() => { interval = setInterval(next, 5500) })
onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
/* ==================
   HERO — full bleed
   ================== */
.hero {
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: var(--color-brasa);
  overflow: hidden;
  isolation: isolate;
}

/* Fondo decorativo sutil (brasas) */
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

/* =======================
   IZQUIERDA — contenido
   ======================= */
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
}

.hero__title-accent {
  color: var(--color-fuego);
  font-style: italic;
}

.hero__desc {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.65;
  color: var(--text-muted);
  max-width: 440px;
}

/* ---------- ACTIONS ---------- */
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

/* =============================
   DERECHA — imagen principal
   ============================= */
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

/* =================
   RESPONSIVE
   ================= */
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
