<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppFooter,
    AppHeader,
  },
  methods: {
    handleScroll() {

      if (this.$route.name === 'home' || this.$route.name === 'restaurants.index') {
        const headerEl = document.querySelector('.header')

        const pagePosition = window.scrollY

        if (pagePosition > 0) {
          headerEl.style.transition = 'box-shadow 1s'
          headerEl.style.boxShadow = '0 0 10px grey'
        } else {
          headerEl.style.transition = 'box-shadow 1s'
          headerEl.style.boxShadow = 'none'
        }
      }
    },
  },
  computed: {
    showHeader() {
      return !this.$route.path.includes('/restaurant/')
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>

<template>
  <AppHeader class="header" v-if="showHeader"></AppHeader>

  <div class="">
    <router-view></router-view>
  </div>

  <AppFooter />
</template>

<style lang="scss" scoped>
@use '../src/styles/main.scss' as *;
@use '../src/styles/partials/resets.scss' as *;
</style>
