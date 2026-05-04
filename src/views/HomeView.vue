<template>
    <div class="homePage">
        <Hero />

        <!-- ============ BLOQUE VERDE (quote + nav) ============ -->
        <section class="grove">
          <div class="grove__glow" aria-hidden="true"></div>

          <div class="grove__inner">
            <!-- Frase -->
            <div class="quote" v-reveal="{ variant: 'right' }">
              <h2 class="quote__text">
                Del fuego <span class="quote__text-accent">a tu mesa.</span>
              </h2>
            </div>

            <!-- Navegación -->
            <NavigationGrid :cards="navCards" />
          </div>
          
          <AboutSection />

          <ScheduleMapContainer />
        </section>

        

        
    </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import NavigationGrid from '../components/NavigationGrid.vue'
import ScheduleMapContainer from '@/components/ScheduleMapContainer.vue'
import AboutSection from '@/components/AboutSection.vue'

const navCards = [
  { title: "La Carta", subtitle: "Nuestros platos", image: "https://cdn.thefork.com/tf-lab/image/upload/w_500,h_500,c_fill,q_auto,f_auto,g_auto:subject/restaurant/f9f4983f-9eee-4af4-8692-ba35bb0adfb8/556b2087-56ef-4db7-a6b1-66bfe11b5440.jpg", route: "/menu" },
  { title: "Reservas", subtitle: "Reserva tu mesa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Bu86XAU4eqIXPV2o03eqh26vwgR-hlr1pA&s", route: "/reservas" },
  { title: "Sobre Nosotros", subtitle: "Nuestra historia", image: "https://todofp.es/.imaging/mte/todofp-theme/ficha-superior-imagen/dam/todofp/que-estudiar/fotos-ciclos/hosteleria-y-turismo/t-cnico-en-servicios-en-restauraci-n/jcr:content/t-cnico-en-servicios-en-restauraci-n.jpg", route: "/nosotros" }
]
</script>

<style scoped>
.homePage {
  display: flex;
  flex-direction: column;
}

/* ===========================================================
   GROVE — sección verde compartida (quote + nav-grid)
   =========================================================== */
.grove {
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: var(--bg-primary);      /* MONTE */
  overflow: hidden;
  isolation: isolate;
}

.grove::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  background:
    radial-gradient(
      ellipse at 10% 70%,
      rgba(207, 191, 40, 0.18) 0%,
      transparent 55%
    );
  z-index: 0;
  pointer-events: none;
}

/* Radial cálido */
.grove__glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 50% 70%,
      rgba(217, 164, 65, 0.10) 0%,
      rgba(182, 58, 43, 0.06) 40%,
      transparent 70%
    );
  z-index: 0;
  pointer-events: none;
}

/* Contenedor interno — respeta los 1280px */
.grove__inner {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 48px 60px;
}

/* ===========================================================
   QUOTE — frase "del fuego a tu mesa"
   =========================================================== */
.quote {
  text-align: right;
  padding: 8px 0 40px;
}

.quote__kicker {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--color-llama);
  margin-bottom: 12px;
}

.quote__text {
  font-family: var(--font-accent);    
  font-style: italic;
  font-weight: 500;
  font-size: clamp(36px, 4.5vw, 56px);
  line-height: 1.05;
  color: var(--color-hueso);
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.quote__text-accent {
  color: var(--color-llama);
}


/* ==============
   RESPONSIVE
   ============== */
@media (max-width: 720px) {
  .grove__inner {
    padding: 32px 32px 56px;
  }

  .quote__text {
    white-space: normal;
  }

  .grove__sun {
    width: 520px;
    height: 520px;
  }
}
</style>
