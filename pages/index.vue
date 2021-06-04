<template>
  <div class="container">
    <div>Read key: {{ $t('read') }}</div>
    <section id="introduction">
      <wrapper-introduction />
    </section>
    <section id="about">
      <WrapperAbout :education="education" :experiences="experiences" />
    </section>
    <section id="projects">
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
