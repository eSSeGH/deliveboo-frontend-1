<template>
    <div class="card">

        <!-- <img class="thumb" :src="img" alt="restaurant img"> -->

        <div class="info-text">
            <h3 class="name my-h3">{{ restaurant.name }}</h3>
            <h4 class="address my-text"><em> {{ restaurant.address }}</em></h4>
        </div>

        <!-- <div class="show">
          
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
    border-radius: 20px;
    position: relative;
    box-shadow: 0 0 5px black;

    // &:hover>.show {
    //     display: flex;
    // }

    // .thumb {
    //     border-radius: 20px;
    //     height: 100%;
    // }

    // .show {
    //     background-color: rgba(0, 0, 0, 0.75);
    //     border-radius: 20px;
    //     width: 100%;
    //     height: 100%;
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     padding: 0.75rem;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: space-around;
    //     display: none;
    //     color: white;

    .name {}

    .address {}

    // }
}
</style>