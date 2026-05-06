<template>
  <Teleport to="body">
    <transition name="modal">
      <div v-if="item" class="modal" @click.self="close">
        <div class="modal__panel" role="dialog" aria-modal="true">
          <button class="modal__close" @click="close" aria-label="Cerrar">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>

          <div class="modal__media">
            <img :src="item.image" :alt="item.name" />
            <span v-if="item.tag" class="modal__tag">{{ item.tag }}</span>
          </div>

          <div class="modal__content">
            <h2 class="modal__name">{{ item.name }}</h2>

            <p v-if="item.longDescription" class="modal__long">{{ item.longDescription }}</p>
            <p v-else-if="item.description" class="modal__long">{{ item.description }}</p>

            <div class="modal__meta">
              <ul v-if="item.allergens?.length" class="modal__allergens">
                <li v-for="a in item.allergens" :key="a">{{ a }}</li>
              </ul>
              <span v-else></span>
              <span class="modal__price">{{ formattedPrice }}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { computed, watch, onUnmounted } from 'vue'

const props = defineProps({
  item: { type: Object, default: null }
})

const emit = defineEmits(['close'])

const close = () => emit('close')

const formattedPrice = computed(() => {
  if (!props.item) return ''
  return `${props.item.price.toFixed(2).replace('.', ',')} €`
})

const handleKey = (e) => {
  if (e.key === 'Escape' && props.item) close()
}

watch(() => props.item, (val) => {
  if (val) {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleKey)
    document.body.style.overflow = ''
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  background: rgba(14, 14, 14, 0.55);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.modal__panel {
  background: var(--color-hueso);
  border-radius: var(--radius-md);
  max-width: 820px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55);
}

.modal__close {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 0;
  background: rgba(14, 14, 14, 0.6);
  color: var(--color-hueso);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background var(--transition-base),
    transform var(--transition-fast);
}

.modal__close:hover {
  background: var(--color-fuego);
  transform: rotate(90deg);
}

.modal__media {
  position: relative;
  min-height: 360px;
  background: var(--color-brasa-soft);
}

.modal__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  max-height: 400px;
}

.modal__tag {
  position: absolute;
  top: 16px;
  left: 16px;
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-hueso);
  background: var(--color-fuego);
  padding: 6px 12px;
  border-radius: var(--radius-sm);
}

.modal__content {
  padding: 36px 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
}

.modal__name {
  font-family: var(--font-display);
  font-size: clamp(26px, 3vw, 32px);
  font-weight: 800;
  color: var(--color-brasa);
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding-right: 40px;
}

.modal__long {
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.75;
  color: rgba(14, 14, 14, 0.72);
}

.modal__meta {
  margin-top: auto;
  padding-top: 18px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid rgba(14, 14, 14, 0.1);
}

.modal__allergens {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.modal__allergens li {
  font-family: var(--font-body);
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: lowercase;
  color: rgba(14, 14, 14, 0.55);
  background: rgba(46, 58, 41, 0.10);
  padding: 4px 10px;
  border-radius: 999px;
}

.modal__price {
  font-family: var(--font-display);
  font-size: clamp(24px, 3vw, 30px);
  font-weight: 800;
  color: var(--color-fuego);
  white-space: nowrap;
  line-height: 1;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.28s ease;
}

.modal-enter-active .modal__panel,
.modal-leave-active .modal__panel {
  transition:
    transform 0.32s cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 0.28s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal__panel,
.modal-leave-to .modal__panel {
  opacity: 0;
  transform: translateY(24px) scale(0.96);
}

@media (max-width: 720px) {
  .modal {
    padding: 0;
    align-items: center;
  }

  .modal__panel {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    max-height: 92vh;
    border-radius: var(--radius-md);
  }

  .modal__media {
    min-height: 240px;
    height: 240px;
  }

  .modal__content {
    padding: 24px 22px 22px;
  }

  .modal-enter-from .modal__panel,
  .modal-leave-to .modal__panel {
    transform: translateY(40px) scale(1);
  }
}
</style>
