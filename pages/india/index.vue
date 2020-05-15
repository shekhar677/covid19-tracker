<template>
  <div class="p-2 sm:py-8 sm:px-6 md:px-12">
    <loader></loader>
    <div class="mt-3 sm:mt-0">
      <button @click="fetchData('india')" class="btn mr-2 cursor-pointer select-none py-1 font-normal rounded-full border border-black text-black w-28 text-xs text-center" :class="{ 'bg-black text-white shadow-md': ($nuxt.$route.name === 'india') }">India</button>
      <button @click="fetchData('worldwide')" class="btn cursor-pointer select-none py-1 font-normal rounded-full border border-black text-black w-28 text-xs text-center" :class="{ 'bg-black text-white shadow-md': ($nuxt.$route.name === 'worldwide') }">Worldwide</button>
    </div>
    <div class="india mt-8">
      <card-india class="mt-8"></card-india>
      <global-timeline-india class="mt-8"></global-timeline-india>
      <global-daily-india class="mt-8"></global-daily-india>
      <table-india class="mt-8"></table-india>
    </div>
  </div>
</template>

<script>
import loader from '~/components/loader';
import cardIndia from '~/components/india/card-india';
import tableIndia from '~/components/india/table-india';
import globalTimelineIndia from '~/components/india/global-timeline-india';
import globalDailyIndia from '~/components/india/global-daily-timeline-india';
import { mapGetters } from 'vuex'

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
      this.$router.push(`/${type}`)
    }
  }
}
</script>

<style>

</style>
