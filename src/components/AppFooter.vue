<template>
    <div class="container-auto">
        <img class="wave" src="/imgs/waves/footer-wave-desktop.svg" alt="">
    </div>

    <div class="container-auto footer-bg">

        <div class="container-sm py-3 d-flex align-items-center justify-content-center">
            <img class="logo-thumb" src="/imgs/logo/logo4.png" alt="">
        </div>
    
        <div class="container-sm py-3 d-flex flex-wrap justify-content-between pb-4 text-center text-white row-cols-1 row-cols-sm-2 row-cols-md-4">

            <div class="col d-flex flex-column pb-4 gap-2 my-footer-text">
                <h3 class="my-footer-title">Let's do it together</h3>
                <div class="col">Careers</div>
                <div class="col">Glovo for Partners</div>
                <div class="col">Couriers</div>
                <div class="col">Glovo Business</div>
            </div>

            <div class="col d-flex flex-column pb-4 gap-2 my-footer-text">
                <h3 class="my-footer-title">Links of interest</h3>
                <div class="col">About us</div>
                <div class="col">FAQ</div>
                <div class="col">Glovo Prime</div>
                <div class="col">Blog</div>
                <div class="col">Contact us</div>
                <div class="col">Security</div>
            </div>

            <div class="col d-flex flex-column pb-4 gap-2 my-footer-text">
                <h3 class="my-footer-title">Follow us</h3>
                <FollowButton class="follow-btn" />
            </div>

            <div class="col d-flex flex-column pb-4 gap-2 my-footer-text uppercase">
                <h3 class="my-footer-title">Terms & Conditions</h3>
                <div class="col">Privacy policy</div>
                <div class="col">Cookies policy</div>
                <div class="col">Compliance</div>
            </div>

        </div>

    </div>
</template>

<script>
import FollowButton from './elements/FollowButton.vue';

    export default {
        components: {
            FollowButton,
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/main.scss' as *;
@use '../styles/partials/colors.scss' as *;
.wave {
    width: 100%;
}
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

.uppercase {
    text-transform: uppercase;
}

.follow-btn {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>