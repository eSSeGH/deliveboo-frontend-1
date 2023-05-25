<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppFooter,
    AppHeader,
  },
}
</script>

<template>
  <AppHeader></AppHeader>

  
  <div>
    <router-view></router-view>
  </div>

  <AppFooter />
</template>

<style lang="scss" scoped>
@use '../src/styles/main.scss' as *;
@use '../src/styles/partials/resets.scss' as *;
</style>
