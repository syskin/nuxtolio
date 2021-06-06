<template>
  <div class="py-3 px-6">
    <div
      class="
        bg-white
        rounded-3xl
        px-4
        py-2
        flex flex-col
        hover:shadow-md
        transform
        duration-300
      "
    >
      <div class="flex flex-row items-center">
        <img
          v-if="experience.picture"
          class="rounded-full w-10 h-10 object-cover"
          :src="experience.picture"
        />
        <div class="flex flex-col ml-1">
          <h4 class="text-lg font-medium text-gray-700">
            {{ experience.title }}
          </h4>
          <span class="text-xs text-gray-700 font-light">{{
            experience.duration
          }}</span>
        </div>
      </div>
      <p class="mt-3 text-xs text-gray-700">{{ experience.description }}</p>
      <div
        v-if="experience.technologies && experience.technologies.length > 0"
        class="mt-3"
      >
        <p class="text-sm text-gray-800">{{ $t('project.used-tech') }}</p>
        <div class="flex flex-row flex-wrap">
          <ItemTechnology
            v-for="(technology, index) in experience.technologies"
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
export default {
  name: 'CardExperience',
  props: {
    experience: {
      type: Object,
      default: null,
    },
  },
}
</script>
