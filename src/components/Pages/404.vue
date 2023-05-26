<template>
    <span class="error-msg my-5">Errore 404: pagina non trovata.</span>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../../styles/main.scss' as *;
@use '../../styles/partials/resets.scss' as *;
@use '../../styles/partials/colors.scss' as *;

.error-msg {
    color: red;
    font-size: 2rem;
    text-align: center;
}
</style>