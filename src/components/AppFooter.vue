<template>
  <footer class="footer">
    <div class="footer__sun" aria-hidden="true"></div>
    <div class="footer__glow" aria-hidden="true"></div>

    <div class="footer__inner">
      <div class="footer__brand">
        <h1 class="footer__logo">La Brasería</h1>
        <span class="footer__tag">Fuego · Sabor · Amigos</span>
      </div>

      <ul class="footer__contact">
        <li>Avinguda del Mar 12, Reus</li>
        <li>Tel. 977 000 000</li>
        <li>hola@labraseria.com</li>
      </ul>

      <span class="footer__copy">© 2026 Agniee-Maker</span>
    </div>
  </footer>
</template>

<style scoped>
/* ===========================================================
   FOOTER — inverso del header
   =========================================================== */
.footer {
  position: relative;
  width: 100%;
  background: var(--color-fuego);
  color: var(--color-hueso);
  overflow: hidden;
  isolation: isolate;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}

/* Sol PNG decorativo a la derecha, en HUESO marmol */
.footer__sun {
  position: absolute;
  top: 50%;
  right: -60px;
  transform: translateY(-50%);
  width: 280px;
  height: 280px;
  background-image: url('../assets/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.18;
  /* Tintado a blanco marmol (HUESO) */
  filter: brightness(0) invert(1);
  z-index: 0;
  pointer-events: none;
}

/* Calentón radial para dar profundidad */
.footer__glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 10% 50%,
      rgba(217, 164, 65, 0.18) 0%,
      transparent 55%
    );
  z-index: 0;
  pointer-events: none;
}

/* ---------- CONTENIDO ---------- */
.footer__inner {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

/* ---------- BRAND ---------- */
.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer__logo {
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 700;
  color: var(--color-hueso);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  line-height: 1;
}

.footer__tag {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--color-llama);
}

/* ---------- CONTACTO ---------- */
.footer__contact {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer__contact li {
  font-family: var(--font-body);
  color: var(--color-hueso);
  font-size: 13px;
  font-weight: 400;
  opacity: 0.92;
}

/* ---------- COPY ---------- */
.footer__copy {
  font-family: var(--font-body);
  color: var(--color-hueso);
  font-size: 12px;
  letter-spacing: 0.06em;
  opacity: 0.8;
}

/* ---------- RESPONSIVE ---------- */
@media (max-width: 720px) {
  .footer__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 32px 32px;
  }

  .footer__sun {
    width: 200px;
    height: 200px;
    right: -60px;
    opacity: 0.14;
  }
}
</style>
