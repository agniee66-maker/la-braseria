<template>
  <div class="schedule-block">
    <h3 class="schedule-block__title">Horarios</h3>
    <div class="schedule-block__divider"></div>

    <ul class="schedule-block__list">
      <li v-for="item in schedule" :key="item.day" class="schedule-block__item">
        <span class="schedule-block__day">{{ item.day }}</span>
        <span class="schedule-block__hours">{{ item.hours }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const schedule = [
  { day: "Lunes",         hours: "Cerrado" },
  { day: "Martes",        hours: "13:00 — 16:00" },
  { day: "Miércoles",     hours: "13:00 — 16:00" },
  { day: "Jueves",        hours: "13:00 — 16:00 · 20:00 — 23:00" },
  { day: "Viernes",       hours: "13:00 — 16:00 · 20:00 — 23:30" },
  { day: "Sábado",        hours: "13:00 — 16:30 · 20:00 — 23:30" },
  { day: "Domingo",       hours: "13:00 — 16:30" },
]
</script>

<style scoped>
.schedule-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-inline: 30px;
  height: 100%;
}

.schedule-block__title {
  font-family: var(--font-display);
  font-size: 28px;
  color: #2C2A1E;
}

.schedule-block__divider {
  width: 100%;
  height: 2px;
  background: #E85D26;
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
}

.schedule-block__day {
  color: #2C2A1E;
  font-weight: 500;
}

.schedule-block__hours {
  color: #6B6560;
}
</style>