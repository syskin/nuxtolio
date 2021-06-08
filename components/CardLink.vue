<template>
  <a
    class="text-xs flex flex-row absolute rounded-full px-2 py-1"
    :href="link"
    target="_blank"
    rel="noreferrer"
    @mouseenter="active = true"
    @mouseleave="active = false"
  >
    <div v-if="icon" class="mr-1">
      <img
        class="rounded-full w-4 h-4"
        width="50"
        height="50"
        :src="icon"
        :alt="`icon-${name}`"
      />
    </div>
    <span
      :class="[
        active ? 'mr-3' : '',
        'transform duration-500 ease-in-out font-medium text-gray-600',
      ]"
      >{{ text }}</span
    >
    <TransitionFade mode="out-in">
      <icon-svg
        v-show="active"
        class="w-4 h-4 absolute right-1"
        :icon-path="mdiChevronRight"
      />
    </TransitionFade>
  </a>
</template>
<script>
import { mdiChevronRight } from '@mdi/js'
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      mdiChevronRight,
      active: false,
    }
  },
}
</script>
