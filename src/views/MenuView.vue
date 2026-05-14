<template>
  <div class="menu-view">
    <PageHeader kicker="La Brasería" title="Carta" hint="Disfruta del fuego en cada plato" />

    <div class="filtros">
      <button class="filtros__btn" :class="{ 'filtros__btn--active': categoria === 'entrantes' }" @click="categoria = 'entrantes'">Entrantes</button>
      <button class="filtros__btn" :class="{ 'filtros__btn--active': categoria === 'principales' }" @click="categoria = 'principales'">Principales</button>
      <button class="filtros__btn" :class="{ 'filtros__btn--active': categoria === 'postres' }" @click="categoria = 'postres'">Postres</button>
      <button class="filtros__btn" :class="{ 'filtros__btn--active': categoria === 'bebidas' }" @click="categoria = 'bebidas'">Bebidas</button>
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
            @select="selectedItem = item"
          />
        </div>
      </section>

    </main>

    <MenuItemModal :item="selectedItem" @close="selectedItem = null" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import MenuItem from '../components/MenuItem.vue';
import MenuItemModal from '../components/MenuItemModal.vue';
import PageHeader from '../components/PageHeader.vue';


const categoria = ref('entrantes');
const selectedItem = ref(null);

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


.filtros{
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-inline: 15px;
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
  padding: 6px 10px;
  border-radius: 4px;
  border: none;
}


.filtros__btn--active {
  background: var(--color-fuego);
  color: var(--color-hueso);
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




/* VERSION PARA PANTALLAS GRANDES SECUNDARIO, EL MENU SE VERA MAS EN MOVILES*/

@media (min-width: 768px) {
  .menu-view__main {
    padding: 56px 32px 96px;
  }

  .menu-section + .menu-section {
    margin-top: 56px;
  }

  .menu-section__title {
    font-size: 26px;
  }

  .filtros {
    max-width: 650px;
    padding-inline: 25px;
  }

  .filtros__btn{
    font-size: 13px;
    padding: 8px 14px;
  }

  .filtros__btn:hover {
    background: var(--color-fuego);
    color: var(--color-hueso);
  }
}



</style>
