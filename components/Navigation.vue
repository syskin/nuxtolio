<template>
  <div
    class="
      z-30
      fixed
      bottom-0
      w-full
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
        bg-indigo-900
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
          class="
            scrollactive-nav
            flex flex-row
            md:flex-col
            py-0
            md:py-3
            px-1
            md:px-2
            text-center
          "
        >
          <li>
            <nuxt-link
              class="scrollactive-item"
              :to="localePath({ name: 'index', hash: '#introduction' })"
            >
              Text
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="scrollactive-item"
              :to="localePath({ name: 'index', hash: '#about' })"
            >
              text
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="scrollactive-item"
              :to="localePath({ name: 'index', hash: '#projects' })"
            >
              text
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
