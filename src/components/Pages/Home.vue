<template>

    <!-- CATEGORY SECTION -->

    <section class="container-auto py-5">

        <div class="d-flex gap-2 flex-wrap justify-content-center align-items-center">
            <div class="card p-1" v-for="category in singleCategories" :key="category.name">
                <router-link :to="{name: 'restaurants.index'}">{{ category }}</router-link>
            </div>
        </div>

    </section>

    <!-- CATEGORY SECTION -->

</template>

<script>
import store from '../../store';

    export default {
        data() {
            return {
                store,
                singleCategories: []
            }
        },

        created() {
            this.getSingleCategories();
        },
        
        methods: {
            // create a method that push only different categories into SingleCategories array
            getSingleCategories() {

                for(let i = 0; i < store.restaurants.length; i ++) {

                    const restaurant = store.restaurants[i]

                    if (!this.singleCategories.includes(restaurant.category)) {

                        this.singleCategories.push(restaurant.category)
                    }
                }
            }
        }
    }

</script>

<style lang="scss" scoped>
@use '../src/styles/main.scss' as *;
@use '../src/styles/partials/resets.scss' as *;

.card {
    cursor: pointer;
}
</style>