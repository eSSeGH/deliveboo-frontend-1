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
    <router-view></router-view>
  </div>

  <AppFooter />
</template>

<style lang="scss" scoped>
@use '../src/styles/main.scss' as *;
@use '../src/styles/partials/resets.scss' as *;

</style>
