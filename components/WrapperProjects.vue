<template>
  <div>
    <h2>My projects</h2>
    <div>
      <div v-for="(project, index) in projects" :key="`project_${index}`">
        {{ project.title }}
        {{ project.technologies ? project.technologies.toString() : null }}
      </div>
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
