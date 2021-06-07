<template>
  <div
    class="
      flex flex-col
      md:flex-row
      items-center
      justify-center
      md:justify-start
    "
  >
    <div class="mx-auto">
      <div class="flex items-center shape w-52 h-52">
        <div class="flex items-center shape secondary-shape w-48 h-48">
          <img
            class="w-40 h-40 rounded-full mx-auto object-cover"
            src="/mc.jpg"
            width="100"
            height="100"
            alt="mathieu cadu"
          />
        </div>
      </div>
    </div>
    <span class="justify-start introduction w-full px-8"
      >{{ displayedText }}<span class="cursor"></span
    ></span>
  </div>
</template>
<script>
export default {
  name: 'WrapperIntroduction',
  data() {
    return {
      displayedText: '',
    }
  },
  computed: {
    test() {
      return this.displayedText
    },
  },
  created() {
    if (process.client) {
      this.displayedText = ''
      this.setIntroductionText()
    } else this.displayedText = this.$i18n.t('introduction')
  },
  methods: {
    setIntroductionText() {
      this.start(0)
    },
    start(counter) {
      const text = this.$i18n.t('introduction')
      const textArray = text.split(``)
      const self = this
      if (counter < textArray.length) {
        setTimeout(function () {
          if (textArray[counter]) self.displayedText += textArray[counter]
          counter++
          self.start(counter)
        }, 60)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
span {
  font-size: 28px;
  color: #372750;
}

.shape {
  background: #f5540b;
  animation: morph 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  transition: all 3s ease-in-out;
  z-index: 0;
}

.secondary-shape {
  background: #372750;
  animation: morph 5500ms ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  transition: all 3s ease-in-out;
  z-index: 0;
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

.cursor {
  border-right: solid 3px #f5540b;
  animation: blink-caret 0.95s step-end infinite;
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #f5540b;
  }
}
</style>
