<template>
  <nuxt-link
    v-if="$i18n.locale !== 'en'"
    class="switch-locale text-md"
    :to="switchLocalePath('en')"
  >
    <img
      class="w-6 h-6"
      type="image/svg+xml"
      :src="flagUK"
      alt="united kingdom"
      width="20"
      height="20"
  /></nuxt-link>
  <nuxt-link
    v-else-if="$i18n.locale !== 'fr'"
    class="switch-locale text-md"
    :to="switchLocalePath('fr')"
  >
    <img
      class="w-6 h-6 mr-1"
      type="image/svg+xml"
      :src="flagFR"
      alt="france"
      width="20"
      height="20"
    />
  </nuxt-link>
</template>
<script>
import flagFR from 'assets/svg/france.svg'
import flagUK from 'assets/svg/united-kingdom.svg'
export default {
  data() {
    return {
      flagFR,
      flagUK,
    }
  },
}
</script>
<style scoped>
.switch-locale {
  @apply z-50 fixed top-2 md:top-4 right-2 bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-1 w-12 h-8 text-center transition duration-150 ease-in-out;
}
</style>
