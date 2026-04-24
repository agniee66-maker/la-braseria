<template>
  <section class="about">
    <div class="about__inner">

      <!-- ============ IZQUIERDA: texto ============ -->
      <div class="about__content">


        <span class="about__kicker">Bienvenidos a</span>

        <h2 class="about__title">La Brasería</h2>

        <p class="about__desc">
          En nuestro local, podrás disfrutar de los mejores platos
          de cocina argentina en un ambiente cálido y acogedor.
        </p>

        <button class="about__btn">Conócenos</button>

        <!-- Sol de fondo decorativo (como en la referencia) -->
        <img
          src="../assets/logo.png"
          class="about__sun about__sun--bg"
          alt=""
          aria-hidden="true"
        />
      </div>

      <!-- ============ DERECHA: galería ============ -->
      <div class="about__gallery">
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
/* ===========================================================
   ABOUT — full bleed con fondo HUESO (marmol)
   =========================================================== */
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

/* ===========================================================
   CONTENT — izquierda
   =========================================================== */
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


.about__sun--bg {
  position: absolute;
  right: -40px;
  bottom: 20px;
  width: 240px;
  height: 240px;
  object-fit: contain;
  opacity: 0.10;
  /* Tintado en LLAMA dorado */
  filter: brightness(0) saturate(100%) invert(78%) sepia(50%) saturate(600%) hue-rotate(3deg) brightness(95%);
  z-index: -1;
  pointer-events: none;
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

/* ---------- BOTÓN: verde MONTE ---------- */
.about__btn {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
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

/* ===========================================================
   GALERÍA — 3 cols, 2 rows, con imágenes saltadas
   [ 1 ][ 2 ][   ]
   [ 1 ][ 3 ][ 4 ]
   Donde 1 y 4 ocupan 2 filas.
   =========================================================== */
.about__gallery {
  min-height: 460px;
}

.about__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: var(--radius-sm);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}


/* ===========================================================
   RESPONSIVE
   =========================================================== */
@media (max-width: 900px) {
  .about__inner {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 56px 32px;
  }

  .about__gallery {
    min-height: 360px;
  }

  .about__sun--bg {
    width: 180px;
    height: 180px;
    right: -30px;
    bottom: -30px;
  }
}
</style>
