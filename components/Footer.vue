<template>
  <div class="w-full bottom-0 mt-12">
    <div>
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="#F5540B" />
          <use xlink:href="#gentle-wave" x="48" y="4" fill="#372750" />
        </g>
      </svg>
    </div>
    <footer
      class="
        bg-primary
        text-white
        font-medium
        text-md text-center
        py-8
        relative
      "
    >
      <div class="text-sm flex flex-col">
        <div
          class="flex flex-row flex-wrap items-center mx-auto justify-center"
        >
          <span>{{ $t('made-with') }}</span>
          <item-technology class="m-1" name="nuxtjs" />
          <item-technology class="m-1" name="tailwindcss" />
          <span class="text-xs font-light">({{ $t('passion') }})</span>
        </div>
        <a
          class="flex flex-row flex-wrap items-center mx-auto"
          href="https://github.com/syskin/nuxtolio"
          target="_blank"
          rel="noreferrer"
        >
          <span>{{ $t('available-github') }}</span>
          <img
            class="w-6 h-6 ml-1 object-contain rounded-full"
            src="/content/projects/github-icon.png"
            alt="github icon"
            width="50"
            height="50"
          />
        </a>
      </div>
    </footer>
  </div>
</template>
<style scoped>
.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -5px;
  min-height: 100px;
  max-height: 150px;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 25s;
}
.parallax > use:nth-child(2) {
  animation-duration: 10s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/* Shrinking for mobile */

@media (max-width: 768px) {
  .waves {
    height: 45px;
    min-height: 45px;
  }
}
</style>
