<template>
  <div>
    <h2>My projects</h2>
    <div class="flex flex-row flex-wrap">
      <CardProject
        v-for="(project, index) in projects"
        :key="`project_${index}`"
        :project="project"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'WrapperProjects',
  props: {
    projects: {
      type: Array,
      default: null,
    },
  },
}
</script>
