<template>
  <div class="menu-view">
    <header class="menu-view__header">
      <img src="../assets/logo.png" alt="" class="menu-view__sun" aria-hidden="true" />
      <span class="menu-view__kicker">La Brasería</span>
      <h1 class="menu-view__title">Carta</h1>
      <p class="menu-view__hint">Disfruta del fuego en cada plato</p>
    </header>

    <div class="filtros">
      <button class="filtros__btn" @click="categoria = 'entrantes'">Entrantes</button>
      <button class="filtros__btn" @click="categoria = 'principales'">Principales</button>
      <button class="filtros__btn" @click="categoria = 'postres'">Postres</button>
      <button class="filtros__btn" @click="categoria = 'bebidas'">Bebidas</button>
    </div>
  

    <main class="menu-view__main">

      <section class="menu-section">
        <div class="menu-section__head">
          <span class="menu-section__num">
            {{ categorias[categoria].num }}
          </span>
          <h2 class="menu-section__title">
            {{ categorias[categoria].title }}
          </h2>
        </div>

        <div class="menu-section__items">
          <MenuItem
            v-for="item in itemsFiltrados"
            :key="item.name"
            :name="item.name"
            :description="item.description"
            :price="item.price"
            :allergens="item.allergens"
            :tag="item.tag"
          />
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import MenuItem from '../components/MenuItem.vue';


const categoria = ref('entrantes');

const categorias = {
  entrantes: { num: '01', title: 'Entrantes' },
  principales: { num: '02', title: 'Principales' },
  postres: { num: '03', title: 'Postres' },
  bebidas: { num: '04', title: 'Bebidas' }
}

const menu = ref([])

onMounted(async () => {
  const res = await fetch('/data/menuData.json') 
  menu.value = await res.json()
})

const itemsFiltrados = computed(() => {
  return menu.value.filter(item => item.categoria === categoria.value);
})
</script>

<style scoped>
.menu-view {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: var(--color-hueso);
  color: var(--color-brasa);
  min-height: 100vh;
}

.menu-view__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 24px 28px;
  gap: 6px;
  position: relative;
  background: var(--color-hueso);
  border-bottom: 1px solid rgba(14, 14, 14, 0.08);
}

.menu-view__sun {
  width: 56px;
  height: 56px;
  object-fit: contain;
  filter: brightness(0) saturate(100%) invert(38%) sepia(72%) saturate(600%) hue-rotate(340deg) brightness(95%);
}

.filtros{
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-inline: 20px;
  max-width: 500px;
  margin: 0 auto;
}

.filtros__btn{
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--color-fuego);
  background: rgba(182, 58, 43, 0.08);
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
}

.filtros__btn:hover{
  background: rgba(182, 58, 43, 0.16);
  cursor: pointer;
}

.menu-view__kicker {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--color-fuego);
}

.menu-view__title {
  font-family: var(--font-display);
  font-size: 38px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--color-brasa);
  line-height: 1;
  margin: 4px 0 0;
}

.menu-view__hint {
  font-family: var(--font-accent);
  font-style: italic;
  font-size: 14px;
  color: rgba(14, 14, 14, 0.6);
  margin-top: 4px;
}

.menu-view__main {
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 24px 64px;
}

.menu-section + .menu-section {
  margin-top: 40px;
}

.menu-section__head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
}

.menu-section__num {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--color-fuego);
  background: rgba(182, 58, 43, 0.08);
  padding: 4px 8px;
  border-radius: 4px;
}

.menu-section__title {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-brasa);
  letter-spacing: 0.03em;
  white-space: nowrap;
}

.menu-section__line {
  flex: 1;
  height: 1px;
  background: rgba(14, 14, 14, 0.12);
}

.menu-section__items {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .menu-view__header {
    padding: 56px 32px 44px;
  }

  .menu-view__sun {
    width: 72px;
    height: 72px;
  }

  .menu-view__title {
    font-size: 56px;
  }

  .menu-view__hint {
    font-size: 16px;
  }

  .menu-view__main {
    padding: 56px 32px 96px;
  }

  .menu-section + .menu-section {
    margin-top: 56px;
  }

  .menu-section__title {
    font-size: 26px;
  }
}
</style>
