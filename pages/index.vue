<template>
  <div class="min-h-screen">
    <section id="introduction" class="pt-20 pb-12 px-4 md:px-1">
      <WrapperIntroduction />
    </section>
    <section id="about" class="py-16 px-4 md:px-1">
      <h2>{{ $t('about') }}</h2>
      <p>{{ $t('about-description') }}</p>
      <WrapperAbout
        class="mt-8"
        :education="education"
        :experiences="experiences"
      />
    </section>
    <section id="projects" class="pt-12 px-4 md:px-1">
      <h2>{{ $t('projects') }}</h2>
      <p>{{ $t('projects-description') }}</p>
      <WrapperProjects class="mt-8" :projects="projects" />
    </section>
  </div>
</template>

<script>
import WrapperAbout from '~/components/WrapperAbout.vue'
import WrapperIntroduction from '~/components/WrapperIntroduction.vue'
import WrapperProjects from '~/components/WrapperProjects.vue'
export default {
  name: 'Main',
  components: { WrapperAbout, WrapperIntroduction, WrapperProjects },
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

  head() {
    return {
      title: this.$i18n.t('page.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.t('page.description'),
        },
        {
          property: 'og:url',
          content: this.$i18n.t('page.url'),
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$i18n.t('page.title'),
        },
        {
          property: 'og:image',
          content: this.$i18n.t('page.url') + this.$i18n.t('page.picture'),
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.$i18n.t('page.site-name'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$i18n.t('page.description'),
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$i18n.t('page.title'),
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$i18n.t('page.description'),
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.$i18n.t('page.url') + this.$i18n.t('page.picture'),
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.$i18n.t('page.site-name'),
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
h2 {
  @apply font-medium text-xl text-center;
}
p {
  @apply font-normal text-center;
}
</style>
