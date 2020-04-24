<template>
  <div class="bg-white rounded-card shadow-sm p-8">
    <div class="spinner"></div>
  </div>
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
</style>