<template>
  <div>About me wrapper education / experiences / stack</div>
</template>
<script>
export default {
  name: 'WrapperAbout',
  props: {
    education: {
      type: Array,
      default: null,
    },
    experiences: {
      type: Array,
      default: null,
    },
  },
}
</script>
