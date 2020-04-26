<template>
  <div class="py-8 px-12 min-h-screen">
    <div class="mb-6 text-black">
      <p class="text-xs font-semibold select-none">
        <n-link to="/"><span class="mr-1 cursor-pointer hover:underline text-black">Home</span></n-link>
        <span>/</span>
        <span class="ml-1 text-black">{{ stateName($nuxt.$route.params.statecode) }}</span>
      </p>
    </div>
    <div class="mb-8">
      <h1 class="text-black text-4xl font-semibold">{{ stateName($nuxt.$route.params.statecode) }}</h1>
      <p v-if="updated" class="text-black text-xs">Last updated {{ updated }}</p>
    </div>
    <div class="mb-8">
      <card-state-india @updatedAt="getUpdatedDate" :state="$nuxt.$route.params.statecode"></card-state-india>
    </div>
    <state-timeline-india></state-timeline-india>
    <state-daily-india></state-daily-india>
    <table-state-india :currentDistricts="currentDistricts"></table-state-india>
  </div>
</template>

<script>
import { formatNumber, parseStateTimeseries, getStateName } from '~/helper/helper-functions'
import cardStateIndia from '~/components/card-state-india';
import stateTimelineIndia from '~/components/state-timeline-india';
import stateDailyIndia from '~/components/state-daily-india';
import tableStateIndia from '~/components/table-state-india';
import moment from 'moment'

export default {
  components: {
    cardStateIndia,
    stateTimelineIndia,
    stateDailyIndia,
    tableStateIndia
  },
  validate({ params, query, store }) {
    let x = getStateName(params.statecode)
    if (x) {
      return true
    } else {
      return false
    }
  },
  asyncData ({ params, app, $axios }) {
    return $axios.get('https://api.covid19india.org/data.json')
      .then(res => {
        let r = res.data.statewise
          .filter(d => d.statecode !== 'TT')
            .map(d => {
              d.active = formatNumber(d.active)
              d.confirmed = formatNumber(d.confirmed)
              d.deaths = formatNumber(d.deaths)
              d.deltaconfirmed = formatNumber(d.deltaconfirmed)
              d.deltadeaths = formatNumber(d.deltadeaths)
              d.deltarecovered = formatNumber(d.deltarecovered)
              d.recovered = formatNumber(d.recovered)
              return d;
            })
        return r;
      })
      .then(r => {
        let statewise = r;
        return $axios.get('https://api.covid19india.org/v2/state_district_wise.json')
          .then(res => {
            let md = res.data.map(d => {
              if (d.state == 'Uttarakhand') {
                d.statecode = 'UT'
              }
              return d;
            });
            return { stateData: statewise, stateDistrict: md }
          })
      })
      .catch(err => {
        return { stateData: null, stateDistrict: null }
      })
  },
  data() {
    return {
      stateData: null,
      stateDistrict: null,
      updated: null,
      timeline: null,
      currentDistricts: null
    }
  },
  methods: {
    stateName(code) {
      return getStateName(code);
    },
    getUpdatedDate(date) {
      this.updated = moment(date, 'DD/MM/YYYY HH:mm:ss').fromNow()
    },
    getTimelineData() {
      this.$axios.get('https://api.covid19india.org/states_daily.json')
        .then(res => {
          let d = parseStateTimeseries(res.data);
          let stCode = $nuxt.$route.params.statecode
          stCode = stCode.toUpperCase();
          this.timeline = d[stCode]
        })
    },
    getTopDistricts(state) {
      let statecode = state.toUpperCase();
      this.currentDistricts = this.stateDistrict.filter(dis => dis.statecode == statecode);
      this.currentDistricts = this.currentDistricts[0].districtData;
    },
    changeNumber(number) {
      return formatNumber(number);
    },
  },
  mounted() {
    this.getTimelineData();
    this.getTopDistricts($nuxt.$route.params.statecode);
  }
}
</script>

<style>

</style>