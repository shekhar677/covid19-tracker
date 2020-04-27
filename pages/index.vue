<template>
  <div class="p-3 sm:py-8 sm:px-6 md:px-12">
    <loader></loader>
    <div class="mt-3 sm:mt-0">
      <span @click="fetchData('india')" class="btn mr-2 cursor-pointer select-none py-1-5 px-5 font-normal rounded-full border border-black text-black w-28 text-xs text-center" :class="{ 'bg-black text-white shadow-md': (currentFetch === 'india') }">India</span>
      <span @click="fetchData('worldwide')" class="btn cursor-pointer select-none py-1-5 px-5 font-normal rounded-full border border-black text-black w-28 text-xs text-center" :class="{ 'bg-black text-white shadow-md': (currentFetch === 'worldwide') }">Worldwide</span>
    </div>
      <div v-if="currentFetch === 'india'" class="india mt-8">
      <card-india></card-india>
      <global-timeline-india></global-timeline-india>
      <global-daily-india></global-daily-india>
      <table-india></table-india>
      </div>
      <div v-if="currentFetch === 'worldwide'" class="worldwide mt-8">
        <h1>Under development- will be updated on 28 April, 2020</h1>
      </div>
  </div>
</template>

<script>
import loader from '~/components/loader';
import cardIndia from '~/components/card-india';
import tableIndia from '~/components/table-india';
import globalTimelineIndia from '~/components/global-timeline-india';
import globalDailyIndia from '~/components/global-daily-india';
import { preprocessTimeseries, formatDate, formatDateAbsolute } from '~/helper/helper-functions'

export default {
  components: {
    loader,
    cardIndia,
    tableIndia,
    globalTimelineIndia,
    globalDailyIndia
  },
  data() {
    return {
      currentFetch: 'india',
      india: null,
      worldwide: null
    }
  },
  methods: {
    fetchData(type) {
      this.currentFetch = type
      // if (type == 'india') {
      //   this.fetchIndia();
      // } else {
      //   this.fetchWorldwide();
      // }
    },
    // fetchIndia() {
    //   this.$axios.get('https://api.covid19india.org/data.json')
    //     .then(res => {
    //       this.india = res.data
    //     })
    //     .catch(err => {
    //       this.india = null
    //     });
    // },
    // fetchWorldwide() {
    //   this.$axios.get('https://corona-api.com/countries')
    //     .then(res => {
    //       this.worldwide = res.data.data
    //     })
    //     .catch(err => {
    //       this.worldwide = null
    //     });
    // }
  },
  mounted() {
    // this.fetchData('india');
    // this.$axios.get('https://api.covid19india.org/data.json')
    //   .then(res => {
    //     console.log('res: ',preprocessTimeseries(res.data.cases_time_series))
    //     // console.log('format date: ',formatDateAbsolute(preprocessTimeseries(res.data.cases_time_series)[0].date))
    //     // preprocessTimeseries(res.data.cases_time_series)

    //   })
  }
}
</script>

<style>

</style>
