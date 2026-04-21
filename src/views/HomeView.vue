<template>
    <div class="homePage">
        <Carousel />
        <h1 class="frase">del fuego a tu mesa</h1>
    
        <NavigationGrid :cards="navCards" />

        <img class="home__banner" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/96/f6/af/getlstd-property-photo.jpg?w=900&h=500&s=1" alt="Local de La Brasería" />

        <ScheduleMapContainer />
    </div>
    
</template>

<script setup>
import Carousel from '../components/Carousel.vue'; 
import NavigationGrid from '../components/NavigationGrid.vue'
import ScheduleMapContainer from '@/components/ScheduleMapContainer.vue';

const navCards = [
  { title: "La Carta",  subtitle: "Nuestros platos",  image: "https://cdn.thefork.com/tf-lab/image/upload/w_500,h_500,c_fill,q_auto,f_auto,g_auto:subject/restaurant/f9f4983f-9eee-4af4-8692-ba35bb0adfb8/556b2087-56ef-4db7-a6b1-66bfe11b5440.jpg", route: "/carta"    },
  { title: "Reservas",  subtitle: "Reserva tu mesa",  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Bu86XAU4eqIXPV2o03eqh26vwgR-hlr1pA&s", route: "/reservas" },
  { title: "Sobre Nosotros",  subtitle: "Nuestra historia", image: "https://todofp.es/.imaging/mte/todofp-theme/ficha-superior-imagen/dam/todofp/que-estudiar/fotos-ciclos/hosteleria-y-turismo/t-cnico-en-servicios-en-restauraci-n/jcr:content/t-cnico-en-servicios-en-restauraci-n.jpg", route: "/nosotros" }
]

</script>



<style scoped>

.homePage{
    display: flex;
    flex-direction: column;
}

.frase {
  text-align: right;
  font-size: 28px;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  color: #d1ccc0;
  letter-spacing: 0.05em;
  padding: 60px 60px 0 0;
  background: #2b2b23;
}

.home__banner{
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
}

</style>