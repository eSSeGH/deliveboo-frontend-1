<template>
    <main class="mb-3">
        <div class="container mx-auto">

            <section class="filters-categories row justify-content-center my-2">
                <button v-for="category in categories" class="animated-button col-auto">
                    <span class="button-text">{{ category }}</span>
                </button>
            </section>

            <section class="restaurants-list" v-if="store.restaurants.length > 0">
                <h2 class="my-h2">Ristoranti</h2>

                <div class="card my-col d-flex flex-column" v-for="(restaurant, i) in store.restaurants" :key="i">
                    <img class="thumb"
                        src="/imgs/placeholder-icon-vector-restaurant-collection-thin-line-outline-illustration-linear-symbol-use-web-mobile-apps-143543775.jpg"
                        alt="restaurant img">

                    <div class="info-text">
                        <h4 class="restaurant-title my-text text-center mb-0">{{ restaurant.name }}</h4>
                    </div>

                    <div class="info-categories row align-items center justify-content-center">
                        <span class="category-name col-auto" v-for="category in store.restaurants[i].categories">{{
                            category.name
                        }}</span>
                    </div>
                </div>
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
import axios from 'axios';

export default {
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

        .my-h2 {
            color: black;
            flex-basis: 100%;
            margin-bottom: 0;
        }

        .restaurants-list {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;

            .card {
                border-radius: 1rem;
                position: relative;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
                cursor: pointer;
                overflow: hidden;
                background-color: $orange-3;

                &:hover>.thumb {
                    transform: scale(1.3);
                    transition: transform .3s;
                }

                .thumb {
                    border-radius: 1rem 1rem 0 0;
                    width: 100%;
                    aspect-ratio: 16/9;
                    transition: transform .3s;
                    transform: scale(1);
                }

                .info-text {
                    position: absolute;
                    height: 100%;
                    width: 100%;

                    .restaurant-title {
                        position: absolute;
                        color: white;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        filter: drop-shadow(0 0 5px black);
                        font-weight: bold;
                    }
                }

                .info-categories {
                    border-top: 2px solid $purple-3;
                    background-color: $orange-3;
                    padding: 0 10px;
                    z-index: 2;
                    font-size: 0.75rem;
                    padding: 5px;
                    gap: 2px;

                    .category-name {
                        background-color: $purple-5;
                        padding: 0 3px;
                        border-radius: 10px;
                        color: white;
                    }
                }
            }
        }

        .filters-categories {

            .animated-button {
                background-color: $purple-5;
                opacity: 1;
                border: none;
                color: white;
                padding: 3px 7px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 0.75rem;
                margin: 4px 2px;
                cursor: pointer;
                font-family: 'Montserrat', sans-serif;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                overflow: hidden;
                position: relative;
                transition: all 0.5s ease;
                z-index: 1;

                .button-text {
                    z-index: 999;
                }
            }

            .animated-button:after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                background-color: $purple-3;
                border-radius: 50%;
                opacity: 0.3;
                transform: translate(-50%, -50%);
                transition: all 0.5s ease;
                z-index: -1;
            }

            .animated-button:hover:after {
                width: 100px;
                height: 100px;
                opacity: 0.5;
                z-index: -1;
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

@media (max-width: 991px) {
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