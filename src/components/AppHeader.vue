<template>
  <header class="header">
    <div class="header__inner">
      <h1 class="header__logo">La Brasería</h1>
      <nav class="header__nav">
        <a href="#">Carta</a>
        <a href="#">Reservas</a>
        <a href="#">Nosotros</a>
        <a href="#">Contacto</a>
      </nav>
    </div>
    
  </header>
</template>


<style scoped>
.header {
  background: #2b2b23;
  width: 100%;
}

.header__inner{
  max-width: 1280px;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 70px;
}

.header__logo {
  color: #ff6a2e;
  font-size: 24px;
  font-weight: 520;
  letter-spacing: 0.05em;
}

.header__nav {
  display: flex;
  gap: 25px;
}

.header__nav a {
  color: #d1ccc0;
  font-size: 14px;
  text-decoration: none;
  letter-spacing: 0.04em;
}
</style>