<template>
    
    <div>
        Restaurants Cart
    </div>

    <div>

    </div>

    <!-- FILTERED RESULT SECTION -->
    <section class="py-3">

        <div class="card w-25">
            <div class="card-body px-4">
            <h3 class="card-title text-center fw-bold py-4">
                Il tuo Deliveboo
            </h3>
            <div v-for="order in store.orders" :key="order.name">
                <div class="box-cart d-flex align-items-start">
                    <span class="col-2 fw-bold fs-5">{{ order.quantity }}x</span>
                    <p class="col-8 m-0">{{ order.name }}</p>
                    <p class="col-2 m-0">{{ order.price * order.quantity }}€</p>
                </div>
            </div>
            <div class="confirm-button d-flex justify-content-center py-3">
                <button v-if="showButtonConfirm" @click="showOrderForm">Conferma ordine (tot€)</button>
            </div>
            </div>
            <div v-if="showForm">
                <div class="card-body px-4">
                    <h5 class="card-title text-center fw-bold pb-2">
                        Prosegui con l'ordine
                    </h5>
                    <form action="" class="form">
                        <div class="">
                            <label for="exampleFormControlInput1" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="name" placeholder="Nome...">
                        </div>
                        <div class="">
                            <label for="exampleFormControlInput1" class="form-label">Cognome</label>
                            <input type="text" class="form-control" id="surname" placeholder="Cognome...">
                        </div>
                        <div class="">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                        </div>
                        <div class="">
                            <label for="exampleFormControlInput1" class="form-label">Numero</label>
                            <input type="text" class="form-control" id="number" placeholder="Numero...">
                        </div>
                        <div class="">
                            <label for="exampleFormControlInput1" class="form-label">Indirizzo</label>
                            <input type="text" class="form-control" id="address" placeholder="Indirizzo...">
                        </div>
                        <div class="">
                            <label for="exampleFormControlInput1" class="form-label">Codice postale</label>
                            <input type="text" class="form-control" id="postal-code" placeholder="Codice postale...">
                        </div>

                        <div class="col-12 d-flex justify-content-center py-3">
                            <button type="submit" class="px-4">Paga (tot€)</button>
                        </div>
                    </form>

                </div>
                
            </div>
        </div>
        

    </section>
    <!-- /FILTERED RESULT SECTION -->

</template>

<script>
import store from '../../store';

    export default {
        data() {
            return {
                store,
                showForm: false,
                showButtonConfirm: true,
            }
        },
        computed: {
            orders() {
            return this.store.orders;
            },
        },
        methods: {
            showOrderForm() {
                this.showForm = true
                this.showButtonConfirm = false
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../../styles/main.scss' as *;
@use '../../styles/partials/resets.scss' as *;
@use '../../styles/partials/colors.scss' as *;
.card {
    margin: 0 auto;
}
.box-cart {
    padding: 0.5em;
}

.form * {
    padding: 0.5em 0;
    margin: 0;
}

button {
 padding: 10px 20px;
 max-width: 90%;
 border-radius: 50px;
 border: 0;
 background-color: $orange-1;
 box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
 letter-spacing: 1.5px;
 text-transform: uppercase;
 font-size: 15px;
 transition: all .5s ease;
}

button:hover {
 letter-spacing: 3px;
 background-color: hsl(261deg 80% 48%);
 color: hsl(0, 0%, 100%);
 box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
}

button:active {
 letter-spacing: 3px;
 background-color: hsl(261deg 80% 48%);
 color: hsl(0, 0%, 100%);
 box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
 transform: translateY(10px);
 transition: 100ms;
}

</style>