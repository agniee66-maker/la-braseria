<template>
  <div class="nosotros">

    <Hero
          kicker="Nuestra historia"
          :title="'Dos generaciones,\nun mismo '"
          title-accent="fuego"
          description=""
          :images="heroImages"
          :buttons="heroButtons"
    />

    <section class="story">
      <div class="story__inner">
        <div class="story__text" v-reveal="{ variant: 'left' }">
          <span class="story__kicker">Desde 1998</span>
          <h2 class="story__title">Del campo a la brasa</h2>
          <p>
            Empezamos siendo una taberna pequeña en el casco antiguo,
            con cuatro mesas y un horno de leña que aún conservamos.
            La receta del chimichurri es la misma que usaba la abuela Rosa
            cuando cocinaba para los vecinos del barrio.
          </p>
          <p>
            Trabajamos solo con ganaderos locales, verdura de huerta
            cercana y pan de horno tradicional. Sin atajos, sin prisa.
            Lo que sale a la mesa es lo que comeríamos en casa.
          </p>
        </div>

        <div class="story__stats" v-reveal="{ variant: 'right', delay: 180 }">
          <div class="stat">
            <span class="stat__num">28</span>
            <span class="stat__label">Años a tu lado</span>
          </div>
          <div class="stat">
            <span class="stat__num">42</span>
            <span class="stat__label">Platos en carta</span>
          </div>
          <div class="stat">
            <span class="stat__num">100%</span>
            <span class="stat__label">Producto local</span>
          </div>
          <div class="stat">
            <span class="stat__num">7</span>
            <span class="stat__label">Días a la semana</span>
          </div>
        </div>
      </div>
    </section>

    

    <section class="values">
      <div class="values__sun" aria-hidden="true"></div>
      <div class="values__inner">
        <div class="values__head" v-reveal="{ variant: 'up' }">
          <span class="values__kicker">Lo que defendemos</span>
          <h2 class="values__title">
            Tres reglas, <span class="values__title-accent">cero excusas.</span>
          </h2>
        </div>

        <div class="values__grid">
          <div class="pillar" v-reveal="{ variant: 'up', delay: 80 }">
            <span class="pillar__num">01</span>
            <h3 class="pillar__title">El fuego manda</h3>
            <p>
              Toda nuestra carta pasa por brasa o por horno de leña.
              Sin atajos eléctricos, sin trampas industriales.
            </p>
          </div>
          <div class="pillar" v-reveal="{ variant: 'up', delay: 180 }">
            <span class="pillar__num">02</span>
            <h3 class="pillar__title">Producto cercano</h3>
            <p>
              Carne, verdura y pan vienen de productores que visitamos
              cada temporada. Lo que sirve la tierra, sirve la mesa.
            </p>
          </div>
          <div class="pillar" v-reveal="{ variant: 'up', delay: 280 }">
            <span class="pillar__num">03</span>
            <h3 class="pillar__title">Hospitalidad real</h3>
            <p>
              No hay clientes, hay invitados. Aquí cuidamos del que cruza
              la puerta como si entrara a comer a nuestra casa.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="cta__inner" v-reveal="{ variant: 'up' }">
        <h2 class="cta__title">¿Vienes a probarlo?</h2>
        <p class="cta__desc">
          La mesa está puesta. Solo falta tu silla.
        </p>
        <div class="cta__actions">
          <RouterLink to="/contacto" class="cta__btn cta__btn--primary">Contacto</RouterLink>
          <RouterLink to="/menu" class="cta__btn cta__btn--ghost">Ver la carta</RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'


const heroImages = [
  'https://www.elnacionalbcn.com/wp-content/uploads/2023/02/La-Braseria-1.webp',
  'https://cdn.prod.website-files.com/6423e8cf97045d0ac6e9ffb9/6424175f082082363327116c_63ea1ddf2e1e6be3ad84265d_personal-en-un-restaurante.webp'
]

const heroButtons = []
</script>

<style scoped>
.nosotros {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  background:
    radial-gradient(
      ellipse at 10% 80%,
      rgba(190, 108, 0, 0.18) 0%,
      transparent 40%
    );
}



section {
  position: relative;
  overflow: hidden;
}

.story,
.values,
.cta {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}

.story {
  background: var(--color-hueso);
  padding: 50px 48px;
  border-radius: var(--radius-md);
  margin-bottom: 32px;
}

.story__inner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 80px;
  align-items: start;
  
}

.story__text {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.story__kicker {
  font-family: var(--font-body);
  font-size: 14px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--color-fuego);
}

.story__title {
  font-family: var(--font-display);
  font-size: clamp(34px, 4vw, 50px);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-brasa);
  text-transform: uppercase;
  letter-spacing: 0.01em;
  margin-bottom: 8px;
}

.story__text p {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.8;
  color: rgba(14, 14, 14, 0.72);
  max-width: 540px;
}

.story__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.stat {
  background: var(--color-brasa);
  border-radius: var(--radius-md);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid var(--color-line);
  transition: transform var(--transition-base), border-color var(--transition-base);
}

.stat:hover {
  transform: translateY(-4px);
  border-color: var(--color-llama);
}

.stat__num {
  font-family: var(--font-display);
  font-size: 44px;
  font-weight: 800;
  color: var(--color-llama);
  line-height: 1;
}

.stat__label {
  font-family: var(--font-body);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.values {
  background: var(--color-monte);
  padding: 50px 48px;
  border-radius: var(--radius-md);
  margin-bottom: 32px;
}

.values__sun {
  position: absolute;
  top: 50%;
  right: -100px;
  transform: translateY(-50%);
  width: 520px;
  height: 520px;
  background-image: url('../assets/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
  opacity: 0.07;
  filter: brightness(0) saturate(100%) invert(78%) sepia(50%) saturate(600%) hue-rotate(3deg) brightness(95%);
  pointer-events: none;
  z-index: 0;
}

.values__inner {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  
}

.values__head {
  margin-bottom: 60px;
  max-width: 720px;
}

.values__kicker {
  display: block;
  font-family: var(--font-body);
  font-size: 12px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--color-llama);
  margin-bottom: 14px;
}

.values__title {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 50px);
  font-weight: 800;
  color: var(--color-hueso);
  text-transform: uppercase;
  letter-spacing: 0.01em;
  line-height: 1.1;
}

.values__title-accent {
  color: var(--color-llama);
  font-style: italic;
}

.values__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.pillar {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 32px 28px;
  background: rgba(14, 14, 14, 0.25);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  backdrop-filter: blur(4px);
  transition: transform var(--transition-base), border-color var(--transition-base);
}

.pillar:hover {
  transform: translateY(-4px);
  border-color: var(--color-llama);
}

.pillar__num {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 800;
  color: var(--color-fuego);
  line-height: 1;
}

.pillar__title {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: var(--color-hueso);
  text-transform: uppercase;
  letter-spacing: 0.01em;
}

.pillar p {
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-muted);
}

.cta {
  background: var(--color-fuego);
  padding: 90px 48px;
  text-align: center;
  border-radius: var(--radius-md) var(--radius-md) 0px 0px;
}

.cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 50% 50%, rgba(217, 164, 65, 0.18) 0%, transparent 60%);
  pointer-events: none;
}

.cta__inner {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
}

.cta__title {
  font-family: var(--font-display);
  font-size: clamp(34px, 4vw, 52px);
  font-weight: 800;
  color: var(--color-hueso);
  text-transform: uppercase;
  letter-spacing: 0.01em;
  margin-bottom: 14px;
}

.cta__desc {
  font-family: var(--font-accent);
  font-style: italic;
  font-size: clamp(18px, 2.5vw, 24px);
  color: var(--color-hueso);
  opacity: 0.9;
  margin-bottom: 32px;
}

.cta__actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta__btn {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 14px 30px;
  border-radius: var(--radius-sm);
  transition:
    background var(--transition-base),
    border-color var(--transition-base),
    color var(--transition-base),
    transform var(--transition-fast);
}

.cta__btn--primary {
  background: var(--color-hueso);
  color: var(--color-fuego);
  border: 1px solid var(--color-hueso);
}

.cta__btn--primary:hover {
  background: transparent;
  color: var(--color-hueso);
  transform: translateY(-1px);
}

.cta__btn--ghost {
  background: transparent;
  color: var(--color-hueso);
  border: 1px solid var(--color-hueso);
}

.cta__btn--ghost:hover {
  background: var(--color-hueso);
  color: var(--color-fuego);
  transform: translateY(-1px);
}

@media (max-width: 900px) {
  
  .story {
    padding: 60px 20px;
    border-radius: 0px;
    margin-bottom: 0;
  }

  .story__inner {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0;
  }

  .stat {
    padding: 22px 18px;
  }

  .stat__num {
    font-size: 36px;
  }

  .values {
    padding: 60px 20px;
    border-radius: 0px;
    margin-bottom: 0;
  }

  .values__inner {
    padding: 0;
  }

  .values__head {
    margin-bottom: 36px;
  }

  .values__grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .values__sun {
    width: 360px;
    height: 360px;
    right: -120px;
  }

  .cta {
    padding: 60px 20px;
    border-radius: 0px;
  }
}
</style>
