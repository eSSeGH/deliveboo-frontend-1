<template>

    <div class="container-auto footer-bg">

        <router-link :to="{ name: 'home' }">
            <div @click="scrollToTop()" class="container py-3 d-flex align-items-center justify-content-center">
                <img class="logo-thumb" src="/imgs/logo/logo4.png" alt="">
            </div>
        </router-link>
    
        <div class="container spacing">

            <div class="row gx-3 row-gap-3 py-3 justify-content-center text-center text-white row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">

                <div class="col">
                    <div class="d-flex flex-column pb-4 gap-2 my-footer-text shadow">
                        <h3 class="my-footer-title">Insieme</h3>
                        <div class="col">Carriere</div>
                        <div class="col">Debliveboo per Partners</div>
                        <div class="col">Corrieri</div>
                        <div class="col">Deliveboo Aziende</div>
                    </div>
                </div>

                <div class="col">
                    <div class="d-flex flex-column pb-4 gap-2 my-footer-text shadow">
                        <h3 class="my-footer-title">Link di interesse</h3>
                        <div class="col"><a href="https://github.com/eSSeGH">A proposito di noi</a></div>
                        <div class="col"><a href="https://github.com/r3ig">FAQ</a></div>
                        <div class="col"><a href="https://github.com/rennavittorio">Deliveboo Prime</a></div>
                        <div class="col"><a href="https://github.com/Lapo0">Blog</a></div>
                        <div class="col"><a href="https://github.com/fracs31">Contattaci</a></div>
                        <div class="col">Sicurezza</div>
                    </div>
                </div>

                <div class="col">
                    <div class="d-flex flex-column pb-4 gap-2 my-footer-text shadow">
                        <h3 class="my-footer-title">Seguici</h3>
                        <FollowButton class="follow-btn" />
                    </div>
                </div>

                <div class="col">
                    <div class="d-flex flex-column pb-4 gap-2 my-footer-text shadow uppercase">
                        <h3 class="my-footer-title">Termini e Condizioni</h3>
                        <div class="col">Politica sulla privacy</div>
                        <div class="col">Politica sui cookies</div>
                        <div class="col">Conformit&aacute;</div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import FollowButton from './elements/FollowButton.vue';

    export default {
        components: {
            FollowButton,
        },
        methods: {
            scrollToTop() {
                window.scrollTo({
                    top:0,
                    behavior: 'smooth'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/main.scss' as *;
@use '../styles/partials/colors.scss' as *;

.footer-bg {
    background-color: $footer-bg;
}
.logo-thumb {
    width: 200px;
    cursor: pointer;
}
.col > .col {
    cursor: pointer;
}
.my-footer-title {
    margin-bottom: 1rem;
}
.shadow {
    padding: 2rem;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;
    border-radius: 5px;
    height: 100%;
}
.uppercase {
    text-transform: uppercase;
}
.follow-btn {
    display: flex;
    align-items: center;
    justify-content: center;
}
.spacing {
    padding: 0 2rem !important;
}
.d-flex > .col {
    cursor: pointer;
    color: rgba(181, 181, 181, 0.858);
}
.d-flex > .col:hover {
    text-decoration: underline;
    color: white;
}

a {
    text-decoration: none;
    color: currentColor;
}
</style>