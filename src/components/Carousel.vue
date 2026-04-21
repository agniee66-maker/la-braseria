<template>
  <div class="carousel">
    <button class="carousel__arrow carousel__arrow--prev" @click="prev">&#8249;</button>
    <Card :card="cards[current]" />
    <button class="carousel__arrow carousel__arrow--next" @click="next">&#8250;</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Card from './Card.vue'

const current = ref(0)
const cards = [
  {
    name: 'Entrecot a la brasa',
    description: 'Delicioso entrecot de vaca a la brasa, acompañado de patatas asadas y salsa chimichurri.',
    image: 'https://terracarnicerias.es/cdn/shop/articles/Entrecot_con_Chimich.jpg?v=1768909262&width=1600',
    allergens: [
        { id: 1, name: 'Mostaza', icon: 'https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F1636%2FPNG%2F512%2Fmustard-amber_109467.png&id=109467&pack_or_individual=pack' },
        { id: 2, name: 'Lactosa', icon: 'https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F1636%2FPNG%2F512%2Fmilk-amber_109466.png&id=109466&pack_or_individual=pack' }
    ],
    tag: {label: 'Especialidad', color: '#E85D26'}
  },
  {
    name: "Pizza Pepperoni",
    description: "Una pizza brutal con base crujiente casera",
    image: "https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg",
    allergens: [
        { id: 2, name: 'Lactosa', icon: 'https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F1636%2FPNG%2F512%2Fmilk-amber_109466.png&id=109466&pack_or_individual=pack' },
        { id: 3, name: 'Huevo', icon: 'https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F1636%2FPNG%2F512%2Feggs-amber_109464.png&id=109464&pack_or_individual=pack' },
        { id: 4, name: 'Gluten', icon:'https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F1636%2FPNG%2F512%2Famber_109461.png&id=109461&pack_or_individual=pack' }
    ],
    tag: {label: 'Popular', color: '#4FC726'}
  },
  {
    name: "Costillas BBQ",
    description: "Costillas de cerdo cocinadas a fuego lento con salsa barbacoa casera",
    image: "https://i.ytimg.com/vi/pszaHtAmqBU/maxresdefault.jpg",
    allergens: [
        { id: 1, name: 'Mostaza', icon: 'https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F1636%2FPNG%2F512%2Fmustard-amber_109467.png&id=109467&pack_or_individual=pack' },
        { id: 2, name: 'Lactosa', icon: 'https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F1636%2FPNG%2F512%2Fmilk-amber_109466.png&id=109466&pack_or_individual=pack' }
    ],
    tag: {label: 'Especialidad', color: '#E85D26'}
  }
]

const next = () => current.value = (current.value + 1) % cards.length
const prev = () => current.value = (current.value - 1 + cards.length) % cards.length

let interval
onMounted(() => { interval = setInterval(next, 6000) })
onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.carousel__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(28,28,25,0.7);
  border: 0.5px solid rgba(232,93,38,0.3);
  color: #E85D26;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel__arrow--prev { left: 16px; }
.carousel__arrow--next { right: 16px; }
</style>