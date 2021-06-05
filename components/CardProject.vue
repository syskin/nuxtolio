<template>
  <div class="p-2 w-full md:w-1/2">
    <div class="rounded-3xl shadow-md p-6 hover:shadow-lg">
      <div>
        <img
          class="object-cover w-full h-24 rounded-t-xl"
          src="https://cdn.guidingtech.com/imager/assets/WordPress-Import/2017/06/181245/img-12_4d470f76dc99e18ad75087b1b8410ea9.jpg?1594270830"
        />
      </div>
      <h3 class="text-gray-800 font-medium">
        {{ project.title }}
      </h3>
      <p class="text-sm leading-5">
        {{ project.description }}
      </p>
      <div
        v-if="project.technologies && project.technologies.length > 0"
        class="mt-3"
      >
        <p class="font-light text-xs">{{ $t('project.used-tech') }}</p>
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
export default {
  name: 'CardProject',
  props: {
    project: {
      type: Object,
      default: null,
    },
  },
}
</script>
