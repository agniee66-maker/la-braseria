<template>
  <div class="map-block">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47891.22185119238!2d2.1262586413481115!3d41.39143312182943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3f86ee6f2fd%3A0x1986853527088f3!2sDon%20Brasa%20Asador%20Argentino!5e0!3m2!1ses!2ses!4v1776626425406!5m2!1ses!2ses"
      class="map-block__iframe"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
</template>

<style scoped>
.map-block {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.map-block__iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

@media (max-width: 820px) {
  .map-block {
    border-radius: 0px;
  }
}

</style>
