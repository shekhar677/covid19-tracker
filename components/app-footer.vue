<template>
  <div class="m-3 pb-6 pt-4 rounded-lg bg-grey sm:mt-0 sm:py-8 sm:px-6 md:px-12 mb-12 sm:mb-3">
    <div class="text-sm flex items-center justify-center">
      <span>created with</span>
      <span class="mx-1">
        <svg class="love-icon fill-orange w-4 h-4" viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.382812 44.578125C444.878906 15.832031 408.511719 0 368.972656 0c-29.554687 0-56.621094 9.34375-80.449218 27.769531C276.5 37.070312 265.605469 48.449219 256 61.730469c-9.601562-13.277344-20.5-24.660157-32.527344-33.960938C199.648438 9.34375 172.582031 0 143.027344 0 103.488281 0 67.117188 15.832031 40.613281 44.578125 14.425781 72.988281 0 111.800781 0 153.871094c0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687C495.867188 236.808594 512 197.171875 512 153.867188c0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/></svg>
      </span> 
      <span>in India</span>
    </div>
    <div class="text-center"><a target="_blank" class="font-semibold hover:underline text-xs uppercase" href="https://twitter.com/shekhargupta677">Shekhar</a></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .love-icon {
    -moz-animation: love 0.6s ease-in-out both infinite;
    -o-animation: love 0.6s ease-in-out both infinite;
    -webkit-animation: love 0.6s ease-in-out both infinite;
    animation: love 0.6s ease-in-out both infinite;
  }

  @-moz-keyframes love {
    0% {
      transform: scale(1)
    }
    50% {
      transform: scale(1.15)
    }
    100% {
      transform: scale(1)
    }
  }

  @-webkit-keyframes love {
    0% {
      transform: scale(1)
    }
    50% {
      transform: scale(1.15)
    }
    100% {
      transform: scale(1)
    }
  }

  @keyframes love {
    0% {
      transform: scale(1)
    }
    50% {
      transform: scale(1.15)
    }
    100% {
      transform: scale(1)
    }
  }
</style>