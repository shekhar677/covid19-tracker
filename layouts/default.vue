<template>
  <div class="min-h-screen">
    <div class="drawer shadow z-20 bg-grey text-black sm:border-r sm:border-grey-100 w-full h-12 sm:h-screen overflow-hidden fixed bottom-0 sm:top-0 sm:left-0" :class="{ 'sm:w-20': !drawer, 'sm:w-48': drawer }">
      <div class="h-full flex flex-shrink sm:flex-col sm:items-start items-center select-none px-5">
        <div class="ham sm:flex justify-center items-center h-16 p-2 hidden">
          <svg @click="drawer = !drawer" class="stroke-black cursor-pointer w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="47.117" height="28.068" viewBox="0 0 47.117 28.068"><g transform="translate(-30.942 -59.35)"><line x2="23.058" transform="translate(33.442 61.85)" fill="none" stroke-linecap="round" stroke-width="5"/><line x2="42.117" transform="translate(33.442 73.384)" fill="none" stroke-linecap="round" stroke-width="5"/><line x2="23" transform="translate(52.5 84.918)" fill="none" stroke-linecap="round" stroke-width="5"/></g></svg>
        </div>
        <div class="flex sm:flex-col justify-around sm:min-h-2/5 min-h-full sm:min-w-0 min-w-full sm:mt-10">
          <n-link to="/" class="flex items-center">
            <div class="cursor-pointer nav-item p-2-5 rounded-lg flex flex-shrink-0 justify-center" :class="{ 'nav-active': $nuxt.$route.name == 'index' }">
              <svg class="fill-black hover:fill-white sm:w-4 w-4 sm:h-4 h-4" xmlns="http://www.w3.org/2000/svg" width="42.985" height="46.893" viewBox="0 0 42.985 46.893"><g transform="translate(-5.625 -4.5)"><path d="M13.352,51.393h5.862a.98.98,0,0,0,.977-.977V5.477a.98.98,0,0,0-.977-.977H13.352a.98.98,0,0,0-.977.977V50.416A.98.98,0,0,0,13.352,51.393Z" transform="translate(4.973 0)"/><path d="M6.6,39.789h5.862a.98.98,0,0,0,.977-.977V21.227a.98.98,0,0,0-.977-.977H6.6a.98.98,0,0,0-.977.977V38.812A.98.98,0,0,0,6.6,39.789Z" transform="translate(0 11.604)"/><path d="M20.114,43.1h5.837a.985.985,0,0,0,.989-.989V16.739a.985.985,0,0,0-.989-.989H20.114a.985.985,0,0,0-.989.989V42.115A.985.985,0,0,0,20.114,43.1Z" transform="translate(9.946 8.289)"/><path d="M25.875,9.989v37.1a.985.985,0,0,0,.989.989H32.7a.985.985,0,0,0,.989-.989V9.989A.985.985,0,0,0,32.7,9H26.864A.985.985,0,0,0,25.875,9.989Z" transform="translate(14.92 3.315)"/></g></svg>
            </div>
          </n-link>
          <n-link to="/symptoms" class="flex items-center">
            <div class="cursor-pointer nav-item p-2-5 rounded-lg flex justify-center" :class="{ 'nav-active': $nuxt.$route.name == 'symptoms' }">
              <svg class="fill-black hover:fill-white sm:w-5 w-4 sm:h-5 h-4" xmlns="http://www.w3.org/2000/svg" width="46.791" height="47.093" viewBox="0 0 46.791 47.093"><path d="M19.423,43.6a3.468,3.468,0,0,1,1.368-2.757l.077-4.382a13.269,13.269,0,0,1-7.905-4.334l-5.9,6.249A3.51,3.51,0,0,1,3.532,41.86a3.488,3.488,0,1,1,0-6.976,3.59,3.59,0,0,1,.728.074l6.333-6.709a12.886,12.886,0,0,1-.87-4.163L4.816,20.692a3.559,3.559,0,0,1-1.284.238,3.489,3.489,0,1,1,0-6.977,3.519,3.519,0,0,1,3.488,2.94l3.419,2.365a13.212,13.212,0,0,1,9.555-8.465l-.08-4.544A3.468,3.468,0,0,1,18.54,3.488a3.531,3.531,0,0,1,7.062,0,3.465,3.465,0,0,1-1.275,2.684l.077,4.37a13.268,13.268,0,0,1,7.758,3.6l7.659-8.114a3.46,3.46,0,0,1-.093-.8,3.531,3.531,0,1,1,3.59,3.488l-8.5,9.005a12.982,12.982,0,0,1,.8,9.65l5.2,4.956a3.593,3.593,0,0,1,.677-.064,3.488,3.488,0,1,1-3.531,3.488c0-.028,0-.056,0-.083L33.52,31.434a13.266,13.266,0,0,1-8.237,4.992l-.079,4.49A3.465,3.465,0,0,1,26.485,43.6a3.531,3.531,0,0,1-7.062,0Z"/></svg>
            </div>
          </n-link>
          <n-link to="/prevention" class="flex items-center">
            <div class="cursor-pointer nav-item p-2-5 rounded-lg flex justify-center" :class="{ 'nav-active': $nuxt.$route.name == 'prevention' }">
              <svg class="fill-black hover:fill-white sm:w-5 w-4 sm:h-5 h-4" xmlns="http://www.w3.org/2000/svg" width="37.115" height="44.228" viewBox="0 0 37.115 44.228"><path d="M12.205,24.713l.058-3.3a7.794,7.794,0,0,1-4.645-2.545L4.15,22.533a2.062,2.062,0,0,1-2.074,2.042,2.048,2.048,0,1,1,0-4.1,2.111,2.111,0,0,1,.426.043l3.723-3.939a7.567,7.567,0,0,1-.511-2.443L2.829,12.147a2.093,2.093,0,0,1-.754.139,2.048,2.048,0,1,1,0-4.1A2.067,2.067,0,0,1,4.125,9.918l2.01,1.389a7.76,7.76,0,0,1,5.614-4.97L11.7,3.668a2.036,2.036,0,0,1-.806-1.62,2.075,2.075,0,0,1,4.15,0A2.033,2.033,0,0,1,14.3,3.623l.045,2.566a7.8,7.8,0,0,1,4.577,2.132l1.967-2.057,1.89,1.754-2.3,2.41a7.563,7.563,0,0,1,.8,3.394,7.713,7.713,0,0,1-6.414,7.562L14.8,24.758Z" transform="translate(13.705 13.17)"/><g transform="translate(0 0)"><path d="M76.056,7.162,59.216.132a1.71,1.71,0,0,0-1.318,0L41.059,7.162A1.728,1.728,0,0,0,40,8.757V17.3A28.934,28.934,0,0,0,57.908,44.1a1.71,1.71,0,0,0,1.3,0A28.934,28.934,0,0,0,77.115,17.3V8.757A1.728,1.728,0,0,0,76.056,7.162ZM73.678,17.3A25.489,25.489,0,0,1,58.558,40.624,25.489,25.489,0,0,1,43.437,17.3V9.911L58.558,3.6,73.678,9.911Z" transform="translate(-40 0)"/></g></svg>
            </div>
          </n-link>
          <n-link to="/treatment" class="flex items-center">
            <div class="cursor-pointer nav-item p-2-5 rounded-lg flex justify-center" :class="{ 'nav-active': $nuxt.$route.name == 'treatment' }">
              <svg class="fill-black hover:fill-white sm:w-5 w-4 sm:h-5 h-4" xmlns="http://www.w3.org/2000/svg" width="48.765" height="47.365" viewBox="0 0 48.765 47.365"><path d="M14.7,47.365V33.085H0V14.279H14.7V0H34.062V14.279h14.7V33.085h-14.7v14.28Z"/></svg>
            </div>
          </n-link>
        </div>
      </div>
    </div>
    <div class="content" :class="{ 'sm:ml-48': drawer, 'sm:ml-20': !drawer }">
      <div class="z-20 shadow bg-white w-full text-black h-16 sm:sticky top-0 px-4 sm:px-8 flex items-center justify-between flex-shrink">
        <n-link to="/">
        <svg class="fill-black w-28 h-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="267.606" height="72.147" viewBox="0 0 267.606 72.147"><g transform="translate(7 7.499)"><g transform="translate(-7 -7.499)"><path d="M0,26.833C0,16.139,8.236,8.46,19.26,8.46c6.133,0,11.252,2.23,14.572,6.285l-5.246,4.891A11.4,11.4,0,0,0,19.64,15.48C13,15.48,8.287,20.143,8.287,26.833A10.9,10.9,0,0,0,19.64,38.193a11.315,11.315,0,0,0,8.921-4.213l5.271,4.872c-3.345,4.105-8.464,6.336-14.648,6.336C8.236,45.187,0,37.534,0,26.833Z" transform="translate(0 7.713)" /><path d="M57.44,26.833c0-10.542,8.236-18.373,19.412-18.373s19.412,7.755,19.412,18.373S88.028,45.206,76.852,45.206,57.44,37.376,57.44,26.833Zm30.512,0c0-6.741-4.764-11.353-11.1-11.353s-11.1,4.612-11.1,11.353,4.764,11.36,11.1,11.36S87.952,33.574,87.952,26.833Z" transform="translate(-21.048 7.713)" /><path d="M196.12,9.46h8.236V44.939H196.12Z" transform="translate(-51.677 7.347)" /><path d="M222.36,9.46h16.118c11.607,0,19.564,6.969,19.564,17.74s-7.957,17.74-19.564,17.74H222.36ZM238.072,38.2c7.045,0,11.657-4.207,11.657-11s-4.612-11-11.657-11h-7.5v22Z" transform="translate(-61.293 7.347)" /><path d="M286.28,37.94h14.344v6.336H286.28Z" transform="translate(-84.716 -3.089)" /><path d="M327.158,9.46V44.939h-8.236V16.049H311.87V9.46Z" transform="translate(-94.093 7.347)" /><path d="M373.572,26.073c0,12.272-7.349,19.114-18.094,19.114a19.066,19.066,0,0,1-9.839-2.433l3.047-6.038a11.468,11.468,0,0,0,6.633,1.774c5.886,0,9.738-3.491,9.991-10.34-2.078,2.078-5.119,3.168-8.819,3.168-6.849,0-12.221-4.359-12.221-11.049,0-7.248,5.93-11.81,13.438-11.81C367.541,8.485,373.572,14.618,373.572,26.073Zm-9.2-6.184c0-3.041-2.281-5.271-6.184-5.271-3.5,0-5.93,2.027-5.93,5.271s2.376,5.322,6.031,5.322S364.373,22.981,364.373,19.889Z" transform="translate(-105.966 7.713)" /><path d="M153.929,0A27,27,0,0,0,126.94,26.989c0,14.911,26.989,45.157,26.989,45.157s27-30.247,27-45.157A27,27,0,0,0,153.929,0Zm0,37.838A10.857,10.857,0,1,1,164.787,26.98,10.857,10.857,0,0,1,153.929,37.838Z" transform="translate(-44.513)" /></g></g></svg>
        </n-link>
        <div class="flex items-center">
          <div class="rounded-full bg-grey flex items-center px-6 py-2 mr-6">
            <svg class="fill-grey-200 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="46.992" height="47" viewBox="0 0 46.992 47"><path d="M46.353,40.634,37.2,31.483a2.2,2.2,0,0,0-1.56-.643h-1.5a19.083,19.083,0,1,0-3.3,3.3v1.5a2.2,2.2,0,0,0,.643,1.56l9.151,9.151a2.194,2.194,0,0,0,3.112,0l2.6-2.6a2.213,2.213,0,0,0,.009-3.121ZM19.092,30.841A11.749,11.749,0,1,1,30.841,19.092,11.742,11.742,0,0,1,19.092,30.841Z"/></svg>
            <input type="text" placeholder="find your city" name="search" id="search" class="bg-grey rounded-full outline-none pl-3 text-xs">
          </div>
          <app-notification></app-notification>
        </div>
      </div>
      <div class="main bg-grey relative">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import appNotification from '~/components/app-notification'

export default {
  components: {
    appNotification
  },
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    
  }
}
</script>

<style>
html {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.drawer {
  transition: width 0.3s ease;
}

.content {
  transition: margin 0.3s ease;
}

.nav-item {
  background: transparent;
  transition: background 0.3s ease;
}

.nav-item.nav-active, .nav-item:hover {
  background: #18253C;
  box-shadow: 1px 3px 8px 0px #18253c59;
}

.nav-item.nav-active svg, .nav-item:hover svg {
  fill: white;
}

.nav-item svg {
  transition: fill 0.2s;
}

.search-box {
  display: flex;
  justify-content: center;
  align-content: center;
}

/* .nav {
  display: flex;
  align-content: center;
  justify-content: space-between;
} */

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
