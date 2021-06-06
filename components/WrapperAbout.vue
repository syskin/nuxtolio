<template>
  <div class="flex flex-col md:flex-row p-8 md:p-0">
    <div class="flex flex-col w-full">
      <div>Education</div>
      <div>Experience</div>
    </div>
    <div
      class="
        w-full
        md:w-1/3
        border-2 border-gray-100
        rounded-3xl
        md:rounded-l-3xl md:rounded-r-none
        py-2
        px-4
      "
    >
      <div class="flex flex-row flex-wrap items-center mb-2">
        <icon-svg
          class="text-red-500 h-8 w-8 mr-1"
          fill="currentColor"
          :icon-path="mdiHeartCircleOutline"
        />
        <h3 class="text-gray-700 text-lg font-medium">
          {{ $t('favorite-stack') }}
        </h3>
      </div>
      <div>
        <span class="text-gray-700 text-md font-normal">
          {{ $t('front-end') }}
        </span>
        <div class="flex flex-row flex-wrap">
          <item-technology class="m-1" name="nuxtjs" />
          <item-technology class="m-1" name="tailwindcss" />
        </div>
      </div>
      <div>
        <span class="text-gray-700 text-md font-normal">
          {{ $t('back-end') }}
        </span>
        <div class="flex flex-row flex-wrap">
          <item-technology class="m-1" name="expressjs" />
        </div>
      </div>
      <div>
        <span class="text-gray-700 text-md font-normal">
          {{ $t('database') }}
        </span>
        <div class="flex flex-row flex-wrap">
          <item-technology class="m-1" name="postgresql" />
          <item-technology class="m-1" name="mongodb" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mdiHeartCircleOutline } from '@mdi/js'
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
  data() {
    return {
      mdiHeartCircleOutline,
    }
  },
}
</script>
