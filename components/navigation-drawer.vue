<template>
  <div class="drawer shadow z-20 bg-black sm:bg-grey text-black sm:border-r sm:border-grey-100 w-full h-12 sm:h-screen overflow-hidden fixed bottom-0 sm:top-0 sm:left-0" :class="{ 'sm:w-20': !drawer, 'sm:w-48': drawer }">
    <div class="h-full flex flex-shrink sm:flex-col sm:items-start items-center select-none px-5">
      <div class="ham hidden sm:flex justify-center items-center h-16 p-2">
        <svg @click="drawerControl" class="stroke-black cursor-pointer w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="47.117" height="28.068" viewBox="0 0 47.117 28.068"><g transform="translate(-30.942 -59.35)"><line x2="23.058" transform="translate(33.442 61.85)" fill="none" stroke-linecap="round" stroke-width="5"/><line x2="42.117" transform="translate(33.442 73.384)" fill="none" stroke-linecap="round" stroke-width="5"/><line x2="23" transform="translate(52.5 84.918)" fill="none" stroke-linecap="round" stroke-width="5"/></g></svg>
      </div>
      <div class="flex sm:flex-col justify-around h-8 sm:min-h-2/5 sm:min-w-0 min-w-full sm:mt-6">
        <n-link to="/" class="flex items-center">
          <div class="cursor-pointer nav-item p-2 sm:p-2-5 rounded-lg flex flex-shrink-0 justify-center" :class="{ 'nav-active': $nuxt.$route.name == 'index' }">
            <svg class="fill-white sm:fill-black hover:fill-black sm:hover:fill-white sm:w-4 w-4 sm:h-4 h-4" xmlns="http://www.w3.org/2000/svg" width="42.985" height="46.893" viewBox="0 0 42.985 46.893"><g transform="translate(-5.625 -4.5)"><path d="M13.352,51.393h5.862a.98.98,0,0,0,.977-.977V5.477a.98.98,0,0,0-.977-.977H13.352a.98.98,0,0,0-.977.977V50.416A.98.98,0,0,0,13.352,51.393Z" transform="translate(4.973 0)"/><path d="M6.6,39.789h5.862a.98.98,0,0,0,.977-.977V21.227a.98.98,0,0,0-.977-.977H6.6a.98.98,0,0,0-.977.977V38.812A.98.98,0,0,0,6.6,39.789Z" transform="translate(0 11.604)"/><path d="M20.114,43.1h5.837a.985.985,0,0,0,.989-.989V16.739a.985.985,0,0,0-.989-.989H20.114a.985.985,0,0,0-.989.989V42.115A.985.985,0,0,0,20.114,43.1Z" transform="translate(9.946 8.289)"/><path d="M25.875,9.989v37.1a.985.985,0,0,0,.989.989H32.7a.985.985,0,0,0,.989-.989V9.989A.985.985,0,0,0,32.7,9H26.864A.985.985,0,0,0,25.875,9.989Z" transform="translate(14.92 3.315)"/></g></svg>
          </div>
        </n-link>
        <n-link to="/symptoms" class="flex items-center">
          <div class="cursor-pointer nav-item p-2 sm:p-2-5 rounded-lg flex justify-center" :class="{ 'nav-active': $nuxt.$route.name == 'symptoms' }">
            <svg class="fill-white sm:fill-black hover:fill-black sm:hover:fill-white sm:w-5 w-4 sm:h-5 h-4" xmlns="http://www.w3.org/2000/svg" width="46.791" height="47.093" viewBox="0 0 46.791 47.093"><path d="M19.423,43.6a3.468,3.468,0,0,1,1.368-2.757l.077-4.382a13.269,13.269,0,0,1-7.905-4.334l-5.9,6.249A3.51,3.51,0,0,1,3.532,41.86a3.488,3.488,0,1,1,0-6.976,3.59,3.59,0,0,1,.728.074l6.333-6.709a12.886,12.886,0,0,1-.87-4.163L4.816,20.692a3.559,3.559,0,0,1-1.284.238,3.489,3.489,0,1,1,0-6.977,3.519,3.519,0,0,1,3.488,2.94l3.419,2.365a13.212,13.212,0,0,1,9.555-8.465l-.08-4.544A3.468,3.468,0,0,1,18.54,3.488a3.531,3.531,0,0,1,7.062,0,3.465,3.465,0,0,1-1.275,2.684l.077,4.37a13.268,13.268,0,0,1,7.758,3.6l7.659-8.114a3.46,3.46,0,0,1-.093-.8,3.531,3.531,0,1,1,3.59,3.488l-8.5,9.005a12.982,12.982,0,0,1,.8,9.65l5.2,4.956a3.593,3.593,0,0,1,.677-.064,3.488,3.488,0,1,1-3.531,3.488c0-.028,0-.056,0-.083L33.52,31.434a13.266,13.266,0,0,1-8.237,4.992l-.079,4.49A3.465,3.465,0,0,1,26.485,43.6a3.531,3.531,0,0,1-7.062,0Z"/></svg>
          </div>
        </n-link>
        <n-link to="/prevention" class="flex items-center">
          <div class="cursor-pointer nav-item p-2 sm:p-2-5 rounded-lg flex justify-center" :class="{ 'nav-active': $nuxt.$route.name == 'prevention' }">
            <svg class="fill-white sm:fill-black hover:fill-black sm:hover:fill-white sm:w-5 w-4 sm:h-5 h-4" xmlns="http://www.w3.org/2000/svg" width="37.115" height="44.228" viewBox="0 0 37.115 44.228"><path d="M12.205,24.713l.058-3.3a7.794,7.794,0,0,1-4.645-2.545L4.15,22.533a2.062,2.062,0,0,1-2.074,2.042,2.048,2.048,0,1,1,0-4.1,2.111,2.111,0,0,1,.426.043l3.723-3.939a7.567,7.567,0,0,1-.511-2.443L2.829,12.147a2.093,2.093,0,0,1-.754.139,2.048,2.048,0,1,1,0-4.1A2.067,2.067,0,0,1,4.125,9.918l2.01,1.389a7.76,7.76,0,0,1,5.614-4.97L11.7,3.668a2.036,2.036,0,0,1-.806-1.62,2.075,2.075,0,0,1,4.15,0A2.033,2.033,0,0,1,14.3,3.623l.045,2.566a7.8,7.8,0,0,1,4.577,2.132l1.967-2.057,1.89,1.754-2.3,2.41a7.563,7.563,0,0,1,.8,3.394,7.713,7.713,0,0,1-6.414,7.562L14.8,24.758Z" transform="translate(13.705 13.17)"/><g transform="translate(0 0)"><path d="M76.056,7.162,59.216.132a1.71,1.71,0,0,0-1.318,0L41.059,7.162A1.728,1.728,0,0,0,40,8.757V17.3A28.934,28.934,0,0,0,57.908,44.1a1.71,1.71,0,0,0,1.3,0A28.934,28.934,0,0,0,77.115,17.3V8.757A1.728,1.728,0,0,0,76.056,7.162ZM73.678,17.3A25.489,25.489,0,0,1,58.558,40.624,25.489,25.489,0,0,1,43.437,17.3V9.911L58.558,3.6,73.678,9.911Z" transform="translate(-40 0)"/></g></svg>
          </div>
        </n-link>
        <n-link to="/treatment" class="flex items-center">
          <div class="cursor-pointer nav-item p-2 sm:p-2-5 rounded-lg flex justify-center" :class="{ 'nav-active': $nuxt.$route.name == 'treatment' }">
            <svg class="fill-white sm:fill-black hover:fill-black sm:hover:fill-white sm:w-5 w-4 sm:h-5 h-4" xmlns="http://www.w3.org/2000/svg" width="48.765" height="47.365" viewBox="0 0 48.765 47.365"><path d="M14.7,47.365V33.085H0V14.279H14.7V0H34.062V14.279h14.7V33.085h-14.7v14.28Z"/></svg>
          </div>
        </n-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    drawerControl() {
      this.drawer = !this.drawer
      this.$emit('drawerEvent', this.drawer);
    }
  }
}
</script>

<style>
.drawer {
  transition: width 0.3s ease;
}

.nav-item {
  background: transparent;
  transition: background 0.3s ease;
}

@media (min-width: 640px) {
  .nav-item.nav-active, .nav-item:hover {
    background: #18253C;
    box-shadow: 1px 3px 8px 0px #18253c59;
  }

  .nav-item.nav-active svg, .nav-item:hover svg {
    fill: #fff;
  }
}

@media (max-width: 639px) {
  .nav-item.nav-active, .nav-item:hover {
    background: #ffffff;
  }

  .nav-item.nav-active svg, .nav-item:hover svg {
    fill: #18253C !important
  }
}


.nav-item svg {
  transition: fill 0.2s;
}
</style>