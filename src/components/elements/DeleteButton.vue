<template>
    <div class="btn">
        <span class="icon-wrapper">
            <svg class="icon" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
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