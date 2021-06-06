<template>
  <div class="py-4 px-3 w-full md:w-1/2">
    <div
      class="
        rounded-3xl
        shadow-md
        p-6
        relative
        hover:shadow-lg
        transition
        duration-300
        ease-in-out
      "
    >
      <a
        v-if="project.icon && project.link"
        class="
          text-xs
          flex flex-row
          absolute
          -top-2
          right-2
          rounded-full
          bg-gray-100
          px-2
          py-1
        "
        :href="project.link"
        target="_blank"
        @mouseenter="active = true"
        @mouseleave="active = false"
      >
        <div v-if="project.icon" class="mr-1">
          <img
            class="rounded-full w-4 h-4"
            width="50"
            height="50"
            :src="project.icon"
            :alt="`icon-${project.title}`"
          />
        </div>
        <span
          :class="[
            active ? 'mr-3' : '',
            'transform duration-500 ease-in-out font-medium text-gray-600',
          ]"
          >{{ project.linkText }}</span
        >
        <TransitionFade mode="out-in">
          <icon-svg
            v-show="active"
            class="w-4 h-4 absolute right-1"
            :icon-path="mdiChevronRight"
          />
        </TransitionFade>
      </a>
      <div>
        <img
          class="object-cover w-full h-24 rounded-t-xl"
          :src="project.picture"
          width="300"
          height="100"
          :alt="project.title"
        />
      </div>
      <h3 class="text-gray-800 font-medium text-lg">
        {{ project.title }}
      </h3>
      <p v-if="project.date" class="text-xs italic text-gray-600">
        {{ project.date }}
      </p>
      <p class="text-xs leading-4 text-justify mt-3 text-gray-700">
        {{ project.description }}
      </p>
      <div
        v-if="project.technologies && project.technologies.length > 0"
        class="mt-3"
      >
        <p class="text-sm text-gray-800">{{ $t('project.used-tech') }}</p>
        <div class="flex flex-row flex-wrap">
          <ItemTechnology
            v-for="(technology, index) in project.technologies"
            :key="`technology_${index}`"
            class="m-1"
            :name="technology"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mdiChevronRight } from '@mdi/js'
import IconSvg from './IconSvg.vue'
export default {
  name: 'CardProject',
  components: { IconSvg },
  props: {
    project: {
      type: Object,
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
