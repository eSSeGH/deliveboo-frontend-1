<template>
    
    <div>
        advanced search for: 
    </div>

    <div>

        <CartOrder/>
    </div>

    <!-- FILTERED RESULT SECTION -->
    <section class="py-3">
        

    </section>
    <!-- /FILTERED RESULT SECTION -->

</template>

<script>
import store from '../../store';
import CartOrder from '../elements/CartOrder.vue';

    export default {
        components: {
            CartOrder,
        },
        data() {
            return {
               
            }
        },
        methods: {
            
           
        }
    }
</script>

<style lang="scss" scoped>

</style>