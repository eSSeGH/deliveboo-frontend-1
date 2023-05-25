<template>
    <!-- HERO RESTAURANT -->
    <div class="image-container">
        <img class="restaurant-img" :src="getImageUrl(restaurant.img)" alt="">
    </div>
    <!-- /HERO RESTAURANT -->

    <!-- RESTAURANT INFOS -->
    <div class="container mx-auto restaurant-box">
        <div class="container p-3 box-bg shadow">
            <h1 class="mb-3">{{ restaurant.name }}</h1>
            <p>{{ restaurant.address }}</p>
        </div>
    </div>
    <!-- /RESTAURANT INFOS -->

    <!-- DISHES -->
    <div class="container card-box mx-auto">
        <div class="row justify-content-center justify-content-lg-between">
            <div class="col col-sm-8">

                <ul class="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap flex-sm-wrap row-gap-2">

                    <li class="my-card gap-3 d-flex flex-column justify-content-between" v-for="dish in dishes" :key="dish.id">

                        <div class="row justify-content-between">
                            <div class="food-img col-4 d-none d-md-block">
                                <img class="food-thumb" :src="getImageUrl(dish.img)" alt="">
                            </div>

                            <div class="mb-3 col-8">
                                <p class="food-title col-10">{{ dish.name }}</p>
                                <p class="food-desc d-none d-sm-block">{{ dish.description }}</p>
                            </div>
                        </div>

                        <div class="row">
    
                            <div class="d-flex align-items-center flex-sm-row justify-content-between">
                                <p class="d-flex col-8">{{ dish.price }}</p>
                                <div class="d-flex flex-row-reverse col-sm-4">
                                    <FoodButton />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- /DISHES -->

</template>

<script>
import FoodButton from '../elements/FoodButton.vue'
import axios from 'axios'

    export default {
        components: {
            FoodButton,
        },

        methods: {
            fetchRestaurantBySlug(){

                const slug = this.$route.params.slug

                axios.get(`http://127.0.0.1:8000/api/restaurants/${slug}`)
                .then(res=> {

                    // console.log(res)

                    this.restaurant = res.data.results

                    this.dishes = this.restaurant.dishes
                })
            },
            getImageUrl(imagePath) {
                return `http://127.0.0.1:8000/storage/${imagePath}`
            }
        },

        mounted() {
            this.fetchRestaurantBySlug()
            // console.log(this.dishes)
        },

        data() {
            return {

                restaurant: [],

                dishes: [],
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../src/styles/main.scss' as *;
@use '../src/styles/partials/resets.scss' as *;

.image-container {
    width: 100%;
    height: 420px;
    position: relative;
    top: -90px;
    left: 0;
    filter: blur(5px);
    .restaurant-img  {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}

.restaurant-box {
    padding: 0rem 2rem 6rem !important;
    margin-top: -150px;
    position: relative;
    z-index: 1;
}

.box-bg {
    background-color: white;
}

.shadow {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 9px;
}

.card-box {
    padding: 0rem 2rem 6rem !important;
}

.my-card {
   padding: 1.5rem;
   border-radius: 1rem; 
   width: 400px;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

.food-title {
    font-size: 1.125rem;
    font-weight: bold;
}
.food-desc {
    font-size: 0.875rem;
}

.food-img {
    width: 80px;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    border-radius: 50%;

    .food-thumb {
        aspect-ratio: 1;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
    }
}
</style>