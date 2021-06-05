<template>
  <div class="container min-h-screen">
    <section id="introduction" class="min-h-full">
      <wrapper-introduction />
    </section>
    <section id="about" class="min-h-full">
      <WrapperAbout :education="education" :experiences="experiences" />
    </section>
    <section id="projects" class="min-h-full">
      <WrapperProjects :projects="projects" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Main',
  async asyncData(context) {
    const { $content, app } = context
    const projects = await $content(`${app.i18n.locale}/projects`).fetch()
    const education = await $content(`${app.i18n.locale}/education`).fetch()
    const experiences = await $content(`${app.i18n.locale}/experiences`).fetch()

    return {
      experiences,
      projects,
      education,
    }
  },
  data() {
    return {
      experiences: [],
      education: [],
      projects: [],
    }
  },
}
</script>
