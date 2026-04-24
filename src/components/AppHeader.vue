<template>
  <header class="header">
    <div class="header__inner">

      <div class="header__brand">
        <img src="../assets/logo.png" alt="Logo La Brasería" class="header__logo-img" />
        <span class="header__logo-text">La Brasería</span>
      </div>

      <nav class="header__nav">
        <a href="#">Home</a>
        <a href="#">Menú</a>
        <a href="#">Nosotros</a>
        <a href="#">Contacto</a>
        <a href="#reservar" class="header__cta">Reservar</a>
      </nav>

    </div>
  </header>
</template>


<style scoped>
.header {
  background: var(--color-brasa);
  width: 100%;
  border-bottom: 1px solid var(--color-line);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header__inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 100px;
}

/* BRAND */
.header__brand {
  display: flex;
  align-items: center;
  gap: 0px;
  text-decoration: none;
}

.header__logo-img {
  width: 95px;
  height: 95px;
  object-fit: cover;
  /* Filtro para teñir el logo en color FUEGO (#B63A2B) */
  filter: brightness(0) saturate(100%) invert(38%) sepia(72%) saturate(600%) hue-rotate(340deg) brightness(95%);
}

.header__logo-text {
  font-family: var(--font-display);
  font-size: 35px;
  font-weight: 700;
  color: var(--color-hueso);
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

/* NAV */
.header__nav {
  display: flex;
  align-items: center;
  gap: 36px;
}

.header__nav a {
  font-family: var(--font-body);
  color: var(--text-muted);
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  position: relative;
  transition: color var(--transition-fast);
}

.header__nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-fuego);
  transition: width var(--transition-base);
}

.header__nav a:hover {
  color: var(--color-fuego);
}

.header__nav a:hover::after {
  width: 100%;
}

.header__cta {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-hueso);
  background: var(--color-fuego);
  border: 1px solid var(--color-fuego);
  border-radius: var(--radius-sm);
  padding: 11px 24px;
  transition:
    background var(--transition-base),
    border-color var(--transition-base),
    transform var(--transition-fast);
}

.header__cta:hover {
  background: var(--color-fuego-hover);
  border-color: var(--color-fuego-hover);
  transform: translateY(-1px);
}
</style>
