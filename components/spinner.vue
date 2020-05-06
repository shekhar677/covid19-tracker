<template>
  <transition name="fade">
    <div class="bg-white dark-mode:bg-black-lighter rounded-card shadow-sm p-8">
      <div class="spinner"></div>
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style>
@keyframes spinner {
  to {
    transform: translate(-50%, -50%) rotate(360deg)
  }
}

.spinner {
  position: relative;
}
 
.spinner:before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2rem;
  height: 2rem;
  transform: translate(-50%, -50%) rotate(0deg);
  border-radius: 50%;
  border-top: 3px solid #18253C;
  border-right: 3px solid transparent;
  animation: spinner .6s linear infinite;
}

@media (prefers-color-scheme: dark) {
  .spinner:before {
    border-top: 3px solid #f9f9f9;
  }
}
</style>