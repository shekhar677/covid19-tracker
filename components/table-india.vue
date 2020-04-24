<template>
  <div class="bg-white rounded-card shadow-sm p-10 m-3 mt-8">
    <div v-if="tableData" class="flex flex-col">
      <div class="flex justify-between w-full mb-1 pl-4">
        <p class="text-xs text-grey-200 self-start w-full p-2-5 uppercase">State</p>
        <p class="text-xs text-grey-200 self-start w-full p-2-5 uppercase">Confirmed</p>
        <p class="text-xs text-grey-200 self-start w-full p-2-5 uppercase">Active</p>
        <p class="text-xs text-grey-200 self-start w-full p-2-5 uppercase">Recovered</p>
        <p class="text-xs text-grey-200 self-start w-full p-2-5 uppercase">Deaths</p>
      </div>
      <div v-for="(table, index) in tableData" :key="index">
        <div @click="toggle(index)" class="select-none flex justify-between items-center w-full bg-grey-50 hover:shadow-md cursor-pointer pl-4 my-2 rounded-md">
          <div class="flex items-center w-full">
            <svg class="fill-black w-2 h-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004"><path d="M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"/></svg>
            <p class="text-xs text-black font-semibold self-start w-full p-2-5 py-1 pl-2">{{ table.state }}</p>
          </div>
          <div class="flex justify-start pl-2 items-center w-full p-2-5">
            <span class="mr-2 min-w-6 flex items-center">
              <svg class="fill-pink w-2 h-2 mr-1/2" :class="{ 'opacity-0': !(table.deltaconfirmed > 0) }" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
              <span class="text-xxs text-pink" v-show="table.deltaactive > 0">{{ calculateTotal(table.districtData, 'delta.recovered') }}</span>
            </span>
            <p class="text-xs text-black font-semibold self-start">{{ calculateTotal(table.districtData, 'confirmed') }}</p>
          </div>
          <div class="flex justify-start pl-2 items-center w-full p-2-5">
            <span v-if="table.detlaactive > 0" class="mr-2 min-w-6 flex items-center">
              <svg class="fill-pink w-2 h-2 mr-1/2" :class="{ 'opacity-0': !(table.deltaactive > 0) }" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
              <span class="text-xxs text-pink" v-show="table.deltaactive > 0">{{ table.deltaactive }}</span>
            </span>
            <p class="text-xs text-black font-semibold self-start">{{ calculateTotal(table.districtData, 'active') }}</p>
          </div>
          <div class="flex justify-start pl-2 items-center w-full p-2-5">
            <span class="mr-2 min-w-6 flex items-center">
              <svg class="fill-pink w-2 h-2 mr-1/2" :class="{ 'opacity-0': !(table.deltarecovered > 0) }" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
              <span class="text-xxs text-pink" v-show="table.deltarecovered > 0">{{ table.deltarecovered }}</span>
            </span>
            <p class="text-xs text-black font-semibold self-start">{{ calculateTotal(table.districtData, 'recovered') }}</p>
          </div>
          <div class="flex justify-start pl-2 items-center w-full p-2-5">
            <span class="mr-2 min-w-6 flex items-center">
              <svg class="fill-pink w-2 h-2 mr-1/2" :class="{ 'opacity-0': !(table.deltadeaths > 0) }" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
              <span class="text-xxs text-pink" v-show="table.deltadeaths > 0">{{ calculateTotal(table.districtData, 'deceased') }}</span>
            </span>
            <p class="text-xs text-black font-semibold self-start">{{ calculateTotal(table.districtData, 'deceased') }}</p>
          </div>
        </div>
        <div v-if="table.visible" class="bg-grey p-2 ml-3 rounded-md">
          <div>
            <p class="text-xs text-black">last updated {{ table.lastupdated }}</p>
          </div>
        </div>
      </div>
    </div>
    <spinner v-else class="m-3"></spinner>
  </div>
</template>

<script>
import spinner from '~/components/spinner'

export default {
  components: {
    spinner
  },
  data() {
    return {
      tableData: null,
      showDistrict: false
    }
  },
  methods: {
    calculateTotal(data, dOut) {
      return data.reduce((acc, val) => acc + val[dOut], 0);
    },
    toggle(index) {
      let d = Object.assign({}, this.tableData[index])
      d.visible = !this.tableData[index].visible
      this.$set(this.tableData, index, d); // for reactive purpose
    },
    fetchData() {
      // TODO: use statewise API to show all states and use state_dstrict API to show data when clicked
      this.$axios.get('https://api.covid19india.org/v2/state_district_wise.json')
        .then(res => {
          this.tableData = res.data
          this.tableData = res.data.map(d => {
            if (d.state == 'Uttarakhand') {
              d.statecode = 'UT'
            }
            d.visible = false
            return d;
          });
        })
        .catch(err => {
          this.tableData = null
        });
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<style>

</style>