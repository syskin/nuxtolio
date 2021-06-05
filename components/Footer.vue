<template>
  <div class="w-full bottom-0 mt-40">
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
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#372750" />
        </g>
      </svg>
    </div>
    <footer
      class="h-20 bg-primary text-white font-medium text-md text-center py-4"
    >
      My footer
    </footer>
  </div>
</template>
<style scoped>
.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
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
  animation-delay: -3s;
  animation-duration: 20s;
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
    height: 40px;
    min-height: 40px;
  }
}
</style>
