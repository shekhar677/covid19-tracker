<template>
  <div class="z-20 shadow-sm bg-white w-full text-black h-12 sm:h-16 sm:sticky top-0 px-6 sm:px-4 sm:px-8 flex items-center justify-between flex-shrink">
    <n-link to="/">
    <svg class="fill-black w-24 sm:w-28 sm:h-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="267.606" height="72.147" viewBox="0 0 267.606 72.147"><g transform="translate(7 7.499)"><g transform="translate(-7 -7.499)"><path d="M0,26.833C0,16.139,8.236,8.46,19.26,8.46c6.133,0,11.252,2.23,14.572,6.285l-5.246,4.891A11.4,11.4,0,0,0,19.64,15.48C13,15.48,8.287,20.143,8.287,26.833A10.9,10.9,0,0,0,19.64,38.193a11.315,11.315,0,0,0,8.921-4.213l5.271,4.872c-3.345,4.105-8.464,6.336-14.648,6.336C8.236,45.187,0,37.534,0,26.833Z" transform="translate(0 7.713)" /><path d="M57.44,26.833c0-10.542,8.236-18.373,19.412-18.373s19.412,7.755,19.412,18.373S88.028,45.206,76.852,45.206,57.44,37.376,57.44,26.833Zm30.512,0c0-6.741-4.764-11.353-11.1-11.353s-11.1,4.612-11.1,11.353,4.764,11.36,11.1,11.36S87.952,33.574,87.952,26.833Z" transform="translate(-21.048 7.713)" /><path d="M196.12,9.46h8.236V44.939H196.12Z" transform="translate(-51.677 7.347)" /><path d="M222.36,9.46h16.118c11.607,0,19.564,6.969,19.564,17.74s-7.957,17.74-19.564,17.74H222.36ZM238.072,38.2c7.045,0,11.657-4.207,11.657-11s-4.612-11-11.657-11h-7.5v22Z" transform="translate(-61.293 7.347)" /><path d="M286.28,37.94h14.344v6.336H286.28Z" transform="translate(-84.716 -3.089)" /><path d="M327.158,9.46V44.939h-8.236V16.049H311.87V9.46Z" transform="translate(-94.093 7.347)" /><path d="M373.572,26.073c0,12.272-7.349,19.114-18.094,19.114a19.066,19.066,0,0,1-9.839-2.433l3.047-6.038a11.468,11.468,0,0,0,6.633,1.774c5.886,0,9.738-3.491,9.991-10.34-2.078,2.078-5.119,3.168-8.819,3.168-6.849,0-12.221-4.359-12.221-11.049,0-7.248,5.93-11.81,13.438-11.81C367.541,8.485,373.572,14.618,373.572,26.073Zm-9.2-6.184c0-3.041-2.281-5.271-6.184-5.271-3.5,0-5.93,2.027-5.93,5.271s2.376,5.322,6.031,5.322S364.373,22.981,364.373,19.889Z" transform="translate(-105.966 7.713)" /><path d="M153.929,0A27,27,0,0,0,126.94,26.989c0,14.911,26.989,45.157,26.989,45.157s27-30.247,27-45.157A27,27,0,0,0,153.929,0Zm0,37.838A10.857,10.857,0,1,1,164.787,26.98,10.857,10.857,0,0,1,153.929,37.838Z" transform="translate(-44.513)" /></g></g></svg>
    </n-link>
    <div class="flex items-center">
      <div class="hidden rounded-full bg-grey sm:flex items-center px-6 py-1 mr-6">
        <svg class="fill-grey-200 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="46.992" height="47" viewBox="0 0 46.992 47"><path d="M46.353,40.634,37.2,31.483a2.2,2.2,0,0,0-1.56-.643h-1.5a19.083,19.083,0,1,0-3.3,3.3v1.5a2.2,2.2,0,0,0,.643,1.56l9.151,9.151a2.194,2.194,0,0,0,3.112,0l2.6-2.6a2.213,2.213,0,0,0,.009-3.121ZM19.092,30.841A11.749,11.749,0,1,1,30.841,19.092,11.742,11.742,0,0,1,19.092,30.841Z"/></svg>
        <input type="text" placeholder="find your city" name="search" id="search" class="bg-grey rounded-full outline-none pl-3 text-xs">
      </div>
      <app-notification></app-notification>
    </div>
  </div>
</template>

<script>
import appNotification from '~/components/app-notification'

export default {
  components: {
    appNotification
  }
}
</script>

<style>

</style>