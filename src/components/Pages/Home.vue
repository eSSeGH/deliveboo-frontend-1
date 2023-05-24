<template>

    <!-- HERO SECTION -->
    <section>

        <div class="container-auto pt-5 hero-bg">

            <div class="container-sm mx-auto">

                <div class="row justify-content-center">
    
                    <div class="col-6 d-md-flex flex-row-reverse d-none">
                        <iframe src="https://embed.lottiefiles.com/animation/69733"></iframe>
                    </div>
    
                    <div class="col-6">
                        <div class="d-flex flex-column gap-2">
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

        <h2 class="text-center pb-5 mb-5">Ecco tutte le nostre categorie</h2>

        <div class="d-flex gap-2 flex-wrap justify-content-center align-items-center">
            <div class="card px-2" v-for="category in categories" :key="category.name">
                {{ category }}
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
                axios.get('http://127.0.0.1:8000/api/restaurant', {
                })
                .then(res=> {

                    const results = res.data.results

                    for(let i = 0; i < results.length; i ++) {

                        const singleCategories = results[i].categories

                        // console.log(singleCategories)

                        for(let j = 0; j < singleCategories.length; j ++) {

                            const category = singleCategories[j]

                            // console.log(category.name)

                            if(!this.categories.includes(category.name)) {

                                this.categories.push(category.name)
                            }
                        }
                    }
                    // console.log(results)
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
.card {
    cursor: pointer;
}
</style>