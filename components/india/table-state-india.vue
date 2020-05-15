<template>
  <div>
    <div v-if="currentDistricts" class="bg-white relative rounded-card shadow-sm p-1 sm:p-4 md:p-10 md:pb-5 py-6 md:m-3 mt-6">
      <div>
        <h1 class="text-black text-base px-1 sm:text-xl font-semibold text-center sm:text-left">Districts</h1>
        <div class="p-1 sm:p-3 sm:px-4 rounded-md w-full relative">
          <div class="mt-3">
            <div class="mb-3 flex flex-col items-start sm:pl-4">
              <div class="flex items-center mb-1">
                <div class="w-3 h-3 ml-1 mr-2 sm:w-4 sm:h-4 rounded-full bg-orange"></div>
                <p class="text-xs font-semibold text-grey-200">Red Zone</p>
              </div>
              <div class="flex items-center mb-1">
                <div class="w-3 h-3 ml-1 mr-2 sm:w-4 sm:h-4 rounded-full" style="background-color:#ff9f2b"></div>
                <p class="text-xs font-semibold text-grey-200">Orange Zone</p>
              </div>
              <div class="flex items-center mb-1">
                <div class="w-3 h-3 ml-1 mr-2 sm:w-4 sm:h-4 rounded-full bg-green"></div>
                <p class="text-xs font-semibold text-grey-200">Green Zone</p>
              </div>
            </div>
            <div class="flex bg-white justify-between w-full mb-1 sm:pl-4 sticky top-0">
              <p class="text-xs2 sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 text-center sm:text-left uppercase">District</p>
              <p class="text-xs2 sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 text-center sm:text-left uppercase">Confirmed</p>
              <p class="text-xs2 sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 text-center sm:text-left uppercase">Active</p>
              <p class="text-xs2 sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 text-center sm:text-left uppercase">Recovered</p>
              <p class="text-xs2 sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 text-center sm:text-left uppercase">Deaths</p>
            </div>
            <div v-for="(district, i) in currentDistricts" :key="i">
              <n-link :to="'/india/'+stateName+'/'+district.district" class="w-full">
                <div class="select-none flex justify-start items-center w-full bg-grey-50 hover:shadow-md cursor-pointer sm:pl-4 my-1 rounded-md">
                  <div class="flex items-center w-full">
                    <svg class="fill-grey-200 w-1-5 h-1-5 sm:w-2 sm:h-2 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004"><path d="M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"/></svg>
                    <div v-if="district.zone == 'Green'" class="w-3 h-3 ml-1 mr-0 sm:mr-2 sm:w-4 sm:h-4 rounded-full bg-green"></div>
                    <div v-else-if="district.zone == 'Red'" class="w-3 h-3 ml-1 mr-0 sm:mr-2 sm:w-4 sm:h-4 rounded-full bg-orange"></div>
                    <div v-else-if="district.zone == 'Orange'" class="w-3 h-3 ml-1 mr-0 sm:mr-2 sm:w-4 sm:h-4 rounded-full" style="background-color:#ff9f2b"></div>
                    <div v-else class="w-3 h-3 ml-1 sm:w-4 sm:h-4 rounded-full"></div>
                    <p class="text-xs text-black w-20 sm:w-32 font-semibold self-start p-1 sm:p-2-5 py-1 sm:pl-2">{{ district.district }}</p>
                  </div>
                  <div class="flex justify-start sm:pl-2 items-center min-w-3-5 w-full sm:w-full p-1 sm:p-2-5">
                    <span class="mr-1 sm:mr-2 sm:min-w-6 flex items-center">
                      <svg class="fill-blue w-2 h-2 mr-1/2" :class="{ 'opacity-0': !(district.delta.confirmed > 0) }" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
                      <span class="text-xxs2 sm:text-xxs font-semibold text-blue" v-show="district.delta.confirmed > 0">{{ changeNumber(district.delta.confirmed) }}</span>
                    </span>
                    <p class="text-xs2 sm:text-xs text-black font-semibold self-start min-w-12">{{ changeNumber(district.confirmed) }}</p>
                  </div>
                  <div class="flex justify-start sm:pl-2 items-center min-w-3-5 w-full sm:w-full p-1 sm:p-2-5">
                    <span class="mr-1 sm:mr-2 sm:min-w-6 flex items-center">
                      <svg class="fill-brown w-2 h-2 mr-1/2" :class="{ 'opacity-0': !(district.delta.active > 0) }" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
                      <span class="text-xxs2 sm:text-xxs font-semibold text-brown" v-show="district.delta.active > 0">{{ changeNumber(district.delta.active) }}</span>
                    </span>
                    <p class="text-xs2 sm:text-xs text-black font-semibold self-start min-w-12">{{ changeNumber(district.active) }}</p>
                  </div>
                  <div class="flex justify-start sm:pl-2 items-center min-w-3-5 w-full sm:w-full p-1 sm:p-2-5">
                    <span class="mr-1 sm:mr-2 sm:min-w-6 flex items-center">
                      <svg class="fill-green w-2 h-2 mr-1/2" :class="{ 'opacity-0': !(district.delta.recovered > 0) }" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
                      <span class="text-xxs2 sm:text-xxs font-semibold text-green" v-show="district.delta.recovered > 0">{{ changeNumber(district.delta.recovered) }}</span>
                    </span>
                    <p class="text-xs2 sm:text-xs text-black font-semibold self-start min-w-12">{{ changeNumber(district.recovered) }}</p>
                  </div>
                  <div class="flex justify-start sm:pl-2 items-center min-w-3-5 w-full sm:w-full p-1 sm:p-2-5">
                    <span class="mr-1 sm:mr-2 sm:min-w-6 flex items-center">
                      <svg class="fill-orange w-2 h-2 mr-1/2" :class="{ 'opacity-0': !(district.delta.deceased > 0) }" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
                      <span class="text-xxs2 sm:text-xxs font-semibold text-orange" v-show="district.delta.deceased > 0">{{ changeNumber(district.delta.deceased) }}</span>
                    </span>
                    <p class="text-xs2 sm:text-xs text-black font-semibold self-start min-w-12">{{ changeNumber(district.deceased) }}</p>
                  </div>
                </div>
              </n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <spinner v-else></spinner>
  </div>
</template>

<script>
import { formatNumber } from '~/helper/helper-functions'
import spinner from '~/components/spinner'

export default {
  props: ['currentDistricts', 'stateName'],
  components: {
    spinner
  },
  methods: {
    changeNumber(number) {
      return formatNumber(number);
    },
  }
}
</script>

<style>

</style>