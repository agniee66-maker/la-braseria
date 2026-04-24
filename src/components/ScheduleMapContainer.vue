<template>
    <div class="schedule-map-container">
        <div class="schedule-map-inner">
            <MapBlock />
            <Schedule />
        </div>
    </div>
</template>

<script setup>
import MapBlock from '../components/MapBlock.vue'
import Schedule from '../components/Schedule.vue'
</script>


<style scoped>
.schedule-map-container {
}

.schedule-map-inner {
  max-width: 1280px;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: stretch;
  justify-content: center;
  gap: 32px;
  padding: 60px 48px;
}
</style>