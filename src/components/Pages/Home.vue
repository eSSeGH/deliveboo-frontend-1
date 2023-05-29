<template>
    <!-- HERO SECTION -->
    <section>

        <div class="container-auto pt-5 hero-bg">

            <div class="container-sm mx-auto">

                <div class="row justify-content-center align-items-center">

                    <div class="col d-md-flex justify-content-center d-none frame-box">
                        <iframe src="https://embed.lottiefiles.com/animation/4762"></iframe>
                    </div>

                    <div class="col col-md-6 text-center text-md-start">
                        <div class="d-flex justify-content-center flex-column gap-2 px-3">
                            <h1 class="big-text">The Best Food Delivery</h1>
                            <p>Cibo Italiano, Giapponese, Cinese, Internazionale e molto altro</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </section>

    <div class="container-auto">
        <img class="wave" src="/imgs/waves/header-wave-desktop.svg" alt="">
    </div>
    <!-- HERO SECTION -->

    <!-- CATEGORY SECTION -->

    <section class="container-auto my-space">

        <h2 class="text-center mb-5 px-3">Scegli tra le nostre categorie</h2>

        <div class="d-flex gap-3 flex-wrap justify-content-center align-items-center text-center">
            <div class="my-card col-4 col-sm-3 col-md-2" v-for="category in categories" :key="category.name">
                <div class="category-box" v-on:click="goToAdvancedSearchPage(category)">
                    <img class="category-thumb" :src="getImageUrl(category.img)" alt="">
                    <div class="text-box">
                        {{ category.name }}
                    </div>
                </div>
            </div>
        </div>

    </section>

    <!-- CATEGORY SECTION -->


    <!-- OUTRO TOP WAVE -->
    <section class="container-auto">
        <img class="wave" src="/imgs/waves/outro-wave-desktop.svg" alt="">
    </section>
    <!-- /OUTRO TOP WAVE -->

    <!-- OUTRO SECTION  -->
    <section class="container-auto outro-bg">
        <div class="d-flex justify-content-center aling-items-center flex-wrap row-gap-4">
            <div class="col-12 col-md-6 col-lg-4">

                <div class="d-flex flex-column gap-2 align-items-center">

                    <div class="outro-img-box d-flex justify-content-center">
                        <img class="outro-img-thumb" src="/public/imgs/outro-section-imgs/delivery.svg" alt="">
                    </div>

                    <div class="outro-desc text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, esse.</p>
                    </div>

                </div>

            </div>

            <div class="col-12 col-md-6 col-lg-4">

                <div class="d-flex flex-column gap-2 align-items-center">

                    <div class="outro-img-box d-flex justify-content-center">
                        <img class="outro-img-thumb" src="/public/imgs/outro-section-imgs/restaurants.svg" alt="">
                    </div>

                    <div class="outro-desc text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, esse.</p>
                    </div>

                </div>

            </div>

            <div class="col-12 col-md-12 col-lg-4">

                <div class="d-flex flex-column gap-2 align-items-center">

                    <div class="outro-img-box d-flex justify-content-center">
                        <img class="outro-img-thumb" src="/public/imgs/outro-section-imgs/groceries.svg" alt="">
                    </div>

                    <div class="outro-desc text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, esse.</p>
                    </div>

                </div>

            </div>
        </div>
    </section>
    <!-- /OUTRO SECTION  -->

    <div class="container-auto bg-wave pt-5">
        <img class="wave-bottom" src="/imgs/waves/footer-wave-desktop.svg" alt="">
    </div>
</template>

<script>
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import store from '../../store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            categories: [],
        }
    },
    mounted() {
        this.fetchCategories()
        console.log(this.categories)
    },

    methods: {
        fetchCategories() {

            this.store.selectedCategories = []

            axios.get('http://127.0.0.1:8000/api/restaurants', {
            })
                .then(res => {

                    const results = res.data.results

                    // console.log(results)

                    for (let i = 0; i < results.length; i++) {

                        const singleCategories = results[i].categories

                        // console.log(singleCategories)

                        for (let j = 0; j < singleCategories.length; j++) {

                            const category = singleCategories[j]

                            const categoryLC = category.name.toLowerCase()

                            // console.log(categoryLC)

                            const categoryImg = category.img

                            // console.log(categoryImg)
                            
                            if (!this.categories.filter(value => value.name === categoryLC).length > 0) {

                                this.categories.push({name: categoryLC, img: categoryImg})
                            }
                        }
                    }
                    // console.log(results)
                }).catch(err => {
                    console.log('error')
                })
        },
        goToAdvancedSearchPage(category) {

            this.$router.push('/restaurants')

            category.toLowerCase()
            this.store.selectedCategories.push(category)

            console.log('dopo il reindirizzamento + fetchRestaurantByCategories', this.store.selectedCategories)
        },
        getImageUrl(imagePath) {
            if (imagePath) {
                return `http://127.0.0.1:8000/storage/${imagePath}`
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@use '../src/styles/main.scss' as *;
@use '../src/styles/partials/resets.scss' as *;
@use '../src/styles/partials/colors.scss' as *;

.my-space {
    padding: 5rem 0;
}

.hero-bg {
    background-color: $orange-3;

    .frame-box {
        height: 250px;
    }
}

.big-text {
    font-weight: bold !important;
}

.my-card {
    cursor: pointer;

    .category-box {
        position: relative;
        object-fit: cover;
        object-position: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        border-radius: 10px;

        .category-thumb {
            border-radius: 10px;
            filter: blur(1px);
        }

        .text-box {
            background-color: rgba(0, 0, 0, 0.53);
            position: absolute;
            bottom: 0;
            width: 100%;
            color: white;
            font-weight: bold;
            border-radius: 0 0 10px 10px;
        }
    }

    .category-thumb:hover {
        filter: blur(0px);
    }
}

.outro-bg {
    background-color: #FF850044;
    padding: 5rem 0 10rem;
}

.outro-desc {
    padding: 0 5rem;
}

.bg-wave  {
    background-color: #FF850044;
}
.wave-bottom {
    width: 100%;
}
</style>