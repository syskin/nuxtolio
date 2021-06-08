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
      <CardLink
        class="-top-2 right-2 bg-gray-100"
        :text="project.linkText"
        :name="project.title"
        :link="project.link"
        :icon="project.icon"
      />
      <div>
        <img
          class="object-cover w-full h-24 rounded-t-xl"
          :src="project.picture"
          width="300"
          height="100"
          :alt="project.title"
        />
      </div>
      <span class="text-gray-800 font-medium text-lg">
        {{ project.title }}
      </span>
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
