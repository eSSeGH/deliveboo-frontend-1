<template>
    <!-- HERO RESTAURANT -->
    <div class="image-container">
        <img class="restaurant-img" :src="getImageUrl(restaurant.img)" alt="">
    </div>
    <!-- /HERO RESTAURANT -->

    <!-- RESTAURANT INFOS -->
    <div class="container mx-auto restaurant-box">
        <div class="d-flex justify-content-between align-items-center box-bg shadow">
            <div class="container p-3">
                <h1 class="mb-3 restaurant-name">{{ restaurant.name }}</h1>
                <p class="restaurant-address d-none d-sm-block">{{ restaurant.address }}</p>
            </div>

            <div class="animation d-none d-sm-block">
                <iframe src="https://embed.lottiefiles.com/animation/99271"></iframe>
            </div>
        </div>
    </div>
    <!-- /RESTAURANT INFOS -->

    <!-- DISHES -->
    <div class="container card-box mx-auto w-100 w-lg-50">
        <div class="d-flex justify-content-center justify-content-md-between justify-content-xl-between flex-wrap row-gap-5">
            <div class="col col-md-6 col-lg-6 col-xl-6 col-xxl-8">

                <ul class="d-flex align-items-center justify-content-center justify-content-xxl-between flex-wrap row-gap-3">

                    <li class="my-card col-12 col-xxl-5 gap-3 d-flex flex-column justify-content-between" v-for="dish in dishes" :key="dish.id">

                        <div class="row justify-content-center justify-content-sm-between gap-2 text-center ">
                            <div class="food-img col-4">
                                <img class="food-thumb" :src="getImageUrl(dish.img)" alt="">
                            </div>

                            <div class="mb-3 col-8 text-center text-sm-start ">
                                <div class="food-title">{{ dish.name }}</div>
                                <div class="food-desc">{{ dish.description }}</div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="d-flex align-items-center flex-sm-row justify-content-between">
                                <p class="d-flex col-8">{{ dish.price }}</p>
                                <div class="d-flex flex-row-reverse col-sm-4">
                                    <FoodButton @click="addFoodToCart(dish)" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-4 flex-{grow|shrink}-0">
                <CartOrder :cart="cart" />
                <div class="test" v-for="dish in cart" :key="dish.id">
                    <p>
                        {{ dish.name }}
                    </p>
                    <p>
                        {{ dish.quantity }}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- /DISHES -->

</template>

<script>
import FoodButton from '../elements/FoodButton.vue'
import CartOrder from '../elements/CartOrder.vue'
import axios from 'axios'
import { counter } from '@fortawesome/fontawesome-svg-core'

    export default {
        components: {
            FoodButton,
            CartOrder,
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
            },
            addFoodToCart(dish) {

                if(this.cart.includes(dish)) {
                    dish.quantity += 1
                } else {
                    dish.quantity = 1
                    this.cart.push(dish)
                }

                console.log(this.cart)
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

                cart: [],
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
    .box-bg {
        background-color: white;
    }
    .shadow {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 9px;
    }
    .restaurant-name {
        font-size: 3rem;
        font-weight: bold;
    }
    .restaurant-address {
        font-size: 1.5rem;
    }
}
.card-box {
    padding: 0rem 2rem 6rem !important;
    .my-card {
       padding: 1.5rem;
       border-radius: 1rem; 
       margin-right: auto;
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
}

</style>