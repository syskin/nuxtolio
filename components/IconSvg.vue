<template>
  <svg :width="width" :height="height" viewBox="0 0 24 24">
    <path :d="iconPath"></path>
  </svg>
</template>
<script>
export default {
  props: {
    iconPath: {
      type: String,
      default: null,
    },
    width: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 100,
    },
  },
}
</script>
