<template>
  <div id="app">
    <transition name="slide">
      <router-view class="position-div"></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.slide-enter{
    opacity:0;
}

.slide-enter-active{
    transition: all 2000ms;
}
</style>
