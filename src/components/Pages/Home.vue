<template>
    <!-- HERO SECTION -->
    <section>

        <div class="container-auto pt-5 hero-bg">

            <div class="container-sm mx-auto">

                <div class="row justify-content-center">
    
                    <div class="col-6 d-md-flex flex-row-reverse d-none">
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

        <h2 class="text-center mb-5">Scegli tra le nostre categorie</h2>

        <div class="d-flex gap-3 flex-wrap justify-content-center align-items-center text-center">
            <div class="my-card col-4 col-sm-3 col-md-2" v-for="category in categories" :key="category.name">
                <div class="category-box">
                    <img class="category-thumb" src="/public/imgs/temporary-img/giapponese.jpg" alt="">
                    <div class="text-box">
                        {{ category }}
                    </div>
                </div>
            </div>
        </div>

    </section>

    <!-- CATEGORY SECTION -->
</template>

<script>
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
            // console.log(this.categories)
        },  
        
        methods: {
            fetchCategories(){
                axios.get('http://127.0.0.1:8000/api/restaurants', {
                })
                .then(res=> {

                    const results = res.data.results

                    for (let i = 0; i < results.length; i++) {

                        const singleCategories = results[i].categories

                        // console.log(singleCategories)

                        for (let j = 0; j < singleCategories.length; j++) {

                            const category = singleCategories[j]

                            // console.log(category.name)

                            if (!this.categories.includes(category.name)) {

                                this.categories.push(category.name)
                            }
                        }
                    }
                    // console.log(results)
                }).catch(err => {
                    console.log('error')
                })
        }
    }
}

</script>

<style lang="scss" scoped>
@use '../src/styles/main.scss' as *;
@use '../src/styles/partials/resets.scss' as *;
@use '../src/styles/partials/colors.scss' as *;

.my-space {
    padding-bottom: 8rem;
}
.hero-bg {
    background-color: $orange-3;
}
.big-text {
    font-weight:bold !important;
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
</style>