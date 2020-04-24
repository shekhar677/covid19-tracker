<template>
  <transition name="fade" mode="out-in" appear>
    <div v-if="isLoading" @click="bounceIt" class="dialog absolute inset-0 z-10 flex justify-center items-center overflow-hidden select-none">
      <transition name="fade" mode="out-in" appear>
        <div class="info-card bg-grey rounded-lg px-6 py-3 w-64 select-none shadow-lg" :class="{ 'bounce': (bounce == true) }">
          <p class="text-sm mb-2">Please wait...</p>
          <div class="loader rounded-lg bg-grey-200 w-full overflow-hidden relative">
            <div class="bar h-1 bg-black"></div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      bounce: false
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
  methods: {
    bounceIt() {
      this.bounce = true
      setTimeout(() => {
        this.bounce = false
      }, 500);
    }
  }
}
</script>

<style>
  .dialog {
    background: rgba(0, 0, 0, 0.25);
  }

  .bar {
    animation: load 1.5s ease-in-out infinite;
  }

  .bounce {
    animation: bounce 0.4s ease;
  }

  @keyframes bounce {
    0% {
      transform: scale(1)
    }
    30% {
      transform: scale(1.05)
    }
    50% {
      transform: scale(1)
    }
    75% {
      transform: scale(1.05)
    }
    100% {
      transform: scale(1)
    }
  }

  @keyframes load {
    0% {
      transform: translateX(0%);
      width: 0%;
    }
    100% {
      width: 100%;
      transform: translateX(100%);
    }
  }
</style>