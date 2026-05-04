<template>
  <RouterLink :to="route" class="nav-card">
    <div class="nav-card__image-wrapper">
      <img :src="image" :alt="title" class="nav-card__image" />
      <div class="nav-card__image-overlay"></div>
    </div>

    <div class="nav-card__content">
      <span class="nav-card__subtitle">{{ subtitle }}</span>

      <h2 class="nav-card__title">{{ title }}</h2>

      <div class="nav-card__divider">
        <span class="nav-card__divider-dot"></span>
      </div>

      <span class="nav-card__btn">
        Entrar
        <span class="nav-card__btn-arrow">→</span>
      </span>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  image: { type: String, required: true },
  route: { type: String, required: true }
})
</script>

<style scoped>
/* ---------- CARD WRAPPER ---------- */
.nav-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-primary);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  overflow: hidden;
  text-decoration: none;
  position: relative;
  transition:
    border-color var(--transition-base),
    transform var(--transition-base),
    box-shadow var(--transition-base);
}

.nav-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--color-llama) 50%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity var(--transition-base);
  z-index: 2;
}

.nav-card:hover {
  border-color: var(--color-llama);
  transform: translateY(-4px);
  box-shadow: 0 14px 40px rgba(182, 58, 43, 0.25);
}

.nav-card:hover::before {
  opacity: 1;
}

/* ---------- IMAGEN ---------- */
.nav-card__image-wrapper {
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
}

.nav-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s ease;
  filter: saturate(1.05);
}

.nav-card__image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(14, 14, 14, 0.15) 0%,
    rgba(14, 14, 14, 0.75) 100%
  );
  transition: background var(--transition-base);
}

.nav-card:hover .nav-card__image {
  transform: scale(1.06);
}

.nav-card:hover .nav-card__image-overlay {
  background: linear-gradient(
    180deg,
    rgba(182, 58, 43, 0.15) 0%,
    rgba(14, 14, 14, 0.6) 100%
  );
}

/* ---------- CONTENIDO ---------- */
.nav-card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 32px 24px 30px;
  gap: 12px;
  background: var(--bg-primary);
}

.nav-card__subtitle {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-llama);
}

.nav-card__title {
  font-family: var(--font-display);
  font-size: 30px;
  font-weight: 700;
  color: var(--color-hueso);
  line-height: 1.15;
  letter-spacing: 0.01em;
  margin: 2px 0 4px;
}

/* ---------- DIVISOR DECORATIVO ---------- */
.nav-card__divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 72px;
  height: 1px;
  background: var(--color-line-strong);
  position: relative;
  margin: 6px 0 14px;
}

.nav-card__divider-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-fuego);
  box-shadow: 0 0 0 3px rgba(182, 58, 43, 0.18);
}

/* ---------- CTA ---------- */
.nav-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-hueso);
  padding: 12px 26px;
  border: 1px solid var(--color-fuego);
  background: transparent;
  border-radius: var(--radius-sm);
  transition:
    background var(--transition-base),
    color var(--transition-base),
    border-color var(--transition-base);
}

.nav-card__btn-arrow {
  display: inline-block;
  transition: transform var(--transition-base);
}

.nav-card:hover .nav-card__btn {
  background: var(--color-fuego);
  border-color: var(--color-fuego);
  color: var(--color-hueso);
}

.nav-card:hover .nav-card__btn-arrow {
  transform: translateX(4px);
}

@media (max-width: 820px) {
  .nav-card {
    background: linear-gradient(160deg, var(--color-fuego) 0%, #8a2a1f 100%);
    border-color: rgba(244, 236, 217, 0.18);
  }

  .nav-card__content {
    background: transparent;
    padding: 26px 22px 26px;
    gap: 10px;
  }

  .nav-card__image-wrapper {
    height: 200px;
  }

  .nav-card__image-overlay {
    background: linear-gradient(
      180deg,
      rgba(14, 14, 14, 0.05) 0%,
      rgba(161, 69, 58, 0.55) 100%
    );
  }

  .nav-card__subtitle {
    color: var(--color-llama);
  }

  .nav-card__title {
    color: var(--color-hueso);
    font-size: 26px;
  }

  .nav-card__divider {
    background: rgba(244, 236, 217, 0.35);
  }

  .nav-card__divider-dot {
    background: var(--color-llama);
    box-shadow: 0 0 0 3px rgba(217, 164, 65, 0.25);
  }

  .nav-card__btn {
    color: var(--color-hueso);
    border-color: var(--color-hueso);
    background-color: var(--color-line);
  }

  .nav-card:active .nav-card__btn,
  .nav-card:hover .nav-card__btn {
    background: var(--color-hueso);
    border-color: var(--color-hueso);
    color: var(--color-fuego);
  }
}
</style>
