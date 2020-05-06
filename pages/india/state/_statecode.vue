<template>
  <div class="p-3 sm:py-8 sm:px-6 md:px-12 min-h-screen">
    <div class="mb-6 text-black dark-mode:text-grey-50 flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <p class="text-xs2 mb-5 sm:mb-0 sm:text-xs font-semibold select-none">
        <n-link to="/"><span class="mr-1 cursor-pointer hover:underline text-black dark-mode:text-grey-50">Home</span></n-link>
        <span>/</span>
        <span class="ml-1 text-black dark-mode:text-grey-50">{{ stateName($nuxt.$route.params.statecode) }}</span>
      </p>
      <div v-if="stateData">
        <state-option-list :states="stateData" :selectedState="selectedState($nuxt.$route.params.statecode)"></state-option-list>
      </div>
    </div>
    <div class="mb-8">
      <h1 class="text-black dark-mode:text-grey-50 text-2xl sm:text-4xl font-semibold">{{ stateName($nuxt.$route.params.statecode) }}</h1>
      <p v-if="updated" class="text-black dark-mode:text-grey-50 text-xs2 sm:text-xs">Last updated {{ updated }}</p>
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
import cardStateIndia from '~/components/india/card-state-india';
import stateTimelineIndia from '~/components/india/state-timeline-india';
import stateDailyIndia from '~/components/india/state-daily-india';
import tableStateIndia from '~/components/india/table-state-india';
import stateOptionList from '~/components/india/state-option-list';
import moment from 'moment'

export default {
  head() {
    return {
      title: this.stateName(this.$nuxt.$route.params.statecode)? this.stateName(this.$nuxt.$route.params.statecode)+' - Coronavirus in '+this.stateName(this.$nuxt.$route.params.statecode) : 'Coronavirus cases India'
    }
  },
  components: {
    cardStateIndia,
    stateTimelineIndia,
    stateDailyIndia,
    tableStateIndia,
    stateOptionList
  },
  validate({ params, query, store }) {
    let x = getStateName(params.statecode)
    if (x) {
      return true
    } else {
      return false
    }
  },
  // asyncData ({ params, app, $axios }) {
  //   return $axios.get('https://api.covid19india.org/data.json')
  //     .then(res => {
  //       let r = res.data.statewise
  //         .filter(d => d.statecode !== 'TT')
  //           .map(d => {
  //             d.active = formatNumber(d.active)
  //             d.confirmed = formatNumber(d.confirmed)
  //             d.deaths = formatNumber(d.deaths)
  //             d.deltaconfirmed = formatNumber(d.deltaconfirmed)
  //             d.deltadeaths = formatNumber(d.deltadeaths)
  //             d.deltarecovered = formatNumber(d.deltarecovered)
  //             d.recovered = formatNumber(d.recovered)
  //             return d;
  //           })
  //       return r;
  //     })
  //     .then(r => {
  //       let statewise = r;
  //       return $axios.get('https://api.covid19india.org/v2/state_district_wise.json')
  //         .then(res => {
  //           let md = res.data.map(d => {
  //             if (d.state == 'Uttarakhand') {
  //               d.statecode = 'UT'
  //             }
  //             return d;
  //           });
  //           return { stateData: statewise, stateDistrict: md }
  //         })
  //     })
  //     .catch(err => {
  //       return { stateData: null, stateDistrict: null }
  //     })
  // },
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
    selectedState(statecode) {
      let stCode = statecode.toUpperCase();
      let p = this.stateData.filter(state => state.statecode == stCode)
      return p[0]
    },
    getUpdatedDate(date) {
      this.updated = moment(date, 'DD/MM/YYYY HH:mm:ss').fromNow()
    },
    formatData() {
      let statew = this.statewise.filter(d => d.statecode !== 'TT')
        .map(d => {
          d.active = formatNumber(d.active)
          d.confirmed = formatNumber(d.confirmed)
          d.deaths = formatNumber(d.deaths)
          d.deltaconfirmed = formatNumber(d.deltaconfirmed)
          d.deltadeaths = formatNumber(d.deltadeaths)
          d.deltarecovered = formatNumber(d.deltarecovered)
          d.recovered = formatNumber(d.recovered)
          return d;
        });

      let districtw = this.districtwise.map(d => {
        if (d.state == 'Uttarakhand') {
            d.statecode = 'UT'
          }
          return d;
        });

      this.stateData = statew;
      this.stateDistrict = districtw
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
      if (this.currentDistricts.length) {
        this.currentDistricts = this.currentDistricts[0].districtData;
      } else {
        this.currentDistricts = []
      }
    },
    changeNumber(number) {
      return formatNumber(number);
    },
  },
  // mounted() {
  //   // this.getTimelineData();
  //   // this.getTopDistricts($nuxt.$route.params.statecode);
  // },
  beforeMount() {
    this.$axios.get('https://api.covid19india.org/data.json')
      .then(res => {
        this.statewise = res.data.statewise
      })
      .then(() => {
        this.$axios.get('https://api.covid19india.org/v2/state_district_wise.json')
          .then(res => {
            this.districtwise = res.data;
            this.formatData();
            this.getTimelineData();
            this.getTopDistricts($nuxt.$route.params.statecode);
          })
      })
      .catch(err => {
        this.stateData = null
        this.stateDistrict = null
      })
  }
}
</script>

<style>

</style>