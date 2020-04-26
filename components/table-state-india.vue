<template>
  <div>
    <div v-if="currentDistricts" class="bg-white rounded-card shadow-sm p-10 m-3 mb-8">
      <div class="mb-6">
        <h1 class="text-black text-xl font-semibold">Districts</h1>
        <div class="p-3 px-4 rounded-md w-full relative">
          <div class="mt-3">
            <div class="flex w-auto pl-4 sticky top-0 bg-white">
              <p class="text-xs font-semibold text-grey-200 font-semibold w-full self-start w-32 p-2-5 uppercase">District</p>
              <p class="text-xs font-semibold text-grey-200 font-semibold w-full self-start w-32 p-2-5 uppercase">Confirmed</p>
              <p class="text-xs font-semibold text-grey-200 font-semibold w-full self-start w-32 p-2-5 uppercase">Active</p>
              <p class="text-xs font-semibold text-grey-200 font-semibold w-full self-start w-32 p-2-5 uppercase">Recovered</p>
              <p class="text-xs font-semibold text-grey-200 font-semibold w-full self-start w-32 p-2-5 uppercase">Deaths</p>
            </div>
            <div v-for="(district, i) in currentDistricts" :key="i">
              <div class="select-none flex items-center bg-grey-50 hover:shadow-md cursor-pointer pl-4 my-1 rounded-md">
                <div class="flex items-center w-32 w-full">
                  <p class="text-xs text-black font-regular self-start w-full p-2-5 py-1 pl-2">{{ district.district }}</p>
                </div>
                <div class="flex justify-start pl-2 items-center w-32 w-full p-2-5">
                  <span class="mr-2 min-w-6 flex items-center">
                    <svg class="fill-blue w-2 h-2 mr-1/2" :class="{ 'opacity-0': !(district.delta.confirmed > 0) }" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
                    <span class="text-xxs text-blue" v-show="district.delta.confirmed > 0">{{ changeNumber(district.delta.confirmed) }}</span>
                  </span>
                  <p class="text-xs text-black font-semibold self-start">{{ changeNumber(district.confirmed) }}</p>
                </div>
                <div class="flex justify-start pl-2 items-center w-32 w-full p-2-5">
                  <span class="mr-2 min-w-6 flex items-center">
                    <svg class="fill-brown w-2 h-2 mr-1/2" :class="{ 'opacity-0': !(district.delta.active > 0) }" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
                    <span class="text-xxs text-brown" v-show="district.delta.active > 0">{{ changeNumber(district.delta.active) }}</span>
                  </span>
                  <p class="text-xs text-black font-semibold self-start">{{ changeNumber(district.active) }}</p>
                </div>
                <div class="flex justify-start pl-2 items-center w-32 w-full p-2-5">
                  <span class="mr-2 min-w-6 flex items-center">
                    <svg class="fill-green w-2 h-2 mr-1/2" :class="{ 'opacity-0': !(district.delta.recovered > 0) }" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
                    <span class="text-xxs text-green" v-show="district.delta.recovered > 0">{{ changeNumber(district.delta.recovered) }}</span>
                  </span>
                  <p class="text-xs text-black font-semibold self-start">{{ changeNumber(district.recovered) }}</p>
                </div>
                <div class="flex justify-start pl-2 items-center w-32 w-full p-2-5">
                  <span class="mr-2 min-w-6 flex items-center">
                    <svg class="fill-orange w-2 h-2 mr-1/2" :class="{ 'opacity-0': !(district.delta.deceased > 0) }" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
                    <span class="text-xxs text-orange" v-show="district.delta.deceased > 0">{{ changeNumber(district.delta.deceased) }}</span>
                  </span>
                  <p class="text-xs text-black font-semibold self-start">{{ changeNumber(district.deceased) }}</p>
                </div>
              </div>
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
  props: ['currentDistricts'],
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