<template>
    <main>
        <div class="container mx-auto">

            <section class="filters-categories">
                <button v-for="category in categories" class="animated-button">{{ category.name }}</button>
            </section>

            <section class="restaurants-list" v-if="store.restaurants.length > 0">
                <h2 class="my-h2">Ristoranti</h2>

                <IndexCard v-for="(el, i) in store.restaurants" :key="i" :restaurant="el" :name="store.restaurants.name"
                    class="my-card my-col"></IndexCard>
            </section>


            <div class="error-message" v-if="store.restaurants.length == 0">
                <h2>Nessun ristorante corrisponde ai parametri di ricerca, per favore prova a ricercare un'altra categoria.
                </h2>
            </div>

        </div>
    </main>
</template>

<script>
import store from '../../store';
import IndexCard from '../elements/IndexCard.vue';
import axios from 'axios';

export default {
    components: {
        IndexCard,
    },
    data() {
        return {
            store,
            categories: [],
        }
    },
    methods: {
        fetchCategories() {
            axios.get('http://127.0.0.1:8000/api/restaurants', {
            })
                .then(res => {
                    console.log('fetching categories')

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
                    console.log(this.categories)
                }).catch(err => {
                    console.log('error')
                })
        },
        getImageUrl(imagePath) {
            return `http://127.0.0.1:8000/storage/${imagePath}`
        },
    },
    mounted() {
        this.fetchCategories()
    }
}

</script>

<style lang="scss" scoped>
@use '../../styles/main.scss' as *;
@use '../../styles/partials/resets.scss' as *;
@use '../../styles/partials/colors.scss' as *;

main {

    .container {
        background-color: none;

        .my-col {
            flex-basis: calc(100%/4 - 16px*3/4);
        }

        h2 {
            color: black;
            flex-basis: 100%;
        }

        .restaurants-list {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            padding-bottom: 20px;
        }

        .filter-categories {

            .animated-button {
                background-color: alpha($color: $purple-3);
                border: none;
                color: #ffffff;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 22px;
                margin: 4px 2px;
                cursor: pointer;
                font-family: 'Montserrat', sans-serif;
                letter-spacing: 2px;
                border-radius: 50px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                overflow: hidden;
                position: relative;
                transition: all 0.3s ease;
            }

            .animated-button:after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                background-color: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                opacity: 0;
                transform: translate(-50%, -50%);
                transition: all 0.5s ease;
            }

            .animated-button:hover:after {
                width: 210px;
                height: 200px;
                opacity: 1;
            }

            .animated-button:focus {
                outline: none;
            }

            .animated-button:active {
                transform: translateY(2px);
                box-shadow: none;
            }
        }
    }
}

@media (max-width: 768px) {
    .my-col {
        flex-basis: calc(100%/3 - 16px*2/3) !important;
    }
}

@media (max-width: 575px) {
    .my-col {
        flex-basis: calc(100%/2 - 16px/2) !important;
    }

    .restaurants-list {
        margin: 15px;
    }
}

@media (max-width: 414px) {
    .my-col {
        flex-basis: 100% !important;
    }

    .restaurants-list {
        margin: 30px;
    }
}
</style>