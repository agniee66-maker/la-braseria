<template>
    <div class="schedule-map-container">
        <MapBlock />
        <Schedule />
    </div>
</template>

<script setup>
import MapBlock from '../components/MapBlock.vue'
import Schedule from '../components/Schedule.vue'
</script>


<style scoped>
.schedule-map-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: stretch;
  justify-content: center;
  gap: 32px;
  padding: 60px;
  background-color: #F5F0E8;
}
</style>