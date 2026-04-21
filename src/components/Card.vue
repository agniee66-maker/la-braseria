<template>
    <div class="card" :style="{ backgroundImage: `url(${card.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
        
        <div class="card-spacer"></div>

        <div class="card-content">
            <div class="card-content__text">
                <span v-if="card.tag" class="card_badge" :style="{ background: card.tag.color }">
                    {{ card.tag.label }}
                </span>
                <h2 class="card_header">{{ card.name }}</h2>
                <p class="card_description">{{ card.description }}</p>
            </div>
            

            <ul class="card-content__allergens">
                <li  v-for="allergen in card.allergens" :key="allergen.id">
                    <img class="card-content__allergen__icon" :src="allergen.icon" :alt="allergen.name"  />
                </li>
            </ul>
                 
        </div>

    </div>

</template>


<script>
export default {
  name: 'DishCard',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
} 
</script>


<style scoped>
    .card{
        width: 100%;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card-spacer{
        flex: 1;
    }

    .card-content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;   
        
        padding: 20px 40px 20px 40px;
        background: rgba(0, 0, 0, 0.4);
    }

    .card-content__text{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    
    .card_badge{
        color: #fff;
        font-size: 16px;
        font-weight: 450;
        padding: 8px 12px;
        width: fit-content;
        margin-bottom: 10px;
        border-radius: 8px;
    }

    .card_header{
        color: #ffffff;
        font-size: 30px;
        font-weight: 500;
        
    }

    .card_description{
        color: #fff5e7;
        padding-top: 10px;
        font-size: 16px;
    }

    .card-content__allergens{
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 10px;
    }

    .card-content__allergen__icon{
        height: 50px;
    }
</style>