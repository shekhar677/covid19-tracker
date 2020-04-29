<template>
  <div class="bg-white rounded-card shadow-sm p-1 sm:p-4 md:p-10 md:pb-5 py-6 md:m-3 mt-6 relative">
    <div v-if="tableData" class="flex flex-col">
      <div class="flex bg-white justify-between w-full mb-1 sm:pl-4 sticky top-0">
        <p class="text-xxs sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 uppercase text-center sm:text-left">State</p>
        <p class="text-xxs sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 uppercase text-center sm:text-left">Confirmed</p>
        <p class="text-xxs sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 uppercase text-center sm:text-left">Active</p>
        <p class="text-xxs sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 uppercase text-center sm:text-left">Recovered</p>
        <p class="text-xxs sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 uppercase text-center sm:text-left">Deaths</p>
      </div>
      <div v-for="(table, index) in tableData" :key="index">
        <div @click="toggle(index, $event)" class="select-none flex justify-between items-center w-full bg-grey-50 hover:shadow-md cursor-pointer p-1 mb-2 sm:pl-4 sm:my-1 rounded-md">
          <div class="flex items-center w-full">
            <svg class="fill-black w-1-5 h-1-5 sm:w-2 sm:h-2" :class="{ 'rotate': table.visible }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004"><path d="M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"/></svg>
            <p class="text-xs text-black font-semibold self-start w-20 sm:w-32 p-1 sm:p-2-5 py-1 sm:pl-2">{{ table.state }}</p>
          </div>
          <div class="flex justify-start sm:pl-2 items-center min-w-3-5 w-full sm:w-full p-1 sm:p-2-5">
            <span class="mr-1 sm:mr-2 sm:min-w-6 flex items-center" :class="{ 'opacity-0': !(table.deltaconfirmed > 0) }">
              <svg class="fill-blue w-2 h-2 mr-1/2" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
              <span class="text-xxs2 sm:text-xxs font-semibold text-blue">{{ table.deltaconfirmed }}</span>
            </span>
            <p class="text-xs2 sm:text-xs text-black font-semibold self-start min-w-12">{{ table.confirmed }}</p>
          </div>
          <div class="flex justify-start sm:pl-2 items-center min-w-3-5 w-full sm:w-full p-1 sm:p-2-5">
            <span class="mr-1 sm:mr-2 sm:min-w-6 flex items-center" :class="{ 'opacity-0': !(table.deltaactive > 0) }">
              <svg class="fill-pink w-2 h-2 mr-1/2" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
              <span class="text-xxs2 sm:text-xxs font-semibold text-pink">{{ table.deltaactive }}</span>
            </span>
            <p class="text-xs2 sm:text-xs text-black font-semibold self-start min-w-12">{{ table.active }}</p>
          </div>
          <div class="flex justify-start sm:pl-2 items-center min-w-3-5 w-full sm:w-full p-1 sm:p-2-5">
            <span class="mr-1 sm:mr-2 sm:min-w-6 flex items-center" :class="{ 'opacity-0': !(table.deltarecovered > 0) }">
              <svg class="fill-green w-2 h-2 mr-1/2" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
              <span class="text-xxs2 sm:text-xxs font-semibold text-green">{{ table.deltarecovered }}</span>
            </span>
            <p class="text-xs2 sm:text-xs text-black font-semibold self-start min-w-12">{{ table.recovered }}</p>
          </div>
          <div class="flex justify-start sm:pl-2 items-center min-w-3-5 w-full sm:w-full p-1 sm:p-2-5">
            <span class="mr-1 sm:mr-2 sm:min-w-6 flex items-center" :class="{ 'opacity-0': !(table.deltadeaths > 0) }">
              <svg class="fill-orange w-2 h-2 mr-1/2" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
              <span class="text-xxs2 sm:text-xxs font-semibold text-orange">{{ table.deltadeaths }}</span>
            </span>
            <p class="text-xs2 sm:text-xs text-black font-semibold self-start min-w-12">{{ table.deaths }}</p>
          </div>
        </div>
        <div v-if="table.visible" class="bg-grey p-2 sm:p-3 sm:px-4 sm:ml-3 rounded-md border border-grey-100">
          <div class="flex justify-start items-center">
            <p class="text-xxs sm:text-xs2 font-semibold text-brown mr-8">last updated {{ realtiveTime(table.lastupdatedtime) }}</p>
            <n-link :to="'/india/state/'+table.statecode"><span class="btn mr-2 cursor-pointer select-none px-3 py-1 font-normal rounded-full border border-black text-white bg-black shadow-md text-xs2 text-center whitespace-no-wrap">visit state page</span></n-link>
          </div>
          <div class="mt-3" v-if="currentDistrict">
            <div class="flex justify-between w-full mb-1 sm:pl-4">
              <p class="text-xxs sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 uppercase">State</p>
              <p class="text-xxs sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 uppercase">Confirmed</p>
              <p class="text-xxs sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 uppercase">Active</p>
              <p class="text-xxs sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 uppercase">Recovered</p>
              <p class="text-xxs sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 uppercase">Deaths</p>
            </div>
            <div v-for="(district, i) in currentDistrict[0].districtData" :key="i" class="flex flex-col items-start">
              <div class="select-none flex justify-start items-center w-full bg-white hover:shadow-md cursor-pointer sm:pl-4 my-1 rounded-md">
                <div class="flex items-center w-full">
                  <p class="text-xs text-black w-20 sm:w-32 font-regular self-start p-1 sm:p-2-5 py-1 sm:pl-2">{{ district.district }}</p>
                </div>
                <div class="flex justify-start sm:pl-2 items-center min-w-3-5 w-full sm:w-full p-1 sm:p-2-5">
                  <span class="mr-1 sm:mr-2 sm:min-w-6 flex items-center" :class="{ 'opacity-0': !(district.delta.confirmed > 0) }">
                    <svg class="fill-blue w-2 h-2 mr-1/2" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
                    <span class="text-xxs2 sm:text-xxs font-semibold text-blue">{{ changeNumber(district.delta.confirmed) }}</span>
                  </span>
                  <p class="text-xs2 sm:text-xs text-black font-semibold self-start min-w-12">{{ changeNumber(district.confirmed) }}</p>
                </div>
                <div class="flex justify-start sm:pl-2 items-center min-w-3-5 w-full sm:w-full p-1 sm:p-2-5">
                  <span class="mr-1 sm:mr-2 sm:min-w-6 flex items-center" :class="{ 'opacity-0': !(district.delta.active > 0) }">
                    <svg class="fill-brown w-2 h-2 mr-1/2" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
                    <span class="text-xxs2 sm:text-xxs font-semibold text-brown">{{ changeNumber(district.delta.active) }}</span>
                  </span>
                  <p class="text-xs2 sm:text-xs text-black font-semibold self-start min-w-12">{{ changeNumber(district.active) }}</p>
                </div>
                <div class="flex justify-start sm:pl-2 items-center min-w-3-5 w-full sm:w-full p-1 sm:p-2-5">
                  <span class="mr-1 sm:mr-2 sm:min-w-6 flex items-center" :class="{ 'opacity-0': !(district.delta.recovered > 0) }">
                    <svg class="fill-green w-2 h-2 mr-1/2" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
                    <span class="text-xxs2 sm:text-xxs font-semibold text-green">{{ changeNumber(district.delta.recovered) }}</span>
                  </span>
                  <p class="text-xs2 sm:text-xs text-black font-semibold self-start min-w-12">{{ changeNumber(district.recovered) }}</p>
                </div>
                <div class="flex justify-start sm:pl-2 items-center min-w-3-5 w-full sm:w-full p-1 sm:p-2-5">
                  <span class="mr-1 sm:mr-2 sm:min-w-6 flex items-center" :class="{ 'opacity-0': !(district.delta.deceased > 0) }">
                    <svg class="fill-orange w-2 h-2 mr-1/2" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
                    <span class="text-xxs2 sm:text-xxs font-semibold text-orange">{{ changeNumber(district.delta.deceased) }}</span>
                  </span>
                  <p class="text-xs2 sm:text-xs text-black font-semibold self-start min-w-12">{{ changeNumber(district.deceased) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <spinner v-else class="m-3"></spinner>
  </div>
</template>

<script>
import spinner from '~/components/spinner'
import { formatNumber, parseStateTimeseries, formatDateAbsolute } from '~/helper/helper-functions'
import moment from 'moment'

export default {
  components: {
    spinner
  },
  data() {
    return {
      tableData: null,
      showDistrict: false,
      districts: null,
      currentDistrict: null,
    }
  },
  methods: {
    // calculateTotal(data, dOut) {
    //   return data.reduce((acc, val) => acc + val[dOut], 0);
    // },
    changeNumber(number) {
      return formatNumber(number);
    },
    realtiveTime(date) {
      return moment(date, 'DD/MM/YYYY HH:mm:ss').fromNow();
    },
    toggle(index, el) {
      let d = Object.assign({}, this.tableData[index])
      d.visible = !this.tableData[index].visible
      // set all other state visibility to false
      this.tableData.forEach(tbl => tbl.visible = false);

      this.$set(this.tableData, index, d); // updaing data in array (while maintaining reactivity)

      // // get all districts related to this state
      let statecode = this.tableData[index].statecode;
      this.currentDistrict = this.districts.filter(d => d.statecode == statecode);
      
      // scroll to top
      // let topOfElement = el.target.offsetTop - 65
      // window.scroll({ top: topOfElement, behavior: "smooth" })
    },
    fetchData() {
      this.$axios.get('https://api.covid19india.org/data.json')
        .then(res => {
          this.tableData = res.data.statewise.filter(d => d.statecode !== 'TT').map(d => {
            d.active = formatNumber(d.active)
            d.confirmed = formatNumber(d.confirmed)
            d.deaths = formatNumber(d.deaths)
            d.deltaconfirmed = formatNumber(d.deltaconfirmed)
            d.deltadeaths = formatNumber(d.deltadeaths)
            d.deltarecovered = formatNumber(d.deltarecovered)
            d.recovered = formatNumber(d.recovered)
            d.visible = false
            return d;
          })
        })
        .then(() => {
          this.$axios.get('https://api.covid19india.org/v2/state_district_wise.json')
            .then(res => {
              this.districts = res.data.map(d => {
                if (d.state == 'Uttarakhand') {
                  d.statecode = 'UT'
                }
                return d;
              });
            })
            .then(() => {
              let formatTbl = [];
              this.districts.forEach(dis => {
                this.tableData.forEach(tbl => {
                  if (tbl.statecode == dis.statecode) {
                    formatTbl.push(tbl)
                  }
                })
              })
              this.tableData = formatTbl;
            })
            .catch(err => {
              this.districts = null
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
  .rotate {
    transform: rotate(90deg);
  }
</style>