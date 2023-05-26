<template>
    <div class="card">

        <div class="thumb-box">
            <img class="thumb"
                src="/imgs/placeholder-icon-vector-restaurant-collection-thin-line-outline-illustration-linear-symbol-use-web-mobile-apps-143543775.jpg"
                alt="restaurant img">
        </div>

        <div class="info-text">
            <h4 class="restaurant-title my-text text-center mb-0">{{ restaurant.name }}</h4>
        </div>

        <!-- <div class="info-categories">
            <span v-for="category in store.restaurants[restaurant.id].categories">{{ category.name }}</span>
        </div> -->
    </div>
</template>

<script>
import store from '../../store';

export default {
    data() {
        return {
            store,
        }
    },
    props: {
        restaurant: {
            type: Object,
        },
    },
}
</script>

<style lang="scss" scoped>
@use '../../styles/main.scss' as *;
@use '../../styles/partials/resets.scss' as *;
@use '../../styles/partials/colors.scss' as *;

.card {
    border-radius: 1rem;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    overflow: hidden;

    &:hover>.thumb {
        transform: scale(1.3);
        transition: transform .3s;
    }

    // .thumb-box {
    //     overflow: hidden;

    .thumb {
        border-radius: 20px;
        width: 100%;
        aspect-ratio: 16/9;
        transition: transform .3s;
        transform: scale(1);
    }

    // }

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
        padding: 0 10px;
    }
}
</style>