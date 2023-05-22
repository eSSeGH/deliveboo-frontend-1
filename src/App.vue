<script>
import AppFooter from './components/AppFooter.vue';

  export default {
    components: {
      AppFooter,
    }
}
</script>

<template>

  <div class="container">
    <h1 style="text-align: center; padding: 2rem;">Ciao mamma sono pronto</h1>
    <h2 style="text-align: center; padding: 2rem;">Bravo ragazzo</h2>
  </div>

  <AppFooter />
</template>

<style lang="scss" scoped>
@use '../src/styles/main.scss' as *;
@use '../src/styles/partials/resets.scss' as *;

</style>
