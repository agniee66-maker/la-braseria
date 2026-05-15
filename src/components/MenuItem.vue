<template>
  <article class="menu-item" @click="$emit('select')">
    <img v-if="image" :src="image" :alt="name" class="menu-item__image" />

    <div class="menu-item__content">
      <span v-if="tag" class="menu-item__tag">{{ tag }}</span>

      <div class="menu-item__row">
        <h3 class="menu-item__name">{{ name }}</h3>
      
        <span class="menu-item__price">{{ formattedPrice }}</span>
      </div>

      <p v-if="description" class="menu-item__desc">{{ description }}</p>

      <ul v-if="allergens?.length" class="menu-item__allergens">
        <li
          v-for="a in allergens"
          :key="a"
          class="menu-item__allergen"
        >{{ a }}
        </li>
      </ul>
    </div>
    
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name:        { type: String, required: true },
  description: { type: String, default: '' },
  price:       { type: Number, required: true },
  image:       { type: String, default: '' },
  allergens:   { type: Array,  default: () => [] },
  tag:         { type: String, default: '' }
})

defineEmits(['select'])

const formattedPrice = computed(() => {
  return `${props.price.toFixed(2).replace('.', ',')} €`
})
</script>

<style scoped>
.menu-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 18px 0px;
  border-bottom: 1px solid rgba(14, 14, 14, 0.08);
  cursor: pointer;
}

.menu-item__content {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px 10px;
  
}

.menu-item__image {
  width: 100px;
  height: 150px;
  
  border-radius: var(--radius-md);
  object-fit: cover;
}

.menu-item:hover{
  background-color: rgba(14, 14, 14, 0.04);
  border-radius: var(--radius-md);
}

.menu-item:last-child {
  border-bottom: 0;
}

.menu-item__tag {
  align-self: flex-start;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 550;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-fuego);
  margin-bottom: 2px;
}

.menu-item__row {
  display: flex;
  gap: 5px;
  justify-content: space-between;
}

.menu-item__name {
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 700;
  color: var(--color-brasa);
  line-height: 1.2;
  letter-spacing: 0.005em;
}

.menu-item__price {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  color: var(--color-fuego);
  white-space: nowrap;
}

.menu-item__desc {
  font-family: var(--font-body);
  font-size: 13px;
  line-height: 1.55;
  color: rgba(14, 14, 14, 0.62);
  margin-top: 2px;
  max-width: 95%;
}

.menu-item__allergens {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
}

.menu-item__allergen {
  font-family: var(--font-body);
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: lowercase;
  color: rgba(14, 14, 14, 0.5);
  background: rgba(46, 58, 41, 0.08);
  padding: 3px 9px;
  border-radius: 999px;
}

@media (min-width: 768px) {
  .menu-item {
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 12px;
  padding: 18px 10px;
  border-bottom: 1px solid rgba(14, 14, 14, 0.08);
  cursor: pointer;
  }

  .menu-item__content {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 18px 10px;
  }

  .menu-item__image {
    width: 200px;
   height: 200px;

    border-radius: var(--radius-md);
    object-fit: cover;
  }
  .menu-item {
    padding: 22px 10px;
    gap: 8px;
    border-radius: var(--radius-md);
  }

  .menu-item__name,
  .menu-item__price {
    font-size: 19px;
  }

  .menu-item__desc {
    font-size: 14px;
    max-width: 80%;
  }
}
</style>
