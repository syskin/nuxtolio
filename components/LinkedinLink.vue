<template>
  <a
    class="font-normal text-sm"
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
</template>
<script>
import { mdiLinkedin } from '@mdi/js'
export default {
  data() {
    return {
      mdiLinkedin,
    }
  },
}
</script>
