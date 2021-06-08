<template>
  <span v-if="technology">
    <a
      class="
        flex flex-row
        cursor-pointer
        hover:bg-gray-100
        bg-gray-50
        rounded-md
        px-2
        py-1
        font-medium
        text-sm text-gray-700
        transition
        duration-300
        ease-in-out
      "
      :href="technology.link"
      target="_blank"
      rel="noreferrer"
    >
      <img
        class="w-6 h-6 mr-1"
        type="image/svg+xml"
        :src="technology.icon"
        :alt="technology.name"
        width="50"
        height="50"
      />
      <span class="pt-1">{{ technology.name }}</span>
    </a>
  </span>
</template>
<script>
import technologies from '../constants/technologies'
export default {
  name: 'ItemTechnology',
  props: {
    name: {
      type: String,
      default: null,
    },
  },
  computed: {
    technology() {
      if (!this.name) return
      return technologies[this.name]
    },
  },
}
</script>
