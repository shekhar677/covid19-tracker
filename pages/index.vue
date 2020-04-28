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
      <card-worldwide></card-worldwide>
    </div>
  </div>
</template>

<script>
import loader from '~/components/loader';
import cardIndia from '~/components/india/card-india';
import cardWorldwide from '~/components/worldwide/card-worldwide';
import tableIndia from '~/components/india/table-india';
import globalTimelineIndia from '~/components/india/global-timeline-india';
import globalDailyIndia from '~/components/india/global-daily-india';
import { preprocessTimeseries, formatDate, formatDateAbsolute } from '~/helper/helper-functions'
import { mapGetters } from 'vuex'

export default {
  components: {
    loader,
    cardIndia,
    cardWorldwide,
    tableIndia,
    globalTimelineIndia,
    globalDailyIndia
  },
  data() {
    return {
      // currentFetch: 'india',
      india: null,
      worldwide: null
    }
  },
  computed: {
    ...mapGetters(['currentFetch'])
  },
  methods: {
    fetchData(type) {
      this.$store.commit('UPDATE_CURRENT_FETCH', type);
    }
  },
  mounted() {

  }
}
</script>

<style>

</style>
