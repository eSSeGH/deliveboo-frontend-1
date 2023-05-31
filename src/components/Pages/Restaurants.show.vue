<template>
    <div class="container mx-auto d-flex logo-box">
        <router-link :to="{ name: 'home' }">
            <div class="logo-thumb">
                <img src="/public/imgs/logo/logo1.png" alt="">
            </div>
        </router-link>
    </div>

    <!-- HERO RESTAURANT -->
    <div class="image-container">
        <img class="restaurant-img" :src="getImageUrl(restaurant.img)" alt="">
    </div>
    <!-- /HERO RESTAURANT -->

    <!-- RESTAURANT INFOS -->
    <section class="restaurant-section">
        <div class="mx-auto container restaurant-box">
            <div class="d-flex justify-content-between align-items-center box-bg shadow">
                <div class="container px-5 py-3">
                    <h1 class="mb-3 restaurant-name">{{ restaurant.name }}</h1>
                    <p class="restaurant-address d-none d-sm-block">{{ restaurant.address }}</p>
                </div>

                <div class="animation d-none d-sm-block">
                    <iframe src="https://embed.lottiefiles.com/animation/99271"></iframe>
                </div>
            </div>
        </div>
    </section>
    <!-- /RESTAURANT INFOS -->

    <!-- DISHES -->
    <div class="container card-box mx-auto w-100 w-lg-50">
        <div
            class="d-flex justify-content-center justify-content-md-between justify-content-xl-between flex-wrap row-gap-5">
            <div class="col col-md-6 col-lg-6 col-xl-6 col-xxl-8">

                <ul class="d-flex align-items-center justify-content-center justify-content-xxl-between flex-wrap row-gap-3">

                    <li class="my-card col-12 col-xxl-5 gap-3 d-flex flex-column justify-content-between"
                        v-for="dish in dishes" :key="dish.id">

                        <div class="row justify-content-center justify-content-sm-between gap-2 text-center ">
                            <div class="food-img col-4">
                                <img class="food-thumb" :src="getImageUrl(dish.img)" alt="">
                            </div>

                            <div class="mb-3 col-8 text-center text-sm-start ">
                                <div class="food-title">{{ dish.name }}</div>
                                <div class="food-desc">{{ dish.description }}</div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="d-flex align-items-center flex-sm-row justify-content-between">
                                <p class="d-flex col-8">{{ dish.price }} €</p>
                                <div class="d-flex flex-row-reverse col-sm-4 gap-2">
                                    <AddFoodButton class="card-buttons text-center" @click="addFoodToCart(dish)" />
                                    <!-- <RemoveFoodButton class="card-buttons text-center" @click="deleteFoodFromCard(dish)" /> -->
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-4 flex-{grow|shrink}-0">
                <!-- CART-->
                <section>

                    <div class="card">
                        <div class="card-body px-4">
                            <h3 class="card-title text-center fw-bold py-4">
                                Il tuo Deliveboo
                            </h3>
                            <p class="text-center my-text" v-if="this.cart.length === 0">Aggiungi dei piatti al carrello...</p>
                            <div v-for="(dish, index) in cart" :key="dish.id">
                                <div class="box-cart d-flex align-items-start">

                                    <span class="col-2 fw-bold fs-5">{{ dish.quantity }}x</span>
                                    <p class="col-6 m-0">{{ dish.name }}</p>
                                    <p class="col-2 m-0 fw-bold text-center">{{ dish.quantity * dish.price }}€</p>
                                    <DeleteButton class="col-1 "
                                        @click="deleteFoodQuantity(dish, index)" />
                                    <DeleteEntityButton @click="deleteFoodEntity(dish, index)" class="col-1 ms-1 align-self-start" />
                                </div>
                            </div>

                            <div class="d-flex justify-content-center pt-3" v-if="this.cart.length != []">
                                <DeleteAllFoodButton @click="deleteAllFood()" />
                            </div>

                            <div class="confirm-button d-flex justify-content-center py-3">
                                <button v-if="showButtonConfirm" @click="showOrderForm">
                                    Conferma ordine
                                    <span class="fw-bold" v-if="totalCart === 0 ? '' : totalCart">{{ totalCart }}€</span>
                                </button>
                            </div>
                        </div>

                        <div v-if="showForm">
                            <div class="card-body px-4">
                                <h5 class="card-title text-center fw-bold pb-2">
                                    Prosegui con l'ordine
                                </h5>
                                <form @submit.prevent="goToPay()" action="http://127.0.0.1:8000/orders/create" method="POST" class="form" id="payment-form">
                                    <!-- action to rotta api -->
                                    <div class="">
                                        <label for="exampleFormControlInput1" class="form-label">Nome</label>
                                        <input type="text" class="form-control" id="name" placeholder="Nome..." name="firstName" v-model="firstName">
                                    </div>
                                    <div class="">
                                        <label for="exampleFormControlInput1" class="form-label">Cognome</label>
                                        <input type="text" class="form-control" id="surname" placeholder="Cognome..." name="lastName" v-model="lastName">
                                    </div>
                                    <div class="">
                                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1"
                                            placeholder="name@example.com" name="email" v-model="email">
                                    </div>
                                    <div class="">
                                        <label for="exampleFormControlInput1" class="form-label">Numero</label>
                                        <input type="text" class="form-control" id="number" placeholder="Numero..." name="phone" v-model="phone">
                                    </div>
                                    <div class="">
                                        <label for="exampleFormControlInput1" class="form-label">Indirizzo</label>
                                        <input type="text" class="form-control" id="address" placeholder="Indirizzo..." name="address" v-model="address">
                                    </div>
                                    <div class="">
                                        <label for="exampleFormControlInput1" class="form-label">Codice postale</label>
                                        <input type="text" class="form-control" id="postal-code"
                                            placeholder="Codice postale..." name="postal_code" v-model="postalCode">
                                    </div>
                                    <input type="hidden" name="order_id" v-model="orderID">
                                    <div class="col-12 d-flex justify-content-center py-3">
                                    </div>
                                    <button type="submit" class="px-4">Paga <span class="fw-bold">{{ totalCart }}€</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- /CART -->
            </div>
        </div>
    </div>
    <!-- /DISHES -->

    <div class="container-auto bg-wave pt-5">
        <img class="wave-bottom" src="/imgs/waves/footer-wave-desktop.svg" alt="">
    </div>
</template>

<script>
import AddFoodButton from '../elements/AddFoodButton.vue'
import DeleteButton from '../elements/DeleteButton.vue'
import DeleteEntityButton from '../elements/DeleteEntityButton.vue'
import DeleteAllFoodButton from '../elements/DeleteAllFoodButton.vue'
import RemoveFoodButton from '../elements/RemoveFoodButton.vue'
import store from '../../store'
import axios from 'axios'
import { counter } from '@fortawesome/fontawesome-svg-core'

export default {
    components: {
    AddFoodButton,
    DeleteButton,
    DeleteEntityButton,
    DeleteAllFoodButton,
    RemoveFoodButton
},

    methods: {
        fetchRestaurantBySlug() {

            const slug = this.$route.params.slug

            axios.get(`http://127.0.0.1:8000/api/restaurants/${slug}`)
                .then(res => {

                    // console.log(res)

                    this.restaurant = res.data.results

                    this.dishes = this.restaurant.dishes
                    
                }).catch((err) => {
                    this.$router.push('/404')
                })
        },
        getImageUrl(imagePath) {
            if (imagePath) {
                return `http://127.0.0.1:8000/storage/${imagePath}`
            }
        },
        addFoodToCart(dish) {

            //controllo se filtrando il cart mi trova l'elemento dish (se > 0)
            if (this.cart.filter(value => value.id === dish.id).length > 0) {
                let filteredCart = this.cart.filter(value => value.id === dish.id) //mi salvo l'array filtrato con il mio dish
                filteredCart[0].quantity++ //tanto c'è solo un elemento in questo array
                this.totalCart += parseFloat(dish.price)
            } else {
                dish.quantity = 1
                this.cart.push(dish)
                this.totalCart += parseFloat(dish.price)
            }
            //STEP:1 salvare dati nel local storage ad ogni modifica
            localStorage.setItem('cart', JSON.stringify(this.cart)) // salvo il carrello come stringa JSON nel local storage quando aggiungo un piatto
            localStorage.setItem('totalCart', JSON.stringify(this.totalCart)) // salvo il totale nel local storage quando aggiungo un piatto
            console.log(this.cart)
            // console.log(localStorage.getItem('cart'))
        },
        deleteFoodQuantity(dish, index) {

            //se il carrello ha un elemento e, quell'elemento ha 1 sola quantità e, il 'conferma ordine' è nascosto
            if (this.cart.length === 1 && dish.quantity === 1 && !this.showButtonConfirm) {
                //togli prezzo ed elemento da carrello
                this.totalCart -= parseFloat(dish.price)
                this.cart.splice(index, 1)

                //riportami il 'conferma ordine'
                this.showForm = false
                this.showButtonConfirm = true
            }

            //se abbiamo elementi nel carrello, gestisci il delete e totale
            if (this.cart.includes(dish)) {
                if (dish.quantity > 1) {
                    dish.quantity -= 1
                    this.totalCart -= parseFloat(dish.price)
                } else if (dish.quantity === 1) {
                    this.totalCart -= parseFloat(dish.price)
                    this.cart.splice(index, 1)
                }
            }

            // STEP:1
            localStorage.setItem('cart', JSON.stringify(this.cart)) // salvo il carrello come stringa JSON nel local storage quando rimuovo un piatto
            localStorage.setItem('totalCart', JSON.stringify(this.totalCart)) // salvo il totale nel local storage quando rimuovo un piatto
        },
        // deleteFoodFromCard(cart) {

        //     if (this.cart.length === 1 && dish.quantity === 1 && !this.showButtonConfirm) {
        //         //togli prezzo ed elemento da carrello
        //         this.totalCart -= parseFloat(dish.price)
        //         this.cart.splice(index, 1)

        //         //riportami il 'conferma ordine'
        //         this.showForm = false
        //         this.showButtonConfirm = true
        //     }

        //     if (this.cart.includes(dish)) {
        //         if (dish.quantity > 1) {
        //             dish.quantity -= 1
        //             this.totalCart -= parseFloat(dish.price)
        //         } else if (dish.quantity === 1) {
        //             this.totalCart -= parseFloat(dish.price)
        //             this.cart.splice(index, 1)
        //         }
        //     }

        // },
        deleteFoodEntity(dish, index) {
            //se abbiamo elementi nel carrello, gestisci il delete e totale
            if (this.cart.includes(dish)) {
                this.totalCart -= parseFloat(dish.price) * dish.quantity
                dish.quantity = 0
                this.cart.splice(index, 1)
            }

            this.showForm = false
            this.showButtonConfirm = true

            // STEP:1
            localStorage.setItem('cart', JSON.stringify(this.cart)) // salvo il carrello come stringa JSON nel local storage quando rimuovo un piatto
            localStorage.setItem('totalCart', JSON.stringify(this.totalCart)) // salvo il totale nel local storage quando rimuovo un piatto
        },
        deleteAllFood() {
            this.cart = []
            this.totalCart = 0

            this.showForm = false
            this.showButtonConfirm = true

            // STEP:1
            localStorage.setItem('cart', JSON.stringify(this.cart)) // salvo il carrello come stringa JSON nel local storage quando rimuovo un piatto
            localStorage.setItem('totalCart', JSON.stringify(this.totalCart)) // salvo il totale nel local storage quando rimuovo un piatto
        },
        showOrderForm() {

            if(this.totalCart === null) {
                this.showForm = false
                this.showButtonConfirm = true 
            }else if (this.totalCart !== 0) {
                this.showForm = true
                this.showButtonConfirm = false
                // console.log('show form')
                // console.log(this.totalCart)
            } 
        },

        // STEP:2 creiamo una funzionare per assegnare i dati del carrello in local storage ai dati della pagina ricaricata
        getCartFromLocalStorage() {
            // recupero il carrello JSON dal local storage e 
            // SE esiste lo converto in array 
            // ALTRIMENTI metto l'array vuoto
            const savedCartData = localStorage.getItem('cart') 
            // console.log(savedCartData)
            let localCart = []

            if(savedCartData) {
                localCart = JSON.parse(savedCartData)
            } else {
                localCart = []
            }
            
            // recupero il total local storage e 
            // SE esiste diventa float 
            // ALTRIMENTI metto il totale a 0
            const savedTotalCart = localStorage.getItem('totalCart')
            console.log(savedTotalCart, typeof savedTotalCart)
            let localTotalCart = 0
            // console.log(localTotalCart)
            
            if(savedTotalCart !== 0) {
                localTotalCart = JSON.parse(savedTotalCart)
            }
            
            this.cart = localCart
            this.totalCart = localTotalCart
            console.log(this.totalCart)
        },
        goToPay() {
            axios.post('http://localhost:8000/api/order/pay', {
                    cart: this.cart,
                    form: {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        phone: this.phone,
                        address: this.address,
                        postalCode: this.postalCode
                    }

            })
            .then((res) => {
                console.log(res.data.results)
                this.orderID = res.data.results.order_id; //salvo l'id dell'ordine appena creato
            })
            .finally(() => {
                const paymentFormEl = document.getElementById('payment-form'); //prendo il form di pagamento
                paymentFormEl.submit(); //faccio il submit del form di pagamento 
            })
            this.clearLocalStorage()
            console.log(this.cart)
            
        },
        clearLocalStorage() {
            localStorage.removeItem('cart') // elimino dal local storage i dati salvati
            localStorage.removeItem('totalCart') // elimino dal local storage i dati salvati
            // this.totalCart = 0
        }
    },

    mounted() {
        this.fetchRestaurantBySlug()
        this.getCartFromLocalStorage()
        console.log(this.cart)
    },

    data() {
        return {
            store,
            showForm: false,
            showButtonConfirm: true,
            totalCart: 0,
            restaurant: [],
            dishes: [],
            cart: [], // NON TOCCARE MAREMMAHANE
            orderID: '', //id dell' ordine
            firstName: '', //nome del cliente
            lastName: '', //cognome del cliente
            email: '', //email del cliente
            phone: '', //telefono del cliente
            address: '', //indirizzo del cliente
            postalCode: '', //codice postal del cliente
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../src/styles/main.scss' as *;
@use '../src/styles/partials/resets.scss' as *;
@use '../../styles/partials/colors.scss' as *;

.logo-box {
    padding: 0 2rem !important;
    margin-top: 2rem !important;
    background-color: rgba($color: #000000, $alpha: 0);
    position: relative;
    z-index: 0;

    .logo-thumb {
        width: 180px;
        background-color: rgba($color: white, $alpha: 0.3);
        padding: 0 15px;
        border-radius: 30px;
        z-index: 10;
        position: relative;
    }
}

.image-container {
    width: 100%;
    height: 420px;
    position: relative;
    top: -150px;
    left: 0;
    z-index: -1;
    // filter: blur(5px);

    .restaurant-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}

.restaurant-section {
    z-index: 1;
    background: linear-gradient(to top,
            white 65%,
            white 65%,
            rgba(0, 0, 0, 0) 100%);

    .restaurant-box {
        padding: 0rem 2rem 6rem !important;
        margin-top: -280px;
        position: relative;


        .box-bg {
            background-color: white;
        }

        .shadow {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius: 9px;
        }

        .restaurant-name {
            font-size: 3rem;
            font-weight: bold;
        }

        .restaurant-address {
            font-size: 1.5rem;
        }
    }
}

.card-box {
    padding: 0rem 2rem 6rem !important;

    .my-card {
        padding: 1.5rem;
        border-radius: 1rem;
        margin-right: auto;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }

    .card-buttons {
        width: 40px;
    }

    .food-title {
        font-size: 0.875rem;
        font-weight: bold;
    }

    .food-desc {
        font-size: 0.75rem;
    }

    .food-img {
        width: 80px;
        height: 80px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        border-radius: 50%;

        .food-thumb {
            aspect-ratio: 1;
            object-fit: cover;
            object-position: center;
            border-radius: 50%;
        }
    }
}

.card {
    margin: 0 auto;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

.my-text {
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.495)
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
.wave-bottom {
    min-width: 100%;
    position: relative;
    bottom: 0;
}

@media (max-width: 388px) {
    .wave-bottom {
        bottom: -1px;
    }
}

@media (max-width: 418px) {
    .wave-bottom {
        margin-bottom: -2px;
    }
}
</style>