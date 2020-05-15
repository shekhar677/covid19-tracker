<template>
  <div class="p-2 sm:py-8 sm:px-6 md:px-12 min-h-screen">
    <div class="mb-6 pt-3 text-black flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <p class="text-xs2 mb-5 sm:mb-0 sm:text-xs font-semibold select-none">
        <n-link to="/"><span class="mr-1 cursor-pointer hover:underline text-black">Home</span></n-link>
        <span>/</span>
        <n-link :to="'/india/state/'+currentState.statecode"><span class="mr-1 cursor-pointer hover:underline text-black">{{ $nuxt.$route.params.state }}</span></n-link>
        <span>/</span>
        <span class="ml-1 text-black">{{ $nuxt.$route.params.district }}</span>
      </p>
      <div v-if="districts">
        <district-option-list :state="$nuxt.$route.params.state" :districts="districts" :selectedDistrict="$nuxt.$route.params.district"></district-option-list>
      </div>
    </div>
    <div class="mb-8">
      <h1 class="text-black text-2xl sm:text-4xl font-semibold">{{ $nuxt.$route.params.district }}</h1>
    </div>
    <div class="mb-8">
      <card-district-india :district="$nuxt.$route.params.district" :state="$nuxt.$route.params.state"></card-district-india>
    </div>
    <district-timeline-india :district="$nuxt.$route.params.district" :state="$nuxt.$route.params.state"></district-timeline-india>
  </div>
</template>

<script>
import cardDistrictIndia from '~/components/india/card-district-india';
import districtTimelineIndia from '~/components/india/district-timeline-india';
import districtOptionList from '~/components/india/district-option-list'
import moment from 'moment'

export default {
  head() {
    return {
      title: this.$nuxt.$route.params.district? this.$nuxt.$route.params.district+' - Coronavirus in '+this.$nuxt.$route.params.district : 'Coronavirus cases India'
    }
  },
  components: {
    cardDistrictIndia,
    districtTimelineIndia,
    districtOptionList
  },
  data() {
    return {
      districts: [],
      currentState: ''
    }
  },
  methods: {
    // selectedDistrict(district) {
    //   let stCode = statecode.toUpperCase();
    //   let p = this.stateData.filter(state => state.statecode == stCode)
    //   return p[0]
    // },
  },
  beforeMount() {
    this.$axios.get('https://api.covid19india.org/v2/state_district_wise.json')
      .then(res => {
        let states = res.data;
        states.forEach(state => {
          if (state.state.toLowerCase() == this.$route.params.state.toLowerCase()) {
            this.currentState = state
            this.districts = state.districtData.map(district => district.district)
          }
        })
      })
      .catch(err => {
        this.districts = []
      })
  }
}
</script>

<style>

</style>