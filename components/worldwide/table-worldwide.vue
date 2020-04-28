<template>
  <div class="bg-white overflow-hidden relative rounded-card shadow-sm p-1 sm:p-4 md:p-10 md:pb-5 py-6 md:m-3 mt-6">
    <div v-if="tableData" class="flex flex-col">
      <div class="flex bg-white justify-between w-full mb-1 sm:pl-4 sticky top-0 text-center sm:text-left">
        <p class="text-xxs sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 uppercase">Country</p>
        <p class="text-xxs sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 uppercase">Confirmed</p>
        <p class="text-xxs sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 uppercase">Active</p>
        <p class="text-xxs sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 uppercase">Recovered</p>
        <p class="text-xxs sm:text-xs font-semibold text-grey-200 self-start w-full p-1 sm:p-2-5 uppercase">Deaths</p>
      </div>
      <div v-for="(table, index) in tableData" :key="index">
        <div @click="navigateCountry(table.code)" class="select-none flex justify-between list-hover items-center w-full bg-grey-50 hover:shadow-md cursor-pointer p-1 mb-2 sm:pl-4 sm:my-1 rounded-md">
          <div class="flex items-center w-full">
            <svg class="fill-black w-1-5 h-1-5 sm:w-2 sm:h-2" :class="{ 'rotate': table.visible }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004"><path d="M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"/></svg>
            <p class="country-name text-xs text-black font-semibold self-start w-20 sm:w-32 p-1 sm:p-2-5 py-1 sm:pl-2">{{ table.country }}</p>
          </div>
          <div class="flex justify-start sm:pl-2 items-center min-w-3-5 w-full sm:w-full p-1 sm:p-2-5">
            <span class="mr-1 sm:mr-2 sm:min-w-6 flex items-center" :class="{ 'opacity-0': !(table.deltaconfirmed > 0) }">
              <svg class="fill-blue w-2 h-2 mr-1/2" xmlns="http://www.w3.org/2000/svg" width="43.112" height="44.242" viewBox="0 0 43.112 44.242"><path d="M3.286,27.678,1.093,25.486a2.36,2.36,0,0,1,0-3.347l19.186-19.2a2.36,2.36,0,0,1,3.347,0L42.813,22.129a2.36,2.36,0,0,1,0,3.347l-2.192,2.192a2.373,2.373,0,0,1-3.387-.04L25.908,15.74V44.119a2.364,2.364,0,0,1-2.37,2.37h-3.16a2.364,2.364,0,0,1-2.37-2.37V15.74L6.672,27.639A2.355,2.355,0,0,1,3.286,27.678Z" transform="translate(-0.397 -2.247)"/></svg>
              <span class="text-xxs2 sm:text-xxs font-semibold text-blue">{{ table.deltaconfirmed }}</span>
            </span>
            <p class="text-xs2 sm:text-xs text-black font-semibold self-start min-w-12">{{ table.confirmed }}</p>
          </div>
          <div class="flex justify-start sm:pl-2 items-center min-w-3-5 w-full sm:w-full p-1 sm:p-2-5">
            <p class="text-xs2 sm:text-xs text-black font-semibold self-start min-w-12">{{ table.active }}</p>
          </div>
          <div class="flex justify-start sm:pl-2 items-center min-w-3-5 w-full sm:w-full p-1 sm:p-2-5">
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
      showDistrict: false,
      districts: null,
      currentDistrict: null,
    }
  },
  methods: {
    navigateCountry(code) {
      this.$router.push(`/worldwide/country/${code}`)
    },
    formatNumber(num) {
      let number = num.toString();
      return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    },
    fetchData() {
      this.$axios.get('https://corona-api.com/countries')
        .then(res => {
          this.tableData = [];
          res.data.data.forEach(d => {
            if (d.code !== 'IN') {
              let newFormat;
              newFormat = {
                country: d.name,
                code: d.code,
                active: this.formatNumber(d.latest_data.confirmed - d.latest_data.recovered - d.latest_data.deaths),
                confirmed: this.formatNumber(d.latest_data.confirmed),
                deaths: this.formatNumber(d.latest_data.deaths),
                recovered: this.formatNumber(d.latest_data.recovered),
                critical: this.formatNumber(d.latest_data.critical),
                deltaconfirmed: this.formatNumber(d.today.confirmed),
                deltadeaths: this.formatNumber(d.today.deaths)
              }
              this.tableData.push(newFormat)
            }
          })
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
  .list-hover:hover .country-name {
    color: #4067E8;
  }
</style>