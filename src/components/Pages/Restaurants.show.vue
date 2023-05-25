<template>
    <!-- HERO RESTAURANT -->
    <div class="image-container">
        <img class="restaurant-img" :src="restaurant[0].thumb" alt="">
    </div>
    <!-- /HERO RESTAURANT -->

    <!-- RESTAURANT INFOS -->
    <div class="container mx-auto restaurant-box">
        <div class="container p-3 box-bg shadow">
            <h1 class="mb-3">{{ restaurant[0].name }}</h1>
            <p>{{ restaurant[0].address }}</p>
        </div>
    </div>
    <!-- /RESTAURANT INFOS -->

    <!-- DISHES -->
    <div class="container card-box mx-auto">
        <div class="row">
            <div class="col-7">
                <ul class="d-flex align-items-center justify-content-between flex-wrap flex-sm-wrap row-gap-2">

                    <li class="my-card row" v-for="dish in dishes" :key="dish.id">

                        <div class="d-flex align-items-center justify-content-between mb-1">
                            <p class="food-title">{{ dish.name }}</p>
                            <p>{{ dish.price }}</p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between">
                            <p class="food-desc">{{ dish.description }}</p>

                        </div>

                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- /DISHES -->

</template>

<script>
    export default {
        data() {
            return {

                restaurant: [
                    {
                        thumb: "/public/imgs/temporary-img/giapponese.jpg",
                        name: "Yamamia",
                        address: "Via Tokyo 23"
                    }
                ],

                dishes: [
                    {
                        name: "n.4 nigiri salmone",
                        price: "5,00€",
                        description: "molto buoni",
                        thumb: "/public/imgs/temporary-img/nigiri.jpg"
                    },
                    {
                        name: "n.2 nigiri tonno",
                        price: "7,00€",
                        description: "molto buoni",
                        thumb: "/public/imgs/temporary-img/nigiri2.jpg"
                    },
                    {
                        name: "n.5 osomaki al salmone",
                        price: "7,50€",
                        description: "molto buoni",
                        thumb: "/public/imgs/temporary-img/osomaki.jpg"
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../src/styles/main.scss' as *;
@use '../src/styles/partials/resets.scss' as *;

.image-container {
    width: 100%;
    height: 300px;
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
   width: 350px;
   height: 95px;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
</style>