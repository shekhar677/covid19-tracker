<template>
  <div class="py-8 px-12 min-h-screen">
    <loader></loader>
    <span @click="fetchData('india')" class="btn mr-2 cursor-pointer select-none py-1-5 px-5 font-normal rounded-full border border-black text-black w-28 text-xs text-center" :class="{ 'bg-black text-white shadow-md': (currentFetch === 'india') }">India</span>
    <span @click="fetchData('worldwide')" class="btn cursor-pointer select-none py-1-5 px-5 font-normal rounded-full border border-black text-black w-28 text-xs text-center" :class="{ 'bg-black text-white shadow-md': (currentFetch === 'worldwide') }">Worldwide</span>
    <!-- <transition name="fade" mode="out-in"> -->
      <div v-if="currentFetch === 'india'" class="india mt-8">
      <!-- <transition-group name="fade" mode="out-in" class="flex items-start justify-around"> -->
      <card-india></card-india>
      <!-- </transition-group> -->
      <global-timeline-india></global-timeline-india>
      <global-daily-india></global-daily-india>
      <table-india></table-india>
      </div>
    <!-- </transition> -->
    <!-- <transition name="fade" mode="out-in"> -->
      <div v-if="currentFetch === 'worldwide'" class="worldwide mt-8">
        <h1>Under dev</h1>
        <!-- <div class="flex items-start justify-around">
          <transition-group name="slide-up" mode="out-in" class="flex items-start justify-around">
            <card v-for="(info, i) in 5" :key="i" :cardData="{ type: 'confirmed', number: 15669 }"></card>
          </transition-group>
        </div>
        <div>
          data: {{worldwide}}
        </div> -->
      </div>
    <!-- </transition> -->
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
