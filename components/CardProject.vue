<template>
  <div>
    <div>
      {{ project.title }}
    </div>
    <div class="flex flex-row flex-wrap">
      <ItemTechnology
        v-for="(technology, index) in project.technologies"
        :key="`technology_${index}`"
        class="mx-1"
        :name="technology"
      />
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
