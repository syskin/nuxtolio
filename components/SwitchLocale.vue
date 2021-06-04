<template>
  <nuxt-link
    v-if="$i18n.locale !== 'en'"
    class="switch-locale text-md"
    :to="switchLocalePath('en')"
    >EN</nuxt-link
  >
  <nuxt-link
    v-else-if="$i18n.locale !== 'fr'"
    class="switch-locale text-md"
    :to="switchLocalePath('fr')"
    >FR</nuxt-link
  >
</template>
<style scoped>
.switch-locale {
  @apply fixed top-2 md:top-4 right-2 bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-1 w-12 h-8 text-center shadow-sm transition duration-150 ease-in-out;
}
</style>
