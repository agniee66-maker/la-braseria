<template>
    <div class="schedule-map-container">
        <div class="schedule-map-inner">
            <div class="schedule-map__map" v-reveal="{ variant: 'left' }">
                <MapBlock />
            </div>
            <div class="schedule-map__schedule" v-reveal="{ variant: 'right', delay: 150 }">
                <Schedule />
            </div>
        </div>
    </div>
</template>

<script setup>
import MapBlock from '../components/MapBlock.vue'
import Schedule from '../components/Schedule.vue'
</script>


<style scoped>
.schedule-map-inner {
  max-width: 1280px;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: stretch;
  justify-content: center;
  gap: 10px;
  padding: 60px 48px;
}

.schedule-map__map,
.schedule-map__schedule {
  display: flex;
  min-height: 360px;
}

.schedule-map__map > *,
.schedule-map__schedule > * {
  width: 100%;
}

@media (max-width: 820px) {
  .schedule-map-inner {
    grid-template-columns: 1fr;
    gap: 0px;
    padding: 0px;
    border-radius: 0px;
  }

  .schedule-map__schedule {
    order: 1;
    min-height: auto;
  }

  .schedule-map__map {
    order: 2;
    min-height: 280px;
  }
}
</style>
