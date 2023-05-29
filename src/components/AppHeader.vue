<template>
    <header class="header-home">
        <div class="container-sm">
            <div class="row justify-content-between align-items-center">


                <div class="my-col logo d-none d-md-block">
                    <router-link to="/">
                        <img src="/imgs/logo/logo1.png" alt="">
                    </router-link>
                </div>
                <div class="my-col logo-sm d-md-none">
                    <router-link to="/">
                        <img src="/imgs/logo/logo-sm.png" alt="">
                    </router-link>
                </div>


                <div class="my-col searchbar-box">
                    <input v-on:keyup.enter="goToAdvancedSearchPage" v-model="store.currentSelectedCategories" type="text"
                        name="search" class="searchbar" placeholder="Cerca per tipologia di ristorante...">
                </div>

                <div class="header-buttons my-col d-flex justify-content-end">
                    <button class="login-btn me-lg-4 me-md-3 me-sm-2 me-1">
                        <div class="sign"><svg viewBox="0 0 512 512">
                                <path
                                    d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z">
                                </path>
                            </svg></div>
                        <div class="log-text"><a href="http://127.0.0.1:8000/login">Login</a></div>
                    </button>
                    <button class="register-btn">
                        <div class="sign-register"><svg viewBox="0 0 512 512">
                                <path
                                    d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z">
                                </path>
                            </svg></div>
                        <div class="log-text"><a href="http://127.0.0.1:8000/register">Register</a></div>
                    </button>
                </div>

            </div>
        </div>
    </header>
</template>

<script>
import store from '../store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        fetchRestaurantsByCategory() {
            console.log('launched fetchRestaurantsByCategory')

            this.store.selectedCategories = []

            const basePath = 'http://127.0.0.1:8000/api/restaurants'

            // evito di pushare 'this.currentSelectedCategories' quando è nullo
            if (this.currentSelectedCategories != null) {
                this.currentSelectedCategories.toLowerCase()
                this.selectedCategories.push(this.currentSelectedCategories)
            }

            const categories = this.store.selectedCategories

            // chiamata axios con parametri per le query (categorie)
            axios.get(basePath, {

                params: {
                    categories,
                }
            })
                .then((res) => {
                    this.store.restaurants = res.data.results
                })
                .catch((error) => {
                    this.$router.push('/404')
                })
        },
        // funzione di redirect all'advanced search page alla pressione di enter
        goToAdvancedSearchPage() {
            if (this.$route.name === 'home') {
                this.$router.push('/restaurants')

                this.fetchRestaurantsByCategory()
            } else {
                this.fetchRestaurantsByCategory()
            }
        }
    },
    computed: {
        currentSelectedCategories() {
            return this.store.currentSelectedCategories
        },
        selectedCategories() {
            return this.store.selectedCategories
        },
    },
    watch: {
        currentSelectedCategories(newVal, oldVal) {
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../styles/main.scss' as *;
@use '../styles/partials/resets.scss' as *;
@use '../styles/partials/colors.scss' as *;


.header-home {
    background-color: $orange-3;
    height: 90px;
    position: sticky;
    top: 0;
    z-index: 10;


    .container {
        height: 100%;
    }

    .row {
        margin: 0 !important;
        padding: 0 !important;
        height: 100%;
        flex-wrap: nowrap;

        .col {
            flex-basis: auto;
        }

        .logo {
            height: 80px;
            width: 311px;
            flex-shrink: 0;

            img {
                height: 100%;
            }
        }

        .logo-sm {
            height: 80px;
            aspect-ratio: 1;
            flex-basis: 311px;
            flex-shrink: 2;
            min-width: 80px;
            margin: 0 !important;
            padding: 0 !important;

            img {
                height: 100%;
            }
        }

        .logo,
        .logo-sm {

            &:hover {
                filter: drop-shadow(0 0 10px yellow);
                transition: .3s;
            }
        }

        .searchbar-box {
            flex-shrink: 1;
            display: inline;
            max-width: 311px;

            .searchbar {
                height: 24px;
                border: 3px solid $purple-4;
                border-radius: 20px;
                background-color: white;
                color: black;
                cursor: pointer;
                padding: 7px 12px;
                transition: all 1s;
                flex-shrink: 1;
                width: 100%;

            }
        }

        .searchbar:focus {
            outline-color: yellow;
        }

        .header-buttons {
            flex-basis: 311px;
            flex-shrink: 2;

            .login-btn,
            .register-btn {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 45px;
                height: 45px;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                position: relative;
                overflow: hidden;
                transition-duration: .3s;
                box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
                background-color: $purple-4;

                &:hover {
                    width: 125px;
                    border-radius: 40px;
                    transition-duration: .3s;
                }

                &:hover .sign {
                    width: 30%;
                    transition-duration: .3s;
                    padding-left: 20px;
                }

                &:hover .log-text {
                    opacity: 1;
                    width: 70%;
                    transition-duration: .3s;
                    padding-right: 10px;
                }

                &:active {
                    transform: translate(2px, 2px);
                }
            }

            .sign {
                width: 100%;
                transition-duration: .3s;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .sign svg {
                width: 17px;
            }

            .sign-register svg {
                width: 17px;
                transform: rotate(270deg);
                position: relative;
                left: 14px;
            }

            .sign svg path {
                fill: white;
            }

            .sign-register svg path {
                fill: white;
            }



            .log-text {
                position: absolute;
                right: 0%;
                width: 0%;
                opacity: 0;
                color: white;
                font-size: 1.2em;
                font-weight: 600;
                transition-duration: .3s;
            }
        }
    }
}
</style>