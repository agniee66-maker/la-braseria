<template>
  <section class="about">
    <div class="about__inner">

      <!-- ============ IZQUIERDA: texto ============ -->
      <div class="about__content" v-reveal="{ variant: 'left' }">


        <span class="about__kicker">Bienvenidos a</span>

        <h2 class="about__title">La Brasería</h2>

        <p class="about__desc">
          En nuestro local, podrás disfrutar de los mejores platos
          de cocina argentina en un ambiente cálido y acogedor.
        </p>

        <RouterLink to="/nosotros" class="about__btn">Conócenos</RouterLink>

      </div>

      <!-- ============ DERECHA: fotos ============ -->
      <div class="about__gallery" v-reveal="{ variant: 'right', delay: 150 }">
        <img
          class="about__img about__img--1"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/96/f6/af/getlstd-property-photo.jpg?w=900&h=500&s=1"
          alt="Coctel de la casa"
        />
        
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ======================================
   ABOUT — full bleed con fondo marmol
   ====================================== */
.about {
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
}

.about__inner {
  position: relative;
  max-height: 500px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 48px;
  display: grid;
  grid-template-columns: 1fr 1.55fr;
  gap: 10px;
  align-items: stretch;
}

/* ======================================
   CONTENT — izquierda
   ====================================== */
.about__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 16px 30px 16px 30px;
  gap: 18px;
  isolation: isolate;
  background: var(--color-hueso);
  border-radius: var(--radius-sm);
}

.about__kicker {
  font-family: var(--font-body);
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--color-fuego);
}

.about__title {
  font-family: var(--font-display);
  font-size: clamp(34px, 4vw, 48px);
  font-weight: 800;
  line-height: 1.05;
  color: var(--color-brasa);
  text-transform: uppercase;
  letter-spacing: 0.01em;
  margin: 0 0 4px;
}

.about__desc {
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.75;
  color: rgba(14, 14, 14, 0.72);
  max-width: 400px;
  margin-bottom: 12px;
}

/* ---------- BOTÓN VERDE ---------- */
.about__btn {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-hueso);
  background: var(--color-monte);
  border: 1px solid var(--color-monte);
  border-radius: var(--radius-sm);
  padding: 14px 30px;
  cursor: pointer;
  transition:
    background var(--transition-base),
    border-color var(--transition-base),
    transform var(--transition-fast);
}

.about__btn:hover {
  background: var(--color-monte-soft);
  border-color: var(--color-monte-soft);
  transform: translateY(-1px);
}


.about__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: var(--radius-sm);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}


/* ======================================
   RESPONSIVE - version movil
   ====================================== */
@media (max-width: 900px) {
  .about__inner {
    max-height: none;
    grid-template-columns: 1fr;
    gap: 0px;
    padding: 20px 20px;
  }

  .about__content {
    padding: 20px 22px;
    gap: 14px;
  }

  .about__kicker {
    font-size: 13px;
    letter-spacing: 0.28em;
  }

  .about__title {
    font-size: clamp(28px, 8vw, 38px);
  }

  .about__desc {
    font-size: 14px;
    max-width: 100%;
  }

  .about__gallery {
    min-height: 240px;
    height: 240px;
  }

  .about__img {
    border-radius: var(--radius-sm);
  }

}
</style>
