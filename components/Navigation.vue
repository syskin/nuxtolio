<template>
  <div
    class="
      z-50
      fixed
      h-fit-content
      w-28
      md:w-48
      md:relative
      md:min-h-screen
      md:p-2
      md:m-4
    "
  >
    <div
      class="
        w-full
        md:w-40
        bg-primary
        rounded-br-xl
        md:fixed
        md:rounded-3xl
        shadow-md
        text-white
        font-bold
        h-4/5
      "
    >
      <scrollactive
        class="h-full relative text-center flex flex-col items-center"
      >
        <div class="hidden md:block font-normal text-sm w-full top-2 absolute">
          mathieu-cadu.com
        </div>
        <ul class="scrollactive-nav my-auto">
          <li>
            <nuxt-link
              class="scrollactive-item"
              :to="localePath({ name: 'index', hash: '#introduction' })"
            >
              Introduction
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="scrollactive-item"
              :to="localePath({ name: 'index', hash: '#about' })"
            >
              {{ $t('about') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="scrollactive-item"
              :to="localePath({ name: 'index', hash: '#projects' })"
            >
              {{ $t('projects') }}
            </nuxt-link>
          </li>
        </ul>
        <a
          class="hidden md:block w-full font-normal text-sm absolute bottom-2"
          href="https://www.linkedin.com/in/mathieucadu/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
          <icon-svg
            class="mx-auto w-12 h-12"
            fill="currentColor"
            :icon-path="mdiLinkedin"
          />
        </a>
      </scrollactive>
    </div>
  </div>
</template>
<script>
import {
  mdiChevronDoubleRight,
  mdiChevronDoubleLeft,
  mdiLinkedin,
} from '@mdi/js'
export default {
  data() {
    return {
      collapseState: false,
      mdiChevronDoubleRight,
      mdiChevronDoubleLeft,
      mdiLinkedin,
    }
  },
  methods: {
    collapse() {
      this.collapseState = !this.collapseState
    },
  },
}
</script>
<style lang="scss" scoped>
.fade-enter-active {
  transition: all 0.3s ease-in-out;
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translate(10px, 0);
}

.fade-leave-active {
  display: none;
}

ul {
  @apply w-full;
  li {
    @apply text-sm md:text-lg my-2 px-2 md:my-5 w-full;
  }
}

.scrollactive-item {
  @apply font-light transform duration-300;

  &.is-active {
    @apply font-bold;
  }
}
</style>
