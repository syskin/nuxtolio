<template>
  <div class="flex flex-col lg:flex-row p-2 md:p-8 lg:p-0">
    <div class="flex flex-col w-full px-2 my-3 lg:my-0">
      <div class="flex flex-row flex-wrap rounded-3xl bg-gray-100 py-3">
        <CardExperience
          v-for="(experience, index) in experiences"
          :key="`experience_${index}`"
          class="w-full md:w-1/2"
          :experience="experience"
        />
      </div>
    </div>
    <div
      class="
        w-full
        flex flex-col
        sm:flex-row
        lg:flex-col
        lg:w-1/3
        border-2 border-gray-100
        rounded-3xl
        md:rounded-l-3xl md:rounded-r-none
        py-2
        px-4
      "
    >
      <div class="w-full sm:w-1/2 lg:w-full">
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

      <div class="w-full sm:w-1/2 lg:w-full">
        <div
          class="flex flex-row flex-wrap items-center mt-6 sm:mt-0 lg:mt-6 mb-1"
        >
          <icon-svg
            class="text-green-500 h-8 w-8 mr-1"
            fill="currentColor"
            :icon-path="mdiSchoolOutline"
          />
          <h3 class="text-gray-700 text-lg font-medium">
            {{ $t('education') }}
          </h3>
        </div>
        <div class="flex flex-row flex-wrap">
          <CardEducation
            v-for="(school, index) in education"
            :key="`school_${index}`"
            class="w-full"
            :school="school"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mdiHeartCircleOutline, mdiSchoolOutline } from '@mdi/js'
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
      mdiSchoolOutline,
    }
  },
}
</script>
