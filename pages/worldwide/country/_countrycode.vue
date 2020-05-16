<template>
  <div class="p-3 sm:py-8 sm:px-6 md:px-12 min-h-screen min-h-web-kit">
    <div class="mb-6 text-black flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <p class="mb-5 sm:mb-0 text-xs font-semibold select-none">
        <n-link to="/"><span class="mr-1 cursor-pointer hover:underline text-black">Home</span></n-link>
        <span>/</span>
        <span class="ml-1 text-black">{{ countryName }}</span>
      </p>
      <div>
        <select-option :countries="countries" :selectedCountry="selectedCountry"></select-option>
      </div>
    </div>
    <div class="mb-8">
      <h1 class="text-black text-2xl sm:text-4xl font-semibold">{{ countryName }}</h1>
      <p class="text-black text-xs2 sm:text-xs">Last updated {{ fromNow(updated_at) }}</p>
    </div>
    <div class="mb-8">
      <card-country :countryCode="$nuxt.$route.params.countrycode"></card-country>
    </div>
    <country-timeline-worldwide class="mt-8" :countryCode="$nuxt.$route.params.countrycode"></country-timeline-worldwide>
    <country-daily-timeline-worldwide class="mt-8" :countryCode="$nuxt.$route.params.countrycode"></country-daily-timeline-worldwide>
  </div>
</template>

<script>
import cardCountry from '~/components/worldwide/card-country-worldwide'
import countryTimelineWorldwide from '~/components/worldwide/country-timeline-worldwide'
import countryDailyTimelineWorldwide from '~/components/worldwide/country-daily-timeline-worldwide'
import selectOption from '~/components/worldwide/select-option-list'
import moment from 'moment'

export default {
  head() {
    return {
      title: this.countryName? this.countryName+' - Coronavirus in '+this.countryName : 'Coronavirus cases worlwide'
    }
  },
  components: {
    cardCountry,
    countryTimelineWorldwide,
    countryDailyTimelineWorldwide,
    selectOption
  },
  asyncData({ route, $axios }) {
    return $axios.get('https://corona-api.com/countries')
      .then(res => {
        let selectedCountry;
        let countryName;
        let updated_at;
        let countries = [];

        res.data.data.map(d => {
          if (d.code == route.params.countrycode) {
            selectedCountry = {
              name: d.name,
              code: d.code
            }
            countryName = d.name
            updated_at = d.updated_at
          }
          countries.push({
            name: d.name,
            code: d.code
          })
        })

        return { countryName: countryName, selectedCountry: selectedCountry, countries: countries, updated_at: updated_at }
      })
      .catch(err => {
        return { countryName: route.params.countrycode, countries: [], updated_at: '', selectedCountry: '' }
      })
  },
  data() {
    return {
      countries: [],
      selectedCountry: '',
      countryName: '',
      updated_at: ''
    }
  },
  methods: {
    fromNow(date) {
      return moment(date).fromNow()
    }
  }
}
</script>

<style>

</style>