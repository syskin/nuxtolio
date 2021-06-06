<template>
  <transition name="fade" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </transition>
</template>
<script>
export default {
  inheritAttrs: false,
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 400ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
