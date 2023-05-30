<template>
    <div class="btn">
        <span class="icon-wrapper">
            -
        </span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  width: 25px;
  height: 25px;
  border: none;
  background-color: #eb597b;
  position: relative;
  border-radius: 10px;
  -webkit-box-shadow: 1px 1px 5px .2px #00000035;
  box-shadow: 1px 1px 5px .2px #00000035;
  -webkit-transition: .2s linear;
  transition: .2s linear;
  transition-delay: .2s;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: space-between;
}

.btn:hover > .icon-wrapper .icon {
  transform: scale(1.1);
}

.icon-wrapper {
  width: 25px;
  height: 25px;
  padding: 0.25rem;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  transform: scale(.9);
  transition: .2s linear;
}

.icon path {
  stroke: #000;
  stroke-width: 2px;
  -webkit-transition: .2s linear;
  transition: .2s linear;
}
</style>