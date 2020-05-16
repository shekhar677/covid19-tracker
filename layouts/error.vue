<template>
  <div class="min-h-screen min-h-web-kit flex justify-center items-center relative overflow-hidden">
    <h1 class="font-semibold absolute align-404 text-grey-50">404</h1>
    <div class="p-4 py-6 bg-white rounded-lg shadow-md sm:w-2/5 flex flex-col items-center relative z-3">
      <h1 class="text-center text-black font-semibold text-base sm:text-xl mb-2">Oops!<br>Nothing to see here.</h1>
      <p class="text-center text-black text-xs sm:text-base mb-4">You found a broken link</p>
      <span @click="$router.go('/')" class="btn mr-2 mb-4 inline-block cursor-pointer select-none py-2 px-5 font-normal shadow-md rounded-full bg-black text-white w-28 text-xs text-center">Home</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style>
 .align-404 {
   top: 35%;
   transform: translateY(-50%);
   right: 0;
   font-size: 30rem;
   z-index: 1;
 }

 @media (max-width: 640px) {
   .align-404 {
     font-size: 10rem;
   }
 }
</style>