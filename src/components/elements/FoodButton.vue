<template>
    <button class="learn-more">+</button>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@use '../src/styles/main.scss' as *;
@use '../src/styles/partials/resets.scss' as *;
@use '../src/styles/partials/colors.scss' as *;

button {
 position: relative;
 display: inline-block;
 cursor: pointer;
 outline: none;
 border: 0;
 vertical-align: middle;
 text-decoration: none;
 font-family: inherit;
 font-size: 15px;
}

button.learn-more {
 font-weight: 600;
 color: #000000;
 text-transform: uppercase;
 padding: 0.25rem 0.75rem;
 background: #f7f0ff;
 border: 2px solid $purple-1;
 border-radius: 0.75em;
 -webkit-transform-style: preserve-3d;
 transform-style: preserve-3d;
 -webkit-transition: background 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
 transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
}

button.learn-more::before {
 position: absolute;
 content: '';
 width: auto;
 height: 100%;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background: #dfc4f9;
 border-radius: inherit;
 -webkit-box-shadow: 0 0 0 2px #9685b1, 0 0.625em 0 0 #efe2ff;
 box-shadow: 0 0 0 2px #9685b1, 0 0.625em 0 0 #efe2ff;
 -webkit-transform: translate3d(0, 0.75em, -1em);
 transform: translate3d(0, 0.75em, -1em);
 transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
}

button.learn-more:hover {
 background: #efe2ff;
 -webkit-transform: translate(0, 0.25em);
 transform: translate(0, 0.25em);
}

button.learn-more:hover::before {
 -webkit-box-shadow: 0 0 0 2px #9685b1, 0 0.5em 0 0 #efe2ff;
 box-shadow: 0 0 0 2px #9685b1, 0 0.5em 0 0 #efe2ff;
 -webkit-transform: translate3d(0, 0.5em, -1em);
 transform: translate3d(0, 0.5em, -1em);
}

button.learn-more:active {
 background: #efe2ff;
 -webkit-transform: translate(0em, 0.75em);
 transform: translate(0em, 0.75em);
}

button.learn-more:active::before {
 -webkit-box-shadow: 0 0 0 2px #9685b1, 0 0 #efe2ff;
 box-shadow: 0 0 0 2px #9685b1, 0 0 #efe2ff;
 -webkit-transform: translate3d(0, 0, -1em);
 transform: translate3d(0, 0, -1em);
}
</style>