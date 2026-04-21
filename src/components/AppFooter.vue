<template>
  <footer class="footer">
    <div class="footer__inner">
      <h1 class="footer__logo">La Brasería</h1>

      <ul class="footer__contact">
        <li>Avinguda del Mar 12, Reus</li>
        <li>Tel. 977 000 000</li>
      </ul>
      <span class="footer__copy">© 2026</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #2b2b23;
  width: 100%;
}

.footer__inner{
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 40px;
  
}

.footer__logo {
  color: #ff6a2e;
  font-size: 16px;
  font-weight: 500;
}

.footer__contact {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

.footer__contact li,
.footer__copy {
  color: #d1ccc0;
  font-size: 12px;
}
</style>