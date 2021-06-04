<template>
  <div>
    <h2>My projects</h2>
    <CardProject
      v-for="(project, index) in projects"
      :key="`project_${index}`"
      :project="project"
    />
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
