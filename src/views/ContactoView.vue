<template>
  <div class="contacto">

    <PageHeader
      kicker="La Brasería"
      title="Contacto"
      hint="Estamos aquí para atenderte"
    />

    <main class="contacto__main">


      <div class="contacto__social" v-reveal="{ variant: 'left', delay: 50 }">
            <a class="social-btn" href="https://instagram.com/fake_nismo" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              Instagram
            </a>
            <a class="social-btn" href="https://facebook.com/labraseriabcn" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Facebook
            </a>
            <a class="social-btn" href="mailto:agniee66@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              agniee66@gmail.com
            </a>
      </div>



      <div class="contacto__grid">

        <div class="contacto__info">
          
          <div class="info-card" v-reveal="{ variant: 'up', delay: 200 }">
            <span class="info-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.08 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 18z"/></svg>
            </span>
            <div>
              <p class="info-card__label">Teléfono</p>
              <a class="info-card__value" href="tel:+34932456789">+34 900 000 000</a>
            </div>
          </div>

          <div class="info-card" v-reveal="{ variant: 'up', delay: 400 }">
            <span class="info-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <div>
              <p class="info-card__label">Dirección</p>
              <p class="info-card__value">Creado y diseñado por<br>Agniee-Maker 2026</p>
            </div>
          </div>

          <div class="info-card" v-reveal="{ variant: 'up', delay: 600 }">
            <span class="info-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </span>
            <div>
              <p class="info-card__label">Horario</p>
              <ul class="schedule-block__list">
                <li v-for="item in schedule" :key="item.day" class="schedule-block__item">
              <span class="schedule-block__day">{{ item.day }}</span>
              <span class="schedule-block__hours">{{ item.hours }}</span>
      </li>
    </ul>
            </div>
          </div>

          
        </div>

        <div class="contacto__map" v-reveal="{ variant: 'right', delay: 150 }">
          <MapBlock />
        </div>

      </div>
    </main>

  </div>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue'
import MapBlock from '../components/MapBlock.vue'
import { ref, onMounted } from 'vue';

const schedule = ref([])

onMounted(async () => {
  const res = await fetch('/data/schedule.json') 
  schedule.value = await res.json()
})

</script>

<style scoped>
.contacto {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: var(--bg-primary);
  color: var(--color-hueso);
  min-height: 100vh;
}

.contacto__main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 50px 48px 96px;
}

.contacto__grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 64px;
  align-items: start;
}

.contacto__info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 28px 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-base), transform var(--transition-base);
}

.info-card:hover {
  border-color: var(--color-fuego);
  transform: translateY(-3px);
}

.info-card__icon {
  color: var(--color-fuego);
  flex-shrink: 0;
  margin-top: 3px;
}

.info-card__label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.info-card__value {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  color: var(--color-hueso);
  line-height: 1.45;
  text-decoration: none;
  display: block;
  transition: color var(--transition-fast);
}

a.info-card__value:hover {
  color: var(--color-llama);
}

.contacto__social {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
  margin-top: 8px;
  margin-bottom: 50px;
}

.social-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-hueso);
  padding: 13px 20px;
  border: 1px solid var(--color-line-strong);
  border-radius: var(--radius-sm);
  transition:
    background var(--transition-base),
    border-color var(--transition-base),
    color var(--transition-base),
    transform var(--transition-fast);
}

.social-btn:hover {
  background: var(--color-fuego);
  border-color: var(--color-fuego);
  transform: translateY(-2px);
}

.contacto__map {
  height: 560px;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-line);
}

.schedule-block__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.schedule-block__item {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding-bottom: 12px;
  border-bottom: 0.5px solid #D9D4C8;
  gap: 20px;
}

.schedule-block__day {
  color: var(--text-light);
  font-weight: 500;
}

.schedule-block__hours {
  color: var(--text-muted);
}

@media (max-width: 900px) {
  .contacto__main {
    padding: 40px 20px 64px;
  }

  .contacto__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .contacto__map {
    height: 300px;
  }

  .info-card {
    padding: 22px 18px;
  }

  .info-card__value {
    font-size: 17px;
  }
}
</style>
