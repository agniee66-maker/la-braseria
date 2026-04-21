<template>
  <div class="buttons-container">
    <button class="btn btn--menu">Ver la carta</button>
    <button class="btn btn--reserva">Reservar mesa</button>
  </div>
</template>

<style scoped>
.buttons-container {
  background: #fff5e7;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 60px 40px;
}

.btn {
  padding: 16px 35px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  border: none;
}

.btn--menu {
  background: #E85D26;
  color: #fff;
}

.btn--reserva {
  background: transparent;
  color: #2C2A1E;
  border: 1.5px solid #2C2A1E;
}

.btn--reserva:hover {
  background: #2C2A1E;
  color: #fff;
}

.btn--menu:hover {
  background: #E85D26;
  opacity: 0.8;
}
</style>