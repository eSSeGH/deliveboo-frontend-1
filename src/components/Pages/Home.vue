<template>
    <!-- CATEGORY SECTION -->

    <section class="container-auto py-5">

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
        fetchCategories() {
            axios.get('http://127.0.0.1:8000/api/restaurant', {
            })
                .then(res => {

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

.card {
    cursor: pointer;
}
</style>