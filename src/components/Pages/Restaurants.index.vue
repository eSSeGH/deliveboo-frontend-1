<template>
    <main>
        <div class="container">

            <section class="restaurants-list" v-if="store.restaurants.length > 0">
                <h2 class="my-h2">Ristoranti</h2>

                <IndexCard v-for="(el, i) in store.restaurants" :key="i" :restaurant="el" :name="store.restaurants.name"
                    :address="store.restaurants.address" class="col"></IndexCard>
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

export default {
    components: {
        IndexCard,
    },
    data() {
        return {
            store,
        }
    },
}

</script>

<style lang="scss" scoped>
@use '../../styles/main.scss' as *;
@use '../../styles/partials/resets.scss' as *;
@use '../../styles/partials/colors.scss' as *;

main {
    background: linear-gradient(to top,
            black 85%,
            black 85%,
            rgba(0, 0, 0, 0) 100%);

    .container {
        background-color: none;

        .col {
            flex-basis: calc(100%/6 - 16px*5/6)
        }

        h2 {
            color: white;
            flex-basis: 100%;
            filter: drop-shadow(0 0 10px black)
        }

        .restaurants-list {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            padding-bottom: 20px;
        }
    }
}
</style>