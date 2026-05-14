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
        <li>agniee66@gmail.com</li>
        <li>Tel. 900 000 000</li>
        <li>Creado y diseñado por Agniee-Maker</li>
      </ul>

      <span class="footer__copy">© 2026 Agniee-Maker</span>
    </div>
  </footer>
</template>

<style scoped>
/* ==============================
   FOOTER — inverso del header
   ============================== */
.footer {
  position: relative;
  width: 100%;
  background: var(--color-fuego);
  color: var(--color-hueso);
  overflow: hidden;
  isolation: isolate;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}

/* Sol PNG decorativo a la derecha, en marmol */
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
  /* Tintado a blanco marmol */
  filter: brightness(0) invert(1);
  z-index: 0;
  pointer-events: none;
}

/* Amarillo radial detras del logo */
.footer__glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 10% 50%,
      rgba(216, 167, 76, 0.18) 0%,
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
@media (max-width: 820px) {
  .footer__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 28px 25px;
  }

  .footer__logo {
    font-size: 22px;
  }

  .footer__tag {
    font-size: 10px;
  }

  .footer__sun {
    width: 180px;
    height: 180px;
    right: -30px;
    opacity: 0.12;
  }
}
</style>
