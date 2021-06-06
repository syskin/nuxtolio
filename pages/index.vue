<template>
  <div class="min-h-screen">
    <section id="introduction" class="pt-20 pb-12">
      <wrapper-introduction />
    </section>
    <section id="about" class="pt-20 pb-12">
      <WrapperAbout :education="education" :experiences="experiences" />
    </section>
    <section id="projects" class="pt-20">
      <WrapperProjects :projects="projects" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Main',
  async asyncData(context) {
    const { $content, app } = context
    const projects = await $content(`${app.i18n.locale}/projects`)
      .sortBy('index', 'desc')
      .fetch()
    const education = await $content(`${app.i18n.locale}/education`)
      .sortBy('index', 'desc')
      .fetch()
    const experiences = await $content(`${app.i18n.locale}/experiences`)
      .sortBy('index', 'desc')
      .fetch()

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
