<template>
  <div class="p-3 sm:py-8 sm:px-6 md:px-12">
    <loader></loader>
    <div class="mt-3 sm:mt-0" v-if="currentFetch">
      <span @click="setDataFor('india')" class="btn mr-2 cursor-pointer select-none py-1-5 px-5 font-normal rounded-full border border-black text-black w-28 text-xs text-center" :class="{ 'bg-black text-white shadow-md': ($nuxt.$route.name === 'india') }">India</span>
      <span @click="setDataFor('worldwide')" class="btn cursor-pointer select-none py-1-5 px-5 font-normal rounded-full border border-black text-black w-28 text-xs text-center" :class="{ 'bg-black text-white shadow-md': ($nuxt.$route.name === 'worldwide') }">Worldwide</span>
    </div>
    <div class="worldwide mt-8">
      <card-worldwide></card-worldwide>
      <global-timeline-worldwide class="mt-8"></global-timeline-worldwide>
      <daily-timeline-worldwide class="mt-8"></daily-timeline-worldwide>
      <table-worldwide class="mt-8"></table-worldwide>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import loader from '~/components/loader'

import cardWorldwide from '~/components/worldwide/card-worldwide';
import globalTimelineWorldwide from '~/components/worldwide/global-timeline-worldwide';
import dailyTimelineWorldwide from '~/components/worldwide/daily-timeline-worldwide';
import tableWorldwide from '~/components/worldwide/table-worldwide';

export default {
  components: {
    cardWorldwide,
    globalTimelineWorldwide,
    dailyTimelineWorldwide,
    tableWorldwide,
    loader
  },
  data() {
    return {
      timeline: null
    }
  },
  computed: {
    ...mapGetters(['currentFetch'])
  },
  methods: {
    setDataFor(type) {
      this.$store.commit('UPDATE_CURRENT_FETCH', type);
      this.$router.push(`/${type}`)
    }
  }
}
</script>

<style>

</style>