<template>
  <div
    class="
      z-30
      fixed
      inset-y-1/2
      h-fit-content
      w-18
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
        rounded-r-xl
        md:fixed
        md:rounded-3xl
        shadow-md
        text-white
        font-bold
        h-4/5
      "
    >
      <scrollactive>
        <ul
          class="scrollactive-nav flex flex-col p-3 md:py-3 md:px-2 text-center"
        >
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
              :to="localePath({ name: 'index', hash: '#projects' })"
            >
              Projects
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="scrollactive-item"
              :to="localePath({ name: 'index', hash: '#about' })"
            >
              About
            </nuxt-link>
          </li>
        </ul>
      </scrollactive>
    </div>
  </div>
</template>
<script>
import { mdiChevronDoubleRight, mdiChevronDoubleLeft } from '@mdi/js'
export default {
  data() {
    return {
      collapseState: false,
      mdiChevronDoubleRight,
      mdiChevronDoubleLeft,
    }
  },
  methods: {
    collapse() {
      this.collapseState = !this.collapseState
    },
  },
}
</script>
<style scoped>
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
</style>
